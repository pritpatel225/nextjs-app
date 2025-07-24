"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Cpu, Monitor, HeadphonesIcon, ArrowRight } from "lucide-react";

// Add product images
const products = [
  {
    icon: <Monitor size={32} />,
    image: "@/public/images/moniter.jpg",
    name: "UltraSharp LED Monitor",
    description: "27-inch full HD monitor with crisp visuals and color accuracy.",
    price: "₹14,999",
  },
  {
    icon: <Cpu size={32} />,
    image: "@/public/images/mouse.jpg",
    name: "Intel i7 12th Gen Processor",
    description: "High-performance CPU for gaming, design, and development.",
    price: "₹24,499",
  },
  {
    icon: <HeadphonesIcon size={32} />,
    image: "@/public/images/headphone.jpg",
    name: "Wireless Headphones",
    description: "Noise-canceling, long battery life and ultra-comfort fit.",
    price: "₹4,299",
  },
  // Add more products with images...
];

const ProductCard = ({ icon, image, name, description, price }: any) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <div className="text-primary mb-2">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-muted-foreground mb-2">{description}</p>
    <p className="font-bold text-primary mb-4">{price}</p>
    <Button variant="outline">Buy Now</Button>
  </motion.div>
);

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold gradient-text mb-4">Our Products</h1>
        <p className="text-muted-foreground text-lg">
          Explore our wide range of tech essentials, hand-picked for performance.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <p className="text-xl text-muted-foreground mb-4">
          Looking for something custom or need help choosing?
        </p>
        <Link href="/contact">
          <Button className="rounded-full">
            Contact Sales Team
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
