import mainLogo from "../../assets/logo-small.svg";
import { CreditCardIcon } from "../../icons/CreditCardIcon.jsx";
import { LockIcon } from "../../icons/Lock.jsx";
import { MastercardIcon } from "../../icons/MastercardIcon.jsx";
import { PayPalIcon } from "../../icons/PayPalIcon.jsx";
import { ShieldIcon } from "../../icons/ShieldIcon.jsx";
import { VisaIcon } from "../../icons/VisaIcon.jsx";

export default function Footer() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white rounded-2xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        <div className="flex flex-col items-center md:items-start">
          <img src={mainLogo} alt="SkillWealth" className="h-28 w-auto" />
        </div>

        {/* Quick links */}
        <div className="flex flex-col text-black items-center">
          <h3 className="font-semibold text-lg text-[#9840F9] mb-3">
            Quick links
          </h3>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6 font-medium">
            <button
              onClick={() => handleScroll("./")}
              className="cursor-pointer hover:text-[#9840F9]"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("course-overview")}
              className="cursor-pointer hover:text-[#9840F9]"
            >
              About
            </button>
            <button
              onClick={() => handleScroll("faq-section")}
              className="cursor-pointer hover:text-[#9840F9]"
            >
              FAQ
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="cursor-pointer hover:text-[#9840F9]"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Payment methods */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg text-[#9840F9] mb-3">
            Payment methods
          </h3>
          <div className="flex gap-4 items-center">
            <VisaIcon className="h-8" />
            <MastercardIcon className="h-8" />
            <PayPalIcon className="h-8" />
          </div>
          <div className="flex gap-6 mt-4 text-gray-600">
            <LockIcon className="h-6 w-6" />
            <CreditCardIcon className="h-6 w-6" />
            <ShieldIcon className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="border-t border-black" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-700">
        <p>2025 SkillWealth. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#9840F9]">
            Terms of service
          </a>
          <a href="#" className="hover:text-[#9840F9]">
            Privacy policy
          </a>
          <a href="#" className="hover:text-[#9840F9]">
            Refund policy
          </a>
        </div>
      </div>
    </footer>
  );
}
