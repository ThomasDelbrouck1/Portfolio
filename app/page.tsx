import ParticleBackground from "@/components/effects/ParticleBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Activity from "@/components/sections/Activity";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import ProgressBar from "@/components/ui/ProgressBar";
import BackToTop from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <ParticleBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Activity />
          <Projects />
          <Stack />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}
