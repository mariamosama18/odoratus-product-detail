import { SearchIcon, UserIcon, BagIcon } from "./icons";

const NAV_LINKS = ["Home", "Shop", "Categories", "The Atelier"];

export default function Header() {
  return (
    <header>
      {/* Announcement bar */}
      <div className="bg-ink px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
        Complimentary signature gift wrapping on all orders above $150
      </div>

      {/* Main navigation */}
      <nav className="border-b border-line bg-cream">
        <div className="mx-auto flex h-[90px] max-w-[1280px] items-center justify-between px-6">
          {/* Left — links */}
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href="#"
                  className={`text-[13px] uppercase tracking-[0.12em] transition-colors hover:text-ink ${
                    i === 0 ? "font-semibold text-ink" : "font-medium text-muted"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Center — wordmark */}
          <a
            href="#"
            className="whitespace-nowrap font-display text-[38px] leading-none tracking-[0.04em] text-ink"
          >
            O D O R A T U S
          </a>

          {/* Right — utilities */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="flex h-8 w-[200px] items-center gap-2 rounded-full border border-line bg-white px-4 focus-within:border-gold">
              <SearchIcon className="h-3.5 w-3.5 shrink-0 text-muted" />
              <input
                type="search"
                placeholder="Search fragrances..."
                className="w-full bg-transparent text-xs text-ink outline-none placeholder:text-muted"
              />
            </div>

            {/* Account */}
            <button
              type="button"
              aria-label="Account"
              className="text-ink transition-opacity hover:opacity-60"
            >
              <UserIcon className="h-5 w-5" />
            </button>

            {/* Cart */}
            <button type="button" aria-label="Cart" className="relative text-ink transition-opacity hover:opacity-60">
              <BagIcon className="h-5 w-5" />
              <span className="absolute -right-2.5 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gold text-[10px] font-bold text-white">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}