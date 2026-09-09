"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  GraduationCap, 
  Lightbulb, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck2,
  Building2
} from "lucide-react";

export default function ConsultancyTrainingPage() {
  const consultingAreas = [
    {
      icon: Lightbulb,
      title: "Digital Transformation Strategies",
      desc: "Assisting institutions with strategic roadmaps, SaaS adoption, legacy modernization, and operational optimization to thrive in modern competitive markets."
    },
    {
      icon: ShieldCheck,
      title: "Risk Management & Regulatory Compliance",
      desc: "Navigating National Bank of Ethiopia (NBE), INSA, and global ISO/PCI-DSS standards with gap audits, policy frameworks, and remediation guidance."
    },
    {
      icon: Building2,
      title: "Enterprise Architecture & Integration",
      desc: "Designing scalable multi-tier architectures, microservices migration blueprints, and robust middleware integration strategies."
    }
  ];

  const trainingPrograms = [
    {
      icon: GraduationCap,
      title: "Cloud Computing & OpenStack Administration",
      desc: "Hands-on engineering training on deploying, securing, and maintaining enterprise OpenStack private cloud and virtualization environments."
    },
    {
      icon: BookOpen,
      title: "Institutional Digital Literacy & Upskilling",
      desc: "Structured training modules tailored across organizational tiers to drive software adoption, workflow productivity, and operational confidence."
    },
    {
      icon: FileCheck2,
      title: "Compliance & Cyber Hygiene Programs",
      desc: "Staff training on cybersecurity best practices, data handling regulations, fraud awareness, and compliance enforcement."
    },
    {
      icon: Users,
      title: "Technology Change Management",
      desc: "Facilitating smooth transitions during core banking, ERP, or billing system upgrades to eliminate disruption and accelerate time-to-value."
    }
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "expert", product } }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-28 pb-20 overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-6">
              <GraduationCap size={14} className="text-secondary-400" />
              <span>Advisory & Human Capital Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              Strategic Consultancy & <br />
              <span className="text-secondary-400">Enterprise Training</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed font-light mb-8 max-w-2xl">
              Empowering businesses, financial institutions, and government bodies across Ethiopia with over a decade of domain expertise and certified training partnerships.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openDemoModal("consultancy-training")}
                className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Request Advisory Consultation</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/how-we-work"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
              >
                <span>Explore How We Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Strategic Advisory
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Enterprise Consultancy Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultingAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
                    <area.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 font-display">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Skill Building
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Comprehensive Training Programs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((prog) => (
              <div key={prog.title} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <prog.icon size={24} className="text-secondary-600 mb-4" />
                <h4 className="text-base font-bold text-neutral-900 mb-2 font-display">
                  {prog.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {prog.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
