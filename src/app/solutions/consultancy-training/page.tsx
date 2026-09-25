"use client";

import Link from "next/link";
import { 
  GraduationCap, 
  Lightbulb, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  FileCheck2,
  Building2,
  CheckCircle2,
  Award,
  ChevronRight
} from "lucide-react";

export default function ConsultancyTrainingPage() {
  const consultingAreas = [
    {
      icon: Lightbulb,
      title: "Digital Transformation Strategies",
      desc: "Assisting financial institutions, government agencies, and enterprise bodies with strategic technology roadmaps, SaaS adoption, legacy system modernization, and operational optimization."
    },
    {
      icon: ShieldCheck,
      title: "Risk Management & Regulatory Compliance",
      desc: "Navigating National Bank of Ethiopia (NBE), INSA, and global ISO 27001 / PCI-DSS compliance frameworks with structured gap audits, policy blueprints, and remediation guidance."
    },
    {
      icon: Building2,
      title: "Enterprise Architecture & Integration",
      desc: "Designing resilient multi-tier infrastructure, microservices migration blueprints, ESB integrations, and disaster recovery architectures tailored for high-concurrency environments."
    }
  ];

  const trainingPrograms = [
    {
      icon: GraduationCap,
      title: "Cloud & OpenStack Engineering",
      desc: "Hands-on technical engineering modules covering OpenStack deployment, Linux kernel tuning, Ceph storage management, and hybrid cloud orchestration."
    },
    {
      icon: BookOpen,
      title: "Institutional Digital Upskilling",
      desc: "Structured training modules tailored across management and operational tiers to accelerate core software adoption and workflow productivity."
    },
    {
      icon: FileCheck2,
      title: "Cyber Security & Cyber Hygiene",
      desc: "Comprehensive staff training on threat awareness, zero-trust principles, data privacy compliance, and incident response protocols."
    },
    {
      icon: Users,
      title: "Technology Change Management",
      desc: "Facilitating smooth organizational transitions during core banking updates, ERP rollouts, or infrastructure overhauls to eliminate downtime."
    }
  ];

  const metrics = [
    { value: "15+", label: "Years Industry Expertise" },
    { value: "1,200+", label: "Engineers & Staff Trained" },
    { value: "100%", label: "NBE & INSA Compliance Alignment" },
    { value: "99.4%", label: "Curriculum Approval Rate" },
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
            <span className="text-[#3e7da2] font-semibold">Strategic Consultancy & Training</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-200 shadow-xs text-neutral-700 text-xs font-mono mb-6">
                <GraduationCap className="w-3.5 h-3.5 text-[#3e7da2]" />
                <span>Advisory & Human Capital Development</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight">
                Strategic Technology Advisory & Certified Enterprise Training
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                Empowering financial institutions, government ministries, and enterprise enterprises with domain-specific architecture guidance, regulatory compliance blueprints, and hands-on technical training.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal("consultancy-training")}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded shadow-sm transition-colors flex items-center gap-2 text-sm cursor-pointer"
                >
                  <span>Request Advisory Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold rounded border border-neutral-300 transition-colors flex items-center gap-2 text-sm"
                >
                  <span>Speak with Lead Advisor</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 p-6 rounded shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#3e7da2]" />
                    <span className="text-xs font-mono uppercase text-neutral-500">Enterprise Training Track</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">Active Syllabus</span>
                </div>

                <div className="space-y-3">
                  {[
                    "Executive Digital Transformation Roadmap",
                    "NBE & INSA Cyber Risk Alignment Audit",
                    "Enterprise Infrastructure & Microservices Architecture",
                    "Hands-on OpenStack & Linux Kernel Engineering",
                    "Zero-Trust Cyber Hygiene & Compliance Training"
                  ].map((track, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-neutral-50 border border-neutral-200/80 rounded">
                      <CheckCircle2 className="w-4 h-4 text-[#3e7da2] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-neutral-700">{track}</span>
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

      {/* Strategic Advisory Section */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Strategic Advisory
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Enterprise Consultancy Services
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Independent, expert-backed technical and strategic consulting designed to de-risk high-stakes infrastructure and digital transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {consultingAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-neutral-200 p-8 rounded flex flex-col justify-between hover:border-neutral-300 transition-colors shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-neutral-50 border border-neutral-200 text-[#3e7da2] flex items-center justify-center mb-6 shadow-xs">
                    <area.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Training Programs */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[#3e7da2] font-mono text-xs uppercase tracking-wider block mb-2 font-bold">
              Skill Building & Certification
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Comprehensive Training Programs
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3">
              Curriculums engineered for hands-on operational excellence and workforce readiness across enterprise technologies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((prog) => (
              <div key={prog.title} className="p-6 bg-neutral-50 border border-neutral-200 rounded flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded bg-white border border-neutral-200 text-[#3e7da2] flex items-center justify-center mb-4 shadow-xs">
                    <prog.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-2">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {prog.desc}
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
                Need a Custom Advisory Engagement or Training Workshop?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Our senior enterprise architects and certified trainers work directly with your leadership and engineering teams to craft tailored roadmaps and training modules.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openDemoModal("consultancy-training")}
                className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
