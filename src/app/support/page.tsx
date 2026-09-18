"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LifeBuoy,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Server,
  Building2,
  Send,
  FileText,
  Loader2
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
      toast.success("Support Ticket Logged!", {
        description: `Ticket #${result.data.ticketNumber} has been dispatched to Tier-1 NOC engineering.`,
      });
    } catch (err: any) {
      console.error("Support ticket error:", err);
      toast.error("Ticket Dispatch Failed", {
        description: err.message || "Please call our emergency hotline +25111-5-32-91-39 immediately.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const slaTiers = [
    {
      level: "P1",
      badge: "Critical Outage",
      color: "border-rose-500 bg-rose-500/10 text-rose-500",
      time: "15-Minute Response",
      desc: "Complete production shutdown, core payment system downtime, or live bank switch failure."
    },
    {
      level: "P2",
      badge: "Major Incident",
      color: "border-amber-500 bg-amber-500/10 text-amber-500",
      time: "1-Hour Response",
      desc: "Severe degradation affecting multiple branch operations or non-redundant hardware fault."
    },
    {
      level: "P3",
      badge: "Minor Incident",
      color: "border-blue-500 bg-blue-500/10 text-blue-500",
      time: "4-Hour Response",
      desc: "Partial system anomaly with active workaround; non-critical batch report delay."
    },
    {
      level: "P4",
      badge: "Service Request",
      color: "border-emerald-500 bg-emerald-500/10 text-emerald-500",
      time: "Same Business Day",
      desc: "Routine configuration changes, patch consultations, or documentation inquiries."
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(62,125,162,0.3),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dde325]/20 border border-[#dde325]/40 text-[#dde325] text-xs font-semibold uppercase tracking-wider mb-6">
              <LifeBuoy className="w-4 h-4" />
              Enterprise Support & Customer Portal
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              24/7 Mission-Critical <span className="text-[#dde325]">Engineering Support</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Backing Ethiopia's financial institutions and national infrastructures with round-the-clock proactive monitoring, rapid SLA response, and immediate engineer dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Hotline Strip */}
      <section className="bg-[#3e7da2] text-white py-6 border-b border-[#306689]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
                <Phone className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-100">
                  24/7 Emergency Escalation Hotline
                </div>
                <div className="text-lg font-black text-white flex items-center gap-2">
                  <a href="tel:+251115329139" className="hover:underline">+25111-5-32-91-39</a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#dde325]" />
                <a href="mailto:info@act.com.et" className="hover:underline">info@act.com.et</a>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#dde325]" />
                <span>NOC Coverage: 24 Hours / 7 Days / 365 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Support Grid: Ticket Form & SLAs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Ticket Submission Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Submit an Enterprise Support Ticket
                </h2>
                <p className="text-xs text-slate-500 mb-8">
                  For contracted banking and corporate clients. Incidents are automatically routed to on-duty certified systems engineers.
                </p>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Support Ticket Successfully Logged
                    </h3>
                    <div className="inline-block bg-white px-4 py-2 rounded-xl border border-emerald-300 font-mono text-base font-bold text-emerald-700">
                      Ticket #{ticketId}
                    </div>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Our Tier-1 NOC dispatch team has received your incident request. An assigned engineer will establish contact according to your {priority} SLA timeframe.
                    </p>
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
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                    >
                      Log Another Ticket
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Priority Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Severity & SLA Priority
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {(["P1", "P2", "P3", "P4"] as const).map((lvl) => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => setPriority(lvl)}
                            className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              priority === lvl
                                ? "border-[#3e7da2] bg-[#3e7da2] text-white shadow-sm"
                                : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            <div>{lvl} Priority</div>
                            <div className="text-[10px] font-normal opacity-80 mt-0.5">
                              {lvl === "P1" ? "15-min" : lvl === "P2" ? "1-hour" : lvl === "P3" ? "4-hour" : "Same day"}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Bank / Institution Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.institution}
                          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                          placeholder="e.g. Commercial Bank of Ethiopia, Dashen Bank..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e7da2]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Affected Infrastructure / Solution *
                        </label>
                        <select
                          value={formData.system}
                          onChange={(e) => setFormData({ ...formData, system: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e7da2]"
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

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Contact Engineer *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e7da2]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="work.email@bank.et"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e7da2]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Direct Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+251 9..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e7da2]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Incident Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Brief summary of the symptom or alert..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e7da2]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Technical Description & Error Logs *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Please include error codes, affected server node, or transaction IDs if applicable..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e7da2]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#3e7da2] text-white font-bold hover:bg-[#326685] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching to Tier-1 NOC...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Dispatch Priority Support Ticket</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: SLA Guarantees & Escalation Matrix */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#3e7da2] mb-2">
                  Service Level Agreement (SLA) Matrix
                </h3>
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  Contracted Response Standards
                </h4>

                <div className="space-y-3.5">
                  {slaTiers.map((tier) => (
                    <div
                      key={tier.level}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3"
                    >
                      <div className={`px-2.5 py-1 rounded-lg border text-xs font-black shrink-0 ${tier.color}`}>
                        {tier.level}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                          <span>{tier.badge}</span>
                          <span className="text-[10px] font-semibold text-slate-500">• {tier.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                          {tier.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Physical NOC & Dispatch Center */}
              <div className="bg-slate-900 text-white rounded-3xl p-7 border border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#dde325] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  Physical Support Operations Centers
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="font-bold text-white mb-1">Primary Headquarters & NOC:</div>
                    <div>Airport Road, Aberus Complex, 9th Floor, Addis Ababa, Ethiopia</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                    <div className="font-bold text-white mb-1">Operations & Spares Depot:</div>
                    <div>Kirkos Sub-city, Near Lancha Train Station, Zefco Building, 3rd Floor</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Certified Field Dispatch:</span>
                  <span className="text-[#dde325] font-bold">&lt; 2 Hours (Addis Ababa)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
