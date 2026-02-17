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
import { getIcon } from "@/lib/iconMap";
import type { SanityService } from "@/lib/types";

// Fallback data used when Sanity has no service entries yet
const fallbackServices = [
  {
    _id: "fallback-1",
    slug: "system-engineering",
    icon: "Server",
    title: "System Engineering",
    subtitle: "Infrastructure Excellence",
    description: "Building robust, scalable, and secure ICT infrastructure for mission-critical operations. Our engineering team ensures your physical and virtual systems are optimized for peak performance.",
    features: [
      { title: "Infrastructure Design", description: "End-to-end network architecture and deployment", icon: "Network" },
      { title: "Enterprise Systems", description: "Oracle Database & Application Server solutions", icon: "Database" },
      { title: "Security & Compliance", description: "Hardened systems meeting industry standards", icon: "Shield" },
      { title: "Storage Solutions", description: "High-availability SAN/NAS configurations", icon: "HardDrive" },
    ]
  },
  {
    _id: "fallback-2",
    slug: "software-development",
    icon: "Code2",
    title: "Software Development",
    subtitle: "Digital Innovation",
    description: "Custom enterprise software tailored to your specific business processes. We leverage modern stacks to build secure, scalable, and user-centric applications.",
    features: [
      { title: "Web Applications", description: "Scalable cloud-native web solutions", icon: "Monitor" },
      { title: "Mobile Solutions", description: "Cross-platform enterprise mobility apps", icon: "Smartphone" },
      { title: "API Integration", description: "Seamless connectivity between disparate systems", icon: "Settings" },
      { title: "QA & Testing", description: "Automated testing for reliability assurance", icon: "TestTube" },
    ]
  },
  {
    _id: "fallback-3",
    slug: "cloud",
    icon: "Cloud",
    title: "Cloud Solutions",
    subtitle: "Future-Ready Infrastructure",
    description: "Navigate your cloud journey with confidence. Whether private, public, or hybrid, we design cloud environments that drive agility and reduce operational overhead.",
    features: [
      { title: "Private Cloud", description: "Secure OpenStack & virtualization deployments", icon: "Cloud" },
      { title: "Migration Strategy", description: "Risk-free transition of legacy workloads", icon: "Layers" },
      { title: "Cloud Security", description: "Identity management and threat protection", icon: "Shield" },
      { title: "DevOps", description: "CI/CD pipelines and infrastructure as code", icon: "Settings" },
    ]
  },
  {
    _id: "fallback-4",
    slug: "managed-services",
    icon: "Headphones",
    title: "Managed Services",
    subtitle: "24/7 Operational Support",
    description: "Proactive management of your IT estate. We handle the complexity of day-to-day operations so you can focus on strategic business initiatives.",
    features: [
      { title: "NOC Services", description: "24/7 network monitoring and incident response", icon: "Network" },
      { title: "DBA Services", description: "Performance tuning and database maintenance", icon: "Database" },
      { title: "Server Management", description: "Patch management and health monitoring", icon: "Server" },
      { title: "IT Support", description: "Multi-tiered technical support and helpdesk", icon: "Wrench" },
    ]
  },
  {
    _id: "fallback-5",
    slug: "consultancy",
    icon: "GraduationCap",
    title: "Consultancy & Training",
    subtitle: "Strategic Expertise",
    description: "Empowering your team with the knowledge and strategies needed to thrive in the digital age. From digital transformation roadmaps to technical certification training.",
    features: [
      { title: "Digital Strategy", description: "Technology roadmaps aligned with business goals", icon: "Settings" },
      { title: "Risk Assessment", description: "Security audits and compliance consulting", icon: "Shield" },
      { title: "Corporate Training", description: "Customized technical workshops and certification", icon: "GraduationCap" },
      { title: "Process Optimization", description: "ITIL-based service management improvement", icon: "Wrench" },
    ]
  },
] satisfies SanityService[];

// Map of slug → sub-component renderer
const serviceComponentMap: Record<string, (service: SanityService) => React.ReactNode> = {
  "system-engineering": (service) => <SystemEngineering key={service._id} data={service} />,
  "software-development": (service) => <SoftwareDevelopment key={service._id} data={service} />,
  "cloud": (service) => <CloudSolutions key={service._id} data={service} />,
  "managed-services": (service) => <ManagedServices key={service._id} data={service} />,
  "consultancy": (service) => <ConsultancyTraining key={service._id} data={service} />,
};

interface ServicesProps {
  services?: SanityService[];
}

export default function Services({ services: sanityServices }: ServicesProps) {
  const services = sanityServices && sanityServices.length > 0 ? sanityServices : fallbackServices;
  const [activeId, setActiveId] = useState(services[0]?.slug || "");

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
      const element = document.getElementById(service.slug);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [services]);

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
              services={services.map(s => ({ id: s.slug, title: s.title }))} 
              activeId={activeId} 
              onSelect={scrollToSection} 
            />
          </div>

          {/* Scrollable Content Area */}
          <div className="lg:col-span-9 space-y-24">
            {services.map((service) => {
              const renderer = serviceComponentMap[service.slug];
              if (renderer) {
                return renderer(service);
              }
              
              // Generic fallback rendering for any new services added via Sanity
              const IconComponent = getIcon(service.icon);
              return (
                <div 
                  key={service._id} 
                  id={service.slug}
                  className="scroll-mt-32 group"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-3 bg-neutral-100 rounded-xl text-neutral-900 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                      <IconComponent size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                      <p className="text-emerald-700 font-medium text-sm mb-4">{service.subtitle}</p>
                      <p className="text-neutral-600 leading-relaxed max-w-3xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {service.features && service.features.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 bg-neutral-50/50 rounded-2xl p-8 border border-neutral-100">
                      {service.features.map((feature, idx) => {
                        const FeatureIcon = getIcon(feature.icon);
                        return (
                          <div key={idx} className="flex gap-4 items-start">
                            <div className="mt-1 text-emerald-600">
                              <FeatureIcon size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                              <h5 className="font-semibold text-neutral-900 text-sm mb-1">{feature.title}</h5>
                              <p className="text-sm text-neutral-500 leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
