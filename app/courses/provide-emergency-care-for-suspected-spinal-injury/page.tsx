import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CourseDetailPage } from "@/components/course-detail-page"
import { getCourseDetailBySlug } from "@/lib/course-details"
import { buildPageMetadata, SITE_DEFAULT_OG_IMAGE } from "@/lib/seo"

const courseMetadata = getCourseDetailBySlug("provide-emergency-care-for-suspected-spinal-injury")

export const metadata: Metadata = buildPageMetadata({
  title: courseMetadata?.pageTitle ?? "Course",
  description: courseMetadata?.description?.[0] ?? "First aid training course information.",
  path: "/courses/provide-emergency-care-for-suspected-spinal-injury",
  image: courseMetadata?.imageSrc ?? SITE_DEFAULT_OG_IMAGE,
})

export default function SuspectedSpinalInjuryCoursePage() {
  const course = getCourseDetailBySlug("provide-emergency-care-for-suspected-spinal-injury")
  if (!course) notFound()
  return <CourseDetailPage course={course} />
}
