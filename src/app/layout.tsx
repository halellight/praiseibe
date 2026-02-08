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
  description: "Personal archive of Praise Ibe, focusing on AI, data, and civic participation.",
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
        url: "/favicon.svg",
        width: 512,
        height: 512,
        alt: "P. Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Praise Ibe",
    description: "Technology and Data professional exploring AI, Data Analytics, and Civic Tech.",
    images: ["/favicon.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
