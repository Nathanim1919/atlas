import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Atlas Computer Technology PLC. Reach out for enterprise ICT inquiries, banking solutions, cloud infrastructure, or to visit our Addis Ababa offices.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      <Contact />
    </main>
  );
}
