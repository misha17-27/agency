import { PageIntro, SiteFooter, SiteHeader } from "../components/site-sections";
import { getSiteContent } from "../lib/wordpress";

const serviceGroups = [
  {
    title: "Saytların hazırlanması",
    description:
      "Biz internetdə biznesinizi düzgün təmsil edən və sizə qazanc gətirən vebsaytlar yaradırıq.",
    items: [
      "Online mağaza",
      "Korporativ saytlar",
      "Xidmət saytları",
      "Elan saytları",
      "Turizm saytları və s.",
    ],
  },
  {
    title: "Proqramların hazırlanması",
    description:
      "Biznesinizin və müştərilərinizin rahatlığı üçün proqramlar və həllər təklif edirik.",
    items: [
      "Mobile app (iOS & Android)",
      "B2B proqramlar",
      "B2C proqramlar",
      "Desktop proqramlar",
      "Satış və anbar proqramları",
    ],
  },
  {
    title: "Rəqəmsal marketinq",
    description:
      "Sosial şəbəkələrdə və axtarış sistemlərində ön sıralarda olmaq çox vacibdir.",
    items: [
      "SEO & Google Ads",
      "Facebook & Instagram (SMM)",
      "Tiktok",
      "Kopiraytinq & kontent",
      "Foto & video çəkiliş",
    ],
  },
  {
    title: "Dizayn xidmətləri",
    description:
      "Yaratdığımız dizaynların estetik və funksional baxımdan güclü görünməsi üçün işləyirik.",
    items: [
      "Logo dizaynı",
      "Brandbook dizaynı",
      "Kataloq dizaynı",
      "Qrafik videolar",
      "3D dizayn",
    ],
  },
  {
    title: "Texniki dəstək",
    description:
      "Hazırladığımız saytların inkişafı və davamlı işləməsi üçün texniki dəstək göstəririk.",
    items: [
      "Saytlara texniki dəstək",
      "Saytların idarə olunması",
      "Server xidmətləri",
      "Hostinq xidmətləri",
    ],
  },
  {
    title: "İşinizə faydalı",
    description:
      "Biznesinizi düzgün təhlil edir, satışlarınızı və xidmət keyfiyyətini gücləndirməyə kömək edirik.",
    items: [
      "Data analizi",
      "Konsultasiya",
      "Korporativ email",
      "Google Business qeydiyyatı",
      "Avtobusda reklam",
    ],
  },
];

export default async function ServicesPage() {
  const siteContent = await getSiteContent();

  return (
    <main className="page-shell">
      <SiteHeader />
      <PageIntro
        eyebrow="Xidmətlər"
        title="Təklif etdiyimiz xidmətlər"
        description="Biz hər gün insanların işlərini asanlaşdıracaq layihələr üzərində çalışırıq və biznesiniz üçün praktiki, işlək həllər təqdim edirik."
      />

      <section className="section services-showcase">
        <div className="shell services-showcase__grid">
          {serviceGroups.map((group, index) => (
            <article className="services-showcase__card" key={group.title}>
              <div className="services-showcase__top">
                <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>

              <ul className="services-showcase__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
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
