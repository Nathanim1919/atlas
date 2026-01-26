"use client";

import { motion } from "framer-motion";
import { Building2, Award, Handshake } from "lucide-react";

const clients = [
  "Commercial Bank of Ethiopia",
  "Dashen Bank",
  "Awash Bank",
  "Wegagen Bank",
  "Abay Bank",
  "Oromia International Bank",
  "Enat Bank",
  "Siinqee Bank",
  "Hijra Bank",
  "Berhan Bank",
  "Nib International Bank",
  "Bunna Bank",
  "EthSwitch",
  "Ethiopian Airlines",
  "Ethio Telecom",
  "Ministry of Finance",
  "Ethiopian Electric Utility",
  "Ethiopian Revenue Authority",
  "Addis Ababa University",
  "Ethiopian Insurance Corporation",
];

const partners = [
  { name: "Oracle", description: "Enterprise Database & Applications" },
  { name: "IBM", description: "Enterprise Solutions" },
  { name: "Lenovo", description: "Hardware & Infrastructure" },
  { name: "Nutanix", description: "Hyper-Converged Infrastructure" },
  { name: "RedHat", description: "Enterprise Linux & Cloud" },
  { name: "SUSE", description: "Linux Enterprise Solutions" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

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
            Our Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6">
            Trusted by <span className="gradient-text">50+ Organizations</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We&apos;re proud to partner with leading banks, enterprises, and government institutions across Ethiopia.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-primary-300 rounded-xl p-4 flex items-center justify-center min-h-[80px] transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-2 text-center">
                  <Building2 className="text-primary-400 group-hover:text-primary-600 transition-colors flex-shrink-0" size={20} />
                  <span className="text-sm font-medium text-neutral-700 group-hover:text-primary-700 transition-colors">
                    {client}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="partners"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
              Partnerships
            </span>
            <h3 className="text-3xl font-bold font-display text-neutral-900 mb-4">
              Global Technology Partners
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We collaborate with world-leading technology companies to deliver best-in-class solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:border-primary-300 rounded-2xl p-6 transition-all hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary-100 group-hover:bg-primary-500 rounded-xl flex items-center justify-center transition-colors">
                    <Handshake className="text-primary-600 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-neutral-900">{partner.name}</h4>
                    <p className="text-sm text-neutral-500">{partner.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary-600">
                  <Award size={16} />
                  <span className="text-sm font-medium">Certified Partner</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "10+", label: "Years of Trust" },
              { value: "99.9%", label: "Client Retention" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold font-display mb-2">{stat.value}</div>
                <div className="text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

