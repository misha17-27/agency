import Link from "next/link";
import {
  CtaStrip,
  SiteFooter,
  SiteHeader,
} from "../components/site-sections";
import {
  fallbackPortfolioProjects,
  mergePortfolioCategories,
  mergePortfolioProjects,
  type PortfolioCategoryIcon,
  getPortfolioCategories,
  getPortfolioPageCopy,
} from "../lib/portfolio-data";
import { localizeHref } from "../lib/locale";
import { getCurrentLocale } from "../lib/request-locale";
import {
  getPortfolioCategoriesFromCms,
  getPortfolioProjects,
  getSiteContent,
} from "../lib/wordpress";

function PortfolioCategoryGlyph({ icon }: { icon: PortfolioCategoryIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
  };

  if (icon === "design") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M8 6h10v10" />
        <path {...common} d="M18 6L7 17" />
        <path {...common} d="M7 11v6h6" />
      </svg>
    );
  }

  if (icon === "social") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M8 8h8" />
        <path {...common} d="M8 12h8" />
        <path {...common} d="M8 16h5" />
        <circle cx="17.5" cy="16.5" r="1.25" {...common} />
      </svg>
    );
  }

  if (icon === "video") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5.5" y="7" width="9.5" height="10" rx="2.5" {...common} />
        <path {...common} d="M15 11l3.5-2v6L15 13" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path {...common} d="M8 8l8 8" />
      <path {...common} d="M9 16H6v-3" />
      <path {...common} d="M15 8h3v3" />
      <path {...common} d="M16 16l-8-8" opacity="0.28" />
    </svg>
  );
}

export default async function PortfolioPage() {
  const locale = await getCurrentLocale();
  const [siteContent, cmsProjects, cmsCategories] = await Promise.all([
    getSiteContent(locale),
    getPortfolioProjects(locale),
    getPortfolioCategoriesFromCms(locale),
  ]);
  const pageCopy = getPortfolioPageCopy(locale);
  const portfolioProjects = mergePortfolioProjects(
    cmsProjects,
    fallbackPortfolioProjects
  );
  const categorySource = mergePortfolioCategories(
    cmsCategories,
    siteContent.portfolioCategories
  );
  const categories = getPortfolioCategories(
    locale,
    categorySource,
    portfolioProjects
  );

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="portfolio-hub shell">
        <div className="portfolio-hub__intro">
          <span className="eyebrow">{pageCopy.eyebrow}</span>
          <h1>{pageCopy.title}</h1>
          <p>{pageCopy.description}</p>
        </div>

        <div className="portfolio-category-grid" aria-label={pageCopy.categoriesLabel}>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={localizeHref(`/portfolio/${category.slug}`, locale)}
              className="portfolio-category-card"
            >
              <div className="portfolio-category-card__icon" aria-hidden="true">
                <PortfolioCategoryGlyph icon={category.icon} />
              </div>
              <div className="portfolio-category-card__body">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className="portfolio-category-card__footer">
                <span>{category.shortLabel}</span>
                <span className="portfolio-category-card__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M8 12h8M13 7l5 5-5 5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.9"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaStrip
        locale={locale}
        eyebrow={siteContent.pageIntros.contact.eyebrow}
        title={siteContent.contact.panelTitle}
        description={siteContent.contact.panelDescription}
      />

      <SiteFooter
        locale={locale}
        contactEmail={siteContent.contact.email}
        contactPhone={siteContent.contact.phone}
        contactOffice={siteContent.contact.office}
        description={siteContent.pageIntros.about.description}
      />
    </main>
  );
}
