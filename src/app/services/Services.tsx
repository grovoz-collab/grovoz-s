'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
    Search, Users, Target, Mail, FileText, MonitorSmartphone, TrendingUp, ShieldCheck, LineChart,
    HeartHandshake, Building, Briefcase, 
    Stethoscope, ShoppingCart, Factory, Database, Milestone, Layers, BrainCircuit, Lock, Award,
    ChevronDown, Users2, BarChart2, CloudCog, Shield, X, LucideProps
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react'; // Make sure these are imported for the icon type

// Define the interface for the details array items
interface ServiceDetail {
    title: string;
    text: string;
}
type WhyGrovozTabKey = keyof typeof whyGrovozTabs;

// Define the complete interface for a Service item
interface ServiceItem {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    title: string;
    question: string;
    description: string;
    buttons: string[];
    // ✅ ADD THE OPTIONAL DETAILS PROPERTY
    details?: ServiceDetail[]; 
}
interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}
interface FormPopupProps {
    isVisible: boolean;
    onClose: () => void;
    heading: string;
}
// Animation variants for sections
const fadeInUp: Variants = {
    initial: { 
        opacity: 0, 
        y: 40 
    },
    whileInView: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: "easeOut" 
        }
    },
};

// Data for the interactive services section (Unchanged)
const services: ServiceItem[] = [
    { 
        icon: Search, 
        title: "SEO & GEO Services", 
        question: "INCREASE MY ORGANIC RANKING ON GOOGLE?",
        description: "Ranking on page one of Google or AI Engines isn't a luxury—it's a baseline. Our SEO strategies are engineered to lift your website into top positions with technically sound, content-rich optimization, keyword targeting, and authoritative link-building.",
        buttons: ["TECHNICAL SEO", "LOCAL SEO", "KEYWORD STRATEGY"]
    },
    { 
        icon: Users, 
        title: "Social Media Marketing", 
        question: "GENERATE MORE BUSINESS LEADS?",
        description: "PPC and social ads are powerful tools for reaching potential customers. While pay-per-click advertising places your brand at the forefront of search engine results, social ads allow you to leverage the wide reach and targeting options of social media platforms.",
        buttons: ["SOCIAL MEDIA MARKETING", "SEARCH ENGINE OPTIMIZATION", "GOOGLE ADS"]
    },
    { 
        icon: Target, 
        title: "PPC Advertising", 
        question: "DRIVE TRAFFIC TO MY WEBSITE?",
        description: "A well-built PPC campaign multiplies leads without ballooning the budget. We build high-converting ad campaigns with real-time performance tracking on Google, Bing, and social platforms that deliver measurable results.",
        buttons: ["GOOGLE ADS", "BING ADS", "SOCIAL ADS"]
    },
    { 
        icon: Mail, 
        title: "Email Marketing", 
        question: "REVAMP MY WEBSITE?",
        description: "Our email marketing strategies go beyond newsletters, nurturing leads and recovering abandoned carts through personalized journeys. We create automated workflows that drive customer retention and maximize lifetime value.",
        buttons: ["EMAIL AUTOMATION", "NEWSLETTER DESIGN", "LEAD NURTURING"]
    },
    { 
        icon: FileText, 
        title: "Content Strategy", 
        question: "INCREASE MY PRESENCE ON SOCIAL MEDIA?",
        description: "Strategically crafted content that ranks on search engines & AI platforms while aligning with your business goals. We create valuable content that builds trust with your audience and drives conversions across every channel.",
        buttons: ["CONTENT CREATION", "SEO COPYWRITING", "BLOG STRATEGY"]
    },
    { 
        icon: MonitorSmartphone, 
        title: "Website Development", 
        question: "OPTIMIZE MY WEBSITE FOR MOBILE?",
        description: "Your website is your 24/7 salesperson. We build mobile-responsive, SEO-friendly websites that elevate user experience, reflect your brand identity, and are optimized for visibility and conversions.",
        buttons: ["WEB DESIGN", "MOBILE OPTIMIZATION", "UX/UI DESIGN"]
    },
    { 
        icon: TrendingUp, 
        title: "Conversion Optimization", 
        question: "IMPROVE MY CONVERSION RATES?",
        description: "Turn more visitors into customers using A/B testing, UI/UX enhancements, and behavioral insights. We dissect user behavior, test layouts, and implement conversion science to directly improve sales and leads.",
        buttons: ["A/B TESTING", "LANDING PAGE OPTIMIZATION", "CRO STRATEGY"]
    },
    { 
        icon: ShieldCheck, 
        title: "Branding & Presence", 
        question: "BUILD A STRONGER BRAND IDENTITY?",
        description: "We craft powerful visual identities and messaging systems that resonate with your audience. Our branding solutions create loyalty and translate fluently across all digital platforms and touchpoints.",
        buttons: ["BRAND IDENTITY", "LOGO DESIGN", "BRAND STRATEGY"]
    }
];

// Data for the "Why Grovoz" tab section (Unchanged)
const whyGrovozTabs = {
    expertise: {
        title: "Proven Expertise",
        icon: Award,
        features: [
            { icon: Award, title: "Certified Specialists", description: "Google-certified PPC and SEO experts managing million-dollar campaigns." },
            { icon: Users2, title: "Creative Teams", description: "Driving viral social media campaigns and crafting compelling brand stories." },
            { icon: MonitorSmartphone, title: "High-Performance Development", description: "Building seamless, high-performance web and mobile platforms." },
        ]
    },
    transparency: {
        title: "Transparent Collaboration",
        icon: Users,
        features: [
            { icon: BarChart2, title: "Detailed Performance Reporting", description: "Regular, easy-to-understand reports with clear performance metrics." },
            { icon: HeartHandshake, title: "Dedicated Support & Partnership", description: "A collaborative approach with direct access to your dedicated account manager." },
            { icon: FileText, title: "Clear Strategy Documentation", description: "Honest, data-driven recommendations and clear documentation of all strategies." },
        ]
    },
    technology: {
        title: "Cutting-Edge Technology",
        icon: CloudCog,
        features: [
            { icon: BrainCircuit, title: "AI-Powered Optimization", description: "Using machine learning for bid management and advanced campaign optimization." },
            { icon: Search, title: "Advanced Analysis Tools", description: "Leveraging top-tier keyword research, competitor analysis, and heat mapping software." },
            { icon: Layers, title: "Integrated Marketing Platforms", description: "Utilizing marketing automation and CDPs with custom, real-time data dashboards." },
        ]
    },
    security: {
        title: "Data Privacy & Protection",
        icon: Shield,
        features: [
            { icon: Lock, title: "Comprehensive Compliance", description: "Full GDPR & CCPA compliance with secure data handling and encrypted storage." },
            { icon: ShieldCheck, title: "Advanced Security Infrastructure", description: "Regular security audits, vulnerability assessments, and restricted access controls." },
            { icon: Database, title: "Complete Data Segregation", description: "Ensuring complete client confidentiality with robust backup and disaster recovery systems." },
        ]
    }
};

// Data for the industries section (Unchanged)
const industries = [
    { icon: Stethoscope, title: "Healthcare" },
    { icon: Building, title: "Real Estate" },
    { icon: Briefcase, title: "B2B" },
    { icon: ShoppingCart, title: "Retail & E-commerce" },
    { icon: Factory, title: "Manufacturing" },
];

// Data for the FAQ section (Unchanged)
const faqs = [
    { q: "How do your experts approach each new project?", a: "Every project begins with thorough research. Our experts conduct comprehensive audits, market research, and competitive analysis before developing customized strategies aligned with your goals." },
    { q: "What kind of traffic increases can we expect?", a: "Results vary, but clients typically see 50-200% traffic increases within 6 months through our combined SEO and PPC efforts." },
    { q: "Are your digital marketing services affordable?", a: "We offer flexible, scalable solutions for different budgets. Our focus is on generating a strong ROI, making our services a valuable investment for growth." },
    { q: "What makes your link building approach different?", a: "We focus on earning high-quality, relevant backlinks through genuine outreach and valuable content creation, avoiding risky, low-quality tactics." },
];

