"use client";

import { motion } from "framer-motion";
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
  Palette,
  TestTube,
  Wrench,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    id: "system-engineering",
    icon: Server,
    title: "System Engineering",
    subtitle: "35+ Professionals",
    description: "Building robust and well-managed ICT infrastructure for business-critical industries with our knowledgeable engineering team.",
    color: "from-blue-500 to-blue-600",
    features: [
      { icon: Network, title: "ICT Infrastructure Projects", desc: "Design, management, and execution of complete ICT solutions" },
      { icon: Database, title: "Enterprise Systems", desc: "Oracle Database, Application Servers, Backup & Recovery Solutions" },
      { icon: Shield, title: "SLA Services", desc: "Managed services for servers, storage, OS, and enterprise databases" },
      { icon: Monitor, title: "Project Audit", desc: "ICT infrastructure project audit, commissioning, and verification" },
      { icon: Cpu, title: "Consultancy", desc: "Expert consultancy on ICT infrastructure systems implementation" },
      { icon: HardDrive, title: "Managed Services", desc: "Complete ICT infrastructure management for reduced total cost" },
    ],
    stats: [
      { value: "80+", label: "Integration Projects" },
      { value: "10+", label: "SLA Clients" },
      { value: "35+", label: "Engineers" },
    ]
  },
  {
    id: "software-development",
    icon: Code2,
    title: "Enterprise Application Development",
    subtitle: "55+ Professionals",
    description: "World-class software development focused on robust, flexible, secured, and user-friendly enterprise applications.",
    color: "from-violet-500 to-violet-600",
    features: [
      { icon: Monitor, title: "Custom Web Development", desc: "Modern web applications for internal use or customer-facing solutions" },
      { icon: Smartphone, title: "Mobile Development", desc: "Multi-platform mobile apps with low-risk, cost-effective solutions" },
      { icon: Settings, title: "API Development", desc: "Secure, well-documented APIs for seamless system integration" },
      { icon: Palette, title: "UX/UI Design", desc: "Responsive & scalable apps that transform customer experiences" },
      { icon: TestTube, title: "Quality Assurance", desc: "Industry-standard automated and manual testing practices" },
      { icon: Wrench, title: "Application Maintenance", desc: "Modernize applications for improved security and reliability" },
    ],
    stats: [
      { value: "40+", label: "Developers" },
      { value: "5", label: "QA Team" },
      { value: "5", label: "Dev Teams" },
    ]
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Implementation Services",
    subtitle: "Private Cloud Solutions",
    description: "Your trusted partner for private cloud solutions in Ethiopia, ensuring expected outcomes with less cost, risk, and disruption.",
    color: "from-cyan-500 to-cyan-600",
    features: [
      { icon: Cloud, title: "OpenStack Implementation", desc: "Private cloud deployment for financial and government institutions" },
      { icon: Server, title: "Server Configuration", desc: "Tune virtual and physical servers to match application workloads" },
      { icon: Shield, title: "Security & Governance", desc: "Ensure secure environment with standardized governance" },
      { icon: Database, title: "Data Management", desc: "Maximize your use of data with optimized cloud infrastructure" },
      { icon: Settings, title: "Multi-Cloud Management", desc: "Simplify management of multiple cloud environments" },
      { icon: Monitor, title: "Consulting Services", desc: "Make the right decisions with expert cloud consulting" },
    ],
    stats: [
      { value: "100%", label: "Success Rate" },
      { value: "10+", label: "Implementations" },
      { value: "24/7", label: "Support" },
    ]
  },
  {
    id: "managed-services",
    icon: Headphones,
    title: "Managed Services & SLA",
    subtitle: "End-to-End Support",
    description: "Comprehensive end-to-end support services with defined service standards and commitments based on your requirements.",
    color: "from-emerald-500 to-emerald-600",
    features: [
      { icon: Network, title: "Network & Security", desc: "Complete network infrastructure and security management" },
      { icon: HardDrive, title: "Storage Management", desc: "Enterprise storage solutions monitoring and maintenance" },
      { icon: Database, title: "Database Services", desc: "Oracle and enterprise database administration and support" },
      { icon: Code2, title: "Application Support", desc: "Application server maintenance and optimization" },
      { icon: Server, title: "Operating Systems", desc: "Linux, Windows Server, and virtualization platforms" },
      { icon: Settings, title: "Infrastructure", desc: "Complete ICT infrastructure lifecycle management" },
    ],
    stats: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "4hr", label: "Response Time" },
      { value: "10+", label: "Enterprise Clients" },
    ]
  },
  {
    id: "consultancy",
    icon: GraduationCap,
    title: "Consultancy & Training",
    subtitle: "10+ Years Experience",
    description: "Empowering businesses, non-profits, and government institutions across Ethiopia with expert ICT consultancy and training.",
    color: "from-amber-500 to-amber-600",
    features: [
      { icon: Settings, title: "Digital Transformation", desc: "SaaS adoption, legacy system modernization, and optimization" },
      { icon: Shield, title: "Risk & Compliance", desc: "Guidance on risk management and regulatory requirements" },
      { icon: Code2, title: "SaaS Implementation", desc: "Expert integration, data migration, and configuration" },
      { icon: GraduationCap, title: "Technology Training", desc: "SaaS platforms and cloud computing education" },
      { icon: Monitor, title: "Digital Literacy", desc: "Enhance digital skills across all organizational levels" },
      { icon: Wrench, title: "Change Management", desc: "Facilitate smooth technology adoption transitions" },
    ],
    stats: [
      { value: "20+", label: "Organizations" },
      { value: "500+", label: "Trained Professionals" },
      { value: "10+", label: "Years Experience" },
    ]
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0].id);

  const activeServiceData = services.find(s => s.id === activeService);

  return (
    <section id="services" className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6">
            Comprehensive <span className="gradient-text">ICT Solutions</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From system engineering to software development, we deliver end-to-end technology solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeService === service.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <service.icon size={20} />
              <span className="hidden sm:inline">{service.title.split(" ")[0]}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Service Detail */}
        {activeServiceData && (
          <motion.div
            key={activeServiceData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Service Header */}
            <div className={`bg-gradient-to-r ${activeServiceData.color} p-8 md:p-12 text-white`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <activeServiceData.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-display">{activeServiceData.title}</h3>
                    <p className="text-white/80">{activeServiceData.subtitle}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  {activeServiceData.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold font-display">{stat.value}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-lg text-white/90 max-w-3xl">
                {activeServiceData.description}
              </p>
            </div>

            {/* Service Features */}
            <div className="p-8 md:p-12">
              <h4 className="text-xl font-semibold font-display text-neutral-900 mb-8">What We Offer</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeServiceData.features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group p-6 rounded-2xl border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                      <feature.icon className="text-primary-600 group-hover:text-white transition-colors" size={24} />
                    </div>
                    <h5 className="font-semibold text-neutral-900 mb-2">{feature.title}</h5>
                    <p className="text-neutral-600 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Service Cards Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold font-display text-neutral-900 mb-8 text-center">
            All Services at a Glance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveService(service.id)}
                className="group cursor-pointer p-6 rounded-2xl bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold font-display text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-primary-600 font-medium text-sm">
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-neutral-500 mb-8">Working with industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Oracle", "IBM", "Lenovo", "Nutanix", "RedHat", "SUSE"].map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 bg-white rounded-xl border border-neutral-200 text-neutral-600 font-semibold hover:border-primary-300 hover:text-primary-600 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


