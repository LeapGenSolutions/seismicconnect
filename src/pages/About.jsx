import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";

export default function About() {
  useEffect(() => {
    document.title = "SEISMIC — About Us";
  }, []);
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
              About SEISMIC
            </h1>

            <p className="text-gray-700 leading-relaxed mb-4">
              SEISMIC is a next-generation healthcare AI platform built to put
              the focus back where it belongs — on people. We combine ambient
              clinical intelligence, automated documentation, and real-time
              insights to help clinicians reclaim valuable time while improving
              the quality of every patient encounter.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              We work with clinics, specialty practices, and enterprise health
              systems to simplify documentation, reduce burnout, and help
              providers deliver more personal, connected care.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-500 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To make healthcare more human by eliminating administrative
              friction and empowering clinicians to spend more time with
              patients — not paperwork.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-500 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              A world where clinical documentation is automatic, care delivery
              is seamless, and every provider feels supported by intelligent
              technology.
            </p>

            <h2 className="text-2xl font-semibold text-secondary-500 mb-3">
              What We Do
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              SEISMIC securely captures clinical encounters, generates compliant
              and structured documentation, automates follow-ups, and turns
              conversations into actionable insights. We help organizations:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-1">
              <li>Restore clinician–patient connection</li>
              <li>Improve documentation accuracy and consistency</li>
              <li>Decrease administrative burden</li>
              <li>Increase operational efficiency</li>
              <li>Unlock deeper understanding through data and analytics</li>
            </ul>

            <h2 className="text-2xl font-semibold text-secondary-500 mb-4">
              Our Leadership
            </h2>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-semibold text-secondary-500">
                  Chief Medical Officer – Dr. Vandana Palagiri, MD
                </h3>
                <p className="text-gray-700">
                  Dr. Palagiri founded SEISMIC with a clinician-first vision to reduce
                  documentation burden and restore meaningful doctor–patient interactions
                  through intelligent, compliant healthcare technology.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-secondary-500 mb-3">
              The SEISMIC Team
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Behind SEISMIC is a multidisciplinary team of clinicians, AI/ML
              researchers, engineers, and product designers who are united by a
              single goal: to restore the human connection in healthcare.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We believe technology should feel natural in clinical environments
              — intuitive, compliant, and designed to reduce cognitive load, not
              add to it.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
