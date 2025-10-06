"use client";
import React, { useState } from 'react';
import  LandingPageContactForm  from '../contact/LandingPageContactForm';
import { motion } from 'framer-motion';
import TestimonialsSection from '../components/Testimonialssection';
import ROIcalculatorCTA from './ROICalculatorCTA';
import { 
    Search, Mail, Phone, MapPin, Rocket, ClipboardList, Users, Target, 
    // Social Icons
    Linkedin, Facebook, Twitter, Instagram 
} from 'lucide-react';

// --- UI Helpers (Ensuring single-file compatibility) ---

const inputClass = "w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:ring-blue-500 focus:border-blue-500 transition duration-150 outline-none";
const textareaClass = `${inputClass} resize-none`;

const Button = ({ children, className = '', onClick, type = 'button', disabled, variant = 'default' }) => {
    const baseStyle = 'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-slate-900';
    
    let variantStyle = 'bg-gradient-to-r from-blue-600 to-purple-600 to-cyan-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg shadow-blue-500/30';
    if (variant === 'outline') {
      variantStyle = 'bg-transparent text-white border border-white/30 hover:bg-white/10 focus:ring-white/50';
    }
    if (variant === 'cta-alt') {
      variantStyle = 'bg-white text-blue-700 hover:bg-gray-100 transition-colors';
    }
 
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyle} ${variantStyle} ${className}`}
      >
        {children}
      </button>
    );
};

const SelectComponent = ({ name, value, onChange, placeholder, options, required = false }) => {
    const isSelected = !!value; 

    return (
        <div className="relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={`${inputClass} appearance-none pr-10 h-[52px] ${isSelected ? 'text-white' : 'text-white/60'}`}
            >
                <option value="" disabled className="bg-slate-900 text-white/60">{placeholder}</option>
                {options.map(o => (
                    <option key={o.value} value={o.value} className="bg-slate-900 text-white">{o.label}</option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/60">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    );
};

// --- Animation Helper ---
const fadeInUp = {
    initial: { opacity: 0, y: 30 }, 
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6 }
};




// --- FAQ Component with Gradient Style ---
const GradientFAQItem = ({ item, index, activeFaq, toggleFaq }) => {
    // This component applies the desired gradient style to the question header.
    const isActive = activeFaq === index;
    const borderStyle = "border-2 border-transparent bg-clip-padding backdrop-blur-sm shadow-xl";
    const backgroundStyle = isActive ? "bg-white/95" : "bg-white/90 hover:bg-white"; 
    
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
                    {item.q}
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
    const [activeFaq, setActiveFaq] = useState(null); 

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };
    // ------------------------------------------

    // FAQ Data (retained from previous response)
    const FAQData = [
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
Boost Your Business Growth with proven digital marketing strategies from an authority in the field. Get your free Digital Marketing Strategy Review from our expert team. We help businesses nationwide improve SEO, boost conversions, and achieve measurable results with complete transparency and exceptional customer service.                    </p>
                 
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

    const ROIAndFAQSection = ({ activeFaq, toggleFaq }) => (
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

                            <LandingPageContactForm /> 

    
    // Contact Section component 
    const ContactSection = () => (
        <motion.section {...fadeInUp} id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-extrabold text-white mb-6">
                        Contact Grovoz Marketing - <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Schedule Your Free Consultation</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-4xl mx-auto">
                        Fill out the detailed form to connect with our experienced team and receive a prompt response.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Form Component (Takes 2/3 width) - Now using the new component name */}

                    {/* Alternative Contact Info and Resources (Takes 1/3 width) */}
                    <div
                        className="space-y-8 lg:col-span-1"
                    >
                        {/* Prefer to Contact Us Another Way? */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">Connect Directly</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                    <div>
                                        <div className="text-white font-semibold">Email: contact@grovozmarketing.com</div>
                                        <div className="text-slate-300 text-sm">Direct inquiry processing</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                    <Phone className="w-6 h-6 text-purple-400" />
                                    <div>
                                        <div className="text-white font-semibold">Phone: +1 (555) 123-4567</div>
                                        <div className="text-slate-300 text-sm">We provide full technical support across all time zones.</div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/20">
                                    <div className="text-white font-semibold mb-2">Live Chat / Booking</div>
                                    <p className="text-sm text-slate-300 mb-3">Available Monday-Friday, 9:00 AM - 5:00 PM for immediate **customer service**.</p>
                                    <Button onClick={() => console.log('Opening Calendar Link')} variant="outline" className="text-sm px-4 py-1 border-blue-400 text-blue-400 hover:bg-blue-400/10">
                                        Book a Meeting (Calendar Integration)
                                    </Button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Grovoz Marketing Office & Service Areas */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white pt-4 border-t border-white/20">Service Areas</h3>
                            <div className="flex items-start gap-3 text-slate-300">
                                <MapPin className="w-5 h-5 flex-shrink-0 text-cyan-400 mt-1" />
                                <p className="text-sm">
                                    **Service Areas:** Serving businesses **nationwide and internationally** with **authority** in digital marketing solutions.
                                    <br />
                                    **Regional Coverage:** Local, national, and international markets including **Dubai** and surrounding regions.
                                </p>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="space-y-4 pt-4 border-t border-white/20">
                            <h3 className="text-2xl font-bold text-white">Follow Our Authority</h3>
                            <div className="flex space-x-4">
                                {/* Linkedin */}
                                <motion.a 
                                    href="#" // Replace with actual LinkedIn URL
                                    target="_blank" 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white/10 rounded-full hover:bg-blue-600 transition-colors"
                                >
                                    <Linkedin className="w-6 h-6 text-white" />
                                </motion.a>
                                {/* Facebook */}
                                <motion.a 
                                    href="#" // Replace with actual Facebook URL
                                    target="_blank" 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white/10 rounded-full hover:bg-blue-800 transition-colors"
                                >
                                    <Facebook className="w-6 h-6 text-white" />
                                </motion.a>
                                {/* Twitter */}
                                <motion.a 
                                    href="#" // Replace with actual Twitter URL
                                    target="_blank" 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white/10 rounded-full hover:bg-sky-400 transition-colors"
                                >
                                    <Twitter className="w-6 h-6 text-white" />
                                </motion.a>
                                {/* Instagram */}
                                <motion.a 
                                    href="#" // Replace with actual Instagram URL
                                    target="_blank" 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 bg-white/10 rounded-full hover:bg-purple-500 transition-colors"
                                >
                                    <Instagram className="w-6 h-6 text-white" />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
<ROIcalculatorCTA />
    const Footer = () => (
        <footer className="bg-slate-900 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 space-y-4">
                <div className="flex justify-center space-x-6 text-sm">
                    <a href="#seo-hero" className="hover:text-white transition-colors">Home</a>
                    <a href="#" className="hover:text-white transition-colors">Services</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
                <p className="text-sm">
                    © {new Date().getFullYear()} Grovoz Marketing. All rights reserved. Delivering **business growth** through authority in digital strategy.
                </p>
            </div>
        </footer>
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
