"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Megaphone, PenTool, BarChart, Mail, Users, ArrowRight, X } from "lucide-react";

// ===============================================
// 1. DATA AND UTILITY COMPONENTS
// ===============================================

// Button Component
const Button = ({ children, className = '', onClick, icon: Icon, type = 'button', disabled = false }) => (
    <motion.button
        type={type} 
        onClick={onClick}
        disabled={disabled} // Added disabled prop
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-200 
            focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-slate-50 
            bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 text-base shadow-lg shadow-indigo-500/30 
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${className}`}
    >
        {children}
        {Icon && <Icon className="w-5 h-5 ml-2" />}
    </motion.button>
);

const services = [
    {
        icon: Search,
        title: "Search Engine Optimization",
        description: "Boost your organic visibility and drive qualified traffic with our advanced SEO strategies and technical optimization.",
        features: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"],
        gradient: "from-green-500 to-emerald-600"
    },
    {
        icon: Megaphone,
        title: "Pay-Per-Click Advertising",
        description: "Maximize your ROI with targeted PPC campaigns across Google Ads, Microsoft Ads, and social media platforms.",
        features: ["Google Ads", "Microsoft Ads", "Shopping Campaigns", "Remarketing"],
        gradient: "from-blue-500 to-cyan-600"
    },
    {
        icon: PenTool,
        title: "Web Design & Development",
        description: "Create stunning, conversion-optimized websites that engage your audience and drive business results.",
        features: ["Custom Design", "Mobile Responsive", "E-commerce", "CMS Integration"],
        gradient: "from-purple-500 to-pink-600"
    },
    {
        icon: BarChart,
        title: "Social Media Marketing",
        description: "Build your brand presence and engage your audience across all major social media platforms.",
        features: ["Content Creation", "Community Management", "Paid Social", "Influencer Marketing"],
        gradient: "from-orange-500 to-red-600"
    },
    {
        icon: Mail,
        title: "Email Marketing",
        description: "Nurture leads and retain customers with personalized email campaigns that convert.",
        features: ["Automation", "Segmentation", "A/B Testing", "Performance Tracking"],
        gradient: "from-indigo-500 to-blue-600"
    },
    {
        icon: Users,
        title: "Marketing Strategy",
        description: "Develop comprehensive marketing strategies aligned with your business goals and target audience.",
        features: ["Market Research", "Competitor Analysis", "Brand Positioning", "Growth Planning"],
        gradient: "from-teal-500 to-green-600"
    }
];


// ===============================================
// 2. MODAL COMPONENT (The Popup) - MODIFIED
// ===============================================

const ServiceInquiryModal = ({ isOpen, onClose, serviceTitle }) => {
    // UPDATED STATE: 'message' removed, 'phone' and 'website' added
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // New field
        website: '' // New field
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false); 

    // Reset all states when the modal opens/closes
    useEffect(() => {
        if (isOpen) {
            // Updated reset state
            setFormData({ name: '', email: '', phone: '', website: '' }); 
            setError(null);
            setIsSuccess(false);
        }
    }, [isOpen]);
    
    // Function to handle form input changes (remains the same)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        // UPDATED VALIDATION
        if (!formData.name || !formData.email || !formData.phone || !formData.website) {
            setError("Please fill in all required fields (Name, Email, Phone, and Website URL).");
            return;
        }

        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        // UPDATED PAYLOAD for the Next.js API route
        const payload = { 
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone,    // New field
            website: formData.website, // New field
            service: serviceTitle 
        };

        try {
            const response = await fetch('/api/contact', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit form.');
            }

            // Success! Show success message
            setIsSuccess(true);
            setTimeout(onClose, 5000); 

        } catch (err) {
            console.error("Submission Error:", err);
            setError(err.message || "An unexpected error occurred. Please try again.");
            
        } finally {
            setIsLoading(false);
        }
    };
    
    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/60 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
                if (e.target.id === 'modal-backdrop') {
                    onClose();
                }
            }}
            id="modal-backdrop"
        >
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl w-full max-w-lg relative"
                onClick={(e) => e.stopPropagation()} 
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 transition"
                >
                    <X className="w-6 h-6" />
                </button>

                {isSuccess ? (
                    // --- SUCCESS MESSAGE UI (No change needed here) ---
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="text-center py-10"
                    >
                        <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="text-3xl font-bold text-indigo-700 mb-3">
                            Details Received! 
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Your inquiry for {serviceTitle} has been successfully sent.
                        </p>
                        <p className="text-gray-500 mb-8">
                            A specialist will review your project and reach out to you within 24 hours. Thank you!
                        </p>
                        <Button onClick={onClose} className="bg-indigo-600 hover:bg-indigo-700">
                            Close
                        </Button>
                    </motion.div>
                ) : (
                    // --- FORM UI (Updated fields) ---
                    <>
                        <h2 className="text-3xl font-bold text-indigo-700 mb-2">
                            Inquire About Service
                        </h2>
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                            "{serviceTitle}"
                        </h3>
                        
                        <p className="text-gray-600 mb-6">
                            Please provide your contact details below, and a specialist in {serviceTitle} will reach out to you directly to discuss your project.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input 
                                type="text" name="name" placeholder="Your Full Name" value={formData.name}
                                onChange={handleChange} required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <input 
                                type="email" name="email" placeholder="Work Email Address" value={formData.email}
                                onChange={handleChange} required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {/* NEW FIELD: Phone Number */}
                            <input 
                                type="tel" name="phone" placeholder="Phone Number" value={formData.phone}
                                onChange={handleChange} required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {/* NEW FIELD: Website URL */}
                            <input 
                                type="url" name="website" placeholder="Website URL (e.g., https://example.com)" value={formData.website}
                                onChange={handleChange} required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {/* Removed the <textarea name="message"> field */}
                        
                            {error && (
                                <p className="text-red-600 text-sm font-medium pt-1">{error}</p>
                            )}

                            <Button 
                                type="submit" 
                                className="w-full mt-6 py-3" 
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending...' : 'Submit Inquiry'}
                            </Button>
                        </form>

                        <p className="text-xs text-gray-400 mt-4 text-center">We respect your privacy and will never share your details.</p>
                    </>
                )}

            </motion.div>
        </motion.div>
    );
};
// ===============================================
// 3. MAIN APP COMPONENT
// ===============================================

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedServiceTitle, setSelectedServiceTitle] = useState("");

    const openModal = (title) => {
        setSelectedServiceTitle(title);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedServiceTitle(""), 300); 
    };
    
    // Handle ESC key press globally
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="bg-slate-50 font-sans min-h-screen">
            <section id="services" className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
    <div className="flex flex-col items-center">
    
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
  Build Your Presence Now: Don't Let Competitors Outpace You
</h2>
  </div>
  <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-justify">

                            Our performance-driven digital marketing services deliver measurable growth through innovation and professional expertise. Every strategy is laser-focused on driving revenue, boosting visibility, and maximizing ROI across all digital channels.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.01 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-slate-700 ">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <Button 
                                    onClick={() => openModal(service.title)}
                                    icon={ArrowRight}
                                    className="mt-auto w-full"
                                >
                                    Inquire About {service.title.split(' ')[0]}
                                </Button>
                                
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            <ServiceInquiryModal
                isOpen={isModalOpen}
                onClose={closeModal}
                serviceTitle={selectedServiceTitle}
            />
        </div>
    );
}