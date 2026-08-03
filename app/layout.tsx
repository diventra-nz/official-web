import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ClientProviders from "@/components/providers/ClientProviders";
import TransitionProvider from "@/components/providers/TransitionProvider";
import { siteConfig } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Diventra — AI & Digital Agency",
  description:
    "Digital products that move your business forward. Web development, mobile apps, AI solutions, and digital transformation for New Zealand organisations.",
  openGraph: {
    title: "Diventra — AI & Digital Agency",
    description:
      "Digital products that move your business forward. Web development, mobile apps, AI solutions, and digital transformation for New Zealand organisations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col bg-[var(--color-canvas)] text-[var(--color-ink)]">
        <div className="grain-overlay" aria-hidden="true" />
        <ClientProviders>
          <TransitionProvider>
            <Header />
            <main className="relative z-[1] flex-1">{children}</main>
            <Footer />
          </TransitionProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
