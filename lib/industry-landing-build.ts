import type { CourseOfferingAccordionItem } from "@/components/course-offerings-accordion"
import { ALL_CLIENT_TESTIMONIALS, type IndustryPageContent, type IndustryTestimonial } from "@/lib/industries"
import type { IndustryLandingConfig, IndustryLandingFaqItem, IndustryLandingTestimonial } from "@/lib/industry-landing-types"

const DEFAULT_LOGO = {
  logoSrc: "/clients/zammit-logo.avif",
  logoAlt: "Miller First Aid client logo",
} as const

const COURSE_IMAGE_BY_HREF: Record<string, string> = {
  "/courses/cpr": "/course-tabs/course-01.webp",
  "/courses/first-aid": "/course-tabs/course-02.avif",
  "/courses/first-aid-for-education-care": "/course-tabs/course-03.avif",
  "/courses/advanced-first-aid": "/course-tabs/course-04.avif",
  "/courses/asthma-anaphylaxis": "/course-tabs/course-05.avif",
  "/courses/provide-emergency-care-for-suspected-spinal-injury": "/course-tabs/course-06.jpg",
  "/courses/basic-oxygen-administration-for-first-aid": "/course-tabs/course-07.png",
  "/courses/in-school-program": "/course-tabs/course-08.jpg",
  "/courses/school-staff": "/course-tabs/course-09.avif",
  "/courses/infant-child-first-aid-workshop": "/course-tabs/course-10.avif",
}

function courseImageForHref(href: string): string {
  return COURSE_IMAGE_BY_HREF[href] ?? "/course-tabs/course-02.avif"
}

function faqId(slug: string, index: number, question: string): string {
  const base = question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48)
  return `${slug}-faq-${index}-${base || "q"}`
}

function testimonialToLanding(t: IndustryTestimonial): IndustryLandingTestimonial {
  const logoSrc = t.logoSrc ?? DEFAULT_LOGO.logoSrc
  const logoAlt = t.logoAlt ?? `${t.organisation} logo`
  return {
    quote: t.quote,
    author: t.name,
    role: t.role,
    organisation: t.organisation,
    logoSrc,
    logoAlt,
  }
}

function toAccordionItems(industry: IndustryPageContent): CourseOfferingAccordionItem[] {
  return industry.recommendedCourses.map((c) => ({
    code: c.code,
    title: c.name,
    href: c.href,
    imageSrc: courseImageForHref(c.href),
    content: [
      c.description,
      "Training is delivered on site at your venue across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW. We bring equipment, manikins and scenario materials so your team trains in a realistic environment.",
      "Accredited units are delivered on behalf of Allens Training Pty Ltd RTO 90909. Full unit details, prerequisites and outcomes are listed on each course page.",
    ],
  }))
}

