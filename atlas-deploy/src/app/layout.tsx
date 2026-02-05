import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Atlas Computer Technology | Enterprise ICT Solutions",
  description: "Atlas Computer Technology PLC - Professional ICT services including system engineering, enterprise software development, cloud solutions, and managed services in Ethiopia.",
  keywords: "ICT solutions, software development, system engineering, cloud services, Ethiopia, enterprise applications, Uni-Cash, banking solutions",
  authors: [{ name: "Atlas Computer Technology PLC" }],
  openGraph: {
    title: "Atlas Computer Technology | Enterprise ICT Solutions",
    description: "Powering Your Business with innovative, cost-effective software and IT solutions",
    type: "website",
    locale: "en_US",
    url: "https://www.act.com.et",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${spaceGrotesk.variable} antialiased`}
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
