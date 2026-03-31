export const localeCookieName = "NEXT_LOCALE";
export const defaultLocale = "az";
export const locales = ["az", "en", "ru", "de", "tr"] as const;

export type LocaleCode = (typeof locales)[number];

export function isLocale(value: string | null | undefined): value is LocaleCode {
  return Boolean(value && locales.includes(value as LocaleCode));
}

