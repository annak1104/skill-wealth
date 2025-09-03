import React from "react";

import course1 from "../../assets/course-1.webp";
import course2 from "../../assets/course-2.webp";
import course3 from "../../assets/course-3.webp";
import course4 from "../../assets/course-4.webp";
import course7 from "../../assets/course7.webp";

const MODULES = [
  {
    id: "01",
    title: "Freelance foundations & mindset",
    bullets: [
      "Adopting the right mindset and habits",
      "Getting over the imposter syndrome",
      "Why choosing to freelance",
    ],
    img: course1,
    imgAlt: "Person speaking in front of a laptop",
  },
  {
    id: "02",
    title: "Discover your high-value skill",
    bullets: [
      "Picking a high-demand remote skill",
      "Using “hidden” skills from your day job",
      "Learning skills fast",
    ],
    img: course2,
    imgAlt: "Workspace with laptop and coffee",
  },
  {
    id: "03",
    title: "Build a magnetic online presence",
    bullets: [
      "Building your offer",
      "Optimizing your LinkedIn profile",
      "Mastering social content and reputation",
      "Creating an attractive portfolio",
      "Optimizing your profile on freelance platforms",
    ],
    img: course3,
    imgAlt: "Team working at computers",
  },
  {
    id: "04",
    title: "Pitch, proposals & contracts",
    bullets: [
      "Finding clients",
      "Pitching without spamming",
      "Writing proposals & contracts",
      "Setting rates with confidence",
    ],
    img: course4,
    imgAlt: "Meeting room with people discussing",
  },
  {
    id: "05",
    title: "Client management, finance and scaling",
    bullets: [
      "Welcoming new clients",
      "Invoicing and getting paid fast",
      "Handling fluctuating income and taxes",
      "Building new income streams",
    ],
    img: course7,
    imgAlt: "Analytics dashboard and coins illustration",
  },
];

function ModuleCard({ item }) {
  return (
    <article
      className="
        group relative h-full overflow-hidden rounded-2xl
    bg-[linear-gradient(to_bottom,_#330368_0%,_rgba(51,3,104,0.3)_42%,_#151225_91%,_#330368_100%)]
        p-6 md:p-8 text-white shadow-xl
        ring-1 ring-white/10
      "
    >
      {/* subtle inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />

      <div className="flex h-full flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
        {/* Text side */}
        <div className="basis-3/5 text-left">
          <span className="block text-xs font-medium uppercase tracking-widest text-white">
            {item.id}
          </span>
          <h3 className="mt-2 text-lg font-semibold leading-tight md:text-xl lg:text-2xl">
            {item.title}
          </h3>

          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white md:text-base">
            {item.bullets.map((b, i) => (
              <li key={i} className="list-disc marker:text-white pl-4">
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Image side */}
        <div className="basis-2/5">
          <div className="overflow-hidden rounded-xl md:ml-auto">
            <img
              src={item.img}
              alt={item.imgAlt}
              className="w-full h-[148px] md:h-[178px] object-cover md:aspect-[16/10]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CourseOverview() {
  return (
    <section
      aria-labelledby="course-overview-title"
      className="w-full bg-black text-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-10 sm:px-6 md:pt-14 lg:pt-16">
        <header className="mb-8 md:mb-10 lg:mb-12">
          <h1
            id="course-overview-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Course overview
          </h1>
        </header>

        {/* Grid: first 4 cards in 2 columns, last card spans 2 cols */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {MODULES.slice(0, 4).map((m) => (
            <ModuleCard key={m.id} item={m} />
          ))}

          {/* 5th card full width */}
          <div className="md:col-span-2">
            <ModuleCard item={MODULES[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
