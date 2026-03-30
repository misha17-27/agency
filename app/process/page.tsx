import Image from "next/image";
import { PageIntro, SiteFooter, SiteHeader } from "../components/site-sections";
import { getSiteContent } from "../lib/wordpress";

const partnerLogos = [
  "https://webline.az/wp-content/uploads/2024/02/Part-01.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-02.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-03.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-04.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-05.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-06.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-07.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-08.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-09.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-10.jpg",
  "https://webline.az/wp-content/uploads/2024/02/Part-11.jpg",
  "https://webline.az/wp-content/uploads/2024/06/partnyorlar-01.jpg",
];

export default async function ProcessPage() {
  const siteContent = await getSiteContent();

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
            {partnerLogos.map((logo, index) => (
              <article className="partner-logo-card" key={logo}>
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
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
