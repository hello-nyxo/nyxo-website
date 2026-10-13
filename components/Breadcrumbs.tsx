import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  current: string;
}

export default function Breadcrumbs({ items, current }: BreadcrumbsProps) {
  const locale = useLocale();
  const t = useTranslations("NAVIGATION");
  const jsonLd = generateBreadcrumbJsonLd(locale, t("HOME"), [
    // Fragment links (`/coaching#lessons`) are not separate pages, so the
    // structured trail points at the page itself.
    ...items.map((item) => ({ name: item.name, path: item.href.split("#")[0] })),
    { name: current },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label={t("BREADCRUMB")} className="flex">
        <ol role="list" className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <li>
            <Link
              href="/"
              className="flex text-text-secondary transition-colors hover:text-brand-blue"
            >
              <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
              <span className="sr-only">{t("HOME")}</span>
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.name} className="flex items-center gap-x-3">
              <ChevronRightIcon
                aria-hidden="true"
                className="size-5 shrink-0 text-text-secondary/60"
              />
              <Link
                href={item.href}
                className="text-sm font-medium text-text-secondary no-underline hover:text-brand-blue"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="flex min-w-0 items-center gap-x-3">
            <ChevronRightIcon
              aria-hidden="true"
              className="size-5 shrink-0 text-text-secondary/60"
            />
            <span
              aria-current="page"
              className="line-clamp-1 text-sm font-medium text-text-primary"
            >
              {current}
            </span>
          </li>
        </ol>
      </nav>
    </>
  );
}
