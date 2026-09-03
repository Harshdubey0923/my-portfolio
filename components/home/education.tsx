import Image from "next/image"

import { SectionHeading } from "@/components/layout/section-heading"
import { chipClass } from "@/lib/button-styles"
import { education, type Education } from "@/lib/content/education"
import { sectionIds } from "@/lib/content/site"
import { cn } from "@/lib/utils"

/**
 * Deliberately the Experience row's header, minus the detail block: a
 * degree carries the same four facts a role does, and drawing them
 * differently would make the page read as two unrelated timelines.
 *
 * The grade sits on the second line as a chip rather than in the date
 * slot - the dates own the trailing edge everywhere else on the page.
 */
function EducationRow({ item }: { item: Education }) {
  return (
    <li className="screen-line-bottom relative px-4 py-5 last:after:hidden sm:px-6">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center select-none">
          {item.logo ? (
            <Image
              src={item.logo}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-[10px] object-cover"
            />
          ) : (
            <span className="text-muted-foreground flex size-10 items-center justify-center rounded-[10px] bg-neutral-200 text-sm font-semibold dark:bg-neutral-800">
              {item.institution.charAt(0)}
            </span>
          )}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-foreground min-w-0 truncate text-[15px] leading-snug font-semibold">
              {item.website ? (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
                >
                  {item.institution}
                </a>
              ) : (
                item.institution
              )}
            </h3>

            <p className="text-muted-foreground shrink-0 text-xs tabular-nums">
              {item.period.start} - {item.period.end ?? "Present"}
            </p>
          </div>

          <p className="text-muted-foreground truncate text-[13px] leading-snug">
            {item.degree} <span aria-hidden>•</span> {item.location}
          </p>
        </div>
      </div>

      {(item.field || item.grade) && (
        <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:ml-[52px]">
          {item.field && (
            <span className={cn(chipClass, "px-1.5 py-0.5 text-[11px]")}>
              {item.field}
            </span>
          )}
          {item.grade && (
            <span className={cn(chipClass, "px-1.5 py-0.5 text-[11px]")}>
              {item.grade}
            </span>
          )}
        </div>
      )}
    </li>
  )
}

export function EducationSection() {
  return (
    <section aria-labelledby={sectionIds.education}>
      <SectionHeading id={sectionIds.education} className="pb-2">
        Education
      </SectionHeading>
      <ul className="pt-px">
        {education.map((item) => (
          <EducationRow key={item.id} item={item} />
        ))}
      </ul>
    </section>
  )
}

export default EducationSection
