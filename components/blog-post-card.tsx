import Link from "next/link"
import Image from "next/image"
import type { BlogPost } from "@/content/blog"

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-md"
    >
      {post.mainImageUrl ? (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={post.mainImageUrl}
            alt={post.mainImageAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      ) : null}
      <div className="p-5 md:p-6">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{post.author}</span>
          {" · "}
          {new Date(post.publishedAt).toLocaleDateString("en-AU", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3 className="mt-2 text-2xl">{post.title}</h3>
        <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
        <span className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">
          Read article
        </span>
      </div>
    </Link>
  )
}
