import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { normalizeImageUrl, type ContentfulEntry } from "@/lib/contentful";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface WeekCardProps {
  week: ContentfulEntry;
  index: number;
  weekLabel: string;
}

export default function WeekCard({ week, index, weekLabel }: WeekCardProps) {
  const fields = week.fields;
  const coverPhoto = fields.coverPhoto as
    | { fields: { file: { url: string } } }
    | undefined;
  const coverUrl = normalizeImageUrl(coverPhoto?.fields?.file?.url);

  return (
    <AnimateOnScroll delay={index * 100}>
      <Link
        href={`/coaching/weeks/${String(fields.slug)}`}
        className="group block no-underline h-full"
      >
        <div className="bg-white rounded-2xl overflow-hidden border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1">
          {coverUrl && (
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={coverUrl}
                alt={String(fields.weekName)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          )}
          <div className="p-5">
            <span className="text-xs font-semibold text-brand-blue">
              {weekLabel}
            </span>
            <h3 className="text-lg font-semibold font-sans text-text-primary mt-1 group-hover:text-brand-blue transition-colors">
              {String(fields.weekName)}
            </h3>
            <p className="text-sm text-text-secondary mt-2 line-clamp-2">
              {String(fields.intro)}
            </p>
          </div>
        </div>
      </Link>
    </AnimateOnScroll>
  );
}
