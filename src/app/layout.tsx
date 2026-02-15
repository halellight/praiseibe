import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

import Script from "next/script";

export const metadata: Metadata = {
  title: "Praise Ibe | Technology & Data",
  description: "Personal archive of Praise Ibe, a Business Analyst and Technology Professional specializing in Analytics, Civic Tech, and Design.",
  keywords: ["Praise Ibe", "Praise Chidumebi Ibe", "Business Analyst", "Data Analytics", "Civic Tech", "Nigeria", "Technology Professional", "Design"],
  category: "technology",
  authors: [{ name: "Praise Ibe" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://praiseibe.com",
    title: "Praise Ibe | Technology & Data",
    description: "Building digital systems that strengthen participation and drive data-grounded insights.",
    siteName: "Praise Ibe Portfolio",
    images: [
      {
        url: "/praise.jpg",
        width: 1200,
        height: 630,
        alt: "Praise Ibe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praise Ibe",
    description: "Technology and Data professional exploring Design, Analytics, and Civic Tech.",
    images: ["/praise.jpg"],
    creator: "@_halel",
  },
  icons: {
    icon: "/praise.jpg",
  },
  alternates: {
    canonical: "https://praiseibe.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Praise Ibe",
  "url": "https://praiseibe.com",
  "image": "https://praiseibe.com/praise.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/praise-ibe-3556a625b/",
    "https://x.com/_halel",
    "https://github.com/halellight"
  ],
  "jobTitle": "Business Analyst Trainee",
  "worksFor": {
    "@type": "Organization",
    "name": "FITC"
  },
  "description": "Business Analyst and Technology Professional focusing on Data Analytics, Civic Tech, and Design."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${newsreader.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
