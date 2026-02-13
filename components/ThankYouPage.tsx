"use client";
import { useEffect, useState, useCallback } from "react";
import {
  FaWhatsapp,
  FaArrowLeft,
  FaStar,
  FaUserGraduate,
  FaUsers,
  FaDownload,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BsShieldFillCheck } from "react-icons/bs";

import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";
interface ConfettiParticle {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
  rotation: number;
  duration: number;
  drift: number;
  shape: "circle" | "rect" | "diamond";
}

interface ThankYouPageProps {
  studentName?: string;
  onBack?: () => void;
}

/* ─── Confetti ─── */
const CONFETTI_COLORS = [
  "#FFD700",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
  "#F8C471",
  "#82E0AA",
  "#F1948A",
  "#AED6F1",
  "#D7BDE2",
  "#A3E4D7",
  "#FAD7A0",
  "#EC4899",
  "#8B5CF6",
];

function generateConfetti(count = 100): ConfettiParticle[] {
  const shapes: ("circle" | "rect" | "diamond")[] = [
    "circle",
    "rect",
    "diamond",
  ];
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 3 + Math.random() * 94,
    delay: Math.random() * 0.5,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size: 4 + Math.random() * 10,
    rotation: Math.random() * 360,
    duration: 2.5 + Math.random() * 2,
    drift: -80 + Math.random() * 160,
    shape: shapes[Math.floor(Math.random() * shapes.length)],
  }));
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onBack }) => {
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);
  const [stage, setStage] = useState(0);
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Student";
  const brochure = searchParams.get("brochure") === "true";

  useEffect(() => {
    setConfetti(generateConfetti(100));
    const timers = [
      setTimeout(() => setStage(1), 50),
      setTimeout(() => setStage(2), 350),
      setTimeout(() => setStage(3), 700),
      setTimeout(() => setStage(4), 1050),
      setTimeout(() => setStage(5), 1350),
      setTimeout(() => setStage(6), 1650),
      setTimeout(() => setConfetti([]), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleWhatsApp = useCallback(() => {
    const phoneNumber = "919500117792";
    const message = encodeURIComponent(
      brochure
        ? `Hi, this is ${name}. I just downloaded the IELTS preparation guide. Can you help me with the next steps?`
        : `Hi, this is ${name}. I’ve registered for the IELTS coaching. Can you please tell me what to do next?`,
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  }, [name, brochure]);

  const handleBack = useCallback(() => {
    if (onBack) onBack();
    else window.location.href = "/";
  }, [onBack]);

  /* ── Dynamic content based on brochure vs webinar ── */
  const heading = brochure ? "Guide Downloaded!" : "You\u2019re All Set!";
  const confirmText = brochure
    ? "Download started successfully"
    : "Confirmation email sent";
  const iconBgFrom = brochure ? "#F59E0B" : "#10B981";
  const iconBgTo = brochure ? "#D97706" : "#059669";
  const iconBgEnd = brochure ? "#B45309" : "#047857";
  const rippleColor = brochure ? "border-amber-500" : "border-emerald-500";
  const glowColor = brochure
    ? "0 0 20px rgba(245,158,11,0.25), 0 0 50px rgba(245,158,11,0.06)"
    : "0 0 20px rgba(16,185,129,0.25), 0 0 50px rgba(16,185,129,0.06)";
  const glowColorHigh = brochure
    ? "0 0 30px rgba(245,158,11,0.4), 0 0 70px rgba(245,158,11,0.12)"
    : "0 0 30px rgba(16,185,129,0.4), 0 0 70px rgba(16,185,129,0.12)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes confettiFall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
          12% { opacity: 1; }
          100% { transform: translateY(105vh) translateX(var(--drift)) rotate(calc(var(--rot) + 720deg)); opacity: 0; }
        }
        @keyframes rippleOut {
          0% { transform: translate(-50%,-50%) scale(0.8); opacity: 0.45; }
          100% { transform: translate(-50%,-50%) scale(2.4); opacity: 0; }
        }
        @keyframes iconPop {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          55% { transform: scale(1.15) rotate(8deg); opacity: 1; }
          78% { transform: scale(0.95) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes slideUpFade {
          0% { transform: translateY(24px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes cardEntrance {
          0% { transform: translateY(40px) scale(0.94); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: ${glowColor}; }
          50% { box-shadow: ${glowColorHigh}; }
        }
        @keyframes sparkleSpin {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
          50% { transform: scale(1.3) rotate(180deg); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bgShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes badgePop {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); opacity: 0.1; }
          50% { transform: translate(12px, -20px); opacity: 0.18; }
        }
        @keyframes confirmSlide {
          0% { transform: translateY(16px) scale(0.95); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-dm { font-family: 'DM Sans', sans-serif; }
      `}</style>

      {/* ── Confetti ── */}
      {confetti.map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none"
          style={{
            zIndex: 9999,
            left: `${p.left}%`,
            top: -16,
            width: p.size,
            height: p.shape === "rect" ? p.size * 0.55 : p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            transform: p.shape === "diamond" ? "rotate(45deg)" : undefined,
            opacity: 0,
            boxShadow: `0 0 4px ${p.color}44`,
            animation: `confettiFall ${p.duration}s cubic-bezier(0.25,0.46,0.45,0.94) ${p.delay}s forwards`,
            ["--drift" as string]: `${p.drift}px`,
            ["--rot" as string]: `${p.rotation}deg`,
          }}
        />
      ))}

      {/* ── Background ── */}
      <section
        className="relative flex items-center justify-center overflow-hidden px-3 py-5 sm:px-6 sm:py-12"
        style={{
          minHeight: "100dvh",
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d2847 30%, #0f3460 60%, #1a5276 100%)",
          backgroundSize: "300% 300%",
          animation: "bgShift 20s ease infinite",
        }}
      >
        {/* BG orbs — sm+ only */}
        <div
          className="absolute hidden sm:block w-80 h-80 rounded-full pointer-events-none opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 70%)",
            top: "40%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            filter: "blur(70px)",
            animation: "floatSlow 10s ease-in-out infinite",
          }}
        />

        {/* ── CARD ── */}
        <div
          className="w-full rounded-2xl sm:rounded-3xl text-center relative"
          style={{
            maxWidth: "min(480px, 100%)",
            padding:
              "clamp(20px, 5vw, 44px) clamp(16px, 4vw, 36px) clamp(16px, 4vw, 36px)",
            background: "linear-gradient(170deg, #ffffff 0%, #f9fafb 100%)",
            boxShadow:
              "0 25px 80px rgba(0,0,0,0.3), 0 8px 32px rgba(10,22,40,0.2), inset 0 1px 0 rgba(255,255,255,1)",
            border: "1px solid rgba(255,255,255,0.5)",
            animation:
              stage >= 1
                ? "cardEntrance 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards"
                : "none",
            opacity: stage >= 1 ? 1 : 0,
          }}
        >
          {/* ── Icon Area ── */}
          <div className="relative flex items-center justify-center h-24 sm:h-36 mb-4 sm:mb-6">
            {/* Ripple rings */}
            {stage >= 2 &&
              [0, 0.5, 1].map((d, i) => (
                <div
                  key={i}
                  className={`absolute border-2 ${rippleColor} rounded-full pointer-events-none`}
                  style={{
                    width: "clamp(76px, 22vw, 120px)",
                    height: "clamp(76px, 22vw, 120px)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%) scale(0.8)",
                    opacity: 0,
                    animation: `rippleOut 2.4s cubic-bezier(0,0,0.2,1) ${d}s infinite`,
                  }}
                />
              ))}

            {/* Icon circle */}
            <div
              className="relative z-10 flex items-center justify-center rounded-full"
              style={{
                width: "clamp(68px, 20vw, 108px)",
                height: "clamp(68px, 20vw, 108px)",
                background: `linear-gradient(135deg, ${iconBgFrom} 0%, ${iconBgTo} 50%, ${iconBgEnd} 100%)`,
                animation:
                  stage >= 2
                    ? "iconPop 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards, glowPulse 3s ease-in-out 1.5s infinite"
                    : "none",
                opacity: stage >= 2 ? 1 : 0,
                transform: stage < 2 ? "scale(0)" : undefined,
              }}
            >
              {brochure ? (
                <FaDownload
                  className="text-white drop-shadow-lg"
                  style={{ fontSize: "clamp(28px, 8vw, 42px)" }}
                />
              ) : (
                <svg
                  className="drop-shadow-lg"
                  style={{
                    width: "clamp(32px, 9vw, 48px)",
                    height: "clamp(32px, 9vw, 48px)",
                  }}
                  viewBox="0 0 56 56"
                  fill="none"
                >
                  <path
                    d="M14 28L24 38L42 18"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: 60,
                      strokeDashoffset: stage >= 2 ? 0 : 60,
                      transition: "stroke-dashoffset 0.5s ease 0.3s",
                    }}
                  />
                </svg>
              )}

              {/* Sparkles */}
              {stage >= 2 && (
                <>
                  <HiSparkles
                    className="absolute text-amber-400"
                    style={{
                      fontSize: "clamp(16px, 5vw, 26px)",
                      top: -5,
                      right: -5,
                      animation: "sparkleSpin 1.6s ease-in-out infinite",
                      filter: "drop-shadow(0 0 5px rgba(251,191,36,0.7))",
                    }}
                  />
                  <HiSparkles
                    className="absolute text-yellow-300"
                    style={{
                      fontSize: "clamp(13px, 4vw, 20px)",
                      bottom: -3,
                      left: -6,
                      animation: "sparkleSpin 1.6s ease-in-out 0.35s infinite",
                      filter: "drop-shadow(0 0 4px rgba(253,224,71,0.7))",
                    }}
                  />
                  <HiSparkles
                    className="absolute text-amber-300"
                    style={{
                      fontSize: "clamp(10px, 3vw, 15px)",
                      top: 3,
                      left: -9,
                      animation: "sparkleSpin 1.6s ease-in-out 0.7s infinite",
                      filter: "drop-shadow(0 0 3px rgba(252,211,77,0.6))",
                    }}
                  />
                </>
              )}
            </div>
          </div>

          {/* ── Text Content ── */}
          <div className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-3">
            <h1
              className="font-outfit font-black tracking-tight leading-tight"
              style={{
                fontSize: "clamp(22px, 6.5vw, 42px)",
                background: brochure
                  ? "linear-gradient(135deg, #92400E, #D97706)"
                  : "linear-gradient(135deg, #0d2847, #1a6dd4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation:
                  stage >= 3 ? "slideUpFade 0.5s ease forwards" : "none",
                opacity: stage >= 3 ? 1 : 0,
                transform: stage < 3 ? "translateY(24px)" : undefined,
              }}
            >
              {heading}
            </h1>

            <div
              className="text-xl sm:text-3xl"
              style={{
                animation:
                  stage >= 3 ? "slideUpFade 0.5s ease 0.1s forwards" : "none",
                opacity: 0,
              }}
            >
              {brochure ? "📥 📖 🎯" : "🎉 🎓 🚀"}
            </div>

            <p
              className="font-outfit font-bold text-slate-800"
              style={{
                fontSize: "clamp(15px, 4.2vw, 23px)",
                animation:
                  stage >= 4 ? "slideUpFade 0.5s ease forwards" : "none",
                opacity: stage >= 4 ? 1 : 0,
                transform: stage < 4 ? "translateY(24px)" : undefined,
              }}
            >
              {brochure ? "Great job" : "Welcome"},{" "}
              <span
                className="inline-block"
                style={{
                  background: brochure
                    ? "linear-gradient(90deg, #F59E0B, #EF4444, #F59E0B)"
                    : "linear-gradient(90deg, #3B82F6, #8B5CF6, #3B82F6)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                {name}
              </span>
              ! {brochure ? "📚" : "👋"}
            </p>

            <p
              className="font-dm text-xs sm:text-base text-slate-500 leading-relaxed max-w-xs mx-auto"
              style={{
                animation:
                  stage >= 4 ? "slideUpFade 0.5s ease 0.12s forwards" : "none",
                opacity: 0,
              }}
            >
              {brochure ? (
                <>
                  Your comprehensive IELTS preparation guide is ready.{" "}
                  <strong className="text-slate-800 font-bold">
                    Check your downloads!
                  </strong>
                </>
              ) : (
                <>
                  Your registration is confirmed! Our expert team will reach out
                  within{" "}
                  <strong className="text-slate-800 font-bold">24 hours</strong>{" "}
                  to kickstart your IELTS journey.
                </>
              )}
            </p>
          </div>

          {/* ── Confirmation Badge ── */}
          {brochure && (
            <div
              className={`flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-dm font-semibold rounded-lg sm:rounded-xl mx-auto mb-4 sm:mb-6 ${
                brochure
                  ? "text-amber-700 bg-amber-50 border border-amber-200"
                  : "text-emerald-700 bg-emerald-50 border border-emerald-200"
              }`}
              style={{
                maxWidth: "min(320px, 100%)",
                padding: "clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)",
                animation:
                  stage >= 4
                    ? "confirmSlide 0.45s ease 0.25s forwards"
                    : "none",
                opacity: 0,
              }}
            >
              <FaDownload className="text-sm sm:text-base shrink-0" />

              <span>{confirmText}</span>
            </div>
          )}

          {/* ── Buttons ── */}
          <div
            className="space-y-2 sm:space-y-3 mb-5 sm:mb-7"
            style={{
              animation:
                stage >= 5 ? "slideUpFade 0.45s ease forwards" : "none",
              opacity: stage >= 5 ? 1 : 0,
              transform: stage < 5 ? "translateY(24px)" : undefined,
            }}
          >
            <button
              onClick={handleWhatsApp}
              className="group w-full flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl text-white font-outfit font-bold text-sm sm:text-lg tracking-wide cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.97]"
              style={{
                padding: "clamp(12px, 3.5vw, 18px) 16px",
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                boxShadow:
                  "0 6px 24px rgba(37,211,102,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                border: "none",
              }}
            >
              <FaWhatsapp className="text-lg sm:text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span>Chat on WhatsApp</span>
            </button>

            <button
              onClick={handleBack}
              className="group w-full flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl font-outfit font-semibold text-blue-700 text-xs sm:text-base cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.97]"
              style={{
                padding: "clamp(10px, 3vw, 16px) 16px",
                background: "rgba(59,130,246,0.05)",
                border: "2px solid rgba(59,130,246,0.18)",
              }}
            >
              <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </button>
          </div>

          {/* ── Trust Badges ── */}
          <div className="pt-3 sm:pt-5 border-t border-slate-100">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 sm:gap-x-5 sm:gap-y-3">
              {[
                {
                  Icon: FaUsers,
                  text: "15,000+ Students",
                  color: "text-emerald-500",
                  delay: 0,
                },
                {
                  Icon: FaStar,
                  text: "95% Success Rate",
                  color: "text-amber-500",
                  delay: 0.1,
                },
                {
                  Icon: FaUserGraduate,
                  text: "Band 7+ Average",
                  color: "text-blue-500",
                  delay: 0.2,
                },
              ].map(({ Icon, text, color, delay }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1 sm:gap-1.5 font-dm font-semibold text-[11px] sm:text-sm text-slate-500"
                  style={{
                    animation:
                      stage >= 6
                        ? `badgePop 0.4s ease ${delay}s forwards`
                        : "none",
                    opacity: 0,
                  }}
                >
                  <Icon className={`text-sm sm:text-lg ${color}`} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Footer ── */}
          <div
            className="mt-2.5 sm:mt-4 flex items-center justify-center gap-1 sm:gap-1.5 font-dm text-[10px] sm:text-xs text-slate-400"
            style={{
              animation:
                stage >= 6 ? "slideUpFade 0.4s ease 0.3s forwards" : "none",
              opacity: 0,
            }}
          >
            <BsShieldFillCheck className="text-emerald-400 text-[10px] sm:text-sm" />
            <span>Your information is safe & secure</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYouPage;
