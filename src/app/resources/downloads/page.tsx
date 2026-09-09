"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Download,
  FileText,
  Building2,
  ShieldCheck,
  Server,
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Layers,
  Sparkles,
  Lock,
  Eye
} from "lucide-react";

export default function DownloadCenterPage() {
  const handleDownload = (docName: string) => {
    window.dispatchEvent(
      new CustomEvent("open-demo-modal", {
        detail: { service: `Download Asset: ${docName}` }
      })
    );
  };

  const assets = [
    {
      id: "act-corporate-profile",
      title: "ACT Corporate Profile 2026",
      category: "Corporate Capability Statement",
      fileType: "PDF Document",
      size: "4.8 MB",
      version: "v2026.1",
      badge: "Essential for Procurement",
      desc: "Complete enterprise overview detailing Atlas Computer Technology's 18+ year history, executive leadership, engineering certifications, banking client portfolio, and vendor authorizations.",
      highlights: [
        "Full leadership profiles & technical organizational chart",
        "Comprehensive references across 20+ commercial banks",
        "Authorizations for Oracle, IBM, Lenovo, Nutanix & Red Hat",
        "Tax identification, business licenses & compliance certificates"
      ]
    },
    {
      id: "unicash-brochure",
      title: "Uni-Cash Payment Suite Brochure",
      category: "Product Whitepaper & Brochure",
      fileType: "PDF Document",
      size: "3.2 MB",
      version: "v4.2 Enterprise",
      badge: "Core Payment Solution",
      desc: "Detailed technical and commercial brochure of the Uni-Cash platform, covering Uni-Cash Bank, School & TVET, College/University, Utility, and Hospitality billing modules.",
      highlights: [
        "Core banking integration specs (FlexCube, Finacle, Temenos)",
        "Automated reconciliation engine & zero float architecture",
        "Over-the-counter Pay@Bank cashier interface screenshots",
        "Transaction growth metrics (500K+ monthly collections)"
      ]
    },
    {
      id: "private-cloud-blueprint",
      title: "Sovereign Private Cloud Architecture Blueprint",
      category: "Technical Architecture Guide",
      fileType: "PDF Document",
      size: "3.7 MB",
      version: "v3.0 Sovereign",
      badge: "Infrastructure & Data Center",
      desc: "Architectural blueprint for deploying enterprise OpenStack and Nutanix hyperconverged infrastructure within national borders, fulfilling NBE data sovereignty mandates.",
      highlights: [
        "Multi-site active-active disaster recovery topology (RPO < 5m)",
        "Zero-trust microsegmentation and SDN firewall zoning",
        "NVMe SAN storage fabric performance benchmarks",
        "Local currency CAPEX vs. OPEX total cost of ownership analysis"
      ]
    },
    {
      id: "vib-datasheet",
      title: "Virtual Integrated Banking (VIB) Datasheet",
      category: "Solution Datasheet",
      fileType: "PDF Document",
      size: "2.1 MB",
      version: "v2.5 Retail & Corporate",
      badge: "Digital Banking",
      desc: "Product specification sheet covering retail and corporate omnichannel mobile/web banking middleware, corporate batch payouts, biometric authentication, and open APIs.",
      highlights: [
        "Microservices architecture with 99.99% high availability",
        "Dual-approval corporate treasury workflows & bulk payroll",
        "ISO 20022 and RESTful Open Banking API gateway",
        "FIDO-certified biometric multi-factor authentication"
      ]
    },
    {
      id: "merchant-pay-specs",
      title: "Merchant Pay & EMVCo QR Technical Specs",
      category: "Product Datasheet",
      fileType: "PDF Document",
      size: "1.8 MB",
      version: "v1.4",
      badge: "Merchant Acquiring",
      desc: "Specification sheet for acquiring banks and merchant aggregators detailing EthSwitch interoperable dynamic QR generation, smart Android POS firmware, and multi-branch consoles.",
      highlights: [
        "Interoperable EMVCo QR code payload specification",
        "Smart POS terminal hardware compatibility list",
        "Multi-cashier shift reconciliation and void audit trails",
        "Instant settlement direct to commercial bank accounts"
      ]
    },
    {
      id: "managed-services-sla",
      title: "Enterprise Managed Services & SLA Framework",
      category: "Service Level Specification",
      fileType: "PDF Document",
      size: "1.5 MB",
      version: "v2026",
      badge: "Support Governance",
      desc: "Official framework describing ACT's Tier-1 through Tier-4 engineering escalation, P1 emergency incident response windows, 24/7 NOC telemetries, and preventative maintenance schedules.",
      highlights: [
        "Guaranteed 15-minute response SLA for critical P1 outages",
        "Local spare parts depot and 2-hour on-site dispatch",
        "Quarterly health checks, firmware patching, and disaster recovery drills",
        "Dedicated Named Enterprise Support Engineer (ESE) assignments"
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(62,125,162,0.3),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dde325]/20 border border-[#dde325]/40 text-[#dde325] text-xs font-semibold uppercase tracking-wider mb-6">
              <Download className="w-4 h-4" />
              Official Download Center
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Enterprise Collateral & <span className="text-[#dde325]">Technical Specifications</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Serving procurement teams, CIOs, and IT directors with verified documentation, official corporate profiles, and architectural blueprints for immediate review.
            </p>
          </div>
        </div>
      </section>

      {/* Assets Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {assets.map((asset, i) => (
              <motion.div
                key={asset.id}
                id={asset.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3e7da2] bg-[#3e7da2]/10 px-3 py-1 rounded-lg">
                      {asset.category}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                      {asset.version} • {asset.size}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-snug">
                    {asset.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {asset.desc}
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Included in Document:
                    </div>
                    <div className="space-y-2">
                      {asset.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#3e7da2]" />
                    Official Verified Document ({asset.fileType})
                  </div>
                  <button
                    onClick={() => handleDownload(asset.title)}
                    className="px-6 py-3 rounded-xl bg-[#3e7da2] text-white font-bold hover:bg-[#326685] transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Request Instant Copy
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RFP Support Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-[#3e7da2]/90 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#dde325] mb-2 block">
                Custom RFP Packs
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-3">
                Preparing a Public or Bank Tender?
              </h2>
              <p className="text-sm text-slate-200 leading-relaxed">
                Contact our Bid & Tender Secretariat for complete pre-packaged tender dossiers, audited balance sheets, manufacturer authorization letters (MAF), and engineer CVs.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-[#dde325] text-slate-950 font-bold hover:bg-[#c8ce20] transition-all duration-200 shrink-0 shadow-lg text-sm"
            >
              Contact Tender Secretariat
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
