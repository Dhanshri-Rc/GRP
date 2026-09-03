import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Pencil } from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import StatusBadge from "../../components/admin/StatusBadge.jsx";
import { fetchAdminJournalById } from "../../services/adminJournalService.js";
import { extractErrorMessage } from "../../services/apiClient.js";

const CATEGORY_LABELS = {
  engineering: "Engineering & Technology",
  medicine: "Medicine & Health Sciences",
  sustainability: "Sustainability & Environment",
  interdisciplinary: "Interdisciplinary",
};

export default function AdminJournalView() {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAdminJournalById(id)
      .then(setJournal)
      .catch((err) => setError(extractErrorMessage(err, "Could not load journal.")))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <AdminLayout title="Journal Details">
      <Link
        to="/admin/journals"
        className="mb-4 inline-flex items-center gap-1 text-[12.5px] font-[600] text-[#41536b] hover:text-[#0A3467]"
      >
        <ArrowLeft size={14} /> Back to Journals
      </Link>

      {loading ? (
        <div className="h-48 animate-pulse rounded-[10px] bg-[#eef1f5]" />
      ) : error ? (
        <div className="rounded-[8px] border border-[#f3c6c6] bg-[#fdecec] px-4 py-3 text-[12.5px] font-[600] text-[#c23a3a]">
          {error}
        </div>
      ) : (
        <div className="max-w-[600px] overflow-hidden rounded-[10px] border border-[#e7edf3] bg-white shadow-[0_4px_14px_rgba(23,58,96,0.05)]">
          <img src={journal.coverImage} alt={journal.name} className="h-56 w-full object-cover" />
          <div className="p-5 sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-[18px] font-[700] text-[#0A3467]">{journal.name}</h2>
              <Link
                to={`/admin/journals/edit/${journal.id}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[6px] border border-[#dde4eb] text-[#41536b] transition hover:bg-[#f4f6f9]"
              >
                <Pencil size={14} />
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-[12.5px]">
              <div>
                <span className="block text-[11px] font-[600] uppercase text-[#8a97a8]">Category</span>
                <span className="mt-1 block font-[600] text-[#1b3655]">
                  {CATEGORY_LABELS[journal.category] || journal.category}
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-[600] uppercase text-[#8a97a8]">Status</span>
                <span className="mt-1 block">
                  <StatusBadge status={journal.isActive ? "active" : "inactive"} />
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-[600] uppercase text-[#8a97a8]">Created</span>
                <span className="mt-1 block font-[600] text-[#1b3655]">
                  {new Date(journal.createdAt).toLocaleString()}
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-[600] uppercase text-[#8a97a8]">Last Updated</span>
                <span className="mt-1 block font-[600] text-[#1b3655]">
                  {new Date(journal.updatedAt).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
