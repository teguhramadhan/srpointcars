"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OurServicesHero() {
  const ref = useRef<HTMLDivElement>(null);

  // Hook scroll progress section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Buat translateY - Parallax
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          backgroundImage: "url('/images/projects/projects_hero.jpeg')",
          y: y,
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
      />

      {/* Primary color overlay with geometric pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Geometric accent elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-20"></div>
      <div className="absolute top-8 left-8 w-16 h-16 border-4 border-white opacity-30 animate-bounce"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-4 border-white opacity-25 animate-spin"></div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white"
      >
        {/* Title with primary accent box */}
        <div className="relative inline-block mb-8">
          <h1 className="text-4xl md:text-7xl font-bebas px-8 py-4 bg-white text-primary relative z-10">
            Project Kami
          </h1>
          {/* Accent borders */}
          <div className="absolute -top-2 -left-2 w-full h-full border-4 border-white"></div>
          <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-white"></div>
        </div>

        {/* Breadcrumb with enhanced styling */}
        <div className="relative">
          <div className="inline-block px-8 py-3">
            <p className="text-lg md:text-xl font-thin uppercase tracking-wider">
              Home / <span className="font-bold text-white">Projects</span>
            </p>
          </div>
          {/* Side accents */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-white"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-white"></div>
        </div>
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white"></div>
    </section>
  );
}
