  "use client";
  import React, { useState, useEffect } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { Mail, X, User, MessageSquare, Phone, Briefcase } from "lucide-react"; // Added Phone and Briefcase icons

  interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
  }

  const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "", // New field for Phone Number
      service: "", // New field for Service Dropdown
      // subject removed
      message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
      if (isOpen) {
        // Reset form data and status when the modal opens
        setFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          service: "", 
          // subject removed
          message: "" 
        });
        setError(null);
        setIsSuccess(false);
      }
    }, [isOpen]);

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError(null);
  setIsSuccess(false);

  if (!formData.name || !formData.email || !formData.message || !formData.service) {
    setError("Please fill in all required fields (Name, Email, Service, and Message).");
    setIsLoading(false);
    return;
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    let result;
    try {
      result = await response.json();
    } catch {
      result = null;
    }

    if (!response.ok) {
      let errorMessage = "Failed to send message.";
      if (result && typeof result === 'object' && 'message' in result) {
        errorMessage = (result as { message: string }).message || errorMessage;
      }
      setError(errorMessage);
      setIsLoading(false);
      return;
    }

    setIsSuccess(true);
    setTimeout(onClose, 4000);
  } catch (error) {
    console.error("Submission error:", error);
    setError(
      error instanceof Error
        ? error.message
        : "An unexpected error occurred. Please check console for details."
    );
  } finally {
    setIsLoading(false);
  }
};
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              if ((e.target as HTMLElement).id === "modal-backdrop") {
                onClose();
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl p-6 md:p-10 shadow-2xl w-full max-w-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-800 transition"
                aria-label="Close form"
              >
                <X className="w-6 h-6" />
              </button>

              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full shadow-md">
                    ✅
                  </div>
                  <h2 className="text-2xl font-bold text-green-700 mt-4">
                    Message Sent!
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Thanks for reaching out. We’ll reply shortly 
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Mail className="w-8 h-8 text-indigo-600" />
                    Start Your Digital Transformation
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Ready to elevate your brand? Share a few details, and we will provide a free, no-obligation quote and strategy session.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=" "
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="peer pl-10 w-full p-3 border border-gray-300 rounded-lg bg-white/60 placeholder-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-10 top-2 text-gray-500 text-sm transition-all 
                          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500"
                      >
                        Name
                      </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="peer pl-10 w-full p-3 border border-gray-300 rounded-lg bg-white/60 placeholder-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-10 top-2 text-gray-500 text-sm transition-all 
                          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500"
                      >
                        Email
                      </label>
                    </div>

                    {/* Phone Number (New Field) */}
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder=" "
                        value={formData.phone}
                        onChange={handleChange}
                        className="peer pl-10 w-full p-3 border border-gray-300 rounded-lg bg-white/60 placeholder-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-10 top-2 text-gray-500 text-sm transition-all 
                          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500"
                      >
                        Phone Number (Optional)
                      </label>
                    </div>

                    {/* Service Dropdown (New Field) - Aligned label */}
                    <div>
                        <label
                          htmlFor="service"
                          // Alignment fix was here, keeping it to maintain previous adjustment
                          className="block text-sm font-medium text-gray-700 mb-1 pl-3" 
                        >
                          Service of Interest <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3 text-gray-400 w-5 h-5 pointer-events-none" />
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full p-3 border border-gray-300 rounded-lg bg-white/60 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                          >
                            <option value="" disabled>Select a Service</option>
                            <option value="Search Engine Optimization">Search Engine Optimization</option>
                            <option value="Pay-Per-Click Advertising">Pay-Per-Click Advertising</option>
                            <option value="Web Design & Development">Web Design & Development</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                            <option value="Email Marketing">Email Marketing</option>
                            <option value="Marketing Strategy">Marketing Strategy</option>
                          </select>
                        </div>
                    </div>

                    {/* Subject field removed from here */}

                    {/* Message */}
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder=" "
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="peer pl-10 w-full p-3 border border-gray-300 rounded-lg bg-white/60 placeholder-transparent focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute left-10 top-2 text-gray-500 text-sm transition-all 
                          peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                          peer-focus:top-1 peer-focus:text-sm peer-focus:text-indigo-500"
                      >
                        Message
                      </label>
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm font-medium pt-1">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        isLoading
                          ? "bg-gradient-to-r from-indigo-400 to-purple-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      } text-white shadow-lg hover:shadow-xl`}
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </form>

                  <p className="text-xs text-gray-400 mt-4 text-center">
                    We respect your privacy.
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export default ContactForm;
