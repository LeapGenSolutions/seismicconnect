import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Section className="py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-secondary-500">Thanks — we got it!</h1>
            <p className="mt-3 text-gray-600">
              Our team will reach out shortly. If you need something urgent, feel free to contact us.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                to="/"
                className="rounded-2xl border px-6 py-3 text-secondary-500 hover:bg-gray-50"
              >
                Back to Home
              </Link>
              <Link
                to="/demo"
                className="rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-6 py-3 shadow"
              >
                Book Another Demo
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
