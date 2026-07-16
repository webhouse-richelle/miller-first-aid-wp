import { SITE } from "@/lib/seo"

/** Params we persist (first-touch per session) and forward on enquiry submit */
export const ATTRIBUTION_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_id",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
  "twclid",
  "referrer_page",
] as const

export type AttributionKey = (typeof ATTRIBUTION_PARAM_KEYS)[number]

export const ATTRIBUTION_STORAGE_KEY = "miller_first_aid_attribution"

export const ENQUIRY_REFERRER_STORAGE_KEY = "miller_first_aid_enquiry_referrer"

const MAX_VALUE_LEN = 512

function getAllowedOrigins(): Set<string> {
  const out = new Set<string>()
  try {
    out.add(new URL(SITE).origin)
  } catch {
    /* ignore */
  }
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (env) {
    try {
      out.add(new URL(env).origin)
    } catch {
      /* ignore */
    }
  }
  return out
}

export function readAttributionFromUrlSearch(search: string): Partial<Record<AttributionKey, string>> {
  const q = search.startsWith("?") ? search.slice(1) : search
  const params = new URLSearchParams(q)
  const out: Partial<Record<AttributionKey, string>> = {}
  for (const key of ATTRIBUTION_PARAM_KEYS) {
    const v = params.get(key)
    if (v?.trim()) out[key] = v.trim().slice(0, MAX_VALUE_LEN)
  }
  return out
}

export function mergeAttributionIntoSession(fromUrl: Partial<Record<AttributionKey, string>>): void {
  if (typeof window === "undefined") return
  if (Object.keys(fromUrl).length === 0) return
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)
    const prev = raw ? (JSON.parse(raw) as Record<string, string>) : {}
    const merged = { ...prev }
    for (const [k, v] of Object.entries(fromUrl)) {
      if (v && !merged[k]) merged[k] = v
    }
    sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(merged))
  } catch {
    /* ignore corrupt storage */
  }
}

export function getStoredAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {}
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)
    if (!raw) return {}
    const o = JSON.parse(raw) as unknown
    if (!o || typeof o !== "object" || Array.isArray(o)) return {}
    const out: Record<string, string> = {}
    for (const [k, v] of Object.entries(o)) {
      if (typeof v === "string" && v.trim()) out[k] = v.trim().slice(0, MAX_VALUE_LEN)
    }
    return out
  } catch {
    return {}
  }
}

export function storeEnquiryReferrerFromCurrentPage(): void {
  if (typeof window === "undefined") return
  try {
    sessionStorage.setItem(ENQUIRY_REFERRER_STORAGE_KEY, window.location.href.slice(0, MAX_VALUE_LEN))
  } catch {
    /* quota / private mode */
  }
}

export function getStoredEnquiryReferrer(): string | undefined {
  if (typeof window === "undefined") return undefined
  try {
    const v = sessionStorage.getItem(ENQUIRY_REFERRER_STORAGE_KEY)?.trim()
    return v ? v.slice(0, MAX_VALUE_LEN) : undefined
  } catch {
    return undefined
  }
}

export function clearStoredEnquiryReferrer(): void {
  if (typeof window === "undefined") return
  try {
    sessionStorage.removeItem(ENQUIRY_REFERRER_STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

export function getAttributionForSubmit(search: string): Record<string, string> {
  const fromStorage = getStoredAttribution()
  const fromUrl = readAttributionFromUrlSearch(search)
  return {
    ...fromStorage,
    ...fromUrl,
  }
}

export function getEnquiryAttributionForSubmit(search: string): Record<string, string> {
  const merged: Record<string, string> = { ...getAttributionForSubmit(search) }
  let ref = merged.referrer_page?.trim() || getStoredEnquiryReferrer()

  if (!ref && typeof document !== "undefined") {
    try {
      const dr = document.referrer
      if (dr) {
        const here = typeof window !== "undefined" ? window.location.href : ""
        if (here && new URL(dr).origin === new URL(here).origin) {
          ref = dr.slice(0, MAX_VALUE_LEN)
        }
      }
    } catch {
      /* invalid URL */
    }
  }

  if (!ref && typeof window !== "undefined") {
    ref = window.location.href.slice(0, MAX_VALUE_LEN)
  }

  if (ref) merged.referrer_page = ref
  return merged
}

function isAllowedReferrerPageUrl(raw: string): boolean {
  try {
    const u = new URL(raw.trim())
    if (u.protocol !== "https:" && u.protocol !== "http:") return false
    const allowed = getAllowedOrigins()
    if (allowed.has(u.origin)) return true
    if (process.env.NODE_ENV === "development" && (u.hostname === "localhost" || u.hostname === "127.0.0.1")) {
      return true
    }
    return false
  } catch {
    return false
  }
}

export function attributionFieldLabel(key: string): string {
  if (key === "referrer_page") return "Referrer page"
  return key
}

export function parseAttributionPayload(raw: unknown): Record<string, string> | undefined {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return undefined
  const out: Record<string, string> = {}
  const allowed = new Set<string>(ATTRIBUTION_PARAM_KEYS)
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (!allowed.has(k) || typeof v !== "string") continue
    const t = v.trim().slice(0, MAX_VALUE_LEN)
    if (!t) continue
    if (k === "referrer_page") {
      if (isAllowedReferrerPageUrl(t)) out[k] = t
      continue
    }
    out[k] = t
  }
  return Object.keys(out).length > 0 ? out : undefined
}
