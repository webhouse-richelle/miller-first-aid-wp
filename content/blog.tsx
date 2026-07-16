import "server-only"

import fs from "node:fs"
import path from "node:path"
import type { ComponentType } from "react"

import schoolsCompliancePost, {
  metadata as schoolsCompliancePostMetadata,
} from "@/content/blog-posts/first-aid-compliance-australian-schools-2026.mdx"

export type BlogTocItem = {
  title: string
}

export type BlogPost = {
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  author: string
  /** URL segment for `/blog/author/[slug]` */
  authorSlug: string
  mainImageUrl?: string
  mainImageAlt?: string
  Content: ComponentType
  toc: BlogTocItem[]
}

type BlogPostModule = {
  Content: ComponentType
  metadata: Omit<BlogPost, "Content" | "toc">
}

const BLOG_POST_DIRECTORY = path.join(process.cwd(), "content/blog-posts")

const BLOG_POST_FILES: Record<string, string> = {
  [schoolsCompliancePostMetadata.slug]: "first-aid-compliance-australian-schools-2026.mdx",
}

const blogPostModules: BlogPostModule[] = [
  { Content: schoolsCompliancePost, metadata: schoolsCompliancePostMetadata },
]

function cleanHeadingText(value: string) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\{[^}]+\}/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function extractTocFromMdx(filename: string): BlogTocItem[] {
  const source = fs.readFileSync(path.join(BLOG_POST_DIRECTORY, filename), "utf8")
  const lines = source.split(/\r?\n/)
  const toc: BlogTocItem[] = []
  let inCodeBlock = false

  for (const line of lines) {
    if (line.trimStart().startsWith("```")) {
      inCodeBlock = !inCodeBlock
      continue
    }
    if (inCodeBlock) continue

    const match = line.match(/^#{2}\s+(.+)$/)
    if (!match) continue

    const title = cleanHeadingText(match[1])
    if (!title) continue
    toc.push({ title })
  }

  return toc
}

function toPost({ Content, metadata }: BlogPostModule): BlogPost {
  const filename = BLOG_POST_FILES[metadata.slug]
  return {
    ...metadata,
    Content,
    toc: filename ? extractTocFromMdx(filename) : [],
  }
}

const BLOG_POSTS = blogPostModules.map(toPost)

export function getAllBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.slug !== slug).slice(0, limit)
}

export function getBlogPostsByAuthorSlug(authorSlug: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.authorSlug === authorSlug)
}
