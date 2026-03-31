import {
  FaqSection,
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "../components/site-sections";
import { getCurrentLocale } from "../lib/request-locale";
import { getSiteContent } from "../lib/wordpress";

export default async function FaqPage() {
  const locale = await getCurrentLocale();
  const siteContent = await getSiteContent(locale);

  return (
    <main className="page-shell">
      <SiteHeader />
      <PageIntro {...siteContent.pageIntros.faq} />
      <FaqSection content={siteContent.faq} eyebrow={siteContent.pageIntros.faq.eyebrow} />
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
