import { ContactOfficeTabs, type ContactOffice } from "../components/contact-office-tabs";
import { SiteFooter, SiteHeader } from "../components/site-sections";
import { getMessages } from "../lib/messages";
import { getCurrentLocale } from "../lib/request-locale";
import { getSiteContent } from "../lib/wordpress";

export default async function ContactPage() {
  const locale = await getCurrentLocale();
  const t = getMessages(locale);
  const siteContent = await getSiteContent(locale);

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
      mapUrl: "https://maps.google.com/?q=Simmeringer+Hauptstrasse+26,+1110+Vienna",
      embedUrl:
        "https://www.google.com/maps?q=Simmeringer+Hauptstrasse+26,+1110+Vienna&z=13&output=embed",
    },
    {
      city: "Budapeşt",
      country: "Macarıstan",
      address: "1051, Széchenyi István tér 7-8",
      phone: "+36 30 336 6884",
      email: "info@thewebline.com",
      mapUrl: "https://maps.google.com/?q=Szechenyi+Istvan+ter+7-8,+1051+Budapest",
      embedUrl:
        "https://www.google.com/maps?q=Szechenyi+Istvan+ter+7-8,+1051+Budapest&z=13&output=embed",
    },
  ];

  const officesHeading =
    locale === "en"
      ? "Our offices"
      : locale === "ru"
        ? "Наши офисы"
        : locale === "de"
          ? "Unsere Standorte"
          : locale === "tr"
            ? "Ofislerimiz"
            : "Ofislərimiz";

  const mapEyebrow =
    locale === "en"
      ? "Office map"
      : locale === "ru"
        ? "Карта офиса"
        : locale === "de"
          ? "Karte des Standorts"
          : locale === "tr"
            ? "Ofis haritası"
            : "Ofis xəritəsi";

  const openMapLabel =
    locale === "en"
      ? "Open in maps"
      : locale === "ru"
        ? "Открыть на карте"
        : locale === "de"
          ? "In Karten öffnen"
          : locale === "tr"
            ? "Haritada aç"
            : "Xəritədə aç";

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="contact-hero shell">
        <span className="eyebrow">{siteContent.pageIntros.contact.eyebrow || "Contact"}</span>
        <h1>{t.contact.heroTitle}</h1>
        <p>{t.contact.heroDescription}</p>
      </section>

      <ContactOfficeTabs
        offices={offices}
        heading={officesHeading}
        mapEyebrow={mapEyebrow}
        openMapLabel={openMapLabel}
      />

      <section className="section contact-form-section">
        <div className="shell contact-story-layout">
          <div className="contact-story">
            <h2>
              {t.contact.storyTitleStart}
              <br />
              <em>{t.contact.storyTitleAccent}</em>
            </h2>
            <p>{t.contact.storyDescription}</p>

            <div className="contact-story-list">
              <div className="contact-story-item">
                <div className="contact-story-item__icon" aria-hidden="true">
                  <span />
                </div>
                <div>
                  <small>{t.contact.email}</small>
                  <a href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
                </div>
              </div>

              <div className="contact-story-item">
                <div className="contact-story-item__icon" aria-hidden="true">
                  <span />
                </div>
                <div>
                  <small>{t.contact.phone}</small>
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
                  <small>{t.contact.address}</small>
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
              <span>{t.contact.fullName}</span>
              <input type="text" placeholder={t.contact.fullNamePlaceholder} />
            </label>

            <label className="field">
              <span>{t.contact.email}</span>
              <input type="email" placeholder="email@example.com" />
            </label>

            <label className="field">
              <span>{t.contact.phone}</span>
              <input type="tel" placeholder={t.contact.phonePlaceholder} />
            </label>

            <label className="field field-textarea">
              <span>{t.contact.message}</span>
              <textarea rows={8} placeholder={t.contact.messagePlaceholder} />
            </label>

            <div className="contact-modern-form__actions">
              <button className="button button-accent" type="submit">
                {t.contact.send} <span className="arrow">-&gt;</span>
              </button>
            </div>
          </form>
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
