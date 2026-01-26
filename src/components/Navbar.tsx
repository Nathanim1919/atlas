"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "#about",
    subLinks: [
      { name: "Company Overview", href: "#about" },
      { name: "Vision & Mission", href: "#vision" },
      { name: "Leadership", href: "#leadership" },
    ]
  },
  { 
    name: "Services", 
    href: "#services",
    subLinks: [
      { name: "System Engineering", href: "#system-engineering" },
      { name: "Software Development", href: "#software-development" },
      { name: "Cloud Solutions", href: "#cloud" },
      { name: "Managed Services", href: "#managed-services" },
      { name: "Consultancy & Training", href: "#consultancy" },
    ]
  },
  { 
    name: "Products", 
    href: "#products",
    subLinks: [
      { name: "Uni-Cash", href: "#unicash" },
      { name: "Virtual Integrated Banking", href: "#vib" },
      { name: "Merchant Application", href: "#merchant" },
    ]
  },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+251118693096" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <Phone size={14} />
              <span>+251 11 869 3096</span>
            </a>
            <a href="mailto:info@act.com.et" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <Mail size={14} />
              <span>info@act.com.et</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-xl font-display">A</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary-400 rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary-900 font-display tracking-tight">
                  ATLAS
                </span>
                <span className="text-xs text-neutral-500 -mt-1">
                  Computer Technology
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-all flex items-center gap-1 ${
                      activeDropdown === link.name ? "text-primary-600 bg-primary-50" : ""
                    }`}
                  >
                    {link.name}
                    {link.subLinks && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.subLinks && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-neutral-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="block px-4 py-3 rounded-lg text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-all"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="#contact"
                className="btn-primary"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-neutral-100"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-all"
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-4 space-y-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-neutral-500 hover:text-primary-600 transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-neutral-100">
                  <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary block text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}


