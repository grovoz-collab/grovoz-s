import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Featured from "./components/Featured";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import HER  from "./components/HER";
import TestimonialsSection from "./components/Testimonialssection";
import ResultsShowcase from "./components/ResultsShowcase"; // Adjust path if different
import Servicessection from  "./components/Servicessection";
import Faq from "./components/Faq";
import TabSection from "./components/TabSection";



export default function Page() {
  return (
    
    <main className="bg-white">
      
      <Navbar />
            <HER />

      <Logos />
      <Servicessection />
              <TabSection />

      <CTA />
            <Featured />
            <TestimonialsSection />
          <Hero />
                      <ResultsShowcase />
                      <Faq />

      <Footer />
    </main>
  );
}
