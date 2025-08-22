import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buy, Sell & Trade Cryptocurrency in Nigeria | Kript Africa",
  description:
    "Kript Africa is your trusted platform to buy, sell, and trade cryptocurrencies like USDT, Bitcoin, and Ether instantly using Naira. Experience a secure, fast, and user-friendly crypto platform tailored for Nigerians.",
  keywords: [
    "buy crypto in Nigeria",
    "sell crypto in Nigeria",
    "trade Bitcoin Nigeria",
    "buy USDT Nigeria",
    "Kript Africa",
    "crypto exchange Nigeria",
    "stablecoins Nigeria",
    "crypto wallet Nigeria",
    "automated crypto purchase",
    "secure crypto platform",
    "crypto trading Nigeria",
    "cryptocurrency Nigeria",
    "crypto investment Nigeria",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Kript Africa | Buy, Sell & Trade Crypto Securely in Nigeria",
    description:
      "Join thousands of Nigerians using Kript to access USDT, BTC, ETH, and more. Simple, secure crypto trading platform built for Africa.",
    url: "https://kript.africa",
    siteName: "Kript Africa",
    images: [
      {
        url: "/fast.png",
        width: 1200,
        height: 630,
        alt: "Kript Africa - Crypto made simple",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy, Sell & Trade Cryptocurrency in Nigeria | Kript Africa",
    description:
      "Easily buy and sell USDT, BTC, and other cryptocurrencies with Naira. Kript makes crypto simple and accessible to all Nigerians.",
    images: ["/fast.png"],
    creator: "@kriptafrica",
  },
  alternates: {
    canonical: "https://kript.africa",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kript Africa",
              url: "https://kript.africa",
              logo: "https://kript.africa/fast.png",
              sameAs: [
                "https://x.com/kriptafrica",
                "https://www.instagram.com/kript.africa/",
                "https://www.linkedin.com/company/kript-africa",
              ],
              description:
                "Kript Africa is a secure platform to buy, sell, and trade cryptocurrencies like USDT, Bitcoin, and Ether using Naira.",
            }),
          }}
        />

        {/* Google Tag Manager  */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NMJFTGRD');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMJFTGRD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Navbar */}
        <div className="fixed w-full bg-white z-30">
          <Navbar />
        </div>
        <br /><br /><br />
        {/* Main Content */}
        <div className="mt-[5%]">{children}</div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
