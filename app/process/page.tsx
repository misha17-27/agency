import Image from "next/image";
import { PageIntro, SiteFooter, SiteHeader } from "../components/site-sections";
import { getPartners, getSiteContent } from "../lib/wordpress";

export default async function ProcessPage() {
  const siteContent = await getSiteContent();
  const partners = await getPartners();

  return (
    <main className="page-shell">
      <SiteHeader />
      <PageIntro {...siteContent.pageIntros.process} />

      <section className="section partner-logos-section">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">{siteContent.pageIntros.process.eyebrow}</span>
              <h2>Etibar etdiyimiz və birlikdə işlədiyimiz markalar</h2>
            </div>
            <p>
              Partnyorlarımızla qurduğumuz uzunmüddətli əməkdaşlıq məhsul keyfiyyətini,
              texniki dəqiqliyi və iş prosesinin etibarlılığını gücləndirir.
            </p>
          </div>

          <div className="partner-logo-grid">
            {partners.map((partner) => (
              <article className="partner-logo-card" key={partner.title}>
                <Image
                  src={partner.image}
                  alt={partner.title}
                  width={360}
                  height={226}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter
        contactEmail={siteContent.contact.email}
        contactPhone={siteContent.contact.phone}
        contactOffice={siteContent.contact.office}
        description={siteContent.pageIntros.about.description}
      />
    </main>
  );
}
