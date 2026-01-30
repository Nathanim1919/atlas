"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import Logo from "../../public/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "/#about",
    subLinks: [
      { name: "Company Overview", href: "/#about", description: "Learn about our history and values" },
      { name: "Vision & Mission", href: "/#vision", description: "Our goals and guiding principles" },
      { name: "Leadership", href: "/#about", description: "Meet the team driving our success" },
    ]
  },
  { 
    name: "Services", 
    href: "/#services",
    subLinks: [
      { name: "System Engineering", href: "/#system-engineering", description: "Robust infrastructure solutions" },
      { name: "Software Development", href: "/#software-development", description: "Custom software tailored to you" },
      { name: "Cloud Solutions", href: "/#cloud", description: "Scalable and secure cloud services" },
      { name: "Managed Services", href: "/#managed-services", description: "Proactive IT management" },
      { name: "Consultancy & Training", href: "/#consultancy", description: "Expert advice and skill building" },
    ]
  },
  { 
    name: "Products", 
    href: "/#products",
    subLinks: [
      { name: "Uni-Cash", href: "/#unicash", description: "Unified cash management system" },
      { name: "Virtual Integrated Banking", href: "/#vib", description: "Seamless banking integration" },
      { name: "Merchant Application", href: "/#merchant", description: "Tools for modern merchants" },
    ]
  },
  { name: "Clients", href: "/#clients" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string, e: React.MouseEvent<HTMLDivElement>) => {
    setActiveDropdown(name);
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const targetRect = e.currentTarget.getBoundingClientRect();
      // Calculate center position relative to the nav container
      const left = targetRect.left - navRect.left + targetRect.width / 2;
      setDropdownLeft(left);
    }
  };

  const activeLink = navLinks.find(l => l.name === activeDropdown);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-emerald-500 text-white py-2 hidden lg:block">
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
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-100"
            : "bg-white border-b border-transparent"
        }`}
      >
        <nav ref={navRef} className="max-w-7xl mx-auto px-6 relative" onMouseLeave={() => setActiveDropdown(null)}>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-20">
              <div className="relative">
                <Image
                  src={Logo}
                  alt="Atlas Computer Technology Logo"
                  width={200}
                  height={200}
                  className="object-contain w-auto h-12"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={(e) => handleMouseEnter(link.name, e)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all flex items-center gap-1 relative z-10 ${
                      activeDropdown === link.name 
                        ? "text-primary-700" 
                        : "text-neutral-600 hover:text-primary-600"
                    }`}
                  >
                    {link.name}
                    {link.subLinks && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Hover Background Pill */}
                  {activeDropdown === link.name && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-primary-50 rounded-full z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4 relative z-20">
              <Link
                href="/#contact"
                className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 text-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors relative z-20"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Shared Dropdown Container */}
          <AnimatePresence>
            {activeDropdown && activeLink?.subLinks && (
              <motion.div
                className="absolute top-full pt-4 hidden lg:block z-50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: dropdownLeft,
                  translateX: "-50%"
                }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }}
                style={{ left: 0 }} // Base position, animated via x
              >
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 relative overflow-hidden w-[600px]">
                  
                  <div className="grid grid-cols-12 gap-8">
                    {/* Featured Section (Left) */}
                    <div className="col-span-4 bg-neutral-50 rounded-xl p-6 flex flex-col justify-between">
                      <motion.div
                        key={activeDropdown + "left"}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">
                          {activeDropdown}
                        </h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                          Explore our {activeDropdown?.toLowerCase()} solutions.
                        </p>
                      </motion.div>
                      <Link href={activeLink.href} className="flex items-center gap-2 text-primary-600 font-medium text-sm mt-4 hover:gap-3 transition-all">
                        View all <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Links Grid (Right) */}
                    <div className="col-span-8">
                      <div className="grid grid-cols-1 gap-2">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeDropdown}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="grid grid-cols-1 gap-2"
                          >
                            {activeLink.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                className="group block p-3 rounded-xl hover:bg-neutral-50 transition-all border border-transparent hover:border-neutral-100"
                              >
                                <div className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors mb-0.5 flex items-center gap-2 text-sm">
                                  {subLink.name}
                                  <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-600" />
                                </div>
                                <p className="text-xs text-neutral-500 group-hover:text-neutral-600 line-clamp-1">
                                  {subLink.description}
                                </p>
                              </Link>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-neutral-100 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 font-semibold text-lg text-neutral-900"
                    >
                      {link.name}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-4 mt-2 space-y-3 border-l-2 border-neutral-100">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-neutral-600 text-sm py-1"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-6 border-t border-neutral-100">
                  <Link
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full block text-center py-3 bg-primary-600 text-white rounded-xl font-medium"
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
