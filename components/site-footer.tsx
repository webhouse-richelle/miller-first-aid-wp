import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Call02Icon, Mail01Icon } from "@hugeicons/core-free-icons"
import { MillerLogo } from "@/components/miller-logo"

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.1 1 2.48 1s2.5 1.12 2.5 2.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.18h.05c.53-1.01 1.84-2.18 3.79-2.18 4.05 0 4.8 2.66 4.8 6.12V24h-4v-7.73c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-4V8Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm9.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" />
    </svg>
  )
}

function PhoneIcon() {
  return <HugeiconsIcon icon={Call02Icon} strokeWidth={2.2} className="h-5 w-5" aria-hidden />
}

function MailIcon() {
  return <HugeiconsIcon icon={Mail01Icon} strokeWidth={2.2} className="h-5 w-5" aria-hidden />
}

const courseLinks = [
  { href: "/courses/cpr", label: "Cardiopulmonary Resuscitation (CPR)" },
  { href: "/courses/first-aid", label: "First Aid" },
  { href: "/courses/first-aid-for-education-care", label: "First Aid for Education & Care" },
  { href: "/courses/advanced-first-aid", label: "Advanced First Aid" },
  { href: "/courses/asthma-anaphylaxis", label: "Asthma & Anaphylaxis" },
  {
    href: "/courses/provide-emergency-care-for-suspected-spinal-injury",
    label: "Provide Emergency Care for Suspected Spinal Injury",
  },
  { href: "/courses/basic-oxygen-administration-for-first-aid", label: "Basic Oxygen Administration for First Aid" },
  { href: "/courses/in-school-program", label: "In School Program" },
  { href: "/courses/school-staff", label: "School Staff" },
  { href: "/courses/infant-child-first-aid-workshop", label: "Infant & Child First Aid Workshop" },
]

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="site-container pt-14 pb-8 md:pt-16">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1.25fr_1.2fr_0.8fr] lg:gap-16">
          <div className="flex flex-col">
            <div className="mb-7 inline-flex w-fit items-center gap-3">
              <MillerLogo className="h-13 text-white md:h-15" />
            </div>

            <p className="max-w-md leading-7 text-white/90">
              Miller First Aid acknowledges the Dharug people, the Traditional Custodians of this land.
            </p>
            <p className="mt-4 max-w-md leading-7 text-white/90">
              We pay our respects to Elders past, present and emerging.
            </p>

            <div className="mt-14 flex flex-col gap-4 font-medium text-white/95">
              <a href="tel:1300807669" className="inline-flex w-fit items-center gap-2 transition-colors hover:text-white">
                <PhoneIcon />
                1300 807 669
              </a>
              <a href="mailto:info@millerfirstaid.com.au" className="inline-flex w-fit items-center gap-2 transition-colors hover:text-white">
                <MailIcon />
                info@millerfirstaid.com.au
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/miller-first-aid/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-secondary"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/millerfirstaid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-secondary"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold text-white">Courses</p>
            {courseLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium leading-[1.35] text-white/95 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold text-white">Company</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium leading-[1.35] text-white/95 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/15">
        <div className="site-container flex flex-col items-start gap-3 pt-5 pb-8 text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Miller First Aid. All rights reserved.{" "}
            <a
              href="https://webhouse.com.au/?utm_source=millerfirstaid.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Website by Webhouse
            </a>
          </p>
          <Link href="/privacy-policy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
