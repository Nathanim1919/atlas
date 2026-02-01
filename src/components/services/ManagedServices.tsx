"use client";

import { motion } from "framer-motion";
import { 
  Headphones, 
  Database, 
  Server, 
  Wrench, 
  ArrowRight,
  Activity,
  Globe,
  Clock,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function ManagedServices() {
  const features = [
    {
      title: "NOC Services",
      description: "24/7 network monitoring and incident response.",
      icon: Activity,
      metric: "99.99% Uptime"
    },
    {
      title: "DBA Services",
      description: "Proactive tuning and health checks.",
      icon: Database,
      metric: "< 1ms Latency"
    },
    {
      title: "Server Mgmt",
      description: "Patch management and security hardening.",
      icon: Server,
      metric: "Zero-Day Patching"
    },
    {
      title: "IT Support",
      description: "Multi-tiered technical support and helpdesk.",
      icon: Headphones,
      metric: "15m Response"
    }
  ];

  return (
    <section id="managed-services" className="scroll-mt-32 mb-24">
      <div className="relative rounded-3xl overflow-hidden bg-white border border-neutral-200 shadow-xl shadow-neutral-100">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,var(--primary-100)_0%,transparent_70%)] opacity-50 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-medium mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Systems Operational</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-neutral-900">
              Managed <span className="text-primary-600">Services</span>
            </h2>
            
            <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-md">
              We handle the complexity of your IT operations so you don't have to. 
              Proactive monitoring, instant incident response, and enterprise-grade reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20">
                View Service Plans <ArrowRight size={16} />
              </button>
              <button className="bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200 px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Abstract Dashboard Visualization */}
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary-200 to-secondary-200 rounded-2xl opacity-30 blur-lg" />
            <div className="relative bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 bg-neutral-50/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                </div>
                <div className="text-[10px] font-mono text-neutral-400">ACT.MONITORING.V2</div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-neutral-500 font-mono mb-1">HEALTH SCORE</div>
                    <div className="text-3xl font-bold text-neutral-900">98.4<span className="text-emerald-500 text-lg ml-1">▲</span></div>
                  </div>
                  <div className="h-8 w-24 flex items-end gap-1">
                    {[40, 70, 50, 90, 60, 80, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-1 bg-primary-500 rounded-t-sm opacity-80"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Network Latency", val: "12ms", status: "good" },
                    { label: "Server Load", val: "42%", status: "good" },
                    { label: "Threat Detection", val: "0 Active", status: "secure" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'secure' ? 'bg-emerald-500' : 'bg-primary-500'}`} />
                        <span className="text-xs text-neutral-600 font-medium">{item.label}</span>
                      </div>
                      <span className="text-xs font-mono text-neutral-900">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-neutral-200 bg-neutral-50/50">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`
                p-6 md:p-8 group hover:bg-white transition-colors
                ${idx !== features.length - 1 ? 'border-r border-neutral-200' : ''}
                ${idx < 2 ? 'border-b md:border-b-0 border-neutral-200' : ''}
              `}
            >
              <feature.icon className="text-neutral-400 group-hover:text-primary-600 transition-colors mb-4" size={24} strokeWidth={1.5} />
              <h3 className="text-sm font-bold text-neutral-900 mb-1">{feature.title}</h3>
              <p className="text-xs text-neutral-500 mb-3 line-clamp-2">{feature.description}</p>
              <div className="inline-block px-2 py-1 rounded bg-primary-50 text-primary-700 text-[10px] font-mono font-medium border border-primary-100">
                {feature.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
