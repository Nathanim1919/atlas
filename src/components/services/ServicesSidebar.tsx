"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ServicesSidebarProps {
  services: {
    id: string;
    title: string;
  }[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function ServicesSidebar({ services, activeId, onSelect }: ServicesSidebarProps) {
  return (
    <div className="sticky top-42">
      <nav className="relative">
        {/* Vertical Line Track */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-neutral-200" />

        <ul className="space-y-6 relative">
          {services.map((service) => {
            const isActive = activeId === service.id;
            
            return (
              <li key={service.id}>
                <button
                  onClick={() => onSelect(service.id)}
                  className={`group flex items-center gap-0 w-full text-left transition-colors duration-300 ${
                    isActive ? "text-primary-600" : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {/* Dot Indicator */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 shrink-0">
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.5,
                        backgroundColor: isActive ? "var(--primary-600)" : "var(--neutral-300)",
                        borderColor: isActive ? "var(--primary-100)" : "transparent",
                      }}
                      className={`w-2.5 h-2.5 rounded-full ring-4 ring-transparent transition-all duration-300 ${
                        isActive ? "ring-primary-100" : "group-hover:bg-neutral-400"
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    isActive ? "translate-x-1 font-semibold" : ""
                  }`}>
                    {service.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

