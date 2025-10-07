"use client";
import React, { useState } from 'react';
import LandingPageContactForm from '../contact/LandingPageContactForm';
import { motion } from 'framer-motion';
import TestimonialsSection from '../components/Testimonialssection';
import ROIcalculatorCTA from './ROICalculatorCTA';
import { 
    Search, Rocket, ClipboardList, Users, Target} from 'lucide-react';

// --- Animation Helper ---
const fadeInUp = {
    initial: { opacity: 0, y: 30 }, 
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6 }
};

// FIX: Update the FaqItem interface to use 'q' and 'a'
// 1. Define the structure for a single FAQ item object
interface FaqItem {
    q: string; // Changed from 'question' to 'q'
    a: string; // Changed from 'answer' to 'a'
}

// 2. Define the props structure for the component
interface GradientFAQItemProps {
    item: FaqItem;
    index: number;
    // activeFaq can be a number (index) or null (nothing active)
    activeFaq: number | null; 
    // toggleFaq is a function that takes a number (index) and returns nothing (void)
    toggleFaq: (index: number) => void;
}


// --- FAQ Component with Gradient Style ---
const GradientFAQItem: React.FC<GradientFAQItemProps> = ({ item, index, activeFaq, toggleFaq }) => {
    // This component applies the desired gradient style to the question header.
    const isActive = activeFaq === index;
    const borderStyle = "border-2 border-transparent bg-clip-padding backdrop-blur-sm shadow-xl";
    const backgroundStyle = isActive ? "bg-white/95" : "bg-white/90 hover:bg-white"; 
    
    // This line is now correct because item is typed with 'a'
    const contentHtml = item.a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    return (
        <div
            className={`rounded-xl overflow-hidden transition-all duration-300 ${backgroundStyle} ${borderStyle}`}
            style={{
                boxShadow: isActive ? '0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 5px 10px -5px rgba(147, 51, 234, 0.4)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            }}
        >
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleFaq(index);
                }}
                className="w-full text-left flex justify-between items-center text-lg font-semibold p-6 transition-colors"
                style={{ 
                    background: isActive ? 'linear-gradient(90deg, #3b82f61a, #9333ea1a)' : 'transparent',
                }}
            >
                <span 
                    className={`leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-800 hover:text-blue-600'}`}
                >
                    {item.q} {/* Accessing 'q' is now also correct */}
                </span>
                <span className={`transform transition-transform duration-300 ml-4 flex-shrink-0 ${isActive ? 'rotate-180 text-blue-600' : 'rotate-0 text-gray-400'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            
            {isActive && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-700 border-t border-gray-200"
                >
                    <p className="pt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </motion.div>
            )}
        </div>
    );
};



// --- Main Application Component ---

export default function App() {
    // --- FAQ State and Toggle Logic ---
    // FIX: Add type to useState. activeFaq should be number | null
    const [activeFaq, setActiveFaq] = useState<number | null>(null); 

    // FIX: Add type to toggleFaq parameter. It should be 'index: number'
    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };
    // ------------------------------------------

    // FAQ Data (retained from previous response)
    const FAQData: FaqItem[] = [ // FIX: Explicitly type the array as FaqItem[]
        {
            q: "What digital marketing services does Grovoz Marketing provide?",
            a: "Grovoz Marketing operates as a trusted **authority** in search engine optimization to **improve SEO** rankings, Google Ads management, Facebook advertising, content marketing, and email automation. We provide website optimization and marketing analytics to **boost conversions** across all channels with dedicated **technical support**. Each service delivers an exceptional **experience** focused on measurable performance improvements that drive **business growth**. Our strategies connect directly to lead generation and customer acquisition through comprehensive reporting and responsive **customer service**."
        },
        {
            q: "What investment levels should I expect for my digital marketing project?",
            a: "Digital marketing budgets typically range from **$3,000 to $25,000+ monthly** depending on your market reach and regional competitive landscape. Businesses in markets like **Dubai** and other international locations often require customized approaches for effective market penetration. Request a quote during your consultation for specific budget recommendations. Our **experienced staff** provides thorough analysis of your goals, current performance, and market conditions with complete **transparency**."
        },
        {
            q: "How is Grovoz Marketing different from other agencies?",
            a: "We operate as the recognized **authority** on performance accountability to ensure real **business growth**. Specific metrics get established before campaign launch, and monthly reports demonstrate exactly how your marketing investment **boosts conversions** and drives revenue. Our **certified staff** maintains current expertise across major platforms, ensuring implementation of strategies that **improve SEO** performance. We provide ongoing **technical support** and **customer service** that maximizes your return on investment."
        },
        {
            q: "When will I see results from my digital marketing project?",
            a: "Based on our **experience** and **authority** in the field, paid advertising campaigns typically show initial results within 2-4 weeks. SEO strategies to **improve SEO** rankings produce measurable organic traffic improvements over 3-6 months with proper **technical support**. Timeline variations depend on your starting point and competitive environment. We establish realistic expectations when you schedule a consultation and provide progress updates throughout your project with dedicated **customer service**."
        },
        {
            q: "Which types of businesses does Grovoz Marketing work with?",
            a: "Grovoz Marketing works with established businesses generating annual revenues exceeding **$500,000**. We serve businesses **nationwide and internationally**, including companies in **Dubai** and other regional markets across professional services, manufacturing, healthcare, and technology sectors. Our **experienced staff** provides **technical support** for B2B companies that benefit significantly from our lead nurturing strategies. B2C businesses achieve strong returns through our customer retention campaigns designed to maximize **business growth** with exceptional **customer service**."
        },
    ];

    const HeroSection = () => (
        <section
            id="seo-hero"
            className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden min-h-[500px]"
        >
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <div>
                    <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 rounded-full text-blue-300 font-medium mb-6">
                        <Search className="w-5 h-5 mr-2" />
                        Grovoz Contact Us
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Let&apos;s Build Something Great Together<span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">with Grovoz</span>.
                    </h1>
                    <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
Boost Your Business Growth with proven digital marketing strategies from an authority in the field. Get your free Digital Marketing Strategy Review from our expert team. We help businesses nationwide improve SEO, boost conversions, and achieve measurable results with complete transparency and exceptional customer service.                    </p>
                
                </div>
            </div>
        </section>
    );

    const ProcessSection = () => {
        const steps = [
            { icon: ClipboardList, title: "Initial Review", description: "Our staff analyzes your information and researches your business." },
            { icon: Users, title: "Strategy Call", description: "We schedule a consultation to discuss your growth objectives and experience." },
            { icon: Target, title: "Custom Proposal", description: "We send a detailed quote with specific recommendations and pricing." },
            { icon: Rocket, title: "Implementation", description: "We start your project within two weeks with full technical support." }
        ];

        return (
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h3 
                        {...fadeInUp} 
                        className="text-3xl font-bold text-gray-800 text-center mb-12"
                    >
                        What happens after your inquiry?
                    </motion.h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                whileHover={{ 
                                    scale: 1.03,
                                    y: -6,
                                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.5)",
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                className="text-center p-6 rounded-xl border border-blue-100 bg-white shadow-md cursor-pointer"
                            >
                                <div className="mx-auto w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                                    <step.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h4>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    // FIX: Add type to ROIAndFAQSection props
    interface ROIAndFAQSectionProps {
        activeFaq: number | null;
        toggleFaq: (index: number) => void;
    }

    const ROIAndFAQSection: React.FC<ROIAndFAQSectionProps> = ({ activeFaq, toggleFaq }) => (
        <motion.section {...fadeInUp} className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                
        

                {/* FAQ Section */}
                <h3 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Frequently Asked Questions</h3>
                <div className="max-w-4xl mx-auto space-y-4">
                    {/* Render new Gradient FAQ Items */}
                    {FAQData.map((item, index) => (
                        <GradientFAQItem 
                            key={index} 
                            item={item} 
                            index={index} 
                            activeFaq={activeFaq} 
                            toggleFaq={toggleFaq} 
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );


    

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <HeroSection />
            <ProcessSection />
            <LandingPageContactForm /> 
            <ROIAndFAQSection activeFaq={activeFaq} toggleFaq={toggleFaq} />
            <TestimonialsSection />

            <ROIcalculatorCTA />
        </div>
    );
}