"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from 'next/image';


const testimonials = [
 {
  "name": "Sarah Chen",
  "role": "Marketing Director",
  "company": "TechFlow Inc.",
  "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  "content": "Grovoz has completely elevated our digital marketing strategy. Their team's expertise in SEO and content creation, especially Ashwini, led to a significant increase in our website traffic and conversions. They are professional, proactive, and truly invested in our success.",
  "rating": 5
},
  {
    name: "Marcus Rodriguez",
    role: "Sales Manager",
    company: "Global Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content:
      "We've worked with Grovoz on several paid advertising campaigns, and the results have been phenomenal. They meticulously optimized our ad spend, and their transparent reporting gave us full visibility into our ROI. It's a pleasure working with a company that delivers on its promises.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Creative Director",
    company: "Design Studio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content:
      "The personalized service from Grovoz is what sets them apart. They took the time to understand our unique business needs and crafted a tailored marketing plan that felt right for us. Thanks to their efforts, our brand's online presence has never been stronger. We highly recommend their services..",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animate"></div>

      {/* Subtle Pattern Overlay */}
      <div className="bg-gradient-to-r from-brand-50 to-white">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Loved by professionals
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              worldwide
            </span>
          </h2>
          <p className="text-xl text-slate-200 leading-relaxed">
            Join thousands of professionals who trust Grovoz for their
            networking needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="group"
        >
          {/* Apply flex and flex-col to this div */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <Quote className="w-8 h-8 text-black-400 mb-4 opacity-60" />

            {/* Add flex-grow to the paragraph */}
            <p className="text-slate-100 leading-relaxed mb-6 text-lg flex-grow">
              &quot;{testimonial.content}&quot;
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <Image
  src={testimonial.avatar}
  alt={testimonial.name}
  width={48} // Tailwind 'w-12' is 3rem or 48px
  height={48} // Tailwind 'h-12' is 3rem or 48px
  className="rounded-full border-2 border-white/20"
/>
              <div>
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-purple-300 text-sm">
                  {testimonial.role}
                </div>
                <div className="text-slate-400 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
      </div>
    </section>
  );
}
