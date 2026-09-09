"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Cloud, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Zap,
  Globe,
  Settings,
  RefreshCw
} from "lucide-react";

export default function CloudSolutionsPage() {
  const offerings = [
    {
      icon: Cloud,
      title: "Private Cloud Implementation (OpenStack)",
      desc: "Turnkey OpenStack deployments designed for financial institutions and public entities requiring strict local data sovereignty and extreme uptime."
    },
    {
      icon: Layers,
      title: "Hybrid Cloud Orchestration",
      desc: "Seamlessly bridging legacy on-premise data centers with modern cloud environments, providing unified management, workload portability, and governance."
    },
    {
      icon: RefreshCw,
      title: "Zero-Downtime Cloud Migration",
      desc: "Structured migration frameworks for legacy databases, virtual machines, and enterprise core applications with automated data synchronization and rollbacks."
    },
    {
      icon: ShieldCheck,
      title: "Cloud Security & Compliance",
      desc: "Zero-trust network architecture, automated compliance audits, role-based access management, and deep packet telemetry aligned with NBE standards."
    },
    {
      icon: Settings,
      title: "DevOps & Cloud-Native Modernization",
      desc: "Kubernetes container orchestration, Infrastructure as Code (IaC), CI/CD pipelines, and microservices refactoring for accelerated release cycles."
    },
    {
      icon: Zap,
      title: "Disaster Recovery as a Service (DRaaS)",
      desc: "Active-active and active-passive replication to secondary data centers ensuring instantaneous failover and sub-minute recovery time objectives (RTO)."
    }
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "demo", product } }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-28 pb-20 overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Cloud size={14} className="text-secondary-400" />
              <span>Future-Ready Cloud Infrastructure</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Cloud Solutions & <br />
              <span className="text-secondary-400">Enterprise Modernization</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed font-light mb-8 max-w-2xl">
              Navigate your cloud journey with certainty. Whether private, hybrid, or multi-cloud, ACT delivers secure, sovereign, and cost-predictable environments tailored for Ethiopian enterprises.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/solutions/private-cloud"
                className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm"
              >
                <span>Explore Technical Private Cloud</span>
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                onClick={() => openDemoModal("cloud-solutions")}
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all text-sm cursor-pointer"
              >
                Schedule Cloud Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Comprehensive Cloud Portfolio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-primary-600">
                  <CheckCircle2 size={14} />
                  <span>Enterprise Grade</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
