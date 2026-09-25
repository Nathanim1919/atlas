"use client";

import { motion, useInView, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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
  { value: 15, suffix: "+", label: "Years of Experience", icon: Award },
  { value: 120, suffix: "+", label: "Team Members", icon: Users },
  { value: 80, suffix: "+", label: "Enterprise Projects", icon: Building2 },
  { value: 5, suffix: "", label: "Departments", icon: Globe2 },
];

interface CountUpProps {
  from?: number;
  to: number;
  separator?: string;
  direction?: "up" | "down";
  duration?: number;
  className?: string;
  startCounting?: boolean;
}

const CountUp = ({
  from = 0,
  to,
  separator = ",",
  direction = "up",
  duration = 1,
  className = "",
  startCounting = true,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if ((startCounting || inView) && !hasAnimated && ref.current) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(value).toLocaleString('en-US').replace(/,/g, separator);
          }
        },
        onComplete: () => setHasAnimated(true),
      });
      return () => controls.stop();
    }
  }, [from, to, duration, separator, startCounting, inView, hasAnimated]);

  return <span ref={ref} className={className}>{from}</span>;
};

export default function About() {
  return (
    <section id="about" className="py-8 px-8   bg-gray-100 relative overflow-hidden">
 
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="relative w-full mx-auto">
        {/* Section Header - Minimalist & Bold */}
        <div className="mb-16 w-full md:max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between justify-start gap-8 border-b border-neutral-200 pb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#3e7da2] mb-4">Who We Are</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Atlas Computer Technology
              </h2>
            </div>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed border-l-2 border-slate-200 pl-6">
              Ethiopia's premier ICT solutions provider, delivering mission-critical infrastructure and software since 2011.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 max-w-7xl mx-auto">
          {/* Left Column - Narrative */}
          <div className="lg:col-span-7 space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Strategic Technology Partner</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                We don't just supply technology; we integrate it. ACT operates at the intersection of infrastructure, software, and strategy. Our multidisciplinary approach ensures that every solution we deploy is scalable, secure, and aligned with your long-term business objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-6 pt-6"
            >
              <div className="rounded-2xl py-8 px-2">

                <h4 className="text-2xl font-bold text-slate-900 mb-3">End-to-End Delivery</h4>
                <p className="text-slate-500 leading-relaxed">From consultancy and design to implementation and managed services.</p>
              </div>
              <div className="py-8 pl-8 border-l border-gray-200">

                <h4 className="text-2xl font-bold text-slate-900 mb-3">Business-First Approach</h4>
                <p className="text-slate-500 leading-relaxed">Technology solutions designed to drive measurable operational growth.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-5">
            <div className="border border-neutral-200 rounded-2xl p-8 bg-white h-full flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Key Metrics</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-4xl font-bold text-slate-900 mb-1 tracking-tight flex items-center">
                        <CountUp
                          from={0}
                          to={stat.value}
                          separator=","
                          direction="up"
                          duration={1.5}
                          startCounting={false}
                        />
                        <span>{stat.suffix}</span>
                      </div>
                      <div className="text-sm text-slate-500 flex items-center gap-2">
                        <stat.icon size={14} className="text-[#3e7da2] shrink-0" />
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Divisions</p>
                <div className="flex flex-wrap gap-2">
                  {["System Engineering", "Software Dev", "Product Delivery", "Managed Services", "Uni-Cash"].map((dept) => (
                    <span key={dept} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-200">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div id="vision" className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] grid md:grid-cols-2 min-h-[360px]">
          {/* Vision Side */}
          <div className="bg-[#3e7da2] flex items-center justify-center p-12">
            <div className="max-w-lg">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">Our Vision</h3>
              <div className="w-10 h-0.5 bg-[#dde325] mb-6" />
              <p className="text-lg text-white/85 leading-relaxed">
                To create, adopt, and integrate technology so that people, businesses, and organizations can thrive in a digital-first world.
              </p>
            </div>
          </div>

          {/* Mission Side */}
          <div className="bg-white flex items-center justify-center p-12 border-t md:border-t-0 md:border-l border-neutral-200">
            <div className="max-w-lg">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Mission</h3>
              <div className="w-10 h-0.5 bg-[#3e7da2] mb-6" />
              <p className="text-lg text-slate-600 leading-relaxed">
                To engineer and integrate innovative, cost-effective software and IT solutions using cutting-edge technology to empower our customers with meaningful benefits and impact.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values - Grid Layout */}
        <div className="border-t border-neutral-200 pt-24 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-4xl font-bold text-neutral-900 mb-4">Guiding Principles</h3>
              <p className="text-neutral-600 max-w-xl">
                The foundational values that drive our decision-making and ensure excellence in every engagement.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-neutral-200 ml-12 mb-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {values.map((value, index) => (
              <div key={value.title}>
                <div className="flex items-center gap-3 mb-3">
                  <value.icon size={18} className="text-[#3e7da2] shrink-0" />
                  <h4 className="font-bold text-neutral-900 text-sm">{value.title}</h4>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed pl-7 border-l border-neutral-200">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
