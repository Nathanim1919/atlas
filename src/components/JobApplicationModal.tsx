"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  User, 
  Mail, 
  Phone, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Send, 
  Trash2, 
  Building2, 
  MapPin, 
  Sparkles,
  Check
} from "lucide-react";
import { toast } from "sonner";

export interface JobPositionInfo {
  id: string;
  title: string;
  department: string;
  location?: string;
  type?: string;
  level?: string;
}

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobPositionInfo | null;
}

export default function JobApplicationModal({
  isOpen,
  onClose,
  job,
}: JobApplicationModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fitReason, setFitReason] = useState("");

  // Resume state
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadedResumeUrl, setUploadedResumeUrl] = useState<string>("");
  const [uploadedResumeName, setUploadedResumeName] = useState<string>("");
  const [isUploadingFile, setIsUploadingFile] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setFitReason("");
    setResumeFile(null);
    setUploadedResumeUrl("");
    setUploadedResumeName("");
    setIsSuccess(false);
    setErrorMessage("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Handle file selection and upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Resume file exceeds 10MB limit. Please upload a smaller document.");
      return;
    }

    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext || !["pdf", "doc", "docx"].includes(ext)) {
      toast.error("Please upload a PDF, DOC, or DOCX document.");
      return;
    }

    setResumeFile(file);
    setIsUploadingFile(true);
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/careers/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to upload document to Supabase storage.");
      }

      setUploadedResumeUrl(data.url);
      setUploadedResumeName(data.originalName || file.name);
      toast.success("Resume document uploaded successfully!");
    } catch (err: any) {
      console.error("Resume upload error:", err);
      toast.error(err.message || "Failed to upload resume.");
      setResumeFile(null);
      setUploadedResumeUrl("");
    } finally {
      setIsUploadingFile(false);
    }
  };

  const handleRemoveResume = () => {
    setResumeFile(null);
    setUploadedResumeUrl("");
    setUploadedResumeName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!job) {
      toast.error("No active job role selected.");
      return;
    }

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      toast.error("Please fill in your contact information.");
      return;
    }

    if (!uploadedResumeUrl) {
      toast.error("Please upload your resume document.");
      return;
    }

    if (!fitReason.trim() || fitReason.trim().length < 15) {
      toast.error("Please tell us why you fit this role (minimum 15 characters).");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: job.id,
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          resumeUrl: uploadedResumeUrl,
          resumeFileName: uploadedResumeName || resumeFile?.name,
          fitReason: fitReason.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setIsSuccess(true);
      toast.success("Application Submitted Successfully!", {
        description: `Thank you, ${fullName}. Our engineering recruitment team will review your application.`,
      });
    } catch (err: any) {
      console.error("Application error:", err);
      const msg = err.message || "Failed to submit application.";
      setErrorMessage(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !job) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans selection:bg-[#3e7da2]/20 selection:text-[#1b4965]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto text-left"
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* Header */}
          <div className="bg-[#1b4965] text-white p-6 sm:p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <div className="flex items-start justify-between relative z-10">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sky-200 text-xs font-semibold uppercase tracking-wider">
                  <Briefcase size={13} className="text-[#dde325]" />
                  Job Application
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-sky-100/90 font-medium">
                  <span className="flex items-center gap-1">
                    <Building2 size={13} />
                    {job.department}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {job.location || "Addis Ababa, Ethiopia"}
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded bg-white/15 text-white font-semibold">
                    {job.type || "Full-time"}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-7">
            {isSuccess ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Application Submitted!</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for applying to join <strong>Atlas Computer Technology</strong>. Your resume and questionnaire have been dispatched to our engineering hiring board.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-6 py-2.5 bg-[#1b4965] hover:bg-[#153950] text-white font-semibold rounded-xl text-sm transition-all shadow-md cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-red-700 font-medium leading-relaxed">{errorMessage}</p>
                  </div>
                )}

                {/* Candidate Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Full Name */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User size={15} />
                      </div>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Abebe Bikila"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail size={15} />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="abebe@example.com"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone size={15} />
                      </div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+251 911 000 000"
                        className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Curriculum Vitae / Resume Document <span className="text-red-500">*</span>
                  </label>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-file-input"
                  />

                  {uploadedResumeUrl ? (
                    <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                          <FileText size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 line-clamp-1">
                            {uploadedResumeName || resumeFile?.name || "Uploaded Resume"}
                          </p>
                          <span className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                            <Check size={12} /> Document uploaded to Supabase Storage
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleRemoveResume}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                        title="Remove and upload different file"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className={`p-5 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all ${
                        isUploadingFile 
                          ? "border-[#1b4965] bg-sky-50/50 cursor-wait" 
                          : "border-slate-300 hover:border-[#1b4965] hover:bg-slate-50/70"
                      }`}
                    >
                      {isUploadingFile ? (
                        <div className="flex flex-col items-center gap-2 py-2">
                          <div className="w-6 h-6 border-2 border-[#1b4965] border-t-transparent rounded-full animate-spin" />
                          <p className="text-xs font-semibold text-[#1b4965]">Uploading document to Supabase storage...</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mb-1">
                            <UploadCloud size={20} />
                          </div>
                          <p className="text-xs font-semibold text-slate-800">
                            Click to upload or drag & drop your resume
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Accepted formats: PDF, DOC, DOCX (Max size: 10MB)
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Candidate Questionnaire: Why do you think you fit this position? */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                      <Sparkles size={13} className="text-[#3e7da2]" />
                      <span>Why do you think you fit this position?</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {fitReason.length} characters
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={fitReason}
                    onChange={(e) => setFitReason(e.target.value)}
                    placeholder="Briefly highlight your core technical qualifications, why you are drawn to this role, and how your expertise directly aligns with Atlas Computer Technology..."
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all leading-relaxed"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    This answer will be reviewed directly by the engineering leads and hiring committee.
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-300 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || isUploadingFile || !uploadedResumeUrl || fitReason.trim().length < 15}
                    className="px-6 py-2.5 bg-[#1b4965] hover:bg-[#153950] active:bg-[#0f2b3c] text-white font-semibold rounded-xl text-xs transition-all shadow-md shadow-[#1b4965]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
