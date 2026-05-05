import type { LocaleCode } from "./locale";
import {
  fallbackSiteContent,
  type PortfolioCategoryContent,
} from "./site-data";
import {
  referencePortfolioCategories,
  referencePortfolioProjects,
} from "./portfolio-reference-data";

export type PortfolioCategorySlug = string;

export type PortfolioCategoryIcon =
  | "website"
  | "design"
  | "social"
  | "video";

export type PortfolioCategoryCard = {
  slug: PortfolioCategorySlug;
  title: string;
  description: string;
  shortLabel: string;
  icon: PortfolioCategoryIcon;
};

export type PortfolioProject = {
  slug: string;
  category: PortfolioCategorySlug;
  badge: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  gallery?: Array<{
    src: string;
    alt: string;
  }>;
};

type PortfolioDictionary = {
  eyebrow: string;
  title: string;
  description: string;
  categoriesLabel: string;
  categoryLinkLabel: string;
  breadcrumbRoot: string;
  emptyTitle: string;
  emptyDescription: string;
  projectCountLabel: string;
  categories: Record<
    string,
    {
      title: string;
      description: string;
      shortLabel: string;
    }
  >;
};

const portfolioCategoryAliases: Record<string, PortfolioCategorySlug> = {
  website: "website",
  saytlar: "website",
  web: "website",
  site: "website",
  sayt: "website",
  dizayn: "dizayn",
  dizaynlar: "dizayn",
  design: "dizayn",
  designs: "dizayn",
  "social-media": "social-media",
  "sosial-media": "social-media",
  "social-media-marketing": "social-media",
  social: "social-media",
  smm: "social-media",
  reels: "video-reels",
  "video-reels": "video-reels",
  video: "video-reels",
  videos: "video-reels",
};

const portfolioCategoryIcons: Record<PortfolioCategorySlug, PortfolioCategoryIcon> = {
  website: "website",
  dizayn: "design",
  "social-media": "social",
  "video-reels": "video",
};

