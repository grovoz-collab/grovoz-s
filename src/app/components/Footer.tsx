"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image"; // Make sure to import the Image component

export default function FooterSection() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid: Brand + Product + Company + Map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              {/* Using next/image for better performance */}
              <Image src="/GVZ-LOGO.webp" alt="Logo" width={64} height={64} />
              <p className="text-slate-400 leading-relaxed">
                Marketing Company
              </p>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4 max-w-sm">
              The most advanced platform for digital business cards and professional networking.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-slate-400 hover:text-white transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-slate-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Product and Company sections side-by-side on mobile */}
          {/* A new container is created to group these two items on smaller screens */}
          <div className="grid grid-cols-2 gap-10 col-span-1 md:col-span-1">
            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-2">
  <h4 className="font-semibold mb-4 text-white">Our Location</h4>
            <div className="w-full h-40 md:h-64 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.624918437279!2d55.27078221501264!3d25.204849983890485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4341e7f3e6c7%3A0x7c5b51bb9c4e5b0c!2sDubai!5e0!3m2!1sen!2sae!4v1705162173895!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
               allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-slate-400">
              © 2024 Grovoz. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Made by Grovoz Team with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}