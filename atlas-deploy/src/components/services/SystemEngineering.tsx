"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Server, 
  Database, 
  Shield, 
  HardDrive, 
  Network, 
  Cpu,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

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
            // Check if we need to format as a float for small numbers like 99.99
            const isFloat = !Number.isInteger(to);
            const formattedValue = isFloat 
              ? value.toFixed(2) 
              : Math.floor(value).toLocaleString('en-US').replace(/,/g, separator);
            ref.current.textContent = formattedValue;
          }
        },
        onComplete: () => setHasAnimated(true),
      });
      return () => controls.stop();
    }
  }, [from, to, duration, separator, startCounting, inView, hasAnimated]);

  return <span ref={ref} className={className}>{from}</span>;
};

export default function SystemEngineering() {
  const features = [
    {
      icon: Network,
      title: "Network Architecture",
      description: "Design and deployment of resilient, high-speed network infrastructures tailored for enterprise scale.",
      capabilities: ["SD-WAN Implementation", "Core Switching & Routing", "Wireless Enterprise Solutions"]
    },
    {
      icon: Database,
      title: "Enterprise Systems",
      description: "Comprehensive database and application server management ensuring data integrity and availability.",
      capabilities: ["Oracle & SQL Server", "High Availability Clusters", "Disaster Recovery Planning"]
    },
    {
      icon: Shield,
      title: "Security Infrastructure",
      description: "Hardened security perimeters and internal controls to protect your most critical digital assets.",
      capabilities: ["Next-Gen Firewalls", "Intrusion Prevention", "Zero Trust Architecture"]
    },
    {
      icon: HardDrive,
      title: "Storage & Virtualization",
      description: "Optimized storage solutions and virtualization strategies to maximize hardware efficiency.",
      capabilities: ["SAN/NAS Storage", "VMware & Hyper-V", "Container Orchestration"]
    }
  ];

  return (
    <section id="system-engineering" className="scroll-mt-32 mb-24">
      {/* Hero Section of the Component */}
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white p-8 md:p-12 mb-8">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            <Server size={14} />
            <span>Infrastructure Excellence</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            System <span className="text-emerald-400">Engineering</span>
          </h2>
          
          <p className="text-neutral-300 text-lg leading-relaxed mb-8 max-w-2xl">
            We build the backbone of your digital operations. Our engineering solutions deliver 
            robust, scalable, and secure ICT infrastructure designed to support mission-critical 
            workloads with 99.99% uptime reliability.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2">
              Schedule Assessment <ArrowRight size={16} />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors backdrop-blur-sm">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute right-10 top-10 opacity-10">
          <Cpu size={200} strokeWidth={0.5} />
        </div>
      </div>

      {/* Main Content Grid - Cross Line Layout */}
      <div className="grid md:grid-cols-2">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`
              group p-8 md:p-10
              ${idx === 0 ? "md:border-r md:border-b border-neutral-200" : ""}
              ${idx === 1 ? "md:border-b border-neutral-200" : ""}
              ${idx === 2 ? "md:border-r border-neutral-200" : ""}
              ${idx === 3 ? "" : ""}
              /* Mobile borders */
              ${idx !== features.length - 1 ? "border-b md:border-b-0 border-neutral-200" : ""}
            `}
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              {feature.description}
            </p>

            <div className="space-y-2">
              {feature.capabilities.map((cap, cIdx) => (
                <div key={cIdx} className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  {cap}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Technical Specs / Stats Bar */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
        {[
          { label: "Uptime SLA", value: 99.99, suffix: "%", isFloat: true },
          { label: "Response Time", value: 15, prefix: "< ", suffix: "min" },
          { label: "Security Level", value: 4, prefix: "Tier " },
          { label: "Support", value: 24, suffix: "/7/365" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-bold text-primary-600 flex justify-center items-center gap-1">
              {stat.prefix}
              <CountUp 
                from={0} 
                to={stat.value} 
                duration={1.5}
                startCounting={false}
              />
              {stat.suffix}
            </div>
            <div className="text-xs text-neutral-500 uppercase tracking-wider font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
