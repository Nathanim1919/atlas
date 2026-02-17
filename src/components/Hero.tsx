"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Bank/Client Logos — mirrors the full list from Clients.tsx (without Atlas)
const allPartners = [
  { name: "Enat Bank", src: "/bank/enat.png" },
  { name: "Wegagen Bank", src: "/bank/wegagen.png" },
  { name: "Dashen Bank", src: "/bank/dashen.jpeg" },
  { name: "Awash Bank", src: "/bank/awash.png" },
  { name: "ZamZam Bank", src: "/bank/zemzem.png" },
  { name: "Abay Bank", src: "/bank/abay.jpeg" },
  { name: "Oromia International Bank", src: "/bank/oromo.png" },
  { name: "Siinqee Bank", src: "/bank/sinque.png" },
  { name: "Hijra Bank", src: "/bank/hijira.jpeg" },
  { name: "Berhan Bank", src: "/bank/birhan.jpg" },
  { name: "Nib International Bank", src: "/bank/nib1.png" },
  { name: "Rammis Bank", src: "/bank/rammis.png" },
  { name: "Bunna Bank", src: "/bank/bunna.png" },
  { name: "PSS Bank", src: "/bank/pss.png" },
  { name: "EthSwitch", src: "/bank/etswitch.jpeg" },
  { name: "Ethiopian Airlines", src: "/bank/airline.png" },
  { name: "Ethio Telecom", src: "/bank/Ethio-Telecom.jpg" },
  { name: "Ministry of Finance", src: "/bank/m1.jpeg" },
  { name: "Ethiopian Electric Utility", src: "/bank/electric.png" },
  { name: "Addis Ababa University", src: "/bank/addis.jpeg" },
];

