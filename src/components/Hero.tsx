"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

// Create rows by shuffling or slicing the partners array
const row1 = [...allPartners, ...allPartners, ...allPartners, ...allPartners];
const row2 = [...allPartners.slice(4), ...allPartners.slice(0, 4), ...allPartners, ...allPartners, ...allPartners];
const row3 = [...allPartners.reverse(), ...allPartners, ...allPartners, ...allPartners];
const row4 = [...allPartners.slice(2), ...allPartners.slice(0, 2), ...allPartners, ...allPartners, ...allPartners];
const row5 = [...allPartners, ...allPartners, ...allPartners, ...allPartners];

export default function Hero() {
  return (
    <section className="relative  flex w-[90%] mx-auto flex-col justify-center overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_center,rgba(62,125,162,0.08)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-[radial-gradient(circle_at_center,rgba(221,227,37,0.1)_0%,transparent_70%)] blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[60px_60px] opacity-40" />
      </div>

      <div className="container relative mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--sunflower) opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-(--steel-blue)"></span>
              </span>
              Next-Gen System Engineering
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 font-display"
            >
              Building the <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-(--steel-blue) to-slate-700">
                Digital Backbone
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg"
            >
              We engineer mission-critical infrastructure, secure enterprise systems, and scalable cloud solutions for Ethiopia's leading financial and telecom institutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-white bg-(--steel-blue) rounded-lg overflow-hidden transition-all hover:bg-[#306689] shadow-lg shadow-blue-900/10"
              >
                <span className="font-semibold">Start Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all font-medium"
              >
                View Solutions
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Marquee Wall */}
          <div className="relative h-[600px] w-full overflow-hidden flex items-center justify-center mask-linear-gradient-vertical">
             
             {/* Fade Gradients for Smooth Entry/Exit */}
             <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10" />
             <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10" />

             {/* Center ACT Logo */}
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="absolute z-20 w-30 h-30 bg-white rounded-full shadow-2xl flex items-center justify-center p-8 border border-slate-100"
             >
                <div className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-sm z-0" />
                <div className="relative z-10 w-full h-full">
                  <Image 
                    src="/logo.png" 
                    alt="ACT Logo" 
                    fill
                    className="object-contain w-20 h-20"
                  />
                </div>
                {/* Pulse Effect behind logo */}
                <div className="absolute inset-0 rounded-full bg-(--steel-blue)/5 animate-ping" />
             </motion.div>

             {/* Marquee Rows */}
             <div className="absolute inset-0 flex flex-col justify-center gap-8 hover:[&_*]:paused">
                
                {/* Row 1 - Left */}
                <div className="flex gap-8 animate-marquee whitespace-nowrap">
                  {row1.map((partner, i) => (
                    <div key={`r1-${i}`} className="relative h-12 w-32 shrink-0">
                      <Image src={partner.src} alt={partner.name} fill className="object-contain" />
                    </div>
                  ))}
                </div>

                {/* Row 2 - Right */}
                <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap">
                  {row2.map((partner, i) => (
                    <div key={`r2-${i}`} className="relative h-12 w-32 shrink-0">
                      <Image src={partner.src} alt={partner.name} fill className="object-contain" />
                    </div>
                  ))}
                </div>

                {/* Row 3 - Left */}
                <div className="flex gap-8 animate-marquee whitespace-nowrap">
                  {row3.map((partner, i) => (
                    <div key={`r3-${i}`} className="relative h-12 w-32 shrink-0">
                      <Image src={partner.src} alt={partner.name} fill className="object-contain" />
                    </div>
                  ))}
                </div>

                {/* Row 4 - Right */}
                <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap">
                  {row4.map((partner, i) => (
                    <div key={`r4-${i}`} className="relative h-12 w-32 shrink-0">
                      <Image src={partner.src} alt={partner.name} fill className="object-contain" />
                    </div>
                  ))}
                </div>

                {/* Row 5 - Left */}
                <div className="flex gap-8 animate-marquee whitespace-nowrap">
                  {row5.map((partner, i) => (
                    <div key={`r5-${i}`} className="relative h-12 w-32 shrink-0">
                      <Image src={partner.src} alt={partner.name} fill className="object-contain" />
                    </div>
                  ))}
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
