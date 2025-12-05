import { useState } from "react";
import logo from "../assets/seismic-logo.png";

export default function LoginSignup() {
  // set to false to show Sign Up first (like the screenshot)
  const [isLogin, setIsLogin] = useState(false);

  const toggleMode = () => setIsLogin((prev) => !prev);

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg border border-[#E2E8F0] flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT: Marketing / Copy */}
        <div className="lg:w-1/2 bg-[#F5F0FF] px-8 py-8 lg:px-10 lg:py-12 flex flex-col">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <img src={logo} alt="SEISMIC" className="h-8 w-auto mr-3" />
            <span className="text-base font-medium tracking-[0.2em] uppercase text-[#0A0F1C]">
              Seismic
            </span>
          </div>

          <h1 className="text-2xl lg:text-3xl font-semibold text-[#0A0F1C] mb-3">
            Try SEISMIC now.
          </h1>
          <p className="text-sm lg:text-base text-[#111827] mb-4">
            Reduce documentation burden and bring the focus back to the patient
            with SEISMIC&apos;s AI-powered clinical notes and assistive
            workflows.
          </p>
          <p className="text-sm lg:text-base text-[#4B5563]">
            Join clinicians using SEISMIC to streamline charting, capture
            better data, and keep their time for what truly matters — care.
          </p>

          {/* Testimonial card */}
          <div className="mt-8 bg-[#E4DDFF] rounded-xl p-5 text-sm text-[#111827]">
            <p className="mb-4">
              “With SEISMIC, I finish my notes faster and spend less time in
              the EHR after hours. It feels like having a quiet, reliable
              assistant in the room.”
            </p>
            <p className="font-medium">Dr. A. Sharma</p>
            <p className="text-xs text-[#4B5563]">Internal Medicine</p>
            <div className="mt-3 text-[#5B21FF] text-lg leading-none">★★★★★</div>
          </div>
        </div>

        {/* RIGHT: Auth form */}
        <div className="lg:w-1/2 px-8 py-8 lg:px-10 lg:py-12 bg-white flex items-center">
          <div className="w-full">
            <h2 className="text-xl lg:text-2xl font-semibold text-[#0A0F1C]">
              {isLogin ? "Sign in to SEISMIC" : "Create your SEISMIC account"}
            </h2>
            <p className="mt-1 text-xs lg:text-sm text-[#4B5563]">
              {isLogin
                ? "Use your email and password to access SEISMIC."
                : "Start using SEISMIC in minutes. No credit card required."}
            </p>

            <form className="mt-6 space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  Email
                </label>
                <input
                  type="email"
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
                {isLogin && (
                  <div className="mt-1 text-right">
                    {/* Wire this to your real route later */}
                    <button
                      type="button"
                      className="text-xs text-[#0038FF] hover:underline"
                    >
                      Forgot your password?
                    </button>
                  </div>
                )}
              </div>

              {/* Terms checkbox for signup */}
              {!isLogin && (
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-[#D1D5DB]"
                  />
                  <p className="text-xs text-[#4B5563]">
                    I agree to the terms of SEISMIC&apos;s{" "}
                    <a href="#" className="text-[#0038FF] underline">
                      privacy policy
                    </a>
                    ,{" "}
                    <a href="#" className="text-[#0038FF] underline">
                      terms of use
                    </a>
                    , and{" "}
                    <a href="#" className="text-[#0038FF] underline">
                      BAA
                    </a>
                    .
                  </p>
                </div>
              )}

              {/* Primary button */}
              <button
                type="submit"
                className="w-full bg-[#0038FF] hover:bg-[#002FCC] text-white text-sm font-medium py-2.5 rounded-md transition"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {/* Toggle + HIPAA note */}
            <div className="mt-4 text-center text-xs text-[#4B5563] space-y-2">
              <p>
                {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-[#0038FF] font-medium hover:underline"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
              <p className="flex flex-col items-center gap-1 text-[11px] text-[#6B7280]">
                <span className="font-medium">HIPAA compliant</span>
                <span>Your data is protected with healthcare-grade encryption.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