const portfolioContent: Record<LocaleCode, PortfolioDictionary> = {
  az: {
    eyebrow: "PORTFOLIO",
    title: "İşlərimiz özü danışır",
    description:
      "Veb, mobil, video və brendinq sahələrindəki layihələrimizi kəşf edin — dəqiqlik və məqsədlə hazırlanmışdır.",
    categoriesLabel: "Kateqoriyalar",
    categoryLinkLabel: "Layihələri aç",
    breadcrumbRoot: "Portfolio",
    emptyTitle: "Bu kateqoriya üçün işlər hazırlanır",
    emptyDescription:
      "Bu bölməyə yeni layihələr əlavə olunduqca burada görünəcək.",
    projectCountLabel: "PROJECTS",
    categories: {
      website: {
        title: "Saytlar",
        description: "website haqqında",
        shortLabel: "Website həllərimiz",
      },
      dizayn: {
        title: "Dizayn",
        description: "Dizayn işlərimiz",
        shortLabel: "Brend və vizual dizayn",
      },
      "social-media": {
        title: "Sosial media",
        description: "SMM kampaniyaları",
        shortLabel: "Kontent və kampaniyalar",
      },
      "video-reels": {
        title: "Video reels",
        description: "Qısa video işlərimiz",
        shortLabel: "Motion və reels",
      },
    },
  },
  en: {
    eyebrow: "PORTFOLIO",
    title: "Our work speaks for itself",
    description:
      "Explore our work across web, branding, social media and short-form video.",
    categoriesLabel: "Categories",
    categoryLinkLabel: "Open projects",
    breadcrumbRoot: "Portfolio",
    emptyTitle: "Projects for this category are on the way",
    emptyDescription:
      "New work will appear here as soon as it is added to the portfolio.",
    projectCountLabel: "PROJECTS",
    categories: {
      website: {
        title: "Websites",
        description: "About websites",
        shortLabel: "Website solutions",
      },
      dizayn: {
        title: "Design",
        description: "Our design work",
        shortLabel: "Brand and visual design",
      },
      "social-media": {
        title: "Social media",
        description: "SMM campaigns",
        shortLabel: "Content and campaigns",
      },
      "video-reels": {
        title: "Video reels",
        description: "Short-form videos",
        shortLabel: "Motion and reels",
      },
    },
  },
  ru: {
    eyebrow: "ПОРТФОЛИО",
    title: "Наши работы говорят сами за себя",
    description:
      "Изучайте проекты в направлениях веба, брендинга, social media и коротких видео.",
    categoriesLabel: "Категории",
    categoryLinkLabel: "Открыть проекты",
    breadcrumbRoot: "Portfolio",
    emptyTitle: "Проекты для этой категории готовятся",
    emptyDescription:
      "Новые работы появятся здесь сразу после добавления в портфолио.",
    projectCountLabel: "PROJECTS",
    categories: {
      website: {
        title: "Сайты",
        description: "О веб-сайтах",
        shortLabel: "Веб-решения",
      },
      dizayn: {
        title: "Дизайн",
        description: "Наши дизайн-работы",
        shortLabel: "Бренд и визуальный стиль",
      },
      "social-media": {
        title: "Соцсети",
        description: "SMM-кампании",
        shortLabel: "Контент и кампании",
      },
      "video-reels": {
        title: "Видео reels",
        description: "Короткие видео",
        shortLabel: "Motion и reels",
      },
    },
  },
  de: {
    eyebrow: "PORTFOLIO",
    title: "Unsere Arbeiten sprechen für sich",
    description:
      "Entdecken Sie unsere Projekte in den Bereichen Web, Branding, Social Media und Kurzvideo.",
    categoriesLabel: "Kategorien",
    categoryLinkLabel: "Projekte öffnen",
    breadcrumbRoot: "Portfolio",
    emptyTitle: "Projekte für diese Kategorie folgen",
    emptyDescription:
      "Sobald neue Arbeiten hinzugefügt werden, erscheinen sie hier.",
    projectCountLabel: "PROJECTS",
    categories: {
      website: {
        title: "Websites",
        description: "Über Websites",
        shortLabel: "Web-Lösungen",
      },
      dizayn: {
        title: "Design",
        description: "Unsere Designarbeiten",
        shortLabel: "Marke und visuelles Design",
      },
      "social-media": {
        title: "Social Media",
        description: "SMM-Kampagnen",
        shortLabel: "Content und Kampagnen",
      },
      "video-reels": {
        title: "Video Reels",
        description: "Kurzvideo-Arbeiten",
        shortLabel: "Motion und Reels",
      },
    },
  },
  tr: {
    eyebrow: "PORTFÖY",
    title: "İşlerimiz kendini anlatır",
    description:
      "Web, marka tasarımı, sosyal medya ve kısa video projelerimizi keşfedin.",
    categoriesLabel: "Kategoriler",
    categoryLinkLabel: "Projeleri aç",
    breadcrumbRoot: "Portfolio",
    emptyTitle: "Bu kategori için projeler hazırlanıyor",
    emptyDescription:
      "Yeni işler eklendikçe burada görünmeye başlayacak.",
    projectCountLabel: "PROJECTS",
    categories: {
      website: {
        title: "Web siteleri",
        description: "Web siteleri hakkında",
        shortLabel: "Web çözümleri",
      },
      dizayn: {
        title: "Tasarım",
        description: "Tasarım işlerimiz",
        shortLabel: "Marka ve görsel tasarım",
      },
      "social-media": {
        title: "Sosyal medya",
        description: "SMM kampanyaları",
        shortLabel: "İçerik ve kampanyalar",
      },
      "video-reels": {
        title: "Video reels",
        description: "Kısa video işlerimiz",
        shortLabel: "Motion ve reels",
      },
    },
  },
};

