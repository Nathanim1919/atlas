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

