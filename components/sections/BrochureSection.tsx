"use client";

import React, { useState } from "react";
import { useInView } from "@/hooks";
import {
  HiCheckCircle,
  HiPhone,
  HiUser,
  HiSparkles,
  HiShieldCheck,
  HiAcademicCap,
  HiQuestionMarkCircle,
  HiCheckBadge,
} from "react-icons/hi2";
import {
  FaBook,
  FaHeadphones,
  FaPen,
  FaComments,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { BiSolidBookOpen } from "react-icons/bi";
import {
  HiClipboardList,
  HiDownload,
  HiLightningBolt,
  HiLocationMarker,
  HiMail,
  HiOutlineRefresh,
} from "react-icons/hi";
import {
  EMAIL_REGEX,
  PHONE_DIGITS_REGEX,
  PHONE_SANITIZE_REGEX,
} from "@/utils/regex";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  testType: string;
}

interface RegFormProps {
  brochure: boolean;
  pdfUrl?: string;
}

const TEST_TYPES = [
  { name: "IELTS Academic", icon: HiAcademicCap },
  { name: "IELTS General Training", icon: HiClipboardList },
  { name: "Not Sure Yet", icon: HiQuestionMarkCircle },
];

function RegForm({ brochure, pdfUrl }: RegFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    testType: "",
  });
  const [done, setDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const router = useRouter();

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneDigits = formData.phone.replace(PHONE_SANITIZE_REGEX, "");

    if (!phoneDigits) {
      newErrors.phone = "Phone number is required";
    } else if (!PHONE_DIGITS_REGEX.test(phoneDigits)) {
      newErrors.phone = "Phone number must be 10–15 digits";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          test_type: formData.testType || "Not Sure",
          source_form: "brochure_form",
          page_url: window.location.href,
        }),
      });

      if (!res.ok) {
        throw new Error("Lead submission failed");
      }

      setDone(true);

      if (brochure && pdfUrl) {
        setTimeout(() => {
          const link = document.createElement("a");
          link.href = pdfUrl;
          link.download = pdfUrl.split("/").pop() || "guide.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 300);

        router.push(
          `/thank-you?name=${encodeURIComponent(formData.name)}&brochure=true`,
        );
      } else {
        router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
      }
    } catch (error) {
      console.error("Brochure form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="text-center p-6 sm:p-10 animate-fade-up">
        <div className="relative inline-block mb-4 sm:mb-6">
          <div className="absolute inset-0 bg-linear-to-r from-amber-500/20 to-yellow-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative">
            <HiCheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-amber-500 mx-auto animate-bounce-in" />
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 font-poppins px-4">
          {brochure ? "Guide Downloaded!" : "You're Registered!"}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 font-nunito mb-4 sm:mb-6 max-w-sm mx-auto px-4">
          {brochure
            ? "Your comprehensive IELTS preparation guide is ready. Check your downloads!"
            : "Webinar details have been sent to your email. See you there!"}
        </p>
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-green-600 bg-green-50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 max-w-sm mx-auto">
          <HiCheckCircle className="text-lg sm:text-xl shrink-0" />
          <span className="font-semibold">Confirmation email sent</span>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="space-y-3 sm:space-y-4"
    >
      {/* Name Input */}
      <div className="relative group">
        <div className="relative">
          {/* Icon */}
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors">
            <HiUser className="text-lg sm:text-xl" />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Your Full Name *"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              setErrors({ ...errors, name: "" });
            }}
            className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-xl border-2 text-sm sm:text-base outline-none transition-all font-nunito bg-gray-50 text-gray-900 placeholder:text-gray-400 ${
              errors.name
                ? "border-red-300 focus:border-red-500 focus:bg-red-50/50"
                : "border-gray-200 focus:border-amber-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)]"
            }`}
          />
        </div>

        {/* Error slot */}
        <p className="min-h-4 text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
          {errors.name && (
            <>
              <span className="w-1 h-1 rounded-full bg-red-500" />
              {errors.name}
            </>
          )}
        </p>
      </div>

      {/* Email Input */}
      <div className="relative group">
        <div className="relative">
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors">
            <HiMail className="text-lg sm:text-xl" />
          </div>

          <input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setErrors({ ...errors, email: "" });
            }}
            className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-xl border-2 text-sm sm:text-base outline-none transition-all font-nunito bg-gray-50 text-gray-900 placeholder:text-gray-400 ${
              errors.email
                ? "border-red-300 focus:border-red-500 focus:bg-red-50/50"
                : "border-gray-200 focus:border-amber-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)]"
            }`}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
        </div>

        <p
          id="email-error"
          className="min-h-4 text-red-500 text-xs mt-1 ml-1 flex items-center gap-1"
        >
          {errors.email && (
            <>
              <span className="w-1 h-1 rounded-full bg-red-500" />
              {errors.email}
            </>
          )}
        </p>
      </div>

      {/* Phone Input */}
      <div className="relative group">
        <div className="relative">
          {/* Icon */}
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors">
            <HiPhone className="text-lg sm:text-xl" />
          </div>

          <input
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/[^\d+]/g, "");
              setFormData({ ...formData, phone: value });
              setErrors({ ...errors, phone: "" });
            }}
            maxLength={16}
            className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-xl border-2 text-sm sm:text-base outline-none transition-all font-nunito bg-gray-50 text-gray-900 placeholder:text-gray-400 ${
              errors.phone
                ? "border-red-300 focus:border-red-500 focus:bg-red-50/50"
                : "border-gray-200 focus:border-amber-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)]"
            }`}
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
          />
        </div>

        {/* Error */}
        <p
          id="phone-error"
          className="min-h-4 text-red-500 text-xs mt-1 ml-1 flex items-center gap-1"
        >
          {errors.phone && (
            <>
              <span className="w-1 h-1 rounded-full bg-red-500" />
              {errors.phone}
            </>
          )}
        </p>
      </div>

      {/* City Input */}
      <div className="relative group">
        <div className="relative">
          {/* Icon */}
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors">
            <HiLocationMarker className="text-lg sm:text-xl" />
          </div>

          <input
            type="text"
            placeholder="City *"
            value={formData.city}
            onChange={(e) => {
              setFormData({ ...formData, city: e.target.value });
              setErrors({ ...errors, city: "" });
            }}
            className={`w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-xl border-2 text-sm sm:text-base outline-none transition-all font-nunito bg-gray-50 text-gray-900 placeholder:text-gray-400 ${
              errors.city
                ? "border-red-300 focus:border-red-500 focus:bg-red-50/50"
                : "border-gray-200 focus:border-amber-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)]"
            }`}
            aria-invalid={!!errors.city}
            aria-describedby="city-error"
          />
        </div>

        {/* Error */}
        <p
          id="city-error"
          className="min-h-4 text-red-500 text-xs mt-1 ml-1 flex items-center gap-1"
        >
          {errors.city && (
            <>
              <span className="w-1 h-1 rounded-full bg-red-500" />
              {errors.city}
            </>
          )}
        </p>
      </div>

      {/* Test Type Select */}
      <div className="relative group">
        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-amber-500 transition-colors pointer-events-none z-10">
          <HiAcademicCap className="text-lg sm:text-xl" />
        </div>
        <select
          value={formData.testType}
          onChange={(e) =>
            setFormData({ ...formData, testType: e.target.value })
          }
          className="w-full pl-10 sm:pl-12 pr-8 sm:pr-10 py-3 sm:py-4 rounded-xl border-2 border-gray-200 text-sm sm:text-base outline-none transition-all font-nunito bg-gray-50 cursor-pointer appearance-none focus:border-amber-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(245,158,11,0.08)] text-gray-900"
          style={{ color: formData.testType ? "#111827" : "#9ca3af" }}
        >
          <option value="" className="text-gray-400">
            Choose Your Test Type
          </option>
          {TEST_TYPES.map((t) => (
            <option key={t.name} value={t.name} className="text-gray-900">
              {t.name}
            </option>
          ))}
        </select>
        <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`group cursor-pointer relative w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl
    font-bold text-sm sm:text-base font-poppins text-white
    flex items-center justify-center gap-2
    transition-all duration-300
    shadow-lg overflow-hidden
    ${
      isSubmitting
        ? "bg-amber-300 cursor-not-allowed opacity-70"
        : "bg-amber-400 shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-95"
    }
  `}
      >
        {/* Button content */}
        <span className="relative z-10 flex items-center gap-2">
          {isSubmitting ? (
            <>
              <HiOutlineRefresh className="animate-spin text-lg sm:text-xl" />
              <span>Processing…</span>
            </>
          ) : brochure ? (
            <>
              <HiDownload className="text-lg sm:text-xl" />
              <span>Download Free Guide</span>
              <HiLightningBolt className="text-lg sm:text-xl transition-transform group-hover:rotate-12" />
            </>
          ) : (
            <>
              <HiSparkles className="text-lg sm:text-xl animate-pulse" />
              <span>Reserve My Free Seat</span>
              <HiSparkles className="text-lg sm:text-xl animate-pulse" />
            </>
          )}
        </span>

        {!isSubmitting && (
          <div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out transform -skew-x-12
      bg-linear-to-r from-transparent via-white/30 to-transparent"
          />
        )}
      </button>

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-nunito pt-2">
        <HiShieldCheck className="text-green-500 text-sm sm:text-base" />
        <span className="text-center">100% secure. No spam, ever.</span>
      </div>
    </form>
  );
}

interface BrochureSectionProps {
  pdfUrl?: string;
}

const BrochureSection: React.FC<BrochureSectionProps> = ({
  pdfUrl = "/Abroad-Scholar-Free-Materials.pdf",
}) => {
  const [bRef, bVis] = useInView(0.15);

  const features = [
    {
      icon: FaBook,
      text: "Complete band-wise score requirements & strategies",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: FaHeadphones,
      text: "Listening section tips with practice materials",
      color: "from-green-400 to-green-500",
    },
    {
      icon: BiSolidBookOpen,
      text: "Reading comprehension techniques & time management",
      color: "from-purple-400 to-purple-500",
    },
    {
      icon: FaPen,
      text: "Writing Task 1 & 2 templates with examples",
      color: "from-amber-400 to-amber-500",
    },
    {
      icon: FaComments,
      text: "Speaking test strategies & common topics",
      color: "from-pink-400 to-pink-500",
    },
  ];

  const trustIndicators = [
    {
      icon: BiSolidBookOpen,
      value: "8+",
      label: "Pages",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: HiAcademicCap,
      value: "4",
      label: "Sections",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: FaTrophy,
      value: "8+",
      label: "Band Score",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
  ];

  const socialProofAvatars = [
    { icon: FaUserGraduate, color: "from-blue-500 to-blue-600" },
    { icon: HiAcademicCap, color: "from-amber-500 to-amber-600" },
    { icon: FaUserGraduate, color: "from-purple-500 to-purple-600" },
    { icon: HiCheckBadge, color: "from-green-500 to-green-600" },
  ];

  return (
    <section
      ref={bRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-linear-to-br from-amber-50 via-yellow-50 to-amber-50 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-linear-to-br from-amber-500/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-linear-to-tl from-yellow-500/5 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Floating Icons Animation - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <IoMdBook
          className="absolute top-20 left-[10%] text-4xl sm:text-6xl text-amber-600 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <FaTrophy
          className="absolute top-40 right-[15%] text-3xl sm:text-5xl text-yellow-600 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <HiAcademicCap
          className="absolute bottom-32 left-[20%] text-5xl sm:text-7xl text-amber-600 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div
            className="transition-all duration-1000 ease-out"
            style={{
              opacity: bVis ? 1 : 0,
              transform: bVis ? "translateX(0)" : "translateX(-40px)",
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-linear-to-r from-amber-400/10 to-yellow-400/10 border border-amber-400/20 text-amber-500 font-bold text-[10px] sm:text-xs px-3 sm:px-5 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <IoMdBook className="text-sm sm:text-base" />
              <span className="tracking-wider font-poppins uppercase">
                Free IELTS Resource
              </span>
              <HiSparkles className="text-sm sm:text-base animate-pulse" />
            </div>

            {/* Title */}
            <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Get Your Free
              <br />
              <span className="bg-linear-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                IELTS Preparation Guide
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 font-nunito">
              A comprehensive{" "}
              <span className="font-bold text-amber-500">8 page guide</span>{" "}
              covering all 4 IELTS sections with proven strategies, practice
              materials, band score requirements, and expert tips to achieve
              your target score.
            </p>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 sm:gap-4 group"
                    style={{
                      animation: bVis
                        ? `fadeUp 0.6s ease ${i * 0.1}s both`
                        : "none",
                    }}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}
                    >
                      <Icon className="text-white text-base sm:text-xl" />
                    </div>
                    <div className="flex-1 pt-1.5 sm:pt-2">
                      <span className="text-gray-800 text-sm sm:text-base font-semibold font-nunito group-hover:text-gray-900 transition-colors">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {trustIndicators.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="text-center p-3 sm:p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200"
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 rounded-xl flex items-center justify-center ${item.iconBg}`}
                    >
                      <Icon
                        className={`text-xl sm:text-2xl ${item.iconColor}`}
                      />
                    </div>

                    <div className="text-xl sm:text-2xl font-extrabold font-poppins text-gray-900">
                      {item.value}
                    </div>

                    <div className="text-xs sm:text-sm text-gray-600 font-nunito mt-1">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className="transition-all duration-1000 ease-out"
            style={{
              opacity: bVis ? 1 : 0,
              transform: bVis ? "translateX(0)" : "translateX(40px)",
              transitionDelay: "0.2s",
            }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-linear-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-60" />

              {/* Form Card */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100">
                {/* Trending Badge */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-linear-to-r from-green-500 to-green-600 text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg flex items-center gap-1 sm:gap-1.5 animate-bounce-in">
                  <HiLightningBolt className="text-xs sm:text-sm" />
                  <span>15K+ Downloads</span>
                </div>

                {/* Form Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="inline-block relative mb-3 sm:mb-4">
                    <div className="absolute inset-0 bg-linear-to-r from-amber-400/20 to-yellow-500/20 rounded-full blur-lg sm:blur-xl animate-pulse" />
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-amber-400 to-yellow-400 flex items-center justify-center mx-auto animate-bob">
                      <IoMdBook className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-poppins text-lg sm:text-xl md:text-2xl font-extrabold text-gray-900 mb-1 sm:mb-2 px-4">
                    Download Free IELTS Guide
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm font-nunito flex items-center justify-center gap-1.5 sm:gap-2 px-4">
                    <HiCheckCircle className="text-green-500 text-sm sm:text-base" />
                    Instant access no waiting
                  </p>
                </div>

                {/* Form */}
                <RegForm brochure={true} pdfUrl={pdfUrl} />

                {/* Social Proof */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 font-nunito">
                    <div className="flex -space-x-2">
                      {socialProofAvatars.map((avatar, i) => {
                        const Icon = avatar.icon;
                        return (
                          <div
                            key={i}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-br ${avatar.color} border-2 border-white flex items-center justify-center shadow-sm`}
                          >
                            <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                        );
                      })}
                    </div>
                    <span className="text-center">
                      <strong className="text-gray-900">15,847</strong> students
                      downloaded this week
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
