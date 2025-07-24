"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Vinayak Computer
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Image
            src="/aboutsus.avif"
            alt="Vinayak Computer Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4 gradient-text">Our Mission</h2>
          <p className="mb-6 text-muted-foreground">
            At Vinayak Computer, we strive to provide cutting-edge software solutions and high-quality computer parts to
            empower businesses and individuals in the digital age. Our mission is to deliver exceptional products and
            services that enhance productivity, efficiency, and technological advancement for our clients.
          </p>
          <h2 className="text-2xl font-semibold mb-4 gradient-text">Our Team</h2>
          <p className="text-muted-foreground">
            Our team consists of passionate tech enthusiasts, experienced software developers, and knowledgeable
            hardware specialists. Together, we work tirelessly to ensure that our customers receive the best products
            and support in the industry.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

