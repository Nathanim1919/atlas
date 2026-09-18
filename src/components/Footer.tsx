"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
    { name: "System Engineering", href: "/solutions/system-engineering" },
    { name: "Software Development", href: "/solutions/software-development" },
    { name: "Private Cloud (OpenStack)", href: "/solutions/private-cloud" },
    { name: "Cloud Solutions", href: "/solutions/cloud-solutions" },
    { name: "Managed Services & SLAs", href: "/solutions/managed-services" },
    { name: "AI & Automation", href: "/solutions/ai-automation" },
    { name: "Consultancy & Training", href: "/solutions/consultancy-training" },
  ],
  products: [
    { name: "Uni-Cash (Pay@Bank)", href: "/products/unicash" },
    { name: "Virtual Integrated Banking (VIB)", href: "/products/vib" },
    { name: "Merchant Application", href: "/products/merchant-pay" },
    { name: "Uni-Cash School & TVET", href: "/products/unicash" },
    { name: "Uni-Cash Utility Billing", href: "/products/unicash" },
  ],
  resources: [
    { name: "Case Studies & Stories", href: "/case-studies" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Download Center (Profile 2026)", href: "/resources/downloads" },
    { name: "Knowledge & Whitepapers", href: "/resources" },
    { name: "News & Insights", href: "/news" },
    { name: "Customer Portal / Support", href: "/support" },
  ],
  company: [
    { name: "About ACT", href: "/#about" },
    { name: "Leadership", href: "/#about" },
    { name: "Strategic Partners", href: "/#partners" },
    { name: "Clients & References", href: "/#clients" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Compliance & Security", href: "/case-studies" },
  ]
};

export default function Footer() {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-neutral-200 relative">
      {/* Top CTA Section */}
      <div className="bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-secondary-400 font-bold text-xs uppercase tracking-wider mb-2 block">
                Partner with Atlas Computer Technology
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 font-display">
                Ready to Elevate Your Enterprise Infrastructure?
              </h2>
              <p className="text-primary-100 text-sm leading-relaxed">
                Join 20+ leading commercial banks, public utilities, and government institutions leveraging ACT world-class solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto">
              <Link 
                href="/#contact" 
                className="px-6 py-3 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl transition-all text-center whitespace-nowrap shadow-sm"
              >
                Request a Demo
              </Link>
              <a 
                href="tel:+251115329139" 
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors text-center whitespace-nowrap border border-white/20 flex items-center justify-center gap-2"
              >
                <Phone size={15} />
                <span>+25111-5-32-91-39</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-3 space-y-5">
              <Link href="/" className="block w-fit">
                <Image
                  src={Logo}
                  alt="Atlas Computer Technology"
                  width={180}
                  height={60}
                  className="h-11 w-auto object-contain"
                />
              </Link>
              <p className="text-neutral-600 leading-relaxed text-xs max-w-sm">
                Since 2011, Atlas Computer Technology PLC (ACT) has been the premier architect of digital infrastructure, core banking systems, OpenStack private cloud, and Uni-Cash payments in Ethiopia.
              </p>
              
              {/* Quick Contact Badge */}
              <div className="pt-2 text-xs text-neutral-600 space-y-1">
                <div className="font-semibold text-neutral-900">Direct Contact:</div>
                <div>+25111-5-32-91-39</div>
                <div>info@act.com.et • www.act.com.et</div>
              </div>
            </div>

            {/* Solutions Column */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-neutral-900 mb-5 uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-neutral-600 hover:text-primary-600 transition-colors text-xs flex items-center gap-1.5 group"
                    >
                      <ArrowRight size={11} className="text-primary-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Column */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-neutral-900 mb-5 uppercase tracking-wider">
                Products
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-neutral-600 hover:text-primary-600 transition-colors text-xs flex items-center gap-1.5 group"
                    >
                      <ArrowRight size={11} className="text-primary-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold text-neutral-900 mb-5 uppercase tracking-wider">
                Resources & Support
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-neutral-600 hover:text-primary-600 transition-colors text-xs flex items-center gap-1.5 group"
                    >
                      <ArrowRight size={11} className="text-primary-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold text-neutral-900 mb-5 uppercase tracking-wider">
                Addis Ababa Offices
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100 mt-0.5">
                    <MapPin size={15} className="text-primary-600" />
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="block text-neutral-900 font-semibold mb-0.5">Location 1 (HQ)</span>
                      <span className="text-neutral-600 leading-relaxed block">
                        Airport Road, Aberus Complex, 9th Floor
                      </span>
                    </div>
                    <div>
                      <span className="block text-neutral-900 font-semibold mb-0.5">Location 2 (Branch)</span>
                      <span className="text-neutral-600 leading-relaxed block">
                        Kirkos Sub-city, Near Lancha Train Station, Zefco Building, 3rd Floor
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100">
                    <Phone size={15} className="text-primary-600" />
                  </div>
                  <div className="text-xs">
                    <span className="block text-neutral-900 font-semibold mb-0.5">Phone Line</span>
                    <a href="tel:+251115329139" className="text-neutral-600 hover:text-primary-600 transition-colors block">
                      +25111-5-32-91-39
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100">
                    <Mail size={15} className="text-primary-600" />
                  </div>
                  <div className="text-xs">
                    <span className="block text-neutral-900 font-semibold mb-0.5">Official Inquiries</span>
                    <a href="mailto:info@act.com.et" className="text-neutral-600 hover:text-primary-600 transition-colors">
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
                  { icon: Linkedin, href: "https://www.linkedin.com/company/atlas-computer-technology/about/" },
                  // { icon: Twitter, href: "#" },
                  // { icon: Facebook, href: "#" },
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
