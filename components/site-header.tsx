"use client"

import { type MouseEvent, type ReactNode, useEffect, useState } from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon } from "@hugeicons/core-free-icons"
import { getIndustryPagePath } from "@/lib/industries"
import { cn } from "@/lib/utils"
import { MillerLogo } from "@/components/miller-logo"
import { buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const courseLinks = [
  { href: "/courses/cpr", label: "CPR" },
  { href: "/courses/first-aid", label: "First Aid" },
  { href: "/courses/first-aid-for-education-care", label: "First Aid for Education & Care" },
  { href: "/courses/advanced-first-aid", label: "Advanced First Aid" },
  { href: "/courses/asthma-anaphylaxis", label: "Asthma & Anaphylaxis" },
]

type IndustryKey =
  | "schools"
  | "sports-clubs"
  | "childcare-centres"
  | "manufacturing"
  | "aged-care"
  | "healthcare"
  | "hospitality"
  | "government"
  | "retail"
  | "construction"
  | "transport"

const industryOrder: IndustryKey[] = [
  "schools",
  "sports-clubs",
  "childcare-centres",
  "manufacturing",
  "aged-care",
  "healthcare",
  "hospitality",
  "government",
  "retail",
  "construction",
  "transport",
]

const industryMeta: Record<IndustryKey, { label: string; slug: string }> = {
  schools: { label: "Schools", slug: "schools" },
  "sports-clubs": { label: "Sports Clubs", slug: "sports-clubs" },
  "childcare-centres": { label: "Childcare Centres", slug: "childcare-centres" },
  manufacturing: { label: "Manufacturing", slug: "manufacturing" },
  "aged-care": { label: "Aged Care", slug: "aged-care" },
  healthcare: { label: "Healthcare", slug: "healthcare" },
  hospitality: { label: "Hospitality", slug: "hospitality" },
  government: { label: "Government", slug: "government" },
  retail: { label: "Retail", slug: "retail" },
  construction: { label: "Construction", slug: "construction" },
  transport: { label: "Transport", slug: "transport" },
}

const industryLinks = industryOrder.map((industry) => {
  const meta = industryMeta[industry]
  return {
    href: getIndustryPagePath(meta.slug),
    label: meta.label,
  }
})

const DESKTOP_NAV_MENU_COURSES = "courses"
const DESKTOP_NAV_MENU_INDUSTRIES = "industries"

/** Base UI: block trigger-*clicks* from opening the menu (hover still opens); allow trigger-click to close. */
const TRIGGER_PRESS_REASON = "trigger-press" as const

/** Same hover treatment as root `<Link>` nav items; `cn` merges on top of layout-only trigger base. */
const desktopNavDropdownTriggerClassName = cn(
  "rounded-full px-3 py-2 text-base font-semibold text-foreground/80",
  "transition-colors duration-200 ease-out hover:bg-muted hover:text-foreground",
  "visited:text-foreground/80 visited:no-underline",
  "focus:bg-transparent focus-visible:bg-transparent",
  "active:bg-transparent",
  "data-open:hover:bg-muted data-popup-open:hover:bg-muted",
  "[&>svg]:ml-1 [&>svg]:size-[0.95rem] [&>svg]:transition-transform [&>svg]:duration-150 [&>svg]:ease-out"
)

function preventFocusOnMouseDown(e: MouseEvent) {
  if (e.button === 0) {
    e.preventDefault()
  }
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const [desktopNavMenu, setDesktopNavMenu] = useState<string | null>(null)

  const closeMobileNav = () => {
    setMobileOpen(false)
    setMobileCoursesOpen(false)
    setMobileIndustriesOpen(false)
  }

  /** Link-as-trigger does not always emit a controlled close; force-dismiss when that root item is clicked while open. */
  const closeDesktopMenuIfOpen = (menu: string) => {
    if (desktopNavMenu === menu) {
      setDesktopNavMenu(null)
    }
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const handleDesktopNavMenuChange = (
    next: string | null,
    details: { reason: string; cancel: () => void }
  ) => {
    if (details.reason === TRIGGER_PRESS_REASON && next !== null) {
      details.cancel()
      return
    }
    setDesktopNavMenu(next)
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-white">
        <nav className="site-container flex h-20 items-center justify-between">
          <Link href="/" className="inline-flex w-fit text-foreground">
            <MillerLogo className="h-13 md:h-15" />
          </Link>

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <div className="flex items-center gap-0.5">
              <NavigationMenu
                className="flex-none"
                delay={0}
                closeDelay={0}
                value={desktopNavMenu}
                onValueChange={handleDesktopNavMenuChange}
              >
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem value={DESKTOP_NAV_MENU_COURSES}>
                    <NavigationMenuTrigger
                      nativeButton={false}
                      render={<Link href="/courses" />}
                      onMouseDown={preventFocusOnMouseDown}
                      onClick={() =>
                        closeDesktopMenuIfOpen(DESKTOP_NAV_MENU_COURSES)
                      }
                      className={desktopNavDropdownTriggerClassName}
                    >
                      Courses
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-[21rem] min-w-[21rem] p-1">
                      <div className="flex max-h-[60vh] flex-col gap-0 overflow-y-auto">
                        {courseLinks.map((link) => (
                          <NavigationMenuLink
                            key={link.href}
                            closeOnClick
                            render={<Link href={link.href} />}
                            className="px-3 py-2 font-semibold text-foreground/85 transition-colors duration-200 ease-out hover:bg-muted hover:text-foreground"
                          >
                            {link.label}
                          </NavigationMenuLink>
                        ))}
                      </div>
                      <div className="mt-1.5 mb-0.5 h-px w-full bg-border" aria-hidden />
                      <NavigationMenuLink
                        closeOnClick
                        render={<Link href="/courses" />}
                        className="flex items-center justify-between gap-3 px-3 py-2 font-semibold text-primary transition-colors duration-200 ease-out hover:bg-muted hover:text-primary"
                      >
                        View all courses
                        <span aria-hidden>→</span>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem value={DESKTOP_NAV_MENU_INDUSTRIES}>
                    <NavigationMenuTrigger
                      nativeButton={false}
                      render={<Link href="/industries" />}
                      onMouseDown={preventFocusOnMouseDown}
                      onClick={() =>
                        closeDesktopMenuIfOpen(DESKTOP_NAV_MENU_INDUSTRIES)
                      }
                      className={desktopNavDropdownTriggerClassName}
                    >
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-[21rem] min-w-[21rem] p-1">
                      <div className="flex max-h-[60vh] flex-col gap-0 overflow-y-auto">
                        {industryLinks.map((link) => (
                          <NavigationMenuLink
                            key={link.href}
                            closeOnClick
                            render={<Link href={link.href} />}
                            className="px-3 py-2 font-semibold text-foreground/85 transition-colors duration-200 ease-out hover:bg-muted hover:text-foreground"
                          >
                            {link.label}
                          </NavigationMenuLink>
                        ))}
                      </div>
                      <div className="mt-1.5 mb-0.5 h-px w-full bg-border" aria-hidden />
                      <NavigationMenuLink
                        closeOnClick
                        render={<Link href="/industries" />}
                        className="flex items-center justify-between gap-3 px-3 py-2 font-semibold text-primary transition-colors duration-200 ease-out hover:bg-muted hover:text-primary"
                      >
                        View all industries
                        <span aria-hidden>→</span>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                href="/about"
                className="rounded-full px-3 py-2 font-semibold text-foreground/80 transition-colors duration-200 ease-out hover:bg-muted hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="rounded-full px-3 py-2 font-semibold text-foreground/80 transition-colors duration-200 ease-out hover:bg-muted hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="/resources"
                className="rounded-full px-3 py-2 font-semibold text-foreground/80 transition-colors duration-200 ease-out hover:bg-muted hover:text-foreground"
              >
                Resources
              </Link>
            </div>
            <a
              href="tel:1300807669"
              className={buttonVariants({
                variant: "outline",
               
                className:
                  "ml-1 !border !border-black bg-transparent text-foreground transition-colors duration-200 ease-out hover:bg-muted hover:!border-black",
              })}
            >
              <SolidPhoneIcon />
              1300 807 669
            </a>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "default",})}
            >
              Enquire Now
            </Link>
          </div>

          <div className="flex items-center gap-0 lg:hidden">
            <a
              href="tel:1300807669"
              className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-md text-foreground [&>svg]:size-6"
              aria-label="Call 1300 807 669"
            >
              <SolidPhoneIcon />
            </a>
            <button
              type="button"
              className="relative inline-flex min-h-12 min-w-12 items-center justify-center rounded-md text-foreground"
              onClick={() => {
                if (mobileOpen) {
                  closeMobileNav()
                  return
                }
                setMobileOpen(true)
              }}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={cn(
                  "absolute block h-[2.75px] w-6 bg-current transition-all duration-300",
                  mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-[8px]"
                )}
              />
              <span
                className={cn(
                  "absolute block h-[2.75px] w-6 bg-current transition-all duration-300",
                  mobileOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute block h-[2.75px] w-6 bg-current transition-all duration-300",
                  mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-[8px]"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[45] flex w-full flex-col bg-background transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          mobileOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-4 pt-24">
            <div className="border-b border-border">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 py-4 text-left"
                onClick={() => setMobileCoursesOpen((open) => !open)}
                aria-expanded={mobileCoursesOpen}
                aria-controls="mobile-courses-panel"
              >
                <span className="text-2xl font-bold tracking-tight text-foreground">Courses</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  strokeWidth={2}
                  className={cn(
                    "size-7 shrink-0 text-muted-foreground transition-transform duration-200",
                    mobileCoursesOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
              <MobileNavSubpanel id="mobile-courses-panel" open={mobileCoursesOpen}>
                <div className="flex flex-col gap-0">
                  {courseLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-3 py-2.5 text-lg font-semibold text-foreground transition-colors duration-200 ease-out hover:bg-muted"
                      onClick={closeMobileNav}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/courses"
                  className="mt-5 flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-lg font-semibold text-primary transition-colors duration-200 ease-out hover:bg-muted"
                  onClick={closeMobileNav}
                >
                  View all courses
                  <span aria-hidden>→</span>
                </Link>
              </MobileNavSubpanel>
            </div>

            <div className="border-b border-border">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 py-4 text-left"
                onClick={() => setMobileIndustriesOpen((open) => !open)}
                aria-expanded={mobileIndustriesOpen}
                aria-controls="mobile-industries-panel"
              >
                <span className="text-2xl font-bold tracking-tight text-foreground">Industries</span>
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  strokeWidth={2}
                  className={cn(
                    "size-7 shrink-0 text-muted-foreground transition-transform duration-200",
                    mobileIndustriesOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
              <MobileNavSubpanel id="mobile-industries-panel" open={mobileIndustriesOpen}>
                <div className="flex flex-col gap-0">
                  {industryLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg px-3 py-2.5 text-lg font-semibold text-foreground transition-colors duration-200 ease-out hover:bg-muted"
                      onClick={closeMobileNav}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/industries"
                  className="mt-5 flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-lg font-semibold text-primary transition-colors duration-200 ease-out hover:bg-muted"
                  onClick={closeMobileNav}
                >
                  View all industries
                  <span aria-hidden>→</span>
                </Link>
              </MobileNavSubpanel>
            </div>

            <Link
              href="/about"
              className="border-b border-border py-4 text-2xl font-bold tracking-tight text-foreground hover:text-foreground/90"
              onClick={closeMobileNav}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="border-b border-border py-4 text-2xl font-bold tracking-tight text-foreground hover:text-foreground/90"
              onClick={closeMobileNav}
            >
              Blog
            </Link>
            <Link
              href="/resources"
              className="border-b border-border py-4 text-2xl font-bold tracking-tight text-foreground hover:text-foreground/90"
              onClick={closeMobileNav}
            >
              Resources
            </Link>
          </div>
        </div>

        <div className="shrink-0 border-t border-border px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "default", size: "lg", className: "w-full" })}
              onClick={closeMobileNav}
            >
              Enquire Now
            </Link>
            <a
              href="tel:1300807669"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "w-full !border !border-black bg-transparent text-foreground hover:bg-muted hover:!border-black",
              })}
              onClick={closeMobileNav}
            >
              <SolidPhoneIcon />
              1300 807 669
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function SolidPhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function MobileNavSubpanel({
  id,
  open,
  children,
}: {
  id: string
  open: boolean
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "grid transition-[grid-template-rows] duration-300 ease-out",
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      )}
    >
      <div className="min-h-0 overflow-hidden">
        <div id={id} className={cn("pb-5", !open && "pointer-events-none")} aria-hidden={!open}>
          {children}
        </div>
      </div>
    </div>
  )
}
