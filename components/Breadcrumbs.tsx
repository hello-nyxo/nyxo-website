import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Link } from "@/lib/i18n/navigation";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  current: string;
}

const SITE_URL = "https://nyxo.app";

function generateBreadcrumbJsonLd(items: BreadcrumbItem[], current: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${SITE_URL}${item.href}`,
      })),
      {
        "@type": "ListItem",
        position: items.length + 2,
        name: current,
      },
    ],
  };
}

export default function Breadcrumbs({ items, current }: BreadcrumbsProps) {
  const jsonLd = generateBreadcrumbJsonLd(items, current);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex">
        <ol role="list" className="flex items-center space-x-4">
          <li>
            <Link href="/" className="text-text-muted hover:text-text-secondary transition-colors">
              <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item) => (
            <li key={item.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-text-muted"
                />
                <Link
                  href={item.href}
                  className="ml-4 text-sm font-medium text-text-secondary hover:text-brand-blue no-underline"
                >
                  {item.name}
                </Link>
              </div>
            </li>
          ))}
          <li>
            <div className="flex items-center">
              <ChevronRightIcon
                aria-hidden="true"
                className="size-5 shrink-0 text-text-muted"
              />
              <span
                aria-current="page"
                className="ml-4 text-sm font-medium text-text-primary"
              >
                {current}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
}