const extraFallbackProjects: PortfolioProject[] = [
  {
    slug: "urban-campaign",
    category: "social-media",
    badge: "CAMPAIGN",
    title: "Urban campaign",
    description:
      "Aylıq kampaniya planı, post seriyaları və performans yönümlü məzmun sistemi.",
    image: "https://webline.az/wp-content/uploads/2024/02/Part-02.jpg",
    alt: "Urban campaign cover",
    gallery: [
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-02.jpg",
        alt: "Urban campaign — Image 1",
      },
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-03.jpg",
        alt: "Urban campaign — Image 2",
      },
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-04.jpg",
        alt: "Urban campaign — Image 3",
      },
    ],
  },
  {
    slug: "food-launch",
    category: "social-media",
    badge: "SMM",
    title: "Food launch",
    description:
      "Yeni məhsul buraxılışı üçün reels, post və story formatlarında hazırlanan SMM paketi.",
    image: "https://webline.az/wp-content/uploads/2024/02/Part-03.jpg",
    alt: "Food launch cover",
    gallery: [
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-03.jpg",
        alt: "Food launch — Image 1",
      },
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-04.jpg",
        alt: "Food launch — Image 2",
      },
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-05.jpg",
        alt: "Food launch — Image 3",
      },
    ],
  },
  {
    slug: "motion-reel",
    category: "video-reels",
    badge: "REEL",
    title: "Motion reel",
    description:
      "Brend ritmini və məhsul mesajını qısa formatda çatdıran dinamik video reels layihəsi.",
    image: "https://webline.az/wp-content/uploads/2024/02/Part-01.jpg",
    alt: "Motion reel cover",
    gallery: [
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-01.jpg",
        alt: "Motion reel — Image 1",
      },
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-06.jpg",
        alt: "Motion reel — Image 2",
      },
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-02.jpg",
        alt: "Motion reel — Image 3",
      },
    ],
  },
  {
    slug: "studio-short",
    category: "video-reels",
    badge: "SHORT VIDEO",
    title: "Studio short",
    description:
      "Kulis, məkan və komanda atmosferini göstərən qısa tanıtım video paketi.",
    image: "https://webline.az/wp-content/uploads/2024/02/Part-06.jpg",
    alt: "Studio short cover",
    gallery: [
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-06.jpg",
        alt: "Studio short — Image 1",
      },
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-01.jpg",
        alt: "Studio short — Image 2",
      },
      {
        src: "https://webline.az/wp-content/uploads/2024/02/Part-03.jpg",
        alt: "Studio short — Image 3",
      },
    ],
  },
];

export const fallbackPortfolioProjects: PortfolioProject[] = [
  ...referencePortfolioProjects.map((project) => ({
    ...project,
    gallery: project.gallery ? project.gallery.map((image) => ({ ...image })) : [],
  })),
  ...extraFallbackProjects,
];

