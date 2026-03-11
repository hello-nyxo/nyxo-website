import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { normalizeImageUrl, type ContentfulEntry } from "@/lib/contentful";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface LessonCardProps {
  lesson: ContentfulEntry;
  index: number;
}

export default function LessonCard({ lesson, index }: LessonCardProps) {
  const fields = lesson.fields;
  const cover = fields.cover as
    | { fields: { file: { url: string } } }
    | undefined;
  const coverUrl = normalizeImageUrl(cover?.fields?.file?.url);

  return (
    <AnimateOnScroll delay={index * 80}>
      <Link
        href={`/coaching/lessons/${String(fields.slug)}`}
        className="group block no-underline h-full"
      >
        <div className="bg-white rounded-2xl overflow-hidden border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 h-full hover:-translate-y-1">
          {coverUrl && (
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={coverUrl}
                alt={String(fields.lessonName)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="p-5">
            <h3 className="text-base font-semibold font-sans text-text-primary line-clamp-2 group-hover:text-brand-blue transition-colors">
              {String(fields.lessonName)}
            </h3>
          </div>
        </div>
      </Link>
    </AnimateOnScroll>
  );
}
