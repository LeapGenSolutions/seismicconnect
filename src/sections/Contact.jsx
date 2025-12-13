import Section from "../components/Section";
import { Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    const form = e.currentTarget;
    const action = form.getAttribute("action");

    if (!action || action.includes("YOUR_FORMSPREE_ID")) {
      e.preventDefault();
      navigate("/thank-you");
      return;
    }

    e.preventDefault();
    const data = new FormData(form);
    const res = await fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) navigate("/thank-you");
    else alert("Sorry, something went wrong. Please try again.");
  }

  // For future use – when standalone page exists, you can enable navigation here.
  function handleSignupClick() {
    // Example for later:
    // navigate("/standalone-seismic");
  }

  return (
    <Section id="contact" className="py-10 sm:py-12 lg:py-14">
      {/* Header for the whole section */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-secondary-500">Contact Us</h2>
        <p className="mt-3 text-gray-600">
          Have questions about SEISMIC or want to explore what&apos;s coming
          next? Reach out to us, or sign up to be among the first to try
          Standalone SEISMIC.
        </p>
      </div>

      {/* Two columns with vertical divider on desktop */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-8">
        {/* Left: Contact form */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
            method="POST"
            className="grid gap-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="SEISMIC Website Contact"
            />
            <input type="hidden" name="_template" value="table" />

            {/* Honeypot field */}
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Full Name"
                autoComplete="name"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Work Email"
                autoComplete="email"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="org"
                placeholder="Organization / Clinic"
                autoComplete="organization"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                name="role"
                placeholder="Role (e.g., MD, Practice Admin)"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="How can we help you?"
              className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-6 py-3 shadow"
            >
              <Send className="w-5 h-5" />
              Submit Request
            </button>
          </form>
        </div>

        {/* Divider: vertical on desktop, horizontal on mobile */}
        <div className="my-8 lg:my-0 lg:px-6 flex items-stretch justify-center">
          {/* Horizontal line (mobile / tablet) */}
          <div className="h-px w-full bg-primary-100 lg:hidden" />
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block w-px bg-primary-200" />
        </div>

        {/* Right: Sign Up section */}
        <div className="flex-1 lg:pl-2">
          <h3 className="text-xl font-semibold text-secondary-500">
            Sign up for Standalone SEISMIC
          </h3>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Interested in trying SEISMIC as a standalone solution, without EHR
            integrations? We&apos;re preparing a dedicated trial experience for
            early adopters. In the near future, this section will let you sign
            up and access the Standalone SEISMIC page.
          </p>

          {/*<button
            type="button"
            onClick={handleSignupClick}
            className="mt-5 inline-flex items-center justify-center rounded-2xl border border-primary-600 px-5 py-2.5 text-sm font-semibold text-primary-600 hover:bg-primary-600 hover:text-white transition"
          >
            Sign up for Standalone SEISMIC
          </button>

          <p className="mt-2 text-xs text-gray-500">
            This button is a placeholder for now. Once the Standalone SEISMIC
            page is live, it will take you directly to the sign-up flow.
          </p>*/}
          <p className="mt-2 text-xs text-gray-500">
            Standalone sign-up is coming soon. In the meantime, please submit a request via the Contact section, and we’ll reach out with free trial details.
          </p>
        </div>
      </div>
    </Section>
  );
}
