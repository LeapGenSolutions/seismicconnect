// src/pages/SignupPage.jsx
import { Link, useLocation } from "react-router-dom";
import googleSignUpBtn from "../assets/auth-providers/google-signup.png";
import microsoftSignInSvg from "../assets/auth-providers/microsoft-signin.svg";
import logo from "../assets/seismic-logo.png";

export default function SignupPage() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F0FF] via-[#F5F7FA] to-white px-4">
      <div className="max-w-5xl mx-auto py-8">
        {/* LOGO – same as navbar */}
        <header className="mb-6">
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
        </header>

        {/* MARKETING – centered */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-2xl lg:text-3xl font-semibold text-[#0A0F1C] mb-2">
            Create your SEISMIC account
          </h1>
          <p className="text-sm lg:text-base text-[#4B5563]">
            Get started with AI-assisted clinical documentation and simplified
            workflows for your clinic. Sign up with your email or a supported
            single sign-on.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#E2E8F0] px-6 py-8 lg:px-8 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* LEFT: 3rd-party signup */}
            <div className="lg:w-5/12 bg-[#F5F0FF] rounded-xl px-5 py-5 flex flex-col justify-center">
              <p className="text-xs font-medium text-[#6B7280] mb-3">
                Sign up with
              </p>

              {/* Google – SIGN UP */}
              <button
                type="button"
                className="w-full flex justify-center mb-3"
              >
                <img
                  src={googleSignUpBtn}
                  alt="Sign up with Google"
                  className="h-10 w-auto"
                />
              </button>

              {/* Microsoft – SIGN IN (same size as Google) */}
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
                  Sign up with Yahoo
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
                  Enterprise SSO (placeholder)
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

            {/* RIGHT: email/username form */}
            <div className="lg:w-5/12">
              <p className="text-xs font-medium text-[#6B7280] mb-3">
                Create your SEISMIC account
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 rounded-md border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#0038FF]"
                    placeholder="you@clinic.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-md border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#0038FF]"
                    placeholder="Choose a username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 rounded-md border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#0038FF]"
                    placeholder="Create a strong password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 rounded-md border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#0038FF]"
                    placeholder="Re-enter your password"
                  />
                </div>

                <div className="flex items-start gap-2 text-xs text-[#4B5563]">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-[#D1D5DB]"
                  />
                  <p>
                    I agree to SEISMIC&apos;s{" "}
                    <a href="#" className="text-[#0038FF] underline">
                      privacy policy
                    </a>
                    ,{" "}
                    <a href="#" className="text-[#0038FF] underline">
                      terms of use
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#0038FF] underline">
                      BAA
                    </a>
                    .
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0038FF] hover:bg-[#002FCC] text-white text-sm font-medium py-2.5 rounded-md transition mt-1"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-3 text-xs text-[#4B5563]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-[#0038FF] font-medium hover:underline"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
