"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star, Building2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    company: "Wegagen Bank",
    name: "Goitom G/Tsadkan",
    role: "Chief Information Officer",
    quote: "Atlas Computer Technology PLC's USSD and Mobile banking platforms have streamlined our bank payment processing, enhanced customer engagement, and improved overall operational efficiency.",
    highlight: "Their proactive approach and technical proficiency have made a significant positive impact on our business operations.",
    rating: 5,
  },
  {
    id: 2,
    company: "Oromia International Bank (OIB)",
    name: "Geleta Bekuma",
    role: "VP-Information Technology",
    quote: "Atlas Computer Technology has implemented Oracle Linux Virtualization Management (OLVM) based hyper-converged infrastructure, enhancing our services and leveraging technological advancements.",
    highlight: "We are happy with their professionalism, commitment, and efficiency.",
    rating: 5,
  },
  {
    id: 3,
    company: "Abay Bank",
    name: "Elias Berhanu Benede",
    role: "Director Information Technology",
    quote: "Atlas Computer Technology PLC provided excellent service in maintaining our servers, storage, and related systems with a defined Service Level Agreement (SLA).",
    highlight: "We would certainly recommend them for any similar project.",
    rating: 5,
  },
  {
    id: 4,
    company: "Dashen Bank",
    name: "Anteneh Tadesse",
    role: "Director, IT Infrastructure Dept.",
    quote: "Atlas Computer Technology PLC has been instrumental in the infrastructure and Oracle Core Technology Stack implementation for our FlexCube upgrade project.",
    highlight: "Their expertise in installation, configuration, and performance tuning has been commendable.",
    rating: 5,
  },
  {
    id: 5,
    company: "Enat Bank",
    name: "Dinku Kassaye",
    role: "Chief Information Officer",
    quote: "Atlas Computer Technology PLC has successfully implemented Transaction Short Message Services (SMS) and USSD services, enhancing our customer communication.",
    highlight: "We are happy with their approach and methodology of design, implementation, and project management services.",
    rating: 5,
  },
  {
    id: 6,
    company: "Siinqee Bank",
    name: "Samson Eyob Wondemu",
    role: "Chief Information Officer",
    quote: "Atlas Computer Technology PLC's professional approach, technical expertise, and commitment to customer satisfaction make them an invaluable asset.",
    highlight: "Their attention to detail and project management skills ensure a smooth and hassle-free implementation process.",
    rating: 5,
  },
  {
    id: 7,
    company: "Hijra Bank",
    name: "Hassen Mohammed Ali",
    role: "VP-Information System",
    quote: "Atlas Computer Technology PLC's digital wallet and internet banking platform offers seamless financial management, secure transactions, and user-friendly features.",
    highlight: "Their robust security, ease of use, and exceptional support have greatly benefited our operations.",
    rating: 5,
  },
];

const successStory = {
  title: "Facilitating Seamless Data Center Migration for EthSwitch",
  description: "Our system engineering team meticulously planned and executed the migration of EthSwitch's national switching system to a new data center. To ensure uninterrupted service, we seamlessly transitioned operations to the Disaster Recovery site for three consecutive business days, followed by a flawless return to the newly established primary site.",
  outcome: "This successful project underscores Atlas's expertise in handling critical infrastructure transitions. Our skilled engineers demonstrated exceptional proficiency in maintaining operational efficiency throughout the entire process, minimizing disruption and ensuring seamless service delivery.",
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern" />

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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-6">
            Trusted by <span className="gradient-text">Leading Banks</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with Atlas Computer Technology.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                <Quote className="text-primary-600" size={32} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-secondary-400 fill-secondary-400" size={24} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-6">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Highlight */}
              <p className="text-lg text-primary-600 font-medium italic mb-8">
                &ldquo;{testimonials[activeIndex].highlight}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-lg text-neutral-900">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-neutral-500">{testimonials[activeIndex].role}</div>
                  <div className="text-primary-600 font-medium">{testimonials[activeIndex].company}</div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:shadow-xl transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-primary-600 w-8"
                        : "bg-neutral-300 hover:bg-neutral-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-neutral-600 hover:text-primary-600 hover:shadow-xl transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl hover:border-primary-200 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Building2 className="text-primary-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.company}</div>
                  <div className="text-sm text-neutral-500">{testimonial.name}</div>
                </div>
              </div>
              <p className="text-neutral-600 text-sm line-clamp-3">&ldquo;{testimonial.highlight}&rdquo;</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="success-story"
          className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl p-8 md:p-12 text-white"
        >
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
            Success Story
          </span>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-6">
            {successStory.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-primary-100 text-lg leading-relaxed">
              {successStory.description}
            </p>
            <div className="bg-white/10 rounded-2xl p-6">
              <h4 className="font-semibold text-lg mb-4">Outcome</h4>
              <p className="text-primary-100 leading-relaxed">
                {successStory.outcome}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

