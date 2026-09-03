import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, total, onPageChange }) {
  if (totalPages <= 1) {
    return (
      <div className="flex items-center justify-between border-t border-[#eef1f5] px-4 py-3 text-[12px] text-[#5b6b7f]">
        <span>{total} total record{total === 1 ? "" : "s"}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-[#eef1f5] px-4 py-3 sm:flex-row">
      <span className="text-[12px] text-[#5b6b7f]">
        {total} total record{total === 1 ? "" : "s"} · Page {page} of {totalPages}
      </span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#dde4eb] text-[#41536b] transition hover:bg-[#f4f6f9] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={15} />
        </button>
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-[#dde4eb] text-[#41536b] transition hover:bg-[#f4f6f9] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
