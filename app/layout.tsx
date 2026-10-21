import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { Pixelify_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { UiFeedbackProvider } from "@/hooks/use-ui-feedback";
import { MotionProvider } from "@/components/common/motion-provider";
import { ErrorBoundary } from "@/components/error-boundary";
import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll";
import { SiteShell } from "@/components/layout/site-shell";
import StructuredData from "@/components/structured-data";
import { profile } from "@/lib/content/profile";
import {
  siteUrl,
  socialPreviewDescription,
  socialPreviewTitle,
} from "@/lib/content/site";

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixelify",
});

const description = socialPreviewDescription;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: socialPreviewTitle,
    template: "%s | Harsh Dubey",
  },
  description,
  keywords: [
    "Harsh Dubey",
    "Harsh Dubey Pune",
    "Junior Specialist",
    "IT Support",
    "ServiceNow",
    "Incident Management",
    "Request Management",
    "Microsoft Entra ID",
    "Active Directory",
    "Python Automation",
    "ITIL",
    "Pune",
    "India",
    "Developer Portfolio",
    "Portfolio Website",
    "Personal Website",
  ],
  authors: [{ name: "Harsh Dubey" }],
  creator: "Harsh Dubey",
  publisher: "Harsh Dubey",
  generator: "Next.js",
  applicationName: "Harsh Dubey Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Harsh Dubey Portfolio",
    title: socialPreviewTitle,
    description,
    // No `images` here - app/opengraph-image.png supplies it automatically.
  },
  twitter: {
    card: "summary_large_image",
    site: `@${profile.xHandle}`,
    creator: `@${profile.xHandle}`,
    title: socialPreviewTitle,
    description,
    // No `images` here - app/twitter-image.png supplies it automatically.
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": profile.email,
    "contact:country_name": "India",
    "contact:region": "Maharashtra",
    "contact:locality": "Pune",
    "twitter:domain": "harshdubey-portfolio.vercel.app",
    "twitter:url": siteUrl,
    "whatsapp:title": socialPreviewTitle,
    "whatsapp:description": description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistMono.variable} ${pixelifySans.variable}`}
    >
      <head>
        {/* Satoshi lives on Fontshare, not Google Fonts, so next/font
            cannot self-host it. The `@variable` sheet ends with a
            300..900 face; declared last, it wins font matching for every
            weight, so one file covers the lot - including the 600 that
            the static weights skip. */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=satoshi@variable&display=swap"
        />
        <StructuredData />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MotionProvider>
              <UiFeedbackProvider>
                <LenisSmoothScroll />
                {/* <UserCursor name="hi" /> */}
                <SiteShell>{children}</SiteShell>
              </UiFeedbackProvider>
            </MotionProvider>
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}