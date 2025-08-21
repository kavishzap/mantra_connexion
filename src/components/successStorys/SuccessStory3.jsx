"use client";

import React, { useMemo, useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from "react-modal-video";
import { FaPlay } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function SuccessStory3() {
  // Thumbnails
  const thumbs = [
    "assets/img/video/Absa-Customer-Experience-Workshop-Training-Highlight-Video.png",
    "assets/img/video/Screenshot-5.png",
    "assets/img/video/Screenshot-7.png",
    "assets/img/video/Screenshot-9.png",
    "assets/img/video/Screenshot-11.png",
    "assets/img/video/Screenshot-2022-11-18-at-13.00.29.png",
    "assets/img/video/Screenshot-2022-11-18-at-13.06.08.png",
    "assets/img/video/Screenshot-2022-11-18-at-13.08.48.png",
    "assets/img/video/Screenshot-2022-11-18-at-13.11.22.png",
  ];

  // Vimeo URLs
  const vimeoUrls = [
    "https://vimeo.com/738015994?fl=pl&fe=sh",
    "https://vimeo.com/728362932?fl=pl&fe=sh",
    "https://vimeo.com/712345678",
    "https://vimeo.com/678901234",
    "https://vimeo.com/567890123",
    "https://vimeo.com/802369134",
    "https://vimeo.com/903456789",
    "https://vimeo.com/712345678",
  ];

  // Captions
  const captions = [
    "Absa — Customer Experience Workshop Highlights",
    "One Accenture > 20yearstogether campaign",
    "IQ-EQ > 30 Years Anniversary > Industry Film",
    "Absa-Premier Corporate",
    "Alliot Global Alliance - Lex Frontier",
    "IQ-EQ > 30 Years Corporate Event Film",
    "PWC, Showcasing Our People",
    "Showcasing the new MG",
    "Public Masterclass - showcasing the programme",
  ];

  // Build [{ video_img, url, caption }]
  const videoItems = useMemo(() => {
    const len = thumbs.length;
    return Array.from({ length: len }, (_, i) => ({
      video_img: thumbs[i],
      url: vimeoUrls[i] ?? vimeoUrls[vimeoUrls.length - 1],
      caption: captions[i] ?? "",
    }));
  }, [thumbs, vimeoUrls, captions]);

  // Vimeo modal
  const [modal, setModal] = useState({ open: false, id: "" });

  const getVimeoId = (u) => {
    const m = String(u || "").match(/vimeo\.com\/(?:video\/)?(\d+)/i);
    return m ? m[1] : String(u || "");
  };

  // Swiper config
  const slider = useMemo(
    () => ({
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1000,
      pagination: { el: ".swiper-pagination-photo", clickable: true },
      autoplay: { delay: 1000, disableOnInteraction: false },
      breakpoints: {
        280: { slidesPerView: 1 },
        386: { slidesPerView: 1 },
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
    <div className="home3-success-stories-area sec-mar">
      <div className="container">
        <div
          className="row mb-60 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-4">
            <div className="section-title-3">
              <h2>Video Portfolio</h2>
              <p>
                Explore our video portfolio—short films, brand stories, and
                social-first edits crafted end-to-end. From concept and
                scripting to cinematography, color, and sound, every frame is
                built to move audiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slider} className="swiper home3-success-stories-slider">
              {videoItems.map((item, idx) => (
                <SwiperSlide key={idx} className="swiper-slide">
                  <div
                    className="success-storie-card"
                    role="button"
                    tabIndex={0}
                    onClick={() =>
                      setModal({ open: true, id: getVimeoId(item.url) })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setModal({ open: true, id: getVimeoId(item.url) });
                    }}
                    aria-label={`Play video: ${item.caption || "Video"}`}
                  >
                    <div className="success-img">
                      <img
                        className="img-fluid magnetic-item"
                        src={item.video_img}
                        alt={item.caption || "Video thumbnail"}
                        loading="lazy"
                      />
                      {/* Centered play icon */}
                      <span className="play-badge" aria-hidden>
                        <FaPlay />
                      </span>
                    </div>

                    {/* Caption */}
                    <div className="success-caption">{item.caption}</div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination-photo mt-5" />
            </Swiper>

            {/* Pagination dots (external container) */}
          </div>
        </div>
      </div>

      {/* Vimeo modal */}
      <ModalVideo
        channel="vimeo"
        isOpen={modal.open}
        videoId={modal.id}
        autoplay
        onClose={() => setModal({ open: false, id: "" })}
      />

      {/* Styles */}
      <style jsx>{`
        .success-storie-card {
          cursor: pointer;
        }

        /* Uniform thumbnail size for every slide */
        .success-img {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 16px;
          background: #000;
          isolation: isolate;
        }

        @supports not (aspect-ratio: 16 / 9) {
          .success-img::before {
            content: "";
            display: block;
            padding-top: 56.25%;
          }
        }

        .success-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
          will-change: transform;
        }

        /* Crystal glass overlay (frosted pane) */
        .success-img::after {
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
        .success-img::before {
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

        .play-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
          width: 64px;
          height: 64px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          font-size: 28px; /* bigger than before */
          line-height: 1;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35),
            inset 0 0 0 1px rgba(255, 255, 255, 0.25);
          pointer-events: none;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        /* Hover effects */
        .success-storie-card:hover .success-img img {
          transform: scale(1.05);
        }
        .success-storie-card:hover .success-img::after {
          opacity: 1;
        }
        .success-storie-card:hover .success-img::before {
          transform: rotate(18deg) translateX(260%);
          opacity: 1;
        }
        .success-storie-card:hover .play-badge {
          transform: translate(-50%, -50%) scale(1.06);
          background: rgba(0, 0, 0, 0.65);
        }

        /* Caption under each image */
        .success-caption {
          margin-top: 10px;
          font-size: 0.975rem;
          line-height: 1.4;
          color: #fff;
          text-align: center;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        :global(.dark) .success-caption {
          color: #e5e7eb;
        }

        /* Center external pagination for this slider */
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
      `}</style>
    </div>
  );
}

export default SuccessStory3;
