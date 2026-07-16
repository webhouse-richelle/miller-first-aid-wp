import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { getBlogPostsByAuthorSlug } from "@/content/blog"
import { BlogPostCard } from "@/components/blog-post-card"
import { getAuthorBySlug, getAllAuthorSlugs } from "@/lib/blog-authors"
import { buildPageMetadata } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllAuthorSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) {
    return buildPageMetadata({
      title: "Author",
      description: "Blog authors at Miller First Aid.",
      path: "/blog",
    })
  }

  return buildPageMetadata({
    title: `Articles by ${author.name}`,
    description: `${author.name}${author.role ? `, ${author.role}` : ""}. Read first aid and training articles from Miller First Aid.`,
    path: `/blog/author/${slug}`,
  })
}

export default async function BlogAuthorPage({ params }: Props) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)
  if (!author) notFound()

  const posts = getBlogPostsByAuthorSlug(slug)

  return (
    <main className="min-h-[40vh]">
      <header className="border-b border-border bg-muted/30">
        <div className="site-container py-10 md:py-12">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="text-foreground/90 transition-colors hover:text-primary">
              Home
            </Link>
            <span className="inline-flex items-center text-muted-foreground/80" aria-hidden>
              <ChevronRightIcon className="size-3.5" />
            </span>
            <Link href="/blog" className="text-foreground/90 transition-colors hover:text-primary">
              Blog
            </Link>
            <span className="inline-flex items-center text-muted-foreground/80" aria-hidden>
              <ChevronRightIcon className="size-3.5" />
            </span>
            <span className="text-foreground" aria-current="page">
              {author.name}
            </span>
          </nav>

          <h1 className="mt-4 max-w-3xl text-balance text-foreground md:mt-5">{author.name}</h1>
          {author.role ? <p className="mt-2 text-lg font-medium text-muted-foreground">{author.role}</p> : null}
          {author.bio ? (
            <p className="mt-4 max-w-3xl text-pretty text-base text-muted-foreground md:text-lg">{author.bio}</p>
          ) : null}

          <p className="mt-6 text-sm text-muted-foreground">
            {posts.length} article{posts.length === 1 ? "" : "s"}
          </p>
        </div>
      </header>

      <section className="py-14 md:py-20">
        <div className="site-container">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No articles published yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
