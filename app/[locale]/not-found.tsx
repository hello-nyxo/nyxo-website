import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NOT_FOUND");
  return (
    <section className="relative night-sky night-sky-glow grain min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
      <div className="relative z-10 text-center">
        <p aria-hidden="true" className="text-9xl font-serif font-semibold text-white/15 mb-2">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-4">
          {t("TITLE")}
        </h1>
        <p className="text-lg text-white/80 mb-10 max-w-md mx-auto">{t("TEXT")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white text-brand-deep font-semibold rounded-full no-underline transition-transform hover:-translate-y-0.5 hover:text-brand-deep"
          >
            {t("HOME")}
          </Link>
          <Link
            href="/coaching"
            className="inline-flex items-center px-8 py-4 font-semibold text-white rounded-full no-underline ring-1 ring-white/40 transition-colors hover:bg-white/10 hover:text-white"
          >
            {t("COACHING")}
          </Link>
        </div>
      </div>
    </section>
  );
}
