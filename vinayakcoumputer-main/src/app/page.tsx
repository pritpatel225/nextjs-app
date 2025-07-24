"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Monitor, Cpu, HeadphonesIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FeatureCard = ({ icon, title, description }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const features = [
  {
    icon: <Monitor size={32} />,
    title: "Software Solutions",
    description: "Cutting-edge software to streamline your business processes.",
  },
  {
    icon: <Cpu size={32} />,
    title: "Computer Parts",
    description: "High-quality components for building and upgrading your systems.",
  },
  {
    icon: <HeadphonesIcon size={32} />,
    title: "Expert Support",
    description: "24/7 technical support to keep your operations running smoothly.",
  },
];

const faqs = [
  {
    question: "What software solutions do you offer?",
    answer: "We provide custom software, ERP systems, CRM applications, cloud-based solutions, and mobile apps.",
  },
  {
    question: "Do you provide installation services for computer parts?",
    answer: "Yes, we offer professional installation and optimization for your purchased components.",
  },
  {
    question: "What kind of warranty do you offer?",
    answer: "All parts come with manufacturer warranties (1-5 years). We also provide extended warranty options.",
  },
  {
    question: "How can I schedule technical support?",
    answer: "You can book support via our website, call our helpline, or visit our store. We also provide remote assistance.",
  },
  {
    question: "Do you offer bulk discounts for businesses?",
    answer: "Yes, we have special pricing for bulk orders. Contact us for a customized business quote.",
  },
  {
    question: "Can you help with data migration and recovery?",
    answer: "Absolutely! We provide secure data migration and industry-leading data recovery solutions.",
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button className="flex justify-between items-center w-full text-left focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? <ChevronUp className="text-primary h-5 w-5" /> : <ChevronDown className="text-primary h-5 w-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-muted-foreground"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Welcome to Vinayak Computer</h1>
   <Link href={"https://filthyrankscuffle.com/rr3w2b8f51?key=e91cf1fc1a009742ceedbb5c32d6c08c"}>Click on for Watch add</Link>
          <p className="text-xl mb-8 text-muted-foreground">Your one-stop solution for software and computer parts</p>
          <Link href="/services">
            <Button size="lg" className="rounded-full">
              Explore Our Services
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="mb-4">"Vinayak Computer has been instrumental in upgrading our IT infrastructure. Their expertise and support are unmatched!"</p>
            <p className="font-semibold">- John Doe, CEO of TechCorp</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="mb-4">"The quality of computer parts and the level of customer service provided by Vinayak Computer is exceptional. Highly recommended!"</p>
            <p className="font-semibold">- Jane Smith, CTO of InnovateTech</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button variant="outline" className="rounded-full">
                Contact Our Support Team
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
