"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Bank/Client Logos
const allPartners = [
  { name: "CBE", src: "/bank/act.png" }, // Placeholder if needed
  { name: "Ethio Telecom", src: "/bank/Ethio-Telecom.jpg" },
  { name: "Dashen Bank", src: "/bank/dashen.jpeg" },
  { name: "Bunna Bank", src: "/bank/bunna.png" },
  { name: "Awash", src: "/bank/birhan.png" },
  { name: "Wegagen", src: "/bank/wegagen.png" },
  { name: "Nib", src: "/bank/nib.png" },
  { name: "Enat", src: "/bank/enat.png" },
  { name: "Oromia Bank", src: "/bank/oromo.png" },
  { name: "Sinque Bank", src: "/bank/sinque.png" },
  { name: "Hijra Bank", src: "/bank/hijira.jpeg" },
  { name: "Addis Bank", src: "/bank/addis.jpeg" },
];

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState<Array<{ text: string; color: string; id: number; isCommand?: boolean }>>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps = [
    { text: "act init infrastructure", type: "command" },
    { text: "Initializing secure environment...", type: "output", color: "text-neutral-500" },
    { text: "✓ Core banking systems connected", type: "output", color: "text-primary-400" },
    { text: "✓ Enterprise security protocols active", type: "output", color: "text-primary-400" },
    
    { text: "act security --scan --compliance pci-dss", type: "command" },
    { text: "Running vulnerability assessment...", type: "output", color: "text-neutral-500" },
    { text: "✓ PCI-DSS Compliance: VERIFIED", type: "output", color: "text-emerald-400" },
    { text: "✓ Firewall rules updated", type: "output", color: "text-emerald-400" },

    { text: "act build --service uni-cash-mobile", type: "command" },
    { text: "Compiling mobile banking module...", type: "output", color: "text-neutral-500" },
    { text: "✓ Build successful (1.2s)", type: "output", color: "text-secondary-400" },
    
    { text: "act provision --cloud hybrid", type: "command" },
    { text: "Provisioning hybrid cloud resources...", type: "output", color: "text-neutral-500" },
    { text: "✓ Data center sync complete", type: "output", color: "text-primary-400" },
    { text: "✓ Latency optimized: < 5ms", type: "output", color: "text-primary-400" },

    { text: "act integrate --partner ethio-telecom", type: "command" },
    { text: "Establishing secure API gateway...", type: "output", color: "text-neutral-500" },
    { text: "✓ Payment channel active", type: "output", color: "text-secondary-400" },

    { text: "act deploy --prod --rolling-update", type: "command" },
    { text: "Deploying to production nodes...", type: "output", color: "text-neutral-500" },
    { text: "✓ Service merchant-gateway: ONLINE", type: "output", color: "text-emerald-400" },
    { text: "✓ Service vib-core: ONLINE", type: "output", color: "text-emerald-400" },

    { text: "act monitor --realtime", type: "command" },
    { text: "System status: HEALTHY", type: "output", color: "text-emerald-400" },
    { text: "Uptime: 99.999%", type: "output", color: "text-emerald-400" },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalLines, currentCommand]);

  useEffect(() => {
    if (stepIndex >= steps.length) {
      const timeout = setTimeout(() => {
        setTerminalLines([]);
        setStepIndex(0);
        setCharIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const currentStep = steps[stepIndex];

    if (currentStep.type === "command") {
      if (charIndex < currentStep.text.length) {
        const timeout = setTimeout(() => {
          setCurrentCommand((prev) => prev + currentStep.text[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50 + Math.random() * 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalLines((prev) => [
            ...prev,
            { text: currentStep.text, color: "text-neutral-300", id: Date.now(), isCommand: true },
          ]);
          setCurrentCommand("");
          setCharIndex(0);
          setStepIndex((prev) => prev + 1);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setTerminalLines((prev) => [
          ...prev,
          { text: currentStep.text, color: currentStep.color || "text-neutral-400", id: Date.now(), isCommand: false },
        ]);
        setStepIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [stepIndex, charIndex]);

  return (
    <section className="relative w-[90%] mx-auto min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white">
      {/* Background Gradients - Neon Inspired */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Gradient Blob */}
        <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_center,rgba(62,125,162,0.15)_0%,transparent_60%)] blur-[100px]" />
        
        {/* Secondary Accent Blob */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_center,rgba(221,227,37,0.12)_0%,transparent_60%)] blur-[100px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container relative mx-auto px-6 z-10 pt-12 lg:pt-0">
        <div className="grid lg:grid-cols-[45%_60%] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
         

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-8 font-display"
            >
              The Digital Backbone <br />
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-linear-to-r from-primary-100 to-secondary-100 blur-xl opacity-50"></span>
                <span className="relative text-transparent bg-clip-text bg-linear-to-r from-primary-600 via-primary-500 to-primary-700">
                  for Modern Ethiopia
                </span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-500 mb-10 leading-relaxed max-w-xl font-light"
            >
              We engineer mission-critical infrastructure, secure enterprise systems, and scalable cloud solutions for the nation's leading financial and telecom institutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-white bg-neutral-900 rounded-full overflow-hidden transition-all hover:bg-neutral-800 shadow-xl shadow-neutral-900/20 hover:shadow-neutral-900/30 hover:-translate-y-1"
              >
                <span className="font-semibold text-lg">Start Your Project</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="#services"
                className="group inline-flex items-center justify-center px-8 py-4 text-neutral-600 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all font-medium text-lg shadow-sm hover:shadow-md"
              >
                View Solutions
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Terminal Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary-500 to-secondary-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative rounded-xl bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden h-[480px] flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs text-neutral-500 font-mono flex items-center gap-2">
                  <Terminal size={12} />
                  act-cli — v2.4.0
                </div>
              </div>

              {/* Terminal Content */}
              <div ref={scrollRef} className="p-6 font-mono text-sm md:text-base text-left overflow-y-auto flex-1 scrollbar-hide">
                <div className="flex flex-col gap-2">
                  {terminalLines.map((line) => (
                    <div key={line.id} className={`${line.color} ${line.isCommand ? "" : "pl-4"}`}>
                      {line.isCommand ? (
                        <div className="flex items-center gap-2">
                          <span className="text-secondary-400">➜</span>
                          <span className="text-neutral-400">~</span>
                          <span className="text-neutral-300">{line.text}</span>
                        </div>
                      ) : (
                        line.text
                      )}
                    </div>
                  ))}
                  
                  {/* Active typing line */}
                  {stepIndex < steps.length && steps[stepIndex].type === 'command' && (
                    <div className="flex items-center gap-2 text-neutral-400">
                      <span className="text-secondary-400">➜</span>
                      <span>~</span>
                      <span className="text-neutral-300">{currentCommand}</span>
                      <span className="animate-pulse bg-secondary-400 w-2 h-5 block"></span>
                    </div>
                  )}

                  {/* Final blinking cursor */}
                  {stepIndex >= steps.length && (
                    <div className="flex items-center gap-2 text-neutral-400 mt-2">
                      <span className="text-secondary-400">➜</span>
                      <span>~</span>
                      <span className="animate-pulse bg-secondary-400 w-2 h-5 block"></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
