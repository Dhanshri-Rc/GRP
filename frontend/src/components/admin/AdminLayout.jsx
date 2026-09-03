import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  MessageSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

function AdminBrand() {
  return (
    <div className="leading-tight">
      <div className="text-[13px] font-[700] text-white">GLOBAL</div>
      <div className="text-[13px] font-[700] text-[#f4b928]">REVIEWS PRESS</div>
    </div>
  );
}

const navItems = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/journals", label: "Journals", icon: BookOpen },
  { to: "/admin/manuscripts", label: "Manuscripts", icon: FileText },
  { to: "/admin/enquiries", label: "Enquiries", icon: MessageSquare },
];

export default function AdminLayout({ children, title }) {
  const { admin, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9] font-['Inter',sans-serif]">
      {/* =========================================================
          SIDEBAR (desktop)
      ========================================================== */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[230px] flex-col border-r border-[#e7edf3] bg-[#0A3467] lg:flex">
        <div className="flex h-[64px] items-center gap-2 border-b border-white/10 px-5">
          <AdminBrand />
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-[6px] px-3 py-[10px] text-[13px] font-[600] transition-all duration-200 ${
                    isActive
                      ? "bg-[#f4b928] text-[#08244b]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <Icon size={17} strokeWidth={2} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-3">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-[6px] px-3 py-[10px] text-[13px] font-[600] text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <LogOut size={17} strokeWidth={2} />
            Logout
          </button>
        </div>
      </aside>

      {/* =========================================================
          MOBILE SIDEBAR
      ========================================================== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-[230px] flex-col bg-[#0A3467]">
            <div className="flex h-[64px] items-center justify-between border-b border-white/10 px-5">
              <AdminBrand />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={20} className="text-white" />
              </button>
            </div>

            <nav className="flex-1 space-y-1 px-3 py-5">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-[6px] px-3 py-[10px] text-[13px] font-[600] transition-all duration-200 ${
                        isActive
                          ? "bg-[#f4b928] text-[#08244b]"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={17} strokeWidth={2} />
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            <div className="border-t border-white/10 p-3">
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-[6px] px-3 py-[10px] text-[13px] font-[600] text-white/80 hover:bg-white/10 hover:text-white"
              >
                <LogOut size={17} strokeWidth={2} />
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="lg:pl-[230px]">
        <header className="sticky top-0 z-20 flex h-[64px] items-center justify-between border-b border-[#e7edf3] bg-white px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              className="text-[#0A3467] lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
            <h1 className="text-[15px] font-[700] text-[#0A3467] sm:text-[17px]">
              {title}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-[12.5px] font-[600] text-[#41536b] sm:block">
              {admin?.name}
            </span>
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0A3467] text-[12.5px] font-[700] text-white">
              {admin?.name ? admin.name.charAt(0).toUpperCase() : "A"}
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
