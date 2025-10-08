"use client";

import React, { useState, useEffect } from "react";
import { motion, type Variants, type Transition, type TargetAndTransition } from "framer-motion";
import { ArrowRight, Fingerprint, Puzzle, Code, Sparkles, Zap } from "lucide-react"; 
// Assuming ContactForm is defined elsewhere
import ContactForm from "../components/ContactForm"; 
import Image from "next/image"; 

/**
 * Utility function to handle dynamic CSS class merging.
 * @param {string[]} classes - Array of Tailwind CSS classes to merge.
 * @returns {string} - Merged class string.
 */
const cn = (...classes: string[]): string => classes.filter(Boolean).join(' ');

// --- UTILITY COMPONENTS (Unchanged) ---

// Define the types for the Button component's props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: 'default' | 'outline' | 'primary';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    href?: string;
}

/**
 * A reusable Button component with variant and size support, now using standard HTML tags.
 */
const Button = React.forwardRef<
    HTMLButtonElement | HTMLAnchorElement, 
    ButtonProps
>(({ className, variant, size, children, onClick, href, ...props }, ref) => {
    const baseStyle = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus:ring-4 focus:ring-offset-2";

    const variants = {
        default: "bg-gray-900 text-white hover:bg-gray-800 shadow-md focus:ring-gray-300",
        outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm focus:ring-gray-200",
        primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md focus:ring-blue-300",
    };

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
    };

    const style = cn(
        baseStyle,
        variants[variant || 'default'], 
        sizes[size || 'default'], 
        className || '' 
    );
    
    // Use standard <a> tag for navigation if href is provided
    if (href) {
        return (
            <a 
                href={href} 
                className={style} 
                // FIX: Attach the onClick handler to the <a> tag to resolve the ESLint warning
                onClick={onClick as (event: React.MouseEvent<HTMLAnchorElement>) => void} 
                ref={ref as React.Ref<HTMLAnchorElement>} 
                {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={style}
            onClick={onClick as (event: React.MouseEvent<HTMLButtonElement>) => void}
            ref={ref as React.Ref<HTMLButtonElement>}
            {...props as React.ButtonHTMLAttributes<HTMLButtonElement>}
        >
            {children}
        </button>
    );
});
Button.displayName = "Button";

/**
 * A simple Badge component for introductory text.
 */
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: 'default' | 'secondary';
    children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ className, variant, children, ...props }) => {
    const baseStyle = "inline-flex items-center rounded-full text-xs font-medium px-3 py-1";
    const variants = {
        default: "bg-gray-100 text-gray-800",
        secondary: "bg-blue-100 text-blue-800 border border-blue-200",
    };

    const style = cn(
        baseStyle,
        variants[variant || 'default'],
        className || '' 
    );

    return (
        <div className={style} {...props}>
            {children}
        </div>
    );
};


// --- FRAMER MOTION VARIANTS (Unchanged) ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        } as Transition 
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" } as Transition 
    }
};

const floatingAnimation: TargetAndTransition = {
    y: [-10, 10, -10],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    } as Transition 
};


// --- TYPING TEXT (Unchanged) ---
const TYPING_PHRASES = ["Digital Marketing.", "SEO Optimization.", "Brand Strategy.", "Content Creation."];

function TypingText() {
    const phrases = TYPING_PHRASES; 
    const [currentText, setCurrentText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenPhrases = 1500;

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex % phrases.length];
        let timer: NodeJS.Timeout;

        const handleTyping = () => {
            if (isDeleting) {
                // Deleting state
                setCurrentText(prev => prev.substring(0, prev.length - 1));
                if (currentText === "") {
                    setIsDeleting(false);
                    setPhraseIndex(prev => prev + 1);
                }
                timer = setTimeout(handleTyping, deletingSpeed);
            } else {
                // Typing state
                setCurrentText(prev => currentPhrase.substring(0, prev.length + 1));
                if (currentText === currentPhrase) {
                    timer = setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
                } else {
                    timer = setTimeout(handleTyping, typingSpeed);
                }
            }
        };

        timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, phraseIndex, phrases]); 

    return (
        <span className="relative text-blue-600">
            {currentText}
            {/* Animated Cursor */}
            <motion.span
                className="inline-block w-1 bg-blue-600 h-full ml-1 absolute top-0 bottom-0 my-auto"
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </span>
    );
}


// --- HERO SECTION (FIX APPLIED HERE) ---
interface HeroProps {
    onOpenForm: () => void;
}

