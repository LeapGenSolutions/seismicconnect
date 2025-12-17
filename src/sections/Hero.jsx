import { useState, useEffect, useMemo, useRef } from "react";
import Section from "../components/Section";
import HeroMedia from "../components/HeroMedia";
import { HeartPulse, BadgeCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/seismic-logo.png";
import amaLogo from "../assets/trust/ama.png";
import athenaLogo from "../assets/trust/athenamp.webp";
import hipaaLogo from "../assets/trust/hipaa.webp";


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
    <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
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
      <p className="text-xl text-gray-700 leading-snug min-h-[4.25rem] sm:min-h-[3.5rem] lg:min-h-[1.75rem]">
        {displayText}
      </p>
    </motion.div>
  );
}

/* -------------------- ANIMATED TRUST STRIP (MARQUEE) -------------------- */

function TrustStrip() {
  const items = useMemo(
    () => [
      { title: "Listed on athenahealth Marketplace", logoSrc: athenaLogo },
      { title: "Integrated with AMA", logoSrc: amaLogo },
      { title: "HIPAA Compliant", logoSrc: hipaaLogo },
    ],
    []
  );

  // Keep a lot of content so it always overflows on mobile too
  const loopItems = useMemo(
    () => [...items, ...items, ...items, ...items, ...items, ...items],
    [items]
  );

  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(1); // start non-zero

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const calc = () => {
      const el = trackRef.current;
      if (!el) return;

      // Wait for layout to settle (esp. after images load)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const w = el.scrollWidth || 0;

          // move by half track width (we render two halves in a single row visually)
          const next = Math.max(120, Math.floor(w / 2)); // fallback ensures motion
          setDistance(next);
        });
      });
    };

    calc();

    // Recalc after images load (important on mobile)
    window.addEventListener("load", calc);
    window.addEventListener("resize", calc);

    return () => {
      window.removeEventListener("load", calc);
      window.removeEventListener("resize", calc);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary-500/80">
            Trusted, Listed &amp; Integrated With
          </p>
        </div>

        <div className="mt-2 relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <motion.div
            ref={trackRef}
            className="flex gap-3 py-2"
            animate={{ x: [0, -distance] }}
            transition={{
              duration: distance / (isMobile ? 40 : 70), // px per second (mobile faster but not crazy)
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {/* Block A */}
            <div className="flex gap-3">
              {loopItems.map(({ title, logoSrc }, idx) => (
                <motion.div
                  key={`${title}-${idx}`}
                  className="group shrink-0 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-3 shadow-sm"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-28 sm:w-32 rounded-xl bg-white border border-gray-200 flex items-center justify-center px-2">
                      <img
                        src={logoSrc}
                        alt={title}
                        className="h-6 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                        loading="lazy"
                        draggable={false}
                        onLoad={() => {
                          // force a re-measure after each image loads
                          const el = trackRef.current;
                          if (!el) return;
                          const w = el.scrollWidth || 0;
                          setDistance(Math.max(120, Math.floor(w / 2)));
                        }}
                      />
                    </div>

                    <p className="text-sm font-semibold text-secondary-500 whitespace-nowrap">
                      {title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Block B (duplicate for seamless loop) */}
            <div className="flex gap-3">
              {loopItems.map(({ title, logoSrc }, idx) => (
                <motion.div
                  key={`${title}-dup-${idx}`}
                  className="group shrink-0 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur px-4 py-3 shadow-sm"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-28 sm:w-32 rounded-xl bg-white border border-gray-200 flex items-center justify-center px-2">
                      <img
                        src={logoSrc}
                        alt={title}
                        className="h-6 w-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>

                    <p className="text-sm font-semibold text-secondary-500 whitespace-nowrap">
                      {title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */

export default function Hero() {
  return (
    <div 
      id="top" 
      className="bg-gradient-to-b from-primary-600/5 via-white to-white"
    >
      {/* Reduced top padding so logo/title doesn't start too low */}
      <Section className="pt-10 sm:pt-12 lg:pt-16 pb-10">
        {/* 2-column layout on desktop, stacked on mobile */}
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* LEFT: Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Seismic Logo + Wordmark */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mb-6"
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
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {/* <a
                href="/demo"
                className="rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-6 py-3 shadow"
              >
                Try SEISMIC
              </a> */}
              <a
                href="#contact"
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
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <HeroMedia />
          </div>
        </div>

        {/* Pull trust strip up so it’s visible within the hero */}
        <div className="mt-6 lg:mt-8">
          <TrustStrip />
        </div>
      </Section>
    </div>
  );
}
