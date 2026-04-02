import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-sections";
import { localizeHref, type LocaleCode } from "../lib/locale";
import { getCurrentLocale } from "../lib/request-locale";
import { getSiteContent } from "../lib/wordpress";

type AboutPageCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  featureEyebrow: string;
  featureTitle: string;
  featureAccent: string;
  featureParagraphs: string[];
  statLabel: string;
  metrics: Array<{ value: string; label: string }>;
  beliefsEyebrow: string;
  beliefsTitle: string;
  beliefs: Array<{ title: string; description: string }>;
  officesEyebrow: string;
  officesTitle: string;
  officesDescription: string;
  officesButton: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
};

function getAboutPageCopy(locale: LocaleCode): AboutPageCopy {
  const copy: Record<LocaleCode, AboutPageCopy> = {
    az: {
      eyebrow: "HAQQIMIZDA",
      title: "Rəqəmsal sənətkarlıq, biznes təsiri",
      subtitle:
        "2017-ci ildən müasir veb həllər, proqram təminatı və rəqəmsal strategiyalar hazırlayırıq — Azərbaycandan dünyaya.",
      featureEyebrow: "HEKAYƏMİZ",
      featureTitle: "Kiçik bir komandadan",
      featureAccent: "beynəlxalq agentliyə",
      featureParagraphs: [
        "Webline Bakıda kiçik bir veb dizayn studiyası kimi fəaliyyətə başlayıb. Bu gün Azərbaycan, Almaniya, Avstriya və Macarıstanda ofislərimiz olan tam xidmətli rəqəmsal agentliyik.",
        "Müxtəlif sənaye sahələrindən olan müştərilərimizə — startap-lardan böyük korporasiyalara qədər — rəqəmsal transformasiya yolunda etibarlı texnoloji tərəfdaş kimi xidmət göstəririk.",
      ],
      statLabel: "İlk rəqəmsal mükəmməllik töhfəmiz",
      metrics: [
        { value: "8+", label: "İl təcrübə" },
        { value: "200+", label: "Tamamlanmış layihə" },
        { value: "4", label: "Ölkə ofisi" },
        { value: "50+", label: "Aktiv müştəri" },
      ],
      beliefsEyebrow: "YANAŞMAMIZ",
      beliefsTitle: "Nəyə inanırıq",
      beliefs: [
        {
          title: "Performans odaqlı",
          description:
            "Hər layihədə sürət, keyfiyyət və ölçülənə bilən nəticələr əsas prioritetimizdir. Texnologiyanı biznes məqsədlərinə xidmət etdiririk.",
        },
        {
          title: "Dizayn mükəmməlliyi",
          description:
            "İstifadəçi araşdırmasına əsaslanan UX dizayn metodologiyamız brendinizi fərqləndirən rəqəmsal təcrübələr yaradır.",
        },
        {
          title: "Uzunmüddətli tərəfdaşlıq",
          description:
            "Bir dəfəlik layihə deyil, davamlı əməkdaşlıq qururuq. Müştərilərimizin böyüməsi bizim uğurumuzdur.",
        },
        {
          title: "Ölçülə bilən nəticə",
          description:
            "Hər qərar data ilə dəstəklənir. Strategiyalarımız konkret KPI-lara və biznes göstəricilərinə bağlıdır.",
        },
      ],
      officesEyebrow: "QLOBAL MÖVCUDLUQ",
      officesTitle: "4 ölkə, bir missiya",
      officesDescription:
        "Bakıda, Berlində, Vyanada və Budapeştdə işləyən komandamız fərqli bazarların ritmini anlayır və məhsulları lokal ehtiyaclara uyğunlaşdırır.",
      officesButton: "Ofislərimizə keçid edin",
      ctaTitle: "Əla bir şey qurmağa hazırsınız?",
      ctaDescription:
        "Layihənizi müzakirə edək və rəqəmsal məqsədlərinizə necə çata biləcəyinizi birlikdə aydınlaşdıraq.",
      ctaButton: "Konsultasiya rezerv edin",
    },
    en: {
      eyebrow: "ABOUT",
      title: "Digital craft, business impact",
      subtitle:
        "Since 2017, we have been building modern web solutions, software products, and digital strategies from Azerbaijan to the wider market.",
      featureEyebrow: "OUR STORY",
      featureTitle: "From a compact team to an",
      featureAccent: "international agency",
      featureParagraphs: [
        "Webline started in Baku as a small web design studio. Today we are a full-service digital agency with offices in Azerbaijan, Germany, Austria, and Hungary.",
        "We support clients across industries — from startups to large corporations — as a dependable technology partner on their digital transformation journey.",
      ],
      statLabel: "Our early contribution to digital excellence",
      metrics: [
        { value: "8+", label: "Years of practice" },
        { value: "200+", label: "Delivered projects" },
        { value: "4", label: "Office countries" },
        { value: "50+", label: "Active clients" },
      ],
      beliefsEyebrow: "OUR APPROACH",
      beliefsTitle: "What we believe in",
      beliefs: [
        {
          title: "Performance focus",
          description:
            "Every product should be fast, clear, and close to conversion from the first interaction.",
        },
        {
          title: "Design excellence",
          description:
            "Visual quality and usability need to work as one system. We treat both with equal precision.",
        },
        {
          title: "Long-term partnership",
          description:
            "We build collaboration models that keep products evolving well beyond launch.",
        },
        {
          title: "Measurable outcomes",
          description:
            "Design and technology are only complete when they create visible business value.",
        },
      ],
      officesEyebrow: "GLOBAL PRESENCE",
      officesTitle: "4 countries, one mission",
      officesDescription:
        "With teams across Baku, Berlin, Vienna, and Budapest, we shape digital systems around local context without losing clarity.",
      officesButton: "Visit our offices",
      ctaTitle: "Ready to build something great?",
      ctaDescription:
        "Let’s discuss your project and define the clearest path toward your next digital milestone.",
      ctaButton: "Reserve consultation",
    },
    ru: {
      eyebrow: "О НАС",
      title: "Цифровое мастерство, влияние на бизнес",
      subtitle:
        "С 2017 года мы создаём современные веб-решения, программные продукты и цифровые стратегии — из Азербайджана для более широкого рынка.",
      featureEyebrow: "НАША ИСТОРИЯ",
      featureTitle: "От небольшой команды к",
      featureAccent: "международному агентству",
      featureParagraphs: [
        "Webline начала путь в Баку как небольшая студия веб-дизайна. Сегодня это digital-агентство полного цикла с офисами в Азербайджане, Германии, Австрии и Венгрии.",
        "Мы помогаем клиентам из разных отраслей — от стартапов до крупных корпораций — как надёжный технологический партнёр в цифровой трансформации.",
      ],
      statLabel: "Наш ранний вклад в цифровое совершенство",
      metrics: [
        { value: "8+", label: "Лет опыта" },
        { value: "200+", label: "Реализованных проектов" },
        { value: "4", label: "Страны присутствия" },
        { value: "50+", label: "Активных клиентов" },
      ],
      beliefsEyebrow: "НАШ ПОДХОД",
      beliefsTitle: "Во что мы верим",
      beliefs: [
        {
          title: "Фокус на результате",
          description:
            "Каждый продукт должен быть быстрым, понятным и работать на бизнес-цели с первого контакта.",
        },
        {
          title: "Качество дизайна",
          description:
            "Визуальная точность и удобство использования должны работать как единая система.",
        },
        {
          title: "Долгосрочное партнёрство",
          description:
            "Мы строим сотрудничество так, чтобы продукт продолжал развиваться и после запуска.",
        },
        {
          title: "Измеримый эффект",
          description:
            "Дизайн и технологии имеют смысл только тогда, когда дают ощутимый бизнес-результат.",
        },
      ],
      officesEyebrow: "ГЛОБАЛЬНОЕ ПРИСУТСТВИЕ",
      officesTitle: "4 страны, одна миссия",
      officesDescription:
        "Команды в Баку, Берлине, Вене и Будапеште помогают нам адаптировать цифровые решения к разным рынкам.",
      officesButton: "Посмотреть офисы",
      ctaTitle: "Готовы создать что-то сильное?",
      ctaDescription:
        "Давайте обсудим проект и найдём лучший путь к вашему следующему цифровому шагу.",
      ctaButton: "Забронировать консультацию",
    },
    de: {
      eyebrow: "ÜBER UNS",
      title: "Digitale Präzision, geschäftliche Wirkung",
      subtitle:
        "Seit 2017 entwickeln wir moderne Weblösungen, Softwareprodukte und digitale Strategien — von Aserbaidschan aus für internationale Märkte.",
      featureEyebrow: "UNSERE GESCHICHTE",
      featureTitle: "Von einem kleinen Team zu einer",
      featureAccent: "internationalen Agentur",
      featureParagraphs: [
        "Webline begann in Baku als kleines Webdesign-Studio. Heute sind wir eine Full-Service-Digitalagentur mit Büros in Aserbaidschan, Deutschland, Österreich und Ungarn.",
        "Wir begleiten Kunden aus unterschiedlichsten Branchen — von Startups bis zu großen Unternehmen — als verlässlicher Technologiepartner in der digitalen Transformation.",
      ],
      statLabel: "Unser früher Beitrag zur digitalen Exzellenz",
      metrics: [
        { value: "8+", label: "Jahre Erfahrung" },
        { value: "200+", label: "Abgeschlossene Projekte" },
        { value: "4", label: "Länder mit Offices" },
        { value: "50+", label: "Aktive Kunden" },
      ],
      beliefsEyebrow: "UNSER ANSATZ",
      beliefsTitle: "Woran wir glauben",
      beliefs: [
        {
          title: "Performance-Fokus",
          description:
            "Digitale Produkte sollen schnell, klar und nah an geschäftlichen Zielen gebaut werden.",
        },
        {
          title: "Design-Exzellenz",
          description:
            "Visuelle Qualität und Bedienbarkeit müssen als ein zusammenhängendes System funktionieren.",
        },
        {
          title: "Langfristige Partnerschaft",
          description:
            "Wir bauen Zusammenarbeit so auf, dass Produkte auch nach dem Launch weiter wachsen.",
        },
        {
          title: "Messbare Wirkung",
          description:
            "Design und Technologie sind erst dann erfolgreich, wenn sie echte Geschäftsergebnisse erzeugen.",
        },
      ],
      officesEyebrow: "GLOBALE PRÄSENZ",
      officesTitle: "4 Länder, eine Mission",
      officesDescription:
        "Teams in Baku, Berlin, Wien und Budapest helfen uns, Produkte kontextbewusst und dennoch konsistent zu entwickeln.",
      officesButton: "Unsere Standorte ansehen",
      ctaTitle: "Bereit, etwas Starkes zu bauen?",
      ctaDescription:
        "Lassen Sie uns Ihr Projekt besprechen und den klarsten Weg nach vorne definieren.",
      ctaButton: "Beratung reservieren",
    },
    tr: {
      eyebrow: "HAKKIMIZDA",
      title: "Dijital ustalık, iş etkisi",
      subtitle:
        "2017’den beri modern web çözümleri, yazılım ürünleri ve dijital stratejiler geliştiriyoruz — Azerbaycan’dan daha geniş pazarlara.",
      featureEyebrow: "HİKAYEMİZ",
      featureTitle: "Küçük bir ekipten",
      featureAccent: "uluslararası ajansa",
      featureParagraphs: [
        "Webline, Bakü’de küçük bir web tasarım stüdyosu olarak başladı. Bugün Azerbaycan, Almanya, Avusturya ve Macaristan’da ofisleri olan tam hizmet dijital ajansız.",
        "Startuplardan büyük şirketlere kadar farklı sektörlerdeki müşterilere dijital dönüşüm yolculuklarında güvenilir teknoloji ortağı olarak destek veriyoruz.",
      ],
      statLabel: "Dijital mükemmelliğe erken katkımız",
      metrics: [
        { value: "8+", label: "Yıllık deneyim" },
        { value: "200+", label: "Tamamlanan proje" },
        { value: "4", label: "Ofis ülkesi" },
        { value: "50+", label: "Aktif müşteri" },
      ],
      beliefsEyebrow: "YAKLAŞIMIMIZ",
      beliefsTitle: "Neye inanıyoruz",
      beliefs: [
        {
          title: "Performans odağı",
          description:
            "Her dijital ürün hızlı, net ve iş hedeflerine yakın çalışmalıdır.",
        },
        {
          title: "Tasarım mükemmelliği",
          description:
            "Görsel kalite ve kullanılabilirlik tek bir sistem gibi işlemelidir.",
        },
        {
          title: "Uzun vadeli ortaklık",
          description:
            "Projeler teslimden sonra da gelişmeye devam etsin diye doğru iş modeli kurarız.",
        },
        {
          title: "Ölçülebilir sonuç",
          description:
            "Tasarım ve teknoloji ancak gerçek iş etkisi oluşturduğunda tamamlanmış sayılır.",
        },
      ],
      officesEyebrow: "KÜRESEL VARLIK",
      officesTitle: "4 ülke, tek misyon",
      officesDescription:
        "Bakü, Berlin, Viyana ve Budapeşte’deki ekiplerimiz farklı pazarlara uyumlu ama tutarlı dijital sistemler geliştirir.",
      officesButton: "Ofislerimizi inceleyin",
      ctaTitle: "Harika bir şey inşa etmeye hazır mısınız?",
      ctaDescription:
        "Projenizi konuşalım ve bir sonraki dijital adımınızı birlikte netleştirelim.",
      ctaButton: "Danışmanlık ayırtın",
    },
  };

  return copy[locale];
}

export default async function AboutPage() {
  const locale = await getCurrentLocale();
  const siteContent = await getSiteContent(locale);
  const copy = getAboutPageCopy(locale);
  const officePreview = siteContent.offices.slice(0, 4);

  return (
    <main className="page-shell webline-page">
      <SiteHeader />

      <section className="about-showcase shell">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p>{copy.subtitle}</p>
      </section>

      <section className="about-feature shell">
        <div className="about-feature__copy">
          <span className="eyebrow">{copy.featureEyebrow}</span>
          <h2>
            {copy.featureTitle}
            <br />
            <em>{copy.featureAccent}</em>
          </h2>
          <div className="about-feature__body">
            {copy.featureParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="about-feature__stat">
          <strong>8+</strong>
          <span>{copy.statLabel}</span>
        </div>
      </section>

      <section className="about-metrics">
        <div className="shell about-metrics__grid">
          {copy.metrics.map((item) => (
            <div className="about-metric" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-beliefs">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">{copy.beliefsEyebrow}</span>
            <h2>{copy.beliefsTitle}</h2>
          </div>

          <div className="about-beliefs__grid">
            {copy.beliefs.map((belief, index) => (
              <article className="about-belief-card" key={belief.title}>
                <span className="about-belief-card__index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{belief.title}</h3>
                <p>{belief.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-global">
        <div className="shell about-global__grid">
          <div className="about-global__copy">
            <span className="eyebrow">{copy.officesEyebrow}</span>
            <h2>{copy.officesTitle}</h2>
            <p>{copy.officesDescription}</p>
            <Link className="button button-accent button-small" href={localizeHref("/contact", locale)}>
              {copy.officesButton} →
            </Link>
          </div>

          <div className="about-global__offices">
            {officePreview.map((office) => (
              <div className="about-office-card" key={`${office.city}-${office.country}`}>
                <strong>{office.city}</strong>
                <span>{office.country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="webline-cta shell">
        <h2>{copy.ctaTitle}</h2>
        <p>{copy.ctaDescription}</p>
        <Link className="button button-accent" href={localizeHref("/contact", locale)}>
          {copy.ctaButton} →
        </Link>
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
