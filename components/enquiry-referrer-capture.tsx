"use client"

import { useEffect } from "react"
import { storeEnquiryReferrerFromCurrentPage } from "@/lib/attribution"

const ENQUIRY_DESTINATION_PREFIXES = ["/contact"] as const

function isEnquiryDestinationHref(href: string): boolean {
  if (!href.startsWith("/") || href.startsWith("//")) return false
  const path = href.split("?")[0].split("#")[0]
  return ENQUIRY_DESTINATION_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`))
}

/** Before navigation to /contact, store the current page URL for the enquiry submission. */
export function EnquiryReferrerCapture() {
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.("a[href]")
      if (!el) return
      const href = el.getAttribute("href")
      if (!href || !isEnquiryDestinationHref(href)) return
      storeEnquiryReferrerFromCurrentPage()
    }
    document.addEventListener("pointerdown", handler, true)
    return () => document.removeEventListener("pointerdown", handler, true)
  }, [])

  return null
}
