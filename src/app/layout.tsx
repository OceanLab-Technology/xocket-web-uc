import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SITE_URL = "https://xocket.sh";
const TITLE = "Xocket — The Execution Layer for Modern Teams";
const DESCRIPTION =
  "Xocket provides AI-native developers who operate as an execution layer inside your team — builders who understand product, communicate clearly with non-technical teams, and ship significantly faster.";
const EMAIL = "vanshpatel@xocket.sh";
const CAL_URL = "https://cal.com/xocket/30min";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Xocket",
  },
  description: DESCRIPTION,
  applicationName: "Xocket",
  keywords: [
    "Xocket",
    "AI-native developers",
    "execution layer",
    "AI-first engineering",
    "fractional engineering team",
    "product execution",
    "ship faster",
    "developer agency",
    "VC-backed startup engineering",
    "founders",
    "AI workflows",
    "engineering as a service",
  ],
  authors: [{ name: "Xocket", url: SITE_URL }],
  creator: "Xocket",
  publisher: "Xocket",
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  category: "technology",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Xocket",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: TITLE,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@xocket",
    site: "@xocket",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
  referrer: "origin-when-cross-origin",
  // verification: {
  //   google: "<google-site-verification-token>",
  //   other: { "msvalidate.01": "<bing-token>" },
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "Xocket",
    alternateName: "Xocket Execution Layer",
    url: SITE_URL,
    description: DESCRIPTION,
    email: EMAIL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon`,
      width: 32,
      height: 32,
    },
    image: `${SITE_URL}/opengraph-image`,
    foundingDate: "2025",
    founder: { "@type": "Person", name: "Vansh Patel" },
    sameAs: [CAL_URL],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: EMAIL,
        url: CAL_URL,
        availableLanguage: ["English"],
        areaServed: "Worldwide",
      },
    ],
    areaServed: { "@type": "Place", name: "Worldwide" },
    knowsAbout: [
      "AI-native software engineering",
      "Product execution",
      "Fractional engineering",
      "Engineering operations",
      "AI-first workflows",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "Xocket",
    url: SITE_URL,
    description: DESCRIPTION,
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: "en-US",
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#service`,
    name: "Xocket — Execution Layer for Modern Teams",
    serviceType: "AI-native software engineering and product execution",
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: { "@type": "Place", name: "Worldwide" },
    url: SITE_URL,
    description:
      "AI-native developers who operate as an execution layer inside your team — builders who understand product, communicate clearly, and ship significantly faster.",
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Founders, fast-growing startups, and VC-backed companies hitting execution bottlenecks",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Xocket do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Xocket provides AI-native developers who operate as an execution layer inside your team — builders who understand product, communicate clearly with non-technical teams, and ship significantly faster.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Xocket for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Founders who want to move faster without managing developers, teams tired of explaining things repeatedly, and companies scaling but hitting execution bottlenecks.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Xocket work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Xocket has built and supported products across multiple industries. We know where teams get stuck, we don't reinvent process every time we ship, and we execute with structure instead of guesswork.",
        },
      },
      {
        "@type": "Question",
        name: "How can I work with Xocket?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Book a 30-minute call at cal.com/xocket/30min or email vanshpatel@xocket.sh.",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-300 selection:bg-white selection:text-black">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </body>
    </html>
  );
}
