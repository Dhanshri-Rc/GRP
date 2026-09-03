import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import StatusBadge from "../../components/admin/StatusBadge.jsx";
import { fetchAdminEnquiryById, updateEnquiryStatus } from "../../services/adminEnquiryService.js";
import { extractErrorMessage } from "../../services/apiClient.js";

const STATUS_OPTIONS = ["new", "read", "resolved"];

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

export default function AdminEnquiryView() {
  const { id } = useParams();
  const [enquiry, setEnquiry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchAdminEnquiryById(id)
      .then(setEnquiry)
      .catch((err) => setError(extractErrorMessage(err, "Could not load enquiry.")))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleStatusChange(event) {
    const nextStatus = event.target.value;
    setUpdating(true);
    try {
      const updated = await updateEnquiryStatus(id, nextStatus);
      setEnquiry(updated);
    } catch (err) {
      setError(extractErrorMessage(err, "Could not update status."));
    } finally {
      setUpdating(false);
    }
  }

  return (
    <AdminLayout title="Enquiry Details">
      <Link
        to="/admin/enquiries"
        className="mb-4 inline-flex items-center gap-1 text-[12.5px] font-[600] text-[#41536b] hover:text-[#0A3467]"
      >
        <ArrowLeft size={14} /> Back to Enquiries
      </Link>

      {loading ? (
        <div className="h-56 animate-pulse rounded-[10px] bg-[#eef1f5]" />
      ) : error && !enquiry ? (
        <div className="rounded-[8px] border border-[#f3c6c6] bg-[#fdecec] px-4 py-3 text-[12.5px] font-[600] text-[#c23a3a]">
          {error}
        </div>
      ) : (
        <div className="max-w-[680px] space-y-4">
          {error && (
            <div className="rounded-[8px] border border-[#f3c6c6] bg-[#fdecec] px-4 py-3 text-[12.5px] font-[600] text-[#c23a3a]">
              {error}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-[10px] border border-[#e7edf3] bg-white p-5 shadow-[0_4px_14px_rgba(23,58,96,0.05)]">
            <h2 className="text-[16px] font-[700] text-[#0A3467]">{enquiry.subject}</h2>
            <div className="flex items-center gap-2">
              <StatusBadge status={enquiry.status} />
              <select
                value={enquiry.status}
                onChange={handleStatusChange}
                disabled={updating}
                className="h-[34px] rounded-[6px] border border-[#dde4eb] bg-white px-2 text-[12px] font-[600] text-[#41536b] outline-none transition focus:border-[#0A3467] disabled:opacity-60"
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 rounded-[10px] border border-[#e7edf3] bg-white p-5 shadow-[0_4px_14px_rgba(23,58,96,0.05)] sm:grid-cols-2 sm:p-7">
            <Field label="Name" value={enquiry.name} />
            <Field label="Email" value={enquiry.email} />
            <Field label="Enquiry Type" value={enquiry.type} />
            <Field label="Submitted On" value={new Date(enquiry.createdAt).toLocaleString()} />
            <div className="sm:col-span-2">
              <Field label="Message" value={enquiry.message} />
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
