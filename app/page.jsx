import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
