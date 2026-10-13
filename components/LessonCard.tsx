import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { normalizeImageUrl, type ContentfulEntry } from "@/lib/contentful";

interface LessonCardProps {
  lesson: ContentfulEntry;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  const fields = lesson.fields;
  const cover = fields.cover as
    | { fields: { file: { url: string } } }
    | undefined;
  const coverUrl = normalizeImageUrl(cover?.fields?.file?.url);

  return (
    <Link
      href={`/coaching/lessons/${String(fields.slug)}`}
      className="group block h-full no-underline"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-colors duration-300 hover:border-brand-blue/30">
        {coverUrl && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={coverUrl}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 80vw, 300px"
            />
          </div>
        )}
        <div className="flex flex-1 items-start p-5">
          <h3 className="font-sans text-base leading-snug font-semibold text-text-primary transition-colors group-hover:text-brand-blue">
            {String(fields.lessonName)}
          </h3>
        </div>
      </article>
    </Link>
  );
}
