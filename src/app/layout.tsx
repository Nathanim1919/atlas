import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Toaster } from "sonner";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://www.act.com.et"),
  title: {
    default: "Atlas Computer Technology | Enterprise ICT & Banking Solutions",
    template: "%s | Atlas Computer Technology",
  },
  description: "Atlas Computer Technology PLC - Powering Ethiopian financial institutions, enterprises, and government agencies with Uni-Cash, Virtual Integrated Banking (VIB), cloud systems, and mission-critical ICT infrastructure.",
  keywords: [
    "Atlas Computer Technology",
    "ACT",
    "Uni-Cash",
    "Virtual Integrated Banking",
    "VIB",
    "Ethiopia FinTech",
    "Pay@Bank",
    "Enterprise Software",
    "Banking Solutions",
    "Cloud Infrastructure",
    "ICT Services Addis Ababa"
  ],
  authors: [{ name: "Atlas Computer Technology PLC", url: "https://www.act.com.et" }],
  creator: "Atlas Computer Technology PLC",
  publisher: "Atlas Computer Technology PLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.act.com.et",
    siteName: "Atlas Computer Technology",
    title: "Atlas Computer Technology | Enterprise ICT & Banking Solutions",
    description: "Powering Your Business with innovative, cost-effective software, banking systems (Uni-Cash, VIB), and enterprise ICT infrastructure in Ethiopia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atlas Computer Technology - Enterprise ICT & Banking Solutions",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Computer Technology | Enterprise ICT & Banking Solutions",
    description: "Powering Ethiopian enterprises with Uni-Cash, Virtual Integrated Banking, and mission-critical ICT infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atlas Computer Technology - Enterprise ICT & Banking Solutions",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lexend.variable} ${lexend.className} font-sans antialiased`}
        style={{ fontFamily: "var(--font-lexend), 'Lexend', system-ui, sans-serif" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <DemoModal />
        <Toaster richColors position="top-right" closeButton />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              var s = document.createElement("script");
              s.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
              s.addEventListener("load", function() {
                window.botpress.init({
                  "clientId": "72f733ec-96e3-4b3f-af2d-e194e9e983fc",
                  "configuration": {
                    "botName": "Atlas Assistant",
                    "botAvatar": "https://files.bpcontent.cloud/2026/02/07/08/20260207084834-WM2AZ8GZ.png",
                    "color": "#397497",
                    "variant": "solid",
                    "themeMode": "light",
                    "fontFamily": "inter",
                    "radius": 2
                  }
                });
              });
              document.body.appendChild(s);
            `,
          }}
        />
      </body>
    </html>
  );
}

