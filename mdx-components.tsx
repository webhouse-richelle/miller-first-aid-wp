import type { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type MdxComponentProps = {
  children?: ReactNode
  className?: string
  href?: string
  [key: string]: unknown
}

type MDXComponents = Record<string, (props: MdxComponentProps) => ReactNode>

function slugifyHeading(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children)
  }

  if (Array.isArray(children)) {
    return children.map(textFromChildren).join("")
  }

  if (children && typeof children === "object" && "props" in children) {
    return textFromChildren(
      (children as { props?: { children?: ReactNode } }).props?.children ?? ""
    )
  }

  return ""
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, className, ...props }) => (
      <h2
        id={slugifyHeading(textFromChildren(children))}
        className={["scroll-mt-28", className].filter(Boolean).join(" ")}
        {...(props as Record<string, unknown>)}
      >
        {children}
      </h2>
    ),
    h3: ({ children, className, ...props }) => (
      <h3
        id={slugifyHeading(textFromChildren(children))}
        className={["scroll-mt-28", className].filter(Boolean).join(" ")}
        {...(props as Record<string, unknown>)}
      >
        {children}
      </h3>
    ),
    a: ({ href = "", className, children, ...props }) => {
      if (href.startsWith("/")) {
        return (
          <Link href={href} className={className}>
            {children}
          </Link>
        )
      }

      return (
        <a href={href} className={className} {...(props as Record<string, unknown>)}>
          {children}
        </a>
      )
    },
    /** GFM tables: wrapper scrolls on small screens; inner table keeps `display: table` (never `block`). */
    table: ({ children, className, ...props }) => (
      <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border bg-background shadow-sm">
        <table
          className={cn(
            "w-full min-w-[min(100%,36rem)] border-collapse text-left text-sm md:text-base",
            "[&_th]:border-b [&_th]:border-border [&_th]:bg-muted/60 [&_th]:px-4 [&_th]:py-3 [&_th]:font-semibold [&_th]:text-foreground",
            "[&_td]:border-b [&_td]:border-border/80 [&_td]:px-4 [&_td]:py-3 [&_td]:align-top",
            "[&_tbody_tr:last-child_td]:border-b-0",
            "[&_a]:font-medium [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline",
            className
          )}
          {...(props as Record<string, unknown>)}
        >
          {children}
        </table>
      </div>
    ),
    ...components,
  }
}
