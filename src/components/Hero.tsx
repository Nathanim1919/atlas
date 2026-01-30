"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Server, Shield, Globe, Cpu, Database, Activity } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "90+", label: "Team Members" },
  { value: "80+", label: "Enterprise Projects" },
  { value: "99.9%", label: "Uptime Guaranteed" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-blue-950">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-emerald-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Corporate & Clean */}
          <div className="text-white z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/50 border border-emerald-700/50 rounded-md mb-8"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-wide uppercase text-emerald-100">Enterprise ICT Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-6xl font-bold font-display leading-tight mb-6 tracking-tight"
            >
              Building the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
                Digital Infrastructure
              </span>
              <br />
              of Tomorrow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-emerald-100/70 max-w-xl mb-10 leading-relaxed font-light"
            >
              Atlas Computer Technology delivers mission-critical systems, cloud infrastructure, and enterprise software designed for scale, security, and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-900/20"
              >
                Start Your Transformation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-emerald-700 text-emerald-100 font-semibold rounded-lg hover:bg-emerald-900/30 transition-all"
              >
                View Services
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-emerald-800/30 flex items-center gap-8"
            >
              <div className="flex items-center gap-2 text-emerald-200/60 grayscale hover:grayscale-0 transition-all duration-300">
                <Globe size={20} />
                <span className="text-sm font-medium">Global Standards</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200/60 grayscale hover:grayscale-0 transition-all duration-300">
                <Shield size={20} />
                <span className="text-sm font-medium">Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-200/60 grayscale hover:grayscale-0 transition-all duration-300">
                <Server size={20} />
                <span className="text-sm font-medium">99.9% Uptime</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Abstract Tech Visualization */}
          <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Core */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20"
              >
                <div className="w-32 h-32 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-2xl shadow-emerald-500/30 flex items-center justify-center transform rotate-12 border border-emerald-400/30 backdrop-blur-xl">
                  <Cpu size={48} className="text-white" />
                </div>
                {/* Pulse Effect */}
                <div className="absolute inset-0 bg-emerald-500 rounded-2xl animate-ping opacity-20" />
              </motion.div>

              {/* Orbiting Nodes */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute border border-emerald-500/20 rounded-full"
                  style={{
                    width: `${300 + i * 150}px`,
                    height: `${300 + i * 150}px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20 + i * 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-950 border-2 border-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i }}
                  />
                </motion.div>
              ))}

              {/* Connecting Lines (Decorative) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGrad)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#lineGrad)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="url(#lineGrad)" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="url(#lineGrad)" strokeWidth="1" />
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Data Cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute top-20 right-10 bg-emerald-900/80 backdrop-blur-md p-4 rounded-xl border border-emerald-500/30 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-200">SYSTEM_STATUS</span>
                </div>
                <div className="text-sm font-semibold text-white">All Systems Operational</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-32 left-0 bg-emerald-900/80 backdrop-blur-md p-4 rounded-xl border border-emerald-500/30 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={14} className="text-emerald-400" />
                  <span className="text-xs font-mono text-emerald-200">SECURITY_LEVEL</span>
                </div>
                <div className="text-sm font-semibold text-white">Enterprise Grade Encryption</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-10 right-20 bg-emerald-900/80 backdrop-blur-md p-4 rounded-xl border border-emerald-500/30 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Database size={14} className="text-emerald-400" />
                  <span className="text-xs font-mono text-emerald-200">DATA_FLOW</span>
                </div>
                <div className="text-sm font-semibold text-white">Real-time Analytics Active</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute top-10 left-20 bg-emerald-900/80 backdrop-blur-md p-4 rounded-xl border border-emerald-500/30 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Activity size={14} className="text-emerald-400" />
                  <span className="text-xs font-mono text-emerald-200">NETWORK_LATENCY</span>
                </div>
                <div className="text-sm font-semibold text-white">&lt; 20ms Global Response</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid - Clean & Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-emerald-800/30 pt-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-emerald-200/60 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
