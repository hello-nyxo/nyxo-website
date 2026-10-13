import { Link } from "@/lib/i18n/navigation";
import { type ContentfulEntry } from "@/lib/contentful";

interface HabitChipProps {
  habit: ContentfulEntry;
}

/**
 * A habit is a single short label, so it does not earn a card. Grouping by
 * period (see the homepage) carries the meaning the period badge used to.
 */
export default function HabitChip({ habit }: HabitChipProps) {
  const fields = habit.fields;

  return (
    <Link
      href={`/coaching/habits/${String(fields.slug)}`}
      className="inline-flex rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-text-primary no-underline transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
    >
      {String(fields.title)}
    </Link>
  );
}
