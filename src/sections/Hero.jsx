import { useState, useEffect } from "react";
import Section from "../components/Section";
import HeroMedia from "../components/HeroMedia";
import { HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/seismic-logo.png";

function ECGWave({ delay = 0 }) {
  return (
    <motion.svg
      width="160"
      height="40"
      viewBox="0 0 160 40"
      className="overflow-visible"
    >
      <motion.path
        d="M0 20 
           H10 L15 6 L20 32 L25 10 L30 30 L35 12 L40 26 L45 16 L50 24 
           H70 
           L75 8 L80 34 L85 12 L90 28 L95 14 L100 26 L105 18 L110 22 
           H160"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.25 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 2.4,
          delay,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1.6,
        }}
      />
    </motion.svg>
  );
}

function ECGStrip() {
  return (
    <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
      <div className="text-primary-600">
        <ECGWave delay={0} />
      </div>

      <motion.div
        className="flex items-center justify-center text-red-500"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: [0.9, 1.05, 0.95], opacity: 1 }}
        transition={{
          duration: 1.8,
          delay: 0.4,
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 0.6,
        }}
      >
        <HeartPulse className="w-8 h-8" />
      </motion.div>

      <div className="text-primary-600">
        <ECGWave delay={0.8} />
      </div>
    </div>
  );
}

/* -------------------- ROTATING TYPEWRITER TAGLINES (JS VERSION) -------------------- */

function RotatingTaglines() {
  const lines = [
    "The exam room, reimagined.",
    "Where healthcare becomes personal again.",
    "Letting you do what you do best — care for patients.",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = lines[index];
    let timeout;

    if (phase === "typing") {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 65); // typing speed
      } else {
        timeout = setTimeout(() => {
          setPhase("fading");
        }, 1500); // pause before fade
      }
    } else if (phase === "fading") {
      timeout = setTimeout(() => {
        setDisplayText("");
        setIndex((prev) => (prev + 1) % lines.length);
        setPhase("typing");
      }, 400); // fade duration
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase, index, lines]);

  return (
    <motion.div
      className="mt-4 flex items-center justify-center lg:justify-start"
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: phase === "fading" ? 0 : 1,
        y: phase === "fading" ? -8 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <p className="text-xl text-gray-700 min-h-[1.75rem]">
        {displayText}
        <motion.span
          className="inline-block w-1 ml-0.5 bg-gray-500 align-middle"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </p>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------- */

export default function Hero() {
  return (
    <div
      id="top"
      className="bg-gradient-to-b from-primary-600/5 via-white to-white"
    >
      <Section className="pt-12 sm:pt-16 lg:pt-24 pb-16">
        {/* 2-column layout on desktop, stacked on mobile */}
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT: Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Seismic Logo + Wordmark */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={logo}
                alt="Seismic Logo"
                className="h-14 w-auto object-contain"
              />
              <span className="text-4xl font-medium tracking-wide text-secondary-500">
                SEISMIC
              </span>
            </motion.div>

            {/* Constant headline */}
            <motion.h1
              className="text-4xl sm:text-5xl font-bold tracking-tight text-secondary-500 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Bringing healthcare back to the exam room.
            </motion.h1>

            {/* Rotating taglines */}
            <RotatingTaglines />

            {/* ECG */}
            <ECGStrip />

            {/* Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="/demo"
                className="rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-6 py-3 shadow"
              >
                Try SEISMIC
              </a>
              <a
                href="#features"
                className="rounded-2xl border px-6 py-3 text-secondary-500 hover:bg-gray-50"
              >
                Explore Features
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Video */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <HeroMedia />
          </div>
        </div>
      </Section>
    </div>
  );
}