export default function Hero() {
  const [terminalLines, setTerminalLines] = useState<Array<{ text: string; color: string; id: number; isCommand?: boolean; isGraph?: boolean }>>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [stepIndex, setStepIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps = [
    { text: "act init --environment enterprise-banking", type: "command" },
    { text: "Initializing secure infrastructure...", type: "output", color: "text-neutral-500" },
    { text: "✓ Core banking modules loaded", type: "output", color: "text-primary-400" },
    { text: "✓ Database connectors ready", type: "output", color: "text-primary-400" },

    { text: "act install --pkg uni-cash-engine --version latest", type: "command" },
    { text: "Resolving dependencies...", type: "output", color: "text-neutral-500" },
    { text: "✓ Middleware installed", type: "output", color: "text-emerald-400" },
    { text: "✓ Security patches applied", type: "output", color: "text-emerald-400" },

    { text: "act security --scan --compliance pci-dss", type: "command" },
    { text: "Running deep packet inspection...", type: "output", color: "text-neutral-500" },
    { 
      text: `COMPLIANCE AUDIT
[PCI-DSS]  PASS  [ISO-27001] PASS
[GDPR]     PASS  [OWASP]     PASS
---------------------------------
Encryption: AES-256   Keys: Rotated`, 
      type: "output", 
      color: "text-emerald-400",
      isGraph: true 
    },

    { text: "act simulate --traffic high-concurrency --users 100k", type: "command" },
    { text: "Injecting synthetic load (100,000 req/s)...", type: "output", color: "text-neutral-500" },
    { text: "✓ Throughput: 98.4% success", type: "output", color: "text-secondary-400" },
    { text: "✓ P99 Latency: 12ms", type: "output", color: "text-secondary-400" },

    { text: "act scale --service transaction-layer --replicas auto", type: "command" },
    { text: "Detecting load spike...", type: "output", color: "text-neutral-500" },
    { text: "✓ Spawning 50 microservice pods", type: "output", color: "text-primary-400" },
    
    // ASCII Graph Step
    { 
      text: `CLUSTER LOAD DISTRIBUTION
████████████████████ 100% [Primary]
███████████████░░░░░ 75%  [Replica-1]
████████████░░░░░░░░ 60%  [Replica-2]
████████░░░░░░░░░░░░ 40%  [Replica-3]`, 
      type: "output", 
      color: "text-blue-400",
      isGraph: true 
    },

    { text: "act integrate --gateway ethio-telecom", type: "command" },
    { text: "Handshaking with external API...", type: "output", color: "text-neutral-500" },
    { 
      text: `API GATEWAY HANDSHAKE
ACT Core ◄═══ TLS 1.3 ═══► EthioTelecom
[Key Exch] [Auth] [Token] [Stream]
Connection: ESTABLISHED`, 
      type: "output", 
      color: "text-emerald-400",
      isGraph: true 
    },

    { text: "act deploy --region et-cloud --strategy blue-green", type: "command" },
    { text: "Routing traffic to new cluster...", type: "output", color: "text-neutral-500" },
    { 
      text: `DEPLOYMENT PIPELINE
Build   [####################] 100%
Test    [####################] 100%
Stage   [####################] 100%
Prod    [##############......] 72%`, 
      type: "output", 
      color: "text-emerald-400",
      isGraph: true 
    },
    
    { text: "act monitor --dashboard live", type: "command" },
    { text: "System Status: OPTIMAL", type: "output", color: "text-emerald-400" },
    { text: "Uptime: 99.9999%", type: "output", color: "text-emerald-400" },
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
        }, 30 + Math.random() * 40); // Faster typing
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
        }, 400);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setTerminalLines((prev) => [
          ...prev,
          { 
            text: currentStep.text, 
            color: currentStep.color || "text-neutral-400", 
            id: Date.now(), 
            isCommand: false,
            isGraph: currentStep.isGraph 
          },
        ]);
        setStepIndex((prev) => prev + 1);
      }, currentStep.isGraph ? 800 : 300); // Pause longer after graph
      return () => clearTimeout(timeout);
    }
  }, [stepIndex, charIndex]);

  return (
    <section className="relative w-full md:w-[95%] md:py-10 py-4 mx-auto  flex flex-col justify-center overflow-hidden bg-white">
      {/* Background Gradients - Neon Inspired */}
    

      <div className="container relative mx-auto px-4 lg:px-6 z-10 pt-4 lg:pt-0">
        <div className="grid lg:grid-cols-[55%_45%] items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left relative">
            {/* Badge */}
         

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1] font-display"
            >
              The Digital Backbone <br />
              <span className="relative inline-block bg-transparent px-2 py-1 text-(--steel-blue)">
                <span className="relative">
                  for Modern Ethiopia
                </span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:text-lg relative lg:text-xl text-neutral-500 mb-4  leading-relaxed w-[350px] md:w-full font-light"
            >
              Atlas Computer Technology PLC (ACT) is a premier ICT solutions provider in Addis Ababa, delivering infrastructure, system integration, software development, and consultancy services for over a decade.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-4"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-white bg-primary-600 rounded-md overflow-hidden transition-all hover:bg-primary-700 shadow-xl shadow-primary-600/20 hover:shadow-primary-600/30 hover:-translate-y-1"
              >
                <span className="font-semibold lg:text-lg">Start Your Project</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="#services"
                className="group w-full md:w-auto bg-(--sunflower) inline-flex items-center justify-center px-8 py-4 text-primary-600  border border-primary-200 rounded-md hover:bg-primary-50 hover:border-primary-300 transition-all font-medium lg:text-lg shadow-sm hover:shadow-md"
              >
                View Solutions
              </Link>
            </motion.div>

            {/* Trust Indicators (Logos) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 border-t border-neutral-100 w-full"
            >
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Trusted by Leading Financial Institutions</p>
              <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                 <div className="flex gap-2 animate-marquee items-center transition-all duration-500 w-max">
                    {[...allPartners, ...allPartners].map((partner, i) => (
                      <div key={i} className="relative w-24 h-16 shrink-0 flex items-center justify-center">
                         <Image 
                           src={partner.src} 
                           alt={partner.name} 
                           width={120} 
                           height={60} 
                           className="object-contain max-h-12 w-auto"
                         />
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Terminal Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.2 }}
            className="relative w-full mx-auto lg:w-full perspective-[2000px] overflow-hidden lg:overflow-visible"
          >
            {/* Abstract Decorative Elements behind terminal - Animated */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-200/30 rounded-full blur-3xl" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl" 
            />
            
            <div className="relative rounded-xl bg-[#1e1e1e] border border-white/10 shadow-2xl shadow-black/50 overflow-hidden h-[360px] sm:h-[420px] md:h-[480px] flex flex-col transform transition-transform duration-700 ease-out">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-black/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 transition-colors shadow-inner"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 transition-colors shadow-inner"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#27C93F]/80 transition-colors shadow-inner"></div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/20 border border-white/5">
                  <Terminal size={10} className="text-neutral-500" />
                  <span className="text-[10px] text-neutral-400 font-mono tracking-wide">act-cli — zsh</span>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Terminal Content */}
              <div ref={scrollRef} className="p-3 md:p-6 font-mono text-[11px] sm:text-xs md:text-sm text-left overflow-y-auto flex-1 bg-[#1e1e1e] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex flex-col gap-2">
                  {terminalLines.map((line) => (
                    <div key={line.id} className={`${line.color} ${line.isCommand ? "" : "pl-4"}`}>
                      {line.isCommand ? (
                        <div className="flex items-start gap-1.5 sm:gap-2 min-w-0">
                          <span className="text-secondary-400 font-bold shrink-0">➜</span>
                          <span className="text-blue-400 font-bold shrink-0">~</span>
                          <span className="text-neutral-200 break-all">{line.text}</span>
                        </div>
                      ) : line.isGraph ? (
                        <pre className="font-mono text-[10px] sm:text-xs md:text-sm leading-tight opacity-90 my-2 bg-black/20 p-2 sm:p-3 rounded-lg border-l-2 border-blue-500/50 whitespace-pre-wrap break-all overflow-hidden">
                          {line.text}
                        </pre>
                      ) : (
                        line.text
                      )}
                    </div>
                  ))}
                  
                  {/* Active typing line */}
                  {stepIndex < steps.length && steps[stepIndex].type === 'command' && (
                    <div className="flex items-start gap-1.5 sm:gap-2 text-neutral-400 min-w-0">
                      <span className="text-secondary-400 font-bold shrink-0">➜</span>
                      <span className="text-blue-400 font-bold shrink-0">~</span>
                      <span className="text-neutral-200 break-all">{currentCommand}</span>
                      <span className="animate-pulse bg-neutral-400 w-2 h-4 sm:w-2.5 sm:h-5 block shrink-0"></span>
                    </div>
                  )}

                  {/* Final blinking cursor */}
                  {stepIndex >= steps.length && (
                    <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-400 mt-2">
                      <span className="text-secondary-400 font-bold shrink-0">➜</span>
                      <span className="text-blue-400 font-bold shrink-0">~</span>
                      <span className="text-neutral-200"></span>
                      <span className="animate-pulse bg-neutral-400 w-2 h-4 sm:w-2.5 sm:h-5 block shrink-0"></span>
                    </div>
                  )}
                </div>
              </div>

              {/* Status Bar */}
              <div className="px-3 py-1.5 bg-[#007acc] text-white text-[10px] font-mono flex justify-between items-center select-none">
                 <div className="flex gap-3">
                    <span className="flex items-center gap-1"><span className="font-bold">NORMAL</span></span>
                    <span>master*</span>
                 </div>
                 <div className="flex gap-3">
                    <span>utf-8</span>
                    <span>Ln {terminalLines.length + 1}, Col 1</span>
                    <span className="flex items-center gap-1.5">ACT-SERVER <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span></span>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
