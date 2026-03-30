import { ContactOfficeTabs, type ContactOffice } from "../components/contact-office-tabs";
import { SiteFooter, SiteHeader } from "../components/site-sections";
import { getSiteContent } from "../lib/wordpress";

export default async function ContactPage() {
  const siteContent = await getSiteContent();

  const offices: ContactOffice[] = [
    {
      city: "Bakı",
      country: "Azərbaycan",
      address: "Heydər Əliyev prospekti 5",
      phone: siteContent.contact.phone,
      email: siteContent.contact.email,
      mapUrl: siteContent.contact.mapUrl,
      embedUrl: siteContent.contact.embedUrl,
    },
    {
      city: "Berlin",
      country: "Almaniya",
      address: "Naugarder Strasse 46, 10409",
      phone: "+49 176 75552813",
      email: "info@thewebline.com",
      mapUrl: "https://maps.google.com/?q=Naugarder+Strasse+46,+10409+Berlin",
      embedUrl:
        "https://www.google.com/maps?q=Naugarder+Strasse+46,+10409+Berlin&z=13&output=embed",
    },
    {
      city: "Vyana",
      country: "Avstriya",
      address: "A-1110, Simmeringer Hauptstr.26IB",
      phone: "+43 660 8600035",
      email: "info@thewebline.com",
      mapUrl:
        "https://maps.google.com/?q=Simmeringer+Hauptstrasse+26,+1110+Vienna",
      embedUrl:
        "https://www.google.com/maps?q=Simmeringer+Hauptstrasse+26,+1110+Vienna&z=13&output=embed",
    },
    {
      city: "Budapeşt",
      country: "Macarıstan",
      address: "1051, Széchenyi István tér 7-8",
      phone: "+36 30 336 6884",
      email: "info@thewebline.com",
      mapUrl:
        "https://maps.google.com/?q=Szechenyi+Istvan+ter+7-8,+1051+Budapest",
      embedUrl:
        "https://www.google.com/maps?q=Szechenyi+Istvan+ter+7-8,+1051+Budapest&z=13&output=embed",
    },
  ];

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="contact-hero shell">
        <span className="eyebrow">
          {siteContent.pageIntros.contact.eyebrow || "Contact"}
        </span>
        <h1>Bizimlə əlaqə saxlayın</h1>
        <p>
          Layihəniz haqqında bizə yazın. Komandamız ən qısa zamanda sizinlə
          əlaqə saxlayacaq.
        </p>
      </section>

      <ContactOfficeTabs offices={offices} />

      <section className="section contact-form-section">
        <div className="shell contact-story-layout">
          <div className="contact-story">
            <h2>
              Layihəniz haqqında
              <br />
              <em>danışaq</em>
            </h2>
            <p>
              Formu doldurun, komandamız ən qısa zamanda sizinlə əlaqə
              saxlayacaq.
            </p>

            <div className="contact-story-list">
              <div className="contact-story-item">
                <div className="contact-story-item__icon" aria-hidden="true">
                  <span />
                </div>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${siteContent.contact.email}`}>
                    {siteContent.contact.email}
                  </a>
                </div>
              </div>

              <div className="contact-story-item">
                <div className="contact-story-item__icon" aria-hidden="true">
                  <span />
                </div>
                <div>
                  <small>Telefon</small>
                  <a href={`tel:${siteContent.contact.phone.replace(/\s+/g, "")}`}>
                    {siteContent.contact.phone}
                  </a>
                </div>
              </div>

              <div className="contact-story-item">
                <div className="contact-story-item__icon" aria-hidden="true">
                  <span />
                </div>
                <div>
                  <small>Ünvan</small>
                  <strong>{offices[0].address}</strong>
                  <span>
                    {offices[0].city}, {offices[0].country}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-modern-form">
            <label className="field">
              <span>Ad Soyad</span>
              <input type="text" placeholder="Ad və soyadınız" />
            </label>

            <label className="field">
              <span>Email</span>
              <input type="email" placeholder="email@example.com" />
            </label>

            <label className="field">
              <span>Telefon (İstəyə bağlı)</span>
              <input type="tel" placeholder="+994 XX XXX XX XX" />
            </label>

            <label className="field field-textarea">
              <span>Mesaj</span>
              <textarea
                rows={8}
                placeholder="Layihəniz haqqında bizə yazın..."
              />
            </label>

            <div className="contact-modern-form__actions">
              <button className="button button-accent" type="submit">
                Göndər <span className="arrow">-&gt;</span>
              </button>
            </div>
          </form>
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
