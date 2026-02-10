"use client";

import {
  FaRocket,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobeAmericas,
} from "react-icons/fa";
import { useInView } from "@/hooks";
import ModalForm from "../ModalForm";
import { useState } from "react";

const CTAAndFooter = () => {
  const [ctaRef, ctaVis] = useInView(0.2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        ref={ctaRef}
        className="relative py-16  px-4 sm:px-6 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0F0C29 0%, #1A1A2E 30%, #16213E 60%, #0F3460 100%)",
        }}
      >
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-float"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 12 + 8}s`,
              }}
            />
          ))}
        </div>

        {/* Decorative gradient blobs */}
        <div
          className="absolute w-100 h-100 rounded-full -top-32 -right-32 blur-[100px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-75 h-75 rounded-full -bottom-24 -left-24 blur-[80px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(247,201,72,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-175 mx-auto">
          {/* Heading */}
          <h2
            className={`font-poppins text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-white leading-[1.2] mb-5 transition-all duration-700 ${
              ctaVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Take the Next Step Towards
            <br />
            <span className="bg-linear-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Your IELTS Success
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-white/70 text-sm sm:text-base lg:text-lg mb-10 font-nunito leading-[1.75] max-w-145 mx-auto transition-all duration-700 delay-200 ${
              ctaVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Learn the same proven strategies that helped our students improve
            their IELTS band scores. Limited seats available for the upcoming
            batch.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className={`group inline-flex items-center justify-center gap-3 rounded-xl px-8 sm:px-10 py-4 sm:py-4.5 text-white font-poppins font-bold text-sm sm:text-base cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_44px_rgba(245,158,11,0.45)] mb-5 ${
              ctaVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
            }}
          >
            <FaRocket className="text-lg group-hover:animate-bounce" />
            <span>Join the Upcoming IELTS Batch</span>
          </button>

          {/* Trust badges */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/50 text-xs sm:text-sm font-nunito transition-all duration-700 delay-400 ${
              ctaVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              "7-Day Structured Training",
              "Online & Offline Available",
              "Proven Student Results",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400 text-sm" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-10 sm:py-12 px-4 sm:px-6 text-center relative overflow-hidden bg-linear-to-b from-white to-gray-50">
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,107,53,0.05) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-175 mx-auto relative z-10">
          {/* Logo & Brand */}
          <div className="mb-5">
            <div className="inline-flex items-center justify-center gap-2.5 mb-3 group">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-400/15 to-amber-500/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-amber-400/30">
                <FaGlobeAmericas className="text-amber-400 text-xl" />
              </div>
              <div className="text-[#1a1a2e] font-poppins text-xl sm:text-2xl font-extrabold">
                Abroad Scholars
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gray-600 text-sm sm:text-[15px] font-nunito mb-6 leading-relaxed">
            India's Trusted Study Abroad Consultants Since{" "}
            <span className="font-bold bg-linear-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              2009
            </span>
          </p>

          {/* Gradient Divider */}
          <div
            className="h-0.5 mb-6 mx-auto max-w-xs rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.5) 50%, transparent 100%)",
            }}
          />

          {/* Copyright */}
          <p className="text-gray-400 text-[11px] sm:text-xs font-nunito">
            © {new Date().getFullYear()} Abroad Scholars. All rights reserved.
          </p>
        </div>
      </footer>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CTAAndFooter;
