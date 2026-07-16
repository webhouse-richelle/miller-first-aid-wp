import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CourseDetailPage } from "@/components/course-detail-page"
import { getCourseDetailBySlug } from "@/lib/course-details"
import { buildPageMetadata, SITE_DEFAULT_OG_IMAGE } from "@/lib/seo"

const courseMetadata = getCourseDetailBySlug("basic-oxygen-administration-for-first-aid")

export const metadata: Metadata = buildPageMetadata({
  title: courseMetadata?.pageTitle ?? "Course",
  description: courseMetadata?.description?.[0] ?? "First aid training course information.",
  path: "/courses/basic-oxygen-administration-for-first-aid",
  image: courseMetadata?.imageSrc ?? SITE_DEFAULT_OG_IMAGE,
})

export default function BasicOxygenCoursePage() {
  const course = getCourseDetailBySlug("basic-oxygen-administration-for-first-aid")
  if (!course) notFound()
  return <CourseDetailPage course={course} />
}
