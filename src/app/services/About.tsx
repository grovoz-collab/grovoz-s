'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import {  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function About() {
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [team, setTeam] = useState(0);
  const [support, setSupport] = useState(24);
  const sectionRef = useRef(null);

   
  // Sample data for the new growth line chart
  const growthData = [
    { month: 'Jan', growth: 400 },
    { month: 'Feb', growth: 550 },
    { month: 'Mar', growth: 700 },
    { month: 'Apr', growth: 850 },
    { month: 'May', growth: 1000 },
    { month: 'Jun', growth: 1200 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animateNumber = (setter, target, duration) => {
              let start = null;
              const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const value = Math.min(progress / duration, 1) * target;
                setter(Math.floor(value));
                if (progress < duration) {
                  window.requestAnimationFrame(step);
                }
              };
              window.requestAnimationFrame(step);
            };
            
            animateNumber(setProjects, 500, 1500);
            animateNumber(setExperience, 15, 1500);
            animateNumber(setTeam, 50, 1500);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              About Our Agency
            </div>

            <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Digital Marketing Services Are No Longer 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Optional in the AI Era</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
Grovoz specializes in customer focused, results driven digital marketing. They understand that today's consumers make purchasing decisions based on their online discoveries. While acknowledging that all businesses need professional digital marketing, Grovoz sets itself apart by avoiding generic, one-size-fits-all solutions. Instead, their expert team leverages predictable consumer data patterns to develop strategies tailored to your specific products and services, ultimately aiming to generate the sales, traffic, and profit your business deserves.            </p>
           
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Results-Driven Approach</h3>
                  <p className="text-slate-600">Every strategy is tailored to your specific goals and measured by real business outcomes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Expert Team</h3>
                  <p className="text-slate-600">Our certified specialists bring deep expertise across all digital marketing disciplines.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Proven Track Record</h3>
                  <p className="text-slate-600">Over 500 successful campaigns with an average ROI increase of 250%.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Visual and stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mb-10">
              {/* Main image placeholder */}
              <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-slate-900 font-semibold">Team Performance</div>
                      <div className="text-green-500 font-bold">↑ 47%</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">JS</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">Bibin Basil</div>
                          <div className="text-xs text-slate-600">SEO Specialist</div>
                        </div>
                        <div className="text-green-500 text-sm font-medium">+32%</div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AD</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">Anna Davis</div>
                          <div className="text-xs text-slate-600">PPC Manager</div>
                        </div>
                        <div className="text-green-500 text-sm font-medium">+28%</div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">MJ</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">Aswini</div>
                          <div className="text-xs text-slate-600">Content Manager</div>
                        </div>
                        <div className="text-green-500 text-sm font-medium">+41%</div>
                      </div>
                    </div>
                    
                    {/* Growth Line Chart Section */}
                    <div className="mt-6">
                      <div className="text-slate-900 font-semibold mb-2">Monthly Growth</div>
                      <div style={{ width: '100%', height: 200 }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={growthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" stroke="#64748b" />
                            <YAxis stroke="#64748b" />
                            <Tooltip />
                            <Line type="monotone" dataKey="growth" stroke="#4f46e5" activeDot={{ r: 8 }} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-200"
              >
                <div className="text-xs text-slate-600 mb-1">Monthly Growth</div>
                <div className="text-lg font-bold text-green-500">+127%</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-200"
              >
                <div className="text-xs text-slate-600 mb-1">Client Satisfaction</div>
                <div className="text-lg font-bold text-blue-500">98.5%</div>
              </motion.div>
            </div>
            
            {/* Company stats with gradient backgrounds */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
              <div className="text-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="text-2xl font-bold text-blue-600 mb-1">{projects}+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100">
                <div className="text-2xl font-bold text-purple-600 mb-1">{experience}+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100">
                <div className="text-2xl font-bold text-green-600 mb-1">{team}+</div>
                <div className="text-sm text-slate-600">Team Members</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="text-2xl font-bold text-orange-600 mb-1">{support}/7</div>
                <div className="text-sm text-slate-600">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
