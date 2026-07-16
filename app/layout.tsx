import { Montserrat } from "next/font/google"
import type { Metadata } from "next"
import { GoogleTagManager } from "@next/third-parties/google"

import "./globals.css"
import { AttributionCapture } from "@/components/attribution-capture"
import { EnquiryReferrerCapture } from "@/components/enquiry-referrer-capture"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-WH87DTFZ"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.millerfirstaid.com.au"),
  title: {
    default: "Miller First Aid",
    template: "%s | Miller First Aid",
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} font-sans antialiased`}
    >
      <body className="min-h-svh flex flex-col">
        {process.env.NODE_ENV === "production" && GTM_ID ? (
          <GoogleTagManager gtmId={GTM_ID} />
        ) : null}
        <AttributionCapture />
        <EnquiryReferrerCapture />
        <ThemeProvider>
          <SiteHeader />
          <div className="flex-1 pt-20">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
