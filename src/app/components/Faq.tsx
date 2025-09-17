"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from "lucide-react";

// Main App component combining the contact and FAQ sections
const App = () => {
    const faqs = [
      {
        question: "What Will My Marketing Budget Be and How Do I Find It?",
        answer: (
            <>
                <p>Your marketing budget isn&apos;t guesswork. It&apos;s a reflection of your business size, goals, and the competitive landscape you&apos;re up against. That&apos;s why we start with a free discovery call where we analyze your revenue, target audience, and current market position to define the smartest path forward.</p>
                <p>Industry benchmarks suggest investing 7 to 12% of annual revenue into marketing. For SMEs, that can feel steep, but that&apos;s exactly why we design ROI-driven strategies that make even limited funds deliver measurable growth.</p>
                <p>Through our Digital Marketing Audit, powered by proprietary tools and competitive analysis, we&apos;ll pinpoint where you stand today, uncover untapped opportunities, and recommend a budget that aligns with your growth potential.Our primary goal is to provide a seamless and intuitive experience for managing your projects, allowing you to focus on creativity and collaboration. We aim to simplify complex workflows and boost team productivity.</p>
            </>
        )
      },
      {
        question: "How does the pricing work?",
        answer: "We offer a flexible pricing model with a free tier for individuals, a Pro plan for small teams, and a custom enterprise solution. You can find detailed information on our pricing page, which outlines all the features included in each plan."
      },
      {
        question: "Is there a mobile application available?",
        answer: "Yes, our mobile application is available for both iOS and Android devices. It provides a complete set of features, allowing you to access your projects and stay connected on the go. You can download it from the respective app stores."
      },
      {
        question: "Can I integrate with other services?",
        answer: "Absolutely. Our platform supports a wide range of integrations with popular tools like Slack, Google Drive, and Trello. We have a dedicated integrations marketplace where you can explore and connect with your favorite services to streamline your workflow."
      },
      {
        question: "What is your refund policy?",
        answer: "We offer a 30-day money-back guarantee for all our paid plans. If you are not completely satisfied with our service, you can request a full refund within the first 30 days of your subscription, no questions asked."
      },
      {
        question: "How do I contact customer support?",
        answer: "You can reach our customer support team via email at support@example.com, or through the live chat feature available within the application. Our support team is available 24/7 to assist you with any questions or issues you may have."
      }
    ];

  return (
    <div className="bg-gray-50 min-h-screen font-inter p-4 sm:p-6 lg:p-12">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Contact Details and Form */}
          <div className="py-12 lg:py-24">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;d love to hear from you! Send us a message and we&apos;ll respond as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 text-gray-700 mb-12">
                <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <a href="mailto:support@example.com" className="hover:underline">support@example.com</a>
                </div>
                <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
                </div>
                <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <a href="https://maps.google.com/?q=123%20Main%20St,%20Dubai" target="_blank" rel="noopener noreferrer" className="hover:underline">123 Main St, Dubai, UAE</a>
                </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" placeholder="you@example.com" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                </button>
            </form>
          </div>

          {/* Right Column: FAQ Section */}
          <div className="py-12 lg:py-24">
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Find answers to the most common questions about our product and services.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

    return (
<div className={`border border-gray-200 rounded-xl transition-all duration-300 ${isOpen ? 'bg-gray-50' : 'bg-white'}`}>
        <h2 id={`accordion-heading-${question.replace(/\s+/g, '-')}`} className="w-full">
          <button
            type="button"
            className="flex items-center justify-between w-full p-4 text-left font-semibold text-lg text-gray-800 rounded-xl transition-colors duration-200 hover:bg-gray-100"
            onClick={toggleOpen}
            aria-expanded={isOpen}
            aria-controls={`accordion-content-${question.replace(/\s+/g, '-')}`}
          >
            <span>{question}</span>
            <svg
              className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </h2>
        <div
          id={`accordion-content-${question.replace(/\s+/g, '-')}`}
          role="region"
          aria-labelledby={`accordion-heading-${question.replace(/\s+/g, '-')}`}
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="p-4 pt-0 text-gray-600 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    );
  };

  export default App;