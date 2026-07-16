import type { Metadata } from "next"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { EnquiryForm } from "@/components/enquiry-form"
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/case-studies"
import { buildPageMetadata } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllCaseStudies().map((caseStudy) => ({ slug: caseStudy.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return buildPageMetadata({
      title: "Case Study",
      description: "Read Miller First Aid case studies and client outcomes.",
      path: "/case-studies",
      image: "/classroom.webp",
    })
  }

  return buildPageMetadata({
    title: `${caseStudy.organisation} Case Study`,
    description: caseStudy.summary,
    path: `/case-studies/${caseStudy.slug}`,
    image: caseStudy.imageSrc,
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)
  if (!caseStudy) notFound()

  return (
    <main className="min-h-[40vh] py-14 md:py-20">
      <article className="site-container">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li className="inline-flex items-center text-muted-foreground/70" aria-hidden>
              <ChevronRightIcon className="size-3.5" />
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-foreground">
                Case Studies
              </Link>
            </li>
            <li className="inline-flex items-center text-muted-foreground/70" aria-hidden>
              <ChevronRightIcon className="size-3.5" />
            </li>
            <li className="max-w-[20rem] truncate text-foreground md:max-w-none" aria-current="page">
              {caseStudy.organisation}
            </li>
          </ol>
        </nav>

        <header className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Case Study
          </p>
          <h1 className="mt-3">{caseStudy.title}</h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">{caseStudy.summary}</p>
        </header>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-border">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={caseStudy.imageSrc}
              alt={caseStudy.organisation}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-[1360px] items-start gap-10 xl:grid-cols-[minmax(0,760px)_minmax(0,320px)] xl:gap-16">
          <div className="min-w-0 space-y-10">
            <section className="rounded-2xl border border-border bg-background p-5 md:p-6">
              <h2 className="text-3xl">At a Glance</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg bg-muted px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Organisation
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{caseStudy.organisation}</p>
                </div>
                <div className="rounded-lg bg-muted px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Contact
                  </p>
                  <p className="mt-1 font-semibold text-foreground">
                    {caseStudy.contactName}, {caseStudy.role}
                  </p>
                </div>
                <div className="rounded-lg bg-muted px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Location
                  </p>
                  <p className="mt-1 font-semibold text-foreground">{caseStudy.location}</p>
                </div>
                <div className="rounded-lg bg-muted px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Participants
                  </p>
                  <p className="mt-1 font-semibold text-foreground">
                    {caseStudy.participants ? `${caseStudy.participants}+ trained` : "Custom cohort"}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {caseStudy.courseCodes.map((code) => (
                  <span
                    key={code}
                    className="rounded-md bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground"
                  >
                    {code}
                  </span>
                ))}
                {caseStudy.sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/85"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl">About the Client</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {caseStudy.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-3xl">Services We Provided</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {caseStudy.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl">Outcomes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {caseStudy.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-muted p-5 md:p-6">
              <h2 className="text-3xl">Client Feedback</h2>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/90 md:text-lg">
                &ldquo;{caseStudy.testimonial}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {caseStudy.contactName}, {caseStudy.role}
              </p>
              <p className="text-sm text-muted-foreground">{caseStudy.organisation}</p>
            </section>
          </div>

          <aside className="xl:sticky xl:top-24">
            <div className="rounded-2xl border border-border bg-background p-5 md:p-6">
              <h3 className="text-2xl">Want similar outcomes?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your team and we&apos;ll recommend the right training format.
              </p>
              <div className="mt-4">
                <EnquiryForm fieldPrefix={`case-study-${caseStudy.slug}`} textareaClassName="min-h-24" />
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
