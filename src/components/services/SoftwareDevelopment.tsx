"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Monitor, 
  Smartphone, 
  Settings, 
  TestTube,
  ArrowRight,
  Terminal,
  GitBranch,
  Globe,
  Cpu
} from "lucide-react";
import { getIcon } from "@/lib/iconMap";
import type { SanityService } from "@/lib/types";

const defaultFeatures = [
  {
    title: "Web Applications",
    description: "Scalable cloud-native solutions built with modern frameworks like React, Next.js, and Node.js.",
    icon: "Monitor",
    techTags: ["React", "Next.js", "Node.js"]
  },
  {
    title: "Mobile Solutions",
    description: "Cross-platform enterprise mobility apps that deliver native performance on iOS and Android.",
    icon: "Smartphone",
    techTags: ["Flutter", "React Native", "Swift"]
  },
  {
    title: "API Integration",
    description: "Seamless connectivity between disparate systems using RESTful and GraphQL architectures.",
    icon: "Settings",
    techTags: ["REST", "GraphQL", "gRPC"]
  },
  {
    title: "QA & Testing",
    description: "Automated testing pipelines ensuring 99.9% reliable deployments and regression-free releases.",
    icon: "TestTube",
    techTags: ["Cypress", "Jest", "Selenium"]
  }
];

interface SoftwareDevelopmentProps {
  data?: SanityService;
}

export default function SoftwareDevelopment({ data }: SoftwareDevelopmentProps) {
  const features = data?.features && data.features.length > 0 ? data.features : defaultFeatures;
  const subtitle = data?.subtitle || "Digital Innovation";
  const heroDescription = data?.heroDescription || "Custom enterprise software tailored to your specific business processes. We leverage modern stacks to build secure, scalable, and user-centric applications that drive digital transformation.";
  const ctaPrimary = data?.ctaPrimaryText || "Start a Project";

  return (
    <section id="software-development" className="scroll-mt-32 mb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-50)] border border-[var(--primary-100)] text-[var(--primary-700)] text-xs font-medium mb-6">
            <Code2 size={14} />
            <span>{subtitle}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-neutral-900">
            Software <span className="text-[var(--primary-600)]">Development</span>
          </h2>
          
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            {heroDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center gap-2 shadow-lg shadow-[var(--primary-600)]/20">
              {ctaPrimary} <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Terminal / Code Visual */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary-100)] to-[var(--secondary-100)] rounded-3xl transform rotate-3 scale-105 opacity-50 blur-xl" />
          <div className="relative bg-[#0f172a] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 font-mono text-sm">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-[#1e293b]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 text-neutral-400 text-xs">deploy.sh</div>
            </div>
            <div className="p-6 text-neutral-300 space-y-2">
              <div className="flex">
                <span className="text-emerald-400 mr-2">➜</span>
                <span className="text-blue-400">~</span>
                <span className="ml-2">act-cli init project</span>
              </div>
              <div className="text-neutral-500">Initializing enterprise environment...</div>
              <div className="flex">
                <span className="text-emerald-400 mr-2">✔</span>
                <span>Setup CI/CD pipelines</span>
              </div>
              <div className="flex">
                <span className="text-emerald-400 mr-2">✔</span>
                <span>Configure microservices</span>
              </div>
              <div className="flex">
                <span className="text-emerald-400 mr-2">✔</span>
                <span>Deploying to production...</span>
              </div>
              <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-400">
                Success: Deployment complete in 124ms
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid Features */}
      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, idx) => {
          const FeatureIcon = getIcon(feature.icon);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-[var(--primary-200)] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary-500)]/5"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FeatureIcon size={100} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 text-[var(--primary-600)] shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <FeatureIcon size={20} />
                </div>
                
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-sm">
                  {feature.description}
                </p>

                {feature.techTags && feature.techTags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {feature.techTags.map((t, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-600 text-[10px] font-medium uppercase tracking-wider border border-neutral-200">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
