"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from "lucide-react";

// The AccordionItem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const isList = answer.startsWith("list points");
  const isMultiParagraph = question === "What Will My Marketing Budget Be and How Do I Find It?";

  const renderAnswer = () => {
    if (isList) {
      const listItems = answer.split('\n').slice(2);
      return (
        <ul className="space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
              <p className="flex-1">{item.trim().replace(/^- /, '')}</p>
            </li>
          ))}
        </ul>
      );
    } else if (isMultiParagraph) {
      const paragraphs = answer.split('\n\n').map((paragraph, index) => (
        <p key={index} className="text-justify mb-4 last:mb-0">
          {paragraph}
        </p>
      ));
      return paragraphs;
    } else {
      return <p className="text-justify">{answer}</p>;
    }
  };

  return (
    <div className={`border rounded-xl transition-all duration-300 ${isOpen ? 'bg-gray-50 border-blue-500' : 'bg-white border-gray-200'}`}>
      <h2 className="w-full">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-4 text-left font-semibold text-lg text-gray-800 rounded-xl transition-colors duration-200 ${isOpen ? 'bg-blue-100 hover:bg-blue-200' : 'hover:bg-gray-100'}`}
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span>{question}</span>
          <svg
            className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : 'rotate-0'}`}
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
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-[5000px]' : 'max-h-0'}`}
      >
        <div className="p-4 pt-0 text-gray-600 leading-relaxed">
          {renderAnswer()}
        </div>
      </div>
    </div>
  );
};

// Main App component combining the contact and FAQ sections
const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Will My Marketing Budget Be and How Do I Find It?",
      answer: "Your marketing budget isn’t guesswork. It’s a reflection of your business size, goals, and the competitive landscape you’re up against. That’s why we start with a free discovery call where we analyze your revenue, target audience, and current market position to define the smartest path forward.\n\nIndustry benchmarks suggest investing 7 to 12% of annual revenue into marketing. For SMEs, that can feel steep, but that’s exactly why we design ROI-driven strategies that make even limited funds deliver measurable growth.\n\nThrough our Digital Marketing Audit, powered by proprietary tools and competitive analysis, we’ll pinpoint where you stand today, uncover untapped opportunities, and recommend a budget that aligns with your growth potential. Our primary goal is to provide a seamless and intuitive experience for managing your projects, allowing you to focus on creativity and collaboration. We aim to simplify complex workflows and boost team productivity."
    },
    {
      question: "How long before I see results with digital marketing?",
      answer: "Most clients begin to notice measurable improvements within the first 60 to 90 days. SEO strategies, in particular, require 3 to 6 months to demonstrate consistent organic growth. Paid advertising campaigns on platforms like Google Ads or Meta show immediate visibility, often generating traffic within days of launch. The exact timeline varies depending on your industry’s competitiveness, current digital presence, and selected strategies."
    },
    {
      question: "Do you work with businesses anywhere in the world?",
      answer: "Yes. Although headquartered in India, our campaigns reach clients across the GCC, Europe, and North America. Our digital tools eliminate geographic barriers, making remote collaboration seamless and productive."
    },
    {
      question: "Can I select just one service, like SEO or Social Media?",
      answer: "Absolutely. Each service, including SEO, social media management, paid ads, email marketing, and content development, operates independently. Many businesses choose to begin with a single focus area, such as organic search or Instagram engagement, and expand later as they scale. Custom strategies align with your goals and budget without unnecessary bundles."
    },
    {
      question: "What platforms do you specialize in?",
      answer: "list points\n\n- SEO: Google, Bing, Yahoo\n- Social Media: Facebook, Instagram, LinkedIn, Twitter, TikTok\n- Paid Ads: Google Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, Twitter Ads\n- Email Marketing: Mailchimp, HubSpot, Constant Contact\n- Content Management: WordPress, HubSpot CMS, Squarespace"
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team via email at hello@grovoz.com, or through the live chat feature available within the application. Our support team is available 24/7 to assist you with any questions or issues you may have."
    }
  ];

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-inter p-4 sm:p-6 lg:p-12">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Contact Details and Form */}
          <div className="py-12 lg:py-24">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We'd love to hear from you! Send us a message and we'll respond as soon as possible.
            </p>
            

            {/* Contact Details */}
            <div className="space-y-6 text-gray-700 mb-12">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <a href="mailto:hello@grovoz.com" className="hover:underline">hello@grovoz.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <a href="tel:+15551234567" className="hover:underline">+91 (7012) 881-1462</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span>Suite No. 1753, Valamkottil Towers, Kochi, Kerala-682 021</span>
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
              {/* New dropdown for services */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Digital Marketing Services</label>
                <select id="service" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2">
                  <option value="">Select a service...</option>
                  <option value="google-ads">Google Ads & SEO</option>
                  <option value="meta-ads">Meta (Facebook & Instagram) Ads</option>
                  <option value="linkedin-ads">LinkedIn Lead Generation</option>
                  <option value="tiktok-ads">TikTok Performance Marketing</option>
                  <option value="data-analytics">Data Analytics & Reporting</option>
                  <option value="ai-solutions">AI & Automation Solutions</option>
                  <option value="shopify-wordpress">Shopify & WordPress</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: FAQ Section */}
          <div className="py-12 lg:py-24">
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                Frequently Asked Questions
              </h3>
              <p className="text-2x1 text-gray-600 max-w-xl mx-auto">
                Find answers to the most common questions <br/>about  our product and services.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleAccordionClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;