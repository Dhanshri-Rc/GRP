import { AlertTriangle } from "lucide-react";

export default function ConfirmModal({
  open,
  title = "Are you sure?",
  message,
  confirmLabel = "Delete",
  onConfirm,
  onCancel,
  loading = false,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-[380px] rounded-[10px] bg-white p-5 shadow-xl">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fdecec]">
            <AlertTriangle size={18} className="text-[#d64545]" />
          </div>
          <div>
            <h3 className="text-[14.5px] font-[700] text-[#0A3467]">{title}</h3>
            <p className="mt-1 text-[12.5px] leading-5 text-[#5b6b7f]">{message}</p>
          </div>
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="rounded-[6px] border border-[#dde4eb] px-4 py-[8px] text-[12.5px] font-[600] text-[#41536b] transition hover:bg-[#f4f6f9] disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="rounded-[6px] bg-[#d64545] px-4 py-[8px] text-[12.5px] font-[600] text-white transition hover:bg-[#c23a3a] disabled:opacity-60"
          >
            {loading ? "Please wait…" : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
