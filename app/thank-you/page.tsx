import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata } from "@/lib/seo"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Thank You",
    description:
      "Thank you for your message. The Miller First Aid team will be in touch shortly.",
    path: "/thank-you",
  }),
  robots: {
    index: false,
    follow: true,
  },
}

export default function ThankYouPage() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center px-4 py-20 md:py-28">
        <div className="site-container mx-auto w-full max-w-xl text-center">
          <h1 className="text-balance text-foreground">Thank you</h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-base text-muted-foreground md:max-w-lg md:text-lg">
            We have received your enquiry. Our team will get back to you as soon as we can.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className={cn(buttonVariants({ size: "lg" }), "min-w-[10rem]")}>
              Back to home
            </Link>
            <Link
              href="/courses"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-w-[10rem] bg-background")}
            >
              View courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
