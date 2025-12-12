import Section from "../components/Section";
import { Mic, Brain, MessageCircle, HeartHandshake } from "lucide-react";

function Pillar({ icon: Icon, title, description, points = [] }) {
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

      <Icon className="w-6 h-6 mb-3 text-primary-600" />

      <h3 className="font-semibold text-lg text-secondary-500">{title}</h3>

      {description && (
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      )}

      <ul className="mt-3 space-y-2 text-gray-600 text-sm leading-relaxed list-disc pl-5">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}


export default function Pillars() {
  return (
    <div className="bg-secondary-500/5" id="pillars">
      <Section className="py-10 sm:py-12 lg:py-14">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-500">Why SEISMIC</h2>

          {/* ⭐ Updated Why SEISMIC paragraph */}
          <p className="mt-3 text-gray-600">
            Healthcare deserves technology that enhances the human connection,
            not one that distracts from it. SEISMIC is built to lighten cognitive
            load, remove documentation pressure, and let clinicians stay fully
            present with their patients. By combining ambient listening, clinical
            intelligence, emotional awareness, and real-time assistance,
            SEISMIC transforms each encounter into a clearer, calmer, and more
            meaningful experience. It’s clinical AI that quietly works in the
            background—supporting the provider, strengthening the patient
            relationship, and elevating the quality of care without ever getting
            in the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Pillar
            icon={Mic}
            title="AI Scribing — Notes done in seconds, not hours"
            description="SEISMIC listens in the background and turns every encounter into structured, ready-to-review documentation so charts don’t follow you home."
            points={[
              "Ambient transcription for real-time documentation",
              "Billing-ready note drafting (SOAP, orders, summaries)",
              "Sentiment insights, live captioning, and translation",
            ]}
          />

          <Pillar
            icon={Brain}
            title="Clinical Decision Support (CDS) — Your digital co-pilot"
            description="A clinical co-pilot that surfaces the right context, risks, and opportunities at the moment of decision — without disrupting your flow."
            points={[
              "Evidence-based recommendations and chart insights",
              "Care gap detection to close loops faster",
              "Fully configurable per client and specialty",
            ]}
          />

          <Pillar
            icon={MessageCircle}
            title="Patient Avatar & Chatbot — Always on, always engaging"
            description="A living, evolving view of each patient’s story plus conversational tools that keep them informed and supported before, during, and after visits."
            points={[
              "Pre-visit intake and guidance",
              "During-visit assistance and education",
              "Post-visit follow-ups that keep patients connected",
            ]}
          />

          <Pillar
            icon={HeartHandshake}
            title="Emotional Empathy — The human touch in AI"
            description="SEISMIC pays attention not just to what is said, but how it is said, helping clinicians recognize and respond to moments that matter emotionally."
            points={[
              "Understands tone and sentiment in real time",
              "Detects patient distress and emotional cues",
              "Supports clinicians in building compassionate connections",
            ]}
          />
        </div>
      </Section>
    </div>
  );
}
