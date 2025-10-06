"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Phone, MapPin, Globe, Users, Linkedin, Twitter } from 'lucide-react';

// =========================================================
// == ADOPTED MOCK UI Components (DARK THEME) ==============
// =========================================================

// Tailwind classes for consistency across all mock inputs/textareas
const inputClass = "w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:ring-blue-500 focus:border-blue-500 transition duration-150 outline-none h-[52px]";
const textareaClass = `${inputClass} resize-none h-auto min-h-[120px]`; // Adjusted for Textarea

const Input = ({ className = '', type = 'text', placeholder, value, onChange, required, name }) => (
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${inputClass} ${className}`}
    />
);

const Textarea = ({ className = '', placeholder, value, onChange, rows = 4, name }) => (
    <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`${textareaClass} ${className}`}
    />
);

const Button = ({ children, className = '', onClick, type = 'button', disabled, variant = 'default' }) => {
    // The new dark-theme gradient button style
    let variantStyle = 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg';
    
    // Adapted the 'outline' variant for the dark theme as well
    if (variant === 'outline') {
        variantStyle = 'bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-3';
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-200 
                focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-slate-900 
                ${variantStyle} ${className}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {children}
        </motion.button>
    );
};


const SelectComponent = ({ name, value, onChange, placeholder, options, required = false }) => {
    const isSelected = !!value; 
    const inputClass = "w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:ring-blue-500 focus:border-blue-500 transition duration-150 outline-none";

    return (
        <div className="relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                // H-[52px] is the height of the standard Input
                className={`${inputClass} appearance-none pr-10 h-[52px] ${isSelected ? 'text-white' : 'text-white/60'}`}
            >
                <option value="" disabled className="bg-slate-900 text-white/60">{placeholder}</option>
                {options.map(o => (
                    // The original component used different values, but we'll adapt the display labels.
                    <option key={o.value} value={o.value} className="bg-slate-900 text-white">{o.label}</option>
                ))}
            </select>
            {/* Custom dropdown arrow using SVG for styling control */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/60">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    );
};

// =========================================================
// == THE EXPORTABLE CONTACT FORM COMPONENT ================
// =========================================================

// Refactored to 'App' as the default export for the React environment
export default function App() {
    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        serviceRegion: "",
        currentChallenges: "",
        budgetRange: "",
        previousExperience: "",
        howHeard: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null); // State to display API errors

    // Dropdown Options (Adapted labels to match the new SelectComponent structure)
    const regionOptions = [
        { value: "local", label: 'Local' },
        { value: "national", label: 'National (US/CA)' },
        { value: "international", label: 'International (including Dubai)' },
    ];
    const budgetOptions = [
        { value: "3k_5k", label: '$3,000 - $5,000' },
        { value: "5k_10k", label: '$5,000 - $10,000' },
        { value: "10k_25k", label: '$10,000 - $25,000' },
        { value: "25k_plus", label: '$25,000+' },
    ];
    const howHeardOptions = [
        { value: "referral", label: 'Client Referral' },
        { value: "search", label: 'Google/Search' },
        { value: "linkedin", label: 'LinkedIn' },
        { value: "article", label: 'Industry Article/Blog' },
        { value: "other", label: 'Other' },
    ];


    // Unified handler for all inputs and select components (using 'name' attribute)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
        // Basic required fields validation
        const requiredFields = ['fullName', 'businessName', 'email', 'phone', 'serviceRegion'];
        const isValid = requiredFields.every(field => formData[field]);

        if (!isValid) {
             setError("Please fill out all required fields marked with *.");
             return;
        }

        setIsSubmitting(true);

        try {
            // Call the actual backend API route
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), 
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Failed to parse server error response.' }));
                throw new Error(errorData.error || `Server responded with status ${response.status}. Check your backend console.`);
            }
            
            // Success
            setIsSubmitted(true);
            
            // Clear the form data upon success (optional: commented out if you prefer to keep values)
            setFormData({ 
                fullName: "", businessName: "", email: "", phone: "", serviceRegion: "",
                currentChallenges: "", budgetRange: "", previousExperience: "", howHeard: "",
            });

        } catch (err) {
            console.error("Client Error submitting form:", err.message);
            setError(err.message || "An unknown error occurred during submission.");
        }

        setIsSubmitting(false);
    };

    // Style and Background Wrapper
    const wrapperClass = "py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 min-h-screen flex items-center font-sans";
    
    // Add Inter font link and custom scrollbar styles for a complete aesthetic
    const fontAndStyleTags = (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
            <style>{`
                body { font-family: 'Inter', sans-serif; }
                ::-webkit-scrollbar { width: 10px; }
                ::-webkit-scrollbar-track { background: #1e293b; border-radius: 10px; }
                ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 10px; }
                ::-webkit-scrollbar-thumb:hover { background: #60a5fa; }
            `}</style>
        </>
    );

    // If successfully submitted, display the thank you card
    if (isSubmitted) {
        return (
            <section id="contact-success" className={`${wrapperClass} justify-center`}>
                {fontAndStyleTags}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    // Adopted success card styles from the second component
                    className="bg-green-700/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-400/50 h-full flex flex-col justify-center items-center text-center shadow-2xl max-w-xl mx-auto"
                >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Inquiry Sent Successfully!</h3>
                    <p className="text-lg sm:text-xl text-green-200 mb-8 max-w-lg mx-auto">
                        Your **consultation request has been received** by our staff. We'll get in touch within **24 hours** to schedule your consultation.
                    </p>
                    <Button
                        onClick={() => {
                            setIsSubmitted(false);
                        }}
                        variant="outline" // Use the new outline style
                        className="w-full sm:w-auto"
                    >
                        Submit Another Inquiry
                    </Button>
                </motion.div>
            </section>
        );
    }
    
    // Otherwise, display the contact form
    return (
        <section id="contact-form" className={wrapperClass}>
            {fontAndStyleTags}
            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-3 gap-12">
                
                {/* Contact Form (Takes 2/3 width on large screens) */}
                <div className="lg:col-span-2">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-10 lg:text-left"
                    >
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
                            Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Accelerate Your Growth</span>?
                        </h2>
                        <p className="text-lg sm:text-xl text-slate-300 max-w-xl lg:max-w-full mx-auto">
                            Fill out the form below to initiate your free consultation and discover a tailor-made strategy for your business.
                        </p>
                    </motion.div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            
                            {/* Display Error Message */}
                            {error && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }} 
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-800/50 text-red-300 rounded-xl border border-red-500/50"
                                >
                                    <p className="font-semibold text-base">Submission Error: {error}</p>
                                </motion.div>
                            )}
                            
                            {/* Section 1: Basic Information */}
                            <div className="space-y-6">
                                <h3 className="text-xl md:text-2xl font-bold text-white border-b border-white/10 pb-3">1. Basic Contact Information</h3>
                                
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Input
                                        name="fullName" // Added name for unified handler
                                        placeholder="Full Name *"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <Input
                                        name="businessName" // Added name for unified handler
                                        placeholder="Business Name *"
                                        value={formData.businessName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <Input
                                        type="email"
                                        name="email" // Changed from emailAddress to match original state key
                                        placeholder="Email Address *"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <Input
                                        type="tel" // Changed to tel from generic text for semantic HTML
                                        name="phone" // Changed from phoneNumber to match original state key
                                        placeholder="Phone Number *"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                
                                <SelectComponent
                                    name="serviceRegion"
                                    value={formData.serviceRegion}
                                    onChange={handleInputChange}
                                    placeholder="Target Service Region *"
                                    options={regionOptions}
                                    required={true}
                                />
                            </div>
                            
                            {/* Section 2: Business Goals & Context */}
                            <div className="space-y-6 pt-8 border-t border-white/10">
                                <h3 className="text-xl md:text-2xl font-bold text-white border-b border-white/10 pb-3">2. Project Goals & Context</h3>
                                
                                <Textarea
                                    name="currentChallenges"
                                    placeholder="Current Marketing Challenges & Goals (e.g., improve SEO, drive specific conversion metric)"
                                    value={formData.currentChallenges}
                                    onChange={handleInputChange}
                                    rows={3}
                                />

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <SelectComponent
                                        name="budgetRange"
                                        value={formData.budgetRange}
                                        onChange={handleInputChange}
                                        placeholder="Monthly Marketing Budget Range"
                                        options={budgetOptions}
                                    />
                                    <SelectComponent
                                        name="howHeard"
                                        value={formData.howHeard}
                                        onChange={handleInputChange}
                                        placeholder="How Did You Hear About Us?"
                                        options={howHeardOptions}
                                    />
                                </div>
                                
                                <Textarea
                                    name="previousExperience"
                                    placeholder="Previous Experience with Digital Marketing (optional)"
                                    value={formData.previousExperience}
                                    onChange={handleInputChange}
                                    rows={3}
                                />
                            </div>

                            <p className="text-sm text-white/70">
                                *Required fields - Review our <a href="#" className="underline hover:text-blue-400" onClick={(e) => {e.preventDefault(); console.log('Navigating to Data & Privacy Policies');}}>policies for data handling</a>.
                            </p>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full" // Use the powerful new gradient button
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Submitting...
                                    </span>
                                ) : "Submit Inquiry - Request Quote & Schedule Consultation"}
                            </Button>
                            
                            {/* Fast Response guarantee */}
                            <div className="bg-white/10 rounded-xl p-6 border border-white/20 mt-8">
                                <h4 className="text-blue-300 font-semibold mb-2">24-Hour Response Guarantee</h4>
                                <p className="text-slate-300 text-sm">
                                    We prioritize your request and will respond with a preliminary strategy review within one business day.
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
                
                {/* Contact Info (Takes 1/3 width on large screens) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12 lg:col-span-1 mt-12 lg:mt-32"
                >
                    
                    {/* Connect Directly Section */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white mb-6">Connect Directly</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Need to reach us immediately? Here are our primary contact methods and office information.
                        </p>
                    
                        {/* Email */}
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl transition-colors hover:bg-white/10">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-white font-semibold">Email Support</div>
                                <a href="mailto:contact@grovoz.com" className="text-slate-300 text-sm hover:text-blue-300 transition-colors">contact@grovoz.com</a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl transition-colors hover:bg-white/10">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-white font-semibold">Call Our Experts</div>
                                <a href="tel:+15551234567" className="text-slate-300 text-sm hover:text-pink-300 transition-colors">+1 (555) 123-4567</a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl transition-colors hover:bg-white/10">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-white font-semibold">Global Headquarters</div>
                                <div className="text-slate-300 text-sm">
                                    Suite No. 1753, Valamkottil Towers, Kakkanadu, Kochi
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office & Service Areas */}
                    <div className="space-y-6 pt-8 border-t border-white/10">
                        <h3 className="text-3xl font-bold text-white mb-6">Office & Service Areas</h3>
                        
                        {/* Service Areas */}
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl transition-colors hover:bg-white/10">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-white font-semibold">Service Coverage</div>
                                <p className="text-slate-300 text-sm">
                                    Serving businesses nationwide and internationally with authority in digital marketing solutions.
                                    Regional Coverage: Local, national, and international markets including **Dubai** and surrounding regions.
                                </p>
                            </div>
                        </div>

                        {/* Our Location Note */}
                        <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl transition-colors hover:bg-white/10">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-white font-semibold">Our Location</div>
                                <p className="text-slate-300 text-sm">
                                    Contact us to schedule a consultation - our experienced staff provides virtual and in-person meetings.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Connect with Grovoz Marketing (Social) */}
                    <div className="space-y-6 pt-8 border-t border-white/10">
                        <h3 className="text-3xl font-bold text-white mb-6">Connect with Grovoz</h3>
                        
                        {/* LinkedIn */}
                        <a href="#" className="block">
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl transition-colors hover:bg-white/10">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                    <Linkedin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">LinkedIn: Follow Grovoz Marketing</div>
                                    <p className="text-slate-300 text-sm">
                                        For authority insights and business growth strategies.
                                    </p>
                                </div>
                            </div>
                        </a>

                        {/* Twitter */}
                        <a href="#" className="block">
                            <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl transition-colors hover:bg-white/10">
                                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                    <Twitter className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Twitter: Get Daily Marketing Tips</div>
                                    <p className="text-slate-300 text-sm">
                                        From our experienced team.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
