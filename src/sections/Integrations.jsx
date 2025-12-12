import Section from "../components/Section";
import { PlugZap, BookOpen, FileCheck2, Sparkles } from "lucide-react";

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
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Integrations() {
  return (
    <div id="integrations" className="bg-white">
      <Section className="py-10 sm:py-12 lg:py-14">
        {/* Main heading + intro */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-500">
            SEISMIC Works With the Systems You Already Use
          </h2>
          <p className="mt-3 text-gray-600">
            SEISMIC is designed to seamlessly fit into clinical workflows by
            connecting with the tools and information sources clinicians depend
            on every day. Whether you're using SEISMIC in standalone mode or
            integrated with your EHR, the platform enhances your workflow
            without changing how you practice.
          </p>
        </div>

        {/* Four integration bullets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Bullet
            icon={PlugZap}
            title="EHR Integrations (Athena, Epic, and More)"
            desc="SEISMIC integrates with leading EHR platforms such as athenahealth and Epic, allowing clinicians to synchronize appointments, access patient context, and streamline documentation workflows. SEISMIC is built on a flexible integration foundation that supports additional EHRs as practices expand or evolve."
          />

          <Bullet
            icon={BookOpen}
            title="Clinical Knowledge Integrations (UpToDate)"
            desc="SEISMIC integrates with UpToDate to power the third layer of CDS—providing authoritative, evidence-based clinical recommendations that complement the doctor’s own judgment and SEISMIC’s independent AI recommendations. This ensures clinicians receive clear, reliable, real-time medical guidance grounded in trusted literature."
          />

          <Bullet
            icon={FileCheck2}
            title="AMA CPT Licensing Integration"
            desc="Through an official relationship with the American Medical Association, SEISMIC is licensed to use CPT® codes within the platform. This ensures that all billing codes surfaced in notes are accurate, compliant, and ready for clinical workflows."
          />

          <Bullet
            icon={Sparkles}
            title="Future-Ready Interoperability"
            desc="SEISMIC’s integration engine is built with extensibility in mind—supporting future connections with additional EHRs, medical reference systems, and hospital ecosystem tools as your practice grows."
          />
        </div>
      </Section>
    </div>
  );
}
