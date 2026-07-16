import type { Metadata } from "next"

export const SITE = "https://www.millerfirstaid.com.au"

/** Default Open Graph / social preview & fallback hero imagery sitewide */
export const SITE_DEFAULT_OG_IMAGE = "/zeb-with-class.webp"

/** Google typically truncates around this length; keep industry meta at or below this. */
export const META_DESCRIPTION_MAX_LENGTH = 160

/** Trims and hard-caps meta description length (never exceeds `max`). */
export function clampMetaDescription(text: string, max = META_DESCRIPTION_MAX_LENGTH): string {
  const t = text.trim()
  if (t.length <= max) return t
  return t.slice(0, max).replace(/\s+\S*$/, "").trimEnd()
}

type BuildPageMetadataInput = {
  title: string
  description: string
  path: string
  image?: string
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = SITE_DEFAULT_OG_IMAGE,
}: BuildPageMetadataInput): Metadata {
  const url = `${SITE}${path}`
  const brandedTitle = `${title} | Miller First Aid`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: "Miller First Aid",
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [image],
    },
  }
}
