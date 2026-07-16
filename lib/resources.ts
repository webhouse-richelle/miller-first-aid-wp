export type ResourceItem = {
  /** Short label without “(PDF)”; the hub page appends “ (PDF)”. */
  title: string
  /** Path under `public/`, served from site root (e.g. `/resources/anaphylaxis-management.pdf`). */
  pdfHref: string
}

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    title: "Anaphylaxis Management",
    pdfHref: "/resources/anaphylaxis-management.pdf",
  },
  {
    title: "Seizure Management",
    pdfHref: "/resources/seizure-management.pdf",
  },
  {
    title: "5 Step Guide to First Responder Mental Health",
    pdfHref: "/resources/first-responder-mental-health-guide.pdf",
  },
  {
    title: "Supporting Someone in Emotional Distress",
    pdfHref: "/resources/supporting-someone-in-emotional-distress.pdf",
  },
  {
    title: "Recognising Concerns vs Crisis Situations",
    pdfHref: "/resources/recognising-concerns-vs-crisis-situations.pdf",
  },
  {
    title: "Comprehensive First Aid Manual",
    pdfHref: "/resources/comprehensive-first-aid-manual.pdf",
  },
]

export function getAllResources() {
  return RESOURCE_ITEMS
}
