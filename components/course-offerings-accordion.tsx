"use client"

import { useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CourseOfferingAccordionItem = {
  code: string
  title: string
  href: string
  imageSrc: string
  content: string[]
}

type CourseOfferingsAccordionProps = {
  headingId: string
  title: string
  description?: ReactNode
  items: CourseOfferingAccordionItem[]
  /** Prefix for expandable panel ids (avoid duplicate ids if multiple accordions coexist). */
  panelIdPrefix?: string
  className?: string
}

export function CourseOfferingsAccordion({
  headingId,
  title,
  description,
  items,
  panelIdPrefix = "course-panel",
  className,
}: CourseOfferingsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  return (
    <section className={cn("py-14 md:py-20", className)} aria-labelledby={headingId}>
      <div className="site-container">
        <div className="mb-8 text-center">
          <h2 id={headingId} className="mx-auto max-w-4xl text-balance">
            {title}
          </h2>
          {description ? (
            <div className="mx-auto mt-4 max-w-3xl text-base text-pretty text-muted-foreground md:text-lg">
              {description}
            </div>
          ) : null}
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-background">
          {items.map((course, index) => {
            const isOpen = openIndex === index
            const panelId = `${panelIdPrefix}-${index}`
            return (
              <div
                key={course.href}
                className={cn(
                  "border-b border-border transition-colors duration-300 ease-out last:border-b-0",
                  isOpen && "bg-secondary text-secondary-foreground"
                )}
              >
                <button
                  type="button"
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-5 text-left transition-colors duration-200 md:px-6 md:py-6",
                    !isOpen && "hover:bg-muted/50",
                    isOpen && "text-white"
                  )}
                  onClick={() =>
                    setOpenIndex((current) => (current === index ? -1 : index))
                  }
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span
                      className={cn(
                        "shrink-0 rounded-md px-3 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-300 ease-out",
                        isOpen
                          ? "bg-white/20 text-white"
                          : "bg-primary text-primary-foreground"
                      )}
                    >
                      {course.code}
                    </span>
                    <h3
                      className={cn(
                        "text-left text-base leading-snug transition-colors duration-300 ease-out md:text-xl",
                        isOpen ? "text-white" : "text-foreground"
                      )}
                    >
                      {course.title}
                    </h3>
                  </div>
                  <svg
                    viewBox="0 0 28 28"
                    className={cn(
                      "size-6 shrink-0 transition-[transform,color] duration-300 ease-out",
                      isOpen ? "text-white" : "text-foreground",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden
                  >
                    <path
                      d="M23.3686 11.1188L14.6186 19.8688C14.5373 19.9502 14.4408 20.0147 14.3346 20.0587C14.2284 20.1028 14.1145 20.1254 13.9995 20.1254C13.8845 20.1254 13.7707 20.1028 13.6644 20.0587C13.5582 20.0147 13.4617 19.9502 13.3804 19.8688L4.63045 11.1188C4.46626 10.9546 4.37402 10.7319 4.37402 10.4998C4.37402 10.2676 4.46626 10.0449 4.63045 9.88069C4.79463 9.71651 5.01732 9.62427 5.24951 9.62427C5.4817 9.62427 5.70439 9.71651 5.86857 9.88069L13.9995 18.0127L22.1304 9.88069C22.2117 9.79939 22.3083 9.73491 22.4145 9.69091C22.5207 9.64691 22.6345 9.62427 22.7495 9.62427C22.8645 9.62427 22.9783 9.64691 23.0845 9.69091C23.1908 9.73491 23.2873 9.79939 23.3686 9.88069C23.4499 9.96199 23.5144 10.0585 23.5584 10.1647C23.6024 10.2709 23.625 10.3848 23.625 10.4998C23.625 10.6147 23.6024 10.7286 23.5584 10.8348C23.5144 10.941 23.4499 11.0375 23.3686 11.1188Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <div
                  id={panelId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-4 pb-6 md:px-6 md:pb-8">
                      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                        <div className="space-y-4">
                          {course.content.map((paragraph, pi) => (
                            <p
                              key={`${course.href}-${pi}`}
                              className={cn(
                                "text-base leading-relaxed transition-colors duration-300 ease-out md:text-lg",
                                isOpen
                                  ? "text-white/90"
                                  : "text-muted-foreground"
                              )}
                            >
                              {paragraph}
                            </p>
                          ))}
                          <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Link
                              href="/contact"
                              className={buttonVariants({
                                variant: "default",
                                size: "lg",
                                className: isOpen
                                  ? "bg-primary hover:bg-primary/90"
                                  : "",
                              })}
                            >
                              Enquire Now
                            </Link>
                            <Link
                              href={course.href}
                              className={buttonVariants({
                                variant: "outline",
                                size: "lg",
                                className: cn(
                                  isOpen &&
                                    "border-white/50 bg-transparent text-white hover:bg-white/15 hover:text-white"
                                ),
                              })}
                            >
                              Learn more
                            </Link>
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-2xl lg:min-h-0">
                          <Image
                            src={course.imageSrc}
                            alt={`On site first aid training: ${course.title}`}
                            width={1000}
                            height={640}
                            className="h-auto w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
