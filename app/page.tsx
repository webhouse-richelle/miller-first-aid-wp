import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { homeFaqItems } from "@/lib/home-faq"
import { ClientsMarquee } from "@/components/clients-marquee"
import { CourseOfferingsSection } from "@/components/course-offerings-section"
import { EnquiryForm } from "@/components/enquiry-form"
import { HomeTestimonials } from "@/components/home-testimonials"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HomePageSeoSchema } from "@/components/home-page-seo-schema"
import { buttonVariants } from "@/components/ui/button"
import { getAllIndustries, getIndustryPagePath } from "@/lib/industries"
import { cn } from "@/lib/utils"
import { FooterCta } from "@/components/footer-cta"
import { SITE_DEFAULT_OG_IMAGE } from "@/lib/seo"

const STAR_PATH =
  "M6.52447 0.463524C6.67415 0.00286844 7.32585 0.00286992 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"

export const metadata: Metadata = {
  title: {
    absolute: "On Site First Aid Training Sydney | Miller First Aid",
  },
  description:
    "On site first aid training in Sydney by specialist paramedics. Nationally accredited CPR & first aid courses delivered at your workplace or school.",
  openGraph: {
    title: "On Site First Aid Training Sydney | Miller First Aid",
    description:
      "On site first aid training in Sydney by specialist paramedics. Nationally accredited CPR & first aid courses delivered at your workplace or school.",
    url: "https://www.millerfirstaid.com.au/",
    siteName: "Miller First Aid",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: SITE_DEFAULT_OG_IMAGE,
        alt: "On site first aid training in a Sydney workplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "On Site First Aid Training Sydney | Miller First Aid",
    description:
      "On site first aid training in Sydney by specialist paramedics. Nationally accredited CPR & first aid courses delivered at your workplace or school.",
    images: [SITE_DEFAULT_OG_IMAGE],
  },
}

