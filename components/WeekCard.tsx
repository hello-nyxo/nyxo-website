import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { normalizeImageUrl, type ContentfulEntry } from "@/lib/contentful";

interface WeekCardProps {
  week: ContentfulEntry;
  weekLabel: string;
  /** First card in the grid renders eagerly; it is close to the fold. */
  priority?: boolean;
}

export default function WeekCard({ week, weekLabel, priority }: WeekCardProps) {
  const fields = week.fields;
  const coverPhoto = fields.coverPhoto as
    | { fields: { file: { url: string } } }
    | undefined;
  const coverUrl = normalizeImageUrl(coverPhoto?.fields?.file?.url);

  return (
    <Link
      href={`/coaching/weeks/${String(fields.slug)}`}
      className="group block h-full no-underline"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-colors duration-300 hover:border-brand-blue/30">
        {coverUrl && (
          <div className="relative aspect-16/10 overflow-hidden">
            <Image
              src={coverUrl}
              alt=""
              fill
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <span className="text-sm font-semibold text-brand-blue">
            {weekLabel}
          </span>
          <h3 className="mt-2 font-serif text-2xl leading-snug text-brand-deep transition-colors group-hover:text-brand-blue sm:text-[1.75rem]">
            {String(fields.weekName)}
          </h3>
          <p className="mt-3 line-clamp-3 leading-relaxed text-text-secondary">
            {String(fields.intro)}
          </p>
        </div>
      </article>
    </Link>
  );
}
