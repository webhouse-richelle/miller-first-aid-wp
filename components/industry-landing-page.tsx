import Image from "next/image"
import Link from "next/link"
import { ClientsMarquee } from "@/components/clients-marquee"
import { EnquiryForm } from "@/components/enquiry-form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CourseOfferingsAccordion } from "@/components/course-offerings-accordion"
import { FooterCta } from "@/components/footer-cta"
import type { IndustryLandingConfig } from "@/lib/industry-landing-types"
import { cn } from "@/lib/utils"

const SITE = "https://www.millerfirstaid.com.au"

const STAR_PATH =
  "M6.52447 0.463524C6.67415 0.00286844 7.32585 0.00286992 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"

function FiveStars({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex shrink-0 items-center gap-0.5", className)}
      aria-label="Rated 5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 14 13"
          className="h-4 w-4 fill-[#FEC84B]"
          aria-hidden
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  )
}

function IndustryLandingJsonLd({ config }: { config: IndustryLandingConfig }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.paragraphs.join(" "),
      },
    })),
  }

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: config.testimonials.items.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: t.author },
        reviewBody: t.quote,
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Miller First Aid",
          url: SITE,
        },
      },
    })),
  }

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: config.courseAccordion.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Course", name: item.title, url: `${SITE}${item.href}` },
    })),
  }

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Miller First Aid",
    url: SITE,
    telephone: "1300 807 669",
    description: config.jsonLd.localBusinessDescription,
    areaServed: [
      { "@type": "City", name: "Sydney" },
      { "@type": "State", name: "New South Wales" },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  )
}

