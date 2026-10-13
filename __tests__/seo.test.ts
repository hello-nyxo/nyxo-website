import { describe, it, expect } from "vitest";
import {
  generatePageMetadata,
  generateArticleJsonLd,
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
} from "@/lib/seo";

describe("generatePageMetadata", () => {
  it("generates correct metadata with required fields", () => {
    const metadata = generatePageMetadata({
      title: "Test Page",
      description: "A test description",
      path: "/test",
      locale: "en",
    });

    expect(metadata.title).toBe("Test Page");
    expect(metadata.description).toBe("A test description");
    expect(metadata.openGraph?.title).toContain("Test Page");
    expect((metadata.twitter as { card?: string })?.card).toBe("summary_large_image");
  });

  it("includes alternate language links", () => {
    const metadata = generatePageMetadata({
      title: "Test",
      description: "Test",
      path: "/test",
      locale: "en",
    });

    expect(metadata.alternates?.languages).toBeDefined();
    expect(metadata.alternates?.languages?.["en"]).toContain("/test");
    expect(metadata.alternates?.languages?.["fi"]).toContain("/fi/test");
  });

  it("makes each locale self-canonical", () => {
    const en = generatePageMetadata({ title: "T", description: "D", path: "/blog", locale: "en" });
    const fi = generatePageMetadata({ title: "T", description: "D", path: "/blog", locale: "fi" });
    expect(en.alternates?.canonical).toBe("https://nyxo.app/blog");
    expect(fi.alternates?.canonical).toBe("https://nyxo.app/fi/blog");
    expect(fi.alternates?.languages?.["x-default"]).toBe("https://nyxo.app/blog");
  });

  it("serves the Finnish homepage without a trailing slash", () => {
    const fi = generatePageMetadata({ title: "T", description: "D", path: "/", locale: "fi" });
    expect(fi.alternates?.canonical).toBe("https://nyxo.app/fi");
  });

  it("uses explicit alternate paths for localised slugs", () => {
    const m = generatePageMetadata({
      title: "T",
      description: "D",
      path: "/coaching/lessons/miksi-nukumme",
      locale: "fi",
      alternatePaths: { en: "/coaching/lessons/why-we-sleep", fi: "/coaching/lessons/miksi-nukumme" },
    });
    expect(m.alternates?.languages?.en).toBe("https://nyxo.app/coaching/lessons/why-we-sleep");
    expect(m.alternates?.languages?.fi).toBe("https://nyxo.app/fi/coaching/lessons/miksi-nukumme");
  });

  it("omits hreflang for single-language pages and external canonicals", () => {
    const single = generatePageMetadata({
      title: "T", description: "D", path: "/blog/only-fi", locale: "fi",
      alternatePaths: { fi: "/blog/only-fi" },
    });
    expect(single.alternates?.languages).toBeUndefined();
    const external = generatePageMetadata({
      title: "T", description: "D", path: "/blog/x", locale: "en",
      canonical: "https://example.com/x",
    });
    expect(external.alternates?.canonical).toBe("https://example.com/x");
    expect(external.alternates?.languages).toBeUndefined();
  });

  it("supports absolute titles", () => {
    const m = generatePageMetadata({ title: "Home | Nyxo", description: "D", path: "/", locale: "en", absoluteTitle: true });
    expect(m.title).toEqual({ absolute: "Home | Nyxo" });
  });

  it("sets noIndex when requested", () => {
    const metadata = generatePageMetadata({
      title: "Hidden",
      description: "Hidden page",
      path: "/hidden",
      locale: "en",
      noIndex: true,
    });

    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
});

describe("generateArticleJsonLd", () => {
  it("generates valid article JSON-LD", () => {
    const jsonLd = generateArticleJsonLd({
      title: "Test Article",
      description: "Test description",
      url: "https://nyxo.app/blog/test",
    });

    expect(jsonLd["@context"]).toBe("https://schema.org");
    expect(jsonLd["@type"]).toBe("Article");
    expect(jsonLd.headline).toBe("Test Article");
  });
});

describe("generateOrganizationJsonLd", () => {
  it("generates valid organization JSON-LD", () => {
    const jsonLd = generateOrganizationJsonLd();
    expect(jsonLd["@type"]).toBe("Organization");
    expect(jsonLd.name).toBe("Nyxo");
  });
});

describe("generateWebSiteJsonLd", () => {
  it("generates valid website JSON-LD", () => {
    const jsonLd = generateWebSiteJsonLd();
    expect(jsonLd["@type"]).toBe("WebSite");
    expect(jsonLd.url).toBe("https://nyxo.app");
  });
});
