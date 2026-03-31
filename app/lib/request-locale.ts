import { cookies } from "next/headers";
import { defaultLocale, isLocale, type LocaleCode, localeCookieName } from "./locale";

export async function getCurrentLocale(): Promise<LocaleCode> {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;

  return isLocale(cookieLocale) ? cookieLocale : defaultLocale;
}
