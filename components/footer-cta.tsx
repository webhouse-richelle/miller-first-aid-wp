import Image from "next/image"
import { EnquiryForm } from "@/components/enquiry-form"

type FooterCtaProps = {
  headingId?: string
  ctaTitle: string
  ctaSubheading: string
  /** Heading shown above the enquiry form in the white card (e.g. “Enquire Now”). */
  formTitle: string
  fieldPrefix: string
}

export function FooterCta({
  headingId = "footer-cta-heading",
  ctaTitle,
  ctaSubheading,
  formTitle,
  fieldPrefix,
}: FooterCtaProps) {
  return (
    <>
      <section
        className="bg-secondary py-14 text-secondary-foreground md:py-20"
        aria-labelledby={headingId}
      >
        <div className="site-container grid gap-8 md:grid-cols-[1fr_0.95fr] md:items-start">
          <div>
            <h2 id={headingId} className="text-balance text-secondary-foreground">
              {ctaTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-secondary-foreground/85 md:text-lg">{ctaSubheading}</p>
            <div className="mt-6 max-w-xl rounded-xl border border-border bg-card p-3 text-foreground shadow-sm md:p-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/allens.avif"
                  alt="Allens Training logo"
                  width={96}
                  height={96}
                  className="h-12 w-12 rounded-md object-contain md:h-14 md:w-14"
                />
                <p className="text-sm leading-snug font-semibold md:text-base">
                  Training and Assessment delivered on behalf of{" "}
                  <a
                    href="https://www.allenstraining.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Allens Training Pty Ltd RTO 90909
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 text-foreground md:p-6">
            <h3 className="mb-4 text-foreground">{formTitle}</h3>
            <EnquiryForm fieldPrefix={fieldPrefix} textareaClassName="min-h-32" />
          </div>
        </div>
      </section>

      <section className="bg-secondary" aria-hidden>
        <div className="site-container pb-6 md:pb-8">
          <Image
            src="/heartbeat-separator.avif"
            alt="Heartbeat rhythm line separating sections"
            width={2400}
            height={180}
            className="h-auto w-full object-contain opacity-60"
          />
        </div>
      </section>
    </>
  )
}
