"use client";

import { motion } from "framer-motion";
import { Building2, Award, Handshake, Globe2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
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
import AddisAbabaUniversityImage from "../../public/bank/addis.jpeg";
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
  { name: "Addis Ababa University", image: AddisAbabaUniversityImage },
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

export default function Clients() {
  return (
    <section id="clients" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - Minimalist & Bold */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              Trusted by the <span className="text-emerald-600">Nation's Best</span>
            </h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
              We are the technology partner of choice for Ethiopia's leading financial institutions, government bodies, and enterprises.
            </p>
          </motion.div>
        </div>

        {/* Client Logos - Creative Grid */}
        <div className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex items-center justify-center p-6 h-40 rounded-2xl bg-neutral-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/10 border border-transparent hover:border-emerald-100 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative w-full h-full flex items-center justify-center transition-all duration-500 group-hover:-translate-y-4">
                  <Image 
                    src={client.image} 
                    alt={client.name} 
                    className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                </div>
                
                {/* Name Label - Appears on Hover */}
                <div className="absolute inset-x-0 bottom-6 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 pointer-events-none">
                  <span className="bg-white/90 backdrop-blur-sm text-neutral-900 border border-neutral-200 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Section - Sophisticated Cards */}
        <div id="partners" className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Global Ecosystem</span>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Strategic Technology Alliances
              </h3>
            </div>
            <p className="text-neutral-500 max-w-md">
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
                className="group bg-neutral-50 rounded-3xl p-8 border border-neutral-200 hover:border-emerald-200 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 cursor-default"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-neutral-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <partner.icon size={24} className="text-neutral-900" />
                  </div>
                  <ArrowUpRight size={20} className="text-neutral-300 group-hover:text-emerald-500 transition-colors" />
                </div>
                
                <h4 className="text-xl font-bold text-neutral-900 mb-3">{partner.name}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 w-fit px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={14} />
                  Certified Partner
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact Stats - Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-neutral-200 pt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "50+", label: "Enterprise Clients" },
              { value: "12+", label: "Years of Excellence" },
              { value: "100%", label: "Project Success Rate" },
              { value: "24/7", label: "Dedicated Support" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
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
