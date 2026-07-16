import Image from "next/image"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { ClientsMarquee } from "@/components/clients-marquee"
import { EnquiryForm } from "@/components/enquiry-form"
import type { CourseDetail } from "@/lib/course-details"

const STAR_PATH =
  "M6.52447 0.463524C6.67415 0.00286844 7.32585 0.00286992 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"

export function CourseDetailPage({ course }: { course: CourseDetail }) {
  return (
    <main className="min-h-[40vh]">
      <section
        className="relative overflow-hidden bg-secondary text-white"
        aria-label={course.imageAlt}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${course.imageSrc}')` }}
          aria-hidden
        />
        <div className="hero-gradient-r" aria-hidden />

        <div className="site-container relative grid min-h-[32rem] items-center gap-8 py-14 md:min-h-[36rem] md:grid-cols-[1.3fr_0.75fr] md:gap-20 md:py-20 lg:gap-24">
          <div className="text-white">
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-white/80 md:mb-5"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="inline-flex items-center text-white/65" aria-hidden>
                <ChevronRightIcon className="size-3.5" />
              </span>
              <Link href="/courses" className="hover:text-white">
                Courses
              </Link>
              <span className="inline-flex items-center text-white/65" aria-hidden>
                <ChevronRightIcon className="size-3.5" />
              </span>
              <span
                className="max-w-[min(100%,18rem)] truncate text-white md:max-w-[28rem]"
                aria-current="page"
              >
                {course.pageTitle}
              </span>
            </nav>
            <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-white">
              <div className="flex items-center gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} viewBox="0 0 14 13" className="h-3.5 w-3.5 fill-[#FEC84B]">
                    <path d={STAR_PATH} />
                  </svg>
                ))}
              </div>
              <span>5 stars from 40+ reviews</span>
            </div>

            <h1 className="mt-4 text-balance text-white">
              {course.heroTitle} — {course.code}
            </h1>
            <p className="mt-5 text-base text-white/85 md:text-lg">{course.heroSubtitle}</p>

            {course.price ? (
              <div className="mt-6 max-w-lg rounded-xl border border-white/25 bg-white/10 p-4 shadow-sm md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 md:text-sm">Pricing from</p>
                <p className="mt-2 text-xl font-bold leading-snug tracking-tight text-white md:text-2xl lg:text-3xl">
                  {course.price}
                </p>
              </div>
            ) : null}
          </div>

          <div className="grid gap-3">
            <div className="rounded-xl border border-border bg-white p-4 text-foreground shadow-xl md:p-5">
              <p className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Enquire Now</p>
              <EnquiryForm fieldPrefix={`course-${course.slug}-hero`} textareaClassName="min-h-28" />
            </div>
            <div className="rounded-xl border border-border bg-white/95 p-3 text-foreground shadow-lg md:p-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/allens.avif"
                  alt="Allens Training logo"
                  width={96}
                  height={96}
                  className="h-12 w-12 shrink-0 rounded-md object-contain md:h-14 md:w-14"
                />
                <p className="text-sm font-semibold leading-snug md:text-base">
                  Training and Assessment delivered on behalf of{" "}
                  <a
                    href="https://www.allenstraining.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Allens Training Pty Ltd RTO 90909
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="site-container">
          <div className="grid items-start gap-12 md:gap-16 lg:grid-cols-[1fr_minmax(260px,440px)] lg:gap-20 xl:gap-24">
            <div className="min-w-0 space-y-10 md:space-y-12">
              <div>
                <h2>Course Description</h2>
                <div className="mt-5 space-y-4">
                  {course.description.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {course.sections.map((section) => (
                  <section key={section.title} className="rounded-2xl border border-border bg-background p-5 md:p-6">
                    <h3>{section.title}</h3>
                    {section.paragraphs?.length ? (
                      <div className="mt-3 space-y-2">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : null}
                    {section.bullets?.length ? (
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-border md:aspect-[3/2] lg:mx-0 lg:max-w-none lg:sticky lg:top-28">
              <Image
                src={course.imageSrc}
                alt={course.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-2 md:pt-6 md:pb-4">
        <div className="site-container">
          <h2 className="text-center text-balance">
            Australian organisations accredited through our training
          </h2>
        </div>
      </section>
      <ClientsMarquee />
    </main>
  )
}
