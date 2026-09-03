import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Eye, Download, Trash2 } from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import Pagination from "../../components/admin/Pagination.jsx";
import ConfirmModal from "../../components/admin/ConfirmModal.jsx";
import StatusBadge from "../../components/admin/StatusBadge.jsx";
import {
  fetchAdminManuscripts,
  deleteAdminManuscript,
  downloadProtectedFile,
  getManuscriptDownloadUrl,
} from "../../services/adminManuscriptService.js";
import { extractErrorMessage } from "../../services/apiClient.js";

const STATUS_OPTIONS = [
  { value: "all", label: "All Statuses" },
  { value: "submitted", label: "Submitted" },
  { value: "under-review", label: "Under Review" },
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
];

export default function AdminManuscriptsList() {
  const [manuscripts, setManuscripts] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(
    (page = 1) => {
      setLoading(true);
      setError("");

      fetchAdminManuscripts({ search, status, page, limit: 10 })
        .then((data) => {
          setManuscripts(data.manuscripts);
          setPagination(data.pagination);
        })
        .catch((err) => setError(extractErrorMessage(err, "Could not load manuscripts.")))
        .finally(() => setLoading(false));
    },
    [search, status]
  );

  useEffect(() => {
    const timeout = setTimeout(() => load(1), 300);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, status]);

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteAdminManuscript(deleteTarget._id);
      setDeleteTarget(null);
      load(pagination.page);
    } catch (err) {
      setError(extractErrorMessage(err, "Could not delete manuscript."));
      setDeleteTarget(null);
    } finally {
      setDeleting(false);
    }
  }

  async function handleDownload(manuscript) {
    try {
      await downloadProtectedFile(
        getManuscriptDownloadUrl(manuscript._id),
        manuscript.manuscriptFile?.originalName
      );
    } catch (err) {
      setError(extractErrorMessage(err, "Could not download file."));
    }
  }

  return (
    <AdminLayout title="Manuscripts">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <div className="relative max-w-[300px] flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a97a8]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, author, email, ID…"
              className="h-[38px] w-full rounded-[6px] border border-[#dde4eb] bg-white pl-8 pr-3 text-[12.5px] outline-none transition focus:border-[#0A3467]"
            />
          </div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="h-[38px] rounded-[6px] border border-[#dde4eb] bg-white px-3 text-[12.5px] outline-none transition focus:border-[#0A3467]"
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <span className="text-[12.5px] font-[600] text-[#5b6b7f]">
          {pagination.total} total submission{pagination.total === 1 ? "" : "s"}
        </span>
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
                <th className="px-4 py-3">Submission ID</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Journal</th>
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-[#f1f4f7]">
                    <td colSpan={8} className="px-4 py-3">
                      <div className="h-4 w-full animate-pulse rounded bg-[#eef1f5]" />
                    </td>
                  </tr>
                ))
              ) : manuscripts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-10 text-center text-[#5b6b7f]">
                    No manuscripts found.
                  </td>
                </tr>
              ) : (
                manuscripts.map((m, index) => (
                  <tr key={m._id} className="border-b border-[#f1f4f7] hover:bg-[#f8fafc]">
                    <td className="px-4 py-3 text-[#5b6b7f]">
                      {(pagination.page - 1) * 10 + index + 1}
                    </td>
                    <td className="px-4 py-3 font-[600] text-[#0A3467]">{m.submissionId}</td>
                    <td className="max-w-[220px] truncate px-4 py-3 text-[#1b3655]" title={m.title}>
                      {m.title}
                    </td>
                    <td className="px-4 py-3 text-[#5b6b7f]">{m.journalName}</td>
                    <td className="px-4 py-3 text-[#5b6b7f]">{m.authorName}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={m.status} />
                    </td>
                    <td className="px-4 py-3 text-[#5b6b7f]">
                      {new Date(m.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/admin/manuscripts/view/${m._id}`}
                          className="flex h-7 w-7 items-center justify-center rounded-[5px] border border-[#dde4eb] text-[#41536b] transition hover:bg-[#f4f6f9]"
                          title="View"
                        >
                          <Eye size={13} />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDownload(m)}
                          className="flex h-7 w-7 items-center justify-center rounded-[5px] border border-[#dde4eb] text-[#41536b] transition hover:bg-[#f4f6f9]"
                          title="Download manuscript"
                        >
                          <Download size={13} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(m)}
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
        title="Delete manuscript?"
        message={`This will permanently remove "${deleteTarget?.title}" and its uploaded files.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
        loading={deleting}
      />
    </AdminLayout>
  );
}
