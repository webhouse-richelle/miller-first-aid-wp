import { getAllBlogPosts } from "@/content/blog"
import { getAllAuthorSlugs } from "@/lib/blog-authors"
import { COURSE_DETAILS } from "@/lib/course-details"
import { getAllIndustries, getIndustryPagePath } from "@/lib/industries"
import { getAllResources } from "@/lib/resources"

export type MillerSitemapEntry = {
  path: string
  /** ISO 8601 timestamp string */
  lastModified: string
  priority: number
}

/** Used for routes without a more specific content date (build-time snapshot). */
const STATIC_PAGE_STAMP = "2026-04-15T12:00:00.000Z"

function isoFromDateOnly(value: string) {
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? STATIC_PAGE_STAMP : d.toISOString()
}

/**
 * Single source of truth for marketing URLs in the sitemap. Keeps paths aligned
 * with `app/` routes, blog posts, industry landings, and downloadable resources.
 */
export function buildMillerSitemapEntries(): MillerSitemapEntry[] {
  const entries: MillerSitemapEntry[] = []

  const add = (path: string, priority: number, lastModified = STATIC_PAGE_STAMP) => {
    entries.push({ path, priority, lastModified })
  }

  add("/", 1)

  for (const slug of Object.keys(COURSE_DETAILS).sort()) {
    add(`/courses/${slug}`, 0.8)
  }
  add("/courses", 0.85)

  add("/industries", 0.8)
  for (const industry of getAllIndustries()) {
    add(getIndustryPagePath(industry.slug), 0.7)
  }

  add("/blog", 0.6)
  for (const authorSlug of getAllAuthorSlugs()) {
    add(`/blog/author/${authorSlug}`, 0.58)
  }
  for (const post of getAllBlogPosts()) {
    entries.push({
      path: `/blog/${post.slug}`,
      priority: 0.65,
      lastModified: isoFromDateOnly(post.publishedAt),
    })
  }

  add("/resources", 0.55)
  for (const resource of getAllResources()) {
    add(resource.pdfHref, 0.45)
  }

  add("/about", 0.65)
  add("/contact", 0.8)
  add("/privacy-policy", 0.25)

  const byPath = new Map<string, MillerSitemapEntry>()
  for (const entry of entries) {
    byPath.set(entry.path, entry)
  }

  return [...byPath.values()].sort((a, b) => a.path.localeCompare(b.path))
}

export const MILLER_SITE_ENTRIES = buildMillerSitemapEntries()

export const MILLER_SITE_PATHS = MILLER_SITE_ENTRIES.map((entry) => entry.path)

export function normalizePath(path: string) {
  if (path === "/") return path
  return path.endsWith("/") ? path.slice(0, -1) : path
}
