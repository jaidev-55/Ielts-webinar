"use client";
import React, { useState } from "react";
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
      className="relative mb-8 sm:mb-10 px-4 sm:px-6 bg-linear-to-b from-white via-[#FAFAFA] to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-amber-400/3 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -left-10 sm:-left-20 w-40 sm:w-64 h-40 sm:h-64 bg-orange-200/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 -right-10 sm:-right-20 w-52 sm:w-80 h-52 sm:h-80 bg-amber-200/20 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: "700ms" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center pt-12 sm:pt-16 mb-8 sm:mb-10 px-2">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ${tVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-linear-to-r from-amber-400/15 to-amber-500/10 text-amber-500 font-bold text-[10px] sm:text-xs px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-5 tracking-[1.2px] sm:tracking-[1.4px] font-poppins uppercase shadow-sm border border-amber-400/20">
              <HiStar className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse shrink-0" />
              Real Students, Real Success Stories
            </span>
          </div>

          {/* Title */}
          <h2
            className={`font-poppins font-extrabold text-[#1a1a2e] mb-3 sm:mb-4 leading-[1.2] transition-all duration-700 delay-100 ${tVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="block text-[22px] sm:text-3xl lg:text-4xl xl:text-5xl">
              See How Our Students
            </span>
            <span
              className="block text-[22px] sm:text-3xl lg:text-4xl xl:text-5xl mt-0.5"
              style={{
                background: "linear-gradient(135deg, #FBBF24, #F59E0B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Improved Their IELTS Band Scores.
            </span>
          </h2>

          {/* Description */}
          <p
            className={`text-[#666] text-[13px] sm:text-base lg:text-lg max-w-2xl mx-auto font-nunito leading-relaxed transition-all duration-700 delay-200 mb-5 sm:mb-6 ${tVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
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

          {/* CTA */}
          <div
            className={`transition-all duration-700 delay-300 ${tVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative overflow-hidden cursor-pointer bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm lg:text-base transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 border border-amber-300/30"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12" />
              </span>
              <span className="relative z-10">
                Book Your IELTS Consultation
              </span>
            </button>
          </div>
        </div>

        {/* ── VIDEO TESTIMONIALS ── */}
        <div className="my-10 sm:my-14 lg:my-16">
          {/* Video header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-5 sm:mb-7 gap-3 sm:gap-4 px-1 sm:px-0">
            <div className="flex-1">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5">
                <div className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-linear-to-br from-amber-400/15 to-amber-500/10 shadow-inner shrink-0">
                  <HiPlayCircle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                </div>
                <h3 className="font-poppins text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-extrabold text-[#1a1a2e]">
                  Video Testimonials
                </h3>
              </div>
              <p className="font-nunito text-[#777] text-[11px] sm:text-sm lg:text-[15px] ml-12 sm:ml-14">
                Hear directly from IELTS learners about their experience
              </p>
            </div>

            {/* Desktop navigation only */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="text-xs sm:text-sm text-[#999] font-nunito hidden lg:block">
                Swipe or use arrows
              </span>
              <button
                onClick={() => scrollVideoContainer("vidscroll", -400)}
                className="group cursor-pointer w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl border border-slate-200 bg-white flex items-center justify-center transition-all hover:border-amber-400 hover:shadow-md"
                aria-label="Previous"
              >
                <HiChevronLeft className="w-5 h-5 text-[#666] group-hover:text-amber-500" />
              </button>
              <button
                onClick={() => scrollVideoContainer("vidscroll", 400)}
                className="group w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 cursor-pointer rounded-xl border border-amber-400 bg-linear-to-r from-amber-400 to-amber-500 flex items-center justify-center transition-all hover:shadow-lg"
                aria-label="Next"
              >
                <HiChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile nav - top of scroll */}
          <div className="flex sm:hidden items-center justify-between mb-3 px-1">
            <span className="text-[11px] text-[#999] font-nunito">
              Swipe to explore →
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => scrollVideoContainer("vidscroll", -300)}
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center"
              >
                <HiChevronLeft className="w-4 h-4 text-[#666]" />
              </button>
              <button
                onClick={() => scrollVideoContainer("vidscroll", 300)}
                className="w-8 h-8 rounded-lg bg-linear-to-r from-amber-400 to-amber-500 flex items-center justify-center"
              >
                <HiChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Scroll container */}
          <div
            id="vidscroll"
            className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {VIDEO_TESTIMONIALS.map((video, i) => (
              <div
                key={i}
                className="group relative shrink-0 w-50 sm:w-64 lg:w-72 xl:w-80 snap-center"
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-slate-100 transition-all hover:shadow-xl hover:border-amber-400/30">
                  <div className="relative aspect-9/16 overflow-hidden bg-slate-100">
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
                        className="flex items-center cursor-pointer justify-center w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-white/95 shadow-xl transition-all hover:scale-110 active:scale-95"
                      >
                        <HiPlay className="w-5 h-5 sm:w-7 sm:h-7 text-amber-500" />
                      </button>
                    </div>

                    {/* Score badge */}
                    {video.score && (
                      <div className="absolute top-2.5 right-2.5 px-2 sm:px-3 py-1 bg-linear-to-r from-amber-400 to-amber-500 rounded-full shadow-md flex items-center gap-1">
                        <HiStar className="w-3 h-3 text-white" />
                        <span className="text-[10px] sm:text-xs font-bold text-white">
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
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-5">
            {VIDEO_TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToVideoIndex("vidscroll", i)}
                className="rounded-full transition-all"
                style={{
                  width: i === activeVideo ? 24 : 7,
                  height: 7,
                  background:
                    i === activeVideo
                      ? "linear-gradient(135deg, #FBBF24, #F59E0B)"
                      : "#E5E7EB",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── TESTIMONIAL CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              visible={tVisible}
              delay={`${i * 0.12}s`}
            />
          ))}
        </div>

        {/* ── STATS SECTION ── */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          {/* Stats header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-linear-to-r from-amber-50 to-amber-100/60 rounded-full mb-3 sm:mb-4 border border-amber-200/40">
              <HiSparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold text-amber-600 tracking-wider uppercase">
                Our Impact
              </span>
            </div>
            <h3 className="font-poppins font-extrabold text-[#1a1a2e] mb-2 leading-[1.2]">
              <span className="block text-[22px] sm:text-2xl lg:text-3xl xl:text-4xl">
                Numbers That{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FBBF24, #F59E0B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Speak for Themselves
                </span>
              </span>
            </h3>
            <p className="text-[#888] text-[13px] sm:text-sm lg:text-base font-nunito max-w-xl mx-auto">
              Real achievements from real students across the globe
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
            {SUMMARY_STATS.map((stat, idx) => {
              const config = statConfigs[idx];
              return (
                <div
                  key={idx}
                  className={`group relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 xl:p-8 border-2 border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-transparent ${config.glowColor} ${
                    tVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 0.1 + 0.5}s` }}
                >
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${config.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl sm:rounded-3xl ring-2 ${config.ringColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-linear-to-br ${config.iconBg} mb-3 sm:mb-4 lg:mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md ${config.glowColor}`}
                    >
                      <div
                        className={`absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-linear-to-br ${config.iconBg} animate-ping opacity-20`}
                      />
                      <stat.icon
                        className={`relative text-xl sm:text-2xl lg:text-3xl xl:text-4xl ${config.iconColor} transition-transform duration-500 group-hover:scale-110`}
                      />
                    </div>

                    {/* Value */}
                    <div className="font-poppins text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#1a1a2e] mb-1.5 sm:mb-2 group-hover:scale-110 transition-all duration-300">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-[11px] sm:text-xs lg:text-sm xl:text-base text-[#888] font-semibold font-nunito leading-tight px-1 sm:px-2">
                      {stat.label}
                    </div>

                    {/* Sparkle */}
                    <HiSparkles
                      className={`absolute top-2.5 right-2.5 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${config.iconColor} opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12`}
                    />
                  </div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 overflow-hidden rounded-b-2xl sm:rounded-b-3xl">
                    <div
                      className={`h-full bg-linear-to-r ${config.accentGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/85 px-3 sm:px-4"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-xs sm:max-w-2xl lg:max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
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
              className="absolute cursor-pointer top-2.5 right-2.5 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white font-bold text-base transition-all"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default TestimonialsSection;