function Hero({ onOpenForm }: HeroProps) {
    const features = [
        {
            icon: Fingerprint,
            title: "Personalized Approach",
            description: "Tailored strategies for your unique business goals",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Puzzle,
            title: "Customized Solutions",
            description: "End-to-end marketing solutions that fit perfectly",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Code,
            title: "Optimized Performance",
            description: "Data-driven results that exceed expectations",
            gradient: "from-indigo-500 to-blue-500"
        }
    ];

    return (
        // FIX: Added pt-16 (padding-top: 4rem) here to clear the fixed navbar.
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
            
            {/* Subtle animated background shapes */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl opacity-50"
                animate={floatingAnimation}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl opacity-50"
                // FIX: Use TargetAndTransition for the composite animation object
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition as Transition, delay: 2 } } as TargetAndTransition}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Enhanced Badge */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <Badge
                            variant="secondary"
                            className="px-6 py-2 text-sm font-semibold bg-blue-50/50 text-blue-700 border-blue-200 hover:shadow-lg transition-all duration-300"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Welcome to Grovoz Marketing Company
                        </Badge>
                    </motion.div>

                    {/* Enhanced Main Heading */}
                    <motion.div variants={itemVariants} className="mb-0">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="block text-gray-900 mb-1">
                                Redefining Standards In
                            </span>
                            <div className="min-h-[100px] sm:min-h-[110px] lg:min-h-[130px] flex justify-center items-center">
                                <TypingText />
                            </div>
                        </h1>
                    </motion.div>

                    {/* Enhanced Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
                    >
                        Crafting Digital Impact with Authority. We ensure your brand is not just seen,
                        but <span className="font-semibold text-blue-600">respected</span>, <span className="font-semibold text-purple-600">trusted</span>, and <span className="font-semibold text-indigo-600">remembered</span>.
                    </motion.p>

                    {/* Enhanced CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                    >
                        {/* Primary Button - Claim Your Free Month (using standard href) */}
                        <Button
                            onClick={onOpenForm}
                            size="lg"
                            variant="primary"
                            className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 ring-offset-white"
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            Claim Your Free Month
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        {/* Secondary Button - Request a Demo */}
                        <Button
                            href="#demo"
                            variant="outline"
                            size="lg"
                            className="group px-8 py-4 text-lg font-semibold border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 shadow-md ring-offset-white"
                        >
                            Request a Demo
                            <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </Button>
                    </motion.div>

                    {/* Enhanced Feature Cards */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                
                                {/* Hover effect overlay */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// The Logos section component (Unchanged)
function Logos() {
    const logos = [
        { name: 'Google', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg' },
        { name: 'Facebook', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg' },
        { name: 'Wordpress', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wordpress.svg' },
        { name: 'Semrush', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/semrush.svg' },
        { name: 'Bitrix24', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoho.svg' },
        { name: 'Frappe', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/yoast.svg' },
        { name: 'Github', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg' },
        { name: 'HubSpot', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg' },
        { name: 'Mailchimp', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mailchimp.svg' },
        { name: 'Canva', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg' },
        { name: 'Semrush', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/semrush.svg' },
        { name: 'Hootsuite', src: 'https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/twitter.svg' }, 
        { name: 'Hootsuite', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hootsuite.svg' },
    ];
    // Duplicate the list for the seamless loop
    const allLogos = [...logos, ...logos, ...logos]; 

    return (
        <section className="bg-gray-50 py-4 border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-x-hidden">
                    <div className="inline-flex animate-slide-right whitespace-nowrap py-4">
                        {allLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="mx-4 flex h-14 w-32 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm border border-gray-100 transition duration-300 hover:shadow-lg sm:w-20 lg:w-28"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.name + ' Logo'}
                                    width={100} // Set a reasonable size for optimization
                                    height={40} // Set a reasonable size for optimization
                                    className="h-full w-auto object-contain opacity-50 transition-opacity hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// The main page component (Unchanged)
export default function HomePage() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleOpenForm = () => setIsFormOpen(true);
    const handleCloseForm = () => setIsFormOpen(false);

    return (
        <main className="min-h-screen bg-gray-50 antialiased">
            {/* The Hero component now contains the pt-16 fix */}
            <Hero onOpenForm={handleOpenForm} />
            <Logos />
            <ContactForm isOpen={isFormOpen} onClose={handleCloseForm} />
        </main>
    );
}