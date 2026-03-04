import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="font-sans bg-[#F6F6F9] text-[#202125] antialiased">
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <div className="text-8xl mb-6">🌙</div>
            <h1 className="text-5xl font-bold text-[#2C0B8E] mb-4">404</h1>
            <p className="text-xl text-[#5e6267] mb-8">
              This page is sleeping. It doesn&apos;t exist.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-[#4A5AEF] text-white font-semibold rounded-full no-underline hover:bg-[#2C0B8E] transition-colors"
            >
              Go Home
            </Link>
          </div>
        </section>
      </body>
    </html>
  );
}