export function mergePortfolioProjects(
  cmsProjects: PortfolioProject[],
  fallbackProjects: PortfolioProject[] = fallbackPortfolioProjects
) {
  const seen = new Set<string>();

  return [...cmsProjects, ...fallbackProjects].filter((project) => {
    const key = `${normalizePortfolioCategorySlug(project.category)}::${project.slug}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

export function mergePortfolioCategories(
  primary: PortfolioCategoryContent[],
  fallback: PortfolioCategoryContent[] = fallbackSiteContent.portfolioCategories
) {
  const reference = referencePortfolioCategories.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    shortLabel: "",
  }));

  return [...primary, ...reference, ...fallback];
}

export function normalizePortfolioCategorySlug(slug: string) {
  const key = slug.trim().toLowerCase();
  return portfolioCategoryAliases[key] ?? key;
}

export function getPortfolioRouteSlug(slug: string) {
  return normalizePortfolioCategorySlug(slug);
}

function getDictionary(locale: LocaleCode) {
  return portfolioContent[locale] ?? portfolioContent.az;
}

function getCategoryFallback(
  locale: LocaleCode,
  slug: string
): PortfolioDictionary["categories"][string] {
  const dictionary = getDictionary(locale);

  return (
    dictionary.categories[slug] ??
    dictionary.categories[normalizePortfolioCategorySlug(slug)] ?? {
      title: slug,
      description: "",
      shortLabel: slug,
    }
  );
}

function dedupeCategoryContent(
  locale: LocaleCode,
  categories?: PortfolioCategoryContent[]
) {
  const source = categories?.length
    ? categories
    : [
        ...referencePortfolioCategories,
        ...fallbackSiteContent.portfolioCategories.map((item) => ({
          ...item,
          slug: normalizePortfolioCategorySlug(item.slug),
        })),
      ];

  const seen = new Set<string>();

  return source.reduce<PortfolioCategoryContent[]>((result, item) => {
    const slug = normalizePortfolioCategorySlug(item.slug);

    if (seen.has(slug)) {
      return result;
    }

    seen.add(slug);
    const fallback = getCategoryFallback(locale, slug);

    result.push({
      slug,
      title: item.title || fallback.title,
      description: item.description || fallback.description,
      shortLabel:
        ("shortLabel" in item ? item.shortLabel : undefined) || fallback.shortLabel,
    });

    return result;
  }, []);
}

export function getPortfolioCategories(
  locale: LocaleCode,
  categories?: PortfolioCategoryContent[],
  projectsInput?: PortfolioProject[]
): PortfolioCategoryCard[] {
  const dictionary = getDictionary(locale);
  const categoryContent = dedupeCategoryContent(locale, categories);
  const projects = projectsInput?.length ? projectsInput : fallbackPortfolioProjects;

  const projectCountByCategory = projects.reduce<Record<string, number>>(
    (accumulator, project) => {
      const slug = normalizePortfolioCategorySlug(project.category);
      accumulator[slug] = (accumulator[slug] ?? 0) + 1;
      return accumulator;
    },
    {}
  );

  return categoryContent.map((category) => {
    const slug = normalizePortfolioCategorySlug(category.slug);
    const fallback = getCategoryFallback(locale, slug);
    const count = projectCountByCategory[slug] ?? 0;

    return {
      slug: getPortfolioRouteSlug(slug),
      title: category.title || fallback.title,
      description: category.description || fallback.description,
      shortLabel: `${count} ${dictionary.projectCountLabel}`,
      icon: portfolioCategoryIcons[slug] ?? "website",
    };
  });
}

export function getPortfolioProjects(_locale: LocaleCode) {
  return fallbackPortfolioProjects;
}

export function getPortfolioCategory(
  locale: LocaleCode,
  slug: PortfolioCategorySlug,
  categories?: PortfolioCategoryContent[]
) {
  const normalizedSlug = normalizePortfolioCategorySlug(slug);
  const category =
    dedupeCategoryContent(locale, categories).find(
      (item) => normalizePortfolioCategorySlug(item.slug) === normalizedSlug
    ) ?? {
      slug: normalizedSlug,
      ...getCategoryFallback(locale, normalizedSlug),
    };

  return {
    slug: getPortfolioRouteSlug(normalizedSlug),
    eyebrow: getDictionary(locale).eyebrow,
    title: category.title,
    description: category.description,
    shortLabel: category.shortLabel || category.title,
  };
}

export function getPortfolioPageCopy(locale: LocaleCode) {
  const dictionary = getDictionary(locale);

  return {
    eyebrow: dictionary.eyebrow,
    title: dictionary.title,
    description: dictionary.description,
    categoriesLabel: dictionary.categoriesLabel,
    categoryLinkLabel: dictionary.categoryLinkLabel,
    breadcrumbRoot: dictionary.breadcrumbRoot,
    emptyTitle: dictionary.emptyTitle,
    emptyDescription: dictionary.emptyDescription,
  };
}
