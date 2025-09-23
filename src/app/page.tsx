import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Featured from "./components/Featured";
import CTA from "./components/CTA";
import HER  from "./components/HER";
import TestimonialsSection from "./components/Testimonialssection";
import ResultsShowcase from "./components/ResultsShowcase"; // Adjust path if different
import Faq from "./components/Faq";
import TabSection from "./components/TabSection";
import Services from "./components/Services";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";


export default function Page() {
  return (
    
    <main className="bg-white">
      <Navbar />
           <HER />

      <Logos />
      <Services />
                            <ResultsShowcase />
            <Featured />


      <CTA />
                    <TabSection />

            <TestimonialsSection />
          <Hero />
                      <Faq />
                      <Footer />

    </main>
  );
}
