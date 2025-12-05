// src/sections/Testimonials.jsx
import Section from "../components/Section";
import { Quote } from "lucide-react";

function TestimonialCard({ quote, author, role }) {
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
        min-w-[260px] max-w-sm
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

      <Quote className="w-6 h-6 mb-3 text-primary-600" />
      <p className="text-gray-700 text-sm leading-relaxed italic">“{quote}”</p>

      <div className="mt-4">
        <p className="font-semibold text-secondary-500 text-sm">{author}</p>
        <p className="text-gray-500 text-xs">{role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Placeholder testimonials – replace with real ones later
  const testimonials = [
    {
      quote: "This is where your first real testimonial will appear.",
      author: "Provider Name",
      role: "Specialty / Organization",
    },
    {
      quote: "Add more testimonials here as they come in.",
      author: "Provider Name",
      role: "Specialty / Organization",
    },
    {
      quote: "SEISMIC helps reduce burnout and keeps my focus on patients.",
      author: "Provider Name",
      role: "Specialty / Organization",
    },
    {
      quote: "The documentation quality and time savings are remarkable.",
      author: "Provider Name",
      role: "Specialty / Organization",
    },
  ];

  // Duplicate array so the marquee can loop seamlessly
  const looped = [...testimonials, ...testimonials];

  return (
    <div id="testimonials" className="bg-white">
      <Section className="py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-500">
            Testimonials
          </h2>
          <p className="mt-3 text-gray-600">
            What clinicians are saying about SEISMIC. (Real testimonials coming soon.)
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Left & right fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="testimonial-track flex gap-6">
            {looped.map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                author={t.author}
                role={t.role}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
