"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Server, 
  Code2, 
  Cloud, 
  Headphones,
  GraduationCap,
  Database,
  Shield,
  Monitor,
  Network,
  Cpu,
  HardDrive,
  Settings,
  Smartphone,
  TestTube,
  Wrench,
  ArrowRight,
  ChevronRight,
  Layers,
  Check
} from "lucide-react";

const services = [
  {
    id: "system-engineering",
    icon: Server,
    title: "System Engineering",
    subtitle: "Infrastructure Excellence",
    description: "Building robust, scalable, and secure ICT infrastructure for mission-critical operations. Our engineering team ensures your physical and virtual systems are optimized for peak performance.",
    features: [
      { icon: Network, title: "Infrastructure Design", desc: "End-to-end network architecture and deployment" },
      { icon: Database, title: "Enterprise Systems", desc: "Oracle Database & Application Server solutions" },
      { icon: Shield, title: "Security & Compliance", desc: "Hardened systems meeting industry standards" },
      { icon: HardDrive, title: "Storage Solutions", desc: "High-availability SAN/NAS configurations" },
    ]
  },
  {
    id: "software-development",
    icon: Code2,
    title: "Software Development",
    subtitle: "Digital Innovation",
    description: "Custom enterprise software tailored to your specific business processes. We leverage modern stacks to build secure, scalable, and user-centric applications.",
    features: [
      { icon: Monitor, title: "Web Applications", desc: "Scalable cloud-native web solutions" },
      { icon: Smartphone, title: "Mobile Solutions", desc: "Cross-platform enterprise mobility apps" },
      { icon: Settings, title: "API Integration", desc: "Seamless connectivity between disparate systems" },
      { icon: TestTube, title: "QA & Testing", desc: "Automated testing for reliability assurance" },
    ]
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Solutions",
    subtitle: "Future-Ready Infrastructure",
    description: "Navigate your cloud journey with confidence. Whether private, public, or hybrid, we design cloud environments that drive agility and reduce operational overhead.",
    features: [
      { icon: Cloud, title: "Private Cloud", desc: "Secure OpenStack & virtualization deployments" },
      { icon: Layers, title: "Migration Strategy", desc: "Risk-free transition of legacy workloads" },
      { icon: Shield, title: "Cloud Security", desc: "Identity management and threat protection" },
      { icon: Settings, title: "DevOps", desc: "CI/CD pipelines and infrastructure as code" },
    ]
  },
  {
    id: "managed-services",
    icon: Headphones,
    title: "Managed Services",
    subtitle: "24/7 Operational Support",
    description: "Proactive management of your IT estate. We handle the complexity of day-to-day operations so you can focus on strategic business initiatives.",
    features: [
      { icon: Network, title: "NOC Services", desc: "24/7 network monitoring and incident response" },
      { icon: Database, title: "DBA Services", desc: "Performance tuning and database maintenance" },
      { icon: Server, title: "Server Management", desc: "Patch management and health monitoring" },
      { icon: Wrench, title: "IT Support", desc: "Multi-tiered technical support and helpdesk" },
    ]
  },
  {
    id: "consultancy",
    icon: GraduationCap,
    title: "Consultancy & Training",
    subtitle: "Strategic Expertise",
    description: "Empowering your team with the knowledge and strategies needed to thrive in the digital age. From digital transformation roadmaps to technical certification training.",
    features: [
      { icon: Settings, title: "Digital Strategy", desc: "Technology roadmaps aligned with business goals" },
      { icon: Shield, title: "Risk Assessment", desc: "Security audits and compliance consulting" },
      { icon: GraduationCap, title: "Corporate Training", desc: "Customized technical workshops and certification" },
      { icon: Wrench, title: "Process Optimization", desc: "ITIL-based service management improvement" },
    ]
  },
];

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const activeService = services.find(s => s.id === activeServiceId) || services[0];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - Clean & Technical */}
        <div className="mb-16 border-b border-neutral-200 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Solutions Portfolio
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl">
                Integrated technology services designed for enterprise scale, security, and performance.
              </p>
            </div>
            <div className="hidden md:block">
              <a href="#contact" className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center gap-2 text-sm">
                Download Service Catalog <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-0 border border-neutral-200 rounded-lg overflow-hidden bg-neutral-50">
          {/* Left Column - Navigation List */}
          <div className="lg:col-span-3 bg-white border-r border-neutral-200">
            <div className="flex flex-col">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group flex items-center justify-between p-5 text-left transition-all duration-200 border-l-4 ${
                    activeServiceId === service.id
                      ? "bg-neutral-50 border-l-emerald-600 text-neutral-900"
                      : "bg-white border-l-transparent text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                  }`}
                >
                  <span className="font-medium text-sm">{service.title}</span>
                  {activeServiceId === service.id && (
                    <ChevronRight size={16} className="text-emerald-600" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Trust Indicator - Integrated */}
            <div className="p-6 mt-auto border-t border-neutral-200 bg-neutral-50">
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3">Service Standards</h4>
              <ul className="space-y-2">
                {[
                  "ISO 9001:2015 Certified",
                  "24/7 Support Available",
                  "SLA Guaranteed"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-neutral-600">
                    <Check size={12} className="text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Detail View */}
          <div className="lg:col-span-9 bg-white min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full flex flex-col"
              >
                {/* Content Header */}
                <div className="p-8 md:p-10 border-b border-neutral-200 bg-white">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-3 bg-neutral-100 rounded-md text-neutral-900">
                      <activeService.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{activeService.title}</h3>
                      <p className="text-emerald-700 font-medium text-sm mb-4">{activeService.subtitle}</p>
                      <p className="text-neutral-600 leading-relaxed max-w-3xl">
                        {activeService.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features Grid - Technical Layout */}
                <div className="p-8 md:p-10 bg-neutral-50/30 grow">
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {activeService.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="mt-1 text-emerald-600 group-hover:text-emerald-700 transition-colors">
                          <feature.icon size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h5 className="font-semibold text-neutral-900 text-sm mb-1">{feature.title}</h5>
                          <p className="text-sm text-neutral-500 leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-neutral-200">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-neutral-400">
                        Ref: {activeService.id.toUpperCase()}_SVC_V2.4
                      </div>
                      <button className="text-sm font-semibold text-neutral-900 hover:text-emerald-700 flex items-center gap-2 transition-colors">
                        View Technical Specifications <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
