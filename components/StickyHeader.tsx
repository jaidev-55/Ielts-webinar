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
        <div className="absolute inset-0 bg-white/90 backdrop-blur-xl border-b border-gray-200/60" />

        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative py-2.5  flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative group">
              <Image
                src="/images/logo.svg"
                alt="Abroad Scholars"
                width={200}
                height={100}
                priority
                className="h-8 sm:h-9 lg:h-14 w-auto  object-cover transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3 mx-5 sm:mx-0">
            <div
              className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full shadow-sm border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,237,213,1) 0%, rgba(254,243,199,1) 100%)",
                borderColor: "rgba(251,146,60,0.3)",
              }}
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full animate-ping opacity-75" />
                <div className="relative w-2.5 h-2.5 bg-orange-500 rounded-full" />
              </div>
              <span className="text-xs lg:text-sm font-bold text-orange-700 whitespace-nowrap">
                Only <span className="text-orange-600">47 Seats</span> Left!
              </span>
            </div>

            {/* Urgency Badge - Mobile Only */}
            <div className="flex md:hidden items-center gap-1.5 px-2.5 py-1.5 bg-orange-50 border border-orange-200 rounded-full">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-[11px] font-bold text-orange-600">
                47 Left
              </span>
            </div>

            {/* Register Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative bg-linear-to-r from-orange-400 via-orange-500 to-orange-400 overflow-hidden text-white px-3 sm:px-5 lg:px-7 py-2 sm:py-2.5 cursor-pointer rounded-full sm:rounded-xl font-bold text-xs sm:text-sm lg:text-base  transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30  flex items-center gap-1.5 sm:gap-2 border-2 border-orange-400/50"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.05) translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(255,107,53,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(255,107,53,0.2)";
              }}
            >
              {/* Shimmer effect */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                }}
              />

              {/* Icon - Mobile */}
              <FaRocket className="w-3 h-3 sm:hidden text-white relative z-10" />

              {/* Text - Desktop */}
              <span className="relative z-10 font-extrabold hidden sm:inline tracking-wide">
                Register Free
              </span>

              {/* Text - Mobile */}
              <span className="relative z-10 font-extrabold sm:hidden">
                Join
              </span>

              {/* Arrow Icon */}
              <FaArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
            </button>
          </div>
        </div>

        {/* Bottom shadow */}
        <div
          className="absolute -bottom-3 left-0 right-0 h-3 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, transparent 100%)",
          }}
        />
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brochure={false}
      />
    </>
  );
};

export default StickyHeader;
