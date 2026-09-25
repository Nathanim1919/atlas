"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Server, 
  Code2, 
  Cloud, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Building2, 
  CreditCard,
  FileText,
  LifeBuoy,
  Store,
  Compass,
  Download,
  Newspaper,
  Users,
  Handshake,
  Briefcase
} from "lucide-react";
import Logo from "../../public/final logo 3-02-01.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerDemo = (type: string = "General") => {
    window.dispatchEvent(
      new CustomEvent("open-demo-modal", {
        detail: { service: type }
      })
    );
  };

  const toggleMobileSection = (name: string) => {
    setMobileExpandedSection(prev => prev === name ? null : name);
  };

  return (
    <>
      {/* Top Bar - Steel Blue Background with Highly Legible White Phone & Info */}
      <div 
        style={{ backgroundColor: "#3e7da2" }} 
        className="bg-[#3e7da2] text-white py-2 hidden lg:block border-b border-[#306689] relative z-50"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs">
          {/* Left: Contact Info - Single Phone Number +25111-5-32-91-39 */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-white shrink-0" />
              <a 
                href="tel:+251115329139" 
                className="font-bold text-white hover:text-[#dde325] transition-colors tracking-wide text-xs sm:text-sm"
              >
                +25111-5-32-91-39
              </a>
            </div>

            <span className="text-white/40">|</span>

            <a 
              href="mailto:info@act.com.et" 
              className="flex items-center gap-1.5 text-white hover:text-[#dde325] font-medium transition-colors"
            >
              <Mail size={14} className="text-white shrink-0" />
              <span>info@act.com.et</span>
            </a>

            <span className="text-white/40">|</span>

            <div className="flex items-center gap-1.5 text-white/90">
              <MapPin size={13} className="text-white/80 shrink-0" />
              <span>Airport Rd, Aberus Complex 9th Fl, Addis Ababa</span>
            </div>
          </div>

          {/* Right: Support & Portal CTA */}
          <div className="flex items-center gap-3">
            <Link 
              href="/support" 
              className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold transition-all border border-white/30 shadow-xs"
            >
              <LifeBuoy size={13} className="text-[#dde325]" />
              <span>Customer Portal | Support Ticket</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-slate-200"
            : "bg-white border-b border-slate-200"
        }`}
      >
        <nav 
          ref={navRef} 
          className="max-w-7xl mx-auto px-6 relative" 
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-20 shrink-0">
              <Image
                src={Logo}
                alt="Atlas Computer Technology Logo"
                width={200}
                height={60}
                priority
                className="object-contain w-auto h-11"
              />
            </Link>

            {/* Streamlined Desktop Navigation (5 Clear Pillars) */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Pillar 1: Solutions (Mega Menu) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
                  className={`px-3.5 py-2 rounded-lg font-semibold text-[14px] transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeDropdown === "solutions"
                      ? "text-[#3e7da2] bg-slate-100/80"
                      : "text-slate-700 hover:text-[#3e7da2] hover:bg-slate-50"
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === "solutions" ? "rotate-180 text-[#3e7da2]" : "text-slate-400"
                    }`} 
                  />
                </button>
              </div>

              {/* Pillar 2: Products */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("products")}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
                  className={`px-3.5 py-2 rounded-lg font-semibold text-[14px] transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeDropdown === "products"
                      ? "text-[#3e7da2] bg-slate-100/80"
                      : "text-slate-700 hover:text-[#3e7da2] hover:bg-slate-50"
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === "products" ? "rotate-180 text-[#3e7da2]" : "text-slate-400"
                    }`} 
                  />
                </button>
              </div>

              {/* Pillar 3: Resources (merged with Case Studies) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("resources")}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                  className={`px-3.5 py-2 rounded-lg font-semibold text-[14px] transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeDropdown === "resources"
                      ? "text-[#3e7da2] bg-slate-100/80"
                      : "text-slate-700 hover:text-[#3e7da2] hover:bg-slate-50"
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === "resources" ? "rotate-180 text-[#3e7da2]" : "text-slate-400"
                    }`} 
                  />
                </button>
              </div>

              {/* Pillar 4: Company */}

              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("company")}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "company" ? null : "company")}
                  className={`px-3.5 py-2 rounded-lg font-semibold text-[14px] transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeDropdown === "company"
                      ? "text-[#3e7da2] bg-slate-100/80"
                      : "text-slate-700 hover:text-[#3e7da2] hover:bg-slate-50"
                  }`}
                >
                  <span>Company</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-200 ${
                      activeDropdown === "company" ? "rotate-180 text-[#3e7da2]" : "text-slate-400"
                    }`} 
                  />
                </button>
              </div>
            </div>

            {/* Right Action CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/support"
                className="px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#3e7da2] flex items-center gap-1.5 transition-colors"
              >
                <LifeBuoy size={14} className="text-[#3e7da2]" />
                <span>Support</span>
              </Link>

              <button
                onClick={() => triggerDemo("Navbar Request a Demo")}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-[#dde325] hover:bg-[#c8ce20] transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 transition-colors text-slate-800 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Dropdown Mega-Menus */}
          <AnimatePresence>
            {activeDropdown === "solutions" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden lg:block z-50 w-[780px]"
              >
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4">
                  <div className="grid grid-cols-2 gap-x-6">
                    {/* Left Column: Infrastructure & Cloud */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#3e7da2] mb-2 pb-2 border-b border-slate-100 flex items-center gap-1.5">
                        <Server size={11} />
                        Infrastructure & Cloud
                      </div>
                      <div className="space-y-0.5">
                        {[
                          { label: "Private Cloud (OpenStack & Nutanix)", href: "/solutions/private-cloud" },
                          { label: "System Engineering", href: "/solutions/system-engineering" },
                          { label: "Cloud Solutions", href: "/solutions/cloud-solutions" },
                          { label: "24/7 Managed Services & SLAs", href: "/solutions/managed-services" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <span className="text-[13px] text-slate-700 group-hover:text-[#3e7da2] font-medium transition-colors">{item.label}</span>
                            <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Software & Advisory */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 pb-2 border-b border-slate-100 flex items-center gap-1.5">
                        <Code2 size={11} />
                        Software & Advisory
                      </div>
                      <div className="space-y-0.5">
                        {[
                          { label: "Enterprise Software Development", href: "/solutions/software-development" },
                          { label: "AI & Intelligent Automation", href: "/solutions/ai-automation" },
                          { label: "Consultancy & Corporate Training", href: "/solutions/consultancy-training" },
                          { label: "How We Work", href: "/how-we-work" },
                        ].map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <span className="text-[13px] text-slate-700 group-hover:text-[#3e7da2] font-medium transition-colors">{item.label}</span>
                            <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Dropdown 2: Products */}
            {activeDropdown === "products" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-[30%] -translate-x-1/2 pt-2 hidden lg:block z-50 w-[460px]"
              >
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-2">Products</div>
                  <div className="space-y-0.5">
                    {[
                      { label: "Uni-Cash (Pay@Bank)", href: "/products/unicash", icon: CreditCard },
                      { label: "Virtual Integrated Banking (VIB)", href: "/products/vib", icon: Building2 },
                      { label: "Merchant Pay & Smart POS", href: "/products/merchant-pay", icon: Store },
                    ].map(({ label, href, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <Icon size={15} className="text-[#3e7da2] shrink-0" />
                        <span className="text-[13px] text-slate-700 group-hover:text-[#3e7da2] font-medium transition-colors flex-1">{label}</span>
                        <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Dropdown 3: Resources (includes Case Studies) */}
            {activeDropdown === "resources" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-[55%] -translate-x-1/2 pt-2 hidden lg:block z-50 w-[420px]"
              >
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4">
                  <div className="space-y-0.5">
                    {[
                      { label: "Case Studies", href: "/case-studies", icon: Layers },
                      { label: "Knowledge & Resources", href: "/resources", icon: FileText },
                      { label: "Download Center", href: "/resources/downloads", icon: Download },
                      { label: "News & Insights", href: "/news", icon: Newspaper },
                    ].map(({ label, href, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <Icon size={15} className="text-[#3e7da2] shrink-0" />
                        <span className="text-[13px] text-slate-700 group-hover:text-[#3e7da2] font-medium transition-colors flex-1">{label}</span>
                        <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Dropdown 4: Company */}
            {activeDropdown === "company" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-16 pt-2 hidden lg:block z-50 w-[380px]"
              >
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4">
                  <div className="space-y-0.5">
                    {[
                      { label: "About ACT", href: "/#about", icon: Building2 },
                      { label: "Leadership", href: "/#team", icon: Users },
                      { label: "Technology Partners", href: "/#partners", icon: Handshake },
                      { label: "Careers", href: "/careers", icon: Briefcase },
                    ].map(({ label, href, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <Icon size={15} className="text-[#3e7da2] shrink-0" />
                        <span className="text-[13px] text-slate-700 group-hover:text-[#3e7da2] font-medium transition-colors flex-1">{label}</span>
                        <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity shrink-0" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <Link
                      href="/#contact"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#3e7da2] text-white hover:bg-[#306689] transition-colors"
                    >
                      <span className="text-[13px] font-semibold">Contact Us</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-200 overflow-hidden max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
                {/* Mobile Direct Support Button */}
                <Link
                  href="/support"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  <div className="flex items-center gap-2">
                    <LifeBuoy size={16} className="text-[#dde325]" />
                    <span>Customer Portal & Support Tickets</span>
                  </div>
                  <ArrowRight size={14} className="text-[#dde325]" />
                </Link>

                {/* Section 1: Solutions Accordion */}
                <div className="border-b border-slate-100 pb-3">
                  <button
                    onClick={() => toggleMobileSection("solutions")}
                    className="w-full flex items-center justify-between py-2 text-base font-bold text-slate-900"
                  >
                    <span>Solutions</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileExpandedSection === "solutions" ? "rotate-180 text-[#3e7da2]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {mobileExpandedSection === "solutions" && (
                    <div className="pl-3 py-2 space-y-2 border-l-2 border-[#3e7da2]/30 text-xs">
                      <Link
                        href="/solutions/private-cloud"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Private Cloud (OpenStack & Nutanix)
                      </Link>
                      <Link
                        href="/solutions/system-engineering"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        System Engineering & Oracle DB
                      </Link>
                      <Link
                        href="/solutions/cloud-solutions"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Cloud Solutions & DRaaS
                      </Link>
                      <Link
                        href="/solutions/managed-services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        24/7 Managed Services & SLAs
                      </Link>
                      <Link
                        href="/solutions/software-development"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Enterprise Software Development
                      </Link>
                      <Link
                        href="/solutions/ai-automation"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        AI & Automation
                      </Link>
                      <Link
                        href="/solutions/consultancy-training"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Consultancy & Training
                      </Link>
                      <Link
                        href="/how-we-work"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-bold text-[#3e7da2]"
                      >
                        How We Work (6-Stage Methodology) →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Section 2: Products Accordion */}
                <div className="border-b border-slate-100 pb-3">
                  <button
                    onClick={() => toggleMobileSection("products")}
                    className="w-full flex items-center justify-between py-2 text-base font-bold text-slate-900"
                  >
                    <span>Products</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileExpandedSection === "products" ? "rotate-180 text-[#3e7da2]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {mobileExpandedSection === "products" && (
                    <div className="pl-3 py-2 space-y-2 border-l-2 border-[#3e7da2]/30 text-xs">
                      <Link
                        href="/products/unicash"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Uni-Cash (Pay@Bank)
                      </Link>
                      <Link
                        href="/products/vib"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Virtual Integrated Banking (VIB)
                      </Link>
                      <Link
                        href="/products/merchant-pay"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Merchant Pay & Smart POS
                      </Link>
                    </div>
                  )}
                </div>



                {/* Section 4: Resources Accordion */}
                <div className="border-b border-slate-100 pb-3">
                  <button
                    onClick={() => toggleMobileSection("resources")}
                    className="w-full flex items-center justify-between py-2 text-base font-bold text-slate-900"
                  >
                    <span>Resources & Downloads</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileExpandedSection === "resources" ? "rotate-180 text-[#3e7da2]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {mobileExpandedSection === "resources" && (
                    <div className="pl-3 py-2 space-y-2 border-l-2 border-[#3e7da2]/30 text-xs">
                      <Link
                        href="/case-studies"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Case Studies
                      </Link>
                      <Link
                        href="/resources"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Knowledge Center & Whitepapers
                      </Link>
                      <Link
                        href="/resources/downloads"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Download Center (Company Profile & Brochures)
                      </Link>
                      <Link
                        href="/news"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        News, Articles & Insights
                      </Link>
                    </div>
                  )}
                </div>

                {/* Section 5: Company Accordion */}
                <div className="border-b border-slate-100 pb-3">
                  <button
                    onClick={() => toggleMobileSection("company")}
                    className="w-full flex items-center justify-between py-2 text-base font-bold text-slate-900"
                  >
                    <span>Company</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        mobileExpandedSection === "company" ? "rotate-180 text-[#3e7da2]" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {mobileExpandedSection === "company" && (
                    <div className="pl-3 py-2 space-y-2 border-l-2 border-[#3e7da2]/30 text-xs">
                      <Link
                        href="/#about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        About ACT
                      </Link>
                      <Link
                        href="/#team"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Leadership Team
                      </Link>
                      <Link
                        href="/#partners"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Technology Partners
                      </Link>
                      <Link
                        href="/careers"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Careers at ACT
                      </Link>
                      <Link
                        href="/#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-1 font-semibold text-slate-700 hover:text-[#3e7da2]"
                      >
                        Contact & Locations
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Call-To-Action & Direct Phone */}
                <div className="pt-3 space-y-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      triggerDemo("Mobile Request a Demo");
                    }}
                    className="w-full py-3.5 bg-[#dde325] text-slate-950 rounded-xl font-bold text-sm shadow-md text-center cursor-pointer"
                  >
                    Request a Demo
                  </button>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 text-center">
                    <div className="font-bold text-slate-800">Direct Support Line:</div>
                    <div className="flex items-center justify-center font-semibold text-[#3e7da2]">
                      <a href="tel:+251115329139">+25111-5-32-91-39</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