export function buildIndustryLandingFromPage(industry: IndustryPageContent): IndustryLandingConfig {
  const { slug, label, heroImageSrc, hubDescription, audience, industryType, teamLabel, problemParagraphs } = industry

  const intro =
    `${hubDescription} We train ${audience} across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.`

  const defaultWhatIntro = `${hubDescription} Practical scenarios, nationally recognised units where applicable, and delivery that fits how ${industryType.toLowerCase()} operate day to day.`

  const pair = industry.whatWeOfferSection
  const defaultImageAlt1 = `First aid training context for ${label} in Sydney`
  const defaultImageAlt2 = `Practical first aid skills for ${label}`
  const firstCourseImage = courseImageForHref(industry.recommendedCourses[0]?.href ?? "/courses/first-aid")

  const whatWeOfferItems = pair
    ? [
        {
          title: pair.card1.title,
          body: pair.card1.body,
          imageSrc: pair.card1.imageSrc ?? heroImageSrc,
          imageAlt: pair.card1.imageAlt ?? defaultImageAlt1,
        },
        {
          title: pair.card2.title,
          body: pair.card2.body,
          imageSrc: pair.card2.imageSrc ?? firstCourseImage,
          imageAlt: pair.card2.imageAlt ?? defaultImageAlt2,
        },
      ]
    : [
        {
          title: "Risks your teams actually manage",
          imageSrc: heroImageSrc,
          imageAlt: defaultImageAlt1,
          body: [problemParagraphs[0], problemParagraphs[1]].filter(Boolean).join(" "),
        },
        {
          title: "Why industry-specific training matters",
          imageSrc: firstCourseImage,
          imageAlt: defaultImageAlt2,
          body: problemParagraphs[2] ?? problemParagraphs[1] ?? "",
        },
      ]

  const faqItems: IndustryLandingFaqItem[] = industry.faqs.map((f, i) => ({
    id: faqId(slug, i, f.question),
    q: f.question,
    paragraphs: [f.answer],
  }))

  const jsonLdDescription = `On site first aid training for ${label} in Sydney and NSW. ${hubDescription}`

  return {
    slug,
    jsonLd: {
      localBusinessDescription: jsonLdDescription,
    },
    hero: {
      backgroundImage: heroImageSrc,
      formTitle: "Enquire Now",
      formFieldPrefix: `industry-${slug}-hero`,
      h1: `First Aid Training for ${label}`,
      intro,
    },
    whatWeOffer: {
      sectionId: `${slug}-what-we-offer-heading`,
      heading: pair?.heading ?? `On-site first aid training built for ${industryType}`,
      intro: pair?.intro ?? defaultWhatIntro,
      items: whatWeOfferItems,
    },
    trainedList: undefined,
    courseAccordion: {
      headingId: `${slug}-courses-heading`,
      title: `Recommended First Aid Courses for ${label}`,
      panelIdPrefix: `${slug}-course-panel`,
      items: toAccordionItems(industry),
      includeCoursesLinkInDescription: true,
    },
    whyChoose: {
      sectionId: `${slug}-why-heading`,
      imageSrc: heroImageSrc,
      imageAlt: `On site first aid training for ${label} teams`,
      eyebrow: "Specialist-Led",
      heading: `Why ${label} Choose Miller First Aid`,
      intro: hubDescription,
      tiles: [
        {
          title: "Paramedic-led instruction",
          body: "Sessions are led by active specialist paramedics who bring credible, real-world emergency experience into practical training, not generic slide-only delivery.",
        },
        {
          title: `Tailored to ${label.toLowerCase()} contexts`,
          body: problemParagraphs[0] ?? hubDescription,
        },
        {
          title: "Delivered on site at your venue",
          body: "We train at your workplace, facility, depot, school or club with equipment and scenarios matched to your environment and roster realities.",
        },
        {
          title: "Hands-on, scenario-driven practice",
          body: problemParagraphs[1] ?? problemParagraphs[0] ?? hubDescription,
        },
      ],
    },
    howItWorks: {
      sectionId: `${slug}-how-heading`,
      heading: `How On Site First Aid Training Works for ${label}`,
      steps: [
        {
          title: "Enquire",
          body: `Tell us about your ${audience}, preferred dates, venue and any compliance or roster constraints.`,
        },
        {
          title: "Tailored quote",
          body: "We recommend the right unit mix for your risk profile and provide a clear fixed-price quote with delivery options.",
        },
        {
          title: "Pre-course setup",
          body: "For blended courses, participants receive access to online components before the practical session.",
        },
        {
          title: "Training day",
          body: "Our trainers arrive with equipment and run practical rotations so your team leaves confident, not just ticked-off.",
        },
        {
          title: "Certification",
          body: "Where units are accredited, participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
        },
      ],
    },
    testimonials: {
      sectionId: `${slug}-testimonials-heading`,
      heading: "Client testimonials",
      items: ALL_CLIENT_TESTIMONIALS.map(testimonialToLanding),
    },
    faqs: {
      sectionId: `${slug}-faq-heading`,
      heading: `Frequently Asked Questions for ${label}`,
      items: faqItems,
    },
    footerCta: {
      headingId: `${slug}-footer-cta`,
      ctaTitle: `Ready to Train Your ${teamLabel}?`,
      ctaSubheading:
        "Tell us about your site, schedule and team size. We will recommend the best training package for your organisation and provide clear next steps.",
      formTitle: "Enquire Now",
      fieldPrefix: `${slug}-footer`,
    },
  }
}
