"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Users, 
  Award,
  Shield,
  Zap,
  RefreshCw,
  Handshake
} from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Developing cutting-edge technologies and staying ahead of industry trends" },
  { icon: Target, title: "Customer Success", description: "Prioritizing customer outcomes and ensuring our solutions deliver real value" },
  { icon: Award, title: "Quality", description: "Maintaining high standards in products and service delivery" },
  { icon: Zap, title: "Efficiency", description: "Delivering solutions that are not only efficient but also cost-effective" },
  { icon: RefreshCw, title: "Adaptability", description: "Embracing change and being responsive to the evolving technological landscape" },
  { icon: Shield, title: "Integrity", description: "Conducting business ethically and building trust with clients and partners" },
  { icon: Handshake, title: "Collaboration", description: "Working closely with customers and within teams to achieve excellent results" },
];

const stats = [
  { value: "10+", label: "Projects Accomplished", suffix: "" },
  { value: "10+", label: "Year-on-Year SLAs", suffix: "" },
  { value: "10+", label: "International Partnerships", suffix: "" },
  { value: "5", label: "Technical Departments", suffix: "" },
];

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <span className="text-4xl md:text-5xl font-bold font-display text-primary-600">
      {value}{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
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
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6">
            Ethiopia&apos;s Leading <span className="gradient-text">ICT Solutions</span> Provider
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Atlas Computer Technology PLC (ACT) is a professional wide-ranging ICT services and products company headquartered in Addis Ababa, Ethiopia.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 p-8 aspect-square">
              {/* Abstract Design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border-2 border-dashed border-primary-300 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-16 border-2 border-dashed border-accent-300 rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl">
                      <span className="text-white text-6xl font-bold font-display">A</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Users className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-900">90+</div>
                    <div className="text-xs text-neutral-500">Employees</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Award className="text-accent-600" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-900">14+</div>
                    <div className="text-xs text-neutral-500">Years</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-display text-neutral-900 mb-6">
              Building Tomorrow&apos;s Technology Solutions Today
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              ACT has been in business for over a decade now, providing ICT services and products for customers in different industry verticals. Our products and services include infrastructure building, system integration, consultancy, software development, and ICT product supply.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              ACT is organized into several technical departments and operational business units including System Engineering, Software Development, Product Delivery, Managed Services, and Uni-Cash. We are led by a competent management staff with Managing Directors for both Technical and Operations divisions.
            </p>
            
            {/* Key Stats */}
            <div ref={ref} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-neutral-50 border border-neutral-200"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-neutral-600 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div id="vision" className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl transform group-hover:scale-[1.02] transition-transform" />
            <div className="relative p-8 md:p-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">Our Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Create, adopt, and integrate technology so that people, businesses, and organizations can thrive.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl transform group-hover:scale-[1.02] transition-transform" />
            <div className="relative p-8 md:p-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To engineer and integrate innovative, cost-effective software and IT solutions using cutting-edge technology to empower our customers with meaningful benefits and impact.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold font-display text-neutral-900 mb-4">Our Core Values</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            The principles that guide everything we do at Atlas Computer Technology
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-2xl bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                <value.icon className="text-primary-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h4 className="font-semibold text-lg text-neutral-900 mb-2">{value.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


