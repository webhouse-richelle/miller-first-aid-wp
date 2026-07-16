import Link from "next/link"

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/not-found-ambulance.webp')",
        }}
        aria-hidden
      />
      <div className="hero-gradient-b" aria-hidden />

      <section className="site-container relative flex min-h-[68vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/75">404 Not Found</p>
        <h1 className="mt-3 max-w-4xl text-white">Oops! This page has no pulse.</h1>
        <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
          We checked twice, ran CPR on the URL, and still nothing. Let&apos;s get you back to a living page.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
          >
            Return Home
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center rounded-md border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </main>
  )
}
