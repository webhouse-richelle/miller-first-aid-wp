import type { CourseOfferingAccordionItem } from "@/components/course-offerings-accordion"
import type { IndustryLandingConfig } from "@/lib/industry-landing-types"
import { ALL_CLIENT_TESTIMONIALS } from "@/lib/industries"
import { SITE_DEFAULT_OG_IMAGE } from "@/lib/seo"

const schoolsIndustryFaqs = [
  {
    id: "how-many-students",
    q: "How many students can you train in one day?",
    paragraphs: [
      "We regularly train cohorts of 100-200+ students in a single day. We split large groups into smaller training pods to maximise engagement and hands-on practice time.",
    ],
  },
  {
    id: "year-groups",
    q: "What year groups do you train?",
    paragraphs: [
      "Our In-School First Aid Program is most popular with Year 9 and Year 10 students, though we can adapt the program for senior students (Years 11-12) and younger year groups with age-appropriate content.",
    ],
  },
  {
    id: "pupil-free",
    q: "Can you deliver training on a pupil-free day or staff development day?",
    paragraphs: [
      "Yes. We frequently deliver staff CPR refreshers and first aid courses on pupil-free days, staff development days and during school holiday periods.",
    ],
  },
  {
    id: "prior-experience",
    q: "Do students need any prior experience or pre-course work?",
    paragraphs: [
      "No prior first aid experience is required. For blended delivery, students complete online theory questions before the training day. For full face-to-face delivery, everything is covered on the day.",
    ],
  },
  {
    id: "equipment",
    q: "What equipment do you bring?",
    paragraphs: [
      "We bring everything: CPR manikins (adult and infant), AED trainers, bandages, slings, EpiPen trainers and scenario props. Your school just needs to provide a suitable space such as a hall, library or large classroom.",
    ],
  },
  {
    id: "certificate-validity",
    q: "How long are the certificates valid?",
    paragraphs: [
      "HLTAID011 (Provide First Aid) and HLTAID012 (Education and Care) are valid for 3 years. HLTAID009 (CPR) is valid for 12 months, with the Australian Resuscitation Council recommending annual renewal.",
    ],
  },
  {
    id: "nationally-recognised",
    q: "Are your courses nationally recognised?",
    paragraphs: [
      "Yes. All accredited courses are delivered on behalf of Allens Training Pty Ltd RTO 90909 and result in a nationally recognised Statement of Attainment valid across Australia.",
    ],
  },
  {
    id: "areas",
    q: "What areas do you cover?",
    paragraphs: [
      "We deliver first aid training for schools across all of Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
    ],
  },
] as const

const schoolsTrainedList = [
  "St Pauls Catholic College Greystanes",
  "Monte Sant'Angelo Mercy College",
  "Our Lady of the Sacred Heart College",
  "Patrician Brothers College Blacktown",
  "Redfield College",
] as const

const schoolsWhatWeOffer = [
  {
    title: "Students",
    imageSrc: "/course-tabs/course-08.jpg",
    imageAlt: "Students participating in first aid training at school",
    body:
      "Accredited in-school first aid (HLTAID011) delivered in engaging, age-appropriate sessions. Large cohorts split into training pods, realistic scenarios for playground and sport injuries, and programs that slot into PDHPE, leadership days or wellbeing weeks.",
  },
  {
    title: "Teachers & school staff",
    imageSrc: "/course-tabs/course-09.avif",
    imageAlt: "School staff completing CPR and emergency response training",
    body:
      "First responder-style training, CPR refreshers (HLTAID009), asthma and anaphylaxis, and clear protocols for handover to emergency services, so the adults on duty know what to do the moment something goes wrong.",
  },
] as const

