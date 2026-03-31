import Image from "next/image";
import { SiteFooter, SiteHeader } from "../components/site-sections";
import { getMessages } from "../lib/messages";
import { getCurrentLocale } from "../lib/request-locale";
import { getPartners, getSiteContent } from "../lib/wordpress";

export default async function ProcessPage() {
  const locale = await getCurrentLocale();
  const t = getMessages(locale);
  const siteContent = await getSiteContent(locale);
  const partners = await getPartners(locale);

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="section partner-logos-section">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">{siteContent.pageIntros.process.eyebrow}</span>
              <h2>{t.process.title}</h2>
            </div>
            <p>{t.process.description}</p>
          </div>

          <div className="partner-logo-grid">
            {partners.map((partner) => (
              <article className="partner-logo-card" key={partner.title}>
                <Image
                  src={partner.image}
                  alt={partner.title}
                  width={360}
                  height={226}
                  sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 25vw"
                  loading="eager"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

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
