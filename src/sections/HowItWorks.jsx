import Section from "../components/Section";
import {
  PlugZap,
  Mic,
  FileText,
  CheckCircle2,
  Send,
  Bot,
} from "lucide-react";

function Step({ n, icon: Icon, title, desc }) {
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
      {/* number badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-600 text-white grid place-items-center text-sm font-semibold">
        {n}
      </div>

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

      <Icon className="w-6 h-6 mb-3 text-primary-600" />
      <h3 className="font-semibold text-lg text-secondary-500">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}


export default function HowItWorks() {
  return (
    <div id="how" className="bg-white">
      <Section className="py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-500">
            How SEISMIC Works
          </h2>
          <p className="mt-3 text-gray-600">
            SEISMIC blends ambient intelligence with clinician-first workflow
            design to simplify the entire visit — from capturing the
            conversation to generating ready-to-review documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Step
            n={1}
            icon={PlugZap}
            title="Start the Visit Seamlessly"
            desc="SEISMIC activates alongside the encounter, capturing context and preparing the documentation pipeline as the visit begins."
          />

          <Step
            n={2}
            icon={Mic}
            title="Capture the Encounter"
            desc="Ambient listening securely records the provider–patient conversation with high clarity, identifying medical cues, timestamps, and key clinical moments in real time."
          />

          <Step
            n={3}
            icon={FileText}
            title="Generate Clinical Documentation"
            desc="SEISMIC produces structured outputs including transcripts, visit summaries, longitudinal summaries, SOAP notes, recommendations, billing codes, emotional cues, and topic clusters — all organized for quick review."
          />

          <Step
            n={4}
            icon={CheckCircle2}
            title="Verify & Finalize the Note"
            desc="Clinicians review the generated documentation, make inline edits, and finalize their preferred version — dramatically reducing time spent on manual charting."
          />

          <Step
            n={5}
            icon={Send}
            title="Bring It Into Your EHR"
            desc="Once finalized, clinicians simply copy and paste or upload the generated note into their existing EHR workflows, keeping full control over what gets recorded."
          />

          <Step
            n={6}
            icon={Bot}
            title="Ask NOVA for Assistance"
            desc="NOVA, SEISMIC’s clinical AI assistant, helps retrieve context, clarify patient history, and surface relevant insights during or after the visit — without disrupting the documentation flow."
          />
        </div>

        {/* Optional CTA row */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="/demo"
            className="rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-6 py-3 shadow"
          >
            See a Live Demo
          </a>
          <a
            href="#contact"
            className="rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-6 py-3 shadow"
          >
            Talk to Us
          </a>
        </div>
      </Section>
    </div>
  );
}
