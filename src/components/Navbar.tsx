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
import Logo from "../../public/logo.png";

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

              {/* Pillar 3: Case Studies (Direct Link) */}
              <Link
                href="/case-studies"
                onMouseEnter={() => setActiveDropdown(null)}
                className="px-3.5 py-2 rounded-lg font-semibold text-[14px] text-slate-700 hover:text-[#3e7da2] hover:bg-slate-50 transition-all flex items-center gap-1"
              >
                <span>Case Studies</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 ml-0.5">
                  EthSwitch
                </span>
              </Link>

              {/* Pillar 4: Resources */}
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

              {/* Pillar 5: Company */}
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
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Left Column: Infrastructure & Cloud */}
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#3e7da2] mb-3 flex items-center gap-1.5 pb-2 border-b border-slate-100">
                        <Server size={13} />
                        Infrastructure & Cloud
                      </div>
                      <div className="space-y-2">
                        <Link
                          href="/solutions/private-cloud"
                          onClick={() => setActiveDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center justify-between">
                            <span>Private Cloud (OpenStack & Nutanix)</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Sovereign on-premise cloud infrastructure for banks & government.
                          </p>
                        </Link>

                        <Link
                          href="/solutions/system-engineering"
                          onClick={() => setActiveDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center justify-between">
                            <span>System Engineering</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            High-density servers, Oracle RAC database clusters & SAN storage.
                          </p>
                        </Link>

                        <Link
                          href="/solutions/cloud-solutions"
                          onClick={() => setActiveDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center justify-between">
                            <span>Cloud Solutions</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Hybrid cloud integration, workload migration & automated DRaaS.
                          </p>
                        </Link>

                        <Link
                          href="/solutions/managed-services"
                          onClick={() => setActiveDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center justify-between">
                            <span>24/7 Managed Services & SLAs</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Continuous NOC telemetries, spare parts depot & 15-min P1 response.
                          </p>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Software & Strategy */}
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-1.5 pb-2 border-b border-slate-100">
                        <Code2 size={13} />
                        Software, AI & Advisory
                      </div>
                      <div className="space-y-2">
                        <Link
                          href="/solutions/software-development"
                          onClick={() => setActiveDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center justify-between">
                            <span>Enterprise Software Development</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            360° product engineering, core banking connectors & mobile apps.
                          </p>
                        </Link>

                        <Link
                          href="/solutions/ai-automation"
                          onClick={() => setActiveDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center justify-between">
                            <span>AI & Intelligent Automation</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Sovereign on-premise AI, document processing & AML fraud detection.
                          </p>
                        </Link>

                        <Link
                          href="/solutions/consultancy-training"
                          onClick={() => setActiveDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                        >
                          <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center justify-between">
                            <span>Consultancy & Corporate Training</span>
                            <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 text-[#3e7da2] transition-opacity" />
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Enterprise IT roadmaps, security compliance & staff certifications.
                          </p>
                        </Link>

                        <Link
                          href="/how-we-work"
                          onClick={() => setActiveDropdown(null)}
                          className="group block p-2.5 rounded-xl bg-slate-50 hover:bg-[#3e7da2]/10 transition-colors border border-slate-100 hover:border-[#3e7da2]/20"
                        >
                          <div className="text-xs font-bold text-[#3e7da2] flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                              <Compass size={13} />
                              How We Work: 6-Stage Methodology
                            </span>
                            <ArrowRight size={12} />
                          </div>
                          <p className="text-[11px] text-slate-600 mt-0.5">
                            Discover → Design → Develop → Test → Deploy → Support
                          </p>
                        </Link>
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
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 space-y-2">
                  <Link
                    href="/products/unicash"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#3e7da2]/10 text-[#3e7da2] flex items-center justify-center shrink-0 mt-0.5">
                        <CreditCard size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center gap-2">
                          <span>Uni-Cash (Pay@Bank)</span>
                          <span className="text-[10px] font-semibold px-2 py-0.2 rounded bg-[#dde325]/40 text-slate-900">
                            500K+ monthly bills
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                          Unified biller ecosystem connecting universities, schools, and utilities to 20+ commercial banks.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/products/vib"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2]">
                          Virtual Integrated Banking (VIB)
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                          Omnichannel internet banking, mobile app, and corporate batch payroll disbursement suite.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/products/merchant-pay"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Store size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2]">
                          Merchant Pay & Smart POS
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                          Interoperable EMVCo dynamic QR code generation, Android Smart POS & multi-cashier management.
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Dropdown 3: Resources */}
            {activeDropdown === "resources" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-[55%] -translate-x-1/2 pt-2 hidden lg:block z-50 w-[420px]"
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 space-y-2">
                  <Link
                    href="/resources"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#3e7da2]/10 text-[#3e7da2] flex items-center justify-center shrink-0 mt-0.5">
                        <FileText size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2]">
                          Knowledge & Resources Center
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">
                          Technical whitepapers, sovereign cloud blueprints, and architecture guides.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/resources/downloads"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Download size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center gap-1.5">
                          <span>Official Download Center</span>
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                            PDF
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">
                          ACT Corporate Profile 2026, UniCash Brochure & RFP specifications.
                        </p>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/news"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Newspaper size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2]">
                          News, Articles & Insights
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">
                          Company milestones, product announcements, and fintech industry analysis.
                        </p>
                      </div>
                    </div>
                  </Link>
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
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 space-y-2">
                  <Link
                    href="/#about"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center gap-2">
                      <Building2 size={14} className="text-[#3e7da2]" />
                      <span>About Atlas Computer Technology</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 pl-5">
                      18+ years powering national digital transformation.
                    </p>
                  </Link>

                  <Link
                    href="/#team"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center gap-2">
                      <Users size={14} className="text-[#3e7da2]" />
                      <span>Executive Leadership</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 pl-5">
                      Managing Directors Merid Tilahun & Birhan Legi.
                    </p>
                  </Link>

                  <Link
                    href="/#partners"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center gap-2">
                      <Handshake size={14} className="text-[#3e7da2]" />
                      <span>Global OEM Partners</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 pl-5">
                      Oracle, IBM, Lenovo, Nutanix, Red Hat, SUSE.
                    </p>
                  </Link>

                  <Link
                    href="/careers"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#3e7da2] flex items-center gap-2">
                      <Briefcase size={14} className="text-[#3e7da2]" />
                      <span>Careers at ACT</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 pl-5">
                      Join Ethiopia's top enterprise engineering team.
                    </p>
                  </Link>

                  <Link
                    href="/#contact"
                    onClick={() => setActiveDropdown(null)}
                    className="group block p-2.5 rounded-xl bg-slate-50 hover:bg-[#3e7da2]/10 transition-colors text-xs font-bold text-[#3e7da2] flex items-center justify-between"
                  >
                    <span>Contact & Office Locations</span>
                    <ArrowRight size={12} />
                  </Link>
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
                        Uni-Cash (Pay@Bank) — 500K+ monthly bills
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

                {/* Section 3: Case Studies Direct Link */}
                <div className="border-b border-slate-100 pb-3">
                  <Link
                    href="/case-studies"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-bold text-slate-900 hover:text-[#3e7da2]"
                  >
                    <span>Case Studies (EthSwitch & 7 Banks)</span>
                    <ArrowRight size={14} className="text-[#3e7da2]" />
                  </Link>
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
                        Download Center (Profile 2026 & Brochures)
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
