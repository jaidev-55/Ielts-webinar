"use client";

import React, { useState } from "react";
import { useInView } from "@/hooks";
import Image from "next/image";
import {
  HiAcademicCap,
  HiGlobeAlt,
  HiSparkles,
  HiCheckCircle,
  HiArrowRight,
} from "react-icons/hi2";
import ModalForm from "../ModalForm";
import ReactCountryFlag from "react-country-flag";

interface Country {
  name: string;
  flag: string;
  code: string;
  unis: string;
  minIELTS: string;
  description: string;
  color: string;
}

const COUNTRIES: Country[] = [
  {
    name: "UK",
    code: "GB",
    flag: "/images/flags/uk.svg",
    unis: "130+ Universities",
    minIELTS: "IELTS 6.0+",
    description: "World-class education with historic institutions",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Canada",
    code: "CA",
    flag: "/images/flags/canada.svg",
    unis: "90+ Universities",
    minIELTS: "IELTS 6.5+",
    description: "Post-study work visa & immigration pathways",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Australia",
    code: "AU",
    flag: "/images/flags/australia.svg",
    unis: "85+ Universities",
    minIELTS: "IELTS 6.5+",
    description: "High quality of life & excellent job opportunities",
    color: "from-green-500 to-green-600",
  },
  {
    name: "USA",
    code: "US",
    flag: "/images/flags/usa.svg",
    unis: "200+ Universities",
    minIELTS: "IELTS 6.0+",
    description: "Top-ranked universities & research opportunities",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Ireland",
    code: "IE",
    flag: "/images/flags/Ireland.svg",
    unis: "35+ Universities",
    minIELTS: "IELTS 6.5+",
    description: "Tech hub of Europe with friendly culture",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "New Zealand",
    code: "NZ",
    flag: "/images/flags/new_zealand.svg",
    unis: "25+ Universities",
    minIELTS: "IELTS 6.5+",
    description: "Safe, beautiful & welcoming environment",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Germany",
    code: "DE",
    flag: "/images/flags/Germany.svg",
    unis: "40+ Universities",
    minIELTS: "IELTS 6.0+",
    description: "Low tuition fees & strong economy",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "France",
    code: "FR",
    flag: "/images/flags/France.svg",
    unis: "30+ Universities",
    minIELTS: "IELTS 6.0+",
    description: "Rich culture & affordable education",
    color: "from-indigo-500 to-indigo-600",
  },
];

const CountriesSection: React.FC = () => {
  const [sectionRef, isVisible] = useInView(0.1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-4 sm:px-6 bg-linear-to-br from-[#0F0C29] via-[#1A1A2E] to-[#16213E] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <HiGlobeAlt className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-400">
              STUDY ABROAD WITH IELTS
            </span>
            <HiSparkles className="w-4 h-4 text-amber-400" />
          </div>

          {/* Title */}
          <h2
            className={`font-poppins text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Countries You Can Study With <br className="hidden sm:block" />
            <span className="bg-amber-400 bg-clip-text text-transparent">
              Your IELTS Score
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-nunito transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Know the{" "}
            <span className="text-amber-400 font-semibold">
              minimum IELTS score
            </span>{" "}
            required to study in top destinations worldwide.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {COUNTRIES.map((country, index) => (
            <div
              key={country.name}
              className={`group relative bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-slate-700/50 overflow-hidden transition-all duration-500 hover:border-orange-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer ${
                selectedCountry === country.name
                  ? "border-orange-500 shadow-2xl shadow-orange-500/30 scale-105"
                  : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() =>
                setSelectedCountry(
                  selectedCountry === country.name ? null : country.name,
                )
              }
            >
              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${country.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${country.color}`}
              />

              {/* Content */}
              <div className="relative p-6 sm:p-7 text-center">
                {/* Icon */}
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-800/60 shadow-lg">
                      <Image
                        src={country.flag}
                        alt={`${country.name} flag`}
                        fill
                        sizes="80px"
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Country Name */}
                <h3 className="font-poppins text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {country.name}
                </h3>

                {/* IELTS Score Badge */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-linear-to-r ${country.color} mb-3`}
                >
                  <HiCheckCircle className="w-4 h-4 text-white" />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {country.minIELTS}
                  </span>
                </div>

                {/* Universities Count */}
                <div className="flex items-center justify-center gap-2 text-gray-300 mb-3">
                  <HiAcademicCap className="w-5 h-5 text-orange-400" />
                  <span className="text-sm sm:text-base font-semibold">
                    {country.unis}
                  </span>
                </div>

                {/* Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedCountry === country.name
                      ? "max-h-20 opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {country.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <HiArrowRight className="w-5 h-5 text-orange-400" />
                </div>
              </div>

              {/* Bottom Glow */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-px bg-linear-to-r ${country.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-gray-400 text-sm sm:text-base mb-4">
            Not sure which country is right for you?
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group cursor-pointer inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-amber-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all hover:-translate-y-1"
          >
            <span>Get Personalized Guidance</span>
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CountriesSection;
