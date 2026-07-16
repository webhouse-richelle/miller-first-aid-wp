export type IndustryCourse = {
  code: string
  name: string
  href: string
  description: string
}

export type IndustryTestimonial = {
  quote: string
  name: string
  role: string
  organisation: string
  /** Shown on industry landing testimonial cards; sensible default applied when building landings if omitted. */
  logoSrc?: string
  logoAlt?: string
}

export type IndustryFaq = {
  question: string
  answer: string
}

/** Optional override for the two-card section below the hero on industry landings. */
export type IndustryWhatWeOfferCardContent = {
  title: string
  body: string
  imageSrc?: string
  imageAlt?: string
}

export type IndustryWhatWeOfferSectionOverride = {
  heading?: string
  intro?: string
  card1: IndustryWhatWeOfferCardContent
  card2: IndustryWhatWeOfferCardContent
}

export type IndustryPageContent = {
  slug: string
  heroImageSrc: string
  /** Sticky rounded image beside main content; defaults to `heroImageSrc` when omitted. */
  bodyImageSrc?: string
  /** Alt text for the body-column image; sensible default is derived from the label. */
  bodyImageAlt?: string
  label: string
  /** One line for hub and home listings (no em dashes). */
  hubDescription: string
  /** SERP meta description; must stay ≤160 characters (see `clampMetaDescription` in `lib/seo.ts`). */
  metaDescription: string
  audience: string
  teamLabel: string
  industryType: string
  problemParagraphs: string[]
  /** When set, replaces the default two “what we offer” cards built from problem paragraphs. */
  whatWeOfferSection?: IndustryWhatWeOfferSectionOverride
  recommendedCourses: IndustryCourse[]
  testimonials: IndustryTestimonial[]
  faqs: IndustryFaq[]
}

const testimonialSchools: IndustryTestimonial = {
  quote:
    "Highly recommend Zeb and the team who presented to 160 Year 10 boys. Training was separated into 3 pods which kept our boys engaged over the course of the day.",
  name: "Jessica George-Loulach",
  role: "Head of PDHPE",
  organisation: "St Pauls Catholic College Greystanes",
  logoSrc: "/clients/st-pauls-logo.avif",
  logoAlt: "St Pauls Catholic College Greystanes logo",
}

const testimonialChildcare: IndustryTestimonial = {
  quote:
    "Absolutely thrilled with the training provided by Miller First Aid for our early learning child centre. The experience was tailored perfectly for our staff.",
  name: "Sharon Frangi",
  role: "Director",
  organisation: "Future Scholars Early Learning Centre",
  logoSrc: "/clients/future-scholars-logo.png",
  logoAlt: "Future Scholars Early Learning Centre logo",
}

const testimonialWorkplace: IndustryTestimonial = {
  quote:
    "Our business engaged Miller first aid to train 14 members of our safety team. Our instructor Zeb was very knowledgeable and provided excellent delivery to our staff.",
  name: "Ben Zammit",
  role: "Chief Financial Officer",
  organisation: "Zammit Ham & Bacon Curers",
  logoSrc: "/clients/zammit-logo.avif",
  logoAlt: "Zammit Ham and Bacon Curers logo",
}

/** Shown in full on every industry landing page (not filtered by sector). */
export const ALL_CLIENT_TESTIMONIALS: IndustryTestimonial[] = [
  testimonialSchools,
  testimonialChildcare,
  testimonialWorkplace,
]