export default function Page() {
  return (
    <>
      <HomePageSeoSchema />
      <main className="min-h-[40vh]">
        <section
          className="relative overflow-hidden bg-secondary"
          aria-label="On site first aid training session in a Sydney workplace"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${SITE_DEFAULT_OG_IMAGE}')` }}
            aria-hidden
          />
          <div className="hero-gradient-r" aria-hidden />

          <div className="site-container relative grid min-h-[32rem] items-center gap-8 py-14 md:min-h-[36rem] md:grid-cols-[1.3fr_0.75fr] md:gap-20 md:py-20 lg:gap-24">
            <div className="text-white">
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
              <h1 className="text-balance text-white">
                On Site First Aid Training Sydney: Taught by Leading Specialist
                Paramedics
              </h1>
              <p className="mt-5 text-base text-white/85 md:text-lg">
                Nationally recognised first aid and CPR training delivered
                on-site across Sydney and NSW by active specialist paramedics
                with 13+ years of frontline experience.
              </p>
              <div className="mt-8 flex flex-wrap items-stretch gap-3 text-white">
                <div className="rounded-lg bg-white/10 px-4 py-3">
                  <p className="text-2xl font-bold">800+</p>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-white/75 uppercase">
                    Certificates in 2025
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 px-4 py-3">
                  <p className="text-2xl font-bold">1000+</p>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-white/75 uppercase">
                    Students Trained
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 px-4 py-3">
                  <p className="text-2xl font-bold">13+</p>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-white/75 uppercase">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-border bg-white p-4 text-foreground shadow-xl md:p-5">
                <p className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                  Enquire Now
                </p>
                <EnquiryForm fieldPrefix="hero" textareaClassName="min-h-28" />
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
          className="pt-14 pb-14 md:pt-20 md:pb-20"
          aria-labelledby="trusted-clients-heading"
        >
          <div className="site-container pb-8 md:pb-10">
            <h2
              id="trusted-clients-heading"
              className="mx-auto max-w-4xl text-center text-balance"
            >
              Trusted by 200+ leading schools, healthcare providers, and local
              businesses across NSW
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-base text-muted-foreground md:text-lg">
              Organisations across Australia choose Miller First Aid for
              practical, paramedic-led training that builds real emergency
              response confidence.
            </p>
          </div>
          <ClientsMarquee className="py-0 md:py-0" />
        </section>

        <section aria-hidden>
          <div className="site-container pb-6 md:pb-8">
            <Image
              src="/heartbeat-separator.avif"
              alt="Heartbeat rhythm line separating sections"
              width={2400}
              height={180}
              quality={100}
              className="h-auto w-full object-contain"
            />
          </div>
        </section>

        <section
          className="py-14 md:py-20"
          aria-labelledby="why-choose-heading"
        >
          <div className="site-container grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div>
              <h2 id="why-choose-heading" className="text-balance">
                Why Choose Miller First Aid for On Site Training in Sydney
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                We come to you: your office, school campus, warehouse, childcare
                centre or community venue, with all equipment and resources
                included.
              </p>
              <div className="mt-6 grid gap-4">
                <article className="rounded-xl border border-border bg-background p-5">
                  <h3 className="text-foreground">Expertise</h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    Our active specialist paramedic trainers bring real field
                    experience to every on site first aid course in Sydney,
                    integrating the latest techniques, protocols and best
                    practices from the Australian Resuscitation Council.
                  </p>
                </article>
                <article className="rounded-xl border border-border bg-background p-5">
                  <h3 className="text-foreground">Beyond Certification</h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    We go further than a tick-the-box exercise, building
                    fundamental skills while preparing trainees to manage stress
                    and navigate critical incidents through structured
                    debriefing.
                  </p>
                </article>
                <article className="rounded-xl border border-border bg-background p-5">
                  <h3 className="text-foreground">
                    Customised to Your Industry
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    We use scenario-based training tailored to your workplace,
                    delivering on site first aid training to corporate teams,
                    educators, students and private groups across Greater
                    Sydney, including workplace first aid training and first aid
                    training for schools in Sydney.
                  </p>
                </article>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src="/classroom.webp"
                alt="On site first aid training session in Greater Sydney with paramedic-led instruction and practical equipment"
                width={1200}
                height={900}
                className="h-full min-h-[280px] w-full object-cover sm:min-h-[380px] md:min-h-[420px]"
              />
            </div>
          </div>
        </section>

        <CourseOfferingsSection />

        <section aria-hidden>
          <div className="site-container pb-6 md:pb-8">
            <Image
              src="/heartbeat-separator.avif"
              alt="Heartbeat rhythm line separating sections"
              width={2400}
              height={180}
              quality={100}
              className="h-auto w-full object-contain"
            />
          </div>
        </section>

        <section
          className="py-16 md:py-24"
          aria-labelledby="how-it-works-heading"
        >
          <div className="site-container mx-auto max-w-3xl">
            <h2 id="how-it-works-heading" className="text-center text-balance">
              How It Works
            </h2>
            <ol className="mt-8 list-decimal space-y-6 pl-6 text-base text-muted-foreground marker:font-semibold marker:text-foreground md:text-lg">
              <li>
                <span className="font-semibold text-foreground">Enquiry:</span>{" "}
                Submit your details and tell us about your team size, location
                and preferred dates.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Get a Quote:
                </span>{" "}
                We recommend the best training package for your Sydney workplace
                or school and provide a fixed-price quote.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  We Come to You:
                </span>{" "}
                Our paramedic trainers arrive at your venue across Sydney with
                all equipment, manikins and resources for on site CPR training
                and full first aid programs.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Get Certified:
                </span>{" "}
                Participants receive their nationally recognised certificate
                with fast turnaround after competency assessment.
              </li>
            </ol>
          </div>
        </section>

        <section
          className="border-t border-border bg-muted/40 py-14 md:py-20"
          aria-labelledby="industries-heading"
        >
          <div className="site-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 id="industries-heading" className="text-balance">
                Industries We Train Across Sydney
              </h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Miller First Aid delivers on site first aid training to
                organisations across every industry in Greater Sydney,
                including:
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {getAllIndustries().map((industry) => (
                <Link
                  key={industry.slug}
                  href={getIndustryPagePath(industry.slug)}
                  className="flex flex-col justify-center rounded-2xl border border-border bg-background p-5 text-left transition-colors duration-200 ease-out hover:bg-muted/60"
                >
                  <span className="text-xl font-bold text-foreground md:text-2xl">
                    {industry.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "inline-flex h-12 w-auto items-center justify-center px-8 text-base font-semibold md:h-13 lg:text-lg"
                )}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </section>

        <HomeTestimonials />

        <section className="py-14 md:py-20" aria-labelledby="faq-heading">
          <div className="site-container mx-auto max-w-3xl">
            <h2 id="faq-heading" className="text-center text-balance">
              Frequently Asked Questions About On Site First Aid Training
            </h2>
            <Accordion multiple keepMounted className="mt-8 bg-background">
              {homeFaqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  id={`faq-${item.id}`}
                >
                  <AccordionTrigger className="px-4 text-base font-semibold text-foreground md:px-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-base leading-relaxed text-muted-foreground md:px-5 md:text-[1.02rem]">
                    {item.paragraphs.map((paragraph, i) => (
                      <p key={`${item.id}-p${i}`}>{paragraph}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <FooterCta
          headingId="book-heading"
          ctaTitle="Book On Site First Aid Training in Sydney"
          ctaSubheading="Tell us about your team and we will recommend the right on site first aid training for your workplace or school—delivered across Greater Sydney and the Central Coast."
          formTitle="Enquire Now"
          fieldPrefix="cta"
        />
      </main>
    </>
  )
}
