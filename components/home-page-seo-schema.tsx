import { homeFaqItemsForSchema } from "@/lib/home-faq"

const SITE = "https://www.millerfirstaid.com.au"

const reviewEntities = [
  {
    author: "Jessica George-Loulach",
    reviewBody:
      "Highly recommend Zeb and the team who presented to 160 Year 10 boys. Training was separated into 3 pods which kept our boys engaged over the course of the day.",
  },
  {
    author: "Ben Zammit",
    reviewBody:
      "Our business engaged Miller First Aid to train 14 members of our safety team. Our instructor Zeb was very knowledgeable and provided excellent delivery.",
  },
  {
    author: "Sharon Frangi",
    reviewBody:
      "Absolutely thrilled with the training provided by Miller First Aid for our early learning centre. The experience was tailored perfectly for our staff.",
  },
]

export function HomePageSeoSchema() {
  const faqEntities = homeFaqItemsForSchema()
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Miller First Aid",
    url: SITE,
    telephone: "1300 807 669",
    description:
      "On site first aid training in Sydney by specialist paramedics. Nationally accredited CPR and first aid courses delivered at your workplace or school.",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Sydney",
    },
    priceRange: "$$",
  }

  const reviews = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviewEntities.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        reviewBody: r.reviewBody,
        itemReviewed: { "@type": "LocalBusiness", name: "Miller First Aid", url: SITE },
      },
    })),
  }

  const courses = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "On site first aid courses Sydney",
    itemListElement: [
      { position: 1, item: { "@type": "Course", name: "HLTAID009 CPR", url: `${SITE}/courses/cpr` } },
      { position: 2, item: { "@type": "Course", name: "HLTAID011 Provide First Aid", url: `${SITE}/courses/first-aid` } },
      {
        position: 3,
        item: { "@type": "Course", name: "HLTAID012 First Aid in Education and Care", url: `${SITE}/courses/first-aid-for-education-care` },
      },
      { position: 4, item: { "@type": "Course", name: "HLTAID014 Advanced First Aid", url: `${SITE}/courses/advanced-first-aid` } },
      { position: 5, item: { "@type": "Course", name: "Asthma and Anaphylaxis", url: `${SITE}/courses/asthma-anaphylaxis` } },
      {
        position: 6,
        item: {
          "@type": "Course",
          name: "PUAEM007 Emergency Care for Suspected Spinal Injury",
          url: `${SITE}/courses/provide-emergency-care-for-suspected-spinal-injury`,
        },
      },
      {
        position: 7,
        item: { "@type": "Course", name: "22575VIC Basic Oxygen Administration", url: `${SITE}/courses/basic-oxygen-administration-for-first-aid` },
      },
      { position: 8, item: { "@type": "Course", name: "In School Program", url: `${SITE}/courses/in-school-program` } },
      { position: 9, item: { "@type": "Course", name: "School Staff First Responder", url: `${SITE}/courses/school-staff` } },
      { position: 10, item: { "@type": "Course", name: "Infant and Child First Aid Workshop", url: `${SITE}/courses/infant-child-first-aid-workshop` } },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviews) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courses) }} />
    </>
  )
}
