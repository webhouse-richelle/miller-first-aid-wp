import { NextResponse } from "next/server"
import { Resend } from "resend"
import {
  ATTRIBUTION_PARAM_KEYS,
  attributionFieldLabel,
  parseAttributionPayload,
} from "@/lib/attribution"

const DEFAULT_FROM = "Miller First Aid <enquiries@mail.millerfirstaid.com.au>"
const DEFAULT_TO = "info@millerfirstaid.com.au"

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("enquiry: RESEND_API_KEY is not set")
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 })
  }

  const { fullName, email, phone, message, fieldPrefix, attribution: attributionRaw } = body as Record<
    string,
    unknown
  >

  const attribution = parseAttributionPayload(attributionRaw)

  if (!isNonEmptyString(fullName) || fullName.length > 200) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 })
  }
  if (!isNonEmptyString(email) || email.length > 320) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
  }
  if (!isNonEmptyString(phone) || phone.length > 40) {
    return NextResponse.json({ error: "Phone is required." }, { status: 400 })
  }
  if (!isNonEmptyString(message) || message.length > 10000) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 })
  }

  const formLabel =
    typeof fieldPrefix === "string" && fieldPrefix.trim().length > 0 ? fieldPrefix.trim() : "enquiry"

  const from = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM
  const to = process.env.ENQUIRY_TO_EMAIL?.trim() || DEFAULT_TO

  const attributionLines: string[] = []
  if (attribution) {
    for (const k of ATTRIBUTION_PARAM_KEYS) {
      const v = attribution[k]
      if (v) attributionLines.push(`${attributionFieldLabel(k)}: ${v}`)
    }
  }

  const text = [
    "New enquiry from millerfirstaid.com.au",
    "",
    `Form / context: ${formLabel}`,
    `Name: ${fullName.trim()}`,
    `Email: ${email.trim()}`,
    `Phone: ${phone.trim()}`,
    "",
    "Message:",
    message.trim(),
    ...(attributionLines.length > 0 ? ["", "Attribution:", ...attributionLines] : []),
    "",
    `Submitted: ${new Date().toISOString()}`,
  ].join("\n")

  const resend = new Resend(apiKey)

  const result = await resend.emails.send({
    from,
    to: [to],
    replyTo: email.trim(),
    subject: `Website enquiry — ${fullName.trim()}`,
    text,
  })

  if (result.error) {
    console.error("enquiry: Resend error", result.error)
    return NextResponse.json({ error: "Could not send your message. Please try again or call us." }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
