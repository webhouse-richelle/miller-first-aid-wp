import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  HeartIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { ClientsMarquee } from "@/components/clients-marquee"
import { EnquiryForm } from "@/components/enquiry-form"
import { FooterCta } from "@/components/footer-cta"
import { cn } from "@/lib/utils"
import { buildPageMetadata, SITE_DEFAULT_OG_IMAGE } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Miller First Aid is owned by a Specialist Paramedic with 13+ years of experience. Paramedic-led, scenario-based first aid and CPR training at your Sydney workplace or school, nationally recognised through Allens Training RTO 90909.",
  path: "/about",
  image: SITE_DEFAULT_OG_IMAGE,
})

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

const differentiators = [
  {
    title: "Paramedic Expertise",
    body: "Our trainers aren't reading from a manual. They're active Specialist Paramedics who bring current field experience into every session. They've managed the emergencies they're teaching you about, and that changes everything about how the material lands.",
    icon: AcademicCapIcon,
  },
  {
    title: "Scenario-Based Training",
    body: "We contextualise every course to the environment our clients work in. A school gets school scenarios. A construction site gets construction scenarios. A childcare centre gets paediatric-focused simulations. This isn't one-size-fits-all training. It's built around the risks you actually face.",
    icon: Square2StackIcon,
  },
  {
    title: "We Come to You",
    body: "No need to send your team offsite. We deliver training at your workplace, school campus, or private venue, minimising disruption and maximising convenience. Flexible scheduling is available across weekdays, weekends, and evenings.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Beyond the Certificate",
    body: "We go further than accreditation. Our training covers stress management, critical incident debriefing, and the psychological impact of emergencies, because real preparedness doesn't stop at bandaging a wound. We're building skilled, resilient first responders, not just ticking a compliance box.",
    icon: HeartIcon,
  },
] as const

const byTheNumbers = [
  { value: "13+", label: "years of specialist paramedic experience" },
  { value: "800+", label: "certificates issued across all courses in 2025" },
  {
    value: "1000+",
    label:
      "high school students and staff trained and accredited across Sydney in 2025",
  },
  {
    value: "35+",
    label: "five-star reviews from schools, workplaces, and organisations",
  },
  {
    value: "10+",
    label:
      "courses covering CPR, first aid, advanced first aid, asthma, anaphylaxis, spinal injury, oxygen administration, and more",
  },
] as const

const testimonials = [
  {
    quote:
      "Highly recommend Zeb and the team who presented to 160 Year 10 boys. Training was separated into 3 pods which kept our boys engaged over the course of the day. The process was smooth with no issues. We have booked the team to return.",
    author: "Jessica George-Loulach",
    role: "Head of PDHPE",
    organisation: "St Pauls Catholic College Greystanes",
    logoSrc: "/clients/st-pauls-logo.avif",
    logoAlt: "St Pauls Catholic College Greystanes",
  },
  {
    quote:
      "Our business engaged Miller First Aid to train 14 members of our safety team. Our instructor Zeb was very knowledgeable and provided excellent delivery to our staff. Highly recommend!",
    author: "Ben Zammit",
    role: "Chief Financial Officer",
    organisation: "Zammit Ham & Bacon Curers",
    logoSrc: "/clients/zammit-logo.avif",
    logoAlt: "Zammit Ham & Bacon Curers",
  },
  {
    quote:
      "Absolutely thrilled with the training provided by Miller First Aid for our early learning child centre. The experience was tailored perfectly for our staff. Zeb and the team's expertise in first aid training was evident, and their approach made the learning process very enjoyable.",
    author: "Sharon Frangi",
    role: "Director",
    organisation: "Future Scholars Early Learning Centre",
    logoSrc: "/clients/future-scholars-logo.png",
    logoAlt: "Future Scholars Early Learning Centre",
  },
] as const

