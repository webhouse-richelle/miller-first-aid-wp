import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { IndustryLandingPage } from "@/components/industry-landing-page"
import { getIndustryLandingByRouteSlug } from "@/lib/industry-landing"
import { getAllIndustries, getIndustryByRouteSlug, getIndustryPagePath, getIndustryRouteSlug } from "@/lib/industries"
import { buildPageMetadata, clampMetaDescription } from "@/lib/seo"

const SITE = "https://www.millerfirstaid.com.au"

type IndustrySlugPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllIndustries().map((industry) => ({
    slug: getIndustryRouteSlug(industry.slug),
  }))
}

export async function generateMetadata({ params }: IndustrySlugPageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryByRouteSlug(slug)

  if (!industry) {
    return { title: "Industry Not Found" }
  }

  const description = clampMetaDescription(industry.metaDescription)

  if (industry.slug === "schools") {
    return {
      title: "First Aid Training for Schools Sydney",
      description,
      alternates: {
        canonical: `${SITE}/first-aid-training-for-schools`,
      },
      openGraph: {
        title: "First Aid Training for Schools Sydney | Miller First Aid",
        description,
        url: `${SITE}/first-aid-training-for-schools`,
        siteName: "Miller First Aid",
        locale: "en_AU",
        type: "website",
      },
    }
  }

  return buildPageMetadata({
    title: `First Aid Training for ${industry.label}`,
    description,
    path: getIndustryPagePath(industry.slug),
    image: industry.heroImageSrc,
  })
}

export default async function IndustrySlugPage({ params }: IndustrySlugPageProps) {
  const { slug } = await params

  const landing = getIndustryLandingByRouteSlug(slug)
  if (!landing) {
    notFound()
  }

  return <IndustryLandingPage config={landing} />
}
