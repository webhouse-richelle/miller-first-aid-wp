import type { MetadataRoute } from "next"
import { MILLER_SITE_ENTRIES } from "@/lib/miller-sitemap"

const SITE_URL = "https://www.millerfirstaid.com.au"

export default function sitemap(): MetadataRoute.Sitemap {
  return MILLER_SITE_ENTRIES.map((entry) => ({
    url: `${SITE_URL}${entry.path}`,
    lastModified: new Date(entry.lastModified),
    priority: entry.priority,
  }))
}
