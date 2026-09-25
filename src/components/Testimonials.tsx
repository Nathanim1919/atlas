"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface Testimonial {
  _id?: string;
  id?: number;
  company: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    company: "Wegagen Bank",
    name: "Goitom G/Tsadkan",
    role: "Chief Information Officer",
    quote:
      "Atlas Computer Technology PLC's USSD and Mobile banking platforms have streamlined our bank payment processing, enhanced customer engagement, and improved overall operational efficiency. Their proactive approach and technical proficiency have made a significant positive impact on our business operations.",
    rating: 5,
  },
  {
    id: 2,
    company: "Oromia Int. Bank",
    name: "Geleta Bekuma",
    role: "VP — Information Technology",
    quote:
      "Atlas Computer Technology has implemented Oracle Linux Virtualization Management (OLVM) based hyper-converged infrastructure, enhancing our services and leveraging technological advancements. We are happy with their professionalism, commitment, and efficiency.",
    rating: 5,
  },
  {
    id: 3,
    company: "Abay Bank",
    name: "Elias Berhanu Benede",
    role: "Director, Information Technology",
    quote:
      "Atlas Computer Technology PLC provided excellent service in maintaining our servers, storage, and related systems with a defined Service Level Agreement (SLA). We would certainly recommend them for any similar project.",
    rating: 5,
  },
  {
    id: 4,
    company: "Dashen Bank",
    name: "Anteneh Tadesse",
    role: "Director, IT Infrastructure",
    quote:
      "Atlas Computer Technology PLC has been instrumental in the infrastructure and Oracle Core Technology Stack implementation for our FlexCube upgrade project. Their expertise in installation, configuration, and performance tuning has been commendable.",
    rating: 5,
  },
  {
    id: 5,
    company: "Enat Bank",
    name: "Dinku Kassaye",
    role: "Chief Information Officer",
    quote:
      "Atlas Computer Technology PLC has successfully implemented Transaction Short Message Services (SMS) and USSD services, enhancing our customer communication. We are happy with their approach and methodology of design, implementation, and project management services.",
    rating: 5,
  },
  {
    id: 6,
    company: "Siinqee Bank",
    name: "Samson Eyob Wondemu",
    role: "Chief Information Officer",
    quote:
      "Atlas Computer Technology PLC's professional approach, technical expertise, and commitment to customer satisfaction make them an invaluable asset. Their attention to detail and project management skills ensure a smooth and hassle-free implementation process.",
    rating: 5,
  },
];

export default function Testimonials({
  testimonials = [],
}: {
  testimonials?: Testimonial[];
}) {
  const display =
    testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 border-b border-neutral-200 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#3e7da2] mb-3">
              Client Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              What Our Clients Say
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
            Feedback from CIOs and IT Directors across Ethiopia&apos;s leading
            banks and public institutions.
          </p>
        </div>

        {/* EthSwitch Case Study — featured, no glow, just a left border */}
        <div className="mb-14 border-l-4 border-[#dde325] pl-6 py-2 bg-neutral-50 rounded-r-xl pr-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#3e7da2]">
                  Case Study
                </span>
                <span className="text-[11px] text-neutral-400">·</span>
                <span className="text-[11px] font-semibold text-neutral-500">
                  EthSwitch
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Mission-Critical Data Center Migration
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
                Orchestrated the seamless migration of the national switching
                system to a new data center — zero-downtime strategy leveraging
                a disaster recovery site for 72 hours before cutover to the new
                primary site.
              </p>
            </div>
            <div className="shrink-0">
              <div className="text-2xl font-bold text-[#3e7da2] mb-1">
                100%
              </div>
              <div className="text-xs text-neutral-500 font-medium mb-4">
                Service Continuity
              </div>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#3e7da2] hover:text-[#306689] transition-colors"
              >
                Read Full Story <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Testimonials Grid — static, 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {display.map((t) => (
            <div
              key={t.id ?? t._id}
              className="border border-neutral-200 rounded-xl p-6 bg-white flex flex-col justify-between"
            >
              {/* Quote */}
              <blockquote className="text-sm text-neutral-600 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="pt-4 border-t border-neutral-100">
                <div className="font-semibold text-neutral-900 text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
