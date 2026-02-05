"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Layers, 
  Shield, 
  Settings, 
  ArrowRight,
  Cpu,
  Zap,
  Globe,
  Lock
} from "lucide-react";

export default function CloudSolutions() {
  const features = [
    {
      title: "Private Cloud",
      description: "Secure, isolated OpenStack environments tailored for sovereignty and compliance.",
      icon: Cloud,
      stat: "100% Data Sovereignty"
    },
    {
      title: "Migration Strategy",
      description: "Risk-free transition of legacy workloads to modern cloud architectures.",
      icon: Layers,
      stat: "Zero Downtime"
    },
    {
      title: "Cloud Security",
      description: "Identity management, threat protection, and automated compliance policies.",
      icon: Shield,
      stat: "ISO 27001 Ready"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated pipelines and infrastructure as code for rapid delivery.",
      icon: Settings,
      stat: "10x Faster Deploys"
    }
  ];

  return (
    <section id="cloud" className="scroll-mt-32 mb-24">
      <div className="relative bg-neutral-900 rounded-3xl overflow-hidden text-white p-8 md:p-12 mb-8 border border-neutral-800">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(62,125,162,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(62,125,162,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-600)]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-900)] border border-[var(--primary-700)] text-[var(--primary-300)] text-xs font-medium mb-6">
              <Cloud size={14} />
              <span>Future-Ready Infrastructure</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Cloud <span className="text-[var(--primary-400)]">Solutions</span>
            </h2>
            
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Navigate your cloud journey with confidence. Whether private, public, or hybrid, 
              we design cloud environments that drive agility and reduce operational overhead.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[var(--primary-600)] hover:bg-[var(--primary-500)] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
                Start Migration <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Autoscaling Visualization */}
          <div className="relative bg-neutral-950/50 rounded-xl border border-neutral-800 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6 border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-mono text-neutral-400">System Load</span>
              </div>
              <div className="text-xs font-mono text-[var(--primary-400)]">Autoscaling Active</div>
            </div>
            
            {/* Graph Area */}
            <div className="h-48 flex items-end justify-between gap-1 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="border-t border-neutral-500 w-full" />
                <div className="border-t border-neutral-500 w-full" />
                <div className="border-t border-neutral-500 w-full" />
              </div>

              {/* Bars */}
              {[30, 45, 35, 60, 80, 95, 70, 50, 40, 60, 85, 65, 45, 30].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="w-full bg-[var(--primary-600)]/30 rounded-t-sm relative group"
                >
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-[var(--primary-500)] rounded-t-sm transition-all duration-500"
                    style={{ height: `${height * 0.6}%` }}
                  />
                  {/* Hover Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-neutral-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {height}% Load
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex justify-between text-[10px] font-mono text-neutral-500 uppercase">
              <span>00:00</span>
              <span>12:00</span>
              <span>24:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid - Neon Style Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-6 rounded-2xl border border-neutral-200 bg-white hover:border-[var(--primary-200)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary-500)]/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 rounded-lg bg-[var(--primary-50)] text-[var(--primary-600)] group-hover:bg-[var(--primary-600)] group-hover:text-white transition-colors">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-medium border border-neutral-200 group-hover:border-[var(--primary-200)] group-hover:text-[var(--primary-700)] group-hover:bg-[var(--primary-50)] transition-colors">
                {feature.stat}
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