const schoolsCourseAccordionItems: CourseOfferingAccordionItem[] = [
  {
    code: "In-school",
    title: "In-School First Aid Program for Students",
    href: "/courses/in-school-program",
    imageSrc: "/course-tabs/course-08.jpg",
    content: [
      "Our signature program for Sydney high schools. Students receive nationally accredited first aid (HLTAID011 Provide First Aid) in an engaging, age-appropriate format, delivered in pods to keep cohorts engaged and hands-on.",
      "Training covers CPR and AED use, the DRSABCD action plan, choking, bleeding and shock, fractures and sprains, envenomation, asthma and anaphylaxis, and recovery position. Ideal for Year 9, 10 and senior students, PDHPE blocks, leadership days and wellbeing weeks.",
      "Full day (5-6 hours face-to-face) or blended delivery with pre-course online components. Nationally recognised Statement of Attainment (HLTAID011 Provide First Aid, includes HLTAID009 CPR), delivered on behalf of Allens Training Pty Ltd RTO 90909.",
    ],
  },
  {
    code: "School staff",
    title: "First Responder Training for School Staff: CPR and Emergency Response",
    href: "/courses/school-staff",
    imageSrc: "/course-tabs/course-09.avif",
    content: [
      "Teachers, administration and support staff are the first responders when an emergency happens on campus. This course builds confidence in high-pressure, real-world school situations.",
      "Topics include CPR and AED use, anaphylaxis and asthma action plans, seizure and diabetes emergencies, fracture and soft tissue care (bandaging, slings, R.I.C.E.R.), shock management, and incident handover to emergency services.",
      "About three hours face-to-face. HLTAID009 Provide Cardiopulmonary Resuscitation plus non-accredited emergency response components. Delivered on behalf of Allens Training Pty Ltd RTO 90909.",
    ],
  },
  {
    code: "HLTAID012",
    title: "HLTAID012: First Aid in an Education and Care Setting",
    href: "/courses/first-aid-for-education-care",
    imageSrc: "/course-tabs/course-03.avif",
    content: [
      "Built for schools with early learning, before- and after-school care, or OOSH programs. Meets National Quality Framework expectations for staff where they apply.",
      "You gain Provide First Aid with additional focus on infants and young children: infant CPR, child-specific choking, asthma and anaphylaxis care, and communicating with parents and caregivers.",
      "Full day (about 6 hours) or blended delivery. Certification HLTAID012 (includes HLTAID011 and HLTAID009). Delivered on behalf of Allens Training Pty Ltd RTO 90909.",
    ],
  },
  {
    code: "22556VIC & 22578VIC",
    title: "Asthma and Anaphylaxis Training for Schools",
    href: "/courses/asthma-anaphylaxis",
    imageSrc: "/course-tabs/course-05.avif",
    content: [
      "Combined 22556VIC and 22578VIC training for schools managing students with allergies, asthma action plans and individual health care plans.",
      "Recognition, emergency action plans, EpiPen and reliever administration, and care until emergency services arrive. Approximately 2-3 hours. Can be delivered on its own or bundled with CPR or first aid courses.",
    ],
  },
  {
    code: "HLTAID009",
    title: "CPR Refresher for School Staff (HLTAID009)",
    href: "/courses/cpr",
    imageSrc: "/course-tabs/course-01.webp",
    content: [
      "Annual CPR renewal aligns with Australian Resuscitation Council guidance and many NSW school policies. Fast, practical, and delivered on site at your school.",
      "Approximately 2-3 hours face-to-face, or 1 hour practical with pre-course online theory. HLTAID009 Provide Cardiopulmonary Resuscitation.",
    ],
  },
  {
    code: "HLTAID011",
    title: "Provide First Aid (HLTAID011)",
    href: "/courses/first-aid",
    imageSrc: "/course-tabs/course-02.avif",
    content: [
      "Core accredited first aid for staff and senior students who need the standard Provide First Aid qualification outside the dedicated in-school student program.",
      "Broad workplace-aligned training: CPR, choking, bleeding, fractures, envenomation, anaphylaxis and asthma, and more. Delivered on site. Browse full details on the course page.",
    ],
  },
]

const schoolsWhyTiles = [
  {
    title: "Paramedic-Led Instruction",
    body:
      "Every session is taught by active specialist paramedics who bring real emergency scenarios into the classroom, not retired trainers reading from slides.",
  },
  {
    title: "Tailored to the School Environment",
    body:
      "Our training covers the emergencies schools actually face: anaphylaxis, asthma, head injuries from sport, fractures from playground falls, choking, seizures and mental health crises. We adjust for primary students, high school students and staff groups.",
  },
  {
    title: "On Site at Your School",
    body:
      "We come to your campus with all equipment, manikins and resources. We work around your timetable, including pupil-free days, staff development days and school holiday periods.",
  },
  {
    title: "Engaging Delivery for Students",
    body:
      "We split large cohorts into smaller training pods to keep students engaged and ensure hands-on practice. Our Year 10 programs often train 100-200+ students in a single day.",
  },
] as const

