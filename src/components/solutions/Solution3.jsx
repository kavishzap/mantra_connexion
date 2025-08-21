"use client";

import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// React icons
import { FaFilm } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { RiMegaphoneFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

function Solution3() {
  const slider = useMemo(
    () => ({
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 24,
      speed: 900,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      navigation: { nextEl: ".nextbtn1", prevEl: ".prevbtn1" },
      breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
        1600: { slidesPerView: 3 },
      },
    }),
    []
  );

  return (
    <div className="home3-solution-section sec-mar">
      <div className="container">
        {/* Section Header */}
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="section-title-3">
              <h2>Our Solutions</h2>
              <p>
                Our team of talented individuals is dedicated to providing you
                with the best <strong>short films</strong>,{" "}
                <strong>visuals</strong>, <strong>blogs</strong>,{" "}
                <strong>newsletters</strong>, <strong>documentaries</strong>,
                and <strong>social media content</strong>.
              </p>
            </div>
            <div className="swiper-btn-group">
              <div className="swiper-btn prevbtn1" aria-label="Previous">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="swiper-btn nextbtn1" aria-label="Next">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slider} className="swiper home3-solution-slider">
              {/* Short Films */}
              <SwiperSlide className="swiper-slide">
                <div className="solution-card media-card">
                  <div className="icon">
                    <FaFilm size={56} />
                  </div>
                  <div className="solution-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Short Films</a>
                      </Link>
                    </h4>
                    <p>
                      Script-to-screen production with cinematic storytelling,
                      and sound design that resonates.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Documentaries */}
              <SwiperSlide className="swiper-slide">
                <div className="solution-card media-card">
                  <div className="icon">
                    <MdOutlineVideoLibrary size={56} />
                  </div>
                  <div className="solution-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Documentaries</a>
                      </Link>
                    </h4>
                    <p>
                      Research-driven narratives with authentic interviews, and
                      location shoots.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Social Media Content */}
              <SwiperSlide className="swiper-slide">
                <div className="solution-card media-card">
                  <div className="icon">
                    <RiMegaphoneFill size={56} />
                  </div>
                  <div className="solution-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Social Media Content</a>
                      </Link>
                    </h4>
                    <p>
                      Agile content sprints for Reels, Shorts, and
                      carousels—optimized for reach, retention, and conversion.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Blogs & Newsletters */}
              <SwiperSlide className="swiper-slide">
                <div className="solution-card media-card">
                  <div className="icon">
                    <HiDocumentText size={56} />
                  </div>
                  <div className="solution-content">
                    <h4>
                      <Link legacyBehavior href="/service-details">
                        <a>Blogs & Newsletters</a>
                      </Link>
                    </h4>
                    <p>
                      Editorial calendars, SEO-friendly writing, and crisp
                      newsletter design that builds loyal readership.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Small responsive polish */}
      <style jsx>{`
        .media-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 24px;
          border-radius: 18px;
        }
        .media-card .icon {
          color: var(--primary-color, #111); /* set theme color */
        }
        .media-card .solution-content h4 {
          margin-bottom: 8px;
        }
        @media (max-width: 767px) {
          .media-card {
            padding: 18px;
          }
          .media-card .icon :global(svg) {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  );
}

export default Solution3;
