"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/../public/final logo 3-02-01.png";
import { 
  Building2, 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Filter, 
  RefreshCw, 
  Download, 
  Eye, 
  Trash2, 
  LifeBuoy, 
  Sparkles, 
  ShieldCheck, 
  Server, 
  CreditCard, 
  Cloud, 
  Layers, 
  ArrowUpRight, 
  ExternalLink,
  ChevronDown,
  X,
  Send,
  MessageSquare,
  Activity,
  Check,
  LogOut,
  User as UserIcon,
  HelpCircle,
  FileText,
  AlertCircle,
  KeyRound,
  Briefcase,
  Users,
  Plus,
  Edit2,
  DownloadCloud,
  FolderOpen,
  MapPin,
  FileCheck,
  Newspaper
} from "lucide-react";
import { toast } from "sonner";
import { useSession, signOut } from "@/lib/auth-client";
import AdminSecurityModal from "@/components/AdminSecurityModal";
import AdminJobPostModal, { JobPostingData } from "@/components/AdminJobPostModal";
import AdminNewsModal from "@/components/AdminNewsModal";
import { NewsArticleItem } from "@/lib/news-data";

export interface AdminJobPosting {
  id: string;
  createdAt: string;
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  description: string;
  requirements: string;
  tags: string;
  status: string;
  _count?: {
    applications: number;
  };
}

export interface AdminJobApplication {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  resumeFileName: string | null;
  fitReason: string;
  status: string;
  adminNotes: string | null;
  job: {
    id: string;
    title: string;
    department: string;
    type: string;
    location: string;
  };
}

interface DemoRequest {
  id: string;
  createdAt: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  intent: string;
  product: string;
  preferredDate: string | null;
  notes: string | null;
  status: string;
  adminNotes: string | null;
}

interface SupportTicket {
  id: string;
  ticketNumber: string;
  createdAt: string;
  institution: string;
  contactName: string;
  email: string;
  phone: string;
  priority: string;
  system: string;
  subject: string;
  description: string;
  status: string;
  internalNotes: string | null;
  resolvedAt: string | null;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const { data: session, isPending: isAuthPending } = useSession();

  const [activeTab, setActiveTab] = useState<"demos" | "tickets" | "careers" | "applications" | "news" | "analytics">("demos");
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>([]);
  const [jobPostings, setJobPostings] = useState<AdminJobPosting[]>([]);
  const [jobApplications, setJobApplications] = useState<AdminJobApplication[]>([]);
  const [newsArticles, setNewsArticles] = useState<NewsArticleItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [demoStatusFilter, setDemoStatusFilter] = useState("ALL");
  const [demoProductFilter, setDemoProductFilter] = useState("ALL");
  const [ticketPriorityFilter, setTicketPriorityFilter] = useState("ALL");
  const [ticketStatusFilter, setTicketStatusFilter] = useState("ALL");
  const [jobDepartmentFilter, setJobDepartmentFilter] = useState("ALL");
  const [appJobFilter, setAppJobFilter] = useState("ALL");
  const [appStatusFilter, setAppStatusFilter] = useState("ALL");
  const [newsCategoryFilter, setNewsCategoryFilter] = useState("ALL");

  // Inspection Drawer State
  const [selectedDemo, setSelectedDemo] = useState<DemoRequest | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [editAdminNotes, setEditAdminNotes] = useState("");
  const [isSavingNotes, setIsSavingNotes] = useState(false);

  // Candidate Inspection State
  const [selectedApplication, setSelectedApplication] = useState<AdminJobApplication | null>(null);
  const [editAppNotes, setEditAppNotes] = useState("");
  const [isSavingAppNotes, setIsSavingAppNotes] = useState(false);

  // Career Job Post Modal State
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [jobToEdit, setJobToEdit] = useState<JobPostingData | null>(null);

  // News Article Modal State
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [newsToEdit, setNewsToEdit] = useState<NewsArticleItem | null>(null);

  // Security Modal State
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [adminDisplayName, setAdminDisplayName] = useState("Atlas Administrator");

  // Keep display name synced with session
  useEffect(() => {
    if (session?.user?.name) {
      setAdminDisplayName(session.user.name);
    }
  }, [session]);

  // Session Protection
  useEffect(() => {
    if (!isAuthPending && !session) {
      router.replace("/admin/login");
    }
  }, [session, isAuthPending, router]);

  // Fetch all records
  const fetchData = async (silent: boolean = false) => {
    if (!silent) setIsLoading(true);
    setIsRefreshing(true);
    try {
      const [demosRes, ticketsRes, jobsRes, appsRes, newsRes] = await Promise.all([
        fetch("/api/demo-requests"),
        fetch("/api/support-tickets"),
        fetch("/api/careers/jobs?all=true"),
        fetch("/api/careers/applications"),
        fetch("/api/news"),
      ]);

      const demosData = await demosRes.json();
      const ticketsData = await ticketsRes.json();
      const jobsData = await jobsRes.json();
      const appsData = await appsRes.json();
      const newsData = await newsRes.json();

      if (demosData.success) setDemoRequests(demosData.data || []);
      if (ticketsData.success) setSupportTickets(ticketsData.data || []);
      if (jobsData.success) setJobPostings(jobsData.jobs || []);
      if (appsData.success) setJobApplications(appsData.applications || []);
      if (newsData.success) setNewsArticles(newsData.data || []);

      if (silent) toast.success("Records updated from Supabase");
    } catch (err) {
      console.error("Dashboard fetch error:", err);
      if (!silent) toast.error("Failed to load records from database");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleDeleteNews = async (id: string) => {
    if (!confirm("Are you sure you want to remove this news article?")) return;
    try {
      const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("News article removed");
        setNewsArticles(prev => prev.filter(n => n.id !== id && n.slug !== id));
      }
    } catch {
      toast.error("Failed to delete news article");
    }
  };

  const handleToggleJobStatus = async (jobId: string, currentStatus: string) => {
    const newStatus = currentStatus === "ACTIVE" ? "CLOSED" : "ACTIVE";
    try {
      const res = await fetch(`/api/careers/jobs/${jobId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Job status changed to ${newStatus}`);
        setJobPostings(prev => prev.map(j => j.id === jobId ? { ...j, status: newStatus } : j));
      }
    } catch {
      toast.error("Failed to update job status");
    }
  };

