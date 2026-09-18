"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/../public/logo.png";
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
  KeyRound
} from "lucide-react";
import { toast } from "sonner";
import { useSession, signOut } from "@/lib/auth-client";
import AdminSecurityModal from "@/components/AdminSecurityModal";

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

  const [activeTab, setActiveTab] = useState<"demos" | "tickets" | "analytics">("demos");
  const [demoRequests, setDemoRequests] = useState<DemoRequest[]>([]);
  const [supportTickets, setSupportTickets] = useState<SupportTicket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [demoStatusFilter, setDemoStatusFilter] = useState("ALL");
  const [demoProductFilter, setDemoProductFilter] = useState("ALL");
  const [ticketPriorityFilter, setTicketPriorityFilter] = useState("ALL");
  const [ticketStatusFilter, setTicketStatusFilter] = useState("ALL");

  // Inspection Drawer State
  const [selectedDemo, setSelectedDemo] = useState<DemoRequest | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [editAdminNotes, setEditAdminNotes] = useState("");
  const [isSavingNotes, setIsSavingNotes] = useState(false);

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
      const [demosRes, ticketsRes] = await Promise.all([
        fetch("/api/demo-requests"),
        fetch("/api/support-tickets")
      ]);

      const demosData = await demosRes.json();
      const ticketsData = await ticketsRes.json();

      if (demosData.success) setDemoRequests(demosData.data);
      if (ticketsData.success) setSupportTickets(ticketsData.data);

      if (silent) toast.success("Records updated from Supabase");
    } catch (err) {
      console.error("Dashboard fetch error:", err);
      toast.error("Failed to load records from database");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
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

    return {
      totalDemos: demoRequests.length,
      pendingDemos,
      scheduledDemos,
      totalTickets: supportTickets.length,
      openTickets,
      criticalP1,
      resolutionRate,
    };
  }, [demoRequests, supportTickets]);

  // CSV Exporter
  const exportToCSV = (type: "demos" | "tickets") => {
    let csvContent = "";
    if (type === "demos") {
      csvContent = "data:text/csv;charset=utf-8," + 
        ["ID,Created,Name,Organization,Email,Phone,Intent,Product,Status,PreferredDate,Notes"]
        .concat(demoRequests.map(d => 
          `"${d.id}","${d.createdAt}","${d.fullName}","${d.organization}","${d.email}","${d.phone}","${d.intent}","${d.product}","${d.status}","${d.preferredDate || ""}","${(d.notes || "").replace(/"/g, '""')}"`
        ))
        .join("\n");
    } else {
      csvContent = "data:text/csv;charset=utf-8," + 
        ["TicketNumber,Created,Institution,ContactName,Email,Phone,Priority,System,Subject,Status"]
        .concat(supportTickets.map(t => 
          `"${t.ticketNumber}","${t.createdAt}","${t.institution}","${t.contactName}","${t.email}","${t.phone}","${t.priority}","${t.system}","${t.subject.replace(/"/g, '""')}","${t.status}"`
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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-3 border-slate-200 border-t-[#1b4965] rounded-full animate-spin" />
          <p className="text-slate-600 text-sm font-medium">Verifying administrator session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#3e7da2]/20 selection:text-[#1b4965]">
      {/* Enterprise Top Navigation Bar - Light Mode */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <Image
                src={Logo}
                alt="Atlas Computer Technology Logo"
                width={200}
                height={60}
                priority
                className="object-contain w-auto h-10"
              />
              <span className="hidden xl:inline text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                Operations Console
              </span>
            </Link>

            <span className="text-slate-300 hidden sm:inline">|</span>

            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Supabase Connected</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchData(true)}
              disabled={isRefreshing}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer disabled:opacity-50"
              title="Refresh Data"
            >
              <RefreshCw size={15} className={isRefreshing ? "animate-spin text-[#1b4965]" : ""} />
            </button>

            <Link
              href="/"
              target="_blank"
              className="hidden md:flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <span>View Website</span>
              <ExternalLink size={13} />
            </Link>

            {/* Profile Info, Security Settings & Sign Out */}
            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
              <button
                onClick={() => setIsSecurityModalOpen(true)}
                className="flex items-center gap-2 text-left p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group"
                title="Manage Admin Security & Profile"
              >
                <div className="w-8 h-8 rounded-full bg-[#1b4965] text-white flex items-center justify-center text-xs font-bold group-hover:ring-2 group-hover:ring-[#1b4965]/20 transition-all">
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
                className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Change Admin Password"
              >
                <KeyRound size={13} className="text-[#1b4965]" />
                <span className="hidden sm:inline">Password</span>
              </button>

              <button
                onClick={handleSignOut}
                className="px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
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
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Operations & SLA Dashboard
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Live tracking of institutional solution requests and mission-critical bank incidents
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => exportToCSV(activeTab === "tickets" ? "tickets" : "demos")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Download size={14} />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Executive KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Card 1: Demos */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Demo Requests
              </span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1b4965] flex items-center justify-center">
                <Sparkles size={16} />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900">{stats.totalDemos}</div>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
              <span className="text-amber-700 font-medium">{stats.pendingDemos} Pending</span>
              <span>•</span>
              <span className="text-blue-700 font-medium">{stats.scheduledDemos} Scheduled</span>
            </div>
          </div>

          {/* Card 2: Support Tickets */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Support Tickets
              </span>
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
                <LifeBuoy size={16} />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900">{stats.totalTickets}</div>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
              <span className="text-purple-700 font-medium">{stats.openTickets} Active</span>
              <span>•</span>
              <span className="text-emerald-700 font-medium">{stats.totalTickets - stats.openTickets} Resolved</span>
            </div>
          </div>

          {/* Card 3: P1 Outages */}
          <div className={`bg-white rounded-2xl border p-5 shadow-xs ${stats.criticalP1 > 0 ? "border-red-300 bg-red-50/20" : "border-slate-200"}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                P1 Critical Outages
              </span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stats.criticalP1 > 0 ? "bg-red-100 text-red-700" : "bg-slate-100 text-slate-500"}`}>
                <AlertTriangle size={16} />
              </div>
            </div>
            <div className={`text-3xl font-bold ${stats.criticalP1 > 0 ? "text-red-700" : "text-slate-900"}`}>
              {stats.criticalP1}
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs">
              {stats.criticalP1 > 0 ? (
                <span className="text-red-700 font-medium">Immediate SLA response needed</span>
              ) : (
                <span className="text-emerald-700 font-medium">No critical outages active</span>
              )}
            </div>
          </div>

          {/* Card 4: SLA Resolution Rate */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                SLA Compliance
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 size={16} />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900">{stats.resolutionRate}%</div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-700 font-medium">
              <span>99.98% High-availability SLA</span>
            </div>
          </div>
        </div>

        {/* Tab Switcher & Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-6 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-fit">
              <button
                onClick={() => setActiveTab("demos")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "demos" 
                    ? "bg-white text-slate-900 shadow-xs" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Sparkles size={14} className={activeTab === "demos" ? "text-[#1b4965]" : "text-slate-400"} />
                <span>Demo Requests</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-200 text-slate-700 font-bold">
                  {demoRequests.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("tickets")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "tickets" 
                    ? "bg-white text-slate-900 shadow-xs" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <LifeBuoy size={14} className={activeTab === "tickets" ? "text-purple-600" : "text-slate-400"} />
                <span>Support Tickets</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-200 text-slate-700 font-bold">
                  {supportTickets.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("analytics")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === "analytics" 
                    ? "bg-white text-slate-900 shadow-xs" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Activity size={14} className={activeTab === "analytics" ? "text-emerald-600" : "text-slate-400"} />
                <span>Analytics</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-72">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search organization, name, email..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1b4965] focus:bg-white transition-all font-sans"
                />
              </div>

              {/* Status Filter for Demos */}
              {activeTab === "demos" && (
                <select
                  value={demoStatusFilter}
                  onChange={(e) => setDemoStatusFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:border-[#1b4965] cursor-pointer"
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
                  className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-none focus:border-[#1b4965] cursor-pointer"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="OPEN">Open</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="RESOLVED">Resolved</option>
                  <option value="CLOSED">Closed</option>
                </select>
              )}
            </div>
          </div>
        </div>

        {/* Tab 1: Demo Requests Table */}
        {activeTab === "demos" && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Organization & Contact</th>
                    <th className="py-3.5 px-4">Product / Solution</th>
                    <th className="py-3.5 px-4">Intent</th>
                    <th className="py-3.5 px-4">Preferred Date</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {isLoading ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-6 h-6 border-2 border-slate-200 border-t-[#1b4965] rounded-full animate-spin" />
                          <span>Loading demo requests from Supabase...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredDemos.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        No demo requests matching your search criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredDemos.map((demo) => (
                      <tr key={demo.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900">{demo.organization}</div>
                          <div className="text-slate-500 flex items-center gap-2 mt-0.5">
                            <span>{demo.fullName}</span>
                            <span>•</span>
                            <span className="font-mono">{demo.phone}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                            {demo.product}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="capitalize font-medium text-slate-600">{demo.intent}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500">
                          {demo.preferredDate || "Immediate"}
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={demo.status}
                            onChange={(e) => handleUpdateDemoStatus(demo.id, e.target.value)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border cursor-pointer ${
                              demo.status === "PENDING"
                                ? "bg-amber-50 text-amber-800 border-amber-200"
                                : demo.status === "SCHEDULED"
                                ? "bg-blue-50 text-blue-800 border-blue-200"
                                : demo.status === "CONTACTED"
                                ? "bg-purple-50 text-purple-800 border-purple-200"
                                : "bg-emerald-50 text-emerald-800 border-emerald-200"
                            }`}
                          >
                            <option value="PENDING">PENDING</option>
                            <option value="CONTACTED">CONTACTED</option>
                            <option value="SCHEDULED">SCHEDULED</option>
                            <option value="COMPLETED">COMPLETED</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setSelectedDemo(demo);
                                setEditAdminNotes(demo.adminNotes || "");
                              }}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                              title="Inspect Details"
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
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Ticket ID</th>
                    <th className="py-3.5 px-4">Institution & System</th>
                    <th className="py-3.5 px-4">Subject</th>
                    <th className="py-3.5 px-4">Priority</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {isLoading ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-6 h-6 border-2 border-slate-200 border-t-[#1b4965] rounded-full animate-spin" />
                          <span>Loading tickets from Supabase...</span>
                        </div>
                      </td>
                    </tr>
                  ) : filteredTickets.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        No support tickets found matching criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                          {ticket.ticketNumber}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900">{ticket.institution}</div>
                          <div className="text-slate-500 text-[11px] mt-0.5">{ticket.system}</div>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs truncate text-slate-700 font-medium">
                          {ticket.subject}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded-md font-bold text-[11px] ${
                            ticket.priority === "P1" 
                              ? "bg-red-100 text-red-800" 
                              : ticket.priority === "P2"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={ticket.status}
                            onChange={(e) => handleUpdateTicketStatus(ticket.id, e.target.value)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border cursor-pointer ${
                              ticket.status === "OPEN"
                                ? "bg-sky-50 text-sky-800 border-sky-200"
                                : ticket.status === "IN_PROGRESS"
                                ? "bg-indigo-50 text-indigo-800 border-indigo-200"
                                : "bg-emerald-50 text-emerald-800 border-emerald-200"
                            }`}
                          >
                            <option value="OPEN">OPEN</option>
                            <option value="IN_PROGRESS">IN_PROGRESS</option>
                            <option value="RESOLVED">RESOLVED</option>
                            <option value="CLOSED">CLOSED</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setSelectedTicket(ticket);
                                setEditAdminNotes(ticket.internalNotes || "");
                              }}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                              title="Inspect Details"
                            >
                              <Eye size={14} />
                            </button>
                            <button
                              onClick={() => handleDeleteTicket(ticket.id)}
                              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                              title="Delete Ticket"
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
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Demo Requests by Solution Area
              </h3>
              <div className="space-y-3">
                {["unicash", "vib", "private-cloud", "system-engineering", "merchant"].map((prod) => {
                  const count = demoRequests.filter(d => d.product === prod).length;
                  const pct = demoRequests.length > 0 ? Math.round((count / demoRequests.length) * 100) : 0;
                  return (
                    <div key={prod}>
                      <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                        <span className="capitalize">{prod.replace("-", " ")}</span>
                        <span>{count} ({pct}%)</span>
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
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Support Incidents by Severity
              </h3>
              <div className="space-y-3">
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
                      <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                        <span>{item.label}</span>
                        <span>{count} ({pct}%)</span>
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

      {/* Security & Password Settings Modal */}
      <AdminSecurityModal
        isOpen={isSecurityModalOpen}
        onClose={() => setIsSecurityModalOpen(false)}
        adminName={adminDisplayName}
        adminEmail={session?.user?.email || "admin@act.com.et"}
        onProfileUpdated={(newName) => setAdminDisplayName(newName)}
      />
    </div>
  );
}
