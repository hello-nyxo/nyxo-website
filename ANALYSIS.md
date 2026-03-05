# Nyxo Website — Project Analysis

**Date**: 2026-03-05
**Stack**: Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Contentful CMS · next-intl · Bun

---

## 1. Critical Bugs

### 1.1 XSS in `renderRichText` — HTML injection via Contentful

**Files**: `lib/contentful.ts:329`, `lib/contentful.ts:336`

The `renderRichText` function interpolates CMS values directly into raw HTML
strings without escaping:

```ts
return `<img src="${src}" alt="${title}" .../>`;
return `<a href="${url}" ...>${text}</a>`;
```

If a Contentful entry contains a `title` like `" onload="alert(1)` or a URL
like `javascript:alert(1)`, the resulting HTML — rendered via
`dangerouslySetInnerHTML` in 6+ page templates — will execute arbitrary
JavaScript in the visitor's browser.

**Impact**: Stored XSS. Any Contentful editor (or compromised account) can
inject scripts that steal sessions, redirect users, or deface pages.

**Fix**: Escape all interpolated values (use a library like `he` or
`DOMPurify`), and validate URLs against an allow-list of protocols
(`https:`, `http:`, `mailto:`).

---

### 1.2 Silent Contentful failure — entire coaching section disappears

**File**: `lib/contentful.ts:7-14`

```ts
function getClient() {
  if (!space || !accessToken) return null; // silent failure
}
```

When `CONTENTFUL_SPACE_ID` or `CONTENTFUL_ACCESS_TOKEN` are missing or
invalid, every `get*()` function returns an empty array or `null` with **no
log and no error**. The homepage, coaching pages, and sitemap generator all
silently render empty content. A deployment with a missing `.env` variable
produces a site that *looks* fine but has zero coaching content.

**Impact**: Complete loss of dynamic content in production with no alerting.

**Fix**: Log a clear warning at startup. Consider throwing during `next build`
if the variables are absent, or at minimum render an explicit "content
unavailable" fallback.

---

### 1.3 Locale mismatch — sitemap declares 6 locales, app only supports 2

**Files**: `next-sitemap.config.js:7` vs `lib/i18n/routing.ts:4`

The sitemap generator declares `["en", "fi", "es", "de", "sv", "fr"]` and
produces `<xhtml:link hreflang="...">` entries for all six. But `next-intl`
routing only defines `["en", "fi"]`. Search engines will receive alternate
links pointing to locales that return 404s, harming SEO.

**Impact**: SEO penalty from broken hreflang annotations.

**Fix**: Align the sitemap config with the actual routing locales.

---

### 1.4 Root 404 page uses non-localized `Link`

**File**: `app/not-found.tsx:1`

```ts
import Link from "next/link"; // should be @/lib/i18n/navigation
```

The root `not-found.tsx` imports Next.js's plain `Link` instead of the
i18n-aware `Link`. The "Go Home" link always navigates to `/` regardless of
locale, and misses locale-prefixed routing entirely. A Finnish user hitting a
404 gets sent to the English homepage.

**Fix**: Import `Link` from `@/lib/i18n/navigation`.

---

### 1.5 Newsletter form does nothing

**File**: `components/NewsletterForm.tsx:12-16`

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;
  setSubmitted(true); // ← no API call, email is discarded
};
```

The form shows "Thank You for subscribing!" but the email address is never
sent anywhere — no API route, no third-party service, nothing. Every
"subscriber" is lost.

**Impact**: User-facing feature is completely non-functional.

**Fix**: Integrate with a real newsletter service (e.g. Mailchimp, Resend,
ConvertKit) or add a Next.js API route that stores subscriptions.

---

### 1.6 `normalizeImageUrl` allows dangerous URI schemes

**File**: `lib/contentful.ts:25-28`

```ts
export function normalizeImageUrl(url?: string): string | undefined {
  if (!url) return undefined;
  return url.startsWith("//") ? `https:${url}` : url;
}
```

This only handles protocol-relative URLs. A `javascript:`, `data:`, or
`vbscript:` URL passes through unchecked and could be rendered into `<img
src>` or `<a href>` attributes.

**Fix**: Validate that the URL starts with `https://` or `http://` after
normalization.

---

## 2. Improvement Needs

