import { ChevronRightIcon } from "./icons";

const CRUMBS = ["Home", "Shop", "Fragrances", "Santal Parchment"];

export default function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-[1280px] px-6 py-5">
      <ol className="flex flex-wrap items-center gap-2 text-xs">
        {CRUMBS.map((crumb, i) => {
          const isLast = i === CRUMBS.length - 1;
          return (
            <li key={crumb} className="flex items-center gap-2">
              {i > 0 && <ChevronRightIcon className="h-2.5 w-2.5 text-muted" />}
              {isLast ? (
                <span className="font-semibold text-ink">{crumb}</span>
              ) : (
                <a href="#" className="text-muted transition-colors hover:text-ink">
                  {crumb}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}