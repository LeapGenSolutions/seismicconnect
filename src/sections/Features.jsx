import Section from "../components/Section";
import {
  Stethoscope,
  Mic,
  FileText,
  HeartPulse,
  ClipboardCheck,
  Bot,
  LineChart,
} from "lucide-react";

function FeatureCard({ icon: Icon, title, children }) {
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
        {/* Heart */}
        <div className="seismic-heart text-primary-600 text-base leading-none mb-1">
          ❤️
        </div>

        {/* ECG wave */}
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

      {/* Icon */}
      <Icon className="w-6 h-6 mb-3 text-primary-600" />

      {/* Title */}
      <h3 className="font-semibold text-lg text-secondary-500">{title}</h3>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">{children}</p>
    </div>
  );
}



export default function Features() {
  return (
    <Section id="features" className="py-10 sm:py-12 lg:py-14">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-secondary-500">
          What SEISMIC Delivers
        </h2>
        <p className="mt-3 text-gray-600">
          Ambient clinical intelligence that supports every step of the visit.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Capture */}
        <FeatureCard icon={Mic} title="Capture">
          Securely captures the real-time provider–patient conversation through
          ambient listening, with noise reduction and speaker separation so
          every clinical detail is preserved without disrupting the visit.
        </FeatureCard>

        {/* 2. Transcribe */}
        <FeatureCard icon={FileText} title="Transcribe">
          Transforms the conversation into an accurate, medical-grade transcript
          with clinical terminology support, creating a clear, structured text
          foundation for downstream documentation.
        </FeatureCard>

        {/* 3. Intelligent Clinical Documentation */}
        <FeatureCard icon={Stethoscope} title="Intelligent Clinical Documentation">
          Builds on the transcript to generate rich clinical outputs: visit
          summaries, SOAP notes, recommendations, suggested billing codes, and
          topic clusters. Seismic also creates a longitudinal summary that rolls
          up prior visit summaries for a quick view of the patient’s story over time.
        </FeatureCard>

        {/* 4. Emotional Empathy Layer */}
        <FeatureCard icon={HeartPulse} title="Emotional Empathy Layer">
          Highlights moments of emotional connection and key relational cues
          from the conversation, helping clinicians better understand how the
          patient is feeling and strengthen provider–patient communication.
        </FeatureCard>

        {/* 5. Verify & Post to EHR */}
        <FeatureCard icon={ClipboardCheck} title="Verify & Post to EHR">
          Enables clinicians to quickly review and refine their notes, then post
          the finalized documentation into their EHR workflows, supporting faster
          chart completion and smoother end-of-day wrap-up.
        </FeatureCard>

        {/* 6. NOVA — Doctor’s AI Assistant */}
        <FeatureCard icon={Bot} title="NOVA — Doctor’s AI Assistant">
          NOVA is Seismic’s AI assistant for clinicians, helping doctors quickly
          retrieve patient-specific context, medical insights, and answers to
          workflow questions during or after the visit — without leaving their
          documentation flow.
        </FeatureCard>

        {/* 7. Analyze & Improve */}
        <FeatureCard icon={LineChart} title="Analyze & Improve">
          Provides dashboards and insights on documentation time saved, chart
          closure patterns, visit and note trends, and workflow efficiency, so
          clinicians and leaders can continuously refine how care is delivered
          and documented.
        </FeatureCard>
      </div>
    </Section>
  );
}
