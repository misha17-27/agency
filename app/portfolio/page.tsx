import {
  CtaStrip,
  InsightsSection,
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "../components/site-sections";
import { getCurrentLocale } from "../lib/request-locale";
import { getInsights, getSiteContent } from "../lib/wordpress";

export default async function PortfolioPage() {
  const locale = await getCurrentLocale();
  const [siteContent, insights] = await Promise.all([
    getSiteContent(locale),
    getInsights(locale),
  ]);

  return (
    <main className="page-shell">
      <SiteHeader />
      <PageIntro {...siteContent.pageIntros.portfolio} />
      <InsightsSection
        posts={insights}
        locale={locale}
        heading={siteContent.pageIntros.portfolio.title}
      />
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
