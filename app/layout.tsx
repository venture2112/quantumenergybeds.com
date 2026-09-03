import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quantumenergybeds.com"),
  title: {
    default: "Quantum Energy Beds 2026 | #1 Multi-Modal Wellness Pod for Home & Business",
    template: "%s | Quantum Energy Beds"
  },
  description: "Discover Quantum Energy Beds: 12-in-1 healing technology with red light therapy, PEMF, terahertz waves & more. $14,900 with free shipping. Transform your wellness today.",
  keywords: ["quantum energy beds", "quantum wellness pod", "red light therapy bed", "PEMF therapy device", "terahertz wave therapy", "multi-modal wellness", "holistic healing technology"],
  authors: [{ name: "Quantum Energy Beds" }],
  creator: "Quantum Energy Beds",
  publisher: "Quantum Energy Beds",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.quantumenergybeds.com",
    siteName: "Quantum Energy Beds",
    title: "Quantum Energy Beds 2026 | #1 Multi-Modal Wellness Pod",
    description: "12-in-1 healing technology with red light therapy, PEMF, terahertz waves & more. $14,900 with free shipping.",
    images: [
      {
        url: "https://www.quantumenergybeds.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quantum Energy Beds - Multi-Modal Wellness Pod",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Energy Beds 2026 | #1 Multi-Modal Wellness Pod",
    description: "12-in-1 healing technology with red light therapy, PEMF, terahertz waves & more.",
    images: ["https://www.quantumenergybeds.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6B4EE6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Quantum Energy Beds",
              "url": "https://www.quantumenergybeds.com",
              "logo": "https://www.quantumenergybeds.com/logo.png",
              "description": "Advanced multi-modal wellness technology combining red light therapy, PEMF, terahertz waves, and more for whole-body healing.",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@quantumenergybeds.com",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.quantumenergybeds.com"
              ]
            }),
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
