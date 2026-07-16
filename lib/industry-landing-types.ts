import type { CourseOfferingAccordionItem } from "@/components/course-offerings-accordion"

export type IndustryLandingFaqItem = {
  id: string
  q: string
  paragraphs: string[]
}

export type IndustryLandingWhatWeOfferItem = {
  title: string
  imageSrc: string
  imageAlt: string
  body: string
}

export type IndustryLandingWhyTile = {
  title: string
  body: string
}

export type IndustryLandingHowStep = {
  title: string
  body: string
}

export type IndustryLandingTestimonial = {
  quote: string
  author: string
  role: string
  organisation: string
  logoSrc: string
  logoAlt: string
}

export type IndustryLandingFooterCta = {
  headingId: string
  ctaTitle: string
  ctaSubheading: string
  formTitle: string
  fieldPrefix: string
}

/** Full industry landing: drives the same sections as the schools page. */
export type IndustryLandingConfig = {
  slug: string
  jsonLd: {
    localBusinessDescription: string
  }
  hero: {
    backgroundImage: string
    formTitle: string
    formFieldPrefix: string
    h1: string
    intro: string
  }
  whatWeOffer: {
    sectionId: string
    heading: string
    intro: string
    items: IndustryLandingWhatWeOfferItem[]
  }
  trainedList?: {
    sectionId: string
    heading: string
    intro: string
    names: string[]
  }
  courseAccordion: {
    headingId: string
    title: string
    panelIdPrefix: string
    items: CourseOfferingAccordionItem[]
    /** When true, render the “full course list” link in the accordion intro. */
    includeCoursesLinkInDescription?: boolean
  }
  whyChoose: {
    sectionId: string
    imageSrc: string
    imageAlt: string
    eyebrow: string
    heading: string
    intro: string
    tiles: IndustryLandingWhyTile[]
  }
  howItWorks: {
    sectionId: string
    heading: string
    steps: IndustryLandingHowStep[]
  }
  testimonials: {
    sectionId: string
    heading: string
    items: IndustryLandingTestimonial[]
  }
  faqs: {
    sectionId: string
    heading: string
    items: IndustryLandingFaqItem[]
  }
  footerCta: IndustryLandingFooterCta
}
