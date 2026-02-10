"use client";

import {
  FaBookOpen,
  FaChartLine,
  FaGraduationCap,
  FaInfinity,
  FaRocket,
  FaUserCheck,
} from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import RegistrationForm from "../Registrationform";
import Particles from "../Particles";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen mt-10 flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a2f6b 0%, #0b3a81 25%, #0d4aa3 50%, #0f5ec7 75%, #1170e4 100%)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 20s ease infinite",
      }}
    >
      <Particles />

      {/* Decorative glows */}
      <div
        className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full -top-20 sm:-top-32 -right-20 sm:-right-32 blur-[80px] sm:blur-[100px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.5) 0%, rgba(245,158,11,0.2) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-56 sm:w-80 h-56 sm:h-80 rounded-full -bottom-16 sm:-bottom-24 -left-16 sm:-left-24 blur-[70px] sm:blur-[90px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(251,191,36,0.35) 0%, rgba(245,158,11,0.15) 40%, transparent 70%)",
        }}
      />

      {/* Main layout */}
      <div className="max-w-7xl mx-auto w-full flex gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center relative z-10 flex-col lg:flex-row">
        {/* ── LEFT SIDE ── */}
        <div className="flex-1 w-full lg:max-w-160">
          {/* Live Badge - Mobile Optimized */}
          <div
            className="inline-flex items-start gap-2 rounded-2xl px-3.5 sm:px-5 py-2 sm:py-2.5 mb-4 sm:mb-6 animate-[fadeUp_0.8s_ease_0.2s_both] backdrop-blur-sm max-w-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(251,191,36,0.18) 0%, rgba(245,158,11,0.12) 100%)",
              border: "1.5px solid rgba(251,191,36,0.35)",
              boxShadow:
                "0 4px 16px rgba(251,191,36,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <span className="relative flex h-2 w-2 shrink-0 mt-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span
              className="font-bold text-[9px] sm:text-[11px] tracking-wider text-amber-400 uppercase leading-snug"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {/* Mobile: shorter text */}
              <span className="sm:hidden">
                Score Band 7+ in IELTS — Proven Strategies
              </span>
              {/* Desktop: full text */}
              <span className="hidden sm:inline">
                Learn How to Score Band 7+ in IELTS — Proven Strategies from
                Certified Experts
              </span>
            </span>
          </div>

          {/* ── HEADLINE - Mobile Optimized ── */}
          <h1
            className="font-extrabold leading-[1.15] mb-4 sm:mb-5 animate-[fadeUp_0.8s_ease_0.4s_both]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {/* Line 1 */}
            <span className="block text-[26px] sm:text-4xl lg:text-5xl xl:text-[52px] text-white drop-shadow-lg">
              Stuck at Band 4 or 5?
            </span>

            {/* Line 2 + 3 combined on mobile */}
            <span className="block text-[26px] sm:text-4xl lg:text-5xl xl:text-[43px] text-white drop-shadow-lg mt-0.5 sm:mt-1">
              Our 7-Day IELTS Strategy
              <br className="hidden sm:block" /> Improves Results
            </span>

            {/* Modules pill - scrollable on mobile */}
            <span
              className="flex sm:mt-5 items-center gap-1.5 mt-2.5 mb-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-base lg:text-lg font-semibold text-white/85 tracking-wide w-fit max-w-full overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                flexShrink: 0,
              }}
            >
              <span className=" whitespace-nowrap text-[11px] sm:text-base">
                Listening&nbsp;•&nbsp;Reading&nbsp;•&nbsp;Writing&nbsp;•&nbsp;Speaking
              </span>
            </span>

            {/* Online & Offline */}
            <span className="block text-[18px] sm:text-2xl lg:text-3xl xl:text-[34px] text-white/90 drop-shadow-lg"></span>

            {/* Amber CTA line */}
          </h1>

          {/* Subtitle */}
          <p
            className="text-xs sm:text-base lg:text-[17px] leading-relaxed mb-5 sm:mb-6 max-w-xl text-white/80 animate-[fadeUp_0.8s_ease_0.6s_both]"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Join our{" "}
            <strong className="text-white font-bold">
              expert-led IELTS preparation program
            </strong>{" "}
            designed for both{" "}
            <strong className="text-amber-400 font-bold">
              Academic &amp; General Training
            </strong>
            . Learn proven strategies, exam patterns, time-management
            techniques, and scoring frameworks used by high-band scorers.{" "}
            <strong className="text-green-400 font-bold">
              Achieve your target band score faster.
            </strong>
          </p>

          {/* Training Format */}
          <div className="mb-4 sm:mb-6 animate-[fadeUp_0.8s_ease_0.8s_both]">
            <p
              className="text-[9px] sm:text-[11px] uppercase tracking-[2px] mb-2.5 font-bold flex items-center gap-1.5 text-white/50"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <FaRocket className="text-amber-400 text-[10px]" />
              IELTS Training Format
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Live Sessions",
                "Recorded Access",
                "Mock Tests",
                "Expert Feedback",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 text-[10px] sm:text-sm font-semibold text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg"
                  style={{
                    background: "rgba(74,222,128,0.12)",
                    border: "1px solid rgba(74,222,128,0.25)",
                  }}
                >
                  <HiCheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-400 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Course Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-7 animate-[fadeUp_0.8s_ease_1s_both]">
            {[
              {
                icon: FaBookOpen,
                text: "Complete Coverage of All 4 IELTS Modules",
              },
              {
                icon: FaChartLine,
                text: "Proven Band Score Improvement Strategy",
              },
              { icon: FaUserCheck, text: "Certified IELTS Trainers & Mentors" },
              {
                icon: FaInfinity,
                text: "Flexible Learning — Online & Classroom",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-2.5 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-[11px] sm:text-[13px] font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <item.icon
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
                  style={{ color: "#4ADE80" }}
                />
                <span className="leading-tight">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3 animate-[fadeUp_0.8s_ease_1.2s_both]">
            <div className="flex">
              {["😊", "🤩", "😄", "🥳"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-xs sm:text-base border-2 shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)",
                    borderColor: "rgba(255,255,255,0.2)",
                    marginLeft: i > 0 ? -8 : 0,
                    boxShadow:
                      "0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p
              className="text-[11px] sm:text-[13px] text-white/70 leading-snug"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <strong className="text-green-400 font-bold">15,000+</strong>{" "}
              students trained •{" "}
              <span className="text-white/80">High success rate worldwide</span>
            </p>
          </div>
        </div>

        <div
          className="w-full lg:w-115 xl:w-125 lg:shrink-0 animate-[fadeUp_0.8s_ease_0.8s_both]"
          id="register"
        >
          <div
            className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)",
              boxShadow: `
                0 32px 80px rgba(11,58,129,0.28),
                0 12px 32px rgba(0,0,0,0.15),
                inset 0 1px 0 rgba(255,255,255,0.9)
              `,
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            {/* Amber top badge */}
            <div
              className="absolute whitespace-nowrap flex items-center gap-1.5 -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 font-bold text-[10px] sm:text-xs px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-xl animate-pulse"
              style={{
                background:
                  "linear-gradient(135deg, #FBBF24 0%, #F59E0B 60%, #FCD34D 100%)",
                color: "#FFFFFF",
                fontFamily: "'Poppins', sans-serif",
                boxShadow:
                  "0 6px 20px rgba(251,191,36,0.45), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              <FaGraduationCap className="text-xs sm:text-sm" />
              <span>Admissions Now Open</span>
            </div>

            {/* Form headline */}
            <h3
              className="text-lg sm:text-2xl lg:text-[26px] font-extrabold text-center mb-1.5 mt-3"
              style={{
                background: "linear-gradient(135deg, #0b3a81 0%, #0d4aa3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Register for Free
            </h3>

            <p
              className="text-[11px] sm:text-sm text-center mb-4 sm:mb-5 flex items-center justify-center gap-2"
              style={{ color: "#6B7280", fontFamily: "'Nunito', sans-serif" }}
            >
              <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
              Secure your spot in 30 seconds
            </p>

            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
