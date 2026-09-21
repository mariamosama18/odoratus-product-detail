import { InstagramIcon, XIcon, FacebookIcon } from "./icons";

const LINK_COLUMNS = [
  {
    heading: "Collections",
    links: ["La Maison", "Private Reserve", "Scented Candles", "Discovery Sets"],
  },
  {
    heading: "Customer Care",
    links: ["Olfactory Consultation", "Shipping & Returns", "Atelier Appointments", "Care Guide"],
  },
  {
    heading: "About Us",
    links: ["Our Philosophy", "Sourcing Standards", "Sustainability Commitments", "Journal"],
  },
];

const SOCIALS = [InstagramIcon, XIcon, FacebookIcon];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1280px] px-6 pb-8 pt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <p className="font-display text-[40px] leading-none tracking-[0.04em]">
              O D O R A T U S
            </p>
            <p className="mt-5 max-w-[400px] text-sm leading-relaxed text-sandlight">
              An independent olfactory house cultivating slow-luxury liquid narratives. Every bottle
              is hand-poured in small batches using sustainably sourced botanicals.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Footer">
            {LINK_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[13px] text-white/85 transition-colors hover:text-gold"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <hr className="my-8 border-white/15" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/70">© 2026 Odoratus. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[11px] uppercase tracking-[0.12em] text-white/70">
              Secured checkout via
            </span>
            <span className="rounded border border-white/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/85">
              Visa
            </span>
            <span className="rounded border border-white/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/85">
              Mastercard
            </span>
            <span className="rounded border border-white/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white/85">
              Amex
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}