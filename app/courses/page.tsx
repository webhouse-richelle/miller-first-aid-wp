import { ChevronRightIcon } from "@heroicons/react/24/solid"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ClientsMarquee } from "@/components/clients-marquee"
import { EnquiryForm } from "@/components/enquiry-form"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "CPR and First Aid Training Courses",
  description:
    "Browse Miller First Aid courses including CPR, first aid, education and care, asthma and anaphylaxis, and school-focused training delivered onsite across Sydney and NSW.",
  path: "/courses",
  image: "/classroom.webp",
})

const courses = [
  {
    code: "HLTAID009",
    title: "Cardiopulmonary Resuscitation (CPR)",
    description: "Empowering you to act in cardiac emergencies.",
    href: "/courses/cpr",
    imageSrc: "/course-tabs/course-01.webp",
  },
  {
    code: "HLTAID011",
    title: "First Aid",
    description:
      "Equip yourself with comprehensive and expert training to respond confidently and effectively in critical situations.",
    href: "/courses/first-aid",
    imageSrc: "/course-tabs/course-02.avif",
  },
  {
    code: "HLTAID012",
    title: "First Aid for Education & Care",
    description:
      "Gain the knowledge to respond to time-critical incidents while ensuring compliance with legal and workplace standards.",
    href: "/courses/first-aid-for-education-care",
    imageSrc: "/course-tabs/course-03.avif",
  },
  {
    code: "HLTAID014",
    title: "Advanced First Aid",
    description: "Master expert training for high-stakes emergency response.",
    href: "/courses/advanced-first-aid",
    imageSrc: "/course-tabs/course-04.avif",
  },
  {
    code: "22556VIC & 22578VIC",
    title: "Asthma & Anaphylaxis",
    description:
      "Acquire the skills to handle airway and breathing emergencies and ensure the safety of at-risk individuals.",
    href: "/courses/asthma-anaphylaxis",
    imageSrc: "/course-tabs/course-05.avif",
  },
  {
    code: "PUAEM007",
    title: "Provide Emergency Care for Suspected Spinal Injury",
    description: "Train to handle spinal emergencies with precision.",
    href: "/courses/provide-emergency-care-for-suspected-spinal-injury",
    imageSrc: "/course-tabs/course-06.jpg",
  },
  {
    code: "22575VIC",
    title: "Basic Oxygen Administration for First Aid",
    description:
      "Acquire the knowledge and skills to administer emergency oxygen to individuals facing respiratory distress.",
    href: "/courses/basic-oxygen-administration-for-first-aid",
    imageSrc: "/course-tabs/course-07.png",
  },
  {
    code: "In School Program",
    title: "In School Program",
    description:
      "Comprehensive first aid training for high school students, developing essential life-saving skills and confidence in emergency response.",
    href: "/courses/in-school-program",
    imageSrc: "/course-tabs/course-08.jpg",
  },
  {
    code: "SCHOOL STAFF",
    title: "School Staff",
    description:
      "Ensure the safety of your school community with expert-led emergency response and accredited CPR training.",
    href: "/courses/school-staff",
    imageSrc: "/course-tabs/course-09.avif",
  },
  {
    code: "NON-ACCREDITED",
    title: "Infant & Child First Aid Workshop",
    description:
      "Tailored training that imparts life-saving skills and provides invaluable peace of mind.",
    href: "/courses/infant-child-first-aid-workshop",
    imageSrc: "/course-tabs/course-10.avif",
  },
]

export default function CoursesPage() {
  return (
    <main className="min-h-[40vh]">
      <section className="relative overflow-hidden bg-secondary text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/classroom.webp')" }}
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
              <span
                className="inline-flex items-center text-white/65"
                aria-hidden
              >
                <ChevronRightIcon className="size-3.5" />
              </span>
              <span className="text-white">Courses</span>
            </nav>
            <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-semibold text-white">
              <div className="flex items-center gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    viewBox="0 0 14 13"
                    className="h-3.5 w-3.5 fill-[#FEC84B]"
                  >
                    <path d="M6.52447 0.463524C6.67415 0.00286844 7.32585 0.00286992 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z" />
                  </svg>
                ))}
              </div>
              <span>5 stars from 40+ reviews</span>
            </div>
            <h1 className="text-balance text-white">
              CPR and First Aid Training Courses
            </h1>
            <p className="mt-5 text-base text-white/85 md:text-lg">
              Browse accredited CPR, first aid, education and care, and
              specialist programs delivered on site across Sydney and NSW by
              specialist paramedics.
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
                Enquire Now
              </p>
              <EnquiryForm
                fieldPrefix="courses-hero"
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

      <section className="py-14 md:py-20">
        <div className="site-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="block overflow-hidden rounded-2xl border border-border bg-background transition-[background-color,box-shadow] duration-200 ease-out hover:bg-muted/60 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={course.imageSrc}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-semibold tracking-wide text-primary-foreground uppercase">
                    {course.code}
                  </span>
                  <h3 className="mt-3 text-2xl">{course.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">
                    {course.description}
                  </p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">
                    View course
                  </span>
                </div>
              </Link>
            ))}
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
