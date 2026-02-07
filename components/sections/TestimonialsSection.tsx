"use client";
import React, { useEffect, useState } from "react";
import { useInView, useVideoScroll } from "../../hooks";
import { scrollVideoContainer, scrollToVideoIndex } from "../../utils/helpers";
import TestimonialCard from "../Testimonialcard";

import {
  TESTIMONIALS,
  VIDEO_TESTIMONIALS,
  SUMMARY_STATS,
} from "../../constants";
import {
  HiStar,
  HiChevronLeft,
  HiChevronRight,
  HiSparkles,
  HiPlay,
} from "react-icons/hi2";

const TestimonialsSection: React.FC = () => {
  const [tRef, tVisible] = useInView();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const activeVideo = useVideoScroll("vidscroll", VIDEO_TESTIMONIALS.length);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const statConfigs = [
    {
      bgGradient: "from-orange-500/10 via-orange-400/5 to-orange-500/10",
      iconBg: "from-orange-500/15 to-orange-400/10",
      iconColor: "text-orange-500",
      accentGradient: "from-orange-500 via-orange-600 to-amber-500",
      glowColor: "shadow-orange-500/20",
      ringColor: "ring-orange-500/20",
    },
    {
      bgGradient: "from-emerald-500/10 via-emerald-400/5 to-emerald-500/10",
      iconBg: "from-emerald-500/15 to-emerald-400/10",
      iconColor: "text-emerald-500",
      accentGradient: "from-emerald-500 via-emerald-600 to-teal-500",
      glowColor: "shadow-emerald-500/20",
      ringColor: "ring-emerald-500/20",
    },
    {
      bgGradient: "from-blue-500/10 via-blue-400/5 to-blue-500/10",
      iconBg: "from-blue-500/15 to-blue-400/10",
      iconColor: "text-blue-500",
      accentGradient: "from-blue-500 via-blue-600 to-cyan-500",
      glowColor: "shadow-blue-500/20",
      ringColor: "ring-blue-500/20",
    },
    {
      bgGradient: "from-teal-500/10 via-teal-400/5 to-teal-500/10",
      iconBg: "from-teal-500/15 to-teal-400/10",
      iconColor: "text-teal-500",
      accentGradient: "from-teal-500 via-teal-600 to-cyan-500",
      glowColor: "shadow-teal-500/20",
      ringColor: "ring-teal-500/20",
    },
  ];

  return (
    <section
      ref={tRef}
      className="relative  mb-10 px-4 sm:px-6 bg-linear-to-b from-white via-[#FAFAFA] to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#FF6B35]/2 via-transparent to-transparent pointer-events-none" />

      {/* Animated background orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-300 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div
            className={`inline-block transition-all duration-700 ${
              tVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-2 bg-linear-to-r from-[#FF6B35]/10 to-[#FF6B35]/5 text-[#FF6B35] font-bold text-xs px-5 sm:px-6 py-2.5 rounded-full mb-5 tracking-[1.4px] font-poppins uppercase shadow-sm border border-[#FF6B35]/10">
              <HiStar className="w-4 h-4 animate-pulse" />
              IELTS Student Success Stories
            </span>
          </div>

          <h2
            className={`font-poppins text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-[#1a1a2e] mb-4 leading-[1.2] transition-all duration-700 delay-100 ${
              tVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            IELTS Aspirants.{" "}
            <span className="bg-linear-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
              Real Band Improvements.
            </span>
          </h2>

          <p
            className={`text-[#666] text-[15px] sm:text-[16px] max-w-155 mx-auto font-nunito leading-[1.75] transition-all duration-700 delay-200 ${
              tVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hear from IELTS test-takers who improved their{" "}
            <span className="font-semibold text-[#FF6B35]">
              Writing Band Scores
            </span>{" "}
            with expert strategies, clear structure, and examiner-focused
            guidance from{" "}
            <span className="font-semibold text-[#1a1a2e]">
              Abroad Scholars
            </span>
            .
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              visible={tVisible}
              delay={`${i * 0.12}s`}
            />
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mt-16 sm:mt-20">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 px-2 sm:px-0">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-linear-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 shadow-inner">
                  <span className="text-xl sm:text-2xl">🎬</span>
                </div>
                <h3 className="font-poppins text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#1a1a2e]">
                  Video Testimonials
                </h3>
              </div>
              <p className="font-nunito text-[#888] text-xs sm:text-sm lg:text-[15px] ml-14 sm:ml-15">
                Watch real student success stories in their own words
              </p>
            </div>

            {/* Navigation controls - Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-[#999] font-nunito mr-2">
                <span>Swipe or use arrows</span>
                <HiChevronRight className="w-4 h-4" />
              </div>
              <button
                onClick={() => scrollVideoContainer("vidscroll", -400)}
                className="group w-11 h-11 rounded-xl border-2 border-[#E8E8F0] bg-white cursor-pointer flex items-center justify-center transition-all hover:border-[#FF6B35] hover:shadow-lg hover:scale-105 active:scale-95"
                aria-label="Previous video"
              >
                <HiChevronLeft className="w-6 h-6 text-[#666] group-hover:text-[#FF6B35] transition-colors" />
              </button>
              <button
                onClick={() => scrollVideoContainer("vidscroll", 400)}
                className="group w-11 h-11 rounded-xl border-2 border-[#FF6B35] bg-linear-to-r from-[#FF6B35] to-[#FF8C42] cursor-pointer flex items-center justify-center transition-all hover:shadow-lg hover:shadow-[#FF6B35]/40 hover:scale-105 active:scale-95"
                aria-label="Next video"
              >
                <HiChevronRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation  */}
          <div className="flex sm:hidden items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
              <span className="text-xs font-semibold text-slate-600">
                {activeVideo + 1} / {VIDEO_TESTIMONIALS.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollVideoContainer("vidscroll", -300)}
                className="group w-9 h-9 rounded-xl border-2 border-[#E8E8F0] bg-white cursor-pointer flex items-center justify-center transition-all hover:border-[#FF6B35] active:scale-95"
                aria-label="Previous video"
              >
                <HiChevronLeft className="w-5 h-5 text-[#666] group-hover:text-[#FF6B35] transition-colors" />
              </button>
              <button
                onClick={() => scrollVideoContainer("vidscroll", 300)}
                className="group w-9 h-9 rounded-xl border-2 border-[#FF6B35] bg-linear-to-r from-[#FF6B35] to-[#FF8C42] cursor-pointer flex items-center justify-center transition-all active:scale-95"
                aria-label="Next video"
              >
                <HiChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Video scroll container */}
          <div
            id="vidscroll"
            className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-4 sm:pb-5 snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {VIDEO_TESTIMONIALS.map((video, i) => (
              <div
                key={i}
                className="group relative shrink-0 w-65 sm:w-75 lg:w-96 snap-center"
              >
                {/* Video Card */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg border-2 border-slate-100 transition-all duration-300 hover:shadow-2xl hover:border-[#FF6B35]/30 hover:-translate-y-1">
                  {/* Video Thumbnail Container */}
                  <div className="relative aspect-9/16 sm:aspect-video overflow-hidden bg-slate-100">
                    {/* Thumbnail Image */}
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.videoId}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Pulse rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/20 animate-ping" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white/30 animate-pulse" />
                        </div>

                        {/* Play button */}
                        <button
                          onClick={() => setActiveVideoId(video.videoId)}
                          className="relative cursor-pointer flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white/95 shadow-2xl transition-all hover:scale-110"
                        >
                          <HiPlay className="w-8 h-8 text-[#FF6B35]" />
                        </button>
                      </div>
                    </div>

                    {/* Score Badge (if available) */}
                    {video.score && (
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] rounded-full shadow-lg">
                        <HiStar className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        <span className="text-[10px] sm:text-xs font-bold text-white">
                          {video.score}
                        </span>
                      </div>
                    )}

                    {/* Duration Badge */}
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/80 backdrop-blur-sm rounded-md sm:rounded-lg">
                        <span className="text-[10px] sm:text-xs font-semibold text-white">
                          {video.duration}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced progress dots */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-5 sm:mt-6">
            {VIDEO_TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToVideoIndex("vidscroll", i)}
                className="relative rounded-full cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  width:
                    i === activeVideo
                      ? isMobile
                        ? 24
                        : 32
                      : isMobile
                        ? 8
                        : 10,
                  height: isMobile ? 8 : 10,
                  background:
                    i === activeVideo
                      ? "linear-gradient(135deg, #FF6B35, #FF8C42)"
                      : "#E0E0E8",
                }}
                aria-label={`Go to video ${i + 1}`}
              >
                {i === activeVideo && (
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#FF6B35] to-[#FF8C42] animate-pulse opacity-50" />
                )}
              </button>
            ))}
          </div>

          {/* Video counter  */}
          <div className="hidden sm:flex justify-center mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full">
              <p className="text-xs sm:text-sm text-[#999] font-nunito">
                <span className="font-bold text-[#FF6B35]">
                  {activeVideo + 1}
                </span>
                <span className="mx-1.5">/</span>
                <span>{VIDEO_TESTIMONIALS.length}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-50 to-amber-50 rounded-full mb-4 border border-orange-100">
              <HiSparkles className="w-4 h-4 text-orange-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-orange-600 tracking-wider uppercase">
                Our Impact
              </span>
            </div>
            <h3 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1a2e] mb-2">
              Numbers That{" "}
              <span className="bg-linear-to-r from-[#FF6B35] to-[#FF8C42] bg-clip-text text-transparent">
                Speak for Themselves
              </span>
            </h3>
            <p className="text-[#888] text-sm sm:text-base font-nunito max-w-2xl mx-auto">
              Real achievements from real students across the globe
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {SUMMARY_STATS.map((stat, idx) => {
              const config = statConfigs[idx];

              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 border-2 border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent ${config.glowColor} ${
                    tVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 0.1 + 0.5}s` }}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${config.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Animated ring effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl sm:rounded-3xl ring-2 ${config.ringColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon Container */}
                    <div
                      className={`relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl sm:rounded-3xl bg-linear-to-br ${config.iconBg} mb-4 sm:mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg ${config.glowColor}`}
                    >
                      {/* Pulse ring */}
                      <div
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-br ${config.iconBg} animate-ping opacity-20`}
                      />

                      {/* Icon */}
                      <stat.icon
                        className={`relative text-2xl sm:text-3xl lg:text-4xl ${config.iconColor} transition-transform duration-500 group-hover:scale-110`}
                      />
                    </div>

                    <div
                      className={`font-poppins text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a2e] mb-2 group-hover:scale-110 transition-all duration-300 bg-linear-to-br from-[#1a1a2e] to-slate-700 bg-clip-text`}
                    >
                      {stat.value}
                    </div>

                    <div className="text-xs sm:text-sm lg:text-base text-[#888] font-semibold font-nunito leading-tight px-2">
                      {stat.label}
                    </div>

                    {/* Decorative sparkle */}
                    <HiSparkles
                      className={`absolute top-3 right-3 w-4 h-4 sm:w-5 sm:h-5 ${config.iconColor} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12`}
                    />
                  </div>

                  {/* Bottom accent bar with shimmer */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 overflow-hidden rounded-b-2xl sm:rounded-b-3xl">
                    <div
                      className={`h-full bg-linear-to-r ${config.accentGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                    <div
                      className={`absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 group-hover:animate-shimmer`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute cursor-pointer top-3 right-3 text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
