import { PageIntro, SiteFooter, SiteHeader } from "../components/site-sections";
import { getCurrentLocale } from "../lib/request-locale";
import { getSiteContent } from "../lib/wordpress";

export default async function ServicesPage() {
  const locale = await getCurrentLocale();
  const siteContent = await getSiteContent(locale);

  return (
    <main className="page-shell">
      <SiteHeader />
      <PageIntro {...siteContent.pageIntros.services} />

      <section className="section services-showcase">
        <div className="shell services-showcase__grid">
          {siteContent.services.items.map((group, index) => (
            <article className="services-showcase__card" key={group.title}>
              <div className="services-showcase__top">
                <span className="eyebrow">{group.icon || String(index + 1).padStart(2, "0")}</span>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>

              {group.items?.length ? (
                <ul className="services-showcase__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
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
