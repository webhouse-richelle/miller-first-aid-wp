import Image from "next/image"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import type { BlogPost, BlogTocItem } from "@/content/blog"
import { BlogPostToc } from "@/components/blog-post-toc"
import { EnquiryForm } from "@/components/enquiry-form"
import { SITE_DEFAULT_OG_IMAGE } from "@/lib/seo"
import { cn } from "@/lib/utils"

function slugifyHeading(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function buildOutline(toc: BlogTocItem[] | null | undefined) {
  const used = new Map<string, number>()

  const uniqueId = (title: string) => {
    const base = slugifyHeading(title) || "section"
    const count = used.get(base) || 0
    used.set(base, count + 1)
    return count === 0 ? base : `${base}-${count + 1}`
  }

  return (toc || []).map((item) => ({
    id: uniqueId(item.title),
    title: item.title,
  }))
}

export function BlogPostLayout({ post }: { post: BlogPost }) {
  const outline = buildOutline(post.toc)
  const Content = post.Content
  const heroImage = post.mainImageUrl ?? SITE_DEFAULT_OG_IMAGE

  return (
    <article className="min-h-[40vh]">
      <header className="border-b border-border bg-muted/30">
        <div className="site-container py-10 md:py-12">
          <div className="grid items-start gap-8 md:grid-cols-[1fr_minmax(0,22rem)] md:items-center md:gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-14">
            <div className="min-w-0">
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
                <span className="max-w-[min(100%,20rem)] truncate text-foreground md:max-w-[32rem]" aria-current="page">
                  {post.title}
                </span>
              </nav>

              <h1 className="mt-4 max-w-4xl text-balance text-foreground md:mt-5">{post.title}</h1>

              <p className="mt-4 max-w-3xl text-pretty text-base text-muted-foreground md:text-lg">{post.excerpt}</p>
            </div>

            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm md:aspect-[5/4] md:min-h-[15rem] md:max-h-[min(100%,22rem)]">
              <Image
                src={heroImage}
                alt={post.mainImageAlt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 416px"
                priority
              />
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm text-muted-foreground md:mt-8 md:text-base">
            <span className="text-muted-foreground/90">By </span>
            <Link
              href={`/blog/author/${post.authorSlug}`}
              className="font-medium text-foreground underline-offset-2 transition-colors hover:text-primary hover:underline"
            >
              {post.author}
            </Link>
            {" · "}
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-AU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
        </div>
      </header>

      <div className="site-container pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="mx-auto grid w-full max-w-[1360px] items-start gap-10 xl:grid-cols-[minmax(0,240px)_minmax(0,760px)_minmax(0,280px)] xl:gap-x-16">
          <BlogPostToc outline={outline} />

          <div className="min-w-0 text-left">
            <div
              className={cn(
                "prose prose-zinc max-w-none",
                "prose-sm md:prose-base",
                "text-foreground prose-headings:scroll-mt-28 prose-headings:text-foreground prose-headings:tracking-tight prose-h4:font-semibold",
                "prose-h2:mt-10 prose-h2:mb-3 prose-h2:text-xl prose-h2:font-bold prose-h2:leading-snug md:prose-h2:mt-12 md:prose-h2:text-2xl md:prose-h2:leading-tight",
                "prose-h3:mt-8 prose-h3:mb-2 prose-h3:text-lg prose-h3:font-bold prose-h3:leading-snug md:prose-h3:text-xl",
                "prose-p:mb-2.5 prose-p:text-[0.98rem] md:prose-p:mb-3 md:prose-p:text-base",
                "prose-ul:my-4 prose-ol:my-4 prose-li:my-1.5 prose-li:leading-relaxed",
                "prose-blockquote:my-6 prose-blockquote:border-l-[3px] prose-blockquote:border-primary/40 prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-muted-foreground",
                "prose-strong:font-semibold prose-strong:text-foreground",
                "prose-hr:my-8 prose-hr:border-border",
                "prose-code:rounded-md prose-code:bg-muted/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
                "prose-pre:my-6 prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:bg-muted/40 prose-pre:p-4",
                "prose-a:text-primary hover:prose-a:text-primary/80 prose-a:underline-offset-2 prose-a:transition-colors",
                "prose-img:rounded-xl prose-img:border prose-img:border-border prose-img:shadow-sm"
              )}
            >
              <Content />
            </div>
          </div>

          <aside className="hidden self-start xl:sticky xl:top-24 xl:block xl:w-[280px]">
            <div className="rounded-2xl border border-border bg-background p-5">
              <h2 className="text-xl">Have a question?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Send us a message and our team will get back to you shortly.
              </p>
              <div className="mt-4">
                <EnquiryForm fieldPrefix={`blog-${post.slug}`} textareaClassName="min-h-24" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
