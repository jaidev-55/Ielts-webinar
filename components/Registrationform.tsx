"use client";

import React, { useState } from "react";
import { FormData } from "../types";
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

interface RegistrationFormProps {
  brochure: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ brochure }) => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!phoneDigits) {
      newErrors.phone = "Phone number is required";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    } else if (phoneDigits.length > 15) {
      newErrors.phone = "Phone number is too long";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="text-center py-6 sm:py-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 mb-3 sm:mb-4">
          <FaCheckCircle className="text-3xl sm:text-4xl text-green-500" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 font-poppins">
          {brochure ? "Brochure on the Way!" : "You're Registered!"}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 font-nunito px-4">
          {brochure
            ? "Check your email in 2 minutes."
            : "Webinar details sent to your email!"}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 w-full">
      {/* Name */}
      <Field
        name="name"
        placeholder="Your Full Name *"
        value={formData.name}
        error={errors.name}
        focused={focusedField === "name"}
        onFocus={() => setFocusedField("name")}
        onBlur={() => setFocusedField(null)}
        onChange={handleChange}
      />

      {/* Email */}
      <Field
        name="email"
        type="email"
        placeholder="Email Address *"
        value={formData.email}
        error={errors.email}
        focused={focusedField === "email"}
        onFocus={() => setFocusedField("email")}
        onBlur={() => setFocusedField(null)}
        onChange={handleChange}
      />

      {/* Phone */}
      <Field
        name="phone"
        type="tel"
        placeholder="Phone Number *"
        value={formData.phone}
        error={errors.phone}
        focused={focusedField === "phone"}
        onFocus={() => setFocusedField("phone")}
        onBlur={() => setFocusedField(null)}
        onChange={(e) => {
          const value = e.target.value.replace(/[^\d+]/g, "");
          setFormData({ ...formData, phone: value });
          setErrors({ ...errors, phone: "" });
        }}
      />

      {/* City */}
      <Field
        name="city"
        placeholder="Enter Your City *"
        value={formData.city}
        error={errors.city}
        focused={focusedField === "city"}
        onFocus={() => setFocusedField("city")}
        onBlur={() => setFocusedField(null)}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="group relative w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 mt-2 font-poppins shadow-lg shadow-amber-500/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 overflow-hidden"
      >
        <FaRocket className="relative z-10 w-4 h-4 group-hover:scale-110 transition-transform" />
        <span className="relative z-10">
          {brochure ? "Download Free Brochure" : "Reserve My Free Seat Now"}
        </span>
      </button>

      <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-2 font-nunito">
        🔒 100% secure. No spam, ever.
      </p>
    </form>
  );
};

interface FieldProps {
  name: keyof FormData;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = ({
  name,
  type = "text",
  placeholder,
  value,
  error,
  focused,
  onFocus,
  onBlur,
  onChange,
}) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className="w-full px-4 py-3 rounded-xl border-2 text-sm font-nunito outline-none transition-all"
      style={{
        borderColor: error ? "#EF4444" : focused ? "#FBBF24" : "#E5E7EB",
        backgroundColor: "#fff",
        boxShadow: focused ? "0 0 0 3px rgba(251,191,36,0.1)" : "none",
      }}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

export default RegistrationForm;
