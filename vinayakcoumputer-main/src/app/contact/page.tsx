"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-6 gradient-text">Get in Touch</h2>
          <p className="mb-6 text-muted-foreground">
            We'd love to hear from you. Please feel free to contact us with any questions or inquiries.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 md:space-y-0 md:space-x-8 md:flex md:flex-wrap mb-12">
            <div className="flex items-center">
              <MapPin className="mr-4 text-primary" aria-hidden="true" />
              <p>123 Tech Street, Silicon Valley, CA 94000</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-4 text-primary" aria-hidden="true" />
              <p>
                <a href="tel:+15551234567" className="hover:underline text-primary">
                  +1 (555) 123-4567
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-4 text-primary" aria-hidden="true" />
              <p>
                <a href="mailto:info@vinayakcomputer.com" className="hover:underline text-primary">
                  info@vinayakcomputer.com
                </a>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Business Hours</h2>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          {/* Why Choose Us */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 gradient-text">Why Choose Us?</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Experienced and skilled professionals</li>
              <li>High-quality software and hardware solutions</li>
              <li>Reliable customer support</li>
              <li>Affordable pricing with no hidden costs</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Section - Enquiry Form */}
        <motion.div
          className="bg-white shadow-md rounded-xl p-6 md:p-10 h-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6 gradient-text">Enquiry Form</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Enquiry"
              rows={4}
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
