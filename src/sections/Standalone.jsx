// src/sections/Standalone.jsx
import Section from "../components/Section";
import {
  Calendar,
  PhoneCall,
  FileText,
  ShieldCheck,
  ArrowRightLeft,
  UploadCloud,
} from "lucide-react";

function StandaloneCard({ icon: Icon, title, children }) {
  return (
    <div
      className="
        group relative p-6 pb-14 rounded-2xl border bg-white shadow-sm
        transition-all duration-300 ease-out
        hover:bg-blue-50
        hover:shadow-md
        hover:-translate-y-1
        hover:scale-[1.03]
        cursor-default
      "
    >
      {/* Heart + ECG wave at bottom */}
      <div
        className="
          pointer-events-none
          absolute bottom-2 left-1/2 -translate-x-1/2
          w-[90%] h-10
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex flex-col items-center justify-center
        "
      >
        <div className="seismic-heart text-primary-600 text-base leading-none mb-1">
          ❤️
        </div>

        <svg
          viewBox="0 0 120 30"
          className="seismic-ecg w-full h-8 text-primary-600"
        >
          <polyline
            points="
              0,18   10,18   15,16   20,22   25,18
              30,18  35,10   40,26   45,8    50,20
              55,18  60,18   65,16   70,22   75,18
              80,18  85,12   90,24   95,10   100,18
              110,18 120,18
            "
            className="fill-none stroke-current"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <Icon className="w-6 h-6 mb-3 text-primary-600" />
      <h3 className="font-semibold text-lg text-secondary-500">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

export default function Standalone() {
  return (
    <div id="standalone" className="bg-secondary-500/5">
      <Section className="py-10 sm:py-12 lg:py-14">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-500">
            Standalone SEISMIC
          </h2>
          <p className="mt-3 text-gray-600">
            SEISMIC is built to function as a complete, independent
            documentation system even without EHR integration. Whether you
            choose to connect your EHR or operate independently, SEISMIC
            provides a full, secure, HIPAA-compliant clinical documentation
            workflow—from creating appointments to generating transcripts,
            summaries, SOAP notes, billing codes, and organizing patient
            information directly within the system. Clinicians can use SEISMIC
            as a standalone platform while maintaining full flexibility to
            integrate with EHRs whenever they prefer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StandaloneCard icon={Calendar} title="Create Appointments Directly Inside SEISMIC">
            Clinicians can manually add patient details and schedule visits
            directly within SEISMIC. Each appointment is organized and stored
            securely, enabling full documentation without relying on external
            systems.
          </StandaloneCard>

          <StandaloneCard icon={PhoneCall} title="Launch Ad-Hoc Sessions Anytime">
            For unscheduled or immediate encounters, clinicians can launch
            ad-hoc sessions at any time. SEISMIC automatically captures the
            conversation and generates structured documentation for every visit.
          </StandaloneCard>

          <StandaloneCard icon={FileText} title="Complete Documentation Workflow, Fully Independent">
            SEISMIC generates comprehensive clinical documentation for every
            encounter and stores it securely inside the platform, allowing
            clinicians to review, edit, and finalize their work without needing
            EHR integration.
          </StandaloneCard>

          <StandaloneCard
            icon={ShieldCheck}
            title="Secure, HIPAA-Compliant Built-In Patient Database"
          >
            SEISMIC maintains a built-in patient database that securely stores
            demographics, visit history, and generated documentation—fully
            encrypted and compliant with HIPAA standards, ensuring clinical
            safety and data privacy even in standalone mode.
          </StandaloneCard>

          <StandaloneCard icon={ArrowRightLeft} title="Bring Documentation Into Any EHR, Any Time">
            When clinicians finalize a note, they can easily copy and paste or
            upload the documentation into whichever EHR they use. SEISMIC
            supports your workflow whether you practice with an integrated EHR
            or prefer a standalone setup.
          </StandaloneCard>

          <StandaloneCard icon={UploadCloud} title="Future-Ready Appointment Uploads">
            SEISMIC will soon support appointment list uploads, allowing
            clinicians to import their schedules directly and let SEISMIC
            populate visit data automatically to streamline visit setup inside
            the platform.
          </StandaloneCard>
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center text-gray-600 text-sm">
          Standalone SEISMIC ensures that clinicians always have access to a
          powerful, complete, secure documentation system—with or without EHR
          integration—offering flexibility for every type of practice.
        </div>
      </Section>
    </div>
  );
}
