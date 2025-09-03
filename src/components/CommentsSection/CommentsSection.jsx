import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useRef, useState } from "react";

import arrowRight from "../../assets/arrow-5.png";
import arrowLeft from "../../assets/arrow-7.png";
import star from "../../assets/star.svg";
import "../CommentsSection/big-slider.css";

const testimonials = [
  {
    name: "Ibrahim",
    text: "Before this course, I was stuck in a corporate job that barely paid my bills. Now, I got 2 foreign clients on Upwork, and I’m earning in dollars. It feels amazing knowing I can support myself and even my family without worrying.",
    subText: "Landed 2 foreign jobs in Upwork",
  },
  {
    name: "Ifeoma",
    text: "I recently graduated and had no job offers, I felt hopeless. With this course, I learned how to build a simple portfolio and reach out to clients online. Now I earn in euros, and I no longer depend on my parents. It really changed my life.",
    subText: "No longer financially depends on family",
  },
  {
    name: "Kwame",
    text: "I always thought freelancing and earning in $ was for people outside Nigeria. This course showed me exactly how to position my skills and feel confident with clients. Within 3 months, I was making more from freelancing than from my old office job. Finally, I’m in control of my time and income.",
    subText: "Earned more with freelancing in 3 months",
  },
  {
    name: "Amina",
    text: "My biggest challenge was believing in myself. This course teaches me freelancing skills but also the mindset to keep going even with the fear. Today, I work with international clients and earn enough to save in dollars while planning my future.",
    subText: "Changed mindset and saved money",
  },
];

export default function CommentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightOffset, setHighlightOffset] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => setHighlightOffset(e.matches ? 2 : 0);
    handler(mq);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  return (
    <section className="w-full mx-auto rounded-3xl bg-[#ffffff] px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] lg:gap-16 gap-8 items-center">
        {/* Right column (text + buttons) — first on mobile */}
        <div className="flex flex-col justify-between h-auto lg:w-[374px] w-[300px] lg:h-[288px] order-1 lg:order-2">
          <div>
            <h2 className="text-3xl text-left mb-6 md:text-5xl font-bold text-black">
              Testimonials
            </h2>
            <p className="text-black text-left text-lg mt-4">
              From first clients to global freelancing — honest impressions.
            </p>
          </div>
          <div className="flex gap-14 mt-6 lg:mt-0 self-end">
            <button
              className="custom-swiper-button-prev lg:w-14 w-11 lg:h-14 h-11 cursor-pointer rounded-full flex justify-center items-center bg-[#000000]"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={arrowLeft} alt="Prev" className="w-7 h-4" />
            </button>
            <button
              className="custom-swiper-button-next lg:w-14 w-11 lg:h-14 h-11 cursor-pointer rounded-full flex justify-center items-center bg-[#330368]"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={arrowRight} alt="Next" className="w-7 h-4" />
            </button>
          </div>
        </div>

        {/* Left column (slider) — second on mobile */}
        <div className="order-2 lg:order-1">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            modules={[Navigation, Pagination]}
            centeredSlides={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              0: { slidesPerView: 1, centeredSlides: true },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
            className="w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex);
            }}
          >
            {testimonials.map((testimonial, index) => {
              const highlightIndex =
                (activeIndex + highlightOffset) % testimonials.length;
              const isActive = index === highlightIndex;

              return (
                <SwiperSlide key={index} className="flex justify-center">
                  <div
                    className={`flex flex-col justify-center p-6 rounded-2xl w-[300px] sm:w-[328px] h-[288px] relative transition-all duration-300 ${
                      isActive
                        ? "bg-[#330368] text-[#f5f5f5] shadow-lg"
                        : "bg-[#0F011E] text-[#999898]"
                    }`}
                  >
                    <img
                      src={star}
                      alt="star"
                      className="absolute top-6 right-6 w-6 h-6"
                    />

                    <h4 className="font-bold text-left text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-left mt-3">
                      “{testimonial.text}”
                    </p>
                    <p className="text-sm text-left text-white mt-3">
                      • {testimonial.subText}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <p className="text-black text-xs mt-8 text-center">
        Disclaimer: Results may vary based on individual effort and other
        factors.
      </p>
    </section>
  );
}
