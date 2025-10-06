"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, FileBadge2, SlidersHorizontal, Layers, MapPin, ShoppingCart, File, Settings, Globe, Package, ChevronsRight } from 'lucide-react';

const SERVICES_TABS = [
    {
        id: 'on-page',
        label: 'On-Page',
        icon: FileBadge2,
        title: 'On-Page & Content SEO',
        description: "We optimize every element on your website to ensure it's perfectly tuned for search engines and provides a fantastic user experience. This is the foundation of any successful SEO campaign.",
        features: [
            'In-depth Keyword Research & Mapping',
            'Title Tag & Meta Description Optimization',
            'Content Quality & Readability Audits',
            'Strategic Internal Linking Structure',
            'Image SEO & Alt Tag Optimization',
            'Header Tag (H1, H2, H3) Structuring',
        ],
        mainIcon: File,
    },
    {
        id: 'technical',
        label: 'Technical SEO',
        icon: SlidersHorizontal,
        title: 'Technical SEO & Site Performance',
        description: "We dive deep into the code and structure of your site to resolve technical issues that might be holding you back. A healthy, fast, and crawlable site is non-negotiable for high rankings.",
        features: [
            'Website Speed & Performance Optimization',
            'Site Architecture & Crawlability Audits',
            'Schema Markup Implementation',
            'Mobile-Friendliness & Responsiveness',
            'XML Sitemap & Robots.txt Optimization',
            'Canonicalization & Duplicate Content Resolution',
        ],
        mainIcon: Settings,
    },
    {
        id: 'off-page',
        label: 'Off-Page SEO',
        icon: Layers,
        title: 'Off-Page SEO & Authority Building',
        description: "Building a strong backlink profile from high-authority sources is crucial for establishing trust with search engines. Our off-page strategies are designed to boost your credibility.",
        features: [
            'High-Quality Link Acquisition',
            'Competitor Backlink Analysis',
            'Digital PR & Outreach Campaigns',
            'Brand Mentions & Citation Building',
            'Broken Link Building',
        ],
        mainIcon: ChevronsRight,
    },
    {
        id: 'local',
        label: 'Local SEO',
        icon: MapPin,
        title: 'Local SEO & Google Business Profile',
        description: "Dominate local search results and drive more foot traffic to your physical location. We optimize your online presence to ensure you appear prominently in local queries and map packs.",
        features: [
            'Google Business Profile Optimization',
            'Local Citation Building & Management',
            'Local Keyword Strategy',
            'Review Generation & Reputation Management',
            'Local Link Building',
            'Geo-Targeted Content Creation',
        ],
        mainIcon: Globe,
    },
    {
        id: 'ecommerce',
        label: 'E-commerce SEO',
        icon: ShoppingCart,
        title: 'E-commerce SEO',
        description: "Our e-commerce SEO services are designed to get your products in front of qualified buyers. We focus on optimizing product pages, categories, and the overall customer journey.",
        features: [
            'Product & Category Page Optimization',
            'Product Schema & Rich Snippets',
            'Keyword Research for Products',
            'Site Architecture for User Experience',
            'Internal Linking Strategy',
            'Conversion Rate Optimization',
        ],
        mainIcon: Package,
    },
];

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const listVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function SEOTabsSection() {
    const [activeTab, setActiveTab] = useState(SERVICES_TABS[0].id);
    const activeTabContent = SERVICES_TABS.find(tab => tab.id === activeTab);

    return (
        <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        {...fadeInUp}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Our Comprehensive SEO Services
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-3xl mx-auto"
                    >
                        We offer a full suite of services designed to get your website to the top of search results and keep it there. Discover how our strategies can drive measurable, sustainable growth for your business.
                    </motion.p>
                </div>

                <div className="bg-slate-700/50 backdrop-blur-sm rounded-t-2xl p-2 md:p-4">
                    <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4">
                        {SERVICES_TABS.map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative flex items-center space-x-2 px-4 py-3 text-sm md:text-base font-medium transition-all duration-300
                                ${activeTab === tab.id
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                <tab.icon size={20} />
                                <span>{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="tabUnderline"
                                        className="absolute bottom-[-8px] left-0 right-0 h-1 bg-blue-500 rounded-t-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <motion.div
                    key={activeTab}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-b-2xl shadow-xl border border-slate-700 flex flex-col-reverse md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12"
                >
                    <div className="md:w-1/2">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{activeTabContent.title}</h3>
                        <p className="text-lg text-slate-400 mb-8">{activeTabContent.description}</p>
                        <motion.ul variants={listVariants} initial="hidden" animate="visible" className="space-y-4">
                            {activeTabContent.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    variants={listItemVariants}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mt-1">
                                        <Check className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-slate-300 text-base">{feature}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-center relative">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-80 h-80 rounded-full bg-blue-500/10"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            className="absolute w-60 h-60 rounded-full bg-blue-500/20"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                            className="absolute w-40 h-40 rounded-full bg-blue-500/30"
                        />
                        <div className="relative z-10 p-8 rounded-full bg-blue-500/80 text-white">
                            <motion.div
                                key={activeTab}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <activeTabContent.mainIcon className="w-16 h-16" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}