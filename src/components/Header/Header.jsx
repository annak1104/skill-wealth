import { useState } from "react";

import burgerMenu from "../../assets/burger-menu.svg";
import closeIcon from "../../assets/close.svg";
import logoSmall from "../../assets/logo-small.svg";
import mainImg from "../../assets/main-img.jpg";
import staffs from "../../assets/staffs.webp";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "when-section" },
    { label: "About", href: "course-overview" },
    { label: "FAQ", href: "faq-section" },
    { label: "Contact", href: "who-section" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white w-full xl:px-[120px] px-[24px] max-w-[1920px] relative">
      {/* Header */}
      <div className="pt-[13px] flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-12 font-semibold">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="flex justify-center items-center w-28 h-9 px-5 py-2 rounded-full border text-black border-black hover:bg-black hover:text-white transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <img
          src={burgerMenu}
          onClick={toggleMenu}
          className="lg:hidden cursor-pointer"
        />

        {/* Logo */}
        <img src={logoSmall} alt="logo-small" className="ml-auto" />
      </div>

      {/* Mobile Menu Overlay with sliding effect */}
      <div
        className={`lg:hidden fixed inset-0 bg-white bg-opacity-90 z-50 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionDuration: "0.5s" }}
      >
        <div className="h-full mt-[12px] px-4">
          <div className="flex justify-between">
            <img
              src={closeIcon}
              onClick={toggleMenu}
              className="cursor-pointer ml-3"
            />
            <img src={logoSmall} alt="logo-small" />
          </div>
          <div className="flex flex-col items-start">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  handleScroll(item.href);
                  toggleMenu();
                }}
                className="text-black py-4 text-xl bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mt-[50px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10">
        {/* Left Side (Text) */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col">
          <h1 className="text-4xl text-black lg:text-6xl font-bold leading-tight">
            Build the skills for more income and more freedom!
          </h1>
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <p className="mt-4 text-xl text-black w-[260px]">
              Earn dollars & work worldwide with our global freelancing guide.
            </p>
            <button
              className="bg-[#330368] w-2xs h-16 text-white cursor-pointer font-semibold py-4 px-10 rounded-full mt-8 
  hover:opacity-90 
  shadow-[0_6px_10px_0_rgba(160,160,160,0.7)] transition-all duration-200"
            >
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="lg:w-1/2 order-last lg:order-none">
          <img
            src={mainImg}
            alt="main"
            className="rounded-2xl mb-0 lg:mb-16 w-full max-w-[570px] mx-auto"
          />
        </div>

        {/* Bottom small cards */}
        <div className="flex items-end flex-row mb-7 lg:mb-0 lg:gap-38 gap-3 justify-center lg:justify-start order-last lg:order-none lg:absolute lg:bottom-16">
          <img src={staffs} alt="icon" className="lg:w-[270px] w-[160px] h-[170px]" />
          <div className="bg-[#0B0212] text-white text-start text-lg rounded-2xl lg:px-8 px-3 lg:py-6 py-3 lg:w-[292px] w-[160px] h-[142px]">
            <p className="font-semibold lg:text-lg text-base">Your skills. Your freedom.</p>
            <p className="lg:text-md text-sm text-[#999898] mt-2">
              Global freelancing made simple.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