const schoolsHowSteps = [
  {
    title: "Enquire",
    body:
      "Tell us about your school: number of students or staff, year groups, preferred dates and any specific requirements.",
  },
  {
    title: "Tailored Quote",
    body:
      "We recommend the best course combination for your school and provide a fixed-price quote. No hidden fees.",
  },
  {
    title: "Pre-Course Setup",
    body:
      "For blended delivery courses, enrolled participants receive access to online pre-course materials to complete before training day.",
  },
  {
    title: "Training Day",
    body:
      "Our paramedic trainers arrive with all equipment: manikins, AED trainers, bandages, EpiPen trainers and scenario props. We set up in your hall, library, classroom or any available space.",
  },
  {
    title: "Certification",
    body:
      "Participants who demonstrate competency receive their nationally recognised Statement of Attainment with fast turnaround. School coordinators receive a batch of all certificates for record-keeping.",
  },
] as const

export const SCHOOLS_INDUSTRY_LANDING: IndustryLandingConfig = {
  slug: "schools",
  jsonLd: {
    localBusinessDescription:
      "First aid training for schools in Sydney and NSW. Accredited CPR and first aid courses delivered on site by specialist paramedics.",
  },
  hero: {
    backgroundImage: "/classroom.webp",
    formTitle: "Get a Quote",
    formFieldPrefix: "schools-landing",
    h1: "First Aid Training for Schools in Sydney and NSW",
    intro:
      "Accredited first aid and CPR courses for students and staff, delivered on site at your school by specialist paramedics. We train primary schools, high schools and colleges across Greater Sydney, Western Sydney, the Hills District, Northern Beaches and regional NSW.",
  },
  whatWeOffer: {
    sectionId: "what-we-offer-schools-heading",
    heading: "Leading On-Site School First Aid Training for Students and Staff",
    intro:
      "One training partner for your whole school community, tailored pathways for young people and educators so first aid capability matches how your school actually operates day to day.",
    items: [...schoolsWhatWeOffer],
  },
  trainedList: {
    sectionId: "schools-trained-heading",
    heading: "Schools We Have Trained Across Sydney",
    intro:
      "Miller First Aid has delivered on site first aid training to schools and educational institutions across Sydney and NSW, including:",
    names: [...schoolsTrainedList],
  },
  courseAccordion: {
    headingId: "courses-schools-heading",
    title: "First Aid Courses for Schools",
    panelIdPrefix: "schools-course-panel",
    items: schoolsCourseAccordionItems,
    includeCoursesLinkInDescription: true,
  },
  whyChoose: {
    sectionId: "specialist-schools-heading",
    imageSrc: SITE_DEFAULT_OG_IMAGE,
    imageAlt: "Year 10 students practising CPR during on site first aid training at a Sydney school",
    eyebrow: "Specialist-Led",
    heading: "Why Sydney Schools Choose Miller First Aid",
    intro:
      "Paramedic-led delivery, scenarios matched to your campus, and onsite programs that fit your timetable.",
    tiles: [...schoolsWhyTiles],
  },
  howItWorks: {
    sectionId: "how-works-schools-heading",
    heading: "How On Site First Aid Training Works for Schools",
    steps: schoolsHowSteps.map((s) => ({ title: s.title, body: s.body })),
  },
  testimonials: {
    sectionId: "schools-say-heading",
    heading: "Client testimonials",
    items: ALL_CLIENT_TESTIMONIALS.map((t) => ({
      quote: t.quote,
      author: t.name,
      role: t.role,
      organisation: t.organisation,
      logoSrc: t.logoSrc ?? "/clients/zammit-logo.avif",
      logoAlt: t.logoAlt ?? `${t.organisation} logo`,
    })),
  },
  faqs: {
    sectionId: "schools-faq-heading",
    heading: "Frequently Asked Questions for Schools",
    items: schoolsIndustryFaqs.map((f) => ({ id: f.id, q: f.q, paragraphs: [...f.paragraphs] })),
  },
  footerCta: {
    headingId: "book-schools-heading",
    ctaTitle: "Book First Aid Training for Your School",
    ctaSubheading:
      "Get in touch to arrange on site first aid training for your school. Tell us your student or staff numbers, preferred dates and any specific requirements, and we will recommend the best training package and provide a fixed-price quote.",
    formTitle: "Enquire Now",
    fieldPrefix: "schools-booking",
  },
}
