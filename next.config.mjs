import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/industries/schools",
        destination: "/first-aid-training-for-schools",
        permanent: true,
      },
      {
        source: "/industries/schools-first-aid-training",
        destination: "/first-aid-training-for-schools",
        permanent: true,
      },
      {
        source: "/industries/childcare-first-aid-training",
        destination: "/first-aid-training-for-childcare-centres",
        permanent: true,
      },
      {
        source: "/first-aid-training-for-childcare",
        destination: "/first-aid-training-for-childcare-centres",
        permanent: true,
      },
      {
        source: "/first-aid-training-for-child-care-centres",
        destination: "/first-aid-training-for-childcare-centres",
        permanent: true,
      },
      {
        source: "/industries/manufacturing-first-aid-training",
        destination: "/first-aid-training-for-manufacturing",
        permanent: true,
      },
      {
        source: "/industries/aged-care-first-aid-training",
        destination: "/first-aid-training-for-aged-care",
        permanent: true,
      },
      {
        source: "/industries/healthcare-first-aid-training",
        destination: "/first-aid-training-for-healthcare",
        permanent: true,
      },
      {
        source: "/industries/hospitality-first-aid-training",
        destination: "/first-aid-training-for-hospitality",
        permanent: true,
      },
      {
        source: "/industries/government-first-aid-training",
        destination: "/first-aid-training-for-government",
        permanent: true,
      },
      {
        source: "/industries/retail-first-aid-training",
        destination: "/first-aid-training-for-retail",
        permanent: true,
      },
      {
        source: "/industries/construction-first-aid-training",
        destination: "/first-aid-training-for-construction",
        permanent: true,
      },
      {
        source: "/industries/transport-first-aid-training",
        destination: "/first-aid-training-for-transport",
        permanent: true,
      },
      {
        source: "/resources/anaphylaxis-management",
        destination: "/resources/anaphylaxis-management.pdf",
        permanent: true,
      },
      {
        source: "/resources/seizure-management",
        destination: "/resources/seizure-management.pdf",
        permanent: true,
      },
      {
        source: "/resources/first-responder-mental-health-guide",
        destination: "/resources/first-responder-mental-health-guide.pdf",
        permanent: true,
      },
      {
        source: "/resources/supporting-someone-in-emotional-distress",
        destination: "/resources/supporting-someone-in-emotional-distress.pdf",
        permanent: true,
      },
      {
        source: "/resources/recognising-concerns-vs-crisis-situations",
        destination: "/resources/recognising-concerns-vs-crisis-situations.pdf",
        permanent: true,
      },
      {
        source: "/resources/comprehensive-first-aid-manual",
        destination: "/resources/comprehensive-first-aid-manual.pdf",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
    ]
  },
}

/**
 * String plugin names stay serializable for Turbopack; @next/mdx resolves them at compile time.
 * GFM enables pipe tables, strikethrough, task lists, autolink literals.
 */
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
  },
})

export default withMDX(nextConfig)
