import React from "react";

import { Clock } from "../../icons/Clock";
import { Diagram } from "../../icons/Diagram";
import { MoneyBag } from "../../icons/MoneyBag";
import { Person } from "../../icons/Person";
import { PersonWithBag } from "../../icons/PersonWithBag";

export const WhySkillWealth = () => {
  const items = [
    {
      id: "01",
      title: "YOUR GUIDE FOR FINANCIAL FREEDOM",
      desc: "Practical courses that turn knowledge into income.",
      icon: <MoneyBag className="h-8 w-8" />,
    },
    {
      id: "02",
      title: "HIGH-DEMAND REMOTE SKILLS",
      desc: "Learn what clients around the world are actively hiring for.",
      icon: <Person className="h-8 w-8" />,
    },
    {
      id: "03",
      title: "7 DAYS REFUND GUARANTEE",
      desc: "Try it risk-free: love it or get your money back, no questions asked.",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      id: "04",
      title: "WORK FOR INTERNATIONAL CLIENTS",
      desc: "Break borders and connect with global opportunities from home",
      icon: <PersonWithBag className="h-8 w-8" />,
    },
    {
      id: "05",
      title: "EARN IN DOLLARS AND EUROS",
      desc: "Maximize your income with skills valued in the world’s strongest currencies",
      icon: <Diagram className="h-8 w-8" />,
    },
  ];

  const leftCol = items.slice(0, 3);
  const rightCol = items.slice(3);

  const ItemRow = ({ icon, id, title, desc }) => (
    <div
      className={`flex gap-8 ${
        id === "04" || id === "05" ? "pt-7 pb-1" : "py-7"
      }`}
    >
      {/* Icon + number */}
      <div className="w-14 shrink-0 flex flex-col items-start">
        <span className="text-violet-300">{icon}</span>
        <span className="mt-2 ml-2.5 text-xs tracking-widest text-white/60">
          {id}
        </span>
      </div>
      {/* Copy */}
      <div className="flex-1 flex flex-col items-start">
        <h3 className="text-white text-left text-lg lg:text-2xl font-semibold uppercase">
          {title}
        </h3>
        <p className="mt-2 text-white text-left leading-relaxed">{desc}</p>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-black">
      {/* background only at bottom with 30% dark overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[300px]">
        <div className="absolute inset-0 bg-black/65" />
        <div className="w-full h-full bg-[url(./assets/bg-why.webp)] bg-no-repeat bg-bottom bg-cover" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-14 lg:py-20">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-center text-white">
          Why SkillWealth
        </h2>

        {/* Mobile list (one column) */}
        <div className="mt-8 sm:mt-10 lg:hidden divide-y divide-white/15">
          {items.map((it) => (
            <ItemRow key={it.id} {...it} />
          ))}

          {/* CTA (mobile) */}
          <div className="pt-8 pb-2">
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-10 h-14 rounded-full 
                         bg-gradient-to-r from-[#4b0ea9] to-[#6a1bb3] text-white font-semibold
                         shadow-[0_6px_10px_0_rgba(120,120,120,0.4)]"
            >
              Try SkillWealth risk-free today
            </button>
          </div>
        </div>

        {/* Desktop 2-column layout */}
        <div className="hidden lg:grid grid-cols-2 gap-x-24 mt-12">
          <div className="divide-y divide-white/15">
            {leftCol.map((it) => (
              <ItemRow key={it.id} {...it} />
            ))}
          </div>

          <div className="divide-y divide-white/15">
            {rightCol.map((it) => (
              <ItemRow key={it.id} {...it} />
            ))}

            {/* CTA (desktop, in right column) */}
            <div className="border-t border-white/15 pt-10">
              <button
                className="inline-flex cursor-pointer items-center justify-center px-10 h-14 rounded-full
                           bg-[#330368] text-white font-semibold"
              >
                Try SkillWealth risk-free today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
