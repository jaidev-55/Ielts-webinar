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
      question: "Who can attend this webinar?",
      answer:
        "This webinar is open to anyone preparing for the IELTS Academic Writing test—especially students planning to study abroad at universities or colleges. If you want to improve your Task 1 and Task 2 writing performance, this session is ideal for you. Only Academic Training candidates focused on Writing are encouraged to attend.",
    },
    {
      question: "Is the webinar completely free?",
      answer:
        "Yes. The webinar is 100% free of charge. There are no hidden fees—just register and attend to learn directly from certified IELTS experts.",
    },
    {
      question: "What will be covered in the webinar?",
      answer:
        "The session focuses exclusively on IELTS Academic Writing, covering both Task 1 (reports, graphs, charts) and Task 2 (essay writing). You’ll learn structure, planning, and examiner expectations for high band scores.",
    },
    {
      question: "How do I join the webinar?",
      answer:
        "After registering, you’ll receive a confirmation email with the Google Meet joining link and full event details. A reminder will also be sent closer to the webinar date.",
    },
    {
      question: "Will I be able to ask questions?",
      answer:
        "Absolutely. The webinar includes a dedicated live Q&A session where trainers will answer participant questions in real time.",
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
          <span className="inline-block bg-linear-to-r from-[#FF6B35]/10 to-[#F7C948]/10 text-[#FF6B35] font-bold text-xs px-5 py-2 rounded-full tracking-[1.5px] font-poppins uppercase border border-[#FF6B35]/20 mb-5">
            FAQ
          </span>
          <h2
            className={`font-poppins text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold text-[#1a1a2e] leading-[1.2] transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Everything you need to know about our
            <span className="bg-linear-to-r from-[#FF6B35] to-[#F7C948] bg-clip-text pl-2 text-transparent">
              free IELTS webinar
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
                  ? "border-[#FF6B35]/30 shadow-lg"
                  : "border-[#F0F0F5] hover:border-[#FF6B35]/20"
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
                className="w-full px-5 sm:px-6 py-5 sm:py-6 flex justify-between items-center gap-4 text-left transition-all duration-300 group-hover:bg-[#FAFAFA]/50"
              >
                <span
                  className={`font-bold text-sm sm:text-[15px] lg:text-base font-poppins transition-colors duration-300 ${
                    activeIndex === index ? "text-[#FF6B35]" : "text-[#1a1a2e]"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Toggle Icon */}
                <div
                  className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-linear-to-br from-[#FF6B35] to-[#F7C948] rotate-180"
                      : "bg-[#F5F5FA] group-hover:bg-[#FF6B35]/10"
                  }`}
                >
                  {activeIndex === index ? (
                    <FaMinus className="text-white text-sm" />
                  ) : (
                    <FaPlus
                      className={`text-sm transition-colors duration-300 ${
                        activeIndex === index ? "text-white" : "text-[#FF6B35]"
                      }`}
                    />
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
                  {/* Gradient divider line */}
                  <div className="h-0.5 bg-linear-to-r from-[#FF6B35] to-[#F7C948] rounded-full mb-4 w-16" />

                  <p className="text-[#666] text-sm sm:text-[14px] lg:text-[15px] leading-[1.75] font-nunito">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Bottom gradient line on active */}
              {activeIndex === index && (
                <div className="h-0.5 bg-linear-to-r from-[#FF6B35] via-[#F7C948] to-[#FF6B35]" />
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
            className="group relative bg-linear-to-r from-orange-400 via-orange-500 to-orange-400  text-white cursor-pointer font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-poppins text-sm sm:text-base hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 inline-flex items-center gap-2 overflow-hidden border-2 border-orange-400/30"
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
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        brochure={false}
      />
    </section>
  );
};

export default FAQSection;