export const INDUSTRY_PAGES: IndustryPageContent[] = [
  {
    slug: "schools",
    heroImageSrc: "/classroom.webp",
    label: "Schools",
    hubDescription:
      "On site first aid for classrooms, playgrounds and school events, with scenarios matched to staff duties and student safety.",
    metaDescription:
      "On-site school first aid and CPR across Sydney and NSW for staff and students, playgrounds, sport, asthma and anaphylaxis. Miller First Aid, Allens RTO 90909.",
    audience: "school staff and education teams",
    teamLabel: "Staff",
    industryType: "Schools",
    problemParagraphs: [
      "School environments include playground incidents, sports injuries, allergic reactions, asthma episodes, and medical emergencies during excursions or events.",
      "Generic first aid training often misses school-specific duty of care scenarios, supervision dynamics, and incident response coordination with teachers and leadership teams.",
      "Strong first aid capability supports student safety, compliance obligations, and confident emergency response when minutes matter.",
    ],
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Core school-ready first aid training for common incidents, injuries, and emergency response across classrooms, playgrounds, and events.",
      },
      {
        code: "HLTAID012",
        name: "Provide First Aid in an Education and Care Setting",
        href: "/courses/first-aid-for-education-care",
        description:
          "Designed for education contexts with child-focused response protocols for asthma, anaphylaxis, seizures, and trauma.",
      },
      {
        code: "22578VIC + 22556VIC",
        name: "Asthma and Anaphylaxis",
        href: "/courses/asthma-anaphylaxis",
        description:
          "Practical training for urgent allergy and asthma management in school environments where rapid action is essential.",
      },
    ],
    testimonials: [testimonialSchools],
    faqs: [
      {
        question: "How long does the training take?",
        answer:
          "Most school sessions are delivered in half-day or full-day formats depending on course selection and staff numbers.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "We deliver onsite at your school or nominated venue, with setup tailored to available classroom or hall space.",
      },
      {
        question: "How many people can attend per session?",
        answer:
          "Session sizes are flexible. We can run single groups or rotate multiple groups across the day for larger schools.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Participants receive nationally recognised certification issued on behalf of Allens Training Pty Ltd (RTO 90909).",
      },
      {
        question: "Can you train teaching and non-teaching staff together?",
        answer:
          "Yes. We can tailor examples and practical scenarios for mixed teams, including teachers, support staff, and administration.",
      },
    ],
  },
  {
    slug: "sports-clubs",
    heroImageSrc: "/industries/sports-clubs-hero.webp",
    label: "Sports Clubs",
    hubDescription:
      "On site first aid for training, matches and events so coaches and volunteers can manage injuries, concussion and emergencies with confidence.",
    metaDescription:
      "On-site first aid for NSW sports clubs: sideline trauma, concussion, asthma and anaphylaxis outdoors. Paramedics train coaches and volunteers. Allens RTO 90909.",
    audience: "coaches, volunteers, officials and club committees",
    teamLabel: "Club",
    industryType: "Sports Clubs",
    problemParagraphs: [
      "Community and competitive sport involves contact injuries, sprains, fractures, concussion risk, asthma and anaphylaxis outdoors, and cardiac emergencies where minutes matter.",
      "Volunteer-led clubs often lack hospital-grade resources, so training must be practical for sideline response, escalation decisions, and keeping players safe across age groups.",
      "Strong first aid capability protects members, supports event duty of care, and helps committees meet expectations for sanctioned competition and facility use.",
    ],
    whatWeOfferSection: {
      intro:
        "Match-day injuries, weather exposure and volunteer rosters need first aid that fits how clubs actually train and compete, not a generic workplace slideshow.",
      card1: {
        title: "Sideline injuries, concussion decisions and escalation",
        body:
          "We practise bleeding control, sprains and fractures, heat-related illness, asthma and anaphylaxis outdoors, and when to stop play and call an ambulance. Scenarios reflect grass and court sports, mixed age groups, and limited equipment on the bench.",
      },
      card2: {
        title: "Volunteer confidence, committees and event duty of care",
        body:
          "Coaches and managers learn clear communication with officials, parents and triple zero, basic crowd and player safety, and practical priorities when one or two people are responsible for a whole ground or hall.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Broad first aid skills for match-day incidents, trauma, bleeding, and medical emergencies on the field or courtside.",
      },
      {
        code: "HLTAID009",
        name: "Provide Cardiopulmonary Resuscitation (CPR)",
        href: "/courses/cpr",
        description:
          "Confidence in CPR and AED use when cardiac events occur during training or competition.",
      },
      {
        code: "22578VIC + 22556VIC",
        name: "Asthma and Anaphylaxis",
        href: "/courses/asthma-anaphylaxis",
        description:
          "Rapid response for respiratory emergencies common in outdoor and indoor sport environments.",
      },
    ],
    testimonials: [testimonialWorkplace],
    faqs: [
      {
        question: "Do you cover concussion recognition and when to call an ambulance?",
        answer:
          "Yes. We teach recognition of red flags, immediate player safety, sideline management and clear escalation to emergency services, aligned with common community sport expectations and your club policies.",
      },
      {
        question: "Can coaches, managers and committee members train in one session?",
        answer:
          "Yes. We often train mixed volunteer groups in a single booking and adjust scenarios for roles on the bench, canteen, boundary and changerooms.",
      },
      {
        question: "What if our club only has a small room or shared pavilion?",
        answer:
          "We bring compact equipment layouts and rotate practical stations so limited space still allows hands-on CPR, bandaging and scenario practice.",
      },
      {
        question: "Can you run training on a weeknight before training starts?",
        answer:
          "We frequently deliver evening sessions at clubrooms or courts so volunteers do not lose a full weekend. Length depends on the course, for example CPR versus full Provide First Aid.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "On site at your club rooms, courts, fields or nominated hall across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Where you enrol in accredited units, participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
      },
    ],
  },
  {
    slug: "childcare-centres",
    heroImageSrc: "/industries/childcare-hero.webp",
    label: "Childcare Centres",
    hubDescription:
      "Train educators for infant and child emergencies, ratio pressures and regulator expectations in early learning centres.",
    metaDescription:
      "On-site childcare first aid across Sydney and NSW: HLTAID012, infant CPR, choking, asthma and anaphylaxis in rooms and yards. Paramedic-led. Allens RTO 90909.",
    audience: "childcare professionals and centre teams",
    teamLabel: "Team",
    industryType: "Childcare Centres",
    problemParagraphs: [
      "Childcare settings face unique risks including choking, allergic reactions, fevers, falls, and rapid changes in a child's condition.",
      "Standard first aid programs do not always focus enough on infant and child presentation, educator responsibilities, and early learning workflows.",
      "Targeted childcare first aid training improves response quality, supports regulatory expectations, and protects children, families, and staff.",
    ],
    whatWeOfferSection: {
      intro:
        "Early learning is not a small version of a workplace: ratios, supervision and child-specific emergencies need training that matches rooms, yards and regulatory expectations.",
      card1: {
        title: "Infants and children: choking, fever, falls and rapid change",
        body:
          "We emphasise age-appropriate assessment, calm communication with children, parent handover and documentation habits educators use every day. Practical work includes child CPR, choking, asthma and anaphylaxis, and common playground and room incidents.",
      },
      card2: {
        title: "HLTAID012, asthma and anaphylaxis for education and care teams",
        body:
          "Pathways align with common NSW early childhood expectations for accredited first aid and refresher cycles. We deliver on site so scenarios use your gates, sleep rooms and outdoor areas rather than generic office examples.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID012",
        name: "Provide First Aid in an Education and Care Setting",
        href: "/courses/first-aid-for-education-care",
        description:
          "Specialised training for early childhood teams, focused on child-specific first aid and emergency management requirements.",
      },
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Builds complete first aid confidence for centre staff managing common incidents and high-pressure situations.",
      },
      {
        code: "22578VIC + 22556VIC",
        name: "Asthma and Anaphylaxis",
        href: "/courses/asthma-anaphylaxis",
        description:
          "Strengthens rapid recognition and treatment pathways for asthma and anaphylaxis in young children.",
      },
    ],
    testimonials: [testimonialChildcare],
    faqs: [
      {
        question: "Is HLTAID012 the right qualification for educators in NSW early childhood services?",
        answer:
          "Many centres use HLTAID012 Provide First Aid in an Education and Care Setting for staff who require first aid aligned to education and care contexts. We can recommend a unit mix after you share your service type, ages of children and any regulator or approved provider guidance you follow.",
      },
      {
        question: "How do you practise infant choking and anaphylaxis realistically on site?",
        answer:
          "We bring infant and child manikins, trainer autoinjectors and inhaler spacers, and run scenarios in your rooms and yard so ratios, supervision and room layout feel familiar.",
      },
      {
        question: "Can training be split across shifts so we keep ratios legal?",
        answer:
          "Yes. We often run two blocks across a day or separate dates so part of the team always remains with children while others complete practical components.",
      },
      {
        question: "How long does HLTAID012 usually take on site?",
        answer:
          "Face-to-face time depends on blended versus full face-to-face delivery and group size. We confirm the schedule in your quote so coordinators can plan around sleep, meals and transitions.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "At your centre or nominated venue across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "Who issues statements of attainment?",
        answer:
          "Accredited units are delivered on behalf of Allens Training Pty Ltd RTO 90909. Participants who meet assessment requirements receive nationally recognised statements of attainment.",
      },
    ],
  },
  {
    slug: "manufacturing",
    heroImageSrc: "/industries/manufacturing-hero.webp",
    label: "Manufacturing",
    hubDescription:
      "First aid aligned to plant hazards, shift rosters and machinery risks so your floor teams can respond without guesswork.",
    metaDescription:
      "On-site manufacturing first aid in NSW: machinery trauma, bleeding, burns, crush awareness. Shift-friendly for floor teams and officers. Allens RTO 90909.",
    audience: "manufacturing workers and safety teams",
    teamLabel: "Team",
    industryType: "Manufacturing Teams",
    problemParagraphs: [
      "Manufacturing environments involve machinery risks, crush injuries, lacerations, burns, and incidents that can escalate quickly without early intervention.",
      "Generic training often lacks context around production floors, shift teams, and real workflow constraints during emergency response.",
      "Effective first aid training helps reduce incident severity, supports workplace obligations, and builds confidence across safety-critical roles.",
    ],
    whatWeOfferSection: {
      intro:
        "Plant noise, PPE, shift handovers and machinery mean first aid has to work where your people actually respond, not only in a training room slideshow.",
      card1: {
        title: "Machinery, crush and bleed scenarios on the production floor",
        body:
          "We practise severe bleeding, burns, amputations and crush injuries with realistic priorities for your environment: scene safety, calling help, packaging wounds and monitoring until paramedics arrive.",
      },
      card2: {
        title: "Shift crews, first aid officers and multi-area sites",
        body:
          "Nominated responders learn to coordinate across lines and warehouses, communicate with supervisors and emergency services, and refresh CPR and AED skills where seconds matter on large footprints.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Comprehensive first aid capability for production teams managing injury, trauma, and time-critical incidents.",
      },
      {
        code: "HLTAID009",
        name: "Provide Cardiopulmonary Resuscitation (CPR)",
        href: "/courses/cpr",
        description:
          "Essential CPR and AED response training for high-risk industrial settings where immediate action is crucial.",
      },
      {
        code: "HLTAID014",
        name: "Provide Advanced First Aid",
        href: "/courses/advanced-first-aid",
        description:
          "Advanced response pathways for nominated workplace first aid officers and emergency response leaders.",
      },
    ],
    testimonials: [testimonialWorkplace],
    faqs: [
      {
        question: "Can scenarios reflect crush injuries, entanglement and severe bleeding?",
        answer:
          "Yes. We tailor practical priorities to your hazards, including machinery isolation awareness, calling emergency services, packaging wounds and ongoing monitoring while maintaining scene safety.",
      },
      {
        question: "Is HLTAID014 suitable for our workplace first aid officers?",
        answer:
          "HLTAID014 Provide Advanced First Aid is commonly used for higher-risk sites and nominated responders. We recommend unit mixes after you describe your WHS arrangements, number of officers and risk profile.",
      },
      {
        question: "Can you train day, afternoon and night crews separately?",
        answer:
          "Yes. We often run repeat sessions across shifts so every crew receives hands-on practice without leaving lines unattended.",
      },
      {
        question: "Do we need a dedicated training room or can you use a warehouse corner?",
        answer:
          "We work with laydown areas, meeting rooms or cleared floor space. We advise on minimum space when we quote so practical rotations stay safe.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "On site at your facility across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Accredited participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
      },
    ],
  },
  {
    slug: "aged-care",
    heroImageSrc: "/industries/aged-care-hero.webp",
    label: "Aged Care",
    hubDescription:
      "Skills for falls, medical deterioration and transfers in residential and community aged care with escalation in mind.",
    metaDescription:
      "On-site aged care first aid in Sydney and NSW: falls, deterioration, CPR, escalation across residential and home care. Paramedic-led delivery. Allens RTO 90909.",
    audience: "aged care staff and care teams",
    teamLabel: "Staff",
    industryType: "Aged Care Providers",
    problemParagraphs: [
      "Aged care services regularly face falls, breathing difficulties, cardiac events, and incidents involving frail or medically complex residents.",
      "Generic first aid content can miss the practical realities of residential care settings, escalation pathways, and team-based care delivery.",
      "Industry-specific training supports resident safety, quality care standards, and confident response under pressure.",
    ],
    whatWeOfferSection: {
      intro:
        "Residential and community aged care need first aid that respects frailty, clinical escalation and how teams hand over in real hallways and homes.",
      card1: {
        title: "Falls, head injury, breathing changes and cardiac events",
        body:
          "We practise recognition of deterioration, safe positioning where appropriate, wound care after falls, and clear communication with RN leadership and triple zero. Scenarios respect dignity, infection control and your local escalation policies.",
      },
      card2: {
        title: "Team response, documentation and residential workflows",
        body:
          "Care and lifestyle staff build confidence coordinating during incidents, supporting families who are present, and refreshing CPR and AED skills for the rare event resuscitation is initiated per policy.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Builds essential first aid response skills for common aged care incidents, including trauma and medical deterioration.",
      },
      {
        code: "HLTAID009",
        name: "Provide Cardiopulmonary Resuscitation (CPR)",
        href: "/courses/cpr",
        description:
          "Reinforces immediate CPR and AED protocols for rapid response in residential and community aged care settings.",
      },
      {
        code: "HLTAID014",
        name: "Provide Advanced First Aid",
        href: "/courses/advanced-first-aid",
        description:
          "Supports senior staff and emergency leaders with deeper response capability for higher-complexity situations.",
      },
    ],
    testimonials: [testimonialWorkplace],
    faqs: [
      {
        question: "Can scenarios cover falls with suspected fracture or head injury?",
        answer:
          "Yes. We focus on calm assessment, when to immobilise versus when to support comfort, bleeding control, monitoring level of response and rapid escalation to clinical leaders and emergency services.",
      },
      {
        question: "Do you differentiate residential aged care from home care teams?",
        answer:
          "We adjust examples for communal living, lifts and bathrooms in facilities versus lone worker and vehicle contexts in the community, while keeping the same core first aid priorities.",
      },
      {
        question: "How do you minimise disruption to care schedules?",
        answer:
          "We split cohorts or run shorter refresher blocks where suitable so dining, medication rounds and handovers stay covered. Your coordinator sets the rhythm with us before the training day.",
      },
      {
        question: "Can you align practical discussion with our clinical escalation policies?",
        answer:
          "Yes. We encourage you to share high-level escalation expectations before delivery so scenarios reference calling the RN, after-hours GP or triple zero in ways your organisation recognises.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "On site at your residential facility, day centre, office or nominated venue across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Accredited participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
      },
    ],
  },
  {
    slug: "healthcare",
    heroImageSrc: "/industries/healthcare-hero.webp",
    label: "Healthcare",
    hubDescription:
      "Workplace first aid and escalation practice that fits clinical and non clinical teams where your policies allow accredited units.",
    metaDescription:
      "On-site workplace first aid for NSW healthcare teams: CPR, collapse, escalation for clinical and support staff. Paramedic-led. Accredited, Allens RTO 90909.",
    audience: "healthcare professionals and support teams",
    teamLabel: "Team",
    industryType: "Healthcare Teams",
    problemParagraphs: [
      "Healthcare environments involve high-acuity presentations, sudden deterioration, and complex emergency escalation scenarios.",
      "Generic first aid programs can fail to reflect clinical realities, multidisciplinary response, and operational pressure in healthcare workplaces.",
      "Targeted training sharpens practical response capability, supports governance requirements, and improves patient safety outcomes.",
    ],
    whatWeOfferSection: {
      intro:
        "Workplace first aid in health settings must stay inside accredited first aid scope while still rehearsing how teams escalate when something goes wrong in corridors, waiting areas and back-of-house spaces.",
      card1: {
        title: "Workplace first aid, boundaries and sudden deterioration",
        body:
          "We reinforce CPR, AED, bleeding, collapse and basic life support refreshers for staff who need accredited units, and frame scenarios around visitor and colleague emergencies until specialist teams take over.",
      },
      card2: {
        title: "Mixed teams: clinical, allied health, admin and facilities",
        body:
          "Sessions can combine roles with shared communication drills, handover to emergency services and after-incident debrief habits, without teaching clinical interventions outside first aid scope.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Practical first aid fundamentals delivered with realistic healthcare context and response priorities.",
      },
      {
        code: "HLTAID009",
        name: "Provide Cardiopulmonary Resuscitation (CPR)",
        href: "/courses/cpr",
        description:
          "Focused CPR and AED refreshers for healthcare staff who need confident, current emergency response performance.",
      },
      {
        code: "HLTAID014",
        name: "Provide Advanced First Aid",
        href: "/courses/advanced-first-aid",
        description:
          "Advanced skill development for senior responders and staff leading emergency actions in care settings.",
      },
    ],
    testimonials: [testimonialWorkplace],
    faqs: [
      {
        question: "Can you keep accredited first aid separate from clinical scope discussions?",
        answer:
          "Yes. We deliver HLTAID011, HLTAID009, HLTAID014 and related units as workplace first aid training. Your organisation remains responsible for clinical protocols; we focus on first aid skills, escalation and handover.",
      },
      {
        question: "Do you train mixed cohorts of clinical and non-clinical staff together?",
        answer:
          "Often. Shared sessions build consistent emergency communication. We adjust language so reception, facilities and clinical support roles all leave with clear practical priorities.",
      },
      {
        question: "How do you run collapse and CPR scenarios in busy facilities?",
        answer:
          "We use your corridors, waiting zones or training rooms where available and rehearse fetching AEDs, directing bystanders and briefing arriving paramedics.",
      },
      {
        question: "Can delivery run outside nine-to-five for shift hospitals or clinics?",
        answer:
          "Yes. Evening and weekend options are common for healthcare rosters. We confirm timing in your quote.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "On site at clinics, practices, hospitals where permitted, allied health sites and administration hubs across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Accredited participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
      },
    ],
  },
  {
    slug: "hospitality",
    heroImageSrc: "/industries/hospitality-hero.webp",
    label: "Hospitality",
    hubDescription:
      "Fast paced training for kitchens, floor service and late shifts covering burns, choking, allergies and patron emergencies.",
    metaDescription:
      "On-site hospitality first aid in Sydney and NSW: burns, cuts, choking, allergies, patron emergencies for kitchens and bars. Paramedics. Allens RTO 90909.",
    audience: "hospitality teams and venue staff",
    teamLabel: "Team",
    industryType: "Hospitality Venues",
    problemParagraphs: [
      "Hospitality venues face incidents such as slips, burns, choking, intoxication-related events, and sudden medical emergencies during service.",
      "Generic first aid training can miss the pace, space constraints, and customer-facing pressure of hospitality operations.",
      "Industry-specific training improves response speed, staff confidence, and duty-of-care outcomes in high-traffic environments.",
    ],
    whatWeOfferSection: {
      intro:
        "Service never stops: burns, choking, intoxication and patron medical episodes need muscle memory that fits kitchens, bars and crowded dining floors.",
      card1: {
        title: "Kitchen, bar and back-of-house injuries under pressure",
        body:
          "Knife cuts, oil burns, steam scalds, slips on wet floors and eye injuries are practised with realistic pacing, PPE awareness and when to escalate beyond first aid. CPR and AED use is included where units require it.",
      },
      card2: {
        title: "Patron emergencies, allergies and crowded public areas",
        body:
          "Floor teams learn to manage choking at tables, asthma and anaphylaxis linked to food service, collapse in queues, and calm crowd management until help arrives, without derailing the whole venue.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Comprehensive response capability for common injuries and medical events in hospitality environments.",
      },
      {
        code: "HLTAID009",
        name: "Provide Cardiopulmonary Resuscitation (CPR)",
        href: "/courses/cpr",
        description:
          "Rapid CPR and AED response skills for incidents involving guests, patrons, or team members.",
      },
      {
        code: "22578VIC + 22556VIC",
        name: "Asthma and Anaphylaxis",
        href: "/courses/asthma-anaphylaxis",
        description:
          "Supports teams handling food-related allergy and breathing emergencies with confidence.",
      },
    ],
    testimonials: [testimonialWorkplace],
    faqs: [
      {
        question: "Do you practise burns, deep cuts and oil-related kitchen risks?",
        answer:
          "Yes. We use scenarios that reflect hot line, fryer and oven injuries, correct cooling and dressing priorities, and when to call triple zero for serious burns or bleeding.",
      },
      {
        question: "How do you cover choking for both diners and staff?",
        answer:
          "We teach adult and child choking relief techniques, positioning, back blows and chest thrusts where appropriate to the unit, and clear delegation so someone calls an ambulance while others assist.",
      },
      {
        question: "Can sessions run between lunch and dinner or on closed days?",
        answer:
          "We often train on closed Mondays, pre-opening windows or split across two shorter visits. Your quote states exact face-to-face hours for each unit.",
      },
      {
        question: "Do you include asthma and anaphylaxis for food allergen incidents?",
        answer:
          "Where you book 22578VIC and 22556VIC with us, we cover reliever and autoinjector skills in a venue context. Many groups pair this with HLTAID011 for broader first aid coverage.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "On site at your venue, restaurant, cafe, bar, hotel or group training room across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Accredited participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
      },
    ],
  },
  {
    slug: "government",
    heroImageSrc: "/industries/government-hero.webp",
    label: "Government",
    hubDescription:
      "Structured delivery for agencies and departments with multi site options and documentation friendly outcomes.",
    metaDescription:
      "On-site first aid for NSW government teams: offices, depots, counters and multi-site rollouts. Paramedic-led, documentation-friendly. Allens RTO 90909.",
    audience: "government staff and public service teams",
    teamLabel: "Team",
    industryType: "Government Teams",
    problemParagraphs: [
      "Government workplaces and public-facing services can encounter medical emergencies in offices, field operations, and community-facing environments.",
      "Generic training does not always account for policy constraints, mixed risk profiles, and the scale of government workforce delivery.",
      "Tailored first aid capability supports workplace safety obligations, public trust, and consistent emergency response standards.",
    ],
    whatWeOfferSection: {
      intro:
        "Public sector sites range from counters and libraries to depots and parks: training should reflect mixed risks, procurement reality and consistent capability across teams.",
      card1: {
        title: "Offices, counters, depots and community-facing sites",
        body:
          "We practise collapse, CPR and AED retrieval, bleeding, mental health crisis first response at a first aid level, and clear escalation paths that fit your local procedures and public expectations.",
      },
      card2: {
        title: "Multi-site rollouts, cohorts and documentation-friendly delivery",
        body:
          "Coordinators get predictable scheduling, repeatable session plans for large cohorts, and nationally recognised outcomes where accredited units are selected so HR and WHS records stay straightforward.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Strong all-round first aid competency for public service teams operating in varied environments.",
      },
      {
        code: "HLTAID009",
        name: "Provide Cardiopulmonary Resuscitation (CPR)",
        href: "/courses/cpr",
        description:
          "Critical CPR response training that supports duty of care across offices and community-facing sites.",
      },
      {
        code: "HLTAID014",
        name: "Provide Advanced First Aid",
        href: "/courses/advanced-first-aid",
        description:
          "Advanced response pathways for designated emergency contacts and first aid officers.",
      },
    ],
    testimonials: [testimonialWorkplace],
    faqs: [
      {
        question: "Can you coordinate training across multiple sites or councils?",
        answer:
          "Yes. We stage dates and trainers so each location receives the same practical standards while respecting local room bookings and parking access.",
      },
      {
        question: "Do you tailor scenarios for public counters versus depots?",
        answer:
          "We adjust examples for customer-facing areas, libraries, community centres, fleet workshops and field teams so responders rehearse the environments they actually work in.",
      },
      {
        question: "Can quotes break down cohorts for procurement records?",
        answer:
          "Yes. Share expected headcounts per site and unit mix; we itemise delivery blocks in the quote for easier approval workflows.",
      },
      {
        question: "How far ahead should we book for financial-year training plans?",
        answer:
          "Popular periods fill early before EOFY and September return peaks. We recommend locking dates at least several weeks ahead for large rollouts, longer for regional clusters.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "At your offices, depots, libraries, community venues and nominated training rooms across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Accredited participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
      },
    ],
  },
  {
    slug: "retail",
    heroImageSrc: "/industries/retail-hero.webp",
    label: "Retail",
    hubDescription:
      "Store, mall and back of house coverage for customer incidents, slips and staff injuries during trading hours.",
    metaDescription:
      "On-site retail first aid in Sydney and NSW: customer incidents, slips, cuts, staff injuries in stores, malls and back of house. Paramedics. Allens RTO 90909.",
    audience: "retail teams and store staff",
    teamLabel: "Team",
    industryType: "Retail Teams",
    problemParagraphs: [
      "Retail teams manage high foot traffic and can face falls, cuts, medical episodes, and customer incidents without warning.",
      "Generic training often does not reflect fast-paced store environments, customer interaction pressures, and incident response in confined spaces.",
      "Relevant first aid training helps teams act quickly, reduce risk, and meet duty-of-care responsibilities for staff and customers.",
    ],
    whatWeOfferSection: {
      intro:
        "Trading floors, malls, loading docks and night fill each present different first aid pressures: we train for customer-facing emergencies and back-of-house injuries in one coherent program.",
      card1: {
        title: "Customer incidents, crowds, slips and medical episodes in aisles",
        body:
          "Collapse, seizure, allergic reaction, bleeding and behavioural emergencies are practised with communication to security, centre management and triple zero while keeping other shoppers safe.",
      },
      card2: {
        title: "Staff injuries, ladders, knives and lone-worker moments",
        body:
          "Back-of-house cuts, crush injuries from stock, manual handling strains and simple burns are covered with realistic store layouts, plus CPR and AED confidence for the rare cardiac event at work.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Comprehensive first aid preparation for common retail incidents affecting both staff and customers.",
      },
      {
        code: "HLTAID009",
        name: "Provide Cardiopulmonary Resuscitation (CPR)",
        href: "/courses/cpr",
        description:
          "Builds confidence in immediate CPR and AED response during critical events in-store.",
      },
      {
        code: "22578VIC + 22556VIC",
        name: "Asthma and Anaphylaxis",
        href: "/courses/asthma-anaphylaxis",
        description:
          "Supports quick and effective response to breathing and allergy emergencies in public-facing spaces.",
      },
    ],
    testimonials: [testimonialWorkplace],
    faqs: [
      {
        question: "Can you practise customer medical episodes in aisles and mall tenancies?",
        answer:
          "Yes. We rehearse crowd control basics, delegating someone to meet security or paramedics, fetching AEDs in large footprints and handing over a clear history when help arrives.",
      },
      {
        question: "How do you cover night fill, loading docks and sharp knife injuries?",
        answer:
          "We include back-of-house layouts, stock crush risks, ladder falls and kitchen knife injuries with emphasis on bleeding control and when to stop work and call an ambulance.",
      },
      {
        question: "Can regional store clusters share one training week?",
        answer:
          "Often. Coordinators group nearby stores so we minimise travel and repeat the same session plan for consistent standards.",
      },
      {
        question: "Can you deliver before open, after close or on closed-door days?",
        answer:
          "Yes. Early starts, late finishes and non-trading days are common so sales floors stay clear during practical drills.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "On site at stores, back-of-house training rooms, mall tenancy suites and retail support offices across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Accredited participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
      },
    ],
  },
  {
    slug: "construction",
    heroImageSrc: "/industries/construction-hero.webp",
    label: "Construction",
    hubDescription:
      "Site ready skills for trauma, spinal suspicion, bleeding and remote access delays on active projects and depots.",
    metaDescription:
      "On-site construction first aid in Sydney and NSW: trauma, bleeding, spinal suspicion, oxygen for site crews and officers. Miller First Aid, Allens RTO 90909.",
    audience: "construction workers and site teams",
    teamLabel: "Site Team",
    industryType: "Construction Teams",
    problemParagraphs: [
      "Construction sites have elevated risk for trauma, crush injuries, falls, electrical incidents, and severe bleeding events.",
      "Generic first aid training can miss the realities of dynamic sites, multiple contractors, and delayed emergency access in some locations.",
      "High-quality, site-relevant first aid training reduces risk, strengthens compliance posture, and improves emergency readiness.",
    ],
    whatWeOfferSection: {
      intro:
        "Cranes, steel, live edges and remote access mean construction first aid has to cover trauma, spinal suspicion and delayed ambulance arrival, not only office-style collapse.",
      card1: {
        title: "Trauma, severe bleeding, burns and electrical injury priorities",
        body:
          "We drill haemorrhage control, shock recognition, burn cooling, crush awareness and safe approach to electrical incidents, always within first aid scope and your site emergency plan.",
      },
      card2: {
        title: "Spinal suspicion, oxygen and multi-contractor coordination",
        body:
          "Where you book advanced units, we layer suspected spinal care, oxygen administration options and clearer handover language so PCBU lines and site controllers know who is doing what until paramedics arrive.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Core first aid training for construction teams with practical response drills for high-risk site incidents.",
      },
      {
        code: "HLTAID014",
        name: "Provide Advanced First Aid",
        href: "/courses/advanced-first-aid",
        description:
          "Advanced emergency response capability for site supervisors and designated first aid officers.",
      },
      {
        code: "22579VIC",
        name: "Basic Oxygen Administration for First Aid",
        href: "/courses/basic-oxygen-administration-for-first-aid",
        description:
          "Adds oxygen administration skills for managing severe respiratory distress and high-consequence incidents.",
      },
      {
        code: "PUAEME007",
        name: "Provide Emergency Care for Suspected Spinal Injury",
        href: "/courses/provide-emergency-care-for-suspected-spinal-injury",
        description:
          "Specialised practical response for suspected spinal trauma in high-risk worksite contexts.",
      },
    ],
    testimonials: [testimonialWorkplace],
    faqs: [
      {
        question: "Do you cover suspected spinal injury where extrication is not straightforward?",
        answer:
          "Where you include PUAEME007 Provide Emergency Care for Suspected Spinal Injury, we teach manual immobilisation and packaging principles for first aid responders until emergency services take over, aligned to the unit requirements.",
      },
      {
        question: "Can head contractors and subcontractors train in one program?",
        answer:
          "Yes. Shared sessions improve consistent radio language, muster points and handover when multiple firms share one site.",
      },
      {
        question: "When is oxygen administration training appropriate for our project?",
        answer:
          "22579VIC Basic Oxygen Administration for First Aid is often added for higher-risk civil or industrial projects. We advise after reviewing your first aid risk assessment and nominated responders.",
      },
      {
        question: "Can practical training happen in a site shed or cleared laydown area?",
        answer:
          "Yes, provided there is safe space for floor work and manikin practice. We confirm layout at booking.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "On active sites where permitted, construction offices, depots and nominated training rooms across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Accredited participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
      },
    ],
  },
  {
    slug: "transport",
    heroImageSrc: "/industries/transport-hero.webp",
    label: "Transport",
    hubDescription:
      "Road, depot and logistics focused response for drivers and operations staff including fatigue and isolation risks.",
    metaDescription:
      "On-site transport first aid in Sydney and NSW: depots, drivers, loading injuries, roadside emergencies, fatigue-aware scenarios. Paramedics. Allens RTO 90909.",
    audience: "transport workers and operations teams",
    teamLabel: "Team",
    industryType: "Transport Teams",
    problemParagraphs: [
      "Transport environments can involve traffic incidents, loading injuries, cardiac events, and emergencies in depots or remote routes.",
      "Generic first aid programs may not address mobile workforces, shift fatigue impacts, and delayed access to emergency support.",
      "Tailored training helps teams respond effectively, protect colleagues and the public, and meet workplace safety duties.",
    ],
    whatWeOfferSection: {
      intro:
        "Drivers, loaders and DC staff face traffic trauma, crush and cardiac risk with variable access to help: training should reflect yards, cabs and regional isolation.",
      card1: {
        title: "Depots, yards, loading docks and traffic-adjacent trauma",
        body:
          "We practise crush and pinning awareness, severe bleeding, fractures, burns from fuel or batteries and rapid escalation when someone is injured near live traffic or machinery.",
      },
      card2: {
        title: "Drivers, fatigue, lone work and delayed emergency access",
        body:
          "Scenarios cover roadside collapse, cab extraction basics at a first aid level, communication with controllers and triple zero, and supporting a colleague until paramedics arrive on long regional legs.",
      },
    },
    recommendedCourses: [
      {
        code: "HLTAID011",
        name: "Provide First Aid",
        href: "/courses/first-aid",
        description:
          "Comprehensive first aid capability for transport operations, depots, and field-based teams.",
      },
      {
        code: "HLTAID009",
        name: "Provide Cardiopulmonary Resuscitation (CPR)",
        href: "/courses/cpr",
        description:
          "Critical CPR and AED training for drivers and operational teams responding to sudden emergencies.",
      },
      {
        code: "HLTAID014",
        name: "Provide Advanced First Aid",
        href: "/courses/advanced-first-aid",
        description:
          "Enhanced emergency response training for designated responders in complex transport settings.",
      },
    ],
    testimonials: [testimonialWorkplace],
    faqs: [
      {
        question: "Can drivers, loaders and warehouse staff train in one depot session?",
        answer:
          "Yes. Mixed cohorts are common. We rotate scenarios so yard staff practise loading injuries while drivers focus on cab and roadside collapse priorities, then share CPR and AED practice.",
      },
      {
        question: "Do you address roadside incidents and traffic-related trauma?",
        answer:
          "We teach scene safety first, then bleeding control, basic life support where appropriate and clear communication with emergency services, without encouraging unsafe traffic zone behaviour.",
      },
      {
        question: "How do you factor fatigue and lone-driver realities into scenarios?",
        answer:
          "Discussions cover recognising deterioration after long shifts, checking on a colleague who has not checked in, and using communication systems your company already runs.",
      },
      {
        question: "Can we book evenings or weekends for linehaul rosters?",
        answer:
          "Yes. We frequently run after-hours blocks so day fleets stay moving while night fleets receive the same practical depth.",
      },
      {
        question: "Where is training delivered?",
        answer:
          "At depots, distribution centres, transport offices, maintenance workshops and nominated training rooms across Greater Sydney, Western Sydney, the Hills District, Northern Beaches, Eastern Suburbs, Sutherland Shire, Central Coast and regional NSW.",
      },
      {
        question: "What certification will participants receive?",
        answer:
          "Accredited participants receive nationally recognised statements of attainment issued on behalf of Allens Training Pty Ltd RTO 90909.",
      },
    ],
  },
]

export function getAllIndustries() {
  return INDUSTRY_PAGES
}

export function getIndustryRouteSlug(slug: string) {
  return `first-aid-training-for-${slug}`
}

export function getIndustryPagePath(slug: string) {
  return `/${getIndustryRouteSlug(slug)}`
}

export function getIndustryBySlug(slug: string) {
  return INDUSTRY_PAGES.find((industry) => industry.slug === slug) ?? null
}

export function getIndustryByRouteSlug(routeSlug: string) {
  return INDUSTRY_PAGES.find((industry) => getIndustryRouteSlug(industry.slug) === routeSlug) ?? null
}
