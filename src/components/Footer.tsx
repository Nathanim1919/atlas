"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight,
  ChevronUp,
  Globe2
} from "lucide-react";
import Logo from "../../public/logo.png";

const footerLinks = {
  solutions: [
    { name: "System Engineering", href: "#system-engineering" },
    { name: "Software Development", href: "#software-development" },
    { name: "Cloud Infrastructure", href: "#cloud" },
    { name: "Managed Services", href: "#managed-services" },
    { name: "Consultancy", href: "#consultancy" },
  ],
  products: [
    { name: "Uni-Cash", href: "#unicash" },
    { name: "Virtual Integrated Banking", href: "#vib" },
    { name: "Merchant Application", href: "#merchant" },
    { name: "Payment Gateway", href: "#payment" },
  ],
  company: [
    { name: "About Atlas", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Clients & Partners", href: "#clients" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden pt-24 pb-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="block w-fit">
              <div className="bg-white/5 p-3 rounded-xl inline-block backdrop-blur-sm border border-white/10">
                <Image
                  src={Logo}
                  alt="Atlas Computer Technology"
                  width={180}
                  height={60}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-neutral-400 leading-relaxed max-w-sm">
              Empowering Ethiopia's digital transformation through world-class infrastructure, software solutions, and strategic consultancy since 2011.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-600 border border-white/10 hover:border-emerald-500 flex items-center justify-center transition-all duration-300 text-neutral-400 hover:text-white"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 md:col-span-4 col-span-6">
            <h4 className="text-lg font-bold text-white mb-6">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 md:col-span-4 col-span-6">
            <h4 className="text-lg font-bold text-white mb-6">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-neutral-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 md:col-span-4">
            <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin size={18} className="text-emerald-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Headquarters</span>
                  <span className="text-neutral-400 text-sm leading-relaxed block">
                    Airport Road, Aberus Complex, 9th Floor<br />
                    Addis Ababa, Ethiopia
                  </span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone size={18} className="text-emerald-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Phone</span>
                  <a href="tel:+251118693096" className="text-neutral-400 text-sm hover:text-white transition-colors block">
                    +251 11 869 3096
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail size={18} className="text-emerald-400" />
                </div>
                <div>
                  <span className="block text-white font-medium mb-1">Email</span>
                  <a href="mailto:info@act.com.et" className="text-neutral-400 text-sm hover:text-white transition-colors block">
                    info@act.com.et
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Atlas Computer Technology PLC. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white transition-all shadow-lg shadow-emerald-900/20 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
