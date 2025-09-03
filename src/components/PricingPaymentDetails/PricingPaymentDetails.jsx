import React from "react";

import { MastercardIcon } from "../../icons/MastercardIcon.jsx";
import { PayPalIcon } from "../../icons/PayPalIcon.jsx";
import { VisaIcon } from "../../icons/VisaIcon.jsx";

const SUBSCRIPTION = {
  badge: "Subscription pricing",
  price: "$19.90/month",
  subtitle: "Billed monthly until canceled",
};

const GUARANTEE = {
  badge: "7-day money-back guarantee",
  text: "We’re so confident you’ll love SkillWealth that we offer a 7-day refund policy. If you’re not satisfied, just let us know within 7 days for a full refund.",
};

const INCLUDED = {
  badge: "What's Included",
  bullets: [
    "Full access to the course,",
    "Lifetime updates as courses evolve,",
    "Live Q&A sessions, community forums, and AI coaching support (soon),",
  ],
};

const PAYMENT = {
  badge: "Payment methods accepted",
  text: "We accept all major credit and debit cards",
};

/* ------------------ загальні стилі картки (переиспользуються) ------------------ */
function CardWrapper({ badge, children, className = "" }) {
  return (
    <article
      className={`relative overflow-hidden flex flex-col justify-center items-center h-60 rounded-2xl p-6 md:p-8 shadow-xl ring-1 ring-white/6
        bg-[#15012b]
        text-white
        ${className}`}
    >
      {/* pill badge */}
      <div className="flex justify-center -mt-6 mb-2">
        <span
          className="inline-block px-6 py-2 rounded-full md:text-xl text-base font-semibold
            bg-gradient-to-r from-[#330368] to-[#3a0a86]
            shadow-[0_10px_30px_rgba(77,10,161,0.18)]
            ring-1 ring-white/10"
        >
          {badge}
        </span>
      </div>

      {/* optional soft overlay for depth */}
      <div className="absolute inset-0 -z-10 rounded-2xl pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "radial-gradient(60% 40% at 10% 10%, rgba(255,255,255,0.02), transparent 10%), radial-gradient(40% 30% at 90% 90%, rgba(255,255,255,0.01), transparent 20%)",
          }}
        />
      </div>

      {children}
    </article>
  );
}

/* ------------------ готові картки ------------------ */
function SubscriptionCard({ data }) {
  return (
    <CardWrapper badge={data.badge}>
      <div className="mt-2 flex flex-col gap-3">
        {data.price && (
          <p className="text-lg md:text-xl font-semibold text-[#488A52]">
            {data.price}
          </p>
        )}
        {data.subtitle && <p className="text-sm text-white">{data.subtitle}</p>}
      </div>
    </CardWrapper>
  );
}

function GuaranteeCard({ data }) {
  return (
    <CardWrapper badge={data.badge}>
      <div className="mt-2 text-sm text-white/90 leading-relaxed">
        <p
          dangerouslySetInnerHTML={{
            __html: data.text || "",
          }}
        />
      </div>
    </CardWrapper>
  );
}

function IncludedCard({ data }) {
  return (
    <CardWrapper badge={data.badge}>
      <div className="mt-2 text-sm text-white/90">
        <ul className="list-disc pl-5 space-y-2 text-left">
          {(data.bullets || []).map((b, i) => (
            <li key={i} className="text-sm leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}

function PaymentCard({ data }) {
  return (
    <CardWrapper badge={data.badge}>
      <div className="mt-2 flex flex-col items-start md:items-start gap-4">
        <p className="text-sm text-white/90">{data.text}</p>

        <div className="mt-2 flex items-center gap-4 m-auto">
          <span className="sr-only">Visa</span>
          <VisaIcon />
          <span className="sr-only">Mastercard</span>
          <MastercardIcon />
          <span className="sr-only">PayPal</span>
          <PayPalIcon />
        </div>
      </div>
    </CardWrapper>
  );
}

/* ------------------ основний компонент сторінки ------------------ */
export default function PricingPaymentDetails() {
  return (
    <section
      aria-labelledby="pricing-payment-title"
      className="bg-black text-white w-full"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header className="text-center">
          <h1
            id="pricing-payment-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 font-extrabold tracking-tight"
          >
            Pricing & payment details
          </h1>
        </header>

        <div className="flex flex-col gap-8 items-center">
          {/* 1 ряд */}
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            <div className="w-full md:w-[560px]">
              <SubscriptionCard data={SUBSCRIPTION} />
            </div>
            <div className="w-full md:w-[660px]">
              <GuaranteeCard data={GUARANTEE} />
            </div>
          </div>

          {/* 2 ряд */}
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            <div className="w-full md:w-[660px]">
              <IncludedCard data={INCLUDED} />
            </div>
            <div className="w-full md:w-[560px]">
              <PaymentCard data={PAYMENT} />
            </div>
          </div>
        </div>

        {/* subscribe button */}
        <div className="mt-10 flex justify-center">
          <button
            className="px-12 py-3 rounded-full bg-[#330368]
              text-white font-semibold text-base md:text-lg shadow-lg transform transition
              hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6D28D9]/60"
            type="button"
          >
            Subscribe Now
          </button>
        </div>

        {/* legal disclosure */}
        <div className="mt-8 max-w-3xl mx-auto">
          <p className="text-xs text-left md:text-sm text-white leading-relaxed">
            <strong className="text-white text-lg">Legal disclosure:</strong> <br/>Your
            subscription renews automatically. You can cancel anytime before
            your next billing date to avoid further charges. By subscribing, you
            agree to our Terms of Service and Privacy Policy. We offer a 7-day
            money-back guarantee. Individual results may vary. SkillWealth
            provides educational content and is not a substitute for
            professional advice.
          </p>
        </div>
      </div>
    </section>
  );
}
