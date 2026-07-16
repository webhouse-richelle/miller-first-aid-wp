"use client"

import { useEffect, useState, type ReactNode } from "react"

export type TocEntry = {
  id: string
  title: string
}

function TocLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: ReactNode
}) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault()
        const target = document.querySelector(href)
        if (!(target instanceof HTMLElement)) return
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }}
      className={[
        "block border-l-2 py-1 pl-3 text-sm font-medium transition-colors",
        active
          ? "border-primary text-foreground"
          : "border-transparent text-muted-foreground/80 hover:text-foreground/90",
      ].join(" ")}
    >
      {children}
    </a>
  )
}

export function BlogPostToc({ outline }: { outline: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const headings = outline
      .map((entry) => ({ entry, el: document.getElementById(entry.id) }))
      .filter((item): item is { entry: TocEntry; el: HTMLElement } => item.el != null)

    if (headings.length === 0) return

    let raf = 0
    const updateActive = () => {
      raf = 0
      let nextId = headings[0]?.entry.id ?? null

      for (const item of headings) {
        if (item.el.getBoundingClientRect().top <= 220) {
          nextId = item.entry.id
        } else {
          break
        }
      }
      setActiveId(nextId)
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(updateActive)
    }

    updateActive()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })

    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [outline])

  if (outline.length === 0) return null

  return (
    <>
      <section className="mb-8 max-h-[min(55vh,26rem)] overflow-y-auto overscroll-y-contain rounded-2xl border border-border bg-background p-5 [-webkit-overflow-scrolling:touch] xl:hidden">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">On this page</p>
        <nav aria-label="Table of contents" className="space-y-0.5 pr-1">
          {outline.map((entry) => (
            <TocLink key={entry.id} href={`#${entry.id}`} active={activeId === entry.id}>
              {entry.title}
            </TocLink>
          ))}
        </nav>
      </section>

      <aside className="hidden max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-y-contain self-start pr-1 [-webkit-overflow-scrolling:touch] xl:sticky xl:top-24 xl:block xl:w-[240px]">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">On this page</p>
        <nav aria-label="Table of contents" className="space-y-0.5 pb-2">
          {outline.map((entry) => (
            <TocLink key={entry.id} href={`#${entry.id}`} active={activeId === entry.id}>
              {entry.title}
            </TocLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
