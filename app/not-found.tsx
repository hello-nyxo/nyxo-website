import Link from "next/link";
import "./globals.css";

/**
 * Only reached for requests outside the `[locale]` segment, which the
 * middleware normally prevents. Plain `next/link` is correct here: there is no
 * locale context to be aware of, and `/` resolves to the default locale.
 */
export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="bg-bg-primary font-sans text-text-primary antialiased">
        <main className="flex min-h-[100dvh] items-center justify-center px-4">
          <div className="text-center">
            <p className="font-serif text-7xl font-semibold text-brand-deep">404</p>
            <h1 className="mt-4 text-2xl font-semibold text-brand-deep">
              This page is sleeping
            </h1>
            <p className="mt-3 text-text-secondary">
              The page you are looking for does not exist or has moved.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center rounded-full bg-brand-blue px-8 py-4 font-semibold text-white no-underline transition-colors hover:bg-brand-deep hover:text-white"
            >
              Go to the homepage
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
