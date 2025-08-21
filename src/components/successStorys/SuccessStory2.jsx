"use client";

import React, { useMemo, useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function PhotographyPortfolio() {
  // Photo thumbnails / full-size (use same src if you don't have separate originals)
  const photos = [
    {
      thumb: "assets/img/photo/A7S04744.jpg",
      full: "assets/img/photo/A7S04744.jpg",
    },
    {
      thumb: "assets/img/photo/Accenture-20Years-Anniversary-31.jpg",
      full: "assets/img/photo/Accenture-20Years-Anniversary-31.jpg",
    },
    {
      thumb:
        "assets/img/photo/Accenture-20Years-Celebrating-4000-people-19.jpg",
      full: "assets/img/photo/Accenture-20Years-Celebrating-4000-people-19.jpg",
    },
    {
      thumb: "assets/img/photo/Accenture-Tech-Photos-Jan22-29.jpg",
      full: "assets/img/photo/Accenture-Tech-Photos-Jan22-29.jpg",
    },
    {
      thumb: "assets/img/photo/AJ0_5193.jpg",
      full: "assets/img/photo/AJ0_5193.jpg",
    },
    {
      thumb: "assets/img/photo/AJ0_5199-scaled.jpg",
      full: "assets/img/photo/AJ0_5199-scaled.jpg",
    },
    {
      thumb: "assets/img/photo/DJI_0232.jpg",
      full: "assets/img/photo/DJI_0232.jpg",
    },
    {
      thumb: "assets/img/photo/DoodlandCafe-21.jpg",
      full: "assets/img/photo/DoodlandCafe-21.jpg",
    },
    {
      thumb: "assets/img/photo/DoodlandCafe-AntiOxidant-2-scaled.jpg",
      full: "assets/img/photo/DoodlandCafe-AntiOxidant-2-scaled.jpg",
    },
    {
      thumb: "assets/img/photo/DoodlandCafe-Pizza-TandooriChicken-6-scaled.jpg",
      full: "assets/img/photo/DoodlandCafe-Pizza-TandooriChicken-6-scaled.jpg",
    },
    {
      thumb: "assets/img/photo/DSC_0043.jpg",
      full: "assets/img/photo/DSC_0043.jpg",
    },
    {
      thumb: "assets/img/photo/DSC_0827.jpg",
      full: "assets/img/photo/DSC_0827.jpg",
    },
    {
      thumb:
        "assets/img/photo/MantraConnexions-Accenture-Portrait-Examples-Outdoor-2-scaled-e1677830552125.jpg",
      full: "assets/img/photo/MantraConnexions-Accenture-Portrait-Examples-Outdoor-2-scaled-e1677830552125.jpg",
    },
    {
      thumb: "assets/img/photo/MiOD-AXIZ-ESG-Event-2.jpg",
      full: "assets/img/photo/MiOD-AXIZ-ESG-Event-2.jpg",
    },
    {
      thumb: "assets/img/photo/Mitco-CEO-photoshoot-44.jpg",
      full: "assets/img/photo/Mitco-CEO-photoshoot-44.jpg",
    },
    {
      thumb: "assets/img/photo/SegaTours-Beach-Cleaning-42.jpg",
      full: "assets/img/photo/SegaTours-Beach-Cleaning-42.jpg",
    },
  ];

  const items = useMemo(() => photos.map((p) => ({ ...p })), [photos]);

  const [lightbox, setLightbox] = useState({
    open: false,
    src: "",
  });

  const slider = useMemo(
    () => ({
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1000,
      pagination: { el: ".swiper-pagination-photo", clickable: true },
      autoplay: { delay: 3000, disableOnInteraction: false },
      breakpoints: {
        280: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
        1200: { slidesPerView: 3, spaceBetween: 20 },
        1400: { slidesPerView: 3 },
      },
    }),
    []
  );

  return (
    <div className="home3-about-section sec-mar">
      <div className="container">
        <div
          className="row mb-60 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-4">
            <div className="section-title-3">
              <h2>Photography Portfolio</h2>
              <p>Selected frames and moments—click any image to view larger.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12" style={{ marginTop: "-80px" }}>
            <Swiper {...slider} className="swiper photo-portfolio-slider">
              {items.map((item, idx) => (
                <SwiperSlide key={idx} className="swiper-slide">
                  <div
                    className="photo-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightbox({ open: true, src: item.full })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setLightbox({ open: true, src: item.full });
                    }}
                    aria-label="Open photo"
                  >
                    <div className="photo-img">
                      <img
                        className="img-fluid magnetic-item"
                        src={item.thumb}
                        alt=""
                        loading="lazy"
                      />
                      {/* Optional subtle zoom icon (kept minimal, no caption) */}
                      <span className="zoom-badge" aria-hidden>
                        ⤢
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination-photo mt-5" />
            </Swiper>

            {/* Pagination dots */}
          </div>
        </div>
      </div>

      {/* Lightbox Modal (no extra lib) */}
      {lightbox.open && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox({ open: false, src: "" })}
          onKeyDown={(e) => {
            if (e.key === "Escape") setLightbox({ open: false, src: "" });
          }}
          tabIndex={-1}
        >
          <button
            className="lightbox-close"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox({ open: false, src: "" });
            }}
          >
            ✕
          </button>
          <img
            className="lightbox-img"
            src={lightbox.src}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .photo-card {
          cursor: pointer;
        }

        /* Keep a photo-friendly aspect ratio (3:2 feels natural) */
        .photo-img {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 2;
          overflow: hidden;
          border-radius: 16px;
          background: #000;
          isolation: isolate;
        }
        @supports not (aspect-ratio: 3 / 2) {
          .photo-img::before {
            content: "";
            display: block;
            padding-top: 66.6667%;
          }
        }

        .photo-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
          will-change: transform;
        }

        /* Frosted glass overlay (same vibe as your video section) */
        .photo-img::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.08),
              rgba(255, 255, 255, 0.02)
            ),
            radial-gradient(
              120% 120% at 0% 0%,
              rgba(255, 255, 255, 0.08),
              transparent 60%
            );
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06),
            inset 0 -10px 30px rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px) saturate(120%);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 1;
          pointer-events: none;
        }

        /* Moving glare streak */
        .photo-img::before {
          content: "";
          position: absolute;
          top: -20%;
          left: -50%;
          width: 40%;
          height: 140%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.35) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(18deg) translateX(-120%);
          transition: transform 0.9s cubic-bezier(0.22, 0.61, 0.36, 1),
            opacity 0.3s ease;
          opacity: 0;
          z-index: 2;
          pointer-events: none;
        }

        /* Minimal zoom icon */
        .zoom-badge {
          position: absolute;
          bottom: 12px;
          right: 12px;
          z-index: 3;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          font-size: 16px;
          line-height: 1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35),
            inset 0 0 0 1px rgba(255, 255, 255, 0.25);
          pointer-events: none;
          transition: transform 0.3s ease, background 0.3s ease,
            opacity 0.3s ease;
          opacity: 0;
        }

        /* Hover effects */
        .photo-card:hover .photo-img img {
          transform: scale(1.05);
        }
        .photo-card:hover .photo-img::after {
          opacity: 1;
        }
        .photo-card:hover .photo-img::before {
          transform: rotate(18deg) translateX(260%);
          opacity: 1;
        }
        .photo-card:hover .zoom-badge {
          transform: scale(1.06);
          background: rgba(0, 0, 0, 0.65);
          opacity: 1;
        }

        :global(.swiper-pagination-photo) {
          position: static !important;
          width: 100%;
          margin: 16px auto 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          text-align: center;
        }
        :global(.swiper-pagination-photo .swiper-pagination-bullet) {
          width: 8px;
          height: 8px;
          background: rgba(0, 153, 255, 0.6);
          opacity: 1;
          margin: 0 6px !important;
        }
        :global(.swiper-pagination-photo .swiper-pagination-bullet-active) {
          background: rgba(255, 255, 255, 0.6);
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .lightbox-img {
          max-width: 92vw;
          max-height: 88vh;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }
        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: grid;
          place-items: center;
          font-size: 20px;
          cursor: pointer;
        }
        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}

export default PhotographyPortfolio;
