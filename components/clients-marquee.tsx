import Image from "next/image"
import { cn } from "@/lib/utils"

type ClientLogo = { src: string; alt: string }

const clientLogos: ClientLogo[] = [
  { src: "/clients/aboriginal-hostels-logo.avif", alt: "Aboriginal Hostels Limited logo" },
  { src: "/clients/barings-logo.avif", alt: "Barings logo" },
  { src: "/clients/base-181-studios-logo.png", alt: "Base 181 Studios logo" },
  { src: "/clients/blume-academy-logo.jpeg", alt: "Blume Academy logo" },
  { src: "/clients/cdc-studios-logo.avif", alt: "CDC Studios logo" },
  { src: "/clients/dwm-logo.avif", alt: "DWM logo" },
  { src: "/clients/future-scholars-logo.png", alt: "Future Scholars Early Learning Centre logo" },
  { src: "/clients/gns-ceramics-logo.avif", alt: "GNS Ceramics logo" },
  { src: "/clients/hiban-logo.jpeg", alt: "Hiban logo" },
  { src: "/clients/hills-sanctuaru-house-logo.png", alt: "Hills Sanctuary House logo" },
  { src: "/clients/icla-logo.avif", alt: "ICLA logo" },
  { src: "/clients/little-darlings-logo.avif", alt: "Little Darlings logo" },
  { src: "/clients/monte-santangelo-mercy-college-logo.png", alt: "Monte Sant'Angelo Mercy College logo" },
  { src: "/clients/northside-logo.avif", alt: "Northside logo" },
  { src: "/clients/our-lady-of-sacred-heart-college-logo.avif", alt: "Our Lady of the Sacred Heart College logo" },
  { src: "/clients/patrician-brothers-college-blacktown-logo.svg", alt: "Patrician Brothers College Blacktown logo" },
  { src: "/clients/penrith-physiotherapy-logo.webp", alt: "Penrith Physiotherapy logo" },
  { src: "/clients/ready-set-school-logo.jpeg", alt: "Ready Set School logo" },
  { src: "/clients/redfield-college-logo.avif", alt: "Redfield College logo" },
  { src: "/clients/st-pauls-logo.avif", alt: "St Pauls Catholic College Greystanes logo" },
  { src: "/clients/stunt-gym.jpg", alt: "Stunt Gym logo" },
  { src: "/clients/wentworthville-united-logo.avif", alt: "Wentworthville United logo" },
  { src: "/clients/your-doctors-logo.jpg", alt: "Your Doctors logo" },
  { src: "/clients/zammit-logo.avif", alt: "Zammit Ham and Bacon Curers logo" },
]

const logoRows = Array.from({ length: 4 }, (_, rowIndex) =>
  clientLogos.filter((_, logoIndex) => logoIndex % 4 === rowIndex)
)

/** Slight scale-up for logos that read small in the fixed-height marquee slots. */
const logoScaleByPath: Record<string, number> = {
  "/clients/base-181-studios-logo.png": 1.2,
  "/clients/blume-academy-logo.jpeg": 1.22,
  "/clients/future-scholars-logo.png": 1.2,
  "/clients/hiban-logo.jpeg": 1.18,
  "/clients/hills-sanctuaru-house-logo.png": 1.2,
  "/clients/monte-santangelo-mercy-college-logo.png": 1.22,
  "/clients/penrith-physiotherapy-logo.webp": 1.16,
  "/clients/ready-set-school-logo.jpeg": 1.18,
  "/clients/stunt-gym.jpg": 1.18,
  "/clients/your-doctors-logo.jpg": 1.18,
}

type ClientsMarqueeProps = {
  /** Override default vertical padding (`py-14 md:py-20`). Use on the home page when a parent section sets spacing. */
  className?: string
}

export function ClientsMarquee({ className }: ClientsMarqueeProps) {
  return (
    <div className={cn("w-full py-8 md:py-14 lg:py-20", className)}>
      <div className="flex w-full flex-col gap-3 md:gap-6">
        {logoRows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="clients-marquee-row">
            <div className="clients-marquee-track">
              <div className="clients-marquee-set">
                {row.map((logo) => (
                  <div
                    key={logo.src}
                    className="flex h-14 w-36 shrink-0 items-center justify-center px-1 md:h-20 md:w-56 md:px-2"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={224}
                      height={64}
                      className={cn(
                        "h-8 w-auto max-w-[8.5rem] object-contain object-center md:h-12 md:max-w-[14rem]",
                        logoScaleByPath[logo.src] ? "origin-center" : ""
                      )}
                      style={{
                        transform: `scale(${logoScaleByPath[logo.src] ?? 1})`,
                      }}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              <div className="clients-marquee-set" aria-hidden>
                {row.map((logo) => (
                  <div
                    key={`dup-${logo.src}`}
                    className="flex h-14 w-36 shrink-0 items-center justify-center px-1 md:h-20 md:w-56 md:px-2"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={224}
                      height={64}
                      className={cn(
                        "h-8 w-auto max-w-[8.5rem] object-contain object-center md:h-12 md:max-w-[14rem]",
                        logoScaleByPath[logo.src] ? "origin-center" : ""
                      )}
                      style={{
                        transform: `scale(${logoScaleByPath[logo.src] ?? 1})`,
                      }}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
