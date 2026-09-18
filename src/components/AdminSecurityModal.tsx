"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  KeyRound, 
  Lock, 
  Eye, 
  EyeOff, 
  X, 
  AlertCircle, 
  Save, 
  User, 
  Check, 
  ShieldCheck,
  Building2,
  CheckCircle2
} from "lucide-react";
import { toast } from "sonner";

interface AdminSecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
  adminName: string;
  adminEmail: string;
  onProfileUpdated?: (newName: string) => void;
}

export default function AdminSecurityModal({
  isOpen,
  onClose,
  adminName,
  adminEmail,
  onProfileUpdated,
}: AdminSecurityModalProps) {
  const [name, setName] = useState(adminName);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Password validation rules
  const hasMinLength = newPassword.length >= 8;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasSpecial = /[^A-Za-z0-9]/.test(newPassword);
  const isMatch = newPassword.length > 0 && newPassword === confirmPassword;
  const isFormValid = hasMinLength && (confirmPassword.length === 0 || isMatch);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!currentPassword) {
      toast.error("Please enter your current password.");
      return;
    }

    if (!hasMinLength) {
      toast.error("New password must be at least 8 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmPassword,
          name: name.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to change password.");
      }

      toast.success("Security credentials updated successfully", {
        description: "Your administrator password is now active in PostgreSQL.",
      });

      if (onProfileUpdated && name.trim()) {
        onProfileUpdated(name.trim());
      }

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      onClose();
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to update security credentials.");
      toast.error(err.message || "Failed to update security credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans selection:bg-[#3e7da2]/20 selection:text-[#1b4965]">
          {/* High-contrast backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto text-left"
            style={{ backgroundColor: "#ffffff" }}
          >
            {/* Enterprise Blue Header */}
            <div className="bg-[#1b4965] text-white p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              
              <div className="flex items-start justify-between relative z-10">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sky-200 text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    Security & Credentials
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Change Password & Profile
                  </h3>
                  <p className="text-sky-100/90 text-xs sm:text-sm max-w-sm">
                    Manage administrative access and database authentication credentials
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5 bg-white">
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-700 font-medium leading-relaxed">{errorMessage}</p>
                </div>
              )}

              {/* Profile Name & Readonly Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Administrator Display Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Administrator Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Atlas Administrator"
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Account Email (Read-only) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    SuperAdmin Account
                  </label>
                  <input
                    type="text"
                    disabled
                    value={adminEmail}
                    className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 font-mono cursor-not-allowed shadow-2xs"
                  />
                </div>
              </div>

              {/* Section Divider */}
              <div className="pt-2 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <KeyRound className="w-4 h-4 text-[#1b4965]" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Update Security Password
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Current Password */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Current Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        required
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Enter existing password (e.g., Admin@Act2026!)"
                        className="w-full pl-10 pr-11 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all shadow-2xs"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                      >
                        {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      New Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showNewPassword ? "text" : "password"}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Minimum 8 characters"
                        className="w-full pl-10 pr-11 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all shadow-2xs"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                      >
                        {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>

                    {/* Password Strength Checklist */}
                    {newPassword.length > 0 && (
                      <div className="mt-2.5 grid grid-cols-2 gap-2 text-[11px] p-3 bg-slate-50 border border-slate-200 rounded-xl">
                        <div className={`flex items-center gap-1.5 ${hasMinLength ? "text-emerald-700 font-semibold" : "text-slate-500"}`}>
                          <CheckCircle2 size={13} className={hasMinLength ? "text-emerald-600" : "text-slate-300"} />
                          <span>8+ characters</span>
                        </div>
                        <div className={`flex items-center gap-1.5 ${hasUppercase ? "text-emerald-700 font-semibold" : "text-slate-500"}`}>
                          <CheckCircle2 size={13} className={hasUppercase ? "text-emerald-600" : "text-slate-300"} />
                          <span>Uppercase letter</span>
                        </div>
                        <div className={`flex items-center gap-1.5 ${hasNumber ? "text-emerald-700 font-semibold" : "text-slate-500"}`}>
                          <CheckCircle2 size={13} className={hasNumber ? "text-emerald-600" : "text-slate-300"} />
                          <span>At least 1 number</span>
                        </div>
                        <div className={`flex items-center gap-1.5 ${hasSpecial ? "text-emerald-700 font-semibold" : "text-slate-500"}`}>
                          <CheckCircle2 size={13} className={hasSpecial ? "text-emerald-600" : "text-slate-300"} />
                          <span>Special symbol</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Confirm New Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter new password"
                        className="w-full pl-10 pr-11 py-2.5 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all shadow-2xs"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                    {confirmPassword.length > 0 && !isMatch && (
                      <span className="text-[11px] text-red-600 font-medium mt-1.5 block">
                        Passwords do not match
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <Building2 size={13} className="text-slate-400" />
                  <span>Atlas Security Gateway</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isLoading}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-300 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading || !hasMinLength || (confirmPassword.length > 0 && !isMatch)}
                    className="px-5 py-2.5 bg-[#1b4965] hover:bg-[#153950] active:bg-[#0f2b3c] text-white font-semibold rounded-xl text-xs transition-all shadow-md shadow-[#1b4965]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Updating...</span>
                      </>
                    ) : (
                      <>
                        <Save size={14} />
                        <span>Save Changes</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
