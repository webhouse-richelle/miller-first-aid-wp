import { ChevronRightIcon } from "@heroicons/react/24/solid"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { EnquiryForm } from "@/components/enquiry-form"
import { buildPageMetadata } from "@/lib/seo"

const STAR_PATH =
  "M6.52447 0.463524C6.67415 0.00286844 7.32585 0.00286992 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Miller First Aid to book onsite first aid or CPR training for your workplace, school or community group across Sydney and NSW.",
  path: "/contact",
  image: "/classroom.webp",
})

export default function ContactPage() {
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
          <div>
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
              <span className="text-white">Contact</span>
            </nav>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
              <div className="flex items-center gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} viewBox="0 0 14 13" className="h-3.5 w-3.5 fill-[#FEC84B]">
                    <path d={STAR_PATH} />
                  </svg>
                ))}
              </div>
              <span>5 stars from 40+ reviews</span>
            </div>
            <h1 className="text-balance text-white">Contact Miller First Aid</h1>
            <p className="mt-5 text-base text-white/85 md:text-lg">
              Tell us about your workplace, school or community group and we will recommend the best first aid training
              option for your needs. We deliver onsite across Sydney and NSW with flexible scheduling.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-4 shadow-sm backdrop-blur-sm sm:min-w-[min(100%,17rem)] sm:flex-1">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-white/80 uppercase">Phone</p>
                <a
                  href="tel:1300807669"
                  className="mt-2 block text-xl font-bold tracking-tight text-white underline-offset-2 transition-colors hover:text-white hover:underline md:text-2xl"
                >
                  1300 807 669
                </a>
                <p className="mt-2 text-sm leading-snug text-white/75">
                  Speak with our team about availability and pricing.
                </p>
              </div>
              <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-4 shadow-sm backdrop-blur-sm sm:min-w-[min(100%,17rem)] sm:flex-1">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-white/80 uppercase">Email</p>
                <a
                  href="mailto:info@millerfirstaid.com.au"
                  className="mt-2 block break-words text-xl font-bold tracking-tight text-white underline-offset-2 transition-colors hover:text-white hover:underline md:text-2xl"
                >
                  info@millerfirstaid.com.au
                </a>
                <p className="mt-2 text-sm leading-snug text-white/75">
                  Send your requirements and we will reply promptly.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-xl border border-border bg-white p-4 text-foreground shadow-xl md:p-5">
              <p className="mb-3 text-2xl font-bold text-foreground md:text-3xl">Enquire Now</p>
              <EnquiryForm fieldPrefix="contact-hero" textareaClassName="min-h-28" />
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
    </main>
  )
}
