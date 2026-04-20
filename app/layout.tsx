import type { Metadata } from "next";
import { DM_Sans, Instrument_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getCurrentLocale } from "./lib/request-locale";
import { getMessages } from "./lib/messages";

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-sans",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Webline | Digital Experiences",
  description:
    "Webline digital agency website powered by a headless WordPress CMS.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();
  const messages = getMessages(locale);

  const fontVariables = `${instrumentSans.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`;

  return (
    <html lang={locale} className={fontVariables}>
      <body
        className={fontVariables}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