// Data for the methodology section (Unchanged)
const methodologySteps = [
    { icon: Database, title: "Phase 1: Research & Planning", description: "Comprehensive market research, competitor analysis, and technical audits to build a winning strategy." },
    { icon: Milestone, title: "Phase 2: Precision Implementation", description: "Integrated omnichannel campaigns executed with detailed project management and quality assurance." },
    { icon: LineChart, title: "Phase 3: Continuous Optimization", description: "Ongoing performance analysis, A/B testing, and data-driven refinements for maximum sales impact." }
];

// Reusable Accordion Item component (Unchanged)
const AccordionItem = ({ question, answer, isOpen, onToggle }: AccordionItemProps) => (
    <div className="border-b border-slate-200">
        <button
            onClick={onToggle}
            className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-slate-800"
        >
            <span>{question}</span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-6 h-6 text-blue-500" />
            </motion.div>
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <p className="pb-5 text-slate-600">{answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

// ==========================================================
// CORRECTED: Form Popup Component with full submission logic
// ==========================================================
const FormPopup = ({ isVisible, onClose, heading }: FormPopupProps) => {
    // 1. State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        service: heading, // Initialized with the service name
    });
    
    // 2. State for submission status (Set error type to string | null)
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null); // ✅ CORRECTED TYPE

    // Reset service on heading change (for seamless switching between service buttons)
    useEffect(() => {
        setFormData(prev => ({ ...prev, service: heading }));
        setSuccess(false); // Reset success state when a new modal is opened
        setError(null);
    }, [heading]);


    // Update form data on change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    
    // Handle form submission and API call
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Ensure the service field is always the heading prop before sending
        const payload = { ...formData, service: heading };

        try {
            const response = await fetch('/api/contact', { // Your API route
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setSuccess(true);
                // Reset form fields after success
                setFormData({ name: '', email: '', phone: '', website: '', message: '', service: heading });
                
                // Optional: Automatically close the success message after 4 seconds
                setTimeout(() => {
                    // Only close the modal if the user hasn't closed it manually
                    if (isVisible) {
                        onClose();
                        setSuccess(false); // Reset success state
                    }
                }, 4000);
            } else {
                // Handle non-200 responses (e.g., API validation errors)
                const errorData = await response.json();
                
                // ✅ FIX 1: Use Type Assertion to access .error property
                const errorString = (errorData as { error?: string }).error; 
                
                // ✅ FIX 2: Use the existing setError from the component state
                setError(errorString || 'Failed to submit form. Check required fields.');
            }            
        } catch (err) {
            console.error('API call failed:', err); 
            // Type assertion for 'err' might be needed if you get an error here
            setError('A network error occurred. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose} 
            >
                <motion.div
                    className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden transform"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={e => e.stopPropagation()} 
                >
                    {/* Header with Gradient Background */}
                    <div className="bg-gradient-to-r from-blue-600 to-pink-600 p-6 text-white">
                        <h3 className="text-3xl font-extrabold mb-1">
                            Schedule a Consultation
                        </h3>
                        <h4 className="text-lg font-light opacity-90">
                            Service Focus: {heading}
                        </h4>
                    </div>

                    <button 
                        onClick={onClose} 
                        className="absolute top-3 right-3 text-white hover:text-pink-200 transition p-2 rounded-full"
                        aria-label="Close Form"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    
                    <div className="p-8">
                        
                        {/* Conditional Rendering of Success/Form */}
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-10 px-4 bg-green-50 border border-green-200 rounded-lg"
                            >
                                <ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-4"/>
                                <h4 className="text-2xl font-bold text-green-700 mb-2">Success! Your Inquiry Is Sent.</h4>
                                <p className="text-lg text-green-600">
                                    Thank you! We have received your request for {heading}. A specialist will be in touch within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <p className="text-slate-600 mb-6 text-sm">Fill out the form below and our team will be in touch within 24 hours.</p>

                                {/* Form Fields */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-1">Name <span className="text-red-500">*</span></label>
                                        <input type="text" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-1">Work Email <span className="text-red-500">*</span></label>
                                        <input type="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" placeholder="you@company.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-1">Phone Number</label>
                                        <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" placeholder="(555) 123-4567" />
                                    </div>
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-semibold text-slate-800 mb-1">Website Address</label>
                                        <input type="url" id="website" value={formData.website} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" placeholder="https://yourwebsite.com" />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-1">Project Details</label>
                                   <textarea id="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition" placeholder={`I need help with ${heading.toLowerCase()}...`}></textarea>
                                </div>
                                
                                {/* Display Error Message */}
                                {error && (
                                    <p className="text-red-600 text-sm font-medium pt-2">❌ {error}</p>
                                )}

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Sending...' : 'Get a Free Project Analysis'}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
// Main component for the landing page
export default function GrovozMarketingPage() {
    const [activeTab, setActiveTab] = useState<WhyGrovozTabKey>('expertise');
    const [openFaq, setOpenFaq] = useState<number | null>(0); 
    const [activeService, setActiveService] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // State for the popup
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalHeading, setModalHeading] = useState("");

    // Function to open the modal
   const openModal = (heading: string) => {
    setIsModalOpen(true);
    setModalHeading(heading);
    // Pause auto-cycle when modal is open
    if (timerRef.current) {
        clearInterval(timerRef.current);
    }
};

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setModalHeading("");
        // Restart auto-cycle when modal is closed
        startTimer();
    };
    
    // Auto-cycle logic (modified to be a callable function)
     const startTimer = () => {
        // The assignment now correctly matches the ref type
        timerRef.current = setInterval(() => { 
            setActiveService(prevIndex => (prevIndex + 1) % services.length);
        }, 3000) ; // Add a cast to number to ensure compatibility
    };

    useEffect(() => {
        startTimer();

        // Cleanup on unmount
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const handleServiceClick = (index: number) => { 
        // Clear the timer and set the active service
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        setActiveService(index);
    };

    return (
        <div className="bg-slate-50 antialiased">
            {/* Form Popup component */}
            <FormPopup 
                isVisible={isModalOpen} 
                onClose={closeModal} 
                heading={modalHeading} 
            />

            {/* Interactive Services Section - Wide Layout with Expanded Details */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-600 to-blue-600"></div>
                <div className="relative z-10">
                    <div className="max-w-[90rem] mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid lg:grid-cols-[1fr_2fr_1fr] min-h-[650px] bg-black/30">
                            
                            {/* Left Sidebar */}
                            <div 
                                className="p-12 border-r border-white/10"
                                            onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
                                onMouseLeave={startTimer}
                            >
                                <h2 className="text-3xl font-bold text-white mb-8 tracking-wider">Grovoz Services</h2>
                                <nav className="space-y-3">
                                    {services.map((service, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleServiceClick(index)}
                                            className={`block w-full text-left py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ${
                                                activeService === index 
                                                    ? 'bg-white/20 text-white font-bold' 
                                                    : 'text-pink-100 hover:text-white hover:bg-white/10'
                                            }`}
                                        >
                                            • {service.question}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Main Content Area */}
                            <div className="p-12 flex flex-col justify-center">
                                <motion.div
                                    key={activeService}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-white"
                                >
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                        {services[activeService].question}
                                    </h3>
                                    <p className="text-pink-100 text-lg leading-relaxed mb-6">
                                        {services[activeService].description}
                                    </p>

                                    {/* Buttons - UPDATED onClick to openModal */}
                                    <div className="flex flex-wrap gap-4 mb-6">
                                        {services[activeService].buttons.map((button, btnIndex) => (
                                            <motion.button
                                                key={btnIndex}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => openModal(button)}
                                                className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full hover:bg-white/30 transition-all duration-300"
                                            >
                                                {button}
                                            </motion.button>
                                        ))}
                                    </div>

                                    {/* Expanded Details */}
                                    <div className="flex flex-col gap-4 mt-4">
                                        {services[activeService].details?.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                                className="bg-white/10 p-5 rounded-xl border border-white/20"
                                            >
                                                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                                <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Icon Area (Unchanged) */}
                            <div className="p-12 flex items-center justify-center">
                                <motion.div
                                    key={activeService}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative"
                                >
                                    {/* Background Circle */}
                                    <div className="w-44 h-44 rounded-full border-2 border-dashed border-white/40 flex items-center justify-center relative">
                                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                            {React.createElement(services[activeService].icon, { className: "w-12 h-12 text-pink-600" })}
                                        </div>

                                        {/* Animated dots */}
                                        <motion.div className="absolute top-10 right-10 w-3 h-3 bg-white rounded-full"
                                            animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <motion.div className="absolute bottom-14 left-8 w-2 h-2 bg-white/70 rounded-full"
                                            animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                        />
                                        <motion.div className="absolute top-20 left-10 w-2 h-2 bg-white/50 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                        />
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* Why Grovoz Tabs Section (Unchanged) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                        <motion.div // ✅ ADD the viewport prop here:
                            {...fadeInUp} 
                            viewport={{ once: true }} 
                            className="text-center mb-16"
                        >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Grovoz Expert Advantage</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">Discover why industry leaders trust us to deliver results.</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center mb-10 gap-2 md:gap-4 p-2 bg-slate-100 rounded-full">
                          { (Object.keys(whyGrovozTabs) as (keyof typeof whyGrovozTabs)[]).map(key => {
                            const tab = whyGrovozTabs[key];
                            return (
                                <button 
                                    key={key} 
                                    onClick={() => setActiveTab(key)} 
                                    className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-colors duration-300 ${
                                        activeTab === key ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                                    }`}
                                >
                                    {activeTab === key && (
                                        <motion.div 
                                            layoutId="activePill" 
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full z-0"
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        <tab.icon className="w-5 h-5" />
                                        {tab.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab} 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -20 }} 
                            transition={{ duration: 0.4 }}
                        >
                            <div className="grid md:grid-cols-3 gap-8 mt-8">
                                {whyGrovozTabs[activeTab].features.map(feature => (
                                    <div key={feature.title} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-500">
                                                <feature.icon className="w-6 h-6"/>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-slate-800">{feature.title}</h4>
                                                <p className="text-slate-500">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Methodology Section (Unchanged) */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-20">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Methodology for Driving Sales</h2>
                                <p className="text-xl text-slate-600 max-w-3xl mx-auto">A structured, data-driven approach designed for maximum impact and continuous growth.</p>
                    </motion.div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" aria-hidden="true"></div>
                        {methodologySteps.map((item, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0 }} 
                                whileInView={{ opacity: 1 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.8, delay: index * 0.2 }} 
                                className="relative flex md:items-center mb-16 md:mb-24"
                            >
                                <div className="flex-shrink-0 w-20 h-20 bg-white rounded-full text-blue-600 flex items-center justify-center text-lg z-10 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-lg border-4 border-slate-50">
                                    <item.icon className="w-10 h-10"/>
                                </div>
                                <div className={`w-full md:w-[calc(50%-4rem)] p-8 bg-white rounded-2xl shadow-xl border border-slate-200 ml-10 md:ml-0 ${
                                    index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                                }`}>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* FAQ and Industries Section (Unchanged) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.div {...fadeInUp} className="mb-10">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-lg text-slate-500">Quick answers to common questions about our services.</p>
                        </motion.div>
                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <AccordionItem 
                                    key={index} 
                                    question={faq.q} 
                                    answer={faq.a} 
                                    isOpen={openFaq === index} 
                                    onToggle={() => setOpenFaq(openFaq === index ? null : index)} 
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <motion.div {...fadeInUp} className="mb-10">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industry-Specific Expertise</h2>
                            <p className="text-lg text-slate-500">Tailored strategies for complex, regulated, and high-stakes markets.</p>
                        </motion.div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {industries.map(industry => (
                                <div key={industry.title} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center hover:bg-white hover:shadow-md transition-all">
                                    <industry.icon className="w-8 h-8 mx-auto text-blue-500 mb-2"/>
                                    <p className="font-semibold text-slate-700">{industry.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Section - UPDATED onClick to openModal */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 text-center text-white">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-4xl font-bold mb-6">Do not Wait For Your Competition to Get Ahead.</h2>
                        <p className="text-xl text-slate-300 mb-8">
The Grovoz team of experts is ready to transform your digital presence. Schedule your free consultation today and let&rsquo;s build your success story together.
                        </p>
                        <motion.button 
                            onClick={() => openModal("General Digital Marketing Strategy")}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-transform duration-300 transform hover:scale-105" 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule Your Free Consultation
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}