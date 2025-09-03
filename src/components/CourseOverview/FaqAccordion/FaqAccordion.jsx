import React, { useEffect, useRef, useState } from "react";

import { CloseIcon } from "../../../icons/CloseIcon.jsx";

const FAQS = [
  {
    q: "Is SkillWealth suitable for beginners?",
    a: "Yes — the course is designed to guide beginners step-by-step while providing value to more experienced learners. You'll get foundational lessons and practical exercises.",
  },
  {
    q: "How long do I have access to the courses?",
    a: "You get lifetime access to course materials and updates. Access remains available even if the course receives new content or improvements.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes, you can cancel your subscription anytime. Cancelling stops future recurring payments but does not retroactively refund already-processed payments.",
  },
  {
    q: "Do I need to be a freelancer to follow this course?",
    a: "No — the content is useful for freelancers, job-seekers, and anyone who wants to build remote skills and monetize them.",
  },
  {
    q: "What if I have a full time job?",
    a: "The course is structured for flexible learning — you can follow lessons at your own pace and apply tactics in spare time to build an additional income stream.",
  },
  {
    q: "How does the 7-day money-back guarantee work?",
    a: "If you're unsatisfied with SkillWealth for any reason within 7 days of purchase, email [support@skillwealth.com] for a full refund, no questions asked.",
  },
];

function AccordionItem({ index, item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxH, setMaxH] = useState("0px");

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      setMaxH(isOpen ? `${el.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  // adjust on resize so transition height stays correct
  useEffect(() => {
    function handleResize() {
      const el = contentRef.current;
      if (el && isOpen) {
        setMaxH(`${el.scrollHeight}px`);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <article className="w-full">
      <div className="rounded-2xl">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          onClick={() => onToggle(index)}
          className={`w-full flex items-center justify-between
            px-6 py-4 md:px-8 md:py-5
            text-left rounded-2xl
            bg-[#0f011e]
            hover:shadow-lg transition-shadow duration-200
            focus:outline-none
            `}
        >
          <h3
            className={`text-lg md:text-xl font-medium transition-colors duration-200 ${
              isOpen ? "text-[#9840F9]" : "text-white"
            }`}
          >
            {item.q}
          </h3>

          <span
            className={
              "ml-4 flex-shrink-0 text-white/70 bg-transparent cursor-pointer rounded-full p-2"
            }
            aria-hidden
          >
            {/* plus/minus visual */}
            <CloseIcon open={isOpen} />
          </span>
        </button>

        {/* panel */}
        <div
          id={`faq-panel-${index}`}
          ref={contentRef}
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: maxH }}
        >
          <div
            className={`
              rounded-xl px-6 py-4
              bg-[#0f011e]
              text-white`}
          >
            <p className="text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      aria-labelledby="faq-title"
      className="relative bg-black text-white py-16 md:py-20"
    >
      {/* decorative background image — replace src with your resource or remove */}
      <img
        src="/faqBackground.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-20"
        style={{ filter: "blur(2px) brightness(0.35)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1
            id="faq-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          >
            Frequently asked questions
          </h1>
        </header>

        <div className="space-y-6">
          {FAQS.map((item, idx) => (
            <AccordionItem
              key={idx}
              index={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={toggle}
            />
          ))}
        </div>

        {/* bottom contact section */}
        <div className="mt-12 text-center">
          <h2 className="text-base md:text-lg font-semibold">
            Still have questions?
          </h2>
          <p className="mt-3 text-sm m-auto w-[320px] md:w-[380px] md:text-base text-white">
            We&apos;re ready to help you to answer any questions.
            <span className="block text-left">
              Please{" "}
              <a href="/contact" className="text-[#9840F9] underline">
                contact us
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
