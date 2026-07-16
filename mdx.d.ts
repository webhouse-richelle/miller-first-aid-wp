declare module "*.mdx" {
  import type { ComponentType } from "react"

  const MDXComponent: ComponentType
  export default MDXComponent

  export const metadata: {
    title: string
    slug: string
    excerpt: string
    publishedAt: string
    author: string
    authorSlug: string
    mainImageUrl?: string
    mainImageAlt?: string
  }
}
