// src/pages/LoginPage.jsx
import { Link, useLocation } from "react-router-dom";
import googleSignInBtn from "../assets/auth-providers/google-signin.png";
import microsoftSignInSvg from "../assets/auth-providers/microsoft-signin.svg";
import logo from "../assets/seismic-logo.png";

export default function LoginPage() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0FF] via-[#F5F7FA] to-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl">
        {/* LOGO – same as navbar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={logo} alt="SEISMIC Logo" className="h-9 w-auto" />
            <span className="font-semibold text-lg text-secondary-500 hidden sm:inline">
              SEISMIC
            </span>
          </Link>
        </div>

        {/* Main container */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#E2E8F0] px-6 py-8 lg:px-8 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* LEFT: 3rd-party login */}
            <div className="lg:w-5/12 bg-[#F5F0FF] rounded-xl px-5 py-5">
              <p className="text-xs font-medium text-[#6B7280] mb-3">
                Sign in with
              </p>

              {/* Google – SIGN IN */}
              <button
                type="button"
                className="w-full flex justify-center mb-3"
              >
                <img
                  src={googleSignInBtn}
                  alt="Sign in with Google"
                  className="h-10 w-auto"
                />
              </button>

              {/* Microsoft – SIGN IN */}
              <button
                type="button"
                className="w-full flex justify-center mb-3"
              >
                <img
                  src={microsoftSignInSvg}
                  alt="Sign in with Microsoft"
                  className="h-10 w-auto"
                />
              </button>

              {/* Yahoo */}
              <button
                type="button"
                className="w-full flex items-center gap-3 border border-[#D1D5DB] rounded-md px-3 py-2.5 bg-white hover:bg-[#EEF2FF] transition-colors mb-3"
              >
                <div className="h-7 w-7 flex items-center justify-center rounded-full bg-[#FEF3FF] text-[11px] font-semibold text-[#111827]">
                  Y
                </div>
                <span className="text-sm font-medium text-[#111827] flex-1 text-left">
                  Continue with Yahoo
                </span>
              </button>

              {/* Generic SSO placeholder */}
              <button
                type="button"
                className="w-full flex items-center gap-3 border border-dashed border-[#D1D5DB] rounded-md px-3 py-2.5 bg-white hover:bg-[#F9FAFB] transition-colors"
              >
                <div className="h-7 w-7 flex items-center justify-center rounded-full bg-[#F9FAFB] text-[11px] font-semibold text-[#111827]">
                  SSO
                </div>
                <span className="text-sm font-medium text-[#111827] flex-1 text-left">
                  Sign in with SSO (placeholder)
                </span>
              </button>
            </div>

            {/* MIDDLE: OR divider */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative flex flex-col items-center h-full">
                <div className="h-full border-l border-[#E5E7EB]" />
                <span className="absolute top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full border border-[#E5E7EB] text-[11px] font-medium text-[#9CA3AF]">
                  OR
                </span>
              </div>
            </div>

            {/* Mobile OR */}
            <div className="flex lg:hidden items-center">
              <div className="flex-1 h-px bg-[#E5E7EB]" />
              <span className="px-3 text-[11px] font-medium text-[#9CA3AF]">
                OR
              </span>
              <div className="flex-1 h-px bg-[#E5E7EB]" />
            </div>

            {/* RIGHT: login form */}
            <div className="lg:w-5/12">
              <p className="text-xs font-medium text-[#6B7280] mb-3">
                Login to your SEISMIC account
              </p>

              <form className="space-y-4">
                {/* Username / Email */}
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    Username or email
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-md border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#0038FF]"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 rounded-md border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#0038FF]"
                    placeholder="••••••••"
                  />
                </div>

                {/* Login button */}
                <button
                  type="submit"
                  className="w-full bg-[#0038FF] hover:bg-[#002FCC] text-white text-sm font-medium py-2.5 rounded-md transition"
                >
                  Log In
                </button>
              </form>

              {/* Forgot + signup links */}
              <div className="mt-3 flex flex-col gap-1 text-xs text-[#4B5563]">
                <button
                  type="button"
                  className="text-[#0038FF] font-medium hover:underline text-left"
                >
                  Forgot your password?
                </button>
                <p>
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-[#0038FF] font-medium hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
