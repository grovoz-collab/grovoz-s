"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CardShowcase() {
  return (
    <section className="py-20 md:py-32 bg-[#1a202c] text-white overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Designed for Modern Finance
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Our cards are not just tools; they are a statement. Customizable, secure, and seamlessly integrated into your ecosystem.
          </p>
          <ul className="mt-8 space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <Checkmark /><span>Sleek, premium materials</span>
            </li>
            <li className="flex items-center gap-3">
              <Checkmark /><span>Contactless and mobile-ready</span>
            </li>
            <li className="flex items-center gap-3">
              <Checkmark /><span>Advanced security features built-in</span>
            </li>
          </ul>
        </motion.div>
        
        <div className="relative h-96">
            <motion.div
                className="absolute w-[280px] h-[175px] md:w-[350px] md:h-[220px]"
                style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                animate={{
                    rotate: [0, 5, -5, 0],
                    y: ['-50%', '-55%', '-45%', '-50%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                }}
            >
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                   
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

const Checkmark = () => (
    <div className="w-5 h-5 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center">
        <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    </div>
);