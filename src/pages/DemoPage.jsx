import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";

export default function DemoPage() {
  useEffect(() => { document.title = "SEISMIC — Request a Live Demo"; }, []);
  const navigate = useNavigate();
  const USE_CALENDLY = false;

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const action = form.getAttribute("action");
    const data = new FormData(form);

    const res = await fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      navigate("/thank-you");
    } else {
      alert("Sorry, something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-primary-600/5 via-white to-white">
        <Section className="py-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-bold text-secondary-500">Request a Live Demo</h1>
            <p className="mt-3 text-gray-600">
              We’ll tailor a walkthrough for your specialty, templates, and workflow.
            </p>
          </div>

          {!USE_CALENDLY ? (
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/YOUR_FORMSPREE_ID"  // <- replace
              method="POST"
              className="max-w-2xl mx-auto grid gap-4"
            >
              {/* ... keep your inputs exactly as before ... */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Full Name"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600" />
                <input name="email" type="email" required placeholder="Work Email"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="org" placeholder="Organization / Clinic"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600" />
                <input name="specialty" placeholder="Specialty (e.g., Family Med, Cardiology)"
                  className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600" />
              </div>
              <textarea name="needs" rows="5" placeholder="Key goals or workflows to cover in the demo"
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600" />
              <button type="submit"
                className="rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-6 py-3 shadow">
                Request Demo
              </button>
            </form>
          ) : (
            // Calendly embed here if you switch later
            <div className="max-w-3xl mx-auto">
              <div className="aspect-[16/9] rounded-2xl border shadow bg-white overflow-hidden">
                <iframe title="Schedule a demo" src="https://calendly.com/YOUR_TEAM/YOUR_EVENT" className="w-full h-full" />
              </div>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </div>
  );
}
