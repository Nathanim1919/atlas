"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  Cpu, 
  FileSearch, 
  ShieldAlert, 
  Bot, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Database,
  Building2
} from "lucide-react";

export default function AIAutomationPage() {
  const aiCapabilities = [
    {
      icon: FileSearch,
      title: "Intelligent Document Processing (IDP)",
      desc: "Deep learning OCR and semantic extraction for Ethiopian National IDs (Fayda), trade licenses, tax clearance certificates, and financial statements—cutting manual verification times by 85%."
    },
    {
      icon: ShieldAlert,
      title: "Real-Time Transaction Anomaly & Fraud Detection",
      desc: "Machine learning models trained on banking transaction flows to identify suspicious behavioral anomalies, account takeovers, and synthetic identity fraud before funds settle."
    },
    {
      icon: Bot,
      title: "Enterprise Copilots & Institutional AI Assistants",
      desc: "Secure on-premise Large Language Model (LLM) agents connected to your internal regulatory databases, standard operating procedures (SOPs), and banking manuals without data leaking to public clouds."
    },
    {
      icon: Workflow,
      title: "Robotic Process Automation (RPA)",
      desc: "End-to-end automated workflows bridging legacy desktop systems, core banking terminals, and third-party utility APIs for high-volume reconciliation and daily settlements."
    },
    {
      icon: Zap,
      title: "Predictive Infrastructure Telemetry",
      desc: "AI-driven time-series analysis that forecasts storage exhaustion, hardware degradation, and network bandwidth saturation up to 72 hours before failure occurs."
    },
    {
      icon: Database,
      title: "Credit Scoring & Alternative Financial Modeling",
      desc: "Custom statistical and machine learning models leveraging utility payment history and merchant transaction records from the Uni-Cash ecosystem for automated credit evaluation."
    }
  ];

  const openDemoModal = (product: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-demo-modal", { detail: { intent: "demo", product } }));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-28 pb-20 overflow-hidden bg-primary-950 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-secondary-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} className="text-secondary-400" />
              <span>Next-Generation Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6 leading-[1.1]">
              AI & Automation for <br />
              <span className="text-secondary-400">Ethiopian Enterprises</span>
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed font-light mb-8 max-w-2xl">
              Empower your institution with private on-premise AI models, automated document processing, fraud prevention, and robotic process automation—built with enterprise data privacy at the core.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openDemoModal("ai-automation")}
                className="px-8 py-4 bg-secondary-400 hover:bg-secondary-300 text-primary-950 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Request an AI POC & Demo</span>
                <ArrowRight size={16} />
              </button>

              <Link
                href="/products/unicash"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all flex items-center gap-2 text-sm"
              >
                <span>See Automation in Uni-Cash</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-display">
              Enterprise Artificial Intelligence & Automation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-secondary-50 text-secondary-700 flex items-center justify-center mb-6">
                    <cap.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 font-display">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-primary-600">
                  <CheckCircle2 size={14} />
                  <span>On-Premise / Sovereign AI</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
