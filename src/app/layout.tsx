import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mars-habitat.example"),
  title: {
    default: "MARS//HABITAT — Designing the future of life beyond Earth",
    template: "%s | MARS//HABITAT",
  },
  description:
    "Exploring the science, engineering, biology, technology, and challenges behind creating a permanent human presence on Mars.",
  keywords: [
    "Mars",
    "space exploration",
    "habitat",
    "space science",
    "settlement",
    "ISRU",
    "astronauts",
  ],
  openGraph: {
    type: "website",
    title: "MARS//HABITAT",
    description:
      "Exploring the science and engineering behind humanity's future beyond Earth.",
    siteName: "MARS//HABITAT",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARS//HABITAT",
    description:
      "Exploring the science and engineering behind humanity's future beyond Earth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
