"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Layers, 
  TestTube, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Cpu, 
  Sparkles,
  GitBranch,
  ShieldAlert
} from "lucide-react";

export default function SoftwareDevelopmentPage() {
  const capabilities = [
    {
      icon: Globe,
      title: "Custom Enterprise Web Applications",
      desc: "Robust, scalable, and responsive web systems designed to streamline internal workflows and enhance customer-facing services with modern cloud-native architectures."
    },
    {
      icon: Smartphone,
      title: "Mobile Banking & Multi-Platform Apps",
      desc: "Native and cross-platform mobile solutions for iOS, Android, and USSD banking—delivering low-latency, secure financial services to millions of retail and corporate users."
    },
    {
      icon: GitBranch,
      title: "API Development & Integration Economy",
      desc: "Standardized, documented, and secure RESTful/GraphQL APIs that transform legacy banking and billing systems into modern interconnected services ready for open banking."
    },
    {
      icon: TestTube,
      title: "Quality Assurance (QA) & Automated Testing",
      desc: "Comprehensive testing methodologies covering automated regression suites, manual exploratory testing, vulnerability scans, and stress testing for zero-defect releases."
    },
    {
      icon: Sparkles,
      title: "UX / UI Design & Product Engineering",
      desc: "User-centric interface design and intuitive workflows that drive user adoption, reduce training overhead, and ensure accessibility across devices."
    },
    {
      icon: Layers,
      title: "Application Modernization & Maintenance",
      desc: "Transforming legacy monolithic applications into modular microservices architectures with continuous maintenance, performance optimization, and SLA support."
    }
  ];

  const devProcess = [
    { step: "01", title: "Domain Discovery", desc: "Collaborating with domain experts to map business logic and compliance." },
    { step: "02", title: "Iterative Architecture", desc: "Microservices design, API contracts, security threat modeling, and UI wireframes." },
    { step: "03", title: "Agile Development", desc: "Sprint execution with automated CI/CD pipelines, code reviews, and unit coverage." },
    { step: "04", title: "Rigorous QA & Security", desc: "Automated regression, PCI-DSS compliance checks, load & penetration testing." },
    { step: "05", title: "Deployment & Integration", desc: "Zero-downtime cutover, database migration, and bank switch integration." },
    { step: "06", title: "Continuous Evolution", desc: "24/7 telemetry, feature iteration, and dedicated long-term SLA support." },
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "expert", product } }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Code2 size={14} className="text-secondary-400" />
              <span>Enterprise Software Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Engineered for Scale, <br />
              <span className="text-secondary-400">Security & Agility</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed font-light mb-8 max-w-2xl">
              From mission-critical digital banking platforms to high-throughput billing systems, our 40+ software engineers build world-class enterprise software with a 360-degree development methodology.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openDemoModal("software-development")}
                className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/products/unicash"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
              >
                <span>Explore Uni-Cash Engine</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">40+</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Dev Team & Architects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">5</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Dedicated Squads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">1M+</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">End Users Powered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-300 font-display">PCI-DSS</div>
              <div className="text-xs text-blue-200 mt-1 uppercase tracking-wider">Financial Grade Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Full Lifecycle Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Enterprise Application Development
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                    <cap.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 font-display">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-primary-600">
                  <CheckCircle2 size={14} />
                  <span>Agile Delivery</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 360-Degree Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              The 360-Degree Development Approach
            </h2>
            <p className="text-neutral-600 text-sm mt-3">
              Client-centric engineering focusing on rapid turnaround time without compromising quality or compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devProcess.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <span className="text-2xl font-black text-secondary-500 font-display mb-2 block">
                  {step.step}
                </span>
                <h4 className="text-base font-bold text-neutral-900 mb-2 font-display">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-(--steel-blue) text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-display mb-4">
            Build Your Enterprise Application with ACT
          </h2>
          <p className="text-blue-100 text-sm mb-8 leading-relaxed">
            Turn your business ideas into reality by leveraging our proven processes, domain expertise, and dedicated development teams.
          </p>
          <button
            type="button"
            onClick={() => openDemoModal("software-development")}
            className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all text-sm cursor-pointer"
          >
            Schedule a Development Scoping Call
          </button>
        </div>
      </section>
    </div>
  );
}
