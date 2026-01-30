"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Code, 
  Palette, 
  Server, 
  Users, 
  CheckCircle,
  Sparkles,
  Zap,
  Heart,
  Globe,
  Award,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

const positions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Addis Ababa",
    icon: Code,
    description: "Architect and build scalable solutions using React, Node.js, and modern cloud technologies.",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
    icon: Palette,
    description: "Craft intuitive and beautiful user experiences that delight our customers.",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Addis Ababa",
    icon: Server,
    description: "Build robust CI/CD pipelines and ensure high availability of our cloud infrastructure.",
    tags: ["Kubernetes", "Docker", "Terraform"],
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    type: "Full-time",
    location: "Addis Ababa",
    icon: Users,
    description: "Bridge the gap between technical teams and stakeholders to deliver high-impact products.",
    tags: ["Agile", "Strategy", "Communication"],
  },
  {
    id: 5,
    title: "QA Automation Engineer",
    department: "Quality Assurance",
    type: "Full-time",
    location: "Remote",
    icon: CheckCircle,
    description: "Design and implement automated test frameworks to ensure software quality.",
    tags: ["Selenium", "Python", "Testing"],
  },
];

const benefits = [
  {
    title: "Innovation First",
    description: "Work on cutting-edge technologies that shape the future of digital infrastructure.",
    icon: Zap,
  },
  {
    title: "Growth & Learning",
    description: "Continuous mentorship, conference budgets, and access to premium learning resources.",
    icon: Sparkles,
  },
  {
    title: "Inclusive Culture",
    description: "A collaborative environment where every voice is heard and diversity is celebrated.",
    icon: Heart,
  },
];

const stats = [
  { value: "12+", label: "Years of Excellence", icon: Award },
  { value: "90+", label: "Team Members", icon: Users },
  { value: "3", label: "Global Offices", icon: Globe },
  { value: "200%", label: "YoY Growth", icon: TrendingUp },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-emerald-500 selection:text-white">
      
      {/* Open Positions - 3 Column Grid (Preserved as requested) */}
      <section id="positions" className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-display">Open Positions</h2>
              <p className="text-neutral-500 text-lg">Find the role that fits your unique skills.</p>
            </div>
            <Link href="/contact" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-2 group">
              View all departments <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col p-6 rounded-3xl bg-white border border-neutral-200 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 group-hover:text-emerald-600 group-hover:border-emerald-100 transition-colors shadow-sm">
                    <position.icon size={24} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 text-xs font-medium text-neutral-600">
                    {position.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {position.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={14} /> {position.department}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {position.location}
                  </span>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                  {position.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {position.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-neutral-50 border border-neutral-200 text-xs text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/careers/apply/${position.id}`}
                  className="w-full py-3 rounded-xl bg-neutral-900 text-white text-sm font-medium flex items-center justify-center gap-2 group-hover:bg-emerald-600 transition-colors"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Clean Enterprise Style */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-emerald-950 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid-cta" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-emerald-500" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-cta)" />
              </svg>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
                Don't see the right role?
              </h2>
              <p className="text-emerald-100/70 text-lg mb-10">
                We are always looking for talented individuals to join our team. 
                Send us your resume and we'll keep you in mind for future openings.
              </p>
              <Link 
                href="mailto:careers@act.com.et"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-950 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
              >
                Email Us Your Resume <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
