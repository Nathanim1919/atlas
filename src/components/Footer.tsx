"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowUpRight,
  ChevronUp
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "System Engineering", href: "#system-engineering" },
    { name: "Software Development", href: "#software-development" },
    { name: "Cloud Solutions", href: "#cloud" },
    { name: "Managed Services", href: "#managed-services" },
    { name: "Consultancy & Training", href: "#consultancy" },
  ],
  products: [
    { name: "Uni-Cash", href: "#unicash" },
    { name: "Virtual Integrated Banking", href: "#vib" },
    { name: "Merchant Application", href: "#merchant" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#leadership" },
    { name: "Clients", href: "#clients" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ],
};

const locations = [
  {
    name: "Head Office",
    address: "Airport Road, Aberus Complex, 9th Floor",
    city: "Addis Ababa, Ethiopia",
  },
  {
    name: "Branch Office",
    address: "Kirkos Sub-city, Near Lancha Train Station, Zefco Building, 3rd Floor",
    city: "Addis Ababa, Ethiopia",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-display mb-4"
              >
                Ready to Transform
                <br />
                <span className="text-accent-400">Your Business?</span>
              </motion.h2>
              <p className="text-neutral-300 text-lg max-w-md">
                Let&apos;s discuss how Atlas can help you achieve your technology goals with innovative ICT solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link
                href="#contact"
                className="btn-primary bg-white text-primary-900 hover:bg-neutral-100 inline-flex items-center justify-center gap-2"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </Link>
              <a
                href="tel:+251118693096"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900 inline-flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl font-display">A</span>
              </div>
              <div>
                <span className="text-xl font-bold font-display block">ATLAS</span>
                <span className="text-xs text-neutral-400">Computer Technology PLC</span>
              </div>
            </Link>
            <p className="text-neutral-300 mb-6 max-w-sm">
              Powering businesses with innovative, cost-effective software and IT solutions using cutting-edge technology since 2011.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-display">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-display">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-lg mb-4 mt-8 font-display">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-display">Contact</h3>
            <ul className="space-y-4">
              {locations.map((location, index) => (
                <li key={index} className="flex gap-3">
                  <MapPin size={20} className="text-accent-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-medium block">{location.name}</span>
                    <span className="text-neutral-400 text-sm">{location.address}</span>
                    <span className="text-neutral-400 text-sm block">{location.city}</span>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent-400" />
                <div>
                  <a href="tel:+251118693096" className="hover:text-accent-400 transition-colors block">
                    +251 11 869 3096
                  </a>
                  <a href="tel:+251911221671" className="hover:text-accent-400 transition-colors block text-neutral-400">
                    +251 911 221671
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent-400" />
                <a href="mailto:info@act.com.et" className="hover:text-accent-400 transition-colors">
                  info@act.com.et
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={20} className="text-accent-400" />
                <a href="https://www.act.com.et" className="hover:text-accent-400 transition-colors">
                  www.act.com.et
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Atlas Computer Technology PLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-12 h-12 bg-accent-500 hover:bg-accent-400 rounded-full flex items-center justify-center transition-colors shadow-lg"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
}


