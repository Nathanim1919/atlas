"use client";

import { useState } from "react";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Building2,
    title: "Head Office",
    details: ["Airport Road, Aberus Complex, 9th Floor", "Addis Ababa, Ethiopia"],
    action: "Get Directions",
    link: "https://maps.google.com/?q=Aberus+Complex+Addis+Ababa",
  },
  {
    icon: MapPin,
    title: "Branch Office",
    details: ["Lancha Train Station, Zefco Building, 3rd Floor", "Addis Ababa, Ethiopia"],
    action: "Get Directions",
    link: "https://maps.google.com/?q=Kirkos+Lancha+Addis+Ababa",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+25111-5-32-91-39", "+251 929 906251"],
    action: "Call Now",
    link: "tel:+251115329139",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@act.com.et", "www.act.com.et"],
    action: "Send Email",
    link: "mailto:info@act.com.et",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon – Fri: 8:30 AM – 5:30 PM", "24/7 SLA NOC Hotline for Banks"],
    action: null,
    link: null,
  },
];

const services = [
  "System Engineering & Infrastructure",
  "Software Development & Mobility",
  "Private Cloud (OpenStack & HCI)",
  "Managed Services & 24/7 SLAs",
  "Uni-Cash (Pay@Bank Integration)",
  "Virtual Integrated Banking (VIB)",
  "AI & Automation Solutions",
  "Consultancy & Enterprise Training",
  "Other Enterprise Inquiries",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMsg("");
    setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 border-b border-neutral-200 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#3e7da2] font-semibold mb-2">
              Direct Contact
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Get in Touch
            </h1>
          </div>
          <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
            Reach out for enterprise inquiries, partnership proposals, or to schedule a technical consultation with our engineering team in Addis Ababa.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left — Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex gap-4 p-4 bg-white border border-neutral-200 rounded-xl"
              >
                <div className="w-9 h-9 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center shrink-0">
                  <info.icon size={16} className="text-[#3e7da2]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    {info.title}
                  </p>
                  {info.details.map((d, i) => (
                    <p key={i} className="text-sm text-neutral-700 leading-snug">
                      {d}
                    </p>
                  ))}
                  {info.link && (
                    <a
                      href={info.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#3e7da2] hover:text-[#306689] transition-colors mt-1.5"
                    >
                      {info.action} <ArrowRight size={11} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">

              {status === "success" ? (
                <div className="py-16 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#3e7da2]/10 flex items-center justify-center mb-4">
                    <CheckCircle2 size={24} className="text-[#3e7da2]" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Message Received
                  </h3>
                  <p className="text-sm text-neutral-500 max-w-xs mb-6">
                    Thank you for contacting us. One of our specialists will
                    respond within 1–2 business days.
                  </p>
                  <button
                    onClick={reset}
                    className="text-xs font-semibold text-[#3e7da2] hover:text-[#306689] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-neutral-500 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-3 py-2.5 text-sm border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:border-[#3e7da2] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-500 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@organization.com"
                        className="w-full px-3 py-2.5 text-sm border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:border-[#3e7da2] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-neutral-500 mb-1.5">
                        Organization
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Bank / Enterprise / Ministry"
                        className="w-full px-3 py-2.5 text-sm border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:border-[#3e7da2] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-neutral-500 mb-1.5">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+251..."
                        className="w-full px-3 py-2.5 text-sm border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:border-[#3e7da2] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Tags */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 mb-2.5">
                      Area of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, service: formData.service === s ? "" : s })
                          }
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                            formData.service === s
                              ? "bg-[#3e7da2] text-white border-[#3e7da2]"
                              : "bg-white text-neutral-600 border-neutral-200 hover:border-[#3e7da2]/50"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-500 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, requirement, or question..."
                      className="w-full px-3 py-2.5 text-sm border border-neutral-200 rounded-lg bg-neutral-50 focus:bg-white focus:border-[#3e7da2] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle size={15} className="text-red-500 mt-0.5 shrink-0" />
                      <p className="text-xs text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 bg-[#3e7da2] hover:bg-[#306689] disabled:bg-[#3e7da2]/60 text-white text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
