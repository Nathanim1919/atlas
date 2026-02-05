"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight,
  ChevronUp,
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
    <footer className="bg-neutral-200 relative">
      {/* Top CTA Section */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to Transform Your Business?
              </h2>
              <p className="text-primary-100 text-base">
                Join leading enterprises in Ethiopia leveraging our world-class technology solutions.
              </p>
            </div>
            <Link 
              href="/#contact" 
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-neutral-50 transition-colors whitespace-nowrap"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="block w-fit">
                <Image
                  src={Logo}
                  alt="Atlas Computer Technology"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-neutral-600 leading-relaxed text-sm max-w-sm">
                Since 2011, we've been the architect of digital excellence in Ethiopia, delivering certified infrastructure, software, and consultancy services.
              </p>
              
              {/* Newsletter Signup */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-primary-700 uppercase tracking-wider mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 flex-1 transition-colors"
                  />
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-lg transition-colors">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Solutions Column */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-neutral-900 mb-6 uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-neutral-600 hover:text-primary-600 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight size={12} className="text-primary-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Column */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold text-neutral-900 mb-6 uppercase tracking-wider">
                Products
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-neutral-600 hover:text-primary-600 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight size={12} className="text-primary-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-bold text-neutral-900 mb-6 uppercase tracking-wider">
                Contact Us
              </h4>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100">
                    <MapPin size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <span className="block text-neutral-900 font-medium text-sm mb-0.5">Headquarters</span>
                    <span className="text-neutral-500 text-sm leading-relaxed block">
                      Airport Road, Aberus Complex, 9th Floor<br />
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100">
                    <Phone size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <span className="block text-neutral-900 font-medium text-sm mb-0.5">Phone</span>
                    <a href="tel:+251118693096" className="text-neutral-500 text-sm hover:text-primary-600 transition-colors">
                      +251 11 869 3096
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100">
                    <Mail size={18} className="text-primary-600" />
                  </div>
                  <div>
                    <span className="block text-neutral-900 font-medium text-sm mb-0.5">Email</span>
                    <a href="mailto:info@act.com.et" className="text-neutral-500 text-sm hover:text-primary-600 transition-colors">
                      info@act.com.et
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} Atlas Computer Technology PLC.
              </p>
              <div className="hidden md:block w-1 h-1 rounded-full bg-neutral-400" />
              <div className="flex gap-6">
                {footerLinks.legal.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-white hover:bg-primary-50 border border-neutral-300 hover:border-primary-200 flex items-center justify-center transition-colors text-neutral-500 hover:text-primary-600"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-lg bg-primary-600 hover:bg-primary-700 flex items-center justify-center text-white transition-colors"
                aria-label="Scroll to top"
              >
                <ChevronUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
