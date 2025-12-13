import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Pillars from "./sections/Pillars";
import HowItWorks from "./sections/HowItWorks";
import Standalone from "./sections/Standalone";
import Integrations from "./sections/Integrations";
import Security from "./sections/Security";
import Testimonials from "./sections/Testimonials";
import ScrollManager from "./components/ScrollManager";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollManager />
      <main className="flex-1">
        {/* Not in navbar, but fine to tag */}
        <section id="hero">
          <Hero />
        </section>

        <section id="features" className="scroll-mt-24 md:scroll-mt-28">
          <Features />
        </section>

        <section id="pillars" className="scroll-mt-24 md:scroll-mt-28">
          <Pillars />
        </section>

        <section id="how" className="scroll-mt-24 md:scroll-mt-28">
          <HowItWorks />
        </section>

        <section id="standalone" className="scroll-mt-24 md:scroll-mt-28">
          <Standalone />
        </section>

        <section id="integrations" className="scroll-mt-24 md:scroll-mt-28">
          <Integrations />
        </section>

        <section id="security" className="scroll-mt-24 md:scroll-mt-28">
          <Security />
        </section>

        {/*<section id="testimonials" className="scroll-mt-24 md:scroll-mt-28">
          <Testimonials />
        </section>*/}

        <section id="contact" className="scroll-mt-24 md:scroll-mt-28">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
