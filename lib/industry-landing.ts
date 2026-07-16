import { buildIndustryLandingFromPage } from "@/lib/industry-landing-build"
import type { IndustryLandingConfig } from "@/lib/industry-landing-types"
import { SCHOOLS_INDUSTRY_LANDING } from "@/lib/industry-landing-schools"
import { getIndustryByRouteSlug, getIndustryBySlug } from "@/lib/industries"

export function getIndustryLandingByRouteSlug(routeSlug: string): IndustryLandingConfig | null {
  const industry = getIndustryByRouteSlug(routeSlug)
  if (!industry) return null
  if (industry.slug === "schools") {
    return SCHOOLS_INDUSTRY_LANDING
  }
  return buildIndustryLandingFromPage(industry)
}

export function getIndustryLandingBySlug(slug: string): IndustryLandingConfig | null {
  const industry = getIndustryBySlug(slug)
  if (!industry) return null
  if (industry.slug === "schools") {
    return SCHOOLS_INDUSTRY_LANDING
  }
  return buildIndustryLandingFromPage(industry)
}
