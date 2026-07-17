import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalContext";
import Modals from "@/components/Modals";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import LenisScroller from "@/components/LenisScroller";
import IntroLoader from "@/components/IntroLoader";
import PaymentGate from "@/components/PaymentGate";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#faf6ee",
};

const siteDescription =
  "The Bridge Identity Reset™ helps high-performing women leaders close the gap between the person the world sees and the woman quietly overwhelmed and running on empty, in 8 weeks.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bridge.lumerapath.com"),
  title: {
    default: "You Don't Need a New Strategy. You Need an Identity Reset.",
    template: "%s | The Bridge Identity Reset™",
  },
  description: siteDescription,
  openGraph: {
    title: "The Bridge Identity Reset™",
    description: siteDescription,
    url: "https://bridge.lumerapath.com",
    siteName: "The Bridge Identity Reset™",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "The Bridge Identity Reset™, an 8-week leadership program for high-performing women",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Bridge Identity Reset™",
    description: siteDescription,
    images: ["/images/og-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ModalProvider>
          <IntroLoader />
          <LenisScroller />
          <ScrollProgress />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <Modals />
        </ModalProvider>
        <PaymentGate />
      </body>
    </html>
  );
}
