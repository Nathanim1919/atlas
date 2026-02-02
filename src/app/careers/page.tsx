"use client";

import { motion, animate, useInView } from "framer-motion";
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
  TrendingUp,
  Building2,
  GraduationCap,
  Coffee,
  Rocket,
  Shield,
  Target,
  Lightbulb,
  ChevronRight,
  Star,
  Play,
  Calendar,
  FileText,
  MessageSquare,
  UserCheck,
  Send,
  Database,
  Cpu,
  Layers
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// CountUp Component
interface CountUpProps {
  from?: number;
  to: number;
  separator?: string;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

const CountUp = ({
  from = 0,
  to,
  separator = ",",
  duration = 1.5,
  className = "",
  suffix = "",
  prefix = "",
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated && ref.current) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = prefix + Math.floor(value).toLocaleString('en-US').replace(/,/g, separator) + suffix;
          }
        },
        onComplete: () => setHasAnimated(true),
      });
      return () => controls.stop();
    }
  }, [from, to, duration, separator, inView, hasAnimated, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}{from}{suffix}</span>;
};

const positions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Software Development",
    type: "Full-time",
    location: "Addis Ababa",
    icon: Code,
    description: "Architect and build scalable banking solutions using React, Node.js, and Oracle technologies.",
    tags: ["React", "Node.js", "Oracle", "TypeScript"],
    level: "Senior",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "System Engineer",
    department: "System Engineering",
    type: "Full-time",
    location: "Addis Ababa",
    icon: Server,
    description: "Design and implement enterprise infrastructure solutions for financial institutions.",
    tags: ["Linux", "VMware", "Oracle", "Networking"],
    level: "Mid-Senior",
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Database Administrator",
    department: "System Engineering",
    type: "Full-time",
    location: "Addis Ababa",
    icon: Database,
    description: "Manage and optimize Oracle databases for core banking systems with 99.99% uptime.",
    tags: ["Oracle DB", "PL/SQL", "RAC", "Performance Tuning"],
    level: "Senior",
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Product Manager - Uni-Cash",
    department: "Product Delivery",
    type: "Full-time",
    location: "Addis Ababa",
    icon: Layers,
    description: "Drive the roadmap for our flagship digital banking platform serving millions of users.",
    tags: ["Agile", "Fintech", "Strategy", "Banking"],
    level: "Senior",
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Managed Services",
    type: "Full-time",
    location: "Addis Ababa",
    icon: Cpu,
    description: "Build robust CI/CD pipelines and ensure high availability of mission-critical systems.",
    tags: ["Kubernetes", "Docker", "Jenkins", "Terraform"],
    level: "Mid",
    posted: "1 week ago",
  },
  {
    id: 6,
    title: "Business Development Manager",
    department: "Business Development",
    type: "Full-time",
    location: "Addis Ababa",
    icon: TrendingUp,
    description: "Identify and cultivate strategic partnerships with financial institutions across Ethiopia.",
    tags: ["Sales", "Banking", "Partnerships", "Strategy"],
    level: "Senior",
    posted: "4 days ago",
  },
];

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Industry-leading salaries with performance bonuses and comprehensive benefits package.",
    icon: Award,
    color: "from-primary-500 to-primary-600",
  },
  {
    title: "Career Growth",
    description: "Clear advancement paths, mentorship programs, and leadership development opportunities.",
    icon: Rocket,
    color: "from-secondary-400 to-secondary-500",
  },
  {
    title: "Learning & Development",
    description: "Certifications, conference attendance, and access to premium learning platforms.",
    icon: GraduationCap,
    color: "from-primary-400 to-primary-500",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and mental health support.",
    icon: Heart,
    color: "from-accent-400 to-accent-500",
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working arrangements, generous PTO, and family-friendly policies.",
    icon: Coffee,
    color: "from-primary-500 to-primary-700",
  },
  {
    title: "Impactful Work",
    description: "Shape Ethiopia's digital transformation and touch millions of lives through technology.",
    icon: Lightbulb,
    color: "from-secondary-500 to-accent-400",
  },
];

const values = [
  {
    title: "Excellence",
    description: "We pursue the highest standards in everything we deliver.",
    icon: Star,
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and creative problem-solving.",
    icon: Sparkles,
  },
  {
    title: "Integrity",
    description: "We build trust through transparency and ethical conduct.",
    icon: Shield,
  },
  {
    title: "Collaboration",
    description: "We achieve more together through teamwork and partnership.",
    icon: Users,
  },
];

