import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { getAllBlogPosts } from "@/content/blog"
import { BlogPostCard } from "@/components/blog-post-card"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Read first aid insights, practical emergency response guidance, and training updates from the Miller First Aid team.",
  path: "/blog",
})

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-[40vh]">
      <header className="border-b border-border bg-muted/30">
        <div className="site-container py-10 md:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link
              href="/"
              className="text-foreground/90 transition-colors hover:text-primary"
            >
              Home
            </Link>
            <span
              className="inline-flex items-center text-muted-foreground/80"
              aria-hidden
            >
              <ChevronRightIcon className="size-3.5" />
            </span>
            <span className="text-foreground" aria-current="page">
              Blog
            </span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-balance text-foreground md:mt-5">
            Blog
          </h1>
          <p className="mt-4 max-w-4xl text-base text-pretty text-muted-foreground md:text-lg">
            Insights, training updates, and practical guidance from the Miller
            First Aid team.
          </p>
        </div>
      </header>

      <section className="py-14 md:py-20">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
