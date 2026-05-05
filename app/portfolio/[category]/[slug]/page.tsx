import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CtaStrip,
  SiteFooter,
  SiteHeader,
} from "../../../components/site-sections";
import {
  fallbackPortfolioProjects,
  getPortfolioCategory,
  getPortfolioPageCopy,
  getPortfolioRouteSlug,
  mergePortfolioCategories,
  mergePortfolioProjects,
  normalizePortfolioCategorySlug,
} from "../../../lib/portfolio-data";
import { localizeHref } from "../../../lib/locale";
import { getCurrentLocale } from "../../../lib/request-locale";
import {
  getPortfolioCategoriesFromCms,
  getPortfolioProjects,
  getSiteContent,
} from "../../../lib/wordpress";

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const normalizedCategory = normalizePortfolioCategorySlug(category);
  const locale = await getCurrentLocale();

  const [siteContent, cmsProjects, cmsCategories] = await Promise.all([
    getSiteContent(locale),
    getPortfolioProjects(locale),
    getPortfolioCategoriesFromCms(locale),
  ]);

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

  const portfolioProjects = mergePortfolioProjects(
    cmsProjects,
    fallbackPortfolioProjects
  );
  const project = portfolioProjects.find(
    (item) =>
      normalizePortfolioCategorySlug(item.category) === normalizedCategory &&
      item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const pageCopy = getPortfolioPageCopy(locale);
  const categoryCopy = getPortfolioCategory(locale, normalizedCategory, categorySource);
  const detailImages =
    project.gallery && project.gallery.length
      ? project.gallery
      : [{ src: project.image, alt: project.alt }];

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="portfolio-project-page shell">
        <nav className="portfolio-breadcrumb" aria-label="Breadcrumb">
          <Link href={localizeHref("/portfolio", locale)}>{pageCopy.breadcrumbRoot}</Link>
          <span aria-hidden="true">&gt;</span>
          <Link
            href={localizeHref(
              `/portfolio/${getPortfolioRouteSlug(normalizedCategory)}`,
              locale
            )}
          >
            {categoryCopy.title}
          </Link>
          <span aria-hidden="true">&gt;</span>
          <span>{project.title}</span>
        </nav>

        <div className="portfolio-project-hero">
          <span className="eyebrow">{project.badge}</span>
          <h1>{project.title}</h1>
          <div className="portfolio-project-hero__copy">
            <p>{project.description}</p>
          </div>
        </div>

        <div className="portfolio-project-gallery">
          <div className="portfolio-project-gallery__main">
            <Image
              src={detailImages[0].src}
              alt={detailImages[0].alt}
              width={1440}
              height={940}
              sizes="(max-width: 760px) 100vw, 100vw"
              priority
            />
          </div>

          {detailImages.length > 1 ? (
            <div className="portfolio-project-gallery__thumbs">
              {detailImages.slice(1).map((image, index) => (
                <div className="portfolio-project-gallery__thumb" key={`${image.alt}-${index}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={720}
                    height={520}
                    sizes="(max-width: 760px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ) : null}
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
