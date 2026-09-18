"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Sparkles, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  Calendar, 
  CheckCircle2, 
  Send, 
  ArrowRight,
  ShieldCheck,
  Server,
  CreditCard,
  Cloud
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

    window.addEventListener("open-demo-modal" as any, handleOpenEvent as any);
    return () => window.removeEventListener("open-demo-modal" as any, handleOpenEvent as any);
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

      toast.success("Request Received Successfully!", {
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
    { id: "unicash", name: "Uni-Cash (Pay@Bank Ecosystem)", icon: CreditCard },
    { id: "vib", name: "Virtual Integrated Banking (VIB)", icon: Building2 },
    { id: "merchant", name: "Merchant Pay & Smart POS", icon: Sparkles },
    { id: "private-cloud", name: "Private Cloud (OpenStack & HCI)", icon: Cloud },
    { id: "system-engineering", name: "System Engineering & Core Infrastructure", icon: Server },
    { id: "managed-services", name: "Managed Services & 24/7 SLAs", icon: ShieldCheck },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden z-10 my-8"
          >
            {/* Top Accent Header */}
            <div className="bg-(--steel-blue) text-white p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles size={13} />
                    Atlas Direct Engagement
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white">
                    {intent === "demo" && "Schedule a Live Product Demo"}
                    {intent === "expert" && "Consult with an Enterprise Architect"}
                    {intent === "proposal" && "Request a Project Proposal"}
                    {intent === "brochure" && "Download Corporate Profile & Materials"}
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm mt-1 max-w-md">
                    Connect directly with our engineering and product teams in Addis Ababa.
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Intent Switcher Tabs */}
              <div className="grid grid-cols-3 gap-2 mt-6 bg-primary-950/30 p-1.5 rounded-2xl text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setIntent("demo")}
                  className={`py-2 px-3 rounded-xl transition-all ${
                    intent === "demo" 
                      ? "bg-white text-(--steel-blue) shadow-sm" 
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Request Demo
                </button>
                <button
                  type="button"
                  onClick={() => setIntent("expert")}
                  className={`py-2 px-3 rounded-xl transition-all ${
                    intent === "expert" 
                      ? "bg-white text-(--steel-blue) shadow-sm" 
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Talk to Expert
                </button>
                <button
                  type="button"
                  onClick={() => setIntent("proposal")}
                  className={`py-2 px-3 rounded-xl transition-all ${
                    intent === "proposal" 
                      ? "bg-white text-(--steel-blue) shadow-sm" 
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Request Proposal
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {isSuccess ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-neutral-900 font-display">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                    Our technical lead will review your requirements and contact you within <strong>4 business hours</strong> to finalize the demo details.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {/* Product Selector */}
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1.5">
                      Target Solution or Product
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {productOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setProduct(opt.id)}
                          className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                            product === opt.id
                              ? "border-(--steel-blue) bg-primary-50 text-(--steel-blue) font-bold shadow-xs"
                              : "border-neutral-200 hover:border-neutral-300 text-neutral-700"
                          }`}
                        >
                          <opt.icon size={16} className={product === opt.id ? "text-(--steel-blue)" : "text-neutral-400"} />
                          <span className="truncate">{opt.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Abebe Kebede"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-(--steel-blue) focus:bg-white text-xs text-neutral-900 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">
                        Organization / Bank *
                      </label>
                      <div className="relative">
                        <Building2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Commercial Bank of Ethiopia"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-(--steel-blue) focus:bg-white text-xs text-neutral-900 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com.et"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-(--steel-blue) focus:bg-white text-xs text-neutral-900 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-neutral-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+251 91 123 4567"
                          className="w-full pl-9 pr-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-(--steel-blue) focus:bg-white text-xs text-neutral-900 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Project Notes or Specific Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share details on your infrastructure environment, user scale, or expected timeline..."
                      className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-(--steel-blue) focus:bg-white text-xs text-neutral-900 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500">
                      🔒 Enterprise NDAs & banking secrecy respected.
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-(--steel-blue) hover:bg-primary-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-xs"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send size={13} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Global helper for opening the modal anywhere in code
export function openDemoModal(detail?: DemoModalDetail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-demo-modal", { detail }));
  }
}
