import { Link } from "@/lib/i18n/navigation";

export default function NotFound() {
  return (
    <section className="relative night-sky night-sky-glow grain min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
      <div className="relative z-10 text-center">
        <p className="text-9xl font-serif font-semibold text-white/10 mb-2">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-4">
          This page is sleeping
        </h1>
        <p className="text-lg text-white/50 mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-4 bg-white text-brand-deep font-semibold rounded-full no-underline hover:bg-white/90 hover:shadow-glow transition-all"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
