import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/site-sections";
import {
  aboutImageOne,
  aboutImageTwo,
  fallbackInsights,
  heroImage,
} from "./lib/site-data";

const partnerLogos = ["SOCAR", "Azercell", "PASHA Bank", "Kapital Bank"];

const capabilityItems = [
  "Araşdırmaya əsaslanan UX dizayn metodologiyası",
  "Miqyaslana bilən, dayanıqlı arxitektura",
  "Performans odaklı mühəndislik yanaşması",
  "Davamlı tərəfdaşlıq və iterasiya",
];

const mosaicImages = [
  { src: heroImage, alt: "Mountain landscape", tall: true },
  { src: aboutImageTwo, alt: "Modern city architecture", tall: true },
  { src: fallbackInsights[2].image, alt: fallbackInsights[2].alt, tall: true },
  { src: fallbackInsights[0].image, alt: fallbackInsights[0].alt },
  { src: fallbackInsights[1].image, alt: fallbackInsights[1].alt },
  { src: aboutImageOne, alt: "Minimal workspace" },
  { src: fallbackInsights[2].image, alt: "Abstract architecture" },
  { src: heroImage, alt: "Blue gradient object" },
];

const featuredProjects = [
  {
    eyebrow: "E-ticarət platforması",
    title: "Müasir Onlayn Bazar",
    variant: "dark",
  },
  {
    eyebrow: "SaaS idarə paneli",
    title: "FinTech Analitika Paketi",
    variant: "light",
  },
  {
    eyebrow: "Sənaye",
    title: "Xəstə İdarəetmə Portalı",
    variant: "dark",
  },
] as const;

export default function Home() {
  return (
    <main className="page-shell webline-page">
      <SiteHeader />

      <section className="webline-hero shell">
        <div className="webline-hero__copy">
          <span className="eyebrow">Rəqəmsal agentlik</span>
          <h1>
            Rəqəmsal
            <br />
            təcrübələr
            <br />
            yaradırıq
            <br />
            <em>nəticə verir</em>
          </h1>
          <p>
            Xüsusi veb-saytlar, proqram həlləri və rəqəmsal strategiyalar.
            İddialı bizneslərin böyüməsinə və fərqlənməsinə kömək etmək üçün
            dəqiqliklə hazırlanmışdır.
          </p>
          <div className="hero-actions">
            <Link className="button button-accent" href="/contact">
              Layihəyə Başla →
            </Link>
            <Link className="button button-outline" href="/portfolio">
              İşlərimiz
            </Link>
          </div>
        </div>

        <div className="webline-mosaic">
          {mosaicImages.map((image, index) => (
            <div
              className={image.tall ? "mosaic-card mosaic-card--tall" : "mosaic-card"}
              key={`${image.alt}-${index}`}
            >
              <Image
                alt={image.alt}
                height={image.tall ? 320 : 220}
                priority={index < 3}
                src={image.src}
                width={220}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="webline-partners">
        <div className="shell webline-partners__row">
          <span>Sənaye liderlərinin etibar etdiyi</span>
          {partnerLogos.map((partner) => (
            <strong key={partner}>{partner}</strong>
          ))}
        </div>
      </section>

      <section className="section webline-capabilities">
        <div className="shell section-heading split">
          <div>
            <span className="eyebrow">Xidmətlər</span>
            <h2>Hər bucağı əhatə edən imkanlar</h2>
          </div>
          <p>
            Konseptdən istifadəyə və sonrasına qədər ucdan-uca rəqəmsal
            xidmətlər. Hər həll biznesiniz üçün hazırlanır.
          </p>
        </div>
      </section>

      <section className="section webline-projects">
        <div className="shell">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">Seçilmiş işlər</span>
              <h2>Özləri danışan layihələr</h2>
            </div>
            <Link className="button button-outline" href="/portfolio">
              Bütün layihələr →
            </Link>
          </div>

          <div className="webline-project-grid">
            {featuredProjects.map((project, index) => (
              <article
                className={
                  index === 0
                    ? `project-card project-card--large project-card--${project.variant}`
                    : `project-card project-card--${project.variant}`
                }
                key={project.title}
              >
                <div className="project-browser">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="project-visual" />
                <div className="project-meta">
                  <span>{project.eyebrow}</span>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section webline-about">
        <div className="shell webline-about__grid">
          <div className="webline-about__copy">
            <span className="eyebrow">Agentlik haqqında</span>
            <h2>
              Rəqəmsal
              <br />
              sənətkarlıq,
              <br />
              biznes təsiri
            </h2>
            <p>
              Webline Bakıda yerləşən tam xidmətli rəqəmsal agentlikdir. Biz
              müasir, funksional rəqəmsal məhsullar yaratmaq, performans
              strategiyalarını dizayn etmək və bizneslərə onlayn dünyada rəqabət
              aparmağa kömək etmək üçün işləyirik.
            </p>

            <ul className="webline-list">
              {capabilityItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="webline-stat-card">
            <strong>8+</strong>
            <span>İlk rəqəmsal mükəmməllik töhfəsi</span>
          </div>
        </div>
      </section>

      <section className="webline-cta shell">
        <h2>
          Əla bir şey qurmağa
          <br />
          <em>hazırsınız?</em>
        </h2>
        <p>
          Layihənizi müzakirə edək və rəqəmsal məqsədlərinizə necə çata
          biləcəyinizi araşdıraq.
        </p>
        <Link className="button button-accent" href="/contact">
          Konsultasiya rezerv edin →
        </Link>
      </section>

      <SiteFooter contactEmail="info@webline.az" />
    </main>
  );
}
