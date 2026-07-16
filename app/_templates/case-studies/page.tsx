import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getAllCaseStudies } from "@/lib/case-studies"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies",
  description:
    "Explore case studies showing outcomes from Miller First Aid training delivered for schools, childcare centres and workplace teams.",
  path: "/case-studies",
  image: "/classroom.webp",
})

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies()

  return (
    <main className="min-h-[40vh] py-14 md:py-20">
      <section className="site-container">
        <div className="mx-auto max-w-4xl text-center">
          <h1>Case Studies</h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Real outcomes from paramedic-led first aid training delivered for schools, childcare
            centres, and workplace teams.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/case-studies/${caseStudy.slug}`}
              className="block overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={caseStudy.imageSrc}
                  alt={caseStudy.organisation}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold text-primary">{caseStudy.organisation}</p>
                <h3 className="mt-2 text-2xl">{caseStudy.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  {caseStudy.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseStudy.courseCodes.map((code) => (
                    <span
                      key={code}
                      className="rounded-md bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground"
                    >
                      {code}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">
                  Read case study
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
