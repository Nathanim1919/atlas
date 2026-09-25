"use client";

import Image from "next/image";
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
import AddisAbabaImage from "../../public/bank/addis.jpeg";
import { getPartnerLogo } from "./PartnerLogos";

const clients = [
  { name: "Enat Bank", image: EnatImage },
  { name: "Wegagen Bank", image: WegagenImage },
  { name: "Dashen Bank", image: DashenImage },
  { name: "Awash Bank", image: AwashImage },
  { name: "ZamZam Bank", image: ZemzemImage },
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
  { name: "Addis Ababa University", image: AddisAbabaImage },
];

const partners = [
  { name: "Oracle",   role: "Platinum Partner" },
  { name: "IBM",      role: "Strategic Technology Partner" },
  { name: "Lenovo",   role: "Data Center Infrastructure Partner" },
  { name: "Nutanix",  role: "Cloud Platform Partner" },
  { name: "RedHat",   role: "Premier Business Partner" },
  { name: "SUSE",     role: "Solution Partner" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 border-b border-neutral-200 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#3e7da2] mb-3">Clients</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              Our Clients
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
            Technology partner for Ethiopia&apos;s leading commercial banks,
            public enterprises, and government institutions since 2011.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {clients.map((client, index) => (
              <div
                key={index}
                className="h-20 sm:h-24 w-full bg-white rounded-xl border border-neutral-200 flex items-center justify-center p-3 sm:p-4 group"
                title={client.name}
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  className="max-h-11 w-auto max-w-[80%] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div id="partners" className="border-t border-neutral-200 pt-16">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#3e7da2] mb-3">Partnerships</p>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                Technology Partners
              </h3>
            </div>
            <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
              Authorized reseller and certified deployment partner for global
              enterprise technology vendors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl border border-neutral-200 p-6 flex items-center justify-between gap-4 hover:border-[#3e7da2]/40 transition-colors"
              >
                <div className="h-9 flex items-center">
                  {getPartnerLogo(partner.name, "h-7 max-w-[120px] w-auto object-contain")}
                </div>
                <span className="text-xs font-semibold text-neutral-500 text-right leading-snug max-w-[140px]">
                  {partner.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
