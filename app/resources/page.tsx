import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import type { Metadata } from "next"
import Link from "next/link"
import { getAllResources } from "@/lib/resources"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Free Resources",
  description:
    "Free Miller First Aid PDF guides: anaphylaxis, seizure management, mental health, emotional distress, crisis awareness, and a comprehensive first aid manual.",
  path: "/resources",
})

export default function ResourcesPage() {
  const resources = getAllResources()

  return (
    <main className="min-h-[40vh]">
      <header className="border-b border-border bg-muted/30">
        <div className="site-container py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="text-foreground/90 transition-colors hover:text-primary">
              Home
            </Link>
            <span className="inline-flex items-center text-muted-foreground/80" aria-hidden>
              <ChevronRightIcon className="size-3.5" />
            </span>
            <span className="text-foreground" aria-current="page">
              Free Resources
            </span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-balance text-foreground md:mt-5">Free Resources</h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Download free Miller First Aid PDF guides — anaphylaxis, seizure management, mental health, emotional
            distress, crisis awareness, and a comprehensive first aid manual.
          </p>
        </div>
      </header>

      <section className="py-14 md:py-20">
        <div className="site-container">
          <ul className="grid list-none gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <li key={resource.pdfHref}>
                <a
                  href={resource.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-[5.5rem] items-center rounded-2xl border border-border bg-background px-5 py-4 pr-16 text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-muted/50 md:text-lg"
                >
                  <span className="pr-1">{resource.title} (PDF)</span>
                  <span
                    className="absolute right-4 top-4 flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:text-primary"
                    aria-hidden
                  >
                    <ArrowUpRightIcon className="size-5" strokeWidth={2} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
