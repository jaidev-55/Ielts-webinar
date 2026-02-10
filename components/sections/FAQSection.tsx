"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useInView } from "@/hooks";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import ModalForm from "../ModalForm";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, visible] = useInView(0.2);

  const faqs: FAQ[] = [
    {
      question: "Who is this IELTS training suitable for?",
      answer:
        "This training is suitable for students who have already taken the IELTS exam and are stuck at a low band score, as well as beginners who are just starting their IELTS preparation. The strategies taught are designed to help learners understand the exam clearly and improve their performance step by step.",
    },
    {
      question: "What makes this IELTS training different?",
      answer:
        "The training focuses on simple, practical strategies that past students have used to improve their band scores. Instead of memorising content, you will learn how to approach each section of the IELTS exam in an easier and more effective way.",
    },
    {
      question: "What will be covered during the 7-day training?",
      answer:
        "The course covers all IELTS sections with a strong focus on exam strategy, common mistakes, and time management. You will also receive study materials and guidance on how to apply the strategies during the actual exam.",
    },
    {
      question: "Is this training available online or offline?",
      answer:
        "The training is available in both online and offline modes. Students can choose the mode that suits them best based on their convenience and location.",
    },
    {
      question: "What is the class schedule like?",
      answer:
        "Classes are conducted as one-hour sessions each day for 7 days. Students can choose a flexible time slot between morning 10 AM and evening 7 PM.",
    },
    {
      question: "Will there be practice tests?",
      answer:
        "Yes. Students will receive mock tests during the training period to help them understand their current level and apply the strategies they learn.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className="px-4 sm:px-6 lg:px-8 py-10 bg-linear-to-b from-white to-[#FAFAFA]"
    >
      <div className="max-w-200 mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block bg-linear-to-r from-amber-400/10 to-amber-500/10 text-amber-600 font-bold text-xs px-5 py-2 rounded-full tracking-[1.5px] font-poppins uppercase border border-amber-400/20">
            FAQ
          </span>
          <h2
            className={`font-poppins text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#1a1a2e] leading-[1.2] transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Everything you need to know about our
            <span className="bg-amber-400 bg-clip-text pl-2 text-transparent">
              free IELTS session
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                activeIndex === index
                  ? "border-amber-400/30 shadow-lg"
                  : "border-[#F0F0F5] hover:border-amber-400/20"
              } ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 sm:px-6 py-5 sm:py-6 flex justify-between items-center gap-4 text-left transition-all duration-300 group-hover:bg-amber-50/40"
              >
                <span
                  className={`font-bold text-sm sm:text-[15px] lg:text-base font-poppins transition-colors duration-300 ${
                    activeIndex === index ? "text-amber-500" : "text-[#1a1a2e]"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Toggle Icon */}
                <div
                  className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-linear-to-br from-amber-400 to-amber-500 rotate-180"
                      : "bg-[#F5F5FA] group-hover:bg-amber-400/10"
                  }`}
                >
                  {activeIndex === index ? (
                    <FaMinus className="text-white text-sm" />
                  ) : (
                    <FaPlus className="text-sm text-amber-500" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                  {/* Divider */}
                  <div className="h-0.5 bg-linear-to-r from-amber-400 to-amber-500 rounded-full mb-4 w-16" />

                  <p className="text-[#666] text-sm sm:text-[14px] lg:text-[15px] leading-[1.75] font-nunito">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              {activeIndex === index && (
                <div className="h-0.5 bg-linear-to-r from-amber-400 via-amber-500 to-amber-400" />
              )}
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div
          className={`text-center mt-10 sm:mt-12 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#777] text-sm font-nunito mb-4">
            Still have questions? We're here to help!
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative bg-amber-400 text-white cursor-pointer font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-poppins text-sm sm:text-base hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 overflow-hidden border-2 border-amber-400/30"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out">
              <div className="h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12" />
            </div>

            {/* Content */}
            <HiChatBubbleLeftRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
            <span className="relative z-10">Contact Support</span>
          </button>
        </div>
      </div>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default FAQSection;
