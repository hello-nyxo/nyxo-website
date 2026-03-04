"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/lib/i18n/navigation";

export default function NewsletterForm() {
  const t = useTranslations("NEWSLETTER");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative night-sky night-sky-glow grain overflow-hidden py-24 px-6">
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white mb-4">
          {t("TITLE")}
        </h2>
        <p className="text-lg text-white/60 mb-10 leading-relaxed">
          {t("DESCRIPTION")}
        </p>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-xl font-medium text-white">
              {t("THANK_YOU")}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("PLACEHOLDER")}
              required
              className="flex-1 px-5 py-3.5 rounded-full bg-white/8 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-brand-blue/50 focus:bg-white/12 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-white text-brand-deep font-semibold rounded-full hover:bg-white/90 hover:shadow-glow transition-all cursor-pointer"
            >
              {t("EMAIL")}
            </button>
          </form>
        )}

        <Link
          href="/privacy"
          className="inline-block mt-5 text-sm text-white/30 hover:text-white/60 no-underline transition-colors"
        >
          {t("PRIVACY")}
        </Link>
      </div>
    </section>
  );
}
