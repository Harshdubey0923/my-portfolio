"use client"

import Image from "next/image"
import { useId, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { TechIcon, slugForTech } from "@/components/common/tech-icon"
import { SectionHeading } from "@/components/layout/section-heading"
import { chipClass } from "@/lib/button-styles"
import { experiences, type Experience } from "@/lib/content/experience"
import { sectionIds } from "@/lib/content/site"
import { cn } from "@/lib/utils"

/**
 * One entry per role: the header line is logo, company, "role •
 * location" and the dates, and the detail block hanging under it carries
 * the product, what was actually built, and the stack it was built on.
 *
 * The detail starts collapsed and opens on hover or click/focus of the
 * header - a chevron on the far right signals it's expandable. Hover
 * opens for anyone skimming with a mouse; click pins it open for touch
 * and keyboard, and toggles it back shut on a second click.
 *
 * The detail is indented to the text column - 40px tile plus the 12px
 * gap - so the bullets line up with the company name rather than the
 * logo, and the row still reads as one block.
 */
function ExperienceRow({ experience }: { experience: Experience }) {
  const [isPinned, setIsPinned] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const detailId = useId()

  const hasDetail = Boolean(
    experience.project ||
      experience.highlights?.length ||
      experience.technologies?.length
  )
  const isOpen = hasDetail && (isPinned || isHovered)

  return (
    <li
      className="screen-line-bottom relative px-4 py-5 last:after:hidden sm:px-6"
      onPointerEnter={(event) => {
        // Touch fires enter on tap but never a matching leave, which would
        // strand isHovered true and make the second tap's toggle a no-op.
        // Restricting this to a real mouse keeps hover a desktop-only cue.
        if (hasDetail && event.pointerType === "mouse") setIsHovered(true)
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsHovered(false)
      }}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          hasDetail && "cursor-pointer"
        )}
        role={hasDetail ? "button" : undefined}
        tabIndex={hasDetail ? 0 : undefined}
        aria-expanded={hasDetail ? isOpen : undefined}
        aria-controls={hasDetail ? detailId : undefined}
        onClick={() => hasDetail && setIsPinned((value) => !value)}
        onKeyDown={(event) => {
          if (!hasDetail) return
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            setIsPinned((value) => !value)
          }
        }}
      >
        <span className="flex size-10 shrink-0 items-center justify-center select-none">
          {experience.logo ? (
            <Image
              src={experience.logo}
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-[10px] object-cover"
            />
          ) : (
            // No logo yet: a neutral tile carrying the company's initial,
            // so the row keeps its rhythm instead of collapsing.
            <span className="text-muted-foreground flex size-10 items-center justify-center rounded-[10px] bg-neutral-200 text-sm font-semibold dark:bg-neutral-800">
              {experience.company.charAt(0)}
            </span>
          )}
        </span>

        {/* Two lines at every width: company and dates share the first,
            role and location take the second. The dates used to drop below
            the role on small screens, which is what pushed each entry to
            three lines on a phone. */}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-foreground min-w-0 truncate text-[15px] leading-snug font-semibold">
              {experience.website ? (
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
                  onClick={(event) => event.stopPropagation()}
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </h3>

            <div className="flex shrink-0 items-center gap-1.5">
              <p className="text-muted-foreground text-xs tabular-nums">
                {experience.period.start} -{" "}
                {experience.period.end ?? "Present"}
              </p>

              {hasDetail && (
                <motion.span
                  aria-hidden
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  className="text-muted-foreground flex size-4 items-center justify-center"
                >
                  <ChevronDown className="size-3.5" />
                </motion.span>
              )}
            </div>
          </div>

          <p className="text-muted-foreground truncate text-[13px] leading-snug">
            {experience.role} <span aria-hidden>•</span> {experience.location}
          </p>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={detailId}
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="overflow-hidden"
          >
            <div className="mt-3 space-y-3 sm:ml-[52px]">
              {experience.project && (
                <p className="text-foreground/90 text-[13px] leading-snug font-medium">
                  {experience.project}
                </p>
              )}

              {experience.highlights?.length ? (
                <ul className="text-muted-foreground list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed">
                  {experience.highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : null}

              {experience.technologies?.length ? (
                <ul className="flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <li key={tech} className="flex">
                      <span
                        className={cn(
                          chipClass,
                          "gap-1 px-1.5 py-0.5 text-[11px]"
                        )}
                      >
                        <TechIcon
                          slug={slugForTech(tech)}
                          className="size-3 shrink-0"
                        />
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export function ExperienceSection() {
  return (
    <section aria-labelledby={sectionIds.experience}>
      <SectionHeading id={sectionIds.experience} className="pb-2">
        Experience
      </SectionHeading>
      <ul className="pt-px">
        {experiences.map((experience) => (
          <ExperienceRow key={experience.id} experience={experience} />
        ))}
      </ul>
    </section>
  )
}

export default ExperienceSection
