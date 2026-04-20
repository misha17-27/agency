import Link from "next/link";
import { CtaStrip, SiteFooter, SiteHeader } from "../components/site-sections";
import { localizeHref } from "../lib/locale";
import { getCurrentLocale } from "../lib/request-locale";
import { serviceGroups } from "../lib/services-data";
import { getSiteContent } from "../lib/wordpress";

function ServiceGroupIcon({ index, className = "" }: { index: number; className?: string }) {
  const icons = [
    <>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </>,
    <>
      <path d="m17 3-5 5-5-5h10" />
      <path d="m17 21-5-5-5 5h10" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </>,
    <>
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
    </>,
    <>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9 9.5 2 2 4-4" />
    </>,
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>,
    <>
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </>,
    <>
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </>,
  ];

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[index] ?? icons[0]}
    </svg>
  );
}

export default async function ServicesPage() {
  const locale = await getCurrentLocale();
  const siteContent = await getSiteContent(locale);

  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="services-reference-hero shell">
        <span className="eyebrow">SERVİCES</span>
        <h1>Nə edirik</h1>
        <p>Konseptdən istifadəyə və sonrasına qədər uçdan-uca rəqəmsal xidmətlər.</p>

        <div className="services-reference-tabs" aria-label="Service groups">
          {serviceGroups.map((group, groupIndex) => (
            <a key={group.slug} href={`#${group.slug}`}>
              <ServiceGroupIcon className="services-reference-tab-icon" index={groupIndex} />
              {group.title}
            </a>
          ))}
        </div>
      </section>

      <section className="services-reference-groups shell" aria-label="Services list">
        {serviceGroups.map((group, groupIndex) => (
          <div className="services-reference-group" id={group.slug} key={group.slug}>
            <div className="services-reference-group__intro">
              <span className="eyebrow">
                <ServiceGroupIcon className="services-reference-group-icon" index={groupIndex} />
              </span>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>

            <div className="services-reference-card-grid">
              {group.items.map((item, itemIndex) => (
                <Link
                  className="services-reference-card"
                  href={localizeHref(`/services/${group.slug}/${item.slug}`, locale)}
                  key={item.slug}
                >
                  <span className="services-reference-card__icon" aria-hidden="true">
                    {itemIndex + 1}
                  </span>
                  <span className="services-reference-card__body">
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span className="services-reference-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <CtaStrip
        locale={locale}
        eyebrow="Contact"
        title="Əla bir şey qurmağa hazırsınız?"
        description="Layihənizi müzakirə edək və rəqəmsal məqsədlərinizə necə çata biləcəyinizi araşdıraq."
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