const stats = [
  { value: 14, suffix: "+", label: "Years of Excellence" },
  { value: 90, suffix: "+", label: "Team Members" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 100, suffix: "%", label: "Growth Mindset" },
];

const applicationSteps = [
  {
    step: 1,
    title: "Apply Online",
    description: "Submit your application with resume and cover letter through our portal.",
    icon: Send,
  },
  {
    step: 2,
    title: "Initial Screening",
    description: "Our HR team reviews your application and conducts a phone screening.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Technical Assessment",
    description: "Complete a role-specific assessment to showcase your skills.",
    icon: Code,
  },
  {
    step: 4,
    title: "Interview Process",
    description: "Meet with the team through multiple rounds of interviews.",
    icon: MessageSquare,
  },
  {
    step: 5,
    title: "Final Decision",
    description: "Receive an offer and begin your journey with ACT.",
    icon: UserCheck,
  },
];

const departments = ["All", "Software Development", "System Engineering", "Product Delivery", "Managed Services", "Business Development"];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [hoveredPosition, setHoveredPosition] = useState<number | null>(null);

  const filteredPositions = selectedDepartment === "All" 
    ? positions 
    : positions.filter(p => p.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white selection:bg-primary-500 selection:text-white w-[80%] mx-auto">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(62,125,162,0.12)_0%,transparent_60%)] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(221,227,37,0.08)_0%,transparent_60%)] blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-600" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-grid)" />
            </svg>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[15%] w-20 h-20 rounded-2xl bg-linear-to-br from-primary-100 to-primary-200 opacity-60"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[30%] left-[10%] w-16 h-16 rounded-xl bg-linear-to-br from-secondary-200 to-secondary-300 opacity-50"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] left-[20%] w-12 h-12 rounded-full bg-linear-to-br from-accent-300 to-accent-400 opacity-40"
          />
        </div>

        <div className="container relative mx-auto px-6 py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium text-primary-700">We're Hiring — {positions.length} Open Positions</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-neutral-900 leading-[1.1] mb-8 font-display"
            >
              Build the Future of
              <span className="block mt-2">
                <span className="relative">
                  <span className="absolute -inset-2 bg-linear-to-r from-primary-200 via-secondary-200 to-accent-200 blur-2xl opacity-50"></span>
                  <span className="relative text-transparent bg-clip-text bg-linear-to-r from-primary-600 via-primary-500 to-secondary-500">
                    Ethiopian Fintech
                  </span>
                </span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-neutral-500 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Join a team of passionate technologists shaping Ethiopia's digital transformation. 
              At ACT, you'll work on cutting-edge projects that impact millions of lives.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="#positions"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-full overflow-hidden transition-all hover:bg-primary-700 shadow-xl shadow-primary-600/25 hover:shadow-primary-600/40 hover:-translate-y-1"
              >
                <span className="font-semibold text-lg">View Open Positions</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="#culture"
                className="group inline-flex items-center justify-center px-8 py-4 text-primary-600 bg-white border-2 border-primary-200 rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all font-semibold text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Our Culture
              </Link>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-neutral-900 font-display">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-neutral-500 mt-2 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-neutral-300 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-3 bg-primary-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-32 bg-neutral-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="culture-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary-600" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#culture-dots)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-6"
            >
              <Heart className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-neutral-600">Our Culture</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-display"
            >
              Where Innovation Meets
              <span className="text-primary-600"> Purpose</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-500 leading-relaxed"
            >
              At ACT, we believe in creating an environment where talented individuals can thrive, 
              innovate, and make a real difference in Ethiopia's digital landscape.
            </motion.p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white border border-neutral-200 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 font-display">{value.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Culture Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-linear-to-br from-primary-600 to-primary-800 p-1"
          >
            <div className="relative rounded-[22px] overflow-hidden bg-white">
              <div className="grid md:grid-cols-3 gap-1">
                {/* Main Feature */}
                <div className="md:col-span-2 relative h-[400px] bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <div className="text-center text-white p-12">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                      <Building2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 font-display">Modern Workspace</h3>
                    <p className="text-primary-100 text-lg max-w-md mx-auto">
                      Our Addis Ababa headquarters features collaborative spaces designed for innovation and productivity.
                    </p>
                  </div>
                </div>
                
                {/* Side Features */}
                <div className="flex flex-col gap-1">
                  <div className="flex-1 relative h-[198px] bg-linear-to-br from-secondary-400 to-secondary-500 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Users className="w-10 h-10 text-neutral-900 mx-auto mb-3" />
                      <h4 className="font-bold text-neutral-900 text-lg">Team Collaboration</h4>
                    </div>
                  </div>
                  <div className="flex-1 relative h-[198px] bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Globe className="w-10 h-10 text-white mx-auto mb-3" />
                      <h4 className="font-bold text-white text-lg">Global Standards</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 border border-secondary-200 mb-6"
              >
                <Sparkles className="w-4 h-4 text-secondary-600" />
                <span className="text-sm font-medium text-secondary-700">Why Join ACT</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-display"
              >
                Benefits That
                <span className="text-primary-600"> Matter</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-neutral-500"
              >
                We invest in our people because they are the foundation of our success.
              </motion.p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 font-display">{benefit.title}</h3>
                  <p className="text-neutral-500 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-32 bg-neutral-50 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(62,125,162,0.06)_0%,transparent_60%)]" />

        <div className="container relative mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-6"
            >
              <Briefcase className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-neutral-600">Open Positions</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-display"
            >
              Find Your
              <span className="text-primary-600"> Perfect Role</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-500"
            >
              Explore opportunities across our technical departments and business units.
            </motion.p>
          </div>

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-primary-200 hover:text-primary-600"
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Positions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredPosition(position.id)}
                onMouseLeave={() => setHoveredPosition(null)}
                className="group relative"
              >
                <div className={`relative p-8 rounded-3xl bg-white border transition-all duration-500 h-full flex flex-col ${
                  hoveredPosition === position.id 
                    ? "border-primary-300 shadow-2xl shadow-primary-500/10 -translate-y-2" 
                    : "border-neutral-200"
                }`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      hoveredPosition === position.id
                        ? "bg-primary-600 text-white"
                        : "bg-neutral-100 text-neutral-600"
                    }`}>
                      <position.icon className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary-50 text-xs font-medium text-primary-700">
                        {position.type}
                      </span>
                      <span className="text-xs text-neutral-400">{position.posted}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grow">
                    <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">{position.level}</span>
                    <h3 className="text-xl font-bold text-neutral-900 mt-1 mb-3 font-display group-hover:text-primary-700 transition-colors">
                      {position.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Building2 size={14} className="text-neutral-400" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-neutral-400" />
                        {position.location}
                      </span>
                    </div>

                    <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                      {position.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {position.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-lg bg-neutral-50 border border-neutral-100 text-xs font-medium text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link 
                    href={`/careers/apply/${position.id}`}
                    className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      hoveredPosition === position.id
                        ? "bg-primary-600 text-white"
                        : "bg-neutral-100 text-neutral-700 group-hover:bg-primary-600 group-hover:text-white"
                    }`}
                  >
                    Apply Now
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredPositions.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">No positions found</h3>
              <p className="text-neutral-500">Try selecting a different department or check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6"
            >
              <Target className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">How to Apply</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-display"
            >
              Your Journey
              <span className="text-primary-600"> Starts Here</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-500"
            >
              Our streamlined application process is designed to find the best fit for both you and ACT.
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-8 left-8 right-8 h-0.5 bg-linear-to-r from-primary-200 via-primary-400 to-primary-200 hidden lg:block" />
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                {applicationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center group"
                  >
                    {/* Step Number */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-primary-200 flex items-center justify-center mx-auto mb-6 group-hover:border-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/20 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-primary-600" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 font-display">{step.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[32px] overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary-600 via-primary-700 to-primary-900" />
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="currentColor" className="text-white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(221,227,37,0.15)_0%,transparent_50%)]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

            {/* Content */}
            <div className="relative z-10 px-8 py-20 md:px-16 md:py-28 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white mb-8 font-display"
              >
                Don't See the Right Role?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                We're always looking for exceptional talent. Send us your resume and 
                we'll reach out when a position matches your skills.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link 
                  href="mailto:careers@act.com.et"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-700 rounded-full font-bold text-lg hover:bg-secondary-400 hover:text-neutral-900 transition-all duration-300 shadow-2xl hover:shadow-secondary-400/30 hover:-translate-y-1"
                >
                  <Send className="w-5 h-5" />
                  Send Your Resume
                </Link>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Contact Us
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Space */}
      <div className="h-20 bg-white" />
    </div>
  );
}
