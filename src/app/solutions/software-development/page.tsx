"use client";

import Link from "next/link";
import { 
  Smartphone, 
  Globe, 
  TestTube, 
  ArrowRight, 
  CheckCircle2, 
  GitBranch,
  Sparkles,
  Layers,
  ChevronRight,
  Code2,
  Cpu
} from "lucide-react";

export default function SoftwareDevelopmentPage() {
  const capabilities = [
    {
      icon: Globe,
      title: "Custom Enterprise Web Applications",
      desc: "Robust, scalable, and responsive web platforms designed to streamline internal operations and deliver secure, high-concurrency customer portals."
    },
    {
      icon: Smartphone,
      title: "Mobile Banking & Multi-Platform Apps",
      desc: "Native and cross-platform mobile solutions for iOS, Android, and USSD integration—delivering low-latency, secure financial interactions for millions of users."
    },
    {
      icon: GitBranch,
      title: "API Development & Open Banking",
      desc: "Standardized, documented, and secure RESTful/gRPC APIs that connect legacy banking engines into modern microservice architecture ready for ecosystem integration."
    },
    {
      icon: TestTube,
      title: "QA Automation & Continuous Verification",
      desc: "End-to-end automated testing suites covering unit, integration, stress testing, and security vulnerability scanning for zero-defect production rollouts."
    },
    {
      icon: Sparkles,
      title: "UX/UI Design & Product Engineering",
      desc: "User-centric interface architecture and accessible design systems tailored for banking, telecommunications, and high-volume billing platforms."
    },
    {
      icon: Layers,
      title: "Legacy Application Modernization",
      desc: "Deconstructing legacy monolithic codebases into containerized microservices with continuous integration, performance tuning, and 24/7 SLA maintenance."
    }
  ];

  const devProcess = [
    { step: "01", title: "Domain & Requirements Discovery", desc: "Collaborating with business and technical stakeholders to map domain logic and regulatory requirements." },
    { step: "02", title: "Architecture & Threat Modeling", desc: "Microservices design, API contracts, security threat modeling, and high-availability topology planning." },
    { step: "03", title: "Agile Engineering & CI/CD", desc: "Sprint execution with automated build pipelines, static code analysis, and high unit test coverage." },
    { step: "04", title: "Security & Penetration Testing", desc: "Automated regression testing, PCI-DSS compliance audits, and third-party penetration testing." },
    { step: "05", title: "Production Cutover & Integration", desc: "Zero-downtime deployment, database migration verification, and core system switch integration." },
    { step: "06", title: "Telemetry & Continuous SLA", desc: "24/7 application monitoring, log aggregation, patch management, and dedicated SLA support." },
  ];

  const metrics = [
    { value: "40+", label: "Senior Software Engineers" },
    { value: "5 Squads", label: "Dedicated Agile Pods" },
    { value: "1M+", label: "Active End Users Powered" },
    { value: "PCI-DSS", label: "Financial Grade Security" },
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
            <span className="text-[#3e7da2] font-semibold">Software Development</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
                <Code2 className="w-3.5 h-3.5 text-[#3e7da2]" />
                <span>Enterprise Software Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Custom Software Engineered for Security, Scale & Speed
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                From high-throughput core banking engines to mobile wallet applications and enterprise web portals, our 40+ software engineers deliver financial-grade digital products.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal("software-development")}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Request Engineering Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/products/unicash"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <span>Explore Uni-Cash Platform</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 p-6 rounded shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#3e7da2]" />
                    <span className="text-xs font-mono uppercase text-neutral-500">Engineering Methodology</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">CI/CD Active</span>
                </div>

                <div className="space-y-3">
                  {[
                    "Financial-Grade Security & Encryption",
                    "High-Concurrency Microservices Architecture",
                    "Automated QA Regression & Security Audits",
                    "Native Mobile (iOS & Android) + USSD Gateways",
                    "24/7 Production SLA & Telemetry Support"
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

      {/* Full Lifecycle Capabilities */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Full Lifecycle Services
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Enterprise Software Capabilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              End-to-end software engineering capabilities tailored for mission-critical banking, telecom, and public sector software.
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
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-[#3e7da2]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Agile Pod Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 360-Degree Process */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Our Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              360-Degree Engineering Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Rigorous, repeatable software development lifecycle designed to minimize risk and maximize speed to value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devProcess.map((step) => (
              <div key={step.step} className="p-6 bg-neutral-50 border border-neutral-200 rounded flex flex-col justify-between">
                <div>
                  <span className="text-xl font-mono font-bold text-[#3e7da2] mb-3 block">
                    [{step.step}]
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-neutral-200 p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                Ready to Accelerate Your Software Roadmap?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Connect with our lead solution architects to scope your enterprise software project, evaluate API integrations, and review architectural options.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("software-development")}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Schedule Scoping Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
