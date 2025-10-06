"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search } from 'lucide-react';
import Methodology from './Methodology';
import About from '../services/About';
import Services from './Services';
import WhychooseSection from '../components/WhychooseSection';
import ContactForm from "../components/ContactForm"; // <-- Import the ContactForm component here

// Helper for animations
const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

// Reusable Accordion Item Component
const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
    const itemVariants = {
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                height: { duration: 0.4 },
                opacity: { duration: 0.2 }
            }
        },
        closed: {
            height: 0,
            opacity: 0,
            transition: {
                height: { duration: 0.4 },
                opacity: { duration: 0.2 }
            }
        }
    };

    return (
        <div
            className={`rounded-2xl shadow-md border border-gray-100 bg-white/70 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                isOpen ? "ring-2 ring-blue-500/40 scale-[1.005]" : "hover:shadow-lg hover:scale-[1.005]"
            }`}
        >
            <h2>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 text-left font-semibold text-lg text-gray-800 transition-all"
                    onClick={onToggle}
                >
                    <span>{question}</span>
                    <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>
            </h2>
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={itemVariants}
            >
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
};

export default function SEOPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [particles, setParticles] = useState<any[]>([]);

    // New state to manage the contact form's visibility
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Functions to open and close the contact form
    const handleOpenForm = () => setIsFormOpen(true);
    const handleCloseForm = () => setIsFormOpen(false);

    // sparkle particle creation
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        setParticles(prevParticles => {
            const newParticle = {
                id: Date.now() + Math.random(),
                x: mouseX,
                y: mouseY,
                size: Math.random() * 6 + 4, // 4–10px
                color: `hsla(${Math.random() * 360}, 70%, 70%, 0.8)` // random pastel sparkle
            };
            return [...prevParticles.slice(-20), newParticle]; // keep max 20
        });
    };

    const particleVariants = {
        initial: { scale: 0, opacity: 1 },
        animate: {
            scale: [0, 1, 0.5],
            opacity: [1, 0.8, 0],
            y: [0, -40], // rise up
            x: [0, Math.random() * 40 - 20], // drift
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-white">

            {/* SEO Hero Section */}
            <motion.section
                id="seo-hero"
                className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden cursor-pointer"
                onMouseMove={handleMouseMove}
            >
                {/* The Floating Object (Parallax effect) */}
                <motion.div
                    style={{ y }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[0px] rounded-full bg-blue-500/10"
                />

                {/* Existing Animated Particles */}
                <motion.div
                    className="absolute top-[20%] left-[10%] w-[20px] h-[20px] rounded-full bg-blue-400/20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-[50%] right-[15%] w-[30px] h-[30px] rounded-full bg-purple-400/20"
                    animate={{ y: [0, 30, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-[20%] left-[30%] w-[25px] h-[25px] rounded-full bg-green-400/20"
                    animate={{ y: [0, -25, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                    className="absolute top-[10%] right-[40%] w-[15px] h-[15px] rounded-full bg-red-400/20"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* Mouse Hover Sparkles */}
                {particles.map((p) => (
                    <motion.span
                        key={p.id}
                        variants={particleVariants}
                        initial="initial"
                        animate="animate"
                        style={{
                            position: "absolute",
                            top: p.y,
                            left: p.x,
                            width: p.size,
                            height: p.size,
                            backgroundColor: p.color,
                            borderRadius: "50%",
                            pointerEvents: "none",
                        }}
                        onAnimationComplete={() =>
                            setParticles((prev) => prev.filter((particle) => particle.id !== p.id))
                        }
                    />
                ))}

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <motion.div {...fadeInUp}>
                        <div className="inline-flex items-center px-4 py-2 bg-blue-400/20 rounded-full text-blue-300 font-medium mb-6">
                            <Search className="w-5 h-5 mr-2" />
                            Grovoz's Digital Marketing Services
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Transform Your Business into a Revenue <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Generating Machine</span>.
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
                            Partner with Grovoz's trusted experts delivering measurable results through innovative, scalable solutions designed to accelerate your sales and profit with cutting-edge digital marketing services through Omnichannel Marketing Technique.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* This is the button that opens the contact form */}
                            <motion.button
                                onClick={handleOpenForm} // <-- New onClick handler
                                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                            >
                                Get Your Free Website Audit
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#1e293b" }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border border-blue-400 text-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                            >
                                View Success Stories & Awards
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <About />    
            <Services />
            <Methodology />
            <WhychooseSection />

            {/* Render the ContactForm component based on the state */}
            <ContactForm 
                isOpen={isFormOpen} 
                onClose={handleCloseForm} 
            />

        </div>
    );
}