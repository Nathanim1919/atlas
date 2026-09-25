"use client";

import { useState, useEffect } from "react";
import { 
  X, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  ChevronDown
} from "lucide-react";
import { toast } from "sonner";

export type DemoIntent = "demo" | "expert" | "proposal" | "brochure";

interface DemoModalDetail {
  intent?: DemoIntent;
  product?: string;
}

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<DemoIntent>("demo");
  const [product, setProduct] = useState("unicash");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    preferredDate: "",
    notes: ""
  });

  useEffect(() => {
    const handleOpenEvent = (e: CustomEvent<DemoModalDetail>) => {
      if (e.detail?.intent) setIntent(e.detail.intent);
      if (e.detail?.product) setProduct(e.detail.product);
      setIsSuccess(false);
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("open-demo-modal" as any, handleOpenEvent as any);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("open-demo-modal" as any, handleOpenEvent as any);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          organization: formData.organization,
          email: formData.email,
          phone: formData.phone,
          intent,
          product,
          preferredDate: formData.preferredDate || undefined,
          notes: formData.notes || undefined,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to submit request.");
      }

      toast.success("Request Received Successfully", {
        description: `Thank you, ${formData.fullName}. Our solutions team will contact ${formData.organization} shortly.`,
      });
      setIsSuccess(true);
    } catch (err: any) {
      console.error("Demo submit error:", err);
      toast.error("Submission Failed", {
        description: err.message || "Please check your network connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const productOptions = [
    { id: "unicash", name: "Uni-Cash (Pay@Bank Ecosystem)" },
    { id: "vib", name: "Virtual Integrated Banking (VIB)" },
    { id: "merchant", name: "Merchant Pay & Smart POS" },
    { id: "private-cloud", name: "Private Cloud (OpenStack & HCI)" },
    { id: "system-engineering", name: "System Engineering & Infrastructure" },
    { id: "managed-services", name: "Managed Services & 24/7 SLAs" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
      {/* Backdrop */}
      <div 
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-neutral-950/60 transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white text-neutral-900 rounded-lg border border-neutral-200 shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-neutral-100 flex items-start justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#3e7da2] font-semibold mb-1">
              Enterprise Consultation
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight">
              {intent === "demo" && "Schedule a Product Demo"}
              {intent === "expert" && "Consult an Enterprise Architect"}
              {intent === "proposal" && "Request a Project Proposal"}
              {intent === "brochure" && "Download Corporate Profile"}
            </h3>
            <p className="text-neutral-500 text-xs mt-0.5">
              Direct technical engagement with our engineering leadership in Addis Ababa.
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded hover:bg-neutral-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Intent Selector Tabs */}
        <div className="px-6 pt-3 pb-0 bg-neutral-50/80 border-b border-neutral-100 flex gap-6 text-xs font-medium">
          <button
            type="button"
            onClick={() => setIntent("demo")}
            className={`pb-2.5 border-b-2 transition-colors ${
              intent === "demo"
                ? "border-[#3e7da2] text-neutral-900 font-semibold"
                : "border-transparent text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Schedule Demo
          </button>
          <button
            type="button"
            onClick={() => setIntent("expert")}
            className={`pb-2.5 border-b-2 transition-colors ${
              intent === "expert"
                ? "border-[#3e7da2] text-neutral-900 font-semibold"
                : "border-transparent text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Talk to Architect
          </button>
          <button
            type="button"
            onClick={() => setIntent("proposal")}
            className={`pb-2.5 border-b-2 transition-colors ${
              intent === "proposal"
                ? "border-[#3e7da2] text-neutral-900 font-semibold"
                : "border-transparent text-neutral-500 hover:text-neutral-800"
            }`}
          >
            Request Proposal
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900">
                Request Submitted Successfully
              </h4>
              <p className="text-neutral-600 text-xs max-w-sm mx-auto leading-relaxed">
                Our solutions engineering team will review your specs and contact your organization within 4 business hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 bg-neutral-900 text-white rounded text-xs font-medium hover:bg-neutral-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Product Selector Dropdown */}
              <div>
                <label className="block text-neutral-700 font-medium mb-1.5">
                  Solution or Product Area
                </label>
                <div className="relative">
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full appearance-none bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-neutral-900 focus:outline-none focus:bg-white focus:border-[#3e7da2] text-xs transition-colors pr-8"
                  >
                    {productOptions.map((opt) => (
                      <option key={opt.id} value={opt.id} className="bg-white text-neutral-900">
                        {opt.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                </div>
              </div>

              {/* Form Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-700 font-medium mb-1">
                    Full Name <span className="text-[#3e7da2]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Abebe Kebede"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#3e7da2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-medium mb-1">
                    Organization / Institution <span className="text-[#3e7da2]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Commercial Bank of Ethiopia"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#3e7da2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-medium mb-1">
                    Corporate Email <span className="text-[#3e7da2]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com.et"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#3e7da2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-medium mb-1">
                    Phone Number <span className="text-[#3e7da2]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+251 91 123 4567"
                    className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#3e7da2] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-700 font-medium mb-1">
                  Technical Requirements or Timeline Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Provide scope overview, user scale, or target deployment date..."
                  className="w-full bg-neutral-50 border border-neutral-200 rounded p-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#3e7da2] transition-colors resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-neutral-100">
                <span className="text-[11px] text-neutral-500 font-mono">
                  Strict NDA & Governance Enforced
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded transition-colors flex items-center gap-2 text-xs disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Global helper for opening the modal anywhere in code
export function openDemoModal(detail?: DemoModalDetail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-demo-modal", { detail }));
  }
}
