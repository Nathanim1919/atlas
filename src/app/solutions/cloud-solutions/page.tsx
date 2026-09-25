"use client";

import Link from "next/link";
import { 
  Cloud, 
  ShieldCheck, 
  Layers, 
  RefreshCw, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  Server,
  Database
} from "lucide-react";

export default function CloudSolutionsPage() {
  const capabilities = [
    {
      icon: Cloud,
      title: "Hybrid Cloud Architecture & Federation",
      desc: "Seamlessly connect on-premise OpenStack infrastructure with public cloud providers (AWS, Azure, GCP) using secure direct interconnects."
    },
    {
      icon: RefreshCw,
      title: "Cloud Migration & Workload Refactoring",
      desc: "Re-platform monolithic core systems into containerized, cloud-native microservices with zero-downtime database cutovers."
    },
    {
      icon: Layers,
      title: "Kubernetes & Container Orchestration",
      desc: "Enterprise Kubernetes deployment, automated cluster autoscaling, service mesh configuration, and GitOps CI/CD pipelines."
    },
    {
      icon: ShieldCheck,
      title: "Cloud Security & Identity Federation",
      desc: "Centralized IAM, single sign-on (SSO), Keycloak integration, microsegmentation, and continuous cloud security posture auditing."
    },
    {
      icon: Database,
      title: "Cloud-Native Database Infrastructure",
      desc: "Managed PostgreSQL, CockroachDB, and Redis clusters with automated sharding, point-in-time recovery, and multi-region read replicas."
    },
    {
      icon: Server,
      title: "Cloud Cost Optimization & FinOps",
      desc: "Continuous resource rightsizing, reserved instance planning, and workload monitoring to optimize infrastructure spend."
    }
  ];

  const metrics = [
    { value: "99.99%", label: "Hybrid Uptime Commitment" },
    { value: "0 Downtime", label: "Cutover Migration Standard" },
    { value: "100%", label: "Kubernetes Native Pods" },
    { value: "24/7", label: "FinOps & Security Auditing" },
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "expert", product } }));
    }
  };

  return (
    <div className="bg-white font-sans min-h-screen text-neutral-900 selection:bg-[#3e7da2] selection:text-white">
      {/* Light Enterprise Hero */}
      <section className="relative pt-24 pb-20 bg-neutral-50 border-b border-neutral-200 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-6">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <Link href="/solutions/private-cloud" className="hover:text-neutral-900 transition-colors">Solutions</Link>
            <ChevronRight className="w-3 h-3 text-neutral-400" />
            <span className="text-[#3e7da2] font-semibold">Cloud Solutions & Migration</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
                <Cloud className="w-3.5 h-3.5 text-[#3e7da2]" />
                <span>Hybrid & Multi-Cloud Transformation</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Enterprise Cloud Solutions & Migration Engineering
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                Accelerate digital transformation with cloud-native microservices, enterprise Kubernetes, and seamless hybrid cloud interconnects.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal("cloud-solutions")}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Request Cloud Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <span>Talk with Cloud Architect</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 p-6 rounded shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-[#3e7da2]" />
                    <span className="text-xs font-mono uppercase text-neutral-500">Cloud Migration Engine</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">Zero-Downtime Pipeline</span>
                </div>

                <div className="space-y-3">
                  {[
                    "Zero-Downtime Database & Workload Migration",
                    "Enterprise Kubernetes & Service Mesh (Istio)",
                    "Hybrid Cloud Direct Interconnect (AWS/Azure/On-Prem)",
                    "FinOps Rightsizing & Cost Control Optimization",
                    "Keycloak Single Sign-On & IAM Federation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-neutral-50 border border-neutral-200/80 rounded">
                      <CheckCircle2 className="w-4 h-4 text-[#3e7da2] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="border-l-2 border-[#3e7da2] pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">{metric.value}</div>
                <div className="text-xs font-mono text-neutral-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Engineering Services
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Enterprise Cloud Capabilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Modern cloud architecture designed for scalability, security, and effortless deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white border border-neutral-200 p-8 rounded flex flex-col justify-between hover:border-neutral-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-neutral-50 border border-neutral-200 text-[#3e7da2] flex items-center justify-center mb-6 shadow-xs">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-neutral-50 border border-neutral-200 p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Plan Your Enterprise Cloud Migration
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Connect with our senior cloud architects to map out a zero-downtime migration strategy for your applications and databases.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("cloud-solutions")}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Schedule Migration Review
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
