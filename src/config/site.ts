import { config } from "dotenv";

const DEBUG = process.env.NODE_ENV !== "production";
if (DEBUG) config({ quiet: true });

const { PUBLIC_APP_NAME, PUBLIC_APP_DOMAIN, PUBLIC_APP_URL } = process.env;

export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  siteUrl: PUBLIC_APP_URL,
  name: PUBLIC_APP_NAME,
  tagline: "A quiet place for long-form writing",
  title: "Архив Новой Газеты с 2000 по 2026 годы",
  description: "",
  authorName: "NovGazeta",
  email: "mail@novgazeta.ru",
  language: "ru",
  dateLocale: "ru-RU",
  locale: "ru_RU",
  socialImage: "/og-image.png",
  /** Shown in the home sidebar "About" card. */
  about: "О сайте",
  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: true,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Get new posts by email",
    description: "One email when something new goes up. No spam, unsubscribe anytime.",
  },
  contact: {
    enabled: true,
    action: "",
    method: "post",
    responseTime: "Replies usually go out within two business days.",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://www.tiktok.com" },
    { label: "YouTube", href: "https://www.youtube.com" },
    { label: "RSS", href: "/rss.xml" },
  ],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Archive", href: "/posts/" },
  { label: "Categories", href: "/categories/" },
  { label: "About", href: "/about/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "RSS", href: "/rss.xml" },
];
