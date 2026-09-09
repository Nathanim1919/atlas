"use client";

import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import { Building2, Award, Handshake, Globe2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import EnatImage from "../../public/bank/enat.png";
import WegagenImage from "../../public/bank/wegagen.png";
import DashenImage from "../../public/bank/dashen.jpeg";
import RammisImage from "../../public/bank/rammis.png";
import OromiaImage from "../../public/bank/oromo.png";
import SiinqeeImage from "../../public/bank/sinque.png";
import HijraImage from "../../public/bank/hijira.jpeg";
import BerhanImage from "../../public/bank/birhan.jpg";
import NibImage from "../../public/bank/nib1.png";
import BunnaImage from "../../public/bank/bunna.png";
import EthSwitchImage from "../../public/bank/etswitch.jpeg";
import AbayImage from "../../public/bank/abay.jpeg";
import ZemzemImage from "../../public/bank/zemzem.png";
import PssImage from "../../public/bank/pss.png";
import EthiopianAirlinesImage from "../../public/bank/airline.png";
import EthioTelecomImage from "../../public/bank/Ethio-Telecom.jpg";
import MinistryOfFinanceImage from "../../public/bank/m1.jpeg";
import EthiopianElectricUtilityImage from "../../public/bank/electric.png";
import AwashImage from "../../public/bank/awash.png";
// import EthiopianRevenueAuthorityImage from "../../public/bank/ethiopian-revenue-authority.png";
import AddisAbabaImage from "../../public/bank/addis.jpeg";
// import EthiopianInsuranceCorporationImage from "../../public/bank/ethiopian-insurance-corporation.png";

const clients = [
  { name: "Enat Bank", image: EnatImage },
  { name: "Wegagen Bank", image: WegagenImage },
  { name: "Dashen Bank", image: DashenImage },
  {name: "Awash Bank", image: AwashImage },
  {name: "ZamZam Bank", image: ZemzemImage },
  { name: "Abay Bank", image: AbayImage },
  { name: "Oromia International Bank", image: OromiaImage },
  { name: "Siinqee Bank", image: SiinqeeImage },
  { name: "Hijra Bank", image: HijraImage },
  { name: "Berhan Bank", image: BerhanImage },
  { name: "Nib International Bank", image: NibImage },
  { name: "Rammis Bank", image: RammisImage },
  { name: "Bunna Bank", image: BunnaImage },
  { name: "PSS Bank", image: PssImage },
  { name: "EthSwitch", image: EthSwitchImage },
  { name: "Ethiopian Airlines", image: EthiopianAirlinesImage },
  { name: "Ethio Telecom", image: EthioTelecomImage },
  { name: "Ministry of Finance", image: MinistryOfFinanceImage },
  { name: "Ethiopian Electric Utility", image: EthiopianElectricUtilityImage },
  // { name: "Ethiopian Revenue Authority", image: EthiopianRevenueAuthorityImage },
  { name: "Addis Ababa University", image: AddisAbabaImage },
  // { name: "Ethiopian Insurance Corporation", image: EthiopianInsuranceCorporationImage },
];

import { 
  getPartnerLogo 
} from "./PartnerLogos";

const partners = [
  { 
    name: "Oracle", 
    role: "Platinum Partner", 
    description: "Enterprise Database, FlexCube Core Banking & Cloud Infrastructure deployment partner.",
    color: "#C74634"
  },
  { 
    name: "IBM", 
    role: "Strategic Technology Partner", 
    description: "Enterprise cognitive solutions, high-resilience systems, and enterprise storage architectures.",
    color: "#052FAD"
  },
  { 
    name: "Lenovo", 
    role: "Data Center Infrastructure Partner", 
    description: "High-performance data center computing, hyper-converged hardware, and server systems.",
    color: "#E2231A"
  },
  { 
    name: "Nutanix", 
    role: "Cloud Platform Partner", 
    description: "Enterprise cloud platform, hyper-converged infrastructure (HCI), and private cloud virtualization.",
    color: "#024DA1"
  },
  { 
    name: "RedHat", 
    role: "Premier Business Partner", 
    description: "Open source enterprise solutions, Red Hat Enterprise Linux (RHEL), and OpenShift container platforms.",
    color: "#EE0000"
  },
  { 
    name: "SUSE", 
    role: "Solution Partner", 
    description: "Enterprise Linux infrastructure, container orchestration, and mission-critical open-source platforms.",
    color: "#30BA78"
  },
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

const ClientCard = ({ client, index }: { client: { name: string; image: typeof EnatImage }; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="relative h-20 sm:h-24 w-full bg-white hover:bg-white rounded-2xl border border-neutral-200/80 hover:border-primary-300 shadow-xs hover:shadow-lg flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={client.image}
          alt={client.name}
          className="max-h-12 w-auto max-w-[85%] object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Animated Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          >
            <div className="relative bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
              {client.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Clients() {
  return (
    <section id="clients" className="py-32 bg-neutral-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-4">
              Enterprise Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              Trusted by the <span className="text-primary-600">Nation&apos;s Best</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
              We are the premier technology partner for Ethiopia&apos;s leading commercial banks, public enterprises, and government institutions since 2011.
            </p>
          </motion.div>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-32 relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client, index) => (
              <ClientCard key={index} client={client} index={index} />
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div id="partners" className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Global Alliances</span>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Strategic Technology Partners
              </h3>
            </div>
            <p className="text-neutral-600 max-w-md text-sm leading-relaxed">
              Hand-in-hand collaboration with international technology leaders ensuring certified delivery, genuine licensing, and tier-1 vendor support.
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
                className="group bg-white rounded-3xl p-8 border border-neutral-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6 pb-6 border-b border-neutral-100">
                    <div className="h-10 flex items-center px-1">
                      {getPartnerLogo(partner.name, "h-8 max-w-[140px] w-auto object-contain")}
                    </div>
                    <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700">
                      {partner.role}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {partner.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1.5 rounded-full border border-primary-100">
                    <CheckCircle2 size={14} className="text-primary-600" />
                    Authorized Solution Partner
                  </div>
                  <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
              { value: 80, suffix: "+", label: "Enterprise Projects Delivered" },
              { value: 90, suffix: "+", label: "Certified ICT Professionals" },
              { value: 10, suffix: "+", label: "Year-on-Year Banking SLAs" },
              { value: 20, suffix: "+", label: "Banks Live on Uni-Cash" },
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
                    startCounting={false}
                  />
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-wider group-hover:text-neutral-700 transition-colors">
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
