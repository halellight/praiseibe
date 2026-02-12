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

export const metadata: Metadata = {
  title: "Praise Ibe | Technology & Data Professional",
  description: "Personal archive of Praise Ibe, focusing on design, data, and civic participation.",
  authors: [{ name: "Praise Ibe" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://praiseibe.me",
    title: "Praise Ibe | Technology & Data Professional",
    description: "Building digital systems that strengthen civic participation.",
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
  },
  icons: {
    icon: "/favicon.ico",
  },

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
