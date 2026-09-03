import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  BookOpenCheck,
  FileText,
  FileClock,
  MessageSquare,
  MessageSquareDot,
} from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import StatCard from "../../components/admin/StatCard.jsx";
import { fetchDashboardStats } from "../../services/dashboardService.js";
import { extractErrorMessage } from "../../services/apiClient.js";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    fetchDashboardStats()
      .then((data) => {
        if (active) setStats(data);
      })
      .catch((err) => {
        if (active) setError(extractErrorMessage(err, "Could not load dashboard statistics."));
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <AdminLayout title="Dashboard">
      {loading ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-[92px] animate-pulse rounded-[10px] bg-[#e9edf2]" />
          ))}
        </div>
      ) : error ? (
        <div className="rounded-[8px] border border-[#f3c6c6] bg-[#fdecec] px-4 py-3 text-[12.5px] font-[600] text-[#c23a3a]">
          {error}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
            <StatCard label="Total Journals" value={stats.totalJournals} icon={BookOpen} color="#0A3467" />
            <StatCard label="Active Journals" value={stats.totalActiveJournals} icon={BookOpenCheck} color="#2f8f45" />
            <StatCard label="Manuscripts" value={stats.totalManuscripts} icon={FileText} color="#3C82C2" />
            <StatCard label="New Manuscripts" value={stats.newManuscripts} icon={FileClock} color="#b0821a" />
            <StatCard label="Enquiries" value={stats.totalEnquiries} icon={MessageSquare} color="#746FB0" />
            <StatCard label="New Enquiries" value={stats.newEnquiries} icon={MessageSquareDot} color="#d64545" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              to="/admin/journals/add"
              className="rounded-[10px] border border-[#e7edf3] bg-white p-4 text-[13px] font-[600] text-[#0A3467] shadow-[0_4px_14px_rgba(23,58,96,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(23,58,96,0.09)]"
            >
              + Add New Journal
            </Link>
            <Link
              to="/admin/manuscripts"
              className="rounded-[10px] border border-[#e7edf3] bg-white p-4 text-[13px] font-[600] text-[#0A3467] shadow-[0_4px_14px_rgba(23,58,96,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(23,58,96,0.09)]"
            >
              Review Manuscript Submissions
            </Link>
            <Link
              to="/admin/enquiries"
              className="rounded-[10px] border border-[#e7edf3] bg-white p-4 text-[13px] font-[600] text-[#0A3467] shadow-[0_4px_14px_rgba(23,58,96,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(23,58,96,0.09)]"
            >
              View Contact Enquiries
            </Link>
          </div>
        </>
      )}
    </AdminLayout>
  );
}
