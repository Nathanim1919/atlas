"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  X, 
  Plus, 
  Save, 
  Building2, 
  MapPin, 
  Clock, 
  Award, 
  Tag, 
  FileText,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";

export interface JobPostingData {
  id?: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  description: string;
  requirements: string;
  tags: string[];
  status: string;
}

interface AdminJobPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
  jobToEdit?: JobPostingData | null;
}

const DEPARTMENTS = [
  "Software Development",
  "System Engineering",
  "Product Delivery",
  "Managed Services",
  "AI & Automation",
  "Business Development",
  "Quality Assurance & Testing",
  "Executive & Operations"
];

const JOB_TYPES = ["Full-time", "Contract", "Part-time", "Internship"];
const EXPERIENCE_LEVELS = ["Junior", "Mid", "Senior", "Lead", "Principal", "Executive"];

export default function AdminJobPostModal({
  isOpen,
  onClose,
  onSaved,
  jobToEdit,
}: AdminJobPostModalProps) {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [location, setLocation] = useState("Addis Ababa, Ethiopia");
  const [type, setType] = useState("Full-time");
  const [level, setLevel] = useState("Mid-Senior");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [status, setStatus] = useState("ACTIVE");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (jobToEdit) {
      setTitle(jobToEdit.title || "");
      setDepartment(jobToEdit.department || DEPARTMENTS[0]);
      setLocation(jobToEdit.location || "Addis Ababa, Ethiopia");
      setType(jobToEdit.type || "Full-time");
      setLevel(jobToEdit.level || "Mid-Senior");
      setDescription(jobToEdit.description || "");
      setRequirements(jobToEdit.requirements || "");
      setTags(Array.isArray(jobToEdit.tags) ? jobToEdit.tags : []);
      setStatus(jobToEdit.status || "ACTIVE");
    } else {
      setTitle("");
      setDepartment(DEPARTMENTS[0]);
      setLocation("Addis Ababa, Ethiopia");
      setType("Full-time");
      setLevel("Mid-Senior");
      setDescription("");
      setRequirements("");
      setTags(["FinTech", "Enterprise", "ACT"]);
      setStatus("ACTIVE");
    }
    setErrorMessage("");
  }, [jobToEdit, isOpen]);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!title.trim() || !department.trim() || !description.trim()) {
      toast.error("Please provide Title, Department, and Job Description.");
      return;
    }

    setIsLoading(true);

    try {
      const isEditing = Boolean(jobToEdit?.id);
      const url = isEditing
        ? `/api/careers/jobs/${jobToEdit?.id}`
        : "/api/careers/jobs";
      const method = isEditing ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          department: department.trim(),
          location: location.trim(),
          type: type.trim(),
          level: level.trim(),
          description: description.trim(),
          requirements: requirements.trim(),
          tags,
          status,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to save job position.");
      }

      toast.success(
        isEditing
          ? "Job opening updated successfully!"
          : "New career position published successfully!"
      );
      onSaved();
      onClose();
    } catch (err: any) {
      console.error("Save job error:", err);
      const msg = err.message || "Failed to save job position.";
      setErrorMessage(msg);
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans selection:bg-[#3e7da2]/20 selection:text-[#1b4965]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto text-left"
          style={{ backgroundColor: "#ffffff" }}
        >
          {/* Header */}
          <div className="bg-[#1b4965] text-white p-6 sm:p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

            <div className="flex items-start justify-between relative z-10">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sky-200 text-xs font-semibold uppercase tracking-wider">
                  <Briefcase size={13} className="text-[#dde325]" />
                  Recruitment & Talent
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {jobToEdit?.id ? "Edit Career Position" : "Post New Career Opening"}
                </h3>
                <p className="text-sky-100/90 text-xs sm:text-sm">
                  Publish or update opportunities displayed on the public careers portal
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4.5 bg-white max-h-[75vh] overflow-y-auto">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <p className="text-xs text-red-700 font-medium leading-relaxed">{errorMessage}</p>
              </div>
            )}

            {/* Position Title & Department */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Job Position Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Senior Full Stack Developer"
                  className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Department <span className="text-red-500">*</span>
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all cursor-pointer"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Type, Level & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Employment Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1b4965] transition-all cursor-pointer"
                >
                  {JOB_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Experience Level
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1b4965] transition-all cursor-pointer"
                >
                  {EXPERIENCE_LEVELS.map((lvl) => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Addis Ababa, Ethiopia"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] transition-all"
                />
              </div>
            </div>

            {/* Role Overview / Description */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Role Overview & Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the primary mission, impact, and daily responsibilities of this role..."
                className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all leading-relaxed"
              />
            </div>

            {/* Requirements & Qualifications */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Key Requirements & Qualifications
              </label>
              <textarea
                rows={3}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="• 3+ years experience in React and Node.js&#10;• Experience with high-availability systems&#10;• Strong communication skills"
                className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 transition-all leading-relaxed font-mono"
              />
            </div>

            {/* Tags & Skill Keywords */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Skills & Tech Stack Tags
              </label>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  placeholder="Type a skill and press Enter (e.g. React, Docker, Linux)"
                  className="grow px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965]"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-sky-800 text-xs font-medium"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-sky-500 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Status Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Publication Status
              </label>
              <div className="flex items-center gap-3">
                {[
                  { id: "ACTIVE", label: "Active (Visible on Website)", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
                  { id: "CLOSED", label: "Closed / Filled", color: "text-slate-700 bg-slate-100 border-slate-300" },
                  { id: "DRAFT", label: "Draft (Hidden)", color: "text-amber-700 bg-amber-50 border-amber-200" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setStatus(s.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      status === s.id
                        ? `${s.color} ring-2 ring-offset-1 ring-[#1b4965]`
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-300 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading || !title.trim() || !description.trim()}
                className="px-5 py-2 bg-[#1b4965] hover:bg-[#153950] active:bg-[#0f2b3c] text-white font-semibold rounded-xl text-xs transition-all shadow-md shadow-[#1b4965]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save size={14} />
                    <span>{jobToEdit?.id ? "Update Job Opening" : "Publish Career Opening"}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
