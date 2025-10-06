"use client";
<<<<<<< HEAD
import React, { useState } from "react";
// Removed unused imports: Mail, Phone, MapPin, Send as the contact section is removed.

// AccordionItem Component
const AccordionItem = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl shadow-xl border border-gray-100 bg-white/90 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
        isOpen ? "ring-4 ring-blue-500/50 scale-[1.005]" : "hover:shadow-2xl"
      }`}
    >
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-6 text-left font-extrabold text-lg text-gray-800 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <span
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white transform transition-transform duration-300 ${
              isOpen ? "rotate-180 shadow-md" : "rotate-0"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h2>

      <div
        style={{ transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
        className={`overflow-hidden text-gray-700 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-0 leading-relaxed text-base space-y-3">{answer}</div>
=======
import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

// Main App component combining the contact and FAQ sections
const App = () => {
  const faqs = [
    {
      question: "What should my marketing budget be for Dubai market success?",
      answer: (
        <>
          <p>
            Your marketing budget isn't guesswork. It's a reflection of your
            business size, goals, and the competitive landscape you're up
            against. That's why we start with a free discovery call where we
            analyze your revenue, target audience, and current market position
            to define the smartest path forward.
          </p>
          <p className="mt-2">
            Industry benchmarks suggest investing 7 to 12% of annual revenue
            into marketing. For SMEs, that can feel steep, but that's exactly
            why we design ROI-driven strategies that make even limited funds
            deliver measurable growth.
          </p>
          <p className="mt-2">
            Through our Digital Marketing Audit, powered by proprietary tools
            and competitive analysis, we'll pinpoint where you stand today,
            uncover untapped opportunities, and recommend a budget that aligns
            with your growth potential.
          </p>
        </>
      ),
    },
    {
      question: "How does the pricing work?",
      answer:
        "We offer a flexible pricing model with a free tier for individuals, a Pro plan for small teams, and a custom enterprise solution.",
    },
    {
      question: "Is there a mobile application available?",
      answer:
        "Yes, our mobile application is available for both iOS and Android devices. You can download it from the app stores.",
    },
    {
      question: "Can I integrate with other services?",
      answer:
        "Absolutely. Our platform supports a wide range of integrations with popular tools like Slack, Google Drive, and Trello.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all our paid plans. No questions asked.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach us via email at support@example.com or through live chat in the app. Support is available 24/7.",
    },
  ];

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current!, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          alert("✅ Your message has been sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("❌ Failed to send your message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 sm:px-10 lg:px-20 font-inter">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Section */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 transition hover:shadow-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We’d love to hear from you! Send us a message and we’ll respond
            quickly.
          </p>

          {/* Contact Details */}
          <div className="space-y-5 text-gray-700 mb-10">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <a
                href="mailto: hello@grovoz.com"
                className="hover:underline font-medium"
              >
                hello@grovoz.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <a href="tel:+15551234567" className="hover:underline font-medium">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <a
                href="https://share.google/JUnJ5wfMF32eMMG6A"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium"
              >
                Suite No. 1753, Valamkottil Towers, Kakkanadu, Kochi
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-white shadow-lg rounded-2xl p-8 border border-gray-100"
          >
            <InputField id="name" name="user_name" label="Name" placeholder="Your name" />
            <InputField id="email" name="user_email" label="Email" placeholder="you@example.com" type="email" />
            <InputField id="company" name="company_name" label="Company Name" placeholder="Your company's name" />
            <InputField id="website" name="website_url" label="Website URL" placeholder="https://www.yourcompany.com" type="url" />

            {/* Services Dropdown */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Digital Marketing Services
              </label>
              <select
                id="service"
                name="service"
                className="px-4 py-3 block w-full rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition-all text-sm shadow-sm"
              >
                <option value="">Select a service...</option>
                <option value="google-ads">Google Ads & SEO</option>
                <option value="meta-ads">Meta Ads</option>
                <option value="linkedin-ads">LinkedIn Lead Generation</option>
                <option value="tiktok-ads">TikTok Performance Marketing</option>
                <option value="data-analytics">Data Analytics & Reporting</option>
                <option value="ai-solutions">AI & Automation Solutions</option>
                <option value="shopify-wordpress">Shopify & WordPress</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="px-4 py-3 block w-full rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition-all text-sm shadow-sm"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-6 text-white font-semibold rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transform hover:scale-[1.02] transition-all duration-300"
            >
              🚀 Send Message
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 transition hover:shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Find answers to the most common questions about our services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
>>>>>>> e1e9acbad250492274defdd7d0f76ed997e5f442
      </div>
    </div>
  );
};

<<<<<<< HEAD
// Main App component
const App = () => {
  const faqs = [
    {
      question: "What Will My Marketing Budget Be and How Do I Find It?",
      answer: (
        <>
          <p>
            Your marketing budget is not guesswork. It is  a reflection of your
            business size, goals, and the competitive landscape you are up
            against. That is why we start with a free discovery call where we
            analyze your revenue, target audience, and current market position
            to define the smartest path forward.
          </p>
          <p>
            Industry benchmarks suggest investing 7 to 12% of annual revenue
            into marketing. For SMEs, that can feel steep, but that is  exactly
            why we design ROI-driven strategies that make even limited funds
            deliver measurable growth.
          </p>
           <p>
            Through our Digital Marketing Audit, powered by proprietary tools and competitive analysis, 
            we will pinpoint where you stand today, uncover untapped opportunities, 
            and recommend a budget that aligns with your growth potential.
          </p>
        </>
      ),
    },
    {
      question: "How long before I see results with digital marketing?",
      answer: (
        <>
          <p>
            Your marketing budget is not guesswork. It is a reflection of your
            business size, goals, and the competitive landscape youre up
            against. That is why we start with a free discovery call where we
            analyze your revenue, target audience, and current market position
            to define the smartest path forward.
          </p>    </> ) },
    {
      question: "Do you work with businesses anywhere in the world?",
      answer:
        "Yes. Although headquartered in India, our campaigns reach clients across the GCC, Europe, and North America. Our digital tools eliminate geographic barriers, making remote collaboration seamless and productive.",
    },
    {
      question: "What platforms do you specialize in for advertising?",
      answer:
        "Our expertise is concentrated on high-ROI platforms including Google Ads (Search, Display, Shopping), Meta Ads (Facebook/Instagram), and professional B2B lead generation via LinkedIn.",
    },
    {
      question: "Can I select just one service, like SEO or Social Media?",
      answer:
        "Absolutely. Each service, including SEO, social media management, paid ads, email marketing, and content development, operates independently. Many businesses choose to begin with a single focus area, such as organic search or Instagram engagement, and expand later as they scale. Custom strategies align with your goals and budget without unnecessary bundles.",
    },
    {
      question: "What platforms do you specialize in?",
      answer:
 (
        <>
         
  <ul className="list-none space-y-3">
  
  <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      Google - Search ads, Display Network, and Google My Business optimization  </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      Data Analytics & subsidiary tools: Google cloud console, aws, big query , fast API, N8N, Power BI, Python </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      Meta (Facebook & Instagram) - Organic and paid campaigns including Reels and Carousel Ads  </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      LinkedIn - Lead generation strategies for B2B sectors </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
     TikTok - Performance marketing for consumer-first brands targeting younger audiences  </li>
      <li className="flex items-start">
    <span className="text-blue-500 mr-2 text-xl">✓</span> {/* Custom Checkmark */}
      Shopify and WordPress - For SEO, content marketing, and e-commerce integrations Platform selection always ties back to where your target audience spends their time and how they consume content.  </li>
</ul>

             </> ) },   
          {
      question: "Is there a minimum contract?",
      answer:
 (
        <>
          <p>
            Yes. Our contracts start at a minimum duration of 3 months. This timeframe allows for research, implementation, 
            and iterative optimization of your campaign. One-off services, such as website audits or single ad campaign setups, 
            are also available without ongoing commitments. For longer-term growth programs, 6- and 12-month packages offer both consistency and strategic depth.
          </p>    </> ) },    
  ];

  // Split FAQs into two halves for the 2-column layout
  const halfwayPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, halfwayPoint);
  const rightColumnFaqs = faqs.slice(halfwayPoint);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-8 lg:px-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 pt-8">
          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full uppercase tracking-widest shadow-inner">
            Support Center
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
            Common Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick, comprehensive answers to the most frequently asked questions about our digital marketing strategies and pricing models.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-6">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnFaqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnFaqs.map((faq, index) => (
              <AccordionItem key={index + halfwayPoint} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

=======
// Reusable Input Component
const InputField = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className="px-4 py-3 block w-full rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition-all text-sm shadow-sm"
      placeholder={placeholder}
    />
  </div>
);

// AccordionItem Component
const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl shadow-md border border-gray-100 bg-white/70 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
        isOpen ? "ring-2 ring-blue-500/40 scale-[1.01]" : "hover:shadow-lg"
      }`}
    >
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 text-left font-semibold text-lg text-gray-800 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <span
            className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h2>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

>>>>>>> e1e9acbad250492274defdd7d0f76ed997e5f442
export default App;
