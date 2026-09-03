export default function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="rounded-[10px] border border-[#e7edf3] bg-white p-4 shadow-[0_4px_14px_rgba(23,58,96,0.05)]">
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-[600] text-[#5b6b7f]">{label}</span>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}1a` }}
        >
          <Icon size={16} style={{ color }} />
        </div>
      </div>
      <div className="mt-2 text-[24px] font-[700] text-[#0A3467]">{value}</div>
    </div>
  );
}