### 2.1 Type safety — `any` everywhere for Contentful data

`ContentfulEntry` is typed as `any` (line 23), and all field accesses use
`as string`, `as number`, etc. with no runtime validation. A Contentful
schema change silently breaks pages at runtime.

**Recommendation**: Define Zod schemas or TypeScript interfaces for each
content type and validate at the fetch boundary.

### 2.2 No tests at all

There are zero test files (`.test.*`, `.spec.*`) in the entire project. No
unit tests, no integration tests, no E2E tests.

**Recommendation**: Add at minimum:
- Unit tests for `lib/markdown.ts` (excerpt generation, image path resolution)
- Unit tests for `lib/contentful.ts` (serialization, rich text rendering)
- E2E smoke tests for critical pages (homepage, blog post, coaching lesson)

### 2.3 Unhandled markdown rendering errors

**File**: `lib/markdown.ts:119, 159`

`remark().use(html).process()` is called without try-catch. A malformed
markdown file will crash the entire page render with an unhandled rejection.

**Recommendation**: Wrap in try-catch and return a fallback error message.

### 2.4 Missing translations for 4 configured locales

The sitemap advertises Spanish, German, Swedish, and French, but
`messages/` only contains `en.json` and `fi.json`. There are no translation
files for `es`, `de`, `sv`, or `fr`.

### 2.5 Hardcoded "Week" label in English

**File**: `app/[locale]/page.tsx:204`

```tsx
<span>Week {fields.order as number}</span>
```

This string is hardcoded in English and never translated, even on the Finnish
locale.

### 2.6 No error boundaries

There are no React error boundaries anywhere in the component tree. A single
rendering error in a coaching lesson or blog post crashes the entire page
with no fallback UI.

### 2.7 No loading states for dynamic content

Contentful-backed pages have no loading/skeleton states. If content fetching
is slow, users see nothing until the full server render completes.

### 2.8 Accessibility gaps

- `AnimateOnScroll` component may prevent content from being visible to users
  with `prefers-reduced-motion`
- No skip-to-content link in the header
- Quiz buttons in `Questionnaire.tsx` don't announce correct/incorrect to
  screen readers (missing `aria-live` regions)
- The root 404 page has emoji as the primary visual indicator with no text
  alternative

---

## 3. Feature Recommendations

### 3.1 Search functionality
The `CommandPalette` component exists but there's no evidence of a search
index or search API. Implementing full-text search across blog posts,
lessons, and habits (using something like Fuse.js client-side or Algolia)
would significantly improve content discoverability.

### 3.2 Blog post localization
Blog content is only in `content/blog/` with no locale variants. The
Finnish translation of the UI wraps English-only blog posts. Supporting
localized blog content (via locale subdirectories or Contentful) would serve
the Finnish audience.

### 3.3 Reading progress indicator
For long-form lesson and blog content, a reading progress bar would improve
user engagement and provide a sense of completion.

### 3.4 Sleep tracker integration page
The homepage mentions sleep tracker integration but there's no dedicated page
explaining supported trackers, setup instructions, or compatibility info.
This is a key selling point that deserves its own landing page.

### 3.5 Dark mode
Given the sleep/nighttime theme, a dark mode toggle would be both on-brand
and improve the experience for users reading at night. The "night sky" design
language already exists in the hero and newsletter sections.

### 3.6 Coaching progress tracking
Currently the coaching content is read-only. Adding progress tracking (e.g.
marking lessons as complete, tracking habit streaks) would turn the site from
a content library into an interactive coaching platform — even without the
mobile app.

### 3.7 RSS feed
No RSS feed exists for the blog. Adding one would help with content
distribution and subscriber retention.

### 3.8 Social sharing / Open Graph images
While SEO metadata exists via `lib/seo.ts`, there's no dynamic OG image
generation. Auto-generated social preview images for blog posts and lessons
would improve sharing on social media.

### 3.9 Related content recommendations
Blog posts show related posts by tag, but coaching lessons don't cross-link
to relevant blog content or other lessons. A recommendation system linking
lessons ↔ blog posts ↔ habits would increase engagement.

### 3.10 Contact form integration
The About and Contact pages are archived (`app/[locale]/_archived/`). The
footer still links to Support/Contact. Either restore these pages with
working forms or remove the dead links.
