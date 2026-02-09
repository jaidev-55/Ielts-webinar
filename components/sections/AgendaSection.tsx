"use client";
import { TOPICS } from "@/constants";
import {
  HiOutlineBell,
  HiOutlineLightBulb,
  HiArrowRight,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import ModalForm from "../ModalForm";

const AgendaSection = () => {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const headerVariants: any = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  const descriptionVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative px-4 sm:px-6 lg:px-8 py-16 bg-linear-to-b from-white via-[#FAFAFA] to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 ">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 bg-linear-to-r from-amber-400/15 to-amber-500/10 text-amber-500 font-bold text-xs px-5 sm:px-6 py-2.5 rounded-full mb-5 tracking-[1.4px] font-poppins uppercase shadow-sm border border-amber-400/20">
              <HiOutlineBell className="w-3.5 h-3.5 animate-pulse" />
              Complete IELTS Training Curriculum
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
            className="font-poppins text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[52px] font-extrabold text-[#1a1a2e] mb-4 leading-[1.2] px-4"
          >
            Master All 4 IELTS Modules
            <br />
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #FBBF24, #F59E0B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Listening • Reading • Writing • Speaking
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={descriptionVariants}
            className="text-[#666] text-[15px] sm:text-[17px] max-w-4xl mx-auto font-nunito leading-[1.75] px-4"
          >
            Get comprehensive training in all four IELTS modules with{" "}
            <span className="font-semibold text-[#1a1a2e]">
              expert-led strategies
            </span>{" "}
            designed for both{" "}
            <span className="font-semibold text-amber-600">
              Academic & General Training
            </span>
            . Learn proven techniques, time management, scoring frameworks, and{" "}
            <span className="font-semibold text-[#1a1a2e]">
              examiner expectations
            </span>{" "}
            to achieve your{" "}
            <span className="font-bold text-green-600">
              target band score in your first attempt
            </span>
            .
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 sm:mt-8 w-full flex justify-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative overflow-hidden bg-amber-400 text-white px-3 sm:px-5 lg:px-8 py-2 sm:py-2.5 lg:py-3 cursor-pointer rounded-full sm:rounded-xl font-bold text-xs sm:text-sm lg:text-base transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 border border-amber-400/50"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12" />
              </span>

              <span>Start Your IELTS Journey Free</span>
              <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Topics Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
        >
          {TOPICS.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#ECECF3] cursor-pointer shadow-sm hover:shadow-[0_18px_50px_rgba(245,158,11,0.18)] hover:border-amber-400/40 transition-all duration-300"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(245,158,11,0.04) 0%, transparent 100%)",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-amber-500 mb-4 sm:mb-5 shadow-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.07) 100%)",
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 6,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <Icon className="text-2xl sm:text-3xl" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1a1a2e] mb-2 sm:mb-3 font-poppins leading-[1.3] group-hover:text-amber-600 transition-colors duration-300">
                    {t.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[15px] text-[#6F6F7A] leading-[1.6] font-nunito">
                    {t.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl sm:rounded-b-3xl"
                  style={{
                    background: "linear-gradient(90deg, #FBBF24, #F59E0B)",
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 w-full flex flex-col items-center"
        >
          {/* Info Text */}
          <p className="text-sm sm:text-base text-[#777] font-nunito mb-6 flex items-center justify-center gap-2 flex-wrap text-center">
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <HiOutlineLightBulb className="w-5 h-5 text-amber-500" />
            </motion.span>
            <span>
              Live classes, recorded sessions, mock tests, and expert feedback
              included
            </span>
          </p>

          {/* CTA */}
          <div className="flex justify-center w-full">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group cursor-pointer relative overflow-hidden bg-amber-400 text-white
        px-6 sm:px-8 lg:px-10
        py-3 sm:py-3 
        rounded-full sm:rounded-full
        font-bold text-sm sm:text-base lg:text-lg
        transition-all duration-300
        hover:shadow-xl hover:shadow-amber-500/30
        hover:scale-105 active:scale-95
        flex items-center justify-center gap-2
        border border-amber-400/50"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12" />
              </span>

              <span className="relative z-10">Reserve Your Free Seat Now</span>
              <HiArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex items-center justify-center gap-6 flex-wrap text-xs sm:text-sm text-gray-500 font-nunito">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              15,000+ Students Trained
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              100% Free Registration
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Certified IELTS Experts
            </span>
          </div>
        </motion.div>
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brochure={false}
      />
    </section>
  );
};

export default AgendaSection;
