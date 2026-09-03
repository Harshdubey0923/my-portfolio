import { SectionHeading } from "@/components/layout/section-heading"
import { achievements, stats } from "@/lib/content/milestones"
import { sectionIds } from "@/lib/content/site"
import { cn } from "@/lib/utils"

/**
 * The headline numbers, above the dated list. Hairline-separated cells
 * rather than cards: the page has no raised surfaces, and four boxes
 * would be the loudest thing on it. 2x2 on a phone, one row from sm.
 *
 * `divide-x` is scoped to each breakpoint's row so no cell ends up with
 * a rule hanging off the column's edge.
 */
function StatStrip() {
  return (
    <dl className="screen-line-bottom relative grid grid-cols-2 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "border-border px-4 py-4 sm:px-3",
            // Top row on a phone keeps a rule under it; every cell but
            // the first in a row keeps one to its left.
            index % 2 === 1 && "border-l sm:border-l",
            index < 2 && "border-b sm:border-b-0",
            index === 2 && "sm:border-l"
          )}
        >
          <dt className="text-muted-foreground text-xs leading-snug">
            {stat.label}
          </dt>
          <dd className="mt-0.5 font-mono text-lg leading-tight font-medium tabular-nums sm:text-xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function Row({
  title,
  meta,
  description,
}: {
  title: string
  meta: string
  description: string
}) {
  return (
    <li className="screen-line-bottom relative last:after:hidden">
      <div className="flex gap-3 p-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
        {/* A drawn dot rather than a real list marker: the row keeps its
            full-bleed hover and divider, which `list-disc` would inset.
            Nudged down to sit on the title's first line. */}
        <span
          aria-hidden
          className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-700 dark:bg-neutral-300"
        />

        <div className="min-w-0 flex-1 space-y-1">
          {/* No flex-wrap: it let the date drop onto its own line under a
              long title. The title wraps inside its own box instead, and
              the date holds the top right. */}
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="min-w-0 text-base leading-snug font-medium text-balance">
              {title}
            </h3>
            <span className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">
              {meta}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </li>
  )
}

export function Achievements() {
  return (
    <section aria-labelledby={sectionIds.achievements}>
      <SectionHeading id={sectionIds.achievements}>Milestones</SectionHeading>
      <StatStrip />
      <ul className="pt-px">
        {achievements.map((item) => (
          <Row
            key={item.title}
            title={item.title}
            meta={item.date}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  )
}
