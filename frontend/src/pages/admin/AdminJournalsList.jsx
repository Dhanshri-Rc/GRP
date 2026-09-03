import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Eye, Pencil, Trash2 } from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import Pagination from "../../components/admin/Pagination.jsx";
import ConfirmModal from "../../components/admin/ConfirmModal.jsx";
import StatusBadge from "../../components/admin/StatusBadge.jsx";
import { fetchAdminJournals, deleteAdminJournal } from "../../services/adminJournalService.js";
import { extractErrorMessage } from "../../services/apiClient.js";

const CATEGORY_LABELS = {
  engineering: "Engineering & Technology",
  medicine: "Medicine & Health Sciences",
  sustainability: "Sustainability & Environment",
  interdisciplinary: "Interdisciplinary",
};

export default function AdminJournalsList() {
  const [journals, setJournals] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(
    (page = 1) => {
      setLoading(true);
      setError("");

      fetchAdminJournals({ search, category, page, limit: 10 })
        .then((data) => {
          setJournals(data.journals);
          setPagination(data.pagination);
        })
        .catch((err) => setError(extractErrorMessage(err, "Could not load journals.")))
        .finally(() => setLoading(false));
    },
    [search, category]
  );

  useEffect(() => {
    const timeout = setTimeout(() => load(1), 300);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category]);

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteAdminJournal(deleteTarget.id);
      setDeleteTarget(null);
      load(pagination.page);
    } catch (err) {
      setError(extractErrorMessage(err, "Could not delete journal."));
      setDeleteTarget(null);
    } finally {
      setDeleting(false);
    }
  }

  return (
    <AdminLayout title="Journals">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <div className="relative max-w-[280px] flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a97a8]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search journal name…"
              className="h-[38px] w-full rounded-[6px] border border-[#dde4eb] bg-white pl-8 pr-3 text-[12.5px] outline-none transition focus:border-[#0A3467]"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-[38px] rounded-[6px] border border-[#dde4eb] bg-white px-3 text-[12.5px] outline-none transition focus:border-[#0A3467]"
          >
            <option value="all">All Categories</option>
            {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        <Link
          to="/admin/journals/add"
          className="flex h-[38px] items-center justify-center gap-2 rounded-[6px] bg-[#0A3467] px-4 text-[12.5px] font-[600] text-white transition hover:bg-[#0c3d78]"
        >
          <Plus size={15} /> Add Journal
        </Link>
      </div>

      {error && (
        <div className="mt-4 rounded-[8px] border border-[#f3c6c6] bg-[#fdecec] px-4 py-3 text-[12.5px] font-[600] text-[#c23a3a]">
          {error}
        </div>
      )}

      <div className="mt-4 overflow-hidden rounded-[10px] border border-[#e7edf3] bg-white shadow-[0_4px_14px_rgba(23,58,96,0.05)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12.5px]">
            <thead className="border-b border-[#eef1f5] bg-[#f8fafc] text-[11px] uppercase tracking-wide text-[#5b6b7f]">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Cover</th>
                <th className="px-4 py-3">Journal Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-[#f1f4f7]">
                    <td colSpan={7} className="px-4 py-3">
                      <div className="h-4 w-full animate-pulse rounded bg-[#eef1f5]" />
                    </td>
                  </tr>
                ))
              ) : journals.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-[#5b6b7f]">
                    No journals found.
                  </td>
                </tr>
              ) : (
                journals.map((journal, index) => (
                  <tr key={journal.id} className="border-b border-[#f1f4f7] hover:bg-[#f8fafc]">
                    <td className="px-4 py-3 text-[#5b6b7f]">
                      {(pagination.page - 1) * 10 + index + 1}
                    </td>
                    <td className="px-4 py-3">
                      <img
                        src={journal.coverImage}
                        alt={journal.name}
                        className="h-10 w-14 rounded-[4px] object-cover"
                      />
                    </td>
                    <td className="px-4 py-3 font-[600] text-[#1b3655]">{journal.name}</td>
                    <td className="px-4 py-3 text-[#5b6b7f]">
                      {CATEGORY_LABELS[journal.category] || journal.category}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={journal.isActive ? "active" : "inactive"} />
                    </td>
                    <td className="px-4 py-3 text-[#5b6b7f]">
                      {new Date(journal.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/admin/journals/view/${journal.id}`}
                          className="flex h-7 w-7 items-center justify-center rounded-[5px] border border-[#dde4eb] text-[#41536b] transition hover:bg-[#f4f6f9]"
                          title="View"
                        >
                          <Eye size={13} />
                        </Link>
                        <Link
                          to={`/admin/journals/edit/${journal.id}`}
                          className="flex h-7 w-7 items-center justify-center rounded-[5px] border border-[#dde4eb] text-[#41536b] transition hover:bg-[#f4f6f9]"
                          title="Edit"
                        >
                          <Pencil size={13} />
                        </Link>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(journal)}
                          className="flex h-7 w-7 items-center justify-center rounded-[5px] border border-[#f3c6c6] text-[#d64545] transition hover:bg-[#fdecec]"
                          title="Delete"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          total={pagination.total}
          onPageChange={load}
        />
      </div>

      <ConfirmModal
        open={Boolean(deleteTarget)}
        title="Delete journal?"
        message={`This will permanently remove "${deleteTarget?.name}" and its cover image.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
        loading={deleting}
      />
    </AdminLayout>
  );
}
