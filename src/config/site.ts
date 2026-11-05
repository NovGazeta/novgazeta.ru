import { config } from "dotenv";

const DEBUG = process.env.NODE_ENV !== "production";
if (DEBUG) config({ quiet: true });

const { PUBLIC_APP_NAME = "NG Archive", PUBLIC_APP_URL = "https://novgazeta.ru" } = process.env;

export const siteConfig = {
  /** Wordmark shown in the header and footer. Monograph uses text, never a logo image. */
  siteUrl: PUBLIC_APP_URL,
  name: PUBLIC_APP_NAME,
  tagline: "Архив Новой Газеты с 2000 по 2026 годы",
  title: "Архив Новой Газеты с 2000 по 2026 годы",
  description: "Описание",
  authorName: "NovGazeta",
  email: "mail@novgazeta.ru",
  language: "ru",
  dateLocale: "ru-RU",
  locale: "ru_RU",
  socialImage: "/logo.png",
  /** Shown in the home sidebar "About" card. */
  about: "О сайте кратко",
  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: false,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Get new posts by email",
    description: "One email when something new goes up. No spam, unsubscribe anytime.",
  },
  contact: {
    enabled: false,
    action: "",
    method: "post",
    responseTime: "Replies usually go out within two business days.",
  },
  socials: [
    //{ label: "Instagram", href: "https://instagram.com" },
    //{ label: "TikTok", href: "https://www.tiktok.com" },
    //{ label: "YouTube", href: "https://www.youtube.com" },
    //{ label: "RSS", href: "/rss.xml" },
  ],
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Статьи", href: "/posts/" },
  { label: "Разделы", href: "/rubric/" },
  { label: "О сайте", href: "/about/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  //{ label: "Контакты", href: "/contact/" },
  //{ label: "Условия", href: "/privacy/" },
  //{ label: "RSS", href: "/rss.xml" },
];
