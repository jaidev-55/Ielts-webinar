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
  HiPlayCircle,
} from "react-icons/hi2";
import ModalForm from "../ModalForm";

const TestimonialsSection: React.FC = () => {
  const [tRef, tVisible] = useInView();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <span className="inline-flex items-center gap-2 bg-linear-to-r from-amber-400/15 to-amber-500/10 text-amber-500 font-bold text-xs px-5 sm:px-6 py-2.5 rounded-full mb-5 tracking-[1.4px] font-poppins uppercase shadow-sm border border-amber-400/20">
              <HiStar className="w-4 h-4 animate-pulse" />
              Real Students, Real Success Stories
            </span>
          </div>

          <h2
            className={`font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-3 sm:mb-4 leading-tight transition-all duration-700 delay-100 ${
              tVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Master All 4 IELTS Skills.
            <span className="block sm:inline bg-linear-to-r from-amber-400 to-amber-500 bg-clip-text sm:pl-2 text-transparent">
              Achieve Your Dream Score.
            </span>
          </h2>

          <p
            className={`text-[#666] text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-nunito leading-relaxed transition-all duration-700 delay-200 mb-6 ${
              tVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Join thousands of successful IELTS candidates who mastered{" "}
            <span className="font-semibold text-amber-500">
              Listening, Reading, Writing, and Speaking
            </span>{" "}
            with expert guidance from{" "}
            <span className="font-semibold text-[#1a1a2e]">
              certified IELTS trainers
            </span>{" "}
            at Abroad Scholars.
          </p>
          <div
            className={`transition-all duration-700 delay-300
    ${tVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
    flex justify-center w-full
  `}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative overflow-hidden cursor-pointer
      bg-amber-400 text-white
      px-3 sm:px-5 lg:px-8
      py-2 sm:py-2.5 lg:py-3
      rounded-full
      font-bold text-xs sm:text-sm lg:text-base
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

              <span className="relative z-10">
                Book Your Free IELTS Consultation
              </span>
            </button>
          </div>
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
                <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-linear-to-br from-amber-400/15 to-amber-500/10 shadow-inner">
                  <HiPlayCircle className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-poppins text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#1a1a2e]">
                  Video Testimonials
                </h3>
              </div>
              <p className="font-nunito text-[#777] text-xs sm:text-sm lg:text-[15px] ml-14 sm:ml-15">
                Hear directly from IELTS learners about their preparation
                experience
              </p>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-[#999] font-nunito mr-2">
                <span>Swipe or use arrows</span>
                <HiChevronRight className="w-4 h-4" />
              </div>

              <button
                onClick={() => scrollVideoContainer("vidscroll", -400)}
                className="group cursor-pointer w-11 h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center transition-all hover:border-amber-400 hover:shadow-md"
                aria-label="Previous video"
              >
                <HiChevronLeft className="w-6 h-6 text-[#666] group-hover:text-amber-500" />
              </button>

              <button
                onClick={() => scrollVideoContainer("vidscroll", 400)}
                className="group w-11 h-11 cursor-pointer rounded-xl border border-amber-400 bg-linear-to-r from-amber-400 to-amber-500 flex items-center justify-center transition-all hover:shadow-lg"
                aria-label="Next video"
              >
                <HiChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Video scroll container */}
          <div
            id="vidscroll"
            className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {VIDEO_TESTIMONIALS.map((video, i) => (
              <div
                key={i}
                className="group relative shrink-0 w-64 sm:w-72 lg:w-80 snap-center"
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-slate-100 transition-all hover:shadow-xl hover:border-amber-400/30">
                  <div className="relative aspect-9/16 min-h-105 sm:min-h-115 lg:min-h-130 overflow-hidden bg-slate-100">
                    <img
                      src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                      alt={video.videoId}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setActiveVideoId(video.videoId)}
                        className="flex items-center cursor-pointer justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 shadow-xl transition-all hover:scale-110"
                      >
                        <HiPlay className="w-7 h-7 text-amber-500" />
                      </button>
                    </div>

                    {/* Optional score badge */}
                    {video.score && (
                      <div className="absolute top-3 right-3 px-3 py-1 bg-linear-to-r from-amber-400 to-amber-500 rounded-full shadow-md flex items-center gap-1">
                        <HiStar className="w-3.5 h-3.5 text-white" />
                        <span className="text-xs font-bold text-white">
                          {video.score}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {VIDEO_TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToVideoIndex("vidscroll", i)}
                className="rounded-full transition-all"
                style={{
                  width: i === activeVideo ? 28 : 8,
                  height: 8,
                  background:
                    i === activeVideo
                      ? "linear-gradient(135deg, #FBBF24, #F59E0B)"
                      : "#E5E7EB",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-amber-50 to-amber-100/60 rounded-full mb-4 border border-amber-200/40">
              <HiSparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-amber-600 tracking-wider uppercase">
                Our Impact
              </span>
            </div>
            <h3 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1a2e] mb-2">
              Numbers That{" "}
              <span className="bg-linear-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
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

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brochure={false}
      />
    </section>
  );
};

export default TestimonialsSection;
