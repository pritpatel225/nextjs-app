"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card"
import { Monitor, Cpu, HeadphonesIcon, Wrench, ShieldCheck, Cloud } from "lucide-react"

const services = [
  {
    title: "Software Solutions",
    description: "We offer a wide range of software solutions for businesses and individuals.",
    icon: <Monitor size={48} />,
  },
  {
    title: "Computer Parts",
    description: "High-quality computer components for building and upgrading your systems.",
    icon: <Cpu size={48} />,
  },
  {
    title: "Expert Support",
    description: "Our expert team provides top-notch support for all your software and hardware needs.",
    icon: <HeadphonesIcon size={48} />,
  },
  {
    title: "Software Maintenance",
    description: "Regular updates, bug fixes, and performance optimization for your software.",
    icon: <Wrench size={48} />,
  },
  {
    title: "Cybersecurity Solutions",
    description: "Protect your business with advanced cybersecurity solutions and threat prevention.",
    icon: <ShieldCheck size={48} />,
  },
  {
    title: "Cloud Services",
    description: "Seamless cloud integration and hosting solutions for your business needs.",
    icon: <Cloud size={48} />,
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 text-primary">{service.icon}</div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
