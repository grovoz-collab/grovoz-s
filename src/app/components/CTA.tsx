import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function CTA() {
  return (
    <section id="demo" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-brand-50 to-white rounded-2xl shadow-lg">
          {/* Main Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 leading-snug">Let’s Accelerate Your Business Growth—Starting Today</h3>
            <p className="mt-4 text-zinc-600 text-lg">You’re not just looking for another digital marketing company—you’re looking for a partner that delivers results. Start building a smarter digital strategy with a team that knows what works in global and local markets. Let’s create something measurable, scalable, and unstoppable together.</p>
          </div>
          
          {/* New Container for Text and Button */}
          <div className="flex flex-col items-center gap-4 text-center">
            {/* The Text Above the Button */}
            <p className="text-sm font-medium text-gray-700">Ready to get started?</p>
            
            {/* The Button */}
          
             <Link href="#contact" className="px-8 py-4 rounded-full bg-blue-500 text-white font-medium hover:bg-grey-500 transition-colors duration-300 transform hover:scale-105">
                Book Your Free 30-Minute Strategy Call <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300" />
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}