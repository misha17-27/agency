import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CtaStrip,
  SiteFooter,
  SiteHeader,
} from "../../components/site-sections";
import {
  fallbackPortfolioProjects,
  getPortfolioCategory,
  getPortfolioPageCopy,
  getPortfolioRouteSlug,
  mergePortfolioCategories,
  mergePortfolioProjects,
  normalizePortfolioCategorySlug,
} from "../../lib/portfolio-data";
import { localizeHref } from "../../lib/locale";
import { getCurrentLocale } from "../../lib/request-locale";
import {
  getPortfolioCategoriesFromCms,
  getPortfolioProjects,
  getSiteContent,
} from "../../lib/wordpress";

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const normalizedCategory = normalizePortfolioCategorySlug(category);
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
  const categoryExists = categorySource.some(
    (item) => normalizePortfolioCategorySlug(item.slug) === normalizedCategory
  );

  if (!categoryExists) {
    notFound();
  }

  const categoryCopy = getPortfolioCategory(
    locale,
    normalizedCategory,
    categorySource
  );
  const projects = portfolioProjects.filter(
    (project) =>
      normalizePortfolioCategorySlug(project.category) === normalizedCategory
  );

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="portfolio-category-page shell">
        <nav className="portfolio-breadcrumb" aria-label="Breadcrumb">
          <Link href={localizeHref("/portfolio", locale)}>{pageCopy.breadcrumbRoot}</Link>
          <span aria-hidden="true">&gt;</span>
          <span>{categoryCopy.title}</span>
        </nav>

        <div className="portfolio-category-heading">
          <div className="portfolio-category-heading__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                d="M8 8l8 8M9 16H6v-3M15 8h3v3"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.9"
              />
            </svg>
          </div>
          <div className="portfolio-category-heading__copy">
            <h1>{categoryCopy.title}</h1>
            <p>{categoryCopy.description}</p>
          </div>
        </div>

        {projects.length ? (
          <div className="portfolio-project-grid">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={localizeHref(
                  `/portfolio/${getPortfolioRouteSlug(normalizedCategory)}/${project.slug}`,
                  locale
                )}
                className="portfolio-project-card portfolio-project-card--link"
              >
                <div className="portfolio-project-card__image">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={900}
                    height={640}
                    sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="portfolio-project-card__copy">
                  <span className="portfolio-project-card__badge">{project.badge}</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="portfolio-empty-state">
            <h2>{pageCopy.emptyTitle}</h2>
            <p>{pageCopy.emptyDescription}</p>
          </div>
        )}
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
