"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  Loader2,
  ShieldCheck,
  Building2,
  MapPin,
  FileText,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";

export default function SupportPortalPage() {
  const [priority, setPriority] = useState<"P1" | "P2" | "P3" | "P4">("P2");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [formData, setFormData] = useState({
    institution: "",
    contactName: "",
    email: "",
    phone: "",
    system: "Uni-Cash Payment Gateway",
    subject: "",
    description: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/support-tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          institution: formData.institution,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          priority,
          system: formData.system,
          subject: formData.subject,
          description: formData.description,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to log support ticket.");
      }

      setTicketId(result.data.ticketNumber);
      setFormSubmitted(true);
      toast.success("Support Ticket Dispatched", {
        description: `Ticket #${result.data.ticketNumber} assigned to Tier-1 NOC Engineering.`,
      });
    } catch (err: any) {
      console.error("Support ticket error:", err);
      toast.error("Ticket Dispatch Failed", {
        description: err.message || "Please call emergency hotline +25111-5-32-91-39 immediately.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const slaTiers = [
    {
      level: "P1",
      name: "Critical Outage",
      time: "15 Min",
      desc: "Complete production shutdown, core banking gateway downtime, or switch failure."
    },
    {
      level: "P2",
      name: "Major Incident",
      time: "1 Hour",
      desc: "Severe degradation affecting multiple branch operations or non-redundant hardware fault."
    },
    {
      level: "P3",
      name: "Minor Incident",
      time: "4 Hours",
      desc: "Partial system anomaly with active workaround; batch report delay."
    },
    {
      level: "P4",
      name: "Service Request",
      time: "Same Day",
      desc: "Routine configuration changes, patch consultations, or technical documentation."
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-24 pb-20">
      
      {/* Header Section */}
      <section className="border-b border-neutral-200 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#3e7da2] font-semibold mb-2">
                NOC Operations & Incident Dispatch
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                Enterprise Support Portal
              </h1>
            </div>
            <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
              Proactive 24/7 technical support, rapid SLA response, and Tier-1 engineering dispatch for Ethiopian financial institutions and enterprise networks.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-neutral-100">
            <div className="p-4 bg-neutral-50 rounded border border-neutral-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#3e7da2]/10 text-[#3e7da2] flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">24/7 Hotline</div>
                <a href="tel:+251115329139" className="text-sm font-semibold text-neutral-900 hover:text-[#3e7da2] transition-colors">
                  +25111-5-32-91-39
                </a>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 rounded border border-neutral-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#3e7da2]/10 text-[#3e7da2] flex items-center justify-center shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Coverage Standard</div>
                <div className="text-sm font-semibold text-neutral-900">24/7/365 On-Call NOC</div>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 rounded border border-neutral-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#3e7da2]/10 text-[#3e7da2] flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">Field Dispatch SLA</div>
                <div className="text-sm font-semibold text-neutral-900">&lt; 2 Hours (Addis Ababa)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-200 rounded-lg p-6 sm:p-8 bg-white shadow-xs">
              <div className="border-b border-neutral-100 pb-4 mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">
                  Submit Support Ticket
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  For contracted banking and corporate clients. Dispatched directly to on-duty engineers.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Ticket Successfully Logged
                  </h3>
                  <div className="inline-block bg-neutral-100 px-3 py-1.5 rounded border border-neutral-200 font-mono text-xs font-semibold text-neutral-800">
                    Reference #{ticketId}
                  </div>
                  <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    Our Tier-1 NOC dispatch team has received your request. An assigned engineer will establish contact according to your {priority} SLA response window.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          institution: "",
                          contactName: "",
                          email: "",
                          phone: "",
                          system: "Uni-Cash Payment Gateway",
                          subject: "",
                          description: ""
                        });
                      }}
                      className="px-5 py-2 bg-neutral-900 text-white rounded text-xs font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      Submit Another Ticket
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  {/* Priority Selector */}
                  <div>
                    <label className="block font-medium text-neutral-700 mb-2">
                      SLA Priority Level
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(["P1", "P2", "P3", "P4"] as const).map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setPriority(lvl)}
                          className={`p-2.5 rounded border text-left transition-colors ${
                            priority === lvl
                              ? "border-[#3e7da2] bg-blue-50/50 text-[#3e7da2] font-semibold"
                              : "border-neutral-200 hover:border-neutral-300 text-neutral-700 bg-white"
                          }`}
                        >
                          <div className="font-mono text-xs font-bold">{lvl} Priority</div>
                          <div className="text-[10px] text-neutral-500 font-normal mt-0.5">
                            {lvl === "P1" ? "15-min SLA" : lvl === "P2" ? "1-hr SLA" : lvl === "P3" ? "4-hr SLA" : "Same day"}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">
                        Bank / Institution <span className="text-[#3e7da2]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        placeholder="e.g. Commercial Bank of Ethiopia"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#3e7da2] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">
                        Affected System / Product <span className="text-[#3e7da2]">*</span>
                      </label>
                      <select
                        value={formData.system}
                        onChange={(e) => setFormData({ ...formData, system: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-neutral-900 focus:outline-none focus:bg-white focus:border-[#3e7da2] transition-colors"
                      >
                        <option>Uni-Cash Payment Gateway</option>
                        <option>Virtual Integrated Banking (VIB)</option>
                        <option>Merchant Pay POS & QR</option>
                        <option>Oracle Database RAC Cluster</option>
                        <option>Private Cloud (OpenStack / Nutanix)</option>
                        <option>SAN Storage & Fiber Fabric</option>
                        <option>Enterprise Server Hardware SLA</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-1">
                        Contact Person <span className="text-[#3e7da2]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="Your full name"
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
                        Direct Phone <span className="text-[#3e7da2]">*</span>
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
                      Incident Summary / Title <span className="text-[#3e7da2]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief overview of the issue or alert..."
                      className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#3e7da2] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 font-medium mb-1">
                      Technical Description & Error Logs <span className="text-[#3e7da2]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Provide error trace, affected server node, or transaction IDs..."
                      className="w-full bg-neutral-50 border border-neutral-200 rounded p-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#3e7da2] transition-colors resize-none font-mono text-xs"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                    <span className="text-[11px] text-neutral-500 font-mono">
                      Encrypted NOC Dispatch Protocol
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded transition-colors flex items-center gap-2 text-xs disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Dispatch Ticket</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: SLA Matrix & Location Specs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* SLA Matrix Card */}
            <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-xs">
              <div className="border-b border-neutral-100 pb-3 mb-4">
                <div className="text-[11px] font-mono text-[#3e7da2] uppercase font-semibold">Governance</div>
                <h3 className="text-base font-semibold text-neutral-900">
                  SLA Response Standards
                </h3>
              </div>

              <div className="divide-y divide-neutral-100">
                {slaTiers.map((tier) => (
                  <div key={tier.level} className="py-3 flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-xs text-neutral-900">{tier.level}</span>
                        <span className="text-xs font-semibold text-neutral-800">{tier.name}</span>
                      </div>
                      <p className="text-[11px] text-neutral-500 mt-0.5 leading-normal">
                        {tier.desc}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#3e7da2] shrink-0 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {tier.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operations Centers Card */}
            <div className="border border-neutral-200 rounded-lg p-6 bg-neutral-900 text-white">
              <div className="border-b border-neutral-800 pb-3 mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#3e7da2] uppercase font-semibold">Facilities</div>
                  <h3 className="text-base font-semibold text-white">
                    NOC & Dispatch Centers
                  </h3>
                </div>
                <MapPin size={16} className="text-[#3e7da2]" />
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded bg-neutral-950 border border-neutral-800">
                  <div className="font-semibold text-white mb-0.5">Primary NOC Headquarters</div>
                  <div className="text-neutral-400">Airport Road, Aberus Complex, 9th Floor, Addis Ababa</div>
                </div>
                <div className="p-3 rounded bg-neutral-950 border border-neutral-800">
                  <div className="font-semibold text-white mb-0.5">Hardware Spares Depot</div>
                  <div className="text-neutral-400">Lancha Train Station, Zefco Building, 3rd Floor, Addis Ababa</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
