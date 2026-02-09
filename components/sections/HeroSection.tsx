"use client";

import {
  FaBookOpen,
  FaChartLine,
  FaGraduationCap,
  FaInfinity,
  FaRocket,
  FaUserCheck,
} from "react-icons/fa";
import RegistrationForm from "../Registrationform";
import Particles from "../Particles";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen mt-10 flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 overflow-hidden"
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
        className="absolute w-96 h-96 rounded-full -top-32 -right-32 blur-[100px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,53,0.4) 0%, rgba(255,140,66,0.2) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full -bottom-24 -left-24 blur-[90px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(247,201,72,0.35) 0%, rgba(255,193,7,0.15) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-150 h-150 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full flex gap-8 lg:gap-12 xl:gap-16 items-center relative z-10 flex-col lg:flex-row">
        {/* Left side - Content */}
        <div className="flex-1 w-full lg:max-w-155">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-5 sm:mb-6 animate-[fadeUp_0.8s_ease_0.2s_both] backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,140,66,0.12) 100%)",
              border: "1.5px solid rgba(255,107,53,0.3)",
              boxShadow:
                "0 4px 16px rgba(255,107,53,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-lg shadow-green-500/50"></span>
            </span>
            <span className="font-bold text-[10px] sm:text-xs tracking-wide text-amber-400 uppercase">
              FREE IELTS MASTERCLASS — ALL 4 MODULES (ACADEMIC & GENERAL)
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-extrabold leading-[1.15] mb-4 sm:mb-5 animate-[fadeUp_0.8s_ease_0.4s_both]">
            <span className="text-white drop-shadow-lg">
              Crack IELTS with Confidence
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold opacity-90">
                Listening • Reading • Writing • Speaking
              </span>
            </span>
            <br />
            <span className="inline-block text-amber-400 drop-shadow-lg">
              In Your First Attempt
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed mb-6 sm:mb-8 max-w-2xl text-white/85 animate-[fadeUp_0.8s_ease_0.6s_both]">
            Join our{" "}
            <strong className="text-white">
              expert-led IELTS preparation program
            </strong>{" "}
            designed for both{" "}
            <strong className="text-amber-400">
              Academic & General Training
            </strong>
            . Learn proven strategies, exam patterns, time-management
            techniques, and scoring frameworks used by high-band scorers.
            <br className="hidden sm:block" />
            Get clarity, structure, and confidence to achieve your
            <strong className="text-green-400">
              {" "}
              target band score faster.
            </strong>
          </p>

          {/* Training Format */}
          <div className="mb-6 sm:mb-8 animate-[fadeUp_0.8s_ease_0.8s_both]">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] mb-3 font-bold flex items-center gap-2 text-white/60">
              <FaRocket className="text-amber-400 text-xs" />
              IELTS TRAINING FORMAT
            </p>

            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-xl px-4 sm:px-5 py-3 sm:py-3.5 backdrop-blur-sm border border-green-400/30 bg-green-500/10 text-white">
              <span className="text-xs sm:text-sm font-semibold">
                Live sessions • Recorded access • Mock tests • Expert feedback
              </span>
            </div>
          </div>

          {/* Course Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-7 animate-[fadeUp_0.8s_ease_1s_both]">
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
                className="rounded-xl px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-[13px] font-semibold flex items-center gap-2.5 backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255, 255, 255, 0.9)",
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

          {/* Social proof */}
          <div className="flex items-center gap-3 sm:gap-4 animate-[fadeUp_0.8s_ease_1.2s_both]">
            <div className="flex">
              {["😊", "🤩", "😄", "🥳"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-sm sm:text-base lg:text-lg border-2 transition-transform hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)",
                    borderColor: "rgba(255,255,255,0.2)",
                    marginLeft: i > 0 ? -10 : 0,
                    boxShadow:
                      "0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-xs sm:text-[13px] text-white/70 leading-tight">
              <strong className="text-green-400 font-bold">15,000+</strong>{" "}
              students trained •{" "}
              <span className="text-white/80">High success rate worldwide</span>
            </span>
          </div>
        </div>

        {/* Right side */}
        <div
          className="flex-1 w-full max-w-125 lg:max-w-120 xl:max-w-130 animate-[fadeUp_0.8s_ease_0.8s_both]"
          id="register"
        >
          <div
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 relative backdrop-blur-sm"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)",
              boxShadow: `
                0 30px 80px rgba(11, 58, 129, 0.25),
                0 10px 30px rgba(0, 0, 0, 0.15),
                inset 0 1px 0 rgba(255,255,255,0.8)
              `,
              border: "1px solid rgba(255,255,255,0.5)",
            }}
          >
            {/* Top Badge */}
            <div
              className="absolute whitespace-nowrap flex items-center gap-1.5 sm:gap-2 -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 font-bold text-[11px] sm:text-xs px-4 sm:px-6 py-1.5 sm:py-2 rounded-full animate-pulse shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #FCD34D 100%)",
                color: "#FFFFFF",
                fontFamily: "'Poppins', sans-serif",
                boxShadow: `
                  0 6px 20px rgba(251, 191, 36, 0.4),
                  0 2px 8px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255,255,255,0.3)
                `,
              }}
            >
              <FaGraduationCap className="text-xs sm:text-sm" />
              <span>Admissions Now Open</span>
            </div>

            {/* Form Header */}
            <h3
              className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-center mb-2 mt-2 sm:mt-3"
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
              className="text-xs sm:text-sm text-center mb-5 sm:mb-6 flex items-center justify-center gap-2"
              style={{
                color: "#6B7280",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Secure your spot in 30 seconds
            </p>

            <RegistrationForm brochure={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