  const handleDeleteJob = async (jobId: string) => {
    if (!confirm("Are you sure you want to remove this job opening?")) return;
    try {
      const res = await fetch(`/api/careers/jobs/${jobId}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("Job position removed");
        setJobPostings(prev => prev.filter(j => j.id !== jobId));
      }
    } catch {
      toast.error("Failed to delete job");
    }
  };

  const handleUpdateAppStatus = async (appId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/careers/applications/${appId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Candidate status updated to ${newStatus}`);
        setJobApplications(prev => prev.map(a => a.id === appId ? { ...a, status: newStatus } : a));
        if (selectedApplication?.id === appId) {
          setSelectedApplication(prev => prev ? { ...prev, status: newStatus } : null);
        }
      }
    } catch {
      toast.error("Failed to update applicant status");
    }
  };

  const handleSaveAppNotes = async () => {
    if (!selectedApplication) return;
    setIsSavingAppNotes(true);
    try {
      const res = await fetch(`/api/careers/applications/${selectedApplication.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminNotes: editAppNotes }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Evaluation notes saved to database");
        setJobApplications(prev => prev.map(a => a.id === selectedApplication.id ? { ...a, adminNotes: editAppNotes } : a));
        setSelectedApplication(prev => prev ? { ...prev, adminNotes: editAppNotes } : null);
      }
    } catch {
      toast.error("Failed to save evaluation notes");
    } finally {
      setIsSavingAppNotes(false);
    }
  };

  const handleDeleteApplication = async (appId: string) => {
    if (!confirm("Are you sure you want to delete this applicant submission?")) return;
    try {
      const res = await fetch(`/api/careers/applications/${appId}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        toast.success("Application removed");
        setJobApplications(prev => prev.filter(a => a.id !== appId));
        if (selectedApplication?.id === appId) setSelectedApplication(null);
      }
    } catch {
      toast.error("Failed to delete application");
    }
  };

  useEffect(() => {
    if (session) {
      fetchData();
    }
  }, [session]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Signed out successfully");
      router.replace("/admin/login");
    } catch (err: any) {
      toast.error("Error signing out", { description: err?.message });
    }
  };

  // Update Demo Status
  const handleUpdateDemoStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/demo-requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error);

      setDemoRequests(prev => prev.map(d => d.id === id ? { ...d, status: newStatus } : d));
      if (selectedDemo?.id === id) {
        setSelectedDemo(prev => prev ? { ...prev, status: newStatus } : null);
      }
      toast.success(`Demo status updated to ${newStatus}`);
    } catch (err: any) {
      toast.error("Status update failed", { description: err.message });
    }
  };

  // Update Demo Notes
  const handleSaveDemoNotes = async () => {
    if (!selectedDemo) return;
    setIsSavingNotes(true);
    try {
      const res = await fetch(`/api/demo-requests/${selectedDemo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminNotes: editAdminNotes }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error);

      setDemoRequests(prev => prev.map(d => d.id === selectedDemo.id ? { ...d, adminNotes: editAdminNotes } : d));
      setSelectedDemo(prev => prev ? { ...prev, adminNotes: editAdminNotes } : null);
      toast.success("Internal notes saved");
    } catch (err: any) {
      toast.error("Failed to save notes", { description: err.message });
    } finally {
      setIsSavingNotes(false);
    }
  };

  // Delete Demo Request
  const handleDeleteDemo = async (id: string) => {
    if (!confirm("Are you sure you want to delete this demo request?")) return;
    try {
      const res = await fetch(`/api/demo-requests/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error);

      setDemoRequests(prev => prev.filter(d => d.id !== id));
      if (selectedDemo?.id === id) setSelectedDemo(null);
      toast.success("Demo request deleted");
    } catch (err: any) {
      toast.error("Delete failed", { description: err.message });
    }
  };

  // Update Ticket Status
  const handleUpdateTicketStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/support-tickets/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          status: newStatus,
          resolvedAt: newStatus === "RESOLVED" || newStatus === "CLOSED" ? new Date().toISOString() : null
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error);

      setSupportTickets(prev => prev.map(t => t.id === id ? { 
        ...t, 
        status: newStatus,
        resolvedAt: newStatus === "RESOLVED" ? new Date().toISOString() : t.resolvedAt
      } : t));
      if (selectedTicket?.id === id) {
        setSelectedTicket(prev => prev ? { ...prev, status: newStatus } : null);
      }
      toast.success(`Ticket status updated to ${newStatus}`);
    } catch (err: any) {
      toast.error("Ticket status update failed", { description: err.message });
    }
  };

  // Update Ticket Notes
  const handleSaveTicketNotes = async () => {
    if (!selectedTicket) return;
    setIsSavingNotes(true);
    try {
      const res = await fetch(`/api/support-tickets/${selectedTicket.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ internalNotes: editAdminNotes }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error);

      setSupportTickets(prev => prev.map(t => t.id === selectedTicket.id ? { ...t, internalNotes: editAdminNotes } : t));
      setSelectedTicket(prev => prev ? { ...prev, internalNotes: editAdminNotes } : null);
      toast.success("Internal SLA notes saved");
    } catch (err: any) {
      toast.error("Failed to save notes", { description: err.message });
    } finally {
      setIsSavingNotes(false);
    }
  };

  // Delete Ticket
  const handleDeleteTicket = async (id: string) => {
    if (!confirm("Are you sure you want to delete this support ticket?")) return;
    try {
      const res = await fetch(`/api/support-tickets/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error);

      setSupportTickets(prev => prev.filter(t => t.id !== id));
      if (selectedTicket?.id === id) setSelectedTicket(null);
      toast.success("Support ticket deleted");
    } catch (err: any) {
      toast.error("Delete failed", { description: err.message });
    }
  };

  // Filtered Demos
  const filteredDemos = useMemo(() => {
    return demoRequests.filter(demo => {
      const matchSearch = searchQuery === "" || 
        demo.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        demo.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        demo.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        demo.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        demo.product.toLowerCase().includes(searchQuery.toLowerCase());

      const matchStatus = demoStatusFilter === "ALL" || demo.status === demoStatusFilter;
      const matchProduct = demoProductFilter === "ALL" || demo.product === demoProductFilter;

      return matchSearch && matchStatus && matchProduct;
    });
  }, [demoRequests, searchQuery, demoStatusFilter, demoProductFilter]);

  // Filtered Tickets
  const filteredTickets = useMemo(() => {
    return supportTickets.filter(ticket => {
      const matchSearch = searchQuery === "" || 
        ticket.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.system.toLowerCase().includes(searchQuery.toLowerCase());

      const matchPriority = ticketPriorityFilter === "ALL" || ticket.priority === ticketPriorityFilter;
      const matchStatus = ticketStatusFilter === "ALL" || ticket.status === ticketStatusFilter;

      return matchSearch && matchPriority && matchStatus;
    });
  }, [supportTickets, searchQuery, ticketPriorityFilter, ticketStatusFilter]);

  // Filtered Jobs
  const filteredJobs = useMemo(() => {
    return jobPostings.filter(job => {
      const matchSearch = searchQuery === "" || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.tags && job.tags.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchDept = jobDepartmentFilter === "ALL" || job.department === jobDepartmentFilter;

      return matchSearch && matchDept;
    });
  }, [jobPostings, searchQuery, jobDepartmentFilter]);

  // Filtered Applications
  const filteredApplications = useMemo(() => {
    return jobApplications.filter(app => {
      const matchSearch = searchQuery === "" || 
        app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (app.job?.title && app.job.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (app.fitReason && app.fitReason.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchJob = appJobFilter === "ALL" || app.job?.id === appJobFilter;
      const matchStatus = appStatusFilter === "ALL" || app.status === appStatusFilter;

      return matchSearch && matchJob && matchStatus;
    });
  }, [jobApplications, searchQuery, appJobFilter, appStatusFilter]);

  // Filtered News
  const filteredNews = useMemo(() => {
    return newsArticles.filter(article => {
      const matchSearch = searchQuery === "" || 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.authorName && article.authorName.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchCategory = newsCategoryFilter === "ALL" || article.category === newsCategoryFilter;

      return matchSearch && matchCategory;
    });
  }, [newsArticles, searchQuery, newsCategoryFilter]);

  // Metric Computations
  const stats = useMemo(() => {
    const pendingDemos = demoRequests.filter(d => d.status === "PENDING").length;
    const scheduledDemos = demoRequests.filter(d => d.status === "SCHEDULED").length;
    const openTickets = supportTickets.filter(t => t.status === "OPEN" || t.status === "IN_PROGRESS").length;
    const criticalP1 = supportTickets.filter(t => t.priority === "P1" && t.status !== "RESOLVED" && t.status !== "CLOSED").length;
    const resolvedTickets = supportTickets.filter(t => t.status === "RESOLVED" || t.status === "CLOSED").length;
    const resolutionRate = supportTickets.length > 0 
      ? Math.round((resolvedTickets / supportTickets.length) * 100) 
      : 100;
    const activeJobs = jobPostings.filter(j => j.status === "ACTIVE").length;
    const pendingApps = jobApplications.filter(a => a.status === "PENDING").length;

    return {
      totalDemos: demoRequests.length,
      pendingDemos,
      scheduledDemos,
      totalTickets: supportTickets.length,
      openTickets,
      criticalP1,
      resolutionRate,
      activeJobs,
      pendingApps,
    };
  }, [demoRequests, supportTickets, jobPostings, jobApplications]);

  // CSV Exporter
  const exportToCSV = (type: "demos" | "tickets" | "careers" | "applications" | "news") => {
    let csvContent = "";
    if (type === "demos") {
      csvContent = "data:text/csv;charset=utf-8," + 
        ["ID,Created,Name,Organization,Email,Phone,Intent,Product,Status,PreferredDate,Notes"]
        .concat(demoRequests.map(d => 
          `"${d.id}","${d.createdAt}","${d.fullName}","${d.organization}","${d.email}","${d.phone}","${d.intent}","${d.product}","${d.status}","${d.preferredDate || ""}","${(d.notes || "").replace(/"/g, '""')}"`
        ))
        .join("\n");
    } else if (type === "tickets") {
      csvContent = "data:text/csv;charset=utf-8," + 
        ["TicketNumber,Created,Institution,ContactName,Email,Phone,Priority,System,Subject,Status"]
        .concat(supportTickets.map(t => 
          `"${t.ticketNumber}","${t.createdAt}","${t.institution}","${t.contactName}","${t.email}","${t.phone}","${t.priority}","${t.system}","${t.subject.replace(/"/g, '""')}","${t.status}"`
        ))
        .join("\n");
    } else if (type === "careers") {
      csvContent = "data:text/csv;charset=utf-8," + 
        ["ID,Created,Title,Department,Location,Type,Level,Status,ApplicationsCount"]
        .concat(jobPostings.map(j => 
          `"${j.id}","${j.createdAt}","${j.title.replace(/"/g, '""')}","${j.department}","${j.location}","${j.type}","${j.level}","${j.status}","${j._count?.applications || 0}"`
        ))
        .join("\n");
    } else if (type === "applications") {
      csvContent = "data:text/csv;charset=utf-8," + 
        ["ID,Created,CandidateName,Email,Phone,JobTitle,Department,Status,ResumeUrl,FitReason"]
        .concat(jobApplications.map(a => 
          `"${a.id}","${a.createdAt}","${a.fullName.replace(/"/g, '""')}","${a.email}","${a.phone}","${(a.job?.title || "").replace(/"/g, '""')}","${a.job?.department || ""}","${a.status}","${a.resumeUrl}","${(a.fitReason || "").replace(/"/g, '""')}"`
        ))
        .join("\n");
    } else if (type === "news") {
      csvContent = "data:text/csv;charset=utf-8," + 
        ["ID,Date,Title,Category,Author,ReadTime,Featured,Slug"]
        .concat(newsArticles.map(n => 
          `"${n.id}","${n.date}","${n.title.replace(/"/g, '""')}","${n.categoryLabel}","${n.authorName}","${n.readTime}","${n.featured ? "Yes" : "No"}","${n.slug}"`
        ))
        .join("\n");
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `act_${type}_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`Exported ${type} records to CSV`);
  };

  // Auth Loading Screen
  if (isAuthPending || !session) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-slate-200 border-t-[#1b4965] rounded-full animate-spin" />
          <p className="text-slate-600 text-sm font-medium">Verifying administrator session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-[#3e7da2]/20 selection:text-[#1b4965]">
      {/* Enterprise Top Navigation Bar - Figma/Stripe Light Glassmorphism */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <Image
                src={Logo}
                alt="Atlas Computer Technology Logo"
                width={200}
                height={60}
                priority
                className="object-contain w-auto h-9"
              />
              <span className="hidden xl:inline text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                Operations Console
              </span>
            </Link>

            <span className="text-slate-200 hidden sm:inline">|</span>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-50/80 text-emerald-700 border border-emerald-200/80 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Supabase Connected</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchData(true)}
              disabled={isRefreshing}
              className="p-2 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer disabled:opacity-50 border border-slate-200/60"
              title="Refresh Data"
            >
              <RefreshCw size={15} className={isRefreshing ? "animate-spin text-[#1b4965]" : ""} />
            </button>

            <Link
              href="/"
              target="_blank"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3.5 py-2 rounded-xl bg-slate-100/70 hover:bg-slate-200/80 border border-slate-200/60 transition-colors"
            >
              <span>View Website</span>
              <ExternalLink size={13} />
            </Link>

            {/* Profile Info, Security Settings & Sign Out */}
            <div className="flex items-center gap-2 pl-3 border-l border-slate-200/80">
              <button
                onClick={() => setIsSecurityModalOpen(true)}
                className="flex items-center gap-2 text-left p-1 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group"
                title="Manage Admin Security & Profile"
              >
                <div className="w-8 h-8 rounded-full bg-[#1b4965] text-white flex items-center justify-center text-xs font-bold group-hover:ring-2 group-hover:ring-[#1b4965]/20 transition-all shadow-xs">
                  AD
                </div>
                <div className="hidden lg:flex flex-col text-left">
                  <span className="text-xs font-semibold text-slate-900 leading-tight group-hover:text-[#1b4965] transition-colors">
                    {adminDisplayName}
                  </span>
                  <span className="text-[11px] text-slate-500 leading-tight">
                    {session?.user?.email || "admin@act.com.et"}
                  </span>
                </div>
              </button>

              <button
                onClick={() => setIsSecurityModalOpen(true)}
                className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Change Admin Password"
              >
                <KeyRound size={13} className="text-[#1b4965]" />
                <span className="hidden sm:inline">Password</span>
              </button>

              <button
                onClick={handleSignOut}
                className="px-2.5 py-1.5 rounded-xl bg-rose-50/80 hover:bg-rose-100 text-rose-700 border border-rose-200/80 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Sign Out"
              >
                <LogOut size={13} />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title & Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Operations & SLA Console
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold border border-slate-300/60">
                Live Data
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-sans">
              Real-time management of enterprise leads, high-availability incidents, careers, and news insights
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => exportToCSV(activeTab === "tickets" ? "tickets" : activeTab === "careers" ? "careers" : activeTab === "applications" ? "applications" : activeTab === "news" ? "news" : "demos")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Download size={14} className="text-slate-500" />
              <span>Export CSV</span>
            </button>

            {activeTab === "news" && (
              <button
                onClick={() => {
                  setNewsToEdit(null);
                  setIsNewsModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1b4965] hover:bg-[#153950] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
              >
                <Plus size={14} />
                <span>Create News Article</span>
              </button>
            )}

            {activeTab === "careers" && (
              <button
                onClick={() => {
                  setJobToEdit(null);
                  setIsJobModalOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1b4965] hover:bg-[#153950] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
              >
                <Plus size={14} />
                <span>Post New Career</span>
              </button>
            )}
          </div>
        </div>

        {/* Executive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Card 1: Demos */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Demo Requests
              </span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1b4965] flex items-center justify-center border border-blue-100/60">
                <Sparkles size={17} />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 tracking-tight">{stats.totalDemos}</div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 font-semibold border border-amber-200/60">
                {stats.pendingDemos} Pending
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200/60">
                {stats.scheduledDemos} Scheduled
              </span>
            </div>
          </div>

          {/* Card 2: Support Tickets */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Support Tickets
              </span>
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100/60">
                <LifeBuoy size={17} />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 tracking-tight">{stats.totalTickets}</div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 font-semibold border border-purple-200/60">
                {stats.openTickets} Active
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                {stats.totalTickets - stats.openTickets} Resolved
              </span>
            </div>
          </div>

          {/* Card 3: P1 Outages */}
          <div className={`bg-white rounded-2xl border p-5 shadow-xs hover:border-slate-300 transition-all ${stats.criticalP1 > 0 ? "border-red-300 bg-red-50/20" : "border-slate-200/80"}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                P1 Critical Outages
              </span>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${stats.criticalP1 > 0 ? "bg-red-100 text-red-700 border-red-200" : "bg-slate-100 text-slate-500 border-slate-200"}`}>
                <AlertTriangle size={17} />
              </div>
            </div>
            <div className={`text-3xl font-bold tracking-tight ${stats.criticalP1 > 0 ? "text-red-700" : "text-slate-900"}`}>
              {stats.criticalP1}
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs">
              {stats.criticalP1 > 0 ? (
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 font-bold border border-red-200">
                  Immediate SLA response needed
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                  All systems operational
                </span>
              )}
            </div>
          </div>

          {/* Card 4: News Articles & Content */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                News & Insights
              </span>
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100/60">
                <Newspaper size={17} />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 tracking-tight">{newsArticles.length}</div>
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 font-semibold border border-amber-200/60">
                {newsArticles.filter(n => n.featured).length} Spotlight
              </span>
              <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                Published
              </span>
            </div>
          </div>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 mb-6 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Tabs - Modern Segmented Control */}
            <div className="flex flex-wrap items-center gap-1 bg-slate-100/80 p-1.5 rounded-xl w-fit border border-slate-200/60">
              <button
                onClick={() => setActiveTab("demos")}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "demos" 
                    ? "bg-white text-slate-900 shadow-xs" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <Sparkles size={14} className={activeTab === "demos" ? "text-[#1b4965]" : "text-slate-400"} />
                <span>Demo Leads</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  activeTab === "demos" ? "bg-blue-50 text-[#1b4965]" : "bg-slate-200 text-slate-700"
                }`}>
                  {demoRequests.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("tickets")}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "tickets" 
                    ? "bg-white text-slate-900 shadow-xs" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <LifeBuoy size={14} className={activeTab === "tickets" ? "text-purple-600" : "text-slate-400"} />
                <span>Support Incidents</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  activeTab === "tickets" ? "bg-purple-50 text-purple-700" : "bg-slate-200 text-slate-700"
                }`}>
                  {supportTickets.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("careers")}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "careers" 
                    ? "bg-white text-slate-900 shadow-xs" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <Briefcase size={14} className={activeTab === "careers" ? "text-[#1b4965]" : "text-slate-400"} />
                <span>Career Postings</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  activeTab === "careers" ? "bg-blue-50 text-[#1b4965]" : "bg-slate-200 text-slate-700"
                }`}>
                  {jobPostings.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("applications")}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "applications" 
                    ? "bg-white text-slate-900 shadow-xs" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <Users size={14} className={activeTab === "applications" ? "text-indigo-600" : "text-slate-400"} />
                <span>Applications</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  activeTab === "applications" ? "bg-indigo-100 text-indigo-800" : "bg-slate-200 text-slate-700"
                }`}>
                  {jobApplications.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("news")}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "news" 
                    ? "bg-white text-slate-900 shadow-xs" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <Newspaper size={14} className={activeTab === "news" ? "text-amber-600" : "text-slate-400"} />
                <span>News & Insights</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  activeTab === "news" ? "bg-amber-100 text-amber-800" : "bg-slate-200 text-slate-700"
                }`}>
                  {newsArticles.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("analytics")}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "analytics" 
                    ? "bg-white text-slate-900 shadow-xs" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                }`}
              >
                <Activity size={14} className={activeTab === "analytics" ? "text-emerald-600" : "text-slate-400"} />
                <span>Analytics</span>
              </button>
            </div>

            {/* Search & Action Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    activeTab === "careers"
                      ? "Search job role, department..."
                      : activeTab === "applications"
                      ? "Search candidate, role, skills..."
                      : activeTab === "news"
                      ? "Search news title, topic..."
                      : "Search organization, name, email..."
                  }
                  className="w-full pl-9 pr-8 py-2 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:bg-white transition-all font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Status Filter for Demos */}
              {activeTab === "demos" && (
                <select
                  value={demoStatusFilter}
                  onChange={(e) => setDemoStatusFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#1b4965] cursor-pointer"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="PENDING">Pending</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="SCHEDULED">Scheduled</option>
                  <option value="COMPLETED">Completed</option>
                </select>
              )}

              {/* Status Filter for Tickets */}
              {activeTab === "tickets" && (
                <select
                  value={ticketStatusFilter}
                  onChange={(e) => setTicketStatusFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#1b4965] cursor-pointer"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="OPEN">Open</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="RESOLVED">Resolved</option>
                  <option value="CLOSED">Closed</option>
                </select>
              )}

              {/* Department Filter for Careers */}
              {activeTab === "careers" && (
                <select
                  value={jobDepartmentFilter}
                  onChange={(e) => setJobDepartmentFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#1b4965] cursor-pointer"
                >
                  <option value="ALL">All Departments</option>
                  <option value="Software Development">Software Development</option>
                  <option value="System Engineering">System Engineering</option>
                  <option value="Product Delivery">Product Delivery</option>
                  <option value="Managed Services">Managed Services</option>
                </select>
              )}

              {/* Category Filter for News */}
              {activeTab === "news" && (
                <select
                  value={newsCategoryFilter}
                  onChange={(e) => setNewsCategoryFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#1b4965] cursor-pointer"
                >
                  <option value="ALL">All Categories</option>
                  <option value="company">Company News</option>
                  <option value="fintech">FinTech & Banking</option>
                  <option value="security">Security & SLA</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="events">Events & Expos</option>
                </select>
              )}

              {/* Job & Status Filter for Applications */}
              {activeTab === "applications" && (
                <>
                  <select
                    value={appJobFilter}
                    onChange={(e) => setAppJobFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#1b4965] cursor-pointer max-w-[180px] truncate"
                  >
                    <option value="ALL">All Job Roles</option>
                    {jobPostings.map(j => (
                      <option key={j.id} value={j.id}>{j.title}</option>
                    ))}
                  </select>

                  <select
                    value={appStatusFilter}
                    onChange={(e) => setAppStatusFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-semibold focus:outline-none focus:border-[#1b4965] cursor-pointer"
                  >
                    <option value="ALL">All Stages</option>
                    <option value="PENDING">Pending Review</option>
                    <option value="REVIEWING">Under Review</option>
                    <option value="SHORTLISTED">Shortlisted</option>
                    <option value="REJECTED">Archived / Rejected</option>
                    <option value="HIRED">Hired</option>
                  </select>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Tab 1: Demo Requests Table */}
        {activeTab === "demos" && (
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse font-sans">
                <thead className="bg-slate-50/80 border-b border-slate-200/80 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Organization & Contact</th>
                    <th className="py-3.5 px-4">Product / Solution</th>
                    <th className="py-3.5 px-4">Intent</th>
                    <th className="py-3.5 px-4">Preferred Date</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-normal">
                  {isLoading ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-6 h-6 border-2 border-slate-200 border-t-[#1b4965] rounded-full animate-spin" />
                          <span className="font-semibold text-xs text-slate-600">Loading demo requests from Supabase...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredDemos.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        <Sparkles size={32} className="mx-auto text-slate-300 mb-2" />
                        <p className="font-semibold text-sm text-slate-700">No demo requests matching filter</p>
                        <p className="text-xs text-slate-400 mt-1">Institutional request forms submitted on /contact will show up here</p>
                      </td>
                    </tr>
                  ) : (
                    filteredDemos.map((demo) => (
                      <tr key={demo.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900 text-sm">{demo.organization}</div>
                          <div className="text-slate-500 text-xs flex items-center gap-2 mt-0.5">
                            <span className="font-medium text-slate-700">{demo.fullName}</span>
                            <span>•</span>
                            <span className="font-mono text-slate-500">{demo.phone}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-[#1b4965] font-bold text-xs border border-slate-200/60">
                            {demo.product}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="capitalize font-semibold text-slate-700">{demo.intent}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 font-medium">
                          {demo.preferredDate || "Immediate Request"}
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={demo.status}
                            onChange={(e) => handleUpdateDemoStatus(demo.id, e.target.value)}
                            className={`px-3 py-1 rounded-full text-xs font-bold border cursor-pointer transition-all ${
                              demo.status === "PENDING"
                                ? "bg-amber-50 text-amber-800 border-amber-200/80"
                                : demo.status === "SCHEDULED"
                                ? "bg-blue-50 text-blue-800 border-blue-200/80"
                                : demo.status === "CONTACTED"
                                ? "bg-purple-50 text-purple-800 border-purple-200/80"
                                : "bg-emerald-50 text-emerald-800 border-emerald-200/80"
                            }`}
                          >
                            <option value="PENDING">● PENDING</option>
                            <option value="CONTACTED">● CONTACTED</option>
                            <option value="SCHEDULED">● SCHEDULED</option>
                            <option value="COMPLETED">● COMPLETED</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setSelectedDemo(demo);
                                setEditAdminNotes(demo.adminNotes || "");
                              }}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                              title="Inspect Lead Details"
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              onClick={() => handleDeleteDemo(demo.id)}
                              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                              title="Delete Request"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Support Tickets Table */}
        {activeTab === "tickets" && (
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse font-sans">
                <thead className="bg-slate-50/80 border-b border-slate-200/80 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Ticket ID</th>
                    <th className="py-3.5 px-4">Institution & System</th>
                    <th className="py-3.5 px-4">Subject</th>
                    <th className="py-3.5 px-4">Priority</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-normal">
                  {isLoading ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-6 h-6 border-2 border-slate-200 border-t-[#1b4965] rounded-full animate-spin" />
                          <span className="font-semibold text-xs text-slate-600">Loading tickets from Supabase...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredTickets.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        <LifeBuoy size={32} className="mx-auto text-slate-300 mb-2" />
                        <p className="font-semibold text-sm text-slate-700">No support incidents found</p>
                        <p className="text-xs text-slate-400 mt-1">Bank support tickets submitted via /support will appear here</p>
                      </td>
                    </tr>
                  ) : (
                    filteredTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                          {ticket.ticketNumber}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900">{ticket.institution}</div>
                          <div className="text-slate-500 text-[11px] mt-0.5">{ticket.system}</div>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs truncate text-slate-700 font-semibold">
                          {ticket.subject}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[11px] border ${
                            ticket.priority === "P1" 
                              ? "bg-red-100 text-red-800 border-red-200" 
                              : ticket.priority === "P2"
                              ? "bg-amber-100 text-amber-800 border-amber-200"
                              : "bg-blue-100 text-blue-800 border-blue-200"
                          }`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={ticket.status}
                            onChange={(e) => handleUpdateTicketStatus(ticket.id, e.target.value)}
                            className={`px-3 py-1 rounded-full text-xs font-bold border cursor-pointer transition-all ${
                              ticket.status === "OPEN"
                                ? "bg-sky-50 text-sky-800 border-sky-200/80"
                                : ticket.status === "IN_PROGRESS"
                                ? "bg-indigo-50 text-indigo-800 border-indigo-200/80"
                                : "bg-emerald-50 text-emerald-800 border-emerald-200/80"
                            }`}
                          >
                            <option value="OPEN">● OPEN</option>
                            <option value="IN_PROGRESS">● IN PROGRESS</option>
                            <option value="RESOLVED">● RESOLVED</option>
                            <option value="CLOSED">● CLOSED</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setSelectedTicket(ticket);
                                setEditAdminNotes(ticket.internalNotes || "");
                              }}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                              title="Inspect SLA Details"
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              onClick={() => handleDeleteTicket(ticket.id)}
                              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                              title="Delete Incident"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Analytics Overview */}
        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: Product Breakdown */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
              <h3 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Demo Requests by Solution Area
              </h3>
              <div className="space-y-3.5">
                {["unicash", "vib", "private-cloud", "system-engineering", "merchant"].map((prod) => {
                  const count = demoRequests.filter(d => d.product === prod).length;
                  const pct = demoRequests.length > 0 ? Math.round((count / demoRequests.length) * 100) : 0;
                  return (
                    <div key={prod}>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                        <span className="capitalize">{prod.replace("-", " ")}</span>
                        <span className="font-mono text-slate-500">{count} ({pct}%)</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#1b4965] rounded-full transition-all duration-500" 
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Box 2: Support Ticket Priorities */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs">
              <h3 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Support Incidents by Severity
              </h3>
              <div className="space-y-3.5">
                {[
                  { p: "P1", label: "P1 - Critical Outage", color: "bg-red-500" },
                  { p: "P2", label: "P2 - Major Impact", color: "bg-amber-500" },
                  { p: "P3", label: "P3 - Minor Incident", color: "bg-blue-500" },
                  { p: "P4", label: "P4 - Service Request", color: "bg-emerald-500" },
                ].map((item) => {
                  const count = supportTickets.filter(t => t.priority === item.p).length;
                  const pct = supportTickets.length > 0 ? Math.round((count / supportTickets.length) * 100) : 0;
                  return (
                    <div key={item.p}>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                        <span>{item.label}</span>
                        <span className="font-mono text-slate-500">{count} ({pct}%)</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all duration-500`} 
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Career Postings Table */}
        {activeTab === "careers" && (
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse font-sans">
                <thead className="bg-slate-50/80 border-b border-slate-200/80 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Role & Department</th>
                    <th className="py-3.5 px-4">Level & Type</th>
                    <th className="py-3.5 px-4">Location</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Applicants</th>
                    <th className="py-3.5 px-4">Created Date</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal">
                  {filteredJobs.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-slate-500">
                        <Briefcase size={36} className="mx-auto text-slate-300 mb-2" />
                        <p className="font-semibold text-sm text-slate-700">No career openings found</p>
                        <p className="text-xs text-slate-400 mt-1">Post your first career opportunity to start receiving candidate resumes</p>
                        <button
                          onClick={() => {
                            setJobToEdit(null);
                            setIsJobModalOpen(true);
                          }}
                          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-[#1b4965] hover:bg-[#153950] text-white text-xs font-semibold rounded-xl transition-all shadow-xs cursor-pointer"
                        >
                          <Plus size={14} />
                          <span>Post Career Opening</span>
                        </button>
                      </td>
                    </tr>
                  ) : (
                    filteredJobs.map((job) => (
                      <tr key={job.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900 text-sm hover:text-[#1b4965] transition-colors">
                            {job.title}
                          </div>
                          <div className="text-slate-500 text-xs mt-0.5 flex items-center gap-2">
                            <span className="font-medium text-slate-700">{job.department}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1b4965] font-bold text-[11px] border border-blue-100">
                              {job.level}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium text-[11px]">
                              {job.type}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 font-medium">
                          <div className="flex items-center gap-1">
                            <MapPin size={12} className="text-slate-400 shrink-0" />
                            <span>{job.location}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => handleToggleJobStatus(job.id, job.status)}
                            title="Click to toggle status"
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                              job.status === "ACTIVE"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                                : job.status === "DRAFT"
                                ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
                                : "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              job.status === "ACTIVE" ? "bg-emerald-500" : job.status === "DRAFT" ? "bg-amber-500" : "bg-slate-400"
                            }`} />
                            <span>{job.status}</span>
                          </button>
                        </td>
                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => {
                              setAppJobFilter(job.id);
                              setActiveTab("applications");
                            }}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold transition-colors cursor-pointer border border-indigo-100/60"
                            title="View applicants for this role"
                          >
                            <Users size={12} />
                            <span>{job._count?.applications || 0} candidate{(job._count?.applications || 0) === 1 ? "" : "s"}</span>
                          </button>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 font-medium whitespace-nowrap">
                          {new Date(job.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <Link
                              href={`/careers#job-${job.id}`}
                              target="_blank"
                              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                              title="View Public Listing"
                            >
                              <ExternalLink size={14} />
                            </Link>
                            <button
                              onClick={() => {
                                setJobToEdit({
                                  ...job,
                                  tags: typeof job.tags === "string" 
                                    ? job.tags.split(",").map((t: string) => t.trim()).filter(Boolean) 
                                    : Array.isArray(job.tags) 
                                    ? job.tags 
                                    : [],
                                });
                                setIsJobModalOpen(true);
                              }}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                              title="Edit Job Opening"
                            >
                              <Edit2 size={14} />
                            </button>
                            <button
                              onClick={() => handleDeleteJob(job.id)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                              title="Delete Job"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Job Applications Table */}
        {activeTab === "applications" && (
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse font-sans">
                <thead className="bg-slate-50/80 border-b border-slate-200/80 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Candidate Details</th>
                    <th className="py-3.5 px-4">Applied Position</th>
                    <th className="py-3.5 px-4">Resume Document</th>
                    <th className="py-3.5 px-4">Candidate Questionnaire</th>
                    <th className="py-3.5 px-4">Stage Status</th>
                    <th className="py-3.5 px-4">Applied Date</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal">
                  {filteredApplications.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-slate-500">
                        <Users size={36} className="mx-auto text-slate-300 mb-2" />
                        <p className="font-semibold text-sm text-slate-700">No candidate submissions found</p>
                        <p className="text-xs text-slate-400 mt-1">Applications submitted by talent on /careers will automatically sync here</p>
                      </td>
                    </tr>
                  ) : (
                    filteredApplications.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-[#1b4965]/10 text-[#1b4965] font-bold flex items-center justify-center shrink-0 text-xs">
                              {app.fullName.slice(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">{app.fullName}</div>
                              <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                                <a href={`mailto:${app.email}`} className="hover:text-[#1b4965] hover:underline font-medium">
                                  {app.email}
                                </a>
                                <span>•</span>
                                <a href={`tel:${app.phone}`} className="font-mono hover:text-[#1b4965]">
                                  {app.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900">{app.job?.title || "Role Unavailable"}</div>
                          <div className="text-[11px] text-slate-500 font-medium">{app.job?.department || "Department"}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <a
                            href={app.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-[#1b4965] font-bold text-xs border border-slate-200/80 transition-colors"
                            title="Open resume document"
                          >
                            <FileCheck size={13} className="text-[#1b4965]" />
                            <span className="max-w-[120px] truncate">{app.resumeFileName || "Resume.pdf"}</span>
                            <DownloadCloud size={12} className="text-slate-400" />
                          </a>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs">
                          <p 
                            className="text-slate-600 line-clamp-2 italic hover:text-slate-900 cursor-pointer font-sans"
                            onClick={() => {
                              setSelectedApplication(app);
                              setEditAppNotes(app.adminNotes || "");
                            }}
                            title="Click to view full questionnaire response"
                          >
                            &ldquo;{app.fitReason}&rdquo;
                          </p>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={app.status}
                            onChange={(e) => handleUpdateAppStatus(app.id, e.target.value)}
                            className={`px-3 py-1 rounded-full text-xs font-bold border cursor-pointer transition-all ${
                              app.status === "PENDING"
                                ? "bg-amber-50 text-amber-800 border-amber-200/80"
                                : app.status === "REVIEWING"
                                ? "bg-blue-50 text-blue-800 border-blue-200/80"
                                : app.status === "SHORTLISTED"
                                ? "bg-purple-50 text-purple-800 border-purple-200/80"
                                : app.status === "HIRED"
                                ? "bg-emerald-50 text-emerald-800 border-emerald-200/80"
                                : "bg-slate-100 text-slate-700 border-slate-200"
                            }`}
                          >
                            <option value="PENDING">● Pending Review</option>
                            <option value="REVIEWING">● Under Review</option>
                            <option value="SHORTLISTED">● Shortlisted</option>
                            <option value="REJECTED">● Archived / Rejected</option>
                            <option value="HIRED">● Hired</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 font-medium whitespace-nowrap">
                          {new Date(app.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setSelectedApplication(app);
                                setEditAppNotes(app.adminNotes || "");
                              }}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-[#1b4965] hover:bg-slate-100 transition-colors cursor-pointer"
                              title="Inspect Candidate Profile & Notes"
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              onClick={() => handleDeleteApplication(app.id)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                              title="Delete Submission"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 5: News & Articles Table */}
        {activeTab === "news" && (
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse font-sans">
                <thead className="bg-slate-50/80 border-b border-slate-200/80 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3.5 px-4">Article & Cover</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Author & Date</th>
                    <th className="py-3.5 px-4">Featured</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-normal">
                  {isLoading ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-500">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-6 h-6 border-2 border-slate-200 border-t-[#1b4965] rounded-full animate-spin" />
                          <span className="font-semibold text-xs text-slate-600">Loading news & insights...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredNews.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-500">
                        <Newspaper size={36} className="mx-auto text-slate-300 mb-2" />
                        <p className="font-semibold text-sm text-slate-700">No news articles matching filter</p>
                        <p className="text-xs text-slate-400 mt-1">Create a news article to publish announcements and tech insights</p>
                        <button
                          onClick={() => {
                            setNewsToEdit(null);
                            setIsNewsModalOpen(true);
                          }}
                          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-[#1b4965] hover:bg-[#153950] text-white text-xs font-semibold rounded-xl transition-all shadow-xs cursor-pointer"
                        >
                          <Plus size={14} />
                          <span>Create News Article</span>
                        </button>
                      </td>
                    </tr>
                  ) : (
                    filteredNews.map((article) => (
                      <tr key={article.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            {article.imageUrl && (
                              <div className="w-12 h-9 rounded-xl overflow-hidden relative shrink-0 border border-slate-200 bg-slate-100">
                                <img
                                  src={article.imageUrl}
                                  alt={article.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div className="min-w-0">
                              <div className="font-bold text-slate-900 truncate max-w-md">
                                {article.title}
                              </div>
                              <div className="text-slate-500 text-[11px] truncate max-w-md mt-0.5">
                                {article.excerpt}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1b4965] font-bold text-[11px] border border-blue-100">
                            {article.categoryLabel || article.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-slate-900">{article.authorName}</div>
                          <div className="text-slate-500 text-[11px] font-medium">{article.date}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          {article.featured ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-extrabold border border-amber-200">
                              <Sparkles size={11} />
                              Spotlight
                            </span>
                          ) : (
                            <span className="text-slate-400 text-[11px] font-medium">Standard</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <Link
                              href={`/news/${article.slug}`}
                              target="_blank"
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                              title="Preview Article Page"
                            >
                              <ExternalLink size={14} />
                            </Link>
                            <button
                              onClick={() => {
                                setNewsToEdit(article);
                                setIsNewsModalOpen(true);
                              }}
                              className="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1b4965] transition-colors cursor-pointer"
                              title="Edit Article"
                            >
                              <Edit2 size={14} />
                            </button>
                            <button
                              onClick={() => handleDeleteNews(article.id)}
                              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                              title="Delete Article"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Slide-over Inspection Drawer for Demos */}
      <AnimatePresence>
        {selectedDemo && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDemo(null)}
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs transition-opacity"
            />

            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-screen max-w-md bg-white shadow-2xl border-l border-slate-200 flex flex-col font-sans"
              >
                {/* Drawer Header */}
                <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#1b4965] uppercase tracking-wider">
                      Demo Lead Details
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 mt-0.5">
                      {selectedDemo.organization}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedDemo(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Drawer Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-slate-700">
                  <div className="space-y-3">
                    <div>
                      <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Contact Person</span>
                      <span className="text-sm font-semibold text-slate-900">{selectedDemo.fullName}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Email</span>
                        <a href={`mailto:${selectedDemo.email}`} className="text-[#1b4965] hover:underline font-medium">
                          {selectedDemo.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Phone</span>
                        <a href={`tel:${selectedDemo.phone}`} className="text-[#1b4965] hover:underline font-mono font-medium">
                          {selectedDemo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Product / Solution</span>
                        <span className="font-semibold text-slate-900 capitalize">{selectedDemo.product}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Intent</span>
                        <span className="font-semibold text-slate-900 capitalize">{selectedDemo.intent}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Preferred Scheduling Date</span>
                      <span className="font-medium text-slate-900">{selectedDemo.preferredDate || "Immediate Request"}</span>
                    </div>

                    {selectedDemo.notes && (
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Client Notes / Scope</span>
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 leading-relaxed">
                          {selectedDemo.notes}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Internal Admin Notes */}
                  <div className="pt-4 border-t border-slate-200">
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
                      Internal Engineering Notes
                    </label>
                    <textarea
                      rows={4}
                      value={editAdminNotes}
                      onChange={(e) => setEditAdminNotes(e.target.value)}
                      placeholder="Add follow-up timeline, assigned engineer, or meeting link..."
                      className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 font-sans"
                    />
                    <button
                      onClick={handleSaveDemoNotes}
                      disabled={isSavingNotes}
                      className="mt-2.5 px-4 py-2 bg-[#1b4965] hover:bg-[#153950] text-white font-semibold rounded-xl text-xs transition-all shadow-xs cursor-pointer disabled:opacity-50"
                    >
                      {isSavingNotes ? "Saving Notes..." : "Save Internal Notes"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide-over Inspection Drawer for Tickets */}
      <AnimatePresence>
        {selectedTicket && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTicket(null)}
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs transition-opacity"
            />

            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-screen max-w-md bg-white shadow-2xl border-l border-slate-200 flex flex-col font-sans"
              >
                {/* Drawer Header */}
                <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-purple-700 uppercase tracking-wider font-mono">
                      {selectedTicket.ticketNumber}
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 mt-0.5">
                      {selectedTicket.institution}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedTicket(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Drawer Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-slate-700">
                  <div className="space-y-3">
                    <div>
                      <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Subject</span>
                      <span className="text-sm font-semibold text-slate-900">{selectedTicket.subject}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Severity Priority</span>
                        <span className={`inline-block px-2 py-0.5 rounded-md font-bold text-[11px] ${
                          selectedTicket.priority === "P1" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
                        }`}>
                          {selectedTicket.priority}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">System Affected</span>
                        <span className="font-semibold text-slate-900">{selectedTicket.system}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Contact Person</span>
                        <span className="font-medium text-slate-900">{selectedTicket.contactName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Direct Phone</span>
                        <a href={`tel:${selectedTicket.phone}`} className="text-[#1b4965] hover:underline font-mono font-medium">
                          {selectedTicket.phone}
                        </a>
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Description</span>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 leading-relaxed">
                        {selectedTicket.description}
                      </div>
                    </div>
                  </div>

                  {/* Internal SLA Notes */}
                  <div className="pt-4 border-t border-slate-200">
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
                      Internal SLA Incident Log & Resolution Notes
                    </label>
                    <textarea
                      rows={4}
                      value={editAdminNotes}
                      onChange={(e) => setEditAdminNotes(e.target.value)}
                      placeholder="Root cause analysis, patch deployed, or resolution summary..."
                      className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 font-sans"
                    />
                    <button
                      onClick={handleSaveTicketNotes}
                      disabled={isSavingNotes}
                      className="mt-2.5 px-4 py-2 bg-[#1b4965] hover:bg-[#153950] text-white font-semibold rounded-xl text-xs transition-all shadow-xs cursor-pointer disabled:opacity-50"
                    >
                      {isSavingNotes ? "Saving Notes..." : "Save Resolution Notes"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Slide-over Inspection Drawer for Candidate Applications */}
      <AnimatePresence>
        {selectedApplication && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApplication(null)}
              className="absolute inset-0 bg-slate-900/30 backdrop-blur-xs transition-opacity"
            />

            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-screen max-w-lg bg-white shadow-2xl border-l border-slate-200 flex flex-col font-sans"
              >
                {/* Drawer Header */}
                <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#1b4965] uppercase tracking-wider">
                      Applicant Dossier
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 mt-0.5">
                      {selectedApplication.fullName}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Applied for: <span className="font-semibold text-slate-700">{selectedApplication.job?.title || "Role"}</span> ({selectedApplication.job?.department || "Department"})
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedApplication(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Drawer Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs text-slate-700">
                  {/* Contact & Meta */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Email Address</span>
                        <a href={`mailto:${selectedApplication.email}`} className="text-[#1b4965] hover:underline font-semibold flex items-center gap-1">
                          <Mail size={12} />
                          <span className="truncate">{selectedApplication.email}</span>
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Phone Number</span>
                        <a href={`tel:${selectedApplication.phone}`} className="text-[#1b4965] hover:underline font-mono font-semibold flex items-center gap-1">
                          <Phone size={12} />
                          <span>{selectedApplication.phone}</span>
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-200/60">
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Submission Date</span>
                        <span className="font-medium text-slate-900 flex items-center gap-1">
                          <Calendar size={12} className="text-slate-400" />
                          {new Date(selectedApplication.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5 uppercase tracking-wider font-semibold text-[10px]">Current Stage</span>
                        <select
                          value={selectedApplication.status}
                          onChange={(e) => handleUpdateAppStatus(selectedApplication.id, e.target.value)}
                          className="px-2 py-1 rounded-md text-xs font-semibold bg-white border border-slate-300 text-slate-800 focus:outline-none focus:border-[#1b4965] cursor-pointer"
                        >
                          <option value="PENDING">Pending Review</option>
                          <option value="REVIEWING">Under Review</option>
                          <option value="SHORTLISTED">Shortlisted</option>
                          <option value="REJECTED">Archived / Rejected</option>
                          <option value="HIRED">Hired</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Supabase Stored Resume Document */}
                  <div>
                    <span className="text-slate-500 block mb-2 uppercase tracking-wider font-bold text-[10px]">
                      Candidate Resume / Curriculum Vitae
                    </span>
                    <div className="flex items-center justify-between p-3.5 bg-blue-50/60 border border-blue-200/70 rounded-xl">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#1b4965] flex items-center justify-center shrink-0">
                          <FileText size={20} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-slate-900 truncate">
                            {selectedApplication.resumeFileName || "Candidate Resume.pdf"}
                          </p>
                          <p className="text-[11px] text-[#1b4965] font-medium flex items-center gap-1">
                            <ShieldCheck size={11} />
                            <span>Verified Supabase Cloud Document</span>
                          </p>
                        </div>
                      </div>

                      <a
                        href={selectedApplication.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#1b4965] hover:bg-[#153950] text-white text-xs font-semibold rounded-lg transition-colors shrink-0 shadow-xs"
                      >
                        <DownloadCloud size={14} />
                        <span>View Document</span>
                      </a>
                    </div>
                  </div>

                  {/* Questionnaire Response */}
                  <div>
                    <span className="text-slate-500 block mb-2 uppercase tracking-wider font-bold text-[10px]">
                      Questionnaire: &ldquo;Why do you think you fit this position?&rdquo;
                    </span>
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                      {selectedApplication.fitReason}
                    </div>
                  </div>

                  {/* Internal Evaluation Notes */}
                  <div className="pt-4 border-t border-slate-200">
                    <label className="block text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
                      Internal Evaluation & Interview Notes
                    </label>
                    <textarea
                      rows={4}
                      value={editAppNotes}
                      onChange={(e) => setEditAppNotes(e.target.value)}
                      placeholder="Enter recruiter notes, screening impressions, salary expectations, or interview dates..."
                      className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#1b4965] focus:ring-2 focus:ring-[#1b4965]/15 font-sans"
                    />
                    <button
                      onClick={handleSaveAppNotes}
                      disabled={isSavingAppNotes}
                      className="mt-2.5 px-4 py-2 bg-[#1b4965] hover:bg-[#153950] text-white font-semibold rounded-xl text-xs transition-all shadow-xs cursor-pointer disabled:opacity-50"
                    >
                      {isSavingAppNotes ? "Saving Evaluation Notes..." : "Save Evaluation Notes"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Security & Password Settings Modal */}
      <AdminSecurityModal
        isOpen={isSecurityModalOpen}
        onClose={() => setIsSecurityModalOpen(false)}
        adminName={adminDisplayName}
        adminEmail={session?.user?.email || "admin@act.com.et"}
        onProfileUpdated={(newName) => setAdminDisplayName(newName)}
      />

      {/* Career Job Post / Edit Modal */}
      <AdminJobPostModal
        isOpen={isJobModalOpen}
        onClose={() => {
          setIsJobModalOpen(false);
          setJobToEdit(null);
        }}
        onSaved={() => {
          fetchData(true);
        }}
        jobToEdit={jobToEdit}
      />

      {/* News Article Create / Edit Modal */}
      <AdminNewsModal
        isOpen={isNewsModalOpen}
        onClose={() => {
          setIsNewsModalOpen(false);
          setNewsToEdit(null);
        }}
        onSuccess={() => {
          fetchData(true);
        }}
        editArticle={newsToEdit}
      />
    </div>
  );
}
