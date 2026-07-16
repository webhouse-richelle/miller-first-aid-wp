import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPostLayout } from "@/components/blog-post-layout"
import { getAllBlogPosts, getBlogPostBySlug } from "@/content/blog"
import { buildPageMetadata, SITE_DEFAULT_OG_IMAGE } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return buildPageMetadata({
      title: "Blog Post",
      description: "Read first aid articles and training insights from Miller First Aid.",
      path: "/blog",
    })
  }

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.mainImageUrl ?? SITE_DEFAULT_OG_IMAGE,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) notFound()

  return (
    <main className="min-h-[40vh]">
      <BlogPostLayout post={post} />
    </main>
  )
}
