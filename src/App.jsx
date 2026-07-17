import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Booking from "./components/Booking";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll(".reveal"));

    // A gentle stagger within each section for the "cascade" feel.
    const groups = new Map();
    reveals.forEach((el) => {
      const section = el.closest("section, footer") || document.body;
      const arr = groups.get(section) || [];
      arr.push(el);
      groups.set(section, arr);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const section = el.closest("section, footer") || document.body;
          const idx = (groups.get(section) || []).indexOf(el);
          el.style.transitionDelay = `${Math.max(0, idx) * 90}ms`;
          el.classList.add("in");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <Faq />
        <Booking />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
