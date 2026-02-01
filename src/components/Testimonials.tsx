"use client";

import { motion } from "framer-motion";
import { Quote, Star, Building2, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    company: "Wegagen Bank",
    name: "Goitom G/Tsadkan",
    role: "CIO",
    quote: "Atlas's platforms streamlined our payment processing and enhanced customer engagement significantly.",
    rating: 5,
  },
  {
    id: 2,
    company: "Oromia Int. Bank",
    name: "Geleta Bekuma",
    role: "VP-IT",
    quote: "Implemented OLVM infrastructure, enhancing our services and leveraging technological advancements.",
    rating: 5,
  },
  {
    id: 3,
    company: "Abay Bank",
    name: "Elias Berhanu",
    role: "Director IT",
    quote: "Excellent service in maintaining our servers and storage with a defined Service Level Agreement.",
    rating: 5,
  },
  {
    id: 4,
    company: "Dashen Bank",
    name: "Anteneh Tadesse",
    role: "Director Infra",
    quote: "Instrumental in the infrastructure and Oracle Core Technology Stack implementation for FlexCube.",
    rating: 5,
  },
  {
    id: 5,
    company: "Enat Bank",
    name: "Dinku Kassaye",
    role: "CIO",
    quote: "Successfully implemented Transaction SMS and USSD services, enhancing customer communication.",
    rating: 5,
  },
  {
    id: 6,
    company: "Siinqee Bank",
    name: "Samson Eyob",
    role: "CIO",
    quote: "Professional approach and technical expertise make them an invaluable asset to our operations.",
    rating: 5,
  },
  {
    id: 7,
    company: "Hijra Bank",
    name: "Hassen Mohammed",
    role: "VP-IS",
    quote: "Digital wallet platform offers seamless financial management and secure transactions.",
    rating: 5,
  },
];

const successStory = {
  title: "Mission-Critical Migration",
  client: "EthSwitch",
  description: "Orchestrated the seamless migration of the national switching system to a new data center. Executed a zero-downtime strategy by leveraging a disaster recovery site for 72 hours before cutting over to the new primary site.",
  outcome: "100% Service Continuity",
};

export default function Testimonials() {
  return (
    <section className="py-32 bg-gray-100 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neutral-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mb-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
              Trusted by <span className="text-emerald-600">Industry Leaders</span>
            </h2>
            <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
              We take pride in powering the critical infrastructure of Ethiopia's top financial and government institutions.
            </p>
          </motion.div>
        </div>

        {/* Success Story - Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-900 rounded-4xl p-10 text-white relative overflow-hidden group max-w-5xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] group-hover:bg-emerald-500/30 transition-colors duration-700" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium uppercase tracking-wider border border-emerald-500/20">
                  Case Study
                </span>
                <span className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                  <Building2 size={14} />
                  {successStory.client}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">{successStory.title}</h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {successStory.description}
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <div className="text-sm text-neutral-400 mb-2">Key Outcome</div>
              <div className="text-3xl font-bold text-emerald-400 mb-6">{successStory.outcome}</div>
              <button className="w-full py-3 bg-white text-neutral-900 rounded-xl font-semibold hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2">
                Read Full Story <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dual Infinite Marquee Testimonials */}
      <div className="relative overflow-hidden space-y-2">
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Row 1: Right to Left */}
        <div className="flex animate-marquee-left whitespace-nowrap hover:[animation-play-state:paused] [animation-duration:10s]">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={`row1-${testimonial.id}-${index}`} 
              className="inline-block w-[85vw] md:w-[45vw] lg:w-[30vw] mx-2 whitespace-normal"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Row 2: Left to Right */}
        {/* <div className="flex animate-marquee-right whitespace-nowrap hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={`row2-${testimonial.id}-${index}`} 
              className="inline-block w-[85vw] md:w-[45vw] lg:w-[30vw] mx-4 whitespace-normal"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 w-full min-w-[300px] border border-neutral-200/60 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:border-emerald-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden h-full flex flex-col justify-between">
      
      {/* Subtle Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-emerald-50/0 group-hover:to-emerald-50/30 transition-all duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-neutral-50 rounded-lg border border-neutral-100 group-hover:bg-white group-hover:border-emerald-100 transition-colors duration-300">
             <Quote size={14} className="text-emerald-600/80" />
          </div>
          <div className="px-2.5 py-0.5 bg-neutral-50 rounded-full border border-neutral-100">
            <span className="text-[9px] font-bold text-neutral-500 tracking-widest uppercase">{testimonial.company}</span>
          </div>
        </div>
        
        {/* Quote Text */}
        <blockquote className="text-md text-neutral-700 leading-relaxed font-medium italic mb-4 grow">
          "{testimonial.quote}"
        </blockquote>
        
        {/* Footer: Author */}
        <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 font-bold text-xs border border-neutral-200">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-neutral-900 text-xs">{testimonial.name}</div>
            <div className="text-[10px] text-neutral-500 font-medium mt-0.5">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
