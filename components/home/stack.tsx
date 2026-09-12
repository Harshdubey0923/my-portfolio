import { TechIcon } from "@/components/common/tech-icon"
import { SectionHeading } from "@/components/layout/section-heading"
import { chipClass } from "@/lib/button-styles"
import { stack } from "@/lib/content/stack"
import { sectionIds } from "@/lib/content/site"
import { cn } from "@/lib/utils"

/**
 * One row per category - the label sits in a fixed column on desktop
 * and stacks above the chips on mobile. Same hairline rows as
 * Experience/Education so the section reads as part of the page,
 * and the groups stop the chips blurring into one long run.
 */
export function Stack() {
  return (
    <section aria-labelledby={sectionIds.stack}>
      <SectionHeading id={sectionIds.stack}>Skills</SectionHeading>

      <ul className="pt-px">
        {stack.map((group) => (
          <li
            key={group.id}
            className="screen-line-bottom relative px-4 py-4 last:after:hidden sm:px-6"
          >
            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-4">
              <h3 className="text-muted-foreground shrink-0 text-[12px] font-medium tracking-wide uppercase sm:w-44 sm:pt-1">
                {group.category}
              </h3>

              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill.title} className="flex">
                    {/* A button, not a link: these are labels, and clicking
                        one should feel live - hover, focus ring, the
                        interface click - without navigating away. */}
                    <button
                      type="button"
                      className={cn(chipClass, "cursor-pointer")}
                    >
                      <TechIcon slug={skill.icon} className="size-3.5 shrink-0" />
                      {skill.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Stack
