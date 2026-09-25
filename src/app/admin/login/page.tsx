"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/../public/final logo 3-02-01.png";
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Server, 
  KeyRound, 
  CheckCircle2,
  AlertCircle,
  Building2,
  ArrowLeft,
  ExternalLink
} from "lucide-react";
import { toast } from "sonner";
import { signIn, useSession } from "@/lib/auth-client";

export default function AdminLoginPage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Forward to /admin if already signed in
  useEffect(() => {
    if (!isPending && session) {
      router.replace("/admin");
    }
  }, [session, isPending, router]);

  const executeSignIn = async (emailToUse: string, passwordToUse: string) => {
    setErrorMessage("");

    const cleanEmail = emailToUse.trim().toLowerCase();
    const cleanPassword = passwordToUse.trim();

    if (!cleanEmail || !cleanPassword) {
      toast.error("Please provide both email and password.");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await signIn.email({
        email: cleanEmail,
        password: cleanPassword,
      });

      if (error) {
        console.error("Sign-in response error:", error);
        const msg = error.message || (error.code ? `Error: ${error.code}` : "Invalid administrator credentials. Access denied.");
        setErrorMessage(msg);
        toast.error(msg);
        setIsLoading(false);
        return;
      }

      toast.success("Authentication successful", {
        description: "Welcome to Atlas Computer Technology Console",
      });
      router.replace("/admin");
    } catch (err: any) {
      console.error("Sign-in exception:", err);
      const msg = err?.message || "An unexpected error occurred during sign-in.";
      setErrorMessage(msg);
      toast.error(msg);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await executeSignIn(email, password);
  };

  const handleFillDefaultAdmin = () => {
    setEmail("admin@act.com.et");
    setPassword("Admin@Act2026!");
    setErrorMessage("");
    toast.info("Default credentials inserted", {
      description: "admin@act.com.et / Admin@Act2026!",
    });
  };

  const handleQuickSignIn = async () => {
    setEmail("admin@act.com.et");
    setPassword("Admin@Act2026!");
    await executeSignIn("admin@act.com.et", "Admin@Act2026!");
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-9 h-9 border-3 border-slate-200 border-t-[#1b4965] rounded-full animate-spin" />
          <p className="text-slate-500 text-sm font-medium">Verifying security context...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans selection:bg-[#3e7da2]/20 selection:text-[#1b4965]">
      {/* Top Navigation Bar with Back to Website */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xs">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold transition-all group cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-slate-500 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Atlas Website</span>
        </Link>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-slate-600 hidden sm:inline">Atlas Enterprise Security Gateway</span>
        </div>
      </header>

      {/* Main Login Body */}
      <div className="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        {/* Header Branding */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <Link href="/" className="inline-flex items-center justify-center mb-5 group cursor-pointer">
            <Image
              src={Logo}
              alt="Atlas Computer Technology Logo"
              width={200}
              height={60}
              priority
              className="object-contain w-auto h-11 group-hover:opacity-90 transition-opacity"
            />
          </Link>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Atlas Enterprise Console
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Executive operations, solution demos & SLA incident management
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
          <div className="bg-white py-8 px-6 sm:px-10 shadow-xl shadow-slate-200/60 rounded-2xl border border-slate-200/80">
            {/* Security Notice Pill */}
            <div className="mb-6 flex items-center justify-between px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Restricted Portal
              </span>
              <span className="text-[11px] text-slate-500">Sign-in only</span>
            </div>

            {errorMessage && (
              <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <p className="text-xs text-red-700 leading-relaxed font-medium">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Administrator Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@act.com.et"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-11 py-2.5 bg-white border border-slate-300 rounded-xl text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 px-4 bg-[#1b4965] hover:bg-[#153950] active:bg-[#0f2b3c] text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-[#1b4965]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer mt-1"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Console</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Credential Helper Callout */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-[#3e7da2]" />
                    System Default Credentials
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleFillDefaultAdmin}
                      className="text-slate-600 hover:text-slate-900 font-semibold text-xs transition-colors cursor-pointer px-2 py-0.5 rounded hover:bg-slate-200/60"
                    >
                      Fill Form
                    </button>
                    <button
                      type="button"
                      onClick={handleQuickSignIn}
                      className="text-white bg-[#1b4965] hover:bg-[#153950] font-semibold text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer shadow-xs"
                    >
                      Auto-fill & Sign In
                    </button>
                  </div>
                </div>
                <div className="space-y-1 font-mono text-[11px] text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200/80">
                  <p><span className="text-slate-400">Email:</span> admin@act.com.et</p>
                  <p><span className="text-slate-400">Password:</span> Admin@Act2026!</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Atlas Computer Technology PLC • Addis Ababa</span>
              </div>
            </div>
          </div>

          {/* Bottom Clear Return Link */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-slate-500" />
              <span>Return to Atlas Computer Technology Homepage</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
