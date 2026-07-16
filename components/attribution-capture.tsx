"use client"

import { Suspense, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { mergeAttributionIntoSession, readAttributionFromUrlSearch } from "@/lib/attribution"

function AttributionCaptureInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.toString()

  useEffect(() => {
    const fromUrl = readAttributionFromUrlSearch(search ? `?${search}` : "")
    mergeAttributionIntoSession(fromUrl)
  }, [pathname, search])

  return null
}

/** Persist UTM / click ids from the URL into sessionStorage so enquiry submits can include them after client navigations */
export function AttributionCapture() {
  return (
    <Suspense fallback={null}>
      <AttributionCaptureInner />
    </Suspense>
  )
}
