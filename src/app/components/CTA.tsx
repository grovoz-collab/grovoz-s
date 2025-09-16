import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="demo" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Main Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl font-extrabold leading-snug">
              Let’s Accelerate Your Business Growth—Starting Today
            </h3>
            <p className="mt-4 text-white/90 text-lg sm:text-xl">
              You’re not just looking for another digital marketing company—you’re looking for a partner that delivers results. Let’s create something measurable, scalable, and unstoppable together.
            </p>
          </div>

          {/* New Container for Text and Button */}
          <div className="flex-shrink-0 flex flex-col items-center justify-center gap-4 text-center">
            {/* The Text Above the Button */}
            <p className="text-sm font-medium text-white/80">Ready to get started?</p>

            {/* The Button */}
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}