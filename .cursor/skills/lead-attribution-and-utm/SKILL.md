---
name: lead-attribution-and-utm
description: >-
  Marketing site pattern for UTM / click-id capture (sessionStorage), enquiry
  referrer, API sanitisation, and email inclusion. Miller First Aid mirrors
  william-advisory-website / webhouse-website.
---

# Lead attribution and UTM (Miller First Aid)

## Implementation (this repo)

| Piece | Role |
|--------|------|
| `lib/attribution.ts` | Param keys, session merge, `getEnquiryAttributionForSubmit`, `parseAttributionPayload` |
| `components/attribution-capture.tsx` | Merge URL params into `sessionStorage` on navigation |
| `components/enquiry-referrer-capture.tsx` | Pointer capture for links to **`/contact`** |
| `app/layout.tsx` | Mount both capture components in `<body>` |
| `app/api/enquiry/route.ts` | `parseAttributionPayload(body.attribution)`; **Attribution:** block in email |

Storage keys: `miller_first_aid_attribution`, `miller_first_aid_enquiry_referrer`.

Canonical origin for referrer validation: `SITE` in `lib/seo.ts` plus optional `NEXT_PUBLIC_SITE_URL`.

## Related repos

- **william-advisory-website** — same pattern (adds newsletter API).
- **webhouse-website** — `src/lib/attribution.ts`, book-call flow.
