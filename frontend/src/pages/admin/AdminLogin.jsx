import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";
import { extractErrorMessage } from "../../services/apiClient.js";

export default function AdminLogin() {
  const { login, isAuthenticated, initializing } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  if (!initializing && isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  function validate() {
    const nextErrors = {};
    if (!email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!password) nextErrors.password = "Password is required.";
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
      await login(email, password);
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      setFormError(extractErrorMessage(error, "Invalid email or password."));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#031a3d] px-4 font-['Inter',sans-serif]">
      <div className="w-full max-w-[400px] rounded-[12px] bg-white p-7 shadow-2xl sm:p-9">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#0A3467]">
            <LockKeyhole size={19} className="text-[#f4b928]" />
          </div>
          <h1 className="text-[19px] font-[700] text-[#0A3467]">Admin Login</h1>
          <p className="mt-1 text-[12.5px] text-[#5b6b7f]">
            Global Reviews Press administration panel
          </p>
        </div>

        {formError && (
          <div className="mt-5 rounded-[6px] border border-[#f3c6c6] bg-[#fdecec] px-3 py-[10px] text-[12px] font-[600] text-[#c23a3a]">
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-[6px] block text-[11.5px] font-[600] text-[#102d59]">
              Email Address
            </label>
            <div className="relative">
              <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a97a8]" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((c) => ({ ...c, email: "" }));
                }}
                placeholder="admin@globalreviewspress.com"
                className={`h-[42px] w-full rounded-[6px] border bg-white pl-9 pr-3 text-[12.5px] font-[500] text-[#1b3655] outline-none transition focus:border-[#0A3467] focus:shadow-[0_0_0_3px_rgba(10,52,103,0.08)] ${
                  errors.email ? "border-[#d86868]" : "border-[#dce4eb]"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-[11px] text-[#d64545]">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="mb-[6px] block text-[11.5px] font-[600] text-[#102d59]">
              Password
            </label>
            <div className="relative">
              <LockKeyhole size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a97a8]" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors((c) => ({ ...c, password: "" }));
                }}
                placeholder="Enter your password"
                className={`h-[42px] w-full rounded-[6px] border bg-white pl-9 pr-10 text-[12.5px] font-[500] text-[#1b3655] outline-none transition focus:border-[#0A3467] focus:shadow-[0_0_0_3px_rgba(10,52,103,0.08)] ${
                  errors.password ? "border-[#d86868]" : "border-[#dce4eb]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8a97a8] hover:text-[#41536b]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-[11px] text-[#d64545]">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex h-[44px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#0A3467] text-[13px] font-[600] text-white transition hover:bg-[#0c3d78] disabled:opacity-60"
          >
            {submitting ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Signing in…
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
