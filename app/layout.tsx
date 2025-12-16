import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Savatto — Design & Software",
    template: "%s | Savatto",
  },
  icons: {
    icon: "/icon.png",
  },
  description:
    "Savatto - Design & Software. Desenvolvendo sua marca junto com você!",
  openGraph: {
    title: "Savatto",
    description:
      "Savatto - Design & Software. Desenvolvendo sua marca junto com você!",
    url: "https://savatto.vercel.app",
    siteName: "Savatto",
    images: [
      {
        url: "",
        width: 0,
        height: 0,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savatto",
    description:
      "Savatto - Design & Software. Desenvolvendo sua marca junto com você!",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Savatto",
    url: "https://savatto.vercel.app",
    logo: "https://savatto.vercel.app/logo.svg",
    sameAs: ["https://www.instagram.com/savatto.co"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+5516993066312",
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
    ],
  };

  return (
    <html lang="pt-br" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://savatto.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="design, branding, logo, identidade visual, marca,
          software, desenvolvimento web, Notion, sistema para empresa, automações,
          Savatto, sava, desenvolvimento"
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
        <meta
          name="google-site-verification"
          content="rQpVRVweNzG_pUJ906JyQ1Y5ycNC1RA63rNmzAthlKo"
        />
      </head>
      <body className={`overflow-x-hidden antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
