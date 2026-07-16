"use client"

import Link from "next/link"
import {
  CourseOfferingsAccordion,
  type CourseOfferingAccordionItem,
} from "@/components/course-offerings-accordion"

const courseItems: CourseOfferingAccordionItem[] = [
  {
    code: "HLTAID009",
    title: "HLTAID009: Cardiopulmonary Resuscitation (CPR)",
    href: "/courses/cpr",
    imageSrc: "/course-tabs/course-01.webp",
    content: [
      "Learn to recognise cardiac emergencies, perform CPR and use an AED. Ideal for annual CPR renewals. Delivered on site at your Sydney workplace or school.",
      "Cardiac arrest is a medical emergency that can lead to death. With urgent medical care to restart the heart, survival is possible.",
      "In this CPR course, you will learn these skills in line with the Australian Resuscitation Council guidelines, including AED use, rescuer rotation, and handover to emergency services.",
    ],
  },
  {
    code: "HLTAID011",
    title: "HLTAID011: Provide First Aid (Includes CPR)",
    href: "/courses/first-aid",
    imageSrc: "/course-tabs/course-02.avif",
    content: [
      "Our most popular on site first aid course in Sydney. Covers CPR, choking, bleeding, fractures, envenomation, anaphylaxis and asthma management. Suitable for all industries.",
      "This first aid course teaches the skills to recognise emergencies and provide immediate first aid in line with legal, workplace and community considerations.",
      "You will learn CPR and defibrillation, anaphylaxis and asthma response, choking, immobilisation techniques, bleeding and shock management, and incident reporting.",
    ],
  },
  {
    code: "HLTAID012",
    title: "HLTAID012: First Aid in an Education and Care Setting",
    href: "/courses/first-aid-for-education-care",
    imageSrc: "/course-tabs/course-03.avif",
    content: [
      "Designed for teachers, early educators and childcare staff across Sydney. Meets regulatory requirements for education and care environments.",
      "Practical training for workers in education and care settings, including CPR and AED use, anaphylaxis and asthma medication administration, and infant and child-specific emergency response.",
    ],
  },
  {
    code: "HLTAID014",
    title: "HLTAID014: Advanced First Aid",
    href: "/courses/advanced-first-aid",
    imageSrc: "/course-tabs/course-04.avif",
    content: [
      "For workplaces requiring a higher level of emergency response capability. Covers head, neck and spinal injuries, tourniquets, haemostatic dressings and casualty management.",
      "Prepares participants to coordinate responses in complex incidents, including multiple casualties, hypothermia and hyperthermia, life-threatening bleeding, and shock care.",
    ],
  },
  {
    code: "22556VIC & 22578VIC",
    title: "Asthma & Anaphylaxis Training",
    href: "/courses/asthma-anaphylaxis",
    imageSrc: "/course-tabs/course-05.avif",
    content: [
      "Combined asthma and anaphylaxis course covering recognition, action plans and auto-injector administration. Popular with Sydney schools and childcare centres.",
      "Practical, scenario-based training aligned with current clinical guidance for safe emergency response in workplace and community settings.",
    ],
  },
  {
    code: "PUAEM007",
    title: "PUAEM007: Emergency Care for Suspected Spinal Injury",
    href: "/courses/provide-emergency-care-for-suspected-spinal-injury",
    imageSrc: "/course-tabs/course-06.jpg",
    content: [
      "Specialised on site training for teams who may encounter spinal injuries in the workplace or community.",
      "Topics include manual in-line stabilisation, spinal equipment, preparing for transport, casualty monitoring, and handover to emergency services.",
    ],
  },
  {
    code: "22575VIC",
    title: "22575VIC: Basic Oxygen Administration for First Aid",
    href: "/courses/basic-oxygen-administration-for-first-aid",
    imageSrc: "/course-tabs/course-07.png",
    content: [
      "Learn oxygen therapy and resuscitation techniques. Delivered on site for first aid teams, sports clubs and healthcare support staff in Sydney.",
      "Recognition and response to emergencies requiring CPR and basic oxygen therapy until medical assistance arrives, aligned with Australian Resuscitation Council guidelines.",
    ],
  },
  {
    code: "In-school",
    title: "In-School First Aid Program",
    href: "/courses/in-school-program",
    imageSrc: "/course-tabs/course-08.jpg",
    content: [
      "Our signature program for Sydney high schools. Engaging, age-appropriate first aid training delivered in pods to keep students focused throughout the day.",
      "Students build confidence in emergency response while covering CPR, anaphylaxis, asthma, trauma management, incident reporting, and psychological readiness.",
    ],
  },
  {
    code: "School staff",
    title: "First Responder Training for School Staff",
    href: "/courses/school-staff",
    imageSrc: "/course-tabs/course-09.avif",
    content: [
      "Equip educators and support staff with CPR accreditation and practical emergency response skills tailored to the school environment.",
      "Designed for administrators and support teams who need to respond confidently in high-pressure school emergencies.",
    ],
  },
  {
    code: "Workshop",
    title: "Infant & Child First Aid Workshop",
    href: "/courses/infant-child-first-aid-workshop",
    imageSrc: "/course-tabs/course-10.avif",
    content: [
      "A non-accredited workshop for parents, grandparents and carers. Covers choking, CPR, febrile convulsions and common childhood emergencies.",
      "Hands-on instruction in CPR, choking, asthma, anaphylaxis, burns, bites, stings, and poisons so participants leave prepared and confident.",
    ],
  },
]

export function CourseOfferingsSection() {
  return (
    <CourseOfferingsAccordion
      headingId="home-courses-heading"
      title="On Site First Aid Courses We Deliver Across Sydney"
      panelIdPrefix="home-course-panel"
      description={
        <>
          Whether you need a CPR refresher or a full-day Provide First Aid
          course, our paramedic trainers deliver every session on site at your
          Sydney location. Browse our nationally accredited{" "}
          <Link
            href="/courses"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            first aid courses
          </Link>{" "}
          below.
        </>
      }
      items={courseItems}
    />
  )
}
