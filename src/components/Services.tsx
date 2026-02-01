"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  HardDrive,
  Settings,
  Smartphone,
  TestTube,
  Wrench,
  ArrowRight,
  Check,
  Layers
} from "lucide-react";
import SystemEngineering from "./services/SystemEngineering";
import SoftwareDevelopment from "./services/SoftwareDevelopment";
import CloudSolutions from "./services/CloudSolutions";
import ManagedServices from "./services/ManagedServices";
import ConsultancyTraining from "./services/ConsultancyTraining";
import ServicesSidebar from "./services/ServicesSidebar";

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
  const [activeId, setActiveId] = useState(services[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0.1 }
    );

    services.forEach((service) => {
      const element = document.getElementById(service.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      // Manually set active ID immediately for better UX
      setActiveId(id);
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Solutions Portfolio
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Integrated technology services designed for enterprise scale, security, and performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sticky Sidebar Navigation */}
          <div className="hidden lg:block lg:col-span-3">
            <ServicesSidebar 
              services={services} 
              activeId={activeId} 
              onSelect={scrollToSection} 
            />
          </div>

          {/* Scrollable Content Area */}
          <div className="lg:col-span-9 space-y-24">
            {services.map((service) => {
              if (service.id === "system-engineering") {
                return <SystemEngineering key={service.id} />;
              }
              if (service.id === "software-development") {
                return <SoftwareDevelopment key={service.id} />;
              }
              if (service.id === "cloud") {
                return <CloudSolutions key={service.id} />;
              }
              if (service.id === "managed-services") {
                return <ManagedServices key={service.id} />;
              }
              if (service.id === "consultancy") {
                return <ConsultancyTraining key={service.id} />;
              }
              
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="scroll-mt-32 group"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-3 bg-neutral-100 rounded-xl text-neutral-900 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                      <p className="text-emerald-700 font-medium text-sm mb-4">{service.subtitle}</p>
                      <p className="text-neutral-600 leading-relaxed max-w-3xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 bg-neutral-50/50 rounded-2xl p-8 border border-neutral-100">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="mt-1 text-emerald-600">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