export default function AboutPage() {
  return (
    <main className="min-h-[40vh]">
      <section
        className="relative overflow-hidden bg-secondary"
        aria-label="Miller First Aid training team with students"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${SITE_DEFAULT_OG_IMAGE}')` }}
          aria-hidden
        />
        <div className="hero-gradient-r" aria-hidden />

        <div className="site-container relative py-14 md:py-20">
          <div className="grid min-h-[28rem] items-center gap-8 md:min-h-[32rem] md:grid-cols-[1.3fr_0.75fr] md:gap-20 lg:gap-24">
            <div className="text-white">
              <nav
                aria-label="Breadcrumb"
                className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-white/80 md:mb-5"
              >
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span
                  className="inline-flex items-center text-white/65"
                  aria-hidden
                >
                  <ChevronRightIcon className="size-3.5" />
                </span>
                <span className="text-white">About</span>
              </nav>
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
                First Aid Training Led by the People Who Do It for Real
              </h1>
              <p className="mt-5 text-base text-white/85 md:text-lg">
                Miller First Aid is owned and operated by a Specialist Paramedic
                with over 13 years of pre-hospital emergency and critical care
                experience. We deliver nationally recognised first aid and CPR
                training to workplaces, schools, and communities across Sydney,
                at your location, on your schedule.
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
                    Certificates in 2025
                  </p>
                </div>
                <div className="rounded-lg bg-white/10 px-4 py-3">
                  <p className="text-2xl font-bold">35+</p>
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-white/75 uppercase">
                    Five-Star Reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-border bg-white p-4 text-foreground shadow-xl md:p-5">
                <p className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                  Enquire Now
                </p>
                <EnquiryForm
                  fieldPrefix="about-hero"
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
        </div>
      </section>

      <section className="py-14 md:py-20" aria-labelledby="our-story-heading">
        <div className="site-container grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div className="min-w-0">
            <h2 id="our-story-heading" className="text-balance">
              Built on the Front Line
            </h2>
            <div className="prose mt-6 max-w-none text-muted-foreground prose-neutral dark:prose-invert">
              <p className="text-base leading-relaxed md:text-lg">
                Miller First Aid started with a simple observation: most first
                aid courses teach you theory. Very few prepare you for what an
                emergency actually feels like.
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                Zeb Miller has spent over 13 years as a Specialist Paramedic,
                responding to cardiac arrests, traumatic injuries, anaphylaxis,
                and everything in between. He&apos;s seen what happens when
                someone freezes in a crisis. And he&apos;s seen what happens
                when someone steps forward with the training and confidence to
                act.
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                That gap between holding a certificate and actually being ready
                is why Miller First Aid exists.
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                Every course we deliver is backed by Allens Training Pty Ltd
                (RTO 90909), so your qualifications are nationally recognised
                and fully compliant. But compliance is the baseline, not the
                goal. The goal is making sure the people in your organisation
                can look at an emergency and know exactly what to do.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
            <Image
              src="/classroom.webp"
              alt="Paramedic-led first aid training in session"
              width={1200}
              height={900}
              className="aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[480px]"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-muted/40 py-14 md:py-20"
        aria-labelledby="different-heading"
      >
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="different-heading" className="text-balance">
              Not Your Typical First Aid Course
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {differentiators.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm ring-1 ring-foreground/[0.04] transition-shadow hover:shadow-md md:p-7 dark:ring-foreground/[0.08]"
              >
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon
                    className="size-6"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <h3 className="text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20" aria-labelledby="numbers-heading">
        <div className="site-container">
          <h2
            id="numbers-heading"
            className="mx-auto max-w-3xl text-center text-balance"
          >
            The Numbers Behind the Training
          </h2>
          <ul className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {byTheNumbers.map((row) => (
              <li
                key={row.label}
                className="rounded-2xl border border-border bg-background px-5 py-6 text-center shadow-sm xl:col-span-1"
              >
                <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  {row.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">
                  {row.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
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

      <section className="py-14 md:py-20" aria-labelledby="clients-heading">
        <div className="site-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="clients-heading" className="text-balance">
              Trusted by Schools, Workplaces, and Organisations Across Australia
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Our clients include secondary schools, early learning centres,
              corporate teams, sports clubs, medical practices, community
              organisations, and government agencies. Whether it&apos;s 10 staff
              in a boardroom or 160 students across a full school day, we scale
              our delivery to fit.
            </p>
          </div>
        </div>
      </section>
      <ClientsMarquee className="py-0 md:py-0" />

      <section
        className="py-14 md:py-20"
        aria-labelledby="about-testimonials-heading"
      >
        <div className="site-container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="about-testimonials-heading" className="text-balance">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-5">
            {testimonials.map((item) => (
              <article
                key={item.author}
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

      <section
        className="py-14 md:pb-20"
        aria-labelledby="accreditation-heading"
      >
        <div className="site-container">
          <div className="rounded-2xl border border-border bg-muted/60 px-6 py-8 md:px-10 md:py-10">
            <h2 id="accreditation-heading" className="text-balance">
              Nationally Recognised. Fully Accredited.
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
              All training and assessment is delivered on behalf of Allens
              Training Pty Ltd (RTO 90909). Every qualification we issue is
              nationally recognised under the Australian Qualifications
              Framework and meets the requirements of Safe Work Australia, state
              WHS regulators, ACECQA (for education and care settings), and the
              Australian Resuscitation Council guidelines.
            </p>
            <p className="mt-4 max-w-4xl text-base font-semibold text-foreground md:text-lg">
              Your certificate is valid across all Australian states and
              territories.
            </p>
          </div>
        </div>
      </section>

      <FooterCta
        headingId="about-cta-heading"
        ctaTitle="Ready to Train With Paramedics?"
        ctaSubheading="Whether you're a school booking student accreditation, a workplace organising staff compliance training, or a parent wanting to feel confident at home. We've got a course for you."
        formTitle="Enquire Now"
        fieldPrefix="about-footer-cta"
      />
    </main>
  )
}
