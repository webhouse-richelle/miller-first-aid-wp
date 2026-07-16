import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Miller First Aid privacy policy for details on how we collect, use and protect your information.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-[40vh]">
      <header className="border-b border-border bg-muted/30">
        <div className="site-container py-10 md:py-12">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
          >
            <Link
              href="/"
              className="text-foreground/90 transition-colors hover:text-primary"
            >
              Home
            </Link>
            <span
              className="inline-flex items-center text-muted-foreground/80"
              aria-hidden
            >
              <ChevronRightIcon className="size-3.5" />
            </span>
            <span className="text-foreground" aria-current="page">
              Privacy Policy
            </span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-balance text-foreground md:mt-5">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            Effective Date: 16 April 2026
          </p>
          <p className="mt-4 max-w-3xl text-pretty text-base text-muted-foreground md:text-lg">
            Miller First Aid (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
            respects your privacy and is committed to protecting your personal
            information in accordance with the Australian Privacy Principles
            under the Privacy Act 1988 (Cth).
          </p>
        </div>
      </header>

      <section className="py-14 md:py-20">
        <div className="site-container">
          <div className="prose max-w-4xl prose-neutral dark:prose-invert">
            <h2>1. What Information We Collect</h2>
            <p>We may collect personal information including:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business details (if applicable)</li>
              <li>
                Any information you provide via forms, bookings, or enquiries
              </li>
            </ul>
            <p>We may also collect non-personal data such as:</p>
            <ul>
              <li>Browser type</li>
              <li>IP address</li>
              <li>Pages visited on our website</li>
            </ul>

            <h2>2. How We Collect Information</h2>
            <p>We collect information when you:</p>
            <ul>
              <li>Submit a contact form</li>
              <li>Book a service or make an enquiry</li>
              <li>Subscribe to updates or marketing</li>
              <li>Interact with our website</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to enquiries</li>
              <li>Provide and manage our services</li>
              <li>Process bookings or requests</li>
              <li>Improve our website and offerings</li>
              <li>
                Send relevant updates or marketing (you can opt out anytime)
              </li>
            </ul>

            <h2>4. Disclosure of Information</h2>
            <p>We do not sell your personal information.</p>
            <p>
              We may share your data with trusted third parties where necessary
              to operate our business, such as:
            </p>
            <ul>
              <li>Website hosting providers</li>
              <li>CRM or email marketing platforms</li>
              <li>Payment processors (if applicable)</li>
            </ul>
            <p>These providers are required to handle your data securely.</p>

            <h2>5. Data Security</h2>
            <p>
              We take reasonable steps to protect your personal information from
              misuse, loss, or unauthorised access.
            </p>
            <p>
              However, no system is completely secure, and we cannot guarantee
              absolute security.
            </p>

            <h2>6. Cookies &amp; Tracking</h2>
            <p>
              Our website may use cookies and tracking tools to improve user
              experience and analyse website traffic.
            </p>
            <p>
              You can control or disable cookies through your browser settings.
            </p>

            <h2>7. Access &amp; Correction</h2>
            <p>
              You may request access to the personal information we hold about
              you and request corrections if needed.
            </p>
            <p>To do so, contact us using the details below.</p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to other websites. We are not
              responsible for the privacy practices of those sites.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how your
              data is handled, please contact us:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@millerfirstaid.com.au">
                info@millerfirstaid.com.au
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a
                href="https://millerfirstaid.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://millerfirstaid.com.au
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
