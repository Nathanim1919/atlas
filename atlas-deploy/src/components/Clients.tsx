"use client";

import { motion, useInView, animate } from "framer-motion";
import { Building2, Award, Handshake, Globe2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import EnatImage from "../../public/bank/enat.png";
import WegagenImage from "../../public/bank/wegagen.png";
import DashenImage from "../../public/bank/dashen.jpeg";
// import AbayImage from "../../public/bank/abay.png";
import OromiaImage from "../../public/bank/oromo.png";
import SiinqeeImage from "../../public/bank/sinque.png";
import HijraImage from "../../public/bank/hijira.jpeg";
import BerhanImage from "../../public/bank/birhan.jpg";
import NibImage from "../../public/bank/nib.png";
import BunnaImage from "../../public/bank/bunna.png";
import EthSwitchImage from "../../public/bank/etswitch.jpeg";
import EthiopianAirlinesImage from "../../public/bank/airline.png";
import EthioTelecomImage from "../../public/bank/Ethio-Telecom.jpg";
import MinistryOfFinanceImage from "../../public/bank/m1.jpeg";
import EthiopianElectricUtilityImage from "../../public/bank/electric.png";
// import EthiopianRevenueAuthorityImage from "../../public/bank/ethiopian-revenue-authority.png";
import AddisAbabaImage from "../../public/bank/addis.jpeg";
// import EthiopianInsuranceCorporationImage from "../../public/bank/ethiopian-insurance-corporation.png";

const clients = [
  { name: "Enat Bank", image: EnatImage },
  { name: "Wegagen Bank", image: WegagenImage },
  { name: "Dashen Bank", image: DashenImage },
  // { name: "Abay Bank", image: AbayImage },
  { name: "Oromia International Bank", image: OromiaImage },
  { name: "Siinqee Bank", image: SiinqeeImage },
  { name: "Hijra Bank", image: HijraImage },
  { name: "Berhan Bank", image: BerhanImage },
  { name: "Nib International Bank", image: NibImage },
  { name: "Bunna Bank", image: BunnaImage },
  { name: "EthSwitch", image: EthSwitchImage },
  { name: "Ethiopian Airlines", image: EthiopianAirlinesImage },
  { name: "Ethio Telecom", image: EthioTelecomImage },
  { name: "Ministry of Finance", image: MinistryOfFinanceImage },
  { name: "Ethiopian Electric Utility", image: EthiopianElectricUtilityImage },
  // { name: "Ethiopian Revenue Authority", image: EthiopianRevenueAuthorityImage },
  { name: "Addis Ababa University", image: AddisAbabaImage },
  // { name: "Ethiopian Insurance Corporation", image: EthiopianInsuranceCorporationImage },
];

const partners = [
  { name: "Oracle", description: "Platinum Partner for Enterprise Database & Cloud Infrastructure", icon: Globe2 },
  { name: "IBM", description: "Strategic Partner for Cognitive Solutions & Systems", icon: Building2 },
  { name: "Lenovo", description: "Data Center Partner for High-Performance Computing", icon: Award },
  { name: "Nutanix", description: "Cloud Enterprise Cloud Platform Partner", icon: Globe2 },
  { name: "RedHat", description: "Premier Business Partner for Open Source Solutions", icon: Handshake },
  { name: "SUSE", description: "Solution Partner for Enterprise Linux", icon: Award },
];

interface CountUpProps {
  from?: number;
  to: number;
  separator?: string;
  direction?: "up" | "down";
  duration?: number;
  className?: string;
  startCounting?: boolean;
}

const CountUp = ({
  from = 0,
  to,
  separator = ",",
  direction = "up",
  duration = 1,
  className = "",
  startCounting = true,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if ((startCounting || inView) && !hasAnimated && ref.current) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(value).toLocaleString('en-US').replace(/,/g, separator);
          }
        },
        onComplete: () => setHasAnimated(true),
      });
      return () => controls.stop();
    }
  }, [from, to, duration, separator, startCounting, inView, hasAnimated]);

  return <span ref={ref} className={className}>{from}</span>;
};

export default function Clients() {
  return (
    <section id="clients" className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              Trusted by the <span className="text-primary-600">Nation's Best</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
              We are the technology partner of choice for Ethiopia's leading financial institutions, government bodies, and enterprises.
            </p>
          </motion.div>
        </div>

        {/* Client Logos - Marquee */}
        <div className="mb-32 relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10" />
          
          <div className="grid grid-cols-4 w-[500px] mx-auto">
            {
              clients.map((client, index) => (
                <div key={index} className="relative shrink-0 w-48 h-24 flex items-center justify-center p-4 transition-all duration-300 group">
                  <Image 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-contain transition-all duration-300" 
                  />
                </div>
              ))
            }
          </div>
        </div>

        {/* Partners Section */}
        <div id="partners" className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Global Ecosystem</span>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Strategic Technology Alliances
              </h3>
            </div>
            <p className="text-neutral-600 max-w-md">
              Collaborating with world-class technology leaders to deliver certified, high-performance solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 border border-neutral-200 hover:border-primary-200 hover:shadow-xl transition-all duration-500 cursor-default"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-primary-50 rounded-2xl border border-primary-100 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-500">
                    <partner.icon size={24} className="text-primary-600 transition-colors" />
                  </div>
                  <ArrowUpRight size={20} className="text-neutral-400 group-hover:text-primary-600 transition-colors" />
                </div>
                
                <h4 className="text-xl font-bold text-neutral-900 mb-3">{partner.name}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-primary-700 bg-primary-50 w-fit px-3 py-1.5 rounded-full border border-primary-100">
                  <CheckCircle2 size={14} />
                  Certified Partner
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-neutral-200 pt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: 50, suffix: "+", label: "Enterprise Clients" },
              { value: 14, suffix: "+", label: "Years Since 2011" },
              { value: 100, suffix: "%", label: "Project Success Rate" },
              { value: 24, suffix: "/7", label: "Dedicated Support" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300 flex justify-center items-center">
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1.5}
                    className="count-up-text"
                    startCounting={false} // Will be triggered by useInView inside component
                  />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider group-hover:text-neutral-700 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
