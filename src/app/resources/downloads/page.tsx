"use client";

import Link from "next/link";
import {
  Download,
  FileText,
  CheckCircle2,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

export default function DownloadCenterPage() {
  const handleDownload = (docName: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-demo-modal", {
          detail: { intent: "demo", product: `Download Asset: ${docName}` }
        })
      );
    }
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
      desc: "Complete enterprise overview detailing Atlas Computer Technology's 15+ year history, executive leadership, engineering certifications, banking client portfolio, and vendor authorizations.",
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
    <div className="bg-white font-sans min-h-screen text-neutral-900 selection:bg-[#3e7da2] selection:text-white">
      {/* Light Enterprise Hero */}
      <section className="relative pt-24 pb-20 bg-neutral-50 border-b border-neutral-200 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-6">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <Link href="/resources" className="hover:text-neutral-900 transition-colors">Resources</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <span className="text-[#3e7da2] font-semibold">Download Center</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
              <Download className="w-3.5 h-3.5 text-[#3e7da2]" />
              <span>Verified Enterprise Specifications</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
              Enterprise Collateral & Technical Specifications
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              Serving procurement teams, CIOs, and IT directors with verified documentation, official corporate profiles, and architectural blueprints for immediate review.
            </p>
          </div>
        </div>
      </section>

      {/* Assets Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {assets.map((asset) => (
              <div
                key={asset.id}
                id={asset.id}
                className="bg-white border border-neutral-200 p-8 rounded shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-neutral-100">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3e7da2] bg-neutral-50 border border-neutral-200 px-2.5 py-0.5 rounded">
                      {asset.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      {asset.version} • {asset.size}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-snug">
                    {asset.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {asset.desc}
                  </p>

                  <div className="bg-neutral-50 rounded p-4 border border-neutral-200/80 mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
                      Included in Document:
                    </div>
                    <div className="space-y-2">
                      {asset.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-neutral-500 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#3e7da2]" />
                    <span>Official Verified Document ({asset.fileType})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownload(asset.title)}
                    className="px-5 py-2.5 rounded bg-neutral-900 text-white font-bold text-xs uppercase font-mono tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#dde325]" />
                    <span>Request Copy</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFP Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-neutral-50 border border-neutral-200 p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
                Procurement & RFP Support
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Preparing a Commercial Bank or Public Tender?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Contact our Tender Secretariat for complete pre-packaged tender dossiers, audited financial statements, manufacturer authorization letters (MAF), and engineer CVs.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors"
              >
                Contact Tender Secretariat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
