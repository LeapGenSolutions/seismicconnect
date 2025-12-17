import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default function TermsAndConditions() {
  useEffect(() => {
    document.title = "SEISMIC — Terms and Conditions";
  }, []);

  // Match About & Privacy Policy scroll behavior
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
              Seismic Connect Terms and Conditions
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>Applicability and Agreement:</strong> These Terms and
                Conditions (&quot;Terms&quot;) govern your access to and use of
                the Seismic Connect software and associated services (the
                &quot;Service&quot;). By accessing or using the Service, you
                acknowledge and agree to be bound by these Terms and our Business
                Associate Agreement.
              </p>

              <p className="border-l-4 border-red-500 pl-4 bg-red-50 py-3 rounded">
                <strong>
                  Disclaimer of Medical Advice (MANDATORY CLAUSE):
                </strong>{" "}
                Seismic Connect is a technology platform that provides automated
                charting, data reporting, and communication tools.{" "}
                <strong>
                  THE SERVICE IS A DECISION-SUPPORT TOOL ONLY AND IS NOT INTENDED
                  TO PROVIDE MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.
                </strong>{" "}
                The Client and its licensed healthcare providers are solely
                responsible for all clinical decisions, patient care, chart
                sign-offs, and the accuracy of all professional documentation
                and coding transmitted via the EMR.
              </p>

              <p>
                <strong>Client Data and Ownership:</strong> The Client retains
                all ownership rights to the patient information and data
                (&quot;PHI&quot;) entered into or accessed by the Service.
                Seismic Connect is licensed to use the PHI solely for the purpose
                of providing the contracted services to the Client under the
                terms of the BAA.
              </p>

              <p>
                <strong>User Responsibilities:</strong> The Client is
                responsible for ensuring that all authorized users maintain the
                confidentiality of their login credentials and comply with all
                applicable laws, including HIPAA, when using the Service. The
                Client agrees not to use the Service for any unlawful or
                prohibited purpose.
              </p>

              <p>
                <strong>EMR Integration:</strong> The Service relies on access to
                the Client&apos;s EMR system via approved APIs. The Client is
                responsible for granting and maintaining the necessary
                permissions and licenses for Seismic Connect to access this
                data.
              </p>

              <p>
                <strong>Limitation of Liability:</strong> In no event shall
                Seismic Connect or its affiliates be liable for any indirect,
                incidental, punitive, or consequential damages arising out of
                the use or inability to use the Service. Seismic Connect&apos;s
                total liability shall be limited to the amounts paid by the
                Client for the Service in the twelve (12) months preceding the
                claim.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
