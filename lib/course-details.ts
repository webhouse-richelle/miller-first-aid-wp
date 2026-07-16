export type CourseDetailSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export type CourseDetail = {
  slug: string
  pageTitle: string
  code: string
  heroTitle: string
  heroSubtitle: string
  price: string | null
  imageSrc: string
  /** Decorative hero image; used for layout column and accessibility. */
  imageAlt: string
  description: string[]
  sections: CourseDetailSection[]
}

export const COURSE_DETAILS: Record<string, CourseDetail> = {
  cpr: {
    slug: "cpr",
    pageTitle: "Cardiopulmonary Resuscitation (CPR)",
    code: "HLTAID009",
    heroTitle: "Provide Cardiopulmonary Resuscitation (CPR)",
    heroSubtitle: "Empowering You to Act in Cardiac Emergencies",
    price: "$80 per person",
    imageSrc: "/course-tabs/course-01.webp",
    imageAlt: "CPR training with manikins and practice equipment",
    description: [
      "Cardiac arrest is a serious medical emergency that can lead to death, but with urgent medical care to restart the heart, survival is possible.",
      "Recognising and responding quickly to a cardiac emergency is crucial. By calling for help and performing Cardiopulmonary Resuscitation (CPR), you can greatly improve the chances of survival for someone who is unconscious and not breathing normally.",
      "In this CPR course, you'll learn vital skills aligned with Australian Resuscitation Council guidelines, including AED use, effective rescuer rotation, and management when regurgitation or vomiting occurs.",
      "The course also covers communication during emergency handover, post-incident reflection, psychological impacts, and seeking support when needed.",
    ],
    sections: [
      {
        title: "Unit Being Delivered",
        paragraphs: [
          "HLTAID009 - Provide Cardiopulmonary Resuscitation.",
          "The certificate will be issued by Allens Training Pty Ltd - RTO 90909.",
        ],
      },
      {
        title: "Course Delivery",
        paragraphs: [
          "In the workplace, school, private venue, or at a third-party facility organised by Miller First Aid (Parramatta, NSW).",
        ],
      },
      { title: "Certificate Renewal Requirements", paragraphs: ["12 months."] },
      {
        title: "Course Duration",
        bullets: [
          "Face to Face: 2 hours.",
          "Online Training with Face to Face Assessment: Approximately 1.5 hours of self-paced online learning plus 1 hour face to face assessment.",
          "Public course delivery is offered only via delivery mode 2.",
        ],
      },
      {
        title: "Assessment Requirements",
        bullets: [
          "Perform adult CPR including AED use and recovery position.",
          "Perform infant CPR.",
          "Theory assessment: 20 multiple-choice questions.",
        ],
      },
      {
        title: "Entry Requirements",
        paragraphs: [
          "Participants must have the physical capacity to perform practical demonstrations, including 2 minutes of uninterrupted CPR on the floor and rescue breathing on manikins.",
        ],
      },
      {
        title: "Learners Rights, Responsibilities and Support",
        paragraphs: [
          "Enrolment is made with Allens Training Pty Ltd RTO 90909. Please refer to the student handbook for rights, responsibilities, complaints, and appeals.",
        ],
      },
      {
        title: "Provider of Training and Assessment",
        paragraphs: ["Delivered on behalf of Allens Training Pty Ltd - RTO 90909."],
      },
    ],
  },
  "first-aid": {
    slug: "first-aid",
    pageTitle: "First Aid",
    code: "HLTAID011",
    heroTitle: "Provide First Aid",
    heroSubtitle:
      "Equip Yourself with Comprehensive and Expert Training to Respond Confidently and Effectively in Critical Situations",
    price: "$150 per person",
    imageSrc: "/course-tabs/course-02.avif",
    imageAlt: "Provide First Aid course practical training session",
    description: [
      "This first aid course provides practical instruction and hands-on training guided by legal, workplace, and community considerations and Australian Resuscitation Council recommendations.",
      "You will learn how to assess incidents, ensure safety, contact emergency services, perform CPR, use a defibrillator, administer medication for anaphylaxis and asthma, assist choking casualties, and apply immobilisation techniques.",
      "The course also covers basic anatomy and physiology, incident reporting, debriefing, psychological impacts, and post-incident support.",
    ],
    sections: [
      {
        title: "Unit Being Delivered",
        paragraphs: [
          "HLTAID011 - Provide First Aid.",
          "HLTAID010 - Provide Basic Emergency Life Support.",
          "HLTAID009 - Provide Cardiopulmonary Resuscitation.",
          "The certificate will be issued by Allens Training Pty Ltd - RTO 90909.",
        ],
      },
      {
        title: "Course Delivery",
        paragraphs: [
          "In the workplace, school, private venue, or at a third-party facility organised by Miller First Aid (Parramatta, NSW).",
        ],
      },
      {
        title: "Certificate Renewal Requirements",
        paragraphs: ["36 months. CPR component: 12 months."],
      },
      {
        title: "Course Duration",
        bullets: [
          "Face to Face: 6-7 hours.",
          "Online Training with Face to Face Assessment: Approximately 6 hours online plus 2 hours face to face assessment.",
          "Public course delivery is offered only in delivery mode 2.",
        ],
      },
      {
        title: "Assessment Requirements",
        bullets: [
          "Adult CPR with AED and recovery position.",
          "Infant CPR.",
          "Management of anaphylaxis, asthma, choking, bleeding, shock, fractures, sprains, dislocations, and envenomation.",
          "Incident reporting based on simulated scenarios.",
          "Theory assessment: 65 multiple-choice questions.",
        ],
      },
      {
        title: "Entry Requirements",
        paragraphs: [
          "Participants must have capacity for practical assessment tasks including uninterrupted CPR and rescue breathing.",
          "For online components, participants need access to an internet-enabled device.",
        ],
      },
      {
        title: "Learners Rights, Responsibilities and Support",
        paragraphs: [
          "Enrolment is made with Allens Training Pty Ltd RTO 90909. Please refer to the student handbook for rights, responsibilities, complaints, and appeals.",
        ],
      },
      {
        title: "Provider of Training and Assessment",
        paragraphs: ["Delivered on behalf of Allens Training Pty Ltd - RTO 90909."],
      },
    ],
  },
  "first-aid-for-education-care": {
    slug: "first-aid-for-education-care",
    pageTitle: "First Aid for Education & Care",
    code: "HLTAID012",
    heroTitle: "Provide First Aid in An Education & Care Setting",
    heroSubtitle:
      "Gain the Knowledge to Respond to Time-Critical Incidents while Ensuring Compliance with Legal and Workplace Standards",
    price: "$160 per person",
    imageSrc: "/course-tabs/course-03.avif",
    imageAlt: "First aid in an education and care setting training",
    description: [
      "This course provides practical first aid training tailored to education and care settings, aligned with legal and workplace requirements and national clinical guidance.",
      "Participants learn incident recognition, emergency service access, CPR, AED use, asthma and anaphylaxis response, and management of bleeding, shock, fractures, sprains, strains, and envenomation.",
      "The course includes infant and child-focused emergency care and communication requirements for parents, caregivers, and emergency responders.",
    ],
    sections: [
      {
        title: "Unit Being Delivered",
        paragraphs: [
          "HLTAID012 - Provide First Aid in an Education and Care Setting.",
          "HLTAID011 - Provide First Aid.",
          "HLTAID010 - Provide Basic Emergency Life Support.",
          "HLTAID009 - Provide Cardiopulmonary Resuscitation.",
          "The certificate will be issued by Allens Training Pty Ltd - RTO 90909.",
        ],
      },
      {
        title: "Course Delivery",
        paragraphs: [
          "In the workplace, school, private venue, or at a third-party facility organised by Miller First Aid (Parramatta, NSW).",
        ],
      },
      {
        title: "Certificate Renewal Requirements",
        paragraphs: ["36 months. CPR component: 12 months."],
      },
      {
        title: "Course Duration",
        bullets: [
          "Face to Face: 8-9 hours.",
          "Online Training with Face to Face Assessment: Approximately 7 hours online plus 2 hours face to face assessment.",
          "Public course delivery is offered only in delivery mode 2.",
        ],
      },
      {
        title: "Assessment Requirements",
        bullets: [
          "Adult and infant CPR with AED.",
          "Multiple practical scenarios across anaphylaxis, asthma, choking, bleeding, fractures, dislocations, strains, sprains, and envenomation.",
          "Multiple casualty coordination and incident reporting.",
          "Theory assessment: 65 multiple-choice questions.",
        ],
      },
      {
        title: "Entry Requirements",
        paragraphs: [
          "Participants must have capacity for practical assessments including CPR and rescue breathing.",
          "For online components, participants need access to an internet-enabled device.",
        ],
      },
      {
        title: "Learners Rights, Responsibilities and Support",
        paragraphs: [
          "Enrolment is made with Allens Training Pty Ltd RTO 90909. Please refer to the student handbook for rights, responsibilities, complaints, and appeals.",
        ],
      },
      {
        title: "Provider of Training and Assessment",
        paragraphs: ["Delivered on behalf of Allens Training Pty Ltd - RTO 90909."],
      },
    ],
  },
  "advanced-first-aid": {
    slug: "advanced-first-aid",
    pageTitle: "Advanced First Aid",
    code: "HLTAID014",
    heroTitle: "Provide Advanced First Aid",
    heroSubtitle: "Master Expert Training for High-Stakes Emergency Response",
    price: "$230 per person",
    imageSrc: "/course-tabs/course-04.avif",
    imageAlt: "Advanced first aid training scenario practice",
    description: [
      "This course prepares participants for complex emergency situations including multiple casualty incidents and high-risk response environments.",
      "Training includes practical simulations covering advanced first aid interventions, legal and workplace response requirements, and communication with emergency services.",
      "Participants build confidence in treatment pathways including trauma, thermal conditions, bleeding management, shock care, and incident documentation.",
    ],
    sections: [
      {
        title: "Unit Being Delivered",
        paragraphs: [
          "HLTAID014 - Provide Advanced First Aid.",
          "HLTAID011 - Provide First Aid.",
          "HLTAID010 - Provide Basic Emergency Life Support.",
          "HLTAID009 - Provide Cardiopulmonary Resuscitation.",
          "The certificate will be issued by Allens Training Pty Ltd - RTO 90909.",
        ],
      },
      {
        title: "Course Delivery",
        paragraphs: [
          "In the workplace, school, private venue, or at a third-party facility organised by Miller First Aid.",
        ],
      },
      {
        title: "Certificate Renewal Requirements",
        paragraphs: ["36 months. CPR component: 12 months."],
      },
      {
        title: "Course Duration",
        bullets: [
          "Face to Face: 16 hours.",
          "Online Training with Face to Face Assessment: Approximately 6 hours online plus 6 hours face to face learning and assessment.",
        ],
      },
      {
        title: "Assessment Requirements",
        bullets: [
          "Adult and infant CPR with AED.",
          "Advanced practical scenarios across trauma, bleeding, anaphylaxis, asthma, fractures, and multiple-casualty coordination.",
          "Incident reporting documentation.",
          "Theory assessment: 65 multiple-choice questions.",
        ],
      },
      {
        title: "Entry Requirements",
        paragraphs: [
          "Participants must have capacity for practical assessments including uninterrupted CPR and rescue breathing.",
          "For online components, participants need access to an internet-enabled device.",
        ],
      },
      {
        title: "Learners Rights, Responsibilities and Support",
        paragraphs: [
          "Enrolment is made with Allens Training Pty Ltd RTO 90909. Please refer to the student handbook for rights, responsibilities, complaints, and appeals.",
        ],
      },
      {
        title: "Provider of Training and Assessment",
        paragraphs: ["Delivered on behalf of Allens Training Pty Ltd - RTO 90909."],
      },
    ],
  },
  "asthma-anaphylaxis": {
    slug: "asthma-anaphylaxis",
    pageTitle: "Asthma & Anaphylaxis",
    code: "COURSE SET",
    heroTitle: "Asthma (22556VIC) & Anaphylaxis (22578VIC)",
    heroSubtitle:
      "Acquire the Skills to Handle Airway and Breathing Emergencies and Ensure the Safety of At-Risk Individuals",
    price: "$100 per person",
    imageSrc: "/course-tabs/course-05.avif",
    imageAlt: "Asthma and anaphylaxis first aid training materials",
    description: [
      "This course equips participants with practical skills and confidence to provide first aid in asthma and anaphylaxis emergencies.",
      "It includes risk management and minimisation planning for at-risk individuals across workplace and community settings.",
      "Training is nationally recognised and suitable for designated first aiders and workers across industry sectors.",
    ],
    sections: [
      {
        title: "Unit Being Delivered",
        paragraphs: [
          "22556VIC - Course in the Management of Asthma Risks and Emergencies in the Workplace.",
          "22578VIC - Course in First Aid Management of Anaphylaxis.",
          "The certificate will be issued by Allens Training Pty Ltd - RTO 90909.",
        ],
      },
      {
        title: "Course Delivery",
        paragraphs: [
          "In the workplace, school, private venue, or at a third-party facility organised by Miller First Aid.",
        ],
      },
      { title: "Certificate Renewal Requirements", paragraphs: ["36 months."] },
      {
        title: "Course Duration",
        paragraphs: [
          "Online Training with Face to Face Assessment: Approximately 2-3 hours online learning plus 1 hour face to face practical assessment.",
        ],
      },
      {
        title: "Assessment Requirements",
        bullets: [
          "Administer asthma medication with and without a spacer.",
          "Administer adrenaline auto-injector for anaphylaxis.",
          "Provide first aid for allergic reaction and anaphylaxis.",
          "Complete incident forms, risk assessments, and individual management plans.",
          "Theory assessment with multiple-choice and short-answer questions.",
        ],
      },
      {
        title: "Entry Requirements",
        paragraphs: [
          "Entrants should have literacy and numeracy competencies equivalent to ACSF Level 3.",
          "Participants must have capacity for physical practical demonstrations.",
          "For online components, participants need access to an internet-enabled device.",
        ],
      },
      {
        title: "Learners Rights, Responsibilities and Support",
        paragraphs: [
          "Enrolment is made with Allens Training Pty Ltd RTO 90909. Please refer to the student handbook for rights, responsibilities, complaints, and appeals.",
        ],
      },
      {
        title: "Provider of Training and Assessment",
        paragraphs: ["Delivered on behalf of Allens Training Pty Ltd - RTO 90909."],
      },
    ],
  },
  "provide-emergency-care-for-suspected-spinal-injury": {
    slug: "provide-emergency-care-for-suspected-spinal-injury",
    pageTitle: "Provide Emergency Care for Suspected Spinal Injury",
    code: "PUAEM007",
    heroTitle: "Provide Emergency Care for Suspected Spinal Injury",
    heroSubtitle: "Train to Handle Spinal Emergencies with Precision",
    price: "$160 per person",
    imageSrc: "/course-tabs/course-06.jpg",
    imageAlt: "Emergency care training for suspected spinal injury",
    description: [
      "This course develops the skills required to provide emergency care for a casualty with suspected spinal injury while minimising further harm.",
      "It applies across workplace and community environments and includes both conscious and unconscious casualty management.",
      "Participants learn immobilisation techniques, movement decisions, casualty preparation for transport, monitoring, and emergency handover communication.",
    ],
    sections: [
      {
        title: "Unit Being Delivered",
        paragraphs: [
          "PUAEME007 - Provide Emergency Care for Suspected Spinal Injury.",
          "The certificate will be issued by Allens Training Pty Ltd - RTO 90909.",
        ],
      },
      {
        title: "Course Delivery",
        paragraphs: [
          "In the workplace, school, private venue, or at a third-party facility organised by Miller First Aid.",
        ],
      },
      { title: "Certificate Renewal Requirements", paragraphs: ["No renewal required."] },
      {
        title: "Course Duration",
        bullets: [
          "Face to Face: 5 hours.",
          "Online Training with Face to Face Assessment: Approximately 3 hours online learning plus 2 hours face to face practical assessment.",
        ],
      },
      {
        title: "Assessment Requirements",
        bullets: [
          "Assist a conscious casualty with suspected spinal injury into supine position.",
          "Manage unconscious breathing and non-breathing spinal injury casualties.",
          "Complete incident documentation and theory assessment.",
        ],
      },
      {
        title: "Entry Requirements",
        paragraphs: [
          "Pre-requisite: HLTAID011 - Provide First Aid.",
          "Participants must have capacity for practical demonstrations including CPR and rescue breathing.",
          "For online components, participants need access to an internet-enabled device.",
        ],
      },
      {
        title: "Learners Rights, Responsibilities and Support",
        paragraphs: [
          "Enrolment is made with Allens Training Pty Ltd RTO 90909. Please refer to the student handbook for rights, responsibilities, complaints, and appeals.",
        ],
      },
      {
        title: "Provider of Training and Assessment",
        paragraphs: ["Delivered on behalf of Allens Training Pty Ltd - RTO 90909."],
      },
    ],
  },
  "basic-oxygen-administration-for-first-aid": {
    slug: "basic-oxygen-administration-for-first-aid",
    pageTitle: "Basic Oxygen Administration for First Aid",
    code: "22575VIC",
    heroTitle: "Basic Oxygen Administration for First Aid (incl. HLTAID009)",
    heroSubtitle:
      "Acquire the Knowledge and Skills to Administer Emergency Oxygen to Individuals Facing Respiratory Distress",
    price: "$140 per person",
    imageSrc: "/course-tabs/course-07.png",
    imageAlt: "Basic oxygen administration and CPR training equipment",
    description: [
      "This course applies to participants required to recognise emergency situations and provide CPR with basic oxygen therapy until medical assistance arrives.",
      "Delivery aligns with Australian Resuscitation Council guidelines and supports both workplace first aid roles and community responders.",
    ],
    sections: [
      {
        title: "Unit Being Delivered",
        paragraphs: [
          "HLTAID009 - Provide Cardiopulmonary Resuscitation (CPR).",
          "22575VIC - Basic Oxygen Administration for First Aid.",
          "The certificate will be issued by Allens Training Pty Ltd - RTO 90909.",
        ],
      },
      {
        title: "Course Delivery",
        paragraphs: [
          "In the workplace, school, private venue, or at a third-party facility organised by Miller First Aid.",
        ],
      },
      {
        title: "Certificate Renewal Requirements",
        paragraphs: ["12 months. CPR component: 12 months."],
      },
      { title: "Course Duration", paragraphs: ["Face to Face: 6 hours."] },
      {
        title: "Assessment Requirements",
        bullets: [
          "Adult CPR including AED and recovery position.",
          "Infant CPR.",
          "Administer oxygen to an adult and child.",
          "Complete incident report and theory assessment.",
        ],
      },
      {
        title: "Entry Requirements",
        paragraphs: [
          "Participants must have capacity for practical demonstrations including uninterrupted CPR and rescue breathing.",
          "For online components, participants need access to an internet-enabled device.",
        ],
      },
      {
        title: "Learners Rights, Responsibilities and Support",
        paragraphs: [
          "Enrolment is made with Allens Training Pty Ltd RTO 90909. Please refer to the student handbook for rights, responsibilities, complaints, and appeals.",
        ],
      },
      {
        title: "Provider of Training and Assessment",
        paragraphs: ["Delivered on behalf of Allens Training Pty Ltd - RTO 90909."],
      },
    ],
  },
  "in-school-program": {
    slug: "in-school-program",
    pageTitle: "In School Program",
    code: "INSCHOOL-PROGRAM",
    heroTitle: "In-School Program",
    heroSubtitle:
      "Comprehensive First Aid Training for High School Students: Developing Essential Life-Saving Skills and Confidence in Emergency Response",
    price: "$75 per person",
    imageSrc: "/course-tabs/course-08.jpg",
    imageAlt: "High school students in an in-school first aid program",
    description: [
      "Our In-School Program equips high school students with practical first aid capability, helping build confidence and readiness in emergencies.",
      "Delivery blends classroom instruction, practical exercises, and role-play to strengthen decision-making and communication in real-life scenarios.",
      "The course supports broader student development through critical thinking, resilience, and community responsibility.",
    ],
    sections: [
      {
        title: "Unit Being Delivered",
        paragraphs: [
          "HLTAID011 - Provide First Aid.",
          "HLTAID010 - Provide Basic Emergency Life Support.",
          "HLTAID009 - Provide Cardiopulmonary Resuscitation.",
          "The certificate will be issued by Allens Training Pty Ltd - RTO 90909.",
        ],
      },
      { title: "Course Delivery", paragraphs: ["School campus."] },
      {
        title: "Certificate Renewal Requirements",
        paragraphs: ["36 months. CPR component: 12 months."],
      },
      {
        title: "Course Duration",
        bullets: [
          "Face to Face: 6 hours (no online pre-course work required).",
          "Under 75 students: 1 day.",
          "Over 75 students: 2 days.",
        ],
      },
      {
        title: "Assessment Requirements",
        bullets: [
          "Adult and infant CPR with AED.",
          "Practical scenarios including anaphylaxis, asthma, choking, bleeding, fractures, and envenomation.",
          "Incident reporting and theory assessment (65 multiple-choice questions).",
        ],
      },
      {
        title: "Entry Requirements",
        paragraphs: [
          "Minimum age: 14 years.",
          "Participants must have capacity for practical demonstrations including uninterrupted CPR and rescue breathing.",
          "Participants must register for a Unique Student Identifier (USI) for certification.",
        ],
      },
      {
        title: "Learners Rights, Responsibilities and Support",
        paragraphs: [
          "Enrolment is made with Allens Training Pty Ltd RTO 90909. Please refer to the student handbook for rights, responsibilities, complaints, and appeals.",
        ],
      },
      {
        title: "Provider of Training and Assessment",
        paragraphs: ["Delivered on behalf of Allens Training Pty Ltd - RTO 90909."],
      },
    ],
  },
  "school-staff": {
    slug: "school-staff",
    pageTitle: "School Staff",
    code: "SCHOOL STAFF",
    heroTitle: "First Responder Training for School Staff",
    heroSubtitle:
      "Ensure the Safety of Your School Community with Expert-Led Emergency Response and Accredited CPR Training",
    price: null,
    imageSrc: "/course-tabs/course-09.avif",
    imageAlt: "First responder training for school staff",
    description: [
      "School staff are often first responders in school-based emergencies.",
      "This course is tailored for educators, administrators, and support staff to build confidence in high-pressure emergency response within school environments.",
      "The training includes practical first response skills and scenario application relevant to school contexts.",
    ],
    sections: [
      {
        title: "Unit Being Delivered",
        paragraphs: [
          "HLTAID009 - Provide Cardiopulmonary Resuscitation (accredited CPR component).",
          "The certificate will be issued by Allens Training Pty Ltd - RTO 90909.",
          "Additional first responder content is delivered as non-accredited practical training.",
        ],
      },
      {
        title: "Course Delivery and Duration",
        paragraphs: ["School campus, 2-3 hours face to face."],
      },
      {
        title: "Certificate Renewal Requirements for HLTAID009",
        paragraphs: ["12 months."],
      },
      {
        title: "Interactive Simulated Scenarios",
        bullets: [
          "CPR using DRSABCD with AED use.",
          "Interpret and apply anaphylaxis action plans and EpiPen administration.",
          "Evaluate and apply asthma action plans.",
          "Apply immobilisation techniques for fractures and dislocations.",
          "Apply R.I.C.E.R. management for sprains.",
        ],
      },
      {
        title: "Assessment Requirements for HLTAID009",
        bullets: [
          "Perform adult and infant CPR including AED and recovery position.",
          "Theory assessment: 20 multiple-choice questions.",
        ],
      },
      {
        title: "Entry Requirements for HLTAID009",
        paragraphs: [
          "Participants must have capacity for practical demonstrations including uninterrupted CPR and rescue breathing.",
        ],
      },
      {
        title: "Learners Rights, Responsibilities and Support for HLTAID009",
        paragraphs: [
          "Enrolment is made with Allens Training Pty Ltd RTO 90909. Please refer to the student handbook for rights, responsibilities, complaints, and appeals.",
        ],
      },
      {
        title: "Provider of Training and Assessment for HLTAID009",
        paragraphs: ["Delivered on behalf of Allens Training Pty Ltd - RTO 90909."],
      },
    ],
  },
  "infant-child-first-aid-workshop": {
    slug: "infant-child-first-aid-workshop",
    pageTitle: "Infant & Child First Aid Workshop",
    code: "NON-ACCREDITED",
    heroTitle: "Infant & Child First Aid Workshop",
    heroSubtitle:
      "Tailored Training that Imparts Life-Saving Skills and Provides Invaluable Peace of Mind",
    price: "$100 per person",
    imageSrc: "/course-tabs/course-10.avif",
    imageAlt: "Infant and child first aid workshop demonstration",
    description: [
      "This workshop is designed for parents and caregivers, focusing on infant and child first aid priorities.",
      "Participants learn how to manage respiratory distress, head injuries, meningococcal warning signs, croup, fever, febrile convulsions, anaphylaxis, burns, choking, and CPR.",
      "While non-accredited, this practical workshop builds confidence and response capability for common childhood emergencies.",
    ],
    sections: [
      {
        title: "Course Delivery",
        paragraphs: [
          "Private venue or at a third-party facility organised by Miller First Aid.",
        ],
      },
      { title: "Course Duration", paragraphs: ["Face to face: 2-3 hours."] },
    ],
  },
}

export function getCourseDetailBySlug(slug: string) {
  return COURSE_DETAILS[slug] ?? null
}
