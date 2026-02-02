"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  { value: 10, suffix: "+", label: "Years of Excellence", icon: Award },
  { value: 90, suffix: "+", label: "Expert Engineers", icon: Users },
  { value: 80, suffix: "+", label: "Enterprise Projects", icon: Building2 },
  { value: 10, suffix: "+", label: "Global Partners", icon: Globe2 },
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-8   bg-gray-100 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-linear-to-bl from-(--steel-blue)/5 via-transparent to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-(--sunflower)/5 via-transparent to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="relative w-full mx-auto">
        {/* Section Header - Minimalist & Bold */}
        <div className="mb-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-200 pb-12"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--steel-blue)/5 border border-(--steel-blue)/10 text-xs font-bold text-(--steel-blue) uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-(--steel-blue)"></span>
                Who We Are
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold font-display text-slate-900 leading-[1.1] tracking-tight">
                Architecting the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-(--steel-blue) to-slate-700">Future of Enterprise.</span>
              </h2>
            </div>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-light border-l-2 border-slate-200 pl-6">
              Atlas Computer Technology PLC (ACT) is Ethiopia's premier ICT solutions provider, delivering mission-critical infrastructure and software since 2011.
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 max-w-7xl mx-auto">
          {/* Left Column - Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-5xl font-bold text-slate-900 mb-6 font-display">Strategic Technology Partner</h3>
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

          {/* Right Column - Stats & Structure */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl shadow-slate-900/20 relative overflow-hidden text-white h-full flex flex-col justify-between">
              {/* Decorative Gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-(--steel-blue)/20 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--sunflower)/10 rounded-full blur-3xl -ml-20 -mb-20" />

              <div className="relative z-10">
                <h4 className="font-bold text-white mb-10 flex items-center gap-3 text-lg">
                  <span className="w-1.5 h-6 bg-(--sunflower) rounded-full" />
                  Key Metrics
                </h4>

                <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="text-5xl font-bold text-white mb-2 tracking-tight font-display flex items-center">
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
                      <div className="text-sm font-medium text-slate-400 flex items-center gap-2">
                        <stat.icon size={16} className="text-(--steel-blue)" />
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Operational Divisions</h5>
                <div className="flex flex-wrap gap-2">
                  {["System Engineering", "Software Dev", "Product Delivery", "Managed Services", "Uni-Cash"].map((dept) => (
                    <span key={dept} className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 text-xs font-medium rounded-lg border border-slate-700">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission - Full Width Split */}
        <div id="vision" className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] grid md:grid-cols-2 min-h-[400px]">
          
          {/* Vision Side (Dark/Brand) */}
          <div className="relative bg-slate-900 flex items-center justify-center p-12 overflow-hidden group">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-(--steel-blue)/20 to-slate-900 z-0" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-(--steel-blue)/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" 
            />
            
            <div className="relative z-10 max-w-lg">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display tracking-tight">Our Vision</h3>
              <p className="text-xl text-blue-100/80 leading-relaxed font-light">
                To create, adopt, and integrate technology so that people, businesses, and organizations can thrive in a digital-first world.
              </p>
              <div className="mt-12 h-1 w-24 bg-linear-to-r from-(--sunflower) to-transparent rounded-full" />
            </div>
          </div>

          {/* Mission Side (Light) */}
          <div className="relative bg-white flex items-center justify-center p-12 overflow-hidden group">
             {/* Subtle Grid Texture */}
             <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

             <div className="relative z-10 max-w-lg">
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">Our Mission</h3>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                To engineer and integrate innovative, cost-effective software and IT solutions using cutting-edge technology to empower our customers.
              </p>
              <div className="mt-12 h-1 w-24 bg-linear-to-r from-(--steel-blue) to-transparent rounded-full" />
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
                  <div className="p-2 bg-neutral-50 rounded-lg group-hover:bg-(--steel-blue)/10 transition-colors">
                    <value.icon className="text-neutral-400 group-hover:text-(--steel-blue) transition-colors" size={24} />
                  </div>
                  <h4 className="font-bold text-neutral-900">{value.title}</h4>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed pl-13 border-l-2 border-neutral-100 group-hover:border-(--steel-blue)/30 transition-colors">
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
