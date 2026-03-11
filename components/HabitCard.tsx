import { Link } from "@/lib/i18n/navigation";
import { type ContentfulEntry } from "@/lib/contentful";
import { periodColor } from "@/lib/utils";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface HabitCardProps {
  habit: ContentfulEntry;
  index: number;
}

export default function HabitCard({ habit, index }: HabitCardProps) {
  const fields = habit.fields;

  return (
    <AnimateOnScroll delay={index * 60}>
      <Link
        href={`/coaching/habits/${String(fields.slug)}`}
        className="group block no-underline"
      >
        <div className="bg-white rounded-2xl p-6 border border-hairline hover:border-brand-blue/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${periodColor(fields.period)}`}
          >
            {String(fields.period)}
          </span>
          <h3 className="text-base font-semibold font-sans text-text-primary group-hover:text-brand-blue transition-colors">
            {String(fields.title)}
          </h3>
        </div>
      </Link>
    </AnimateOnScroll>
  );
}
