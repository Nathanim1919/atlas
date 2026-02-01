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
  Globe2,
  Send
} from "lucide-react";
import Logo from "../../public/logo.png";

const footerLinks = {
  solutions: [
    { name: "System Engineering", href: "/#system-engineering" },
    { name: "Software Development", href: "/#software-development" },
    { name: "Cloud Infrastructure", href: "/#cloud" },
    { name: "Managed Services", href: "/#managed-services" },
    { name: "Consultancy", href: "/#consultancy" },
  ],
  products: [
    { name: "Uni-Cash", href: "/#unicash" },
    { name: "Virtual Integrated Banking", href: "/#vib" },
    { name: "Merchant Application", href: "/#merchant" },
    { name: "Payment Gateway", href: "/#payment" },
  ],
  company: [
    { name: "About Atlas", href: "/#about" },
    { name: "Leadership", href: "/#leadership" },
    { name: "Clients & Partners", href: "/#clients" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ]
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden">
      {/* Top CTA Section */}
      <div className="relative border-b border-white/10 bg-neutral-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-secondary-400">Transform</span> Your Business?
              </h2>
              <p className="text-neutral-400 text-lg font-light">
                Join leading enterprises in Ethiopia leveraging our world-class technology solutions.
              </p>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/#contact" 
                className="px-8 py-4 bg-secondary-400 text-neutral-900 font-bold rounded-full hover:bg-secondary-300 transition-all shadow-[0_0_20px_rgba(221,227,37,0.3)] hover:shadow-[0_0_30px_rgba(221,227,37,0.5)] hover:-translate-y-1"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary-900/20 to-transparent pointer-events-none" />
      </div>

      {/* Main Footer Content */}
      <div className="relative pt-20 pb-12">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] invert" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-8">
              <Link href="/" className="block w-fit group">
                <div className="bg-white/5 p-4 rounded-2xl inline-block backdrop-blur-sm border border-white/10 group-hover:border-secondary-400/50 transition-colors duration-500">
                  <Image
                    src={Logo}
                    alt="Atlas Computer Technology"
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain brightness-0 invert"
                  />
                </div>
              </Link>
              <p className="text-neutral-400 leading-relaxed font-light max-w-sm">
                Since 2011, we've been the architect of digital excellence in Ethiopia, delivering certified infrastructure, software, and consultancy services.
              </p>
              
              {/* Newsletter Signup */}
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Stay Updated</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-hidden focus:border-secondary-400/50 w-full transition-colors"
                  />
                  <button className="bg-primary-600 hover:bg-primary-500 text-white p-3 rounded-lg transition-colors">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2 md:col-span-4">
              <h4 className="text-lg font-bold text-white mb-8 relative inline-block">
                Solutions
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary-400 rounded-full" />
              </h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="text-secondary-400 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 md:col-span-4">
              <h4 className="text-lg font-bold text-white mb-8 relative inline-block">
                Products
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary-400 rounded-full" />
              </h4>
              <ul className="space-y-4">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="text-secondary-400 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-4 md:col-span-4">
              <h4 className="text-lg font-bold text-white mb-8 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary-400 rounded-full" />
              </h4>
              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-secondary-400/50 group-hover:bg-secondary-400/10 transition-all duration-300">
                    <MapPin size={20} className="text-secondary-400" />
                  </div>
                  <div>
                    <span className="block text-white font-medium mb-1">Headquarters</span>
                    <span className="text-neutral-400 text-sm leading-relaxed block font-light group-hover:text-neutral-300 transition-colors">
                      Airport Road, Aberus Complex, 9th Floor<br />
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-secondary-400/50 group-hover:bg-secondary-400/10 transition-all duration-300">
                    <Phone size={20} className="text-secondary-400" />
                  </div>
                  <div>
                    <span className="block text-white font-medium mb-1">Phone</span>
                    <a href="tel:+251118693096" className="text-neutral-400 text-sm hover:text-white transition-colors block font-light">
                      +251 11 869 3096
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-secondary-400/50 group-hover:bg-secondary-400/10 transition-all duration-300">
                    <Mail size={20} className="text-secondary-400" />
                  </div>
                  <div>
                    <span className="block text-white font-medium mb-1">Email</span>
                    <a href="mailto:info@act.com.et" className="text-neutral-400 text-sm hover:text-white transition-colors block font-light">
                      info@act.com.et
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-neutral-500 text-sm font-light">
                © {new Date().getFullYear()} Atlas Computer Technology PLC.
              </p>
              <div className="hidden md:block w-1 h-1 rounded-full bg-neutral-700" />
              <div className="flex gap-6">
                {footerLinks.legal.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-secondary-400 transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary-400/50 flex items-center justify-center transition-all duration-300 text-neutral-400 hover:text-secondary-400"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-secondary-400 hover:bg-secondary-300 flex items-center justify-center text-neutral-900 transition-all shadow-[0_0_20px_rgba(221,227,37,0.3)] hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <ChevronUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
