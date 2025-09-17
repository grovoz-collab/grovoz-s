"use client";

import React, { useState, ChangeEvent } from 'react';

const LeadForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add your form submission logic here (e.g., API call)
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Your Free Consultation</h2>
            
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                />
            </div>
            
            <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number (optional)"
                />
            </div>
            
            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
                Submit
            </button>
        </form>
    );
};

export default LeadForm;