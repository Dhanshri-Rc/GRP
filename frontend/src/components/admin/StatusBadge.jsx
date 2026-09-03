const STYLES = {
  // Manuscript statuses
  submitted: "bg-[#eaf1fb] text-[#2f6bb3]",
  "under-review": "bg-[#fef6e6] text-[#b0821a]",
  accepted: "bg-[#eaf7ec] text-[#2f8f45]",
  rejected: "bg-[#fdecec] text-[#d64545]",

  // Enquiry statuses
  new: "bg-[#eaf1fb] text-[#2f6bb3]",
  read: "bg-[#fef6e6] text-[#b0821a]",
  resolved: "bg-[#eaf7ec] text-[#2f8f45]",

  // Journal active state
  active: "bg-[#eaf7ec] text-[#2f8f45]",
  inactive: "bg-[#f1f3f6] text-[#5b6b7f]",
};

const LABELS = {
  "under-review": "Under Review",
};

export default function StatusBadge({ status }) {
  const style = STYLES[status] || "bg-[#f1f3f6] text-[#5b6b7f]";
  const label = LABELS[status] || (status ? status.charAt(0).toUpperCase() + status.slice(1) : "—");

  return (
    <span
      className={`inline-flex items-center rounded-full px-[10px] py-[3px] text-[11px] font-[600] ${style}`}
    >
      {label}
    </span>
  );
}
