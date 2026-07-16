export type BlogAuthor = {
  slug: string
  name: string
  /** Shown under the name on the author page */
  role?: string
  /** Optional short bio for the author archive */
  bio?: string
}

export const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  "zeb-miller": {
    slug: "zeb-miller",
    name: "Zeb Miller",
    bio: "Zeb is a Specialist Paramedic with 13+ years of pre-hospital emergency and critical care experience. He leads Miller First Aid’s on site training across Sydney and NSW.",
  },
}

export function getAuthorBySlug(slug: string): BlogAuthor | undefined {
  return BLOG_AUTHORS[slug]
}

export function getAllAuthorSlugs(): string[] {
  return Object.keys(BLOG_AUTHORS)
}
