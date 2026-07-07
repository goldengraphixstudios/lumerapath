import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalContext";
import Modals from "@/components/Modals";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import LenisScroller from "@/components/LenisScroller";
import IntroLoader from "@/components/IntroLoader";

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

export const metadata: Metadata = {
  title: {
    default: "The Bridge Accelerator™ | Lumera Path",
    template: "%s | Lumera Path",
  },
  description:
    "An 8-week leadership program for high-performing women ready to stop leading from pressure, fear, and overwhelm, and start leading from purpose.",
  openGraph: {
    title: "The Bridge Accelerator™ | Lumera Path",
    description:
      "Stop performing success. Start owning it. An 8-week program for driven women leaders built by former executives.",
    type: "website",
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
      </body>
    </html>
  );
}
