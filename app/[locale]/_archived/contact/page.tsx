"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("CONTACT");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-brand-purple mb-4">
        {t("TITLE")}
      </h1>
      <p className="text-lg text-text-secondary mb-12">{t("TEXT")}</p>

      {submitted ? (
        <div className="bg-white rounded-2xl p-12 shadow-card text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-brand-purple mb-2">
            Thank you!
          </h2>
          <p className="text-text-secondary">
            We&apos;ll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
            }).then(() => setSubmitted(true));
          }}
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-primary mb-2"
            >
              {t("NAME")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-hairline bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-primary mb-2"
            >
              {t("EMAIL")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-hairline bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-text-primary mb-2"
            >
              {t("SUBJECT")}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 rounded-xl border border-hairline bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text-primary mb-2"
            >
              {t("MESSAGE")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 rounded-xl border border-hairline bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-brand-blue text-white font-semibold rounded-xl hover:bg-brand-purple transition-colors cursor-pointer"
          >
            {t("SEND")}
          </button>
        </form>
      )}
    </section>
  );
}
