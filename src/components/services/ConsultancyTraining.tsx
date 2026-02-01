"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Settings, 
  Shield, 
  Wrench, 
  ArrowRight,
  Target,
  Lightbulb,
  BookOpen,
  Presentation,
  TrendingUp,
  FileCheck
} from "lucide-react";

export default function ConsultancyTraining() {
  const features = [
    {
      title: "Digital Strategy",
      description: "Technology roadmaps aligned with business goals.",
      icon: Target,
      tag: "Strategic"
    },
    {
      title: "Risk Assessment",
      description: "Security audits and compliance consulting.",
      icon: Shield,
      tag: "Compliance"
    },
    {
      title: "Corporate Training",
      description: "Customized technical workshops and certification.",
      icon: GraduationCap,
      tag: "Education"
    },
    {
      title: "Process Optimization",
      description: "ITIL-based service management improvement.",
      icon: TrendingUp,
      tag: "Efficiency"
    }
  ];

  return (
    <section id="consultancy" className="scroll-mt-32 mb-24">
      <div className="relative rounded-3xl overflow-hidden bg-white border border-neutral-200 shadow-xl shadow-neutral-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-50 border border-secondary-200 text-secondary-700 text-xs font-medium mb-6">
              <Lightbulb size={14} className="text-secondary-500" />
              <span>Strategic Expertise</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-neutral-900">
              Consultancy & <span className="text-primary-600">Training</span>
            </h2>
            
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Empowering your team with the knowledge and strategies needed to thrive. 
              From digital transformation roadmaps to technical certification training, 
              we bridge the gap between technology and business value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary-600/20">
                Explore Training Catalog <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Roadmap Visualization */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl transform rotate-2 scale-105 opacity-50" />
            <div className="relative bg-white rounded-xl border border-neutral-200 p-6 shadow-lg">
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-6">Transformation Roadmap</div>
              
              <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-neutral-100">
                {[
                  { title: "Assessment", desc: "Current state analysis & gap identification", color: "bg-neutral-200", icon: FileCheck },
                  { title: "Strategy", desc: "Roadmap development & technology selection", color: "bg-secondary-400", icon: Target },
                  { title: "Implementation", desc: "Execution, deployment & integration", color: "bg-primary-500", icon: Settings },
                  { title: "Enablement", desc: "Training, documentation & handover", color: "bg-emerald-500", icon: BookOpen }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="relative"
                  >
                    <div className={`absolute -left-[29px] top-1 w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center z-10 ${step.color}`}>
                      <step.icon size={12} className="text-white" />
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100 hover:border-primary-200 transition-colors">
                      <h4 className="text-sm font-bold text-neutral-900">{step.title}</h4>
                      <p className="text-xs text-neutral-500 mt-1">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-neutral-200">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`
                p-8 group hover:bg-neutral-50 transition-colors
                ${idx !== features.length - 1 ? 'lg:border-r border-neutral-200' : ''}
                ${idx < 2 ? 'border-b lg:border-b-0 border-neutral-200' : ''}
              `}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="p-2 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200">
                  {feature.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

