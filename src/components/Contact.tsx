"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ArrowRight
} from "lucide-react";

const contactInfo = [
  {
    icon: Building2,
    title: "Location 1 - HQ",
    details: ["Airport Road, Aberus Complex", "9th Floor, Addis Ababa, Ethiopia"],
    action: "Get Directions",
    link: "https://maps.google.com/?q=Atlas+Computer+Technology+Addis+Ababa"
  },
  {
    icon: MapPin,
    title: "Location 2",
    details: ["Kirkos Sub-city, Near Lancha Train Station", "Zefco Building, 3rd Floor, Addis Ababa"],
    action: "Get Directions",
    link: "https://maps.google.com/?q=Kirkos+Lancha+Addis+Ababa"
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+251 11 869 3096", "+251 911 221671"],
    action: "Call Now",
    link: "tel:+251118693096"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@act.com.et"],
    action: "Send Email",
    link: "mailto:info@act.com.et"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 8:30 AM - 5:30 PM", "Sat: 8:30 AM - 12:30 PM"],
    action: null,
    link: null
  },
];

const services = [
  "System Engineering",
  "Software Development",
  "Cloud Solutions",
  "Managed Services",
  "Consultancy & Training",
  "Uni-Cash Solutions",
  "Banking Solutions",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-white to-transparent" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Contact Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
                Let's Build the <br />
                <span className="text-emerald-700">Future Together</span>
              </h2>
              <p className="text-lg text-neutral-500 font-light leading-relaxed">
                Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex gap-6 p-6 rounded-2xl bg-white border border-neutral-100 hover:border-emerald-100 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors duration-300 shrink-0">
                    <info.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">{info.title}</h4>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-neutral-500">{detail}</p>
                      ))}
                    </div>
                    {info.link && (
                      <a 
                        href={info.link} 
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        {info.action} <ArrowRight size={12} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-4xl p-8 md:p-12 border border-neutral-200 shadow-xl shadow-neutral-100/50 relative overflow-hidden">
              {/* Decorative Top Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-500 via-teal-500 to-emerald-500" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 flex flex-col items-center justify-center h-full"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">Message Received</h3>
                  <p className="text-neutral-500 max-w-xs mx-auto">
                    Thank you for contacting us. One of our specialists will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className={`absolute left-0 transition-all duration-200 ${
                          activeField === "name" || formData.name 
                            ? "-top-6 text-xs text-emerald-600 font-semibold" 
                            : "top-3 text-neutral-400"
                        }`}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        required
                        className="w-full py-3 bg-transparent border-b border-neutral-200 focus:border-emerald-500 outline-none transition-colors text-neutral-900 placeholder-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="relative">
                      <label 
                        htmlFor="email" 
                        className={`absolute left-0 transition-all duration-200 ${
                          activeField === "email" || formData.email 
                            ? "-top-6 text-xs text-emerald-600 font-semibold" 
                            : "top-3 text-neutral-400"
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        required
                        className="w-full py-3 bg-transparent border-b border-neutral-200 focus:border-emerald-500 outline-none transition-colors text-neutral-900 placeholder-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label 
                        htmlFor="company" 
                        className={`absolute left-0 transition-all duration-200 ${
                          activeField === "company" || formData.company 
                            ? "-top-6 text-xs text-emerald-600 font-semibold" 
                            : "top-3 text-neutral-400"
                        }`}
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setActiveField("company")}
                        onBlur={() => setActiveField(null)}
                        className="w-full py-3 bg-transparent border-b border-neutral-200 focus:border-emerald-500 outline-none transition-colors text-neutral-900 placeholder-transparent"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className="relative">
                      <label 
                        htmlFor="phone" 
                        className={`absolute left-0 transition-all duration-200 ${
                          activeField === "phone" || formData.phone 
                            ? "-top-6 text-xs text-emerald-600 font-semibold" 
                            : "top-3 text-neutral-400"
                        }`}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setActiveField("phone")}
                        onBlur={() => setActiveField(null)}
                        className="w-full py-3 bg-transparent border-b border-neutral-200 focus:border-emerald-500 outline-none transition-colors text-neutral-900 placeholder-transparent"
                        placeholder="+251..."
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label 
                      htmlFor="service" 
                      className="block text-xs font-semibold text-neutral-500 mb-3 uppercase tracking-wider"
                    >
                      I'm interested in...
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData({ ...formData, service })}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                            formData.service === service
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20"
                              : "bg-white text-neutral-600 border-neutral-200 hover:border-emerald-300 hover:text-emerald-700"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className={`absolute left-0 transition-all duration-200 ${
                        activeField === "message" || formData.message 
                          ? "-top-6 text-xs text-emerald-600 font-semibold" 
                          : "top-3 text-neutral-400"
                      }`}
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      required
                      rows={3}
                      className="w-full py-3 bg-transparent border-b border-neutral-200 focus:border-emerald-500 outline-none transition-colors text-neutral-900 placeholder-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-neutral-900 text-white rounded-xl font-semibold hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
