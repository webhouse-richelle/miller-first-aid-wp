export type HomeFaqItem = {
  id: string
  q: string
  paragraphs: string[]
}

export const homeFaqItems: HomeFaqItem[] = [
  {
    id: "areas",
    q: "What areas in Sydney do you cover for on site training?",
    paragraphs: [
      "We train right across Greater Sydney, from the CBD through to Western Sydney, the Northern Beaches, Eastern Suburbs, Hills District, Sutherland Shire, and we regularly head to the Central Coast for larger workplace or school bookings.",
      "Not sure if you are inside our usual run? Send us your address or suburb when you get in touch and we will tell you honestly whether we can come to you and what the travel looks like for your quote.",
    ],
  },
  {
    id: "participants",
    q: "How many participants do you need for on site training?",
    paragraphs: [
      "We have run sessions for handfuls of staff and for well over a hundred people on one booking. Smaller groups are completely fine. Very large groups are too, we just plan multiple instructors or pods so everyone still gets proper hands on time on the manikins.",
      "Give us your rough headcount, the space you have on site, and we will recommend a format and fixed price before we lock anything in.",
    ],
  },
  {
    id: "duration",
    q: "How long does a first aid course take?",
    paragraphs: [
      "It depends which unit you are sitting. CPR (HLTAID009) is usually about two to three hours on the day. Provide First Aid (HLTAID011) is a full day, most groups land somewhere around five to six hours of face to face training. First Aid in Education and Care (HLTAID012) runs longer, expect about six hours all up.",
      "We confirm exact start, finish, and break times in your booking email so your roster stays accurate.",
    ],
  },
  {
    id: "recognised",
    q: "Are your first aid courses nationally recognised?",
    paragraphs: [
      "Yes. Accredited courses are delivered on behalf of Allens Training Pty Ltd, RTO 90909. When participants meet the assessment requirements they receive a Statement of Attainment that counts for Workplace Health and Safety records and most industry or school compliance checks nationwide.",
    ],
  },
  {
    id: "blended",
    q: "Do you offer blended or online delivery?",
    paragraphs: [
      "We do. Blended means your people complete the theory online in their own time, then we come on site for the practical skills and assessment. That works well when you cannot pull a whole team out for a full day of classroom theory.",
      "Prefer everything done in the room? We still offer full face to face delivery. Tell us how your roster works and we will match the model.",
    ],
  },
  {
    id: "weekends",
    q: "Can you train on weekends or after hours?",
    paragraphs: [
      "Yes. Schools often want holiday blocks, offices ask for early starts or late finishes, and shift based sites book evenings or weekends. We are used to working around bell times and rosters.",
      "Put your preferred window in the enquiry form and we will come back with a couple of real options, not a generic brochure answer.",
    ],
  },
]

export function homeFaqItemsForSchema(): { question: string; answer: string }[] {
  return homeFaqItems.map((item) => ({
    question: item.q,
    answer: item.paragraphs.join(" "),
  }))
}
