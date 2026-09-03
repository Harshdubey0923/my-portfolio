import type { Metadata } from "next"

import { ContactPage } from "@/components/contact/contact-page"
import {
  siteUrl,
  socialPreviewDescription,
  socialPreviewTitle,
} from "@/lib/content/site"

const description =
  "Get in touch with Abhishek Singh about full-stack engineering roles, freelance work, or anything he has built."

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    url: `${siteUrl}/contact`,
    type: "website",
    // No `images` here - inherited from the root app/opengraph-image.png.
  },
  twitter: {
    card: "summary_large_image",
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    // No `images` here - inherited from the root app/twitter-image.png.
  },
}

export default function Page() {
  return <ContactPage />
}
