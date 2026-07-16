import Image from "next/image"
import { cn } from "@/lib/utils"

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

const testimonials = [
  {
    quote:
      "Highly recommend Zeb and the team who presented to 160 Year 10 boys. Training was separated into 3 pods which kept our boys engaged over the course of the day.",
    author: "Jessica George-Loulach",
    role: "Head of PDHPE",
    organisation: "St Pauls Catholic College Greystanes",
    logoSrc: "/clients/st-pauls-logo.avif",
    logoAlt: "St Pauls Catholic College Greystanes",
  },
  {
    quote:
      "Our business engaged Miller First Aid to train 14 members of our safety team. Our instructor Zeb was very knowledgeable and provided excellent delivery.",
    author: "Ben Zammit",
    role: "CFO",
    organisation: "Zammit Ham & Bacon Curers",
    logoSrc: "/clients/zammit-logo.avif",
    logoAlt: "Zammit Ham & Bacon Curers",
  },
  {
    quote:
      "Absolutely thrilled with the training provided by Miller First Aid for our early learning centre. The experience was tailored perfectly for our staff.",
    author: "Sharon Frangi",
    role: "Director",
    organisation: "Future Scholars Early Learning Centre",
    logoSrc: "/clients/future-scholars-logo.png",
    logoAlt: "Future Scholars Early Learning Centre",
  },
] as const

export function HomeTestimonials() {
  return (
    <section className="py-14 md:py-20" aria-labelledby="testimonials-heading">
      <div className="site-container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="testimonials-heading" className="text-balance">
            Our Client Testimonials
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
                <blockquote className="relative border-l-[3px] border-primary/35 pl-5 text-base font-semibold leading-relaxed text-foreground italic md:text-[1.0625rem]">
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
                  className="mt-5 inline-block h-12 w-auto min-w-0 max-w-full object-contain object-left md:h-14"
                  unoptimized
                />
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
