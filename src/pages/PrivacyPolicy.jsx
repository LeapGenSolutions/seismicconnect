import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "SEISMIC — Privacy Policy";
  }, []);

  // Match About page scroll behavior
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-gradient-to-b from-primary-600/5 via-white to-white">
        <Section className="pt-16 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-6">
              Seismic Connect Website Privacy Policy
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>Introduction:</strong> This Privacy Policy describes how
                Seismic Connect collects, uses, and protects general, non-patient
                data gathered through our website at{" "}
                <a
                  href="https://seismicconnect.com/"
                  className="text-primary-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://seismicconnect.com/
                </a>{" "}
                (the &quot;Site&quot;).
              </p>

              <p>
                <strong>Data Collection (Non-PHI):</strong> We collect personal
                information that you voluntarily provide to us, such as your
                name, email address, phone number, and company when you use the
                &quot;Contact Us&quot; form or subscribe to our updates. We also
                automatically collect standard technical data, including IP
                addresses, browser type, and usage patterns via{" "}
                <strong>cookies</strong> and analytics tools, to improve the
                Site.
              </p>

              <p>
                <strong>No Use of PHI for Marketing:</strong> We want to be
                perfectly clear:{" "}
                <strong>
                  We do not collect, process, or use Protected Health Information
                  (PHI) for marketing or advertising purposes.
                </strong>{" "}
                Any PHI accessed through our B2B services is strictly governed by
                the BAA and is solely used to perform contracted services for our
                healthcare clients.
              </p>

              <div>
                <p className="mb-2">
                  <strong>How We Use Your Non-PHI Data:</strong> We use the
                  collected non-PHI data to:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Respond to your inquiries and service requests.</li>
                  <li>
                    Send marketing communications and updates regarding the
                    Service (you may opt-out at any time).
                  </li>
                  <li>
                    Analyze website performance and improve the user experience.
                  </li>
                </ul>
              </div>

              <p>
                <strong>Third-Party Sharing:</strong> We may share non-PHI data
                with service providers (such as email vendors or web analytics
                providers) to facilitate our marketing and operations. We do not
                sell this non-PHI data.
              </p>

              <p>
                <strong>The Role of the BAA (Critical Distinction):</strong> If
                you are a client of Seismic Connect, your Protected Health
                Information (PHI) is managed exclusively under the terms of a
                separate, legally binding{" "}
                <strong>Business Associate Agreement</strong> executed between
                your organization and Seismic Connect. This website&apos;s
                Privacy Policy does not apply to that patient-related data.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
