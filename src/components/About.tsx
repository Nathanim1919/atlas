"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Users, 
  Award,
  Shield,
  Zap,
  RefreshCw,
  Handshake,
  CheckCircle2,
  Building2,
  Globe2,
  TrendingUp
} from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Pioneering future-ready technologies." },
  { icon: Target, title: "Customer Success", description: "Delivering measurable business outcomes." },
  { icon: Award, title: "Quality Assurance", description: "Uncompromising standards in delivery." },
  { icon: Zap, title: "Operational Efficiency", description: "Optimizing for cost and performance." },
  { icon: RefreshCw, title: "Adaptability", description: "Agile responses to market shifts." },
  { icon: Shield, title: "Integrity", description: "Ethical conduct and transparent partnerships." },
  { icon: Handshake, title: "Collaboration", description: "Synergy with clients and internal teams." },
];

const stats = [
  { value: "10+", label: "Years of Excellence", icon: Award },
  { value: "90+", label: "Expert Engineers", icon: Users },
  { value: "80+", label: "Enterprise Projects", icon: Building2 },
  { value: "10+", label: "Global Partners", icon: Globe2 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="about-grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - Minimalist & Bold */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200 pb-12"
          >
            <div className="max-w-2xl">
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-900 leading-tight">
                Architecting the Future of <br />
                <span className="text-emerald-700">Enterprise Technology</span>
              </h2>
            </div>
            <p className="text-lg text-neutral-600 max-w-md leading-relaxed">
              Atlas Computer Technology PLC (ACT) is Ethiopia's premier ICT solutions provider, delivering mission-critical infrastructure and software since 2011.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32">
          {/* Left Column - Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Strategic Technology Partner</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                We don't just supply technology; we integrate it. ACT operates at the intersection of infrastructure, software, and strategy. Our multidisciplinary approach ensures that every solution we deploy is scalable, secure, and aligned with your long-term business objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6 pt-4"
            >
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="text-emerald-600" size={20} />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">End-to-End Delivery</h4>
                <p className="text-sm text-neutral-500">From consultancy and design to implementation and managed services.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-emerald-600" size={20} />
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">Business-First Approach</h4>
                <p className="text-sm text-neutral-500">Technology solutions designed to drive measurable operational growth.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Structure */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-xl shadow-neutral-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-16 -mt-16 opacity-50" />
              
              <h4 className="font-bold text-neutral-900 mb-8 flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full" />
                Key Metrics
              </h4>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="text-4xl font-bold text-neutral-900 mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-sm font-medium text-neutral-500 flex items-center gap-1.5">
                      <stat.icon size={14} className="text-emerald-600" />
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-neutral-100">
                <h5 className="text-sm font-semibold text-neutral-900 mb-4">Operational Divisions</h5>
                <div className="flex flex-wrap gap-2">
                  {["System Engineering", "Software Dev", "Product Delivery", "Managed Services", "Uni-Cash"].map((dept) => (
                    <span key={dept} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full border border-neutral-200">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission - Corporate Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-emerald-900 rounded-2xl p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
              <Eye size={120} className="text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-white/10">
                <Eye className="text-emerald-300" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-emerald-100/80 text-lg leading-relaxed max-w-md">
                To create, adopt, and integrate technology so that people, businesses, and organizations can thrive in a digital-first world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-white border border-neutral-200 rounded-2xl p-10 overflow-hidden shadow-lg shadow-neutral-100/50"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
              <Target size={120} className="text-emerald-900" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 border border-emerald-100">
                <Target className="text-emerald-700" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                To engineer and integrate innovative, cost-effective software and IT solutions using cutting-edge technology to empower our customers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values - Grid Layout */}
        <div className="border-t border-neutral-200 pt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-4">Guiding Principles</h3>
              <p className="text-neutral-600 max-w-xl">
                The foundational values that drive our decision-making and ensure excellence in every engagement.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-neutral-200 ml-12 mb-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-neutral-50 rounded-lg group-hover:bg-emerald-50 transition-colors">
                    <value.icon className="text-neutral-400 group-hover:text-emerald-600 transition-colors" size={24} />
                  </div>
                  <h4 className="font-bold text-neutral-900">{value.title}</h4>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed pl-13 border-l-2 border-neutral-100 group-hover:border-emerald-200 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
