import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download, FileText } from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import StatusBadge from "../../components/admin/StatusBadge.jsx";
import {
  fetchAdminManuscriptById,
  updateManuscriptStatus,
  downloadProtectedFile,
  getManuscriptDownloadUrl,
  getCoverLetterDownloadUrl,
} from "../../services/adminManuscriptService.js";
import { extractErrorMessage } from "../../services/apiClient.js";

const STATUS_OPTIONS = ["submitted", "under-review", "accepted", "rejected"];

function Field({ label, value }) {
  return (
    <div>
      <span className="block text-[11px] font-[600] uppercase text-[#8a97a8]">{label}</span>
      <span className="mt-1 block break-words text-[13px] font-[600] text-[#1b3655]">
        {value || "—"}
      </span>
    </div>
  );
}

export default function AdminManuscriptView() {
  const { id } = useParams();
  const [manuscript, setManuscript] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  function load() {
    setLoading(true);
    fetchAdminManuscriptById(id)
      .then(setManuscript)
      .catch((err) => setError(extractErrorMessage(err, "Could not load manuscript.")))
      .finally(() => setLoading(false));
  }

  useEffect(load, [id]);

  async function handleStatusChange(event) {
    const nextStatus = event.target.value;
    setUpdating(true);
    try {
      const updated = await updateManuscriptStatus(id, nextStatus);
      setManuscript(updated);
    } catch (err) {
      setError(extractErrorMessage(err, "Could not update status."));
    } finally {
      setUpdating(false);
    }
  }

  async function handleDownload(type) {
    try {
      if (type === "manuscript") {
        await downloadProtectedFile(
          getManuscriptDownloadUrl(id),
          manuscript.manuscriptFile?.originalName
        );
      } else {
        await downloadProtectedFile(
          getCoverLetterDownloadUrl(id),
          manuscript.coverLetter?.originalName
        );
      }
    } catch (err) {
      setError(extractErrorMessage(err, "Could not download file."));
    }
  }

  return (
    <AdminLayout title="Manuscript Details">
      <Link
        to="/admin/manuscripts"
        className="mb-4 inline-flex items-center gap-1 text-[12.5px] font-[600] text-[#41536b] hover:text-[#0A3467]"
      >
        <ArrowLeft size={14} /> Back to Manuscripts
      </Link>

      {loading ? (
        <div className="h-64 animate-pulse rounded-[10px] bg-[#eef1f5]" />
      ) : error && !manuscript ? (
        <div className="rounded-[8px] border border-[#f3c6c6] bg-[#fdecec] px-4 py-3 text-[12.5px] font-[600] text-[#c23a3a]">
          {error}
        </div>
      ) : (
        <div className="max-w-[820px] space-y-4">
          {error && (
            <div className="rounded-[8px] border border-[#f3c6c6] bg-[#fdecec] px-4 py-3 text-[12.5px] font-[600] text-[#c23a3a]">
              {error}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[10px] border border-[#e7edf3] bg-white p-5 shadow-[0_4px_14px_rgba(23,58,96,0.05)]">
            <div>
              <span className="text-[11px] font-[600] uppercase text-[#8a97a8]">
                {manuscript.submissionId}
              </span>
              <h2 className="mt-1 text-[17px] font-[700] text-[#0A3467]">{manuscript.title}</h2>
            </div>

            <div className="flex items-center gap-2">
              <StatusBadge status={manuscript.status} />
              <select
                value={manuscript.status}
                onChange={handleStatusChange}
                disabled={updating}
                className="h-[34px] rounded-[6px] border border-[#dde4eb] bg-white px-2 text-[12px] font-[600] text-[#41536b] outline-none transition focus:border-[#0A3467] disabled:opacity-60"
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 rounded-[10px] border border-[#e7edf3] bg-white p-5 shadow-[0_4px_14px_rgba(23,58,96,0.05)] sm:grid-cols-2 sm:p-7">
            <Field label="Journal" value={manuscript.journalName} />
            <Field label="Article Type" value={manuscript.articleType} />
            <Field label="Author Name" value={manuscript.authorName} />
            <Field label="Email" value={manuscript.email} />
            <Field label="Affiliation" value={manuscript.affiliation} />
            <Field label="Country" value={manuscript.country} />
            <Field label="ORCID" value={manuscript.orcid} />
            <Field label="Submitted On" value={new Date(manuscript.createdAt).toLocaleString()} />

            <div className="sm:col-span-2">
              <Field label="Abstract" value={manuscript.abstract} />
            </div>
            <div className="sm:col-span-2">
              <Field label="Keywords" value={manuscript.keywords} />
            </div>
            {manuscript.comments && (
              <div className="sm:col-span-2">
                <Field label="Comments" value={manuscript.comments} />
              </div>
            )}
          </div>

          <div className="rounded-[10px] border border-[#e7edf3] bg-white p-5 shadow-[0_4px_14px_rgba(23,58,96,0.05)] sm:p-7">
            <h3 className="mb-3 text-[13px] font-[700] text-[#0A3467]">Files</h3>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleDownload("manuscript")}
                className="flex items-center gap-2 rounded-[6px] border border-[#dde4eb] px-3 py-[8px] text-[12.5px] font-[600] text-[#41536b] transition hover:bg-[#f4f6f9]"
              >
                <FileText size={14} />
                {manuscript.manuscriptFile?.originalName}
                <Download size={13} />
              </button>

              {manuscript.coverLetter && (
                <button
                  type="button"
                  onClick={() => handleDownload("coverLetter")}
                  className="flex items-center gap-2 rounded-[6px] border border-[#dde4eb] px-3 py-[8px] text-[12.5px] font-[600] text-[#41536b] transition hover:bg-[#f4f6f9]"
                >
                  <FileText size={14} />
                  {manuscript.coverLetter.originalName}
                  <Download size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
