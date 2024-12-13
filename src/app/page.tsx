import { About } from "@/components/About";
import { AboutUs } from "@/components/AboutUs";
import { Benefits } from "@/components/Benefits";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Roadmap } from "@/components/Roadmap";
import { Section } from "@/components/Section";
import { Testimonial } from "@/components/Testimonial";
import { Counters } from "@/components/ui/Counters";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <About />
      <Counters />
      <Benefits />
      <AboutUs />
      <Testimonial />
      <Roadmap />
      <Section />
      <Faqs />
      <Footer />
    </div>
  );
}
