import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, UploadCloud } from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout.jsx";
import {
  fetchAdminJournalById,
  createAdminJournal,
  updateAdminJournal,
} from "../../services/adminJournalService.js";
import { extractErrorMessage } from "../../services/apiClient.js";

const CATEGORY_OPTIONS = [
  { value: "engineering", label: "Engineering & Technology" },
  { value: "medicine", label: "Medicine & Health Sciences" },
  { value: "sustainability", label: "Sustainability & Environment" },
  { value: "interdisciplinary", label: "Interdisciplinary" },
];

export default function AdminJournalForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [coverImage, setCoverImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (!isEdit) return;

    fetchAdminJournalById(id)
      .then((journal) => {
        setName(journal.name);
        setCategory(journal.category);
        setIsActive(journal.isActive);
        setPreviewUrl(journal.coverImage);
      })
      .catch((err) => setFormError(extractErrorMessage(err, "Could not load journal.")))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  function handleImageChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      setErrors((c) => ({ ...c, coverImage: "Please upload a JPG, PNG, WEBP or GIF image." }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((c) => ({ ...c, coverImage: "Maximum image size is 5 MB." }));
      return;
    }

    setErrors((c) => ({ ...c, coverImage: "" }));
    setCoverImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  }

  function validate() {
    const nextErrors = {};
    if (!name.trim()) nextErrors.name = "Journal name is required.";
    if (!category) nextErrors.category = "Please select a category.";
    if (!isEdit && !coverImage) nextErrors.coverImage = "Cover image is required.";
    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormError("");

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    try {
      if (isEdit) {
        await updateAdminJournal(id, { name, category, isActive, coverImage });
      } else {
        await createAdminJournal({ name, category, isActive, coverImage });
      }
      navigate("/admin/journals");
    } catch (err) {
      setFormError(extractErrorMessage(err, "Could not save journal."));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AdminLayout title={isEdit ? "Edit Journal" : "Add Journal"}>
      <Link
        to="/admin/journals"
        className="mb-4 inline-flex items-center gap-1 text-[12.5px] font-[600] text-[#41536b] hover:text-[#0A3467]"
      >
        <ArrowLeft size={14} /> Back to Journals
      </Link>

      <div className="max-w-[560px] rounded-[10px] border border-[#e7edf3] bg-white p-5 shadow-[0_4px_14px_rgba(23,58,96,0.05)] sm:p-7">
        {loading ? (
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-9 animate-pulse rounded bg-[#eef1f5]" />
            ))}
          </div>
        ) : (
          <>
            {formError && (
              <div className="mb-4 rounded-[6px] border border-[#f3c6c6] bg-[#fdecec] px-3 py-[10px] text-[12px] font-[600] text-[#c23a3a]">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-[6px] block text-[11.5px] font-[600] text-[#102d59]">
                  Journal Name <span className="text-[#d64545]">*</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((c) => ({ ...c, name: "" }));
                  }}
                  className={`h-[38px] w-full rounded-[6px] border bg-white px-3 text-[12.5px] outline-none transition focus:border-[#0A3467] ${
                    errors.name ? "border-[#d86868]" : "border-[#dce4eb]"
                  }`}
                  placeholder="e.g. Artificial Intelligence Reviews"
                />
                {errors.name && <p className="mt-1 text-[11px] text-[#d64545]">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-[6px] block text-[11.5px] font-[600] text-[#102d59]">
                  Category <span className="text-[#d64545]">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    if (errors.category) setErrors((c) => ({ ...c, category: "" }));
                  }}
                  className={`h-[38px] w-full rounded-[6px] border bg-white px-3 text-[12.5px] outline-none transition focus:border-[#0A3467] ${
                    errors.category ? "border-[#d86868]" : "border-[#dce4eb]"
                  }`}
                >
                  <option value="">Choose a category</option>
                  {CATEGORY_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.category && <p className="mt-1 text-[11px] text-[#d64545]">{errors.category}</p>}
              </div>

              <div>
                <label className="mb-[6px] block text-[11.5px] font-[600] text-[#102d59]">
                  Cover Image {!isEdit && <span className="text-[#d64545]">*</span>}
                </label>

                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mb-2 h-28 w-44 rounded-[6px] object-cover"
                  />
                )}

                <label className="flex h-[38px] w-fit cursor-pointer items-center gap-2 rounded-[6px] border border-dashed border-[#b9c8d5] bg-[#fafbfc] px-3 text-[12px] font-[600] text-[#41536b] transition hover:border-[#0A3467]">
                  <UploadCloud size={14} />
                  {coverImage ? coverImage.name : "Choose image"}
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
                {errors.coverImage && (
                  <p className="mt-1 text-[11px] text-[#d64545]">{errors.coverImage}</p>
                )}
              </div>

              <label className="flex cursor-pointer items-center gap-2 text-[12.5px] font-[600] text-[#102d59]">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="h-4 w-4 accent-[#0A3467]"
                />
                Active (visible on the public Journals page)
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="flex h-[42px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#0A3467] text-[13px] font-[600] text-white transition hover:bg-[#0c3d78] disabled:opacity-60"
              >
                {submitting ? "Saving…" : isEdit ? "Save Changes" : "Create Journal"}
              </button>
            </form>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
