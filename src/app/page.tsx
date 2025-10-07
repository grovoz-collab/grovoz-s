import Hero from "./components/Hero";
import Featured from "./components/Featured";
import HER  from "./components/HER";
import TestimonialsSection from "./components/Testimonialssection";
import ResultsShowcase from "./components/ResultsShowcase"; // Adjust path if different
import Faq from "./components/Faq";
import TabSection from "./components/TabSection";
import Services from "./components/Services";
import LandingPagecontactForm from "./components/LandingPageContactForm";





export default function Page() {
  return (
    
    <main className="bg-white">
           <HER />
      <Services />
                            <ResultsShowcase />
            <Featured />

                    <TabSection />
            <TestimonialsSection />
          <Hero />
                                <LandingPagecontactForm />
                      <Faq />

    </main>
  );
}
