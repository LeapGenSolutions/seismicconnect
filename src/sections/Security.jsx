import Section from "../components/Section";
import {
  ShieldCheck,
  Lock,
  FileSearch,
  Server,
  KeySquare,
  EyeOff
} from "lucide-react";

function Bullet({ icon: Icon, title, desc }) {
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
      {/* Heart + ECG wave */}
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
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Security() {
  return (
    <div id="security" className="bg-secondary-500/5">
      <Section className="py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-500">
            Security &amp; Compliance
          </h2>

          <p className="mt-3 text-gray-600">
            SEISMIC is engineered with healthcare-grade protections at every
            layer—combining end-to-end encryption, strict access controls,
            HIPAA-aligned data handling, and continuous monitoring. Patient
            data is processed using a privacy-first design that minimizes PHI
            exposure while maintaining full clinical accuracy; every interaction
            is logged for auditability, and all data remains encrypted at rest
            and in transit using industry-standard, FIPS-validated protocols.
            Because every patient moment matters, SEISMIC treats security as a
            core part of the clinical experience—not an afterthought—so
            clinicians can trust that every conversation, note, and insight
            stays private, protected, and fully in their control, backed by
            Azure’s compliant infrastructure for safety and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <Bullet
            icon={ShieldCheck}
            title="HIPAA-Aligned Workflows"
            desc="Every part of SEISMIC’s data handling—from transcription to note review—is aligned with HIPAA principles, including PHI protection, secure access, audit trails, and support for BAAs."
          />

          <Bullet
            icon={Lock}
            title="Encryption Everywhere"
            desc="Secure HTTPS in transit and strong encryption at rest using FIPS-validated algorithms, backed by Azure Key Vault for managed key protection and consistent security best practices."
          />

          <Bullet
            icon={FileSearch}
            title="Full Audit Trails & Monitoring"
            desc="Every access, edit, and action is logged for governance and compliance. Continuous monitoring helps detect unusual activity and strengthens organizational security posture."
          />

          <Bullet
            icon={Server}
            title="Tenant Isolation & Data Residency"
            desc="SEISMIC uses logical tenant isolation to ensure each organization’s data stays securely separated. Azure-backed architecture enables optional data residency alignment by region."
          />

          <Bullet
            icon={KeySquare}
            title="RBAC & Least-Privilege Access"
            desc="Role-based access control, scoped permissions, and optional SSO/Entra ID ensure each user only sees what they need, reducing unnecessary PHI exposure."
          />

          <Bullet
            icon={EyeOff}
            title="PHI Minimization by Design"
            desc="SEISMIC is built with a privacy-first model that captures only essential PHI required for accurate clinical documentation—reducing risk surface and strengthening compliance."
          />

        </div>

        {/* Compliance badges */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="h-12 rounded-xl border bg-white shadow-sm grid place-items-center text-sm text-secondary-500/80">HIPAA</div>
          <div className="h-12 rounded-xl border bg-white shadow-sm grid place-items-center text-sm text-secondary-500/80">SOC 2</div>
          <div className="h-12 rounded-xl border bg-white shadow-sm grid place-items-center text-sm text-secondary-500/80">PHI Minimization</div>
          <div className="h-12 rounded-xl border bg-white shadow-sm grid place-items-center text-sm text-secondary-500/80">Audit Logs</div>
        </div>

        

      </Section>
    </div>
  );
}
