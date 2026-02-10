"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import ModalForm from "./ModalForm";

interface StickyHeaderProps {
  visible: boolean;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ visible }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Background with blur */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/60" />

        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center shrink-0">
            <div className="relative group">
              <Image
                src="/images/logo.svg"
                alt="Abroad Scholars"
                width={200}
                height={100}
                priority
                className="h-7 sm:h-9 lg:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Admissions Badge */}
            <div
              className="hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-full shadow-sm border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,237,213,1) 0%, rgba(254,243,199,1) 100%)",
                borderColor: "rgba(251,146,60,0.3)",
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-amber-500 rounded-full animate-ping opacity-75" />
                <div className="relative w-2.5 h-2.5 bg-amber-500 rounded-full" />
              </div>
              <span className="text-sm  font-bold text-amber-700 whitespace-nowrap">
                Admissions <span className="text-amber-600">Now Open</span>
              </span>
            </div>

            {/* Tablet Admissions Badge */}
            <div className="hidden md:flex lg:hidden items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-amber-600">
                Admissions Open
              </span>
            </div>

            {/* Register Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group  relative overflow-hidden bg-amber-400 text-white px-3 sm:px-5 lg:px-8 py-2 sm:py-2.5 lg:py-3 cursor-pointer rounded-full sm:rounded-xl font-bold text-xs sm:text-sm lg:text-base transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2 border border-amber-400/50"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12" />
              </span>

              <FaRocket className="w-3.5 h-3.5 sm:hidden relative z-10 drop-shadow-sm" />

              <span className="relative cursor-pointer z-10 font-extrabold  sm:inline tracking-wide drop-shadow-sm">
                Apply Now
              </span>

              <FaArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 relative z-10 transition-transform group-hover:translate-x-1 group-hover:scale-110 drop-shadow-sm" />
            </button>
          </div>
        </div>

        {/* Bottom shadow  */}
        <div
          className="absolute -bottom-2 left-0 right-0 h-2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.03) 0%, transparent 100%)",
          }}
        />
      </div>

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default StickyHeader;
