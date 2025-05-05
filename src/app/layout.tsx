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
    "Kript lets you buy, sell, and trade cryptocurrencies like USDT, Bitcoin, and Ethereum instantly using Naira. Secure, fast, and beginner-friendly crypto experience in Nigeria.",
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
    "secure crypto platform"
  ],
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Kript Africa | Buy, Sell & Trade Crypto Securely in Nigeria",
    description:
      "Join thousands of Nigerians using Kript to access USDT, BTC, ETH, and more. Simple, secure crypto trading platform built for Africa.",
    url: "https://kript.africa", // Update this to your actual domain
    siteName: "Kript Africa",
    images: [
      {
        url: "logo/.png", // Provide a real OG image URL
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
    images: ["/logo.png"],
    creator: "@kriptafrica", // Optional: update with real Twitter handle
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed w-full bg-white z-30">
          <Navbar />
        </div> <br />
        <br /> <br />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