export function IndustryLandingPage({
  config,
}: {
  config: IndustryLandingConfig
}) {
  const courseDescription =
    config.courseAccordion.includeCoursesLinkInDescription ===
    false ? undefined : (
      <>
        We offer accredited and non-accredited first aid courses tailored to
        your sector across Sydney and NSW. Browse our{" "}
        <Link
          href="/courses"
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          full course list
        </Link>{" "}
        or explore recommended options below.
      </>
    )

  return (
    <>
      <IndustryLandingJsonLd config={config} />
      <main className="min-h-[40vh]">
        <section className="relative overflow-hidden bg-secondary text-white">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${config.hero.backgroundImage}')` }}
            aria-hidden
          />
          <div className="hero-gradient-r" aria-hidden />

          <div className="site-container relative grid min-h-[32rem] items-center gap-8 py-14 md:min-h-[36rem] md:grid-cols-[1.3fr_0.75fr] md:gap-20 md:py-20 lg:gap-24">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-white">
                <div className="flex items-center gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      viewBox="0 0 14 13"
                      className="h-3.5 w-3.5 fill-[#FEC84B]"
                    >
                      <path d={STAR_PATH} />
                    </svg>
                  ))}
                </div>
                <span>5 stars from 40+ reviews</span>
              </div>
              <h1 className="text-balance text-white">{config.hero.h1}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-snug font-medium text-white/90 md:max-w-none md:text-base md:leading-relaxed md:text-white/85">
                {config.hero.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-stretch gap-3 text-white">
                <div className="rounded-lg bg-white/10 px-4 py-3">
                  <p className="text-2xl font-bold">13+</p>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-white/75 uppercase">
                    Years Experience
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 px-4 py-3">
                  <p className="text-2xl font-bold">800+</p>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-white/75 uppercase">
                    Certificates Issued
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 px-4 py-3">
                  <p className="text-2xl font-bold">1000+</p>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-white/75 uppercase">
                    Students Trained
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-border bg-white p-4 text-foreground shadow-xl md:p-5">
                <p className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                  {config.hero.formTitle}
                </p>
                <EnquiryForm
                  fieldPrefix={config.hero.formFieldPrefix}
                  textareaClassName="min-h-28"
                />
              </div>
              <div className="rounded-xl border border-border bg-white/95 p-3 text-foreground shadow-lg md:p-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/allens.avif"
                    alt="Allens Training logo"
                    width={96}
                    height={96}
                    className="h-12 w-12 rounded-md object-contain md:h-14 md:w-14"
                  />
                  <p className="text-sm leading-snug font-semibold md:text-base">
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

        <section
          className="border-t border-border py-14 md:py-20"
          aria-labelledby={config.whatWeOffer.sectionId}
        >
          <div className="site-container mx-auto max-w-5xl">
            <h2
              id={config.whatWeOffer.sectionId}
              className="text-center text-balance"
            >
              {config.whatWeOffer.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base text-muted-foreground md:text-lg">
              {config.whatWeOffer.intro}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {config.whatWeOffer.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-background p-5 shadow-sm md:p-6"
                >
                  <div className="overflow-hidden rounded-lg border border-border">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={720}
                      height={420}
                      className="h-40 w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {config.trainedList ? (
          <section
            className="py-14 md:py-20"
            aria-labelledby={config.trainedList.sectionId}
          >
            <div className="site-container mx-auto max-w-4xl">
              <h2
                id={config.trainedList.sectionId}
                className="text-center text-balance"
              >
                {config.trainedList.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
                {config.trainedList.intro}
              </p>
              <ul className="mx-auto mt-8 grid max-w-2xl list-disc gap-x-8 gap-y-1 pl-6 text-base text-muted-foreground sm:grid-cols-2">
                {config.trainedList.names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
            <ClientsMarquee className="mt-10 py-8 md:py-10" />
          </section>
        ) : null}

        <CourseOfferingsAccordion
          headingId={config.courseAccordion.headingId}
          title={config.courseAccordion.title}
          panelIdPrefix={config.courseAccordion.panelIdPrefix}
          description={courseDescription}
          items={config.courseAccordion.items}
        />

        <section
          className="pb-14 md:pb-20"
          aria-labelledby={config.whyChoose.sectionId}
        >
          <div className="site-container">
            <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
              <div className="h-[220px] overflow-hidden rounded-xl md:h-[280px]">
                <Image
                  src={config.whyChoose.imageSrc}
                  alt={config.whyChoose.imageAlt}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold tracking-[0.12em] text-primary uppercase">
                  {config.whyChoose.eyebrow}
                </p>
                <h2 id={config.whyChoose.sectionId} className="text-balance">
                  {config.whyChoose.heading}
                </h2>
                <p className="mt-4 text-base text-muted-foreground md:text-lg">
                  {config.whyChoose.intro}
                </p>
                <div className="mt-6 grid gap-3">
                  {config.whyChoose.tiles.map((tile) => (
                    <div
                      key={tile.title}
                      className="rounded-lg border border-border px-4 py-4 text-foreground/90"
                    >
                      <p className="text-lg font-semibold text-foreground md:text-xl">
                        {tile.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed font-normal text-muted-foreground">
                        {tile.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-14 md:py-20"
          aria-labelledby={config.howItWorks.sectionId}
        >
          <div className="site-container mx-auto max-w-3xl">
            <h2
              id={config.howItWorks.sectionId}
              className="text-center text-balance"
            >
              {config.howItWorks.heading}
            </h2>
            <ol className="mt-8 list-decimal space-y-6 pl-6 text-base text-muted-foreground marker:font-semibold marker:text-foreground md:text-lg">
              {config.howItWorks.steps.map((step) => (
                <li key={step.title}>
                  <span className="font-semibold text-foreground">
                    {step.title}.
                  </span>{" "}
                  {step.body}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="py-14 md:py-20"
          aria-labelledby={config.testimonials.sectionId}
        >
          <div className="site-container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 id={config.testimonials.sectionId} className="text-balance">
                {config.testimonials.heading}
              </h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-5">
              {config.testimonials.items.map((item) => (
                <article
                  key={`${item.author}-${item.quote.slice(0, 40)}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-sm ring-1 ring-foreground/[0.04] transition-shadow duration-300 hover:shadow-md md:p-7 dark:ring-foreground/[0.08]"
                >
                  <div className="flex justify-end border-b border-border/80 pb-4">
                    <FiveStars />
                  </div>

                  <div className="relative mt-4 flex-1">
                    <span
                      className="pointer-events-none absolute -top-1 left-0 font-serif text-5xl leading-none text-primary/[0.12] select-none"
                      aria-hidden
                    >
                      &ldquo;
                    </span>
                    <blockquote className="relative border-l-[3px] border-primary/35 pl-5 text-base leading-relaxed font-semibold text-foreground italic md:text-[1.0625rem]">
                      <p className="m-0">{item.quote}</p>
                    </blockquote>
                  </div>

                  <footer className="mt-6 flex flex-col items-start border-t border-border/80 pt-5 text-left">
                    <p className="font-bold text-foreground">{item.author}</p>
                    <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                      {item.role}
                      <span className="text-muted-foreground/80">
                        , {item.organisation}
                      </span>
                    </p>
                    <Image
                      src={item.logoSrc}
                      alt={item.logoAlt}
                      width={320}
                      height={72}
                      className="mt-5 inline-block h-12 w-auto max-w-full min-w-0 object-contain object-left md:h-14"
                      unoptimized
                    />
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {!config.trainedList ? (
          <>
            <section className="pt-4 pb-2 md:pt-6 md:pb-4">
              <div className="site-container">
                <h2 className="text-center text-balance">
                  Australian organisations accredited through our training
                </h2>
              </div>
            </section>
            <ClientsMarquee />
          </>
        ) : null}

        <section
          className="py-14 md:py-20"
          aria-labelledby={config.faqs.sectionId}
        >
          <div className="site-container mx-auto max-w-3xl">
            <h2 id={config.faqs.sectionId} className="text-center text-balance">
              {config.faqs.heading}
            </h2>
            <Accordion multiple keepMounted className="mt-8">
              {config.faqs.items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="px-4 text-base font-semibold text-foreground md:px-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-base leading-relaxed text-muted-foreground md:px-5 md:text-[1.02rem]">
                    {item.paragraphs.map((p, i) => (
                      <p key={i} className={i > 0 ? "mt-3" : ""}>
                        {p}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <FooterCta
          headingId={config.footerCta.headingId}
          ctaTitle={config.footerCta.ctaTitle}
          ctaSubheading={config.footerCta.ctaSubheading}
          formTitle={config.footerCta.formTitle}
          fieldPrefix={config.footerCta.fieldPrefix}
        />
      </main>
    </>
  )
}
