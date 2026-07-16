import { SITE_DEFAULT_OG_IMAGE } from "@/lib/seo"

export type CaseStudy = {
  slug: string
  title: string
  organisation: string
  contactName: string
  role: string
  location: string
  courseCodes: string[]
  sectors: string[]
  participants?: number
  imageSrc: string
  summary: string
  challenge: string
  approach: string[]
  outcomes: string[]
  testimonial: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "st-pauls-catholic-college-greystanes",
    title: "Large-Scale In-School Delivery for Year 10 Cohort",
    organisation: "St Pauls Catholic College Greystanes",
    contactName: "Jessica George-Loulach",
    role: "Head of PDHPE",
    location: "Greystanes, NSW",
    courseCodes: ["HLTAID011"],
    sectors: ["In-Schools"],
    participants: 160,
    imageSrc: SITE_DEFAULT_OG_IMAGE,
    summary:
      "Miller First Aid delivered practical first aid training to a large student cohort using pod-based delivery to maintain engagement and quality.",
    challenge:
      "The school needed a provider that could train a large Year 10 cohort in one day while keeping delivery practical, organised, and engaging for students.",
    approach: [
      "Structured the day into 3 training pods to keep groups manageable.",
      "Used scenario-led practical rotations to maintain student engagement.",
      "Coordinated delivery logistics with school staff to ensure a smooth run sheet.",
    ],
    outcomes: [
      "160 students trained with high engagement across all pods.",
      "Seamless day-of delivery with no reported process issues.",
      "School rebooked Miller First Aid for the following year.",
    ],
    testimonial:
      "Highly recommend Zeb and the team who presented to 160 Year 10 boys. Training was separated into 3 pods which kept our boys engaged over the course of the day. The process was smooth with no issues. We have booked the team to return in 2024 and cannot wait!",
  },
  {
    slug: "zammit-ham-bacon-curers-safety-team",
    title: "Safety Team Upskilling for Workplace Incident Readiness",
    organisation: "Zammit Ham & Bacon Curers",
    contactName: "Ben Zammit",
    role: "Chief Financial Officer",
    location: "NSW",
    courseCodes: ["HLTAID011"],
    sectors: ["Corporate", "Manufacturing"],
    participants: 14,
    imageSrc: "/classroom.webp",
    summary:
      "A focused first aid program for a core workplace safety team to strengthen emergency response capability on site.",
    challenge:
      "The business wanted to upskill its safety team with practical training that was clearly relevant to real workplace incidents.",
    approach: [
      "Delivered first aid training tailored to workplace response scenarios.",
      "Focused on confidence and practical application, not just theory.",
      "Provided direct instruction from an experienced paramedic trainer.",
    ],
    outcomes: [
      "14 safety team members trained and accredited.",
      "Improved confidence and consistency in emergency response decisions.",
      "Strong internal stakeholder confidence in delivery quality.",
    ],
    testimonial:
      "Our business engaged Miller first aid to train 14 members of our safety team. Our instructor Zeb was very knowledgeable and provided excellent delivery to our staff. Highly recommend!",
  },
  {
    slug: "future-scholars-early-learning-centre",
    title: "Tailored First Aid Program for Early Learning Staff",
    organisation: "Future Scholars Early Learning Centre",
    contactName: "Sharon Frangi",
    role: "Director",
    location: "NSW",
    courseCodes: ["HLTAID011", "HLTAID012"],
    sectors: ["Childcare", "Education & Care"],
    imageSrc: "/allens.avif",
    summary:
      "Customised first aid training aligned to early learning context, helping staff build practical confidence for child-focused emergency situations.",
    challenge:
      "The centre was looking for training tailored to early learning settings, with scenarios staff could apply confidently in day-to-day care environments.",
    approach: [
      "Tailored scenarios for childcare and early learning environments.",
      "Balanced compliance outcomes with practical confidence-building.",
      "Delivered a supportive, highly interactive training format for staff.",
    ],
    outcomes: [
      "Improved staff confidence in first aid decision-making.",
      "High engagement and positive participant feedback.",
      "Training aligned effectively with early learning operational needs.",
    ],
    testimonial:
      "Absolutely thrilled with the training provided by Miller First Aid for our early learning child centre. The experience was tailored perfectly for our staff. Zeb and the team's expertise in first aid training was evident, and their approach made the learning process very enjoyable.",
  },
]

export function getAllCaseStudies() {
  return CASE_STUDIES
}

export function getCaseStudyBySlug(slug: string) {
  return CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug) ?? null
}
