"use client";

import React, { useMemo, useState, useEffect } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { openContactModal } from "../../utils/contactModal";

SwiperCore.use([Pagination, Autoplay, EffectFade]);
function TypingOneLine({
  words,
  typeSpeed = 70, // ms per letter while typing
  deleteSpeed = 45, // ms per letter while deleting
  holdDelay = 700, // pause when word is fully typed
  emptyDelay = 350, // pause when line is empty before next word
  loop = true,
}) {
  const [index, setIndex] = useState(0); // which word
  const [text, setText] = useState(""); // current visible text
  const [phase, setPhase] = useState("typing"); // "typing" | "holding" | "deleting" | "waiting"

  useEffect(() => {
    let t;

    const current = words[index % words.length];

    if (phase === "typing") {
      if (text.length < current.length) {
        t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typeSpeed
        );
      } else {
        setPhase("holding");
      }
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), holdDelay);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          deleteSpeed
        );
      } else {
        setPhase("waiting");
      }
    } else if (phase === "waiting") {
      t = setTimeout(() => {
        if (!loop && index + 1 >= words.length) return;
        setIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }, emptyDelay);
    }

    return () => clearTimeout(t);
  }, [
    phase,
    text,
    index,
    words,
    typeSpeed,
    deleteSpeed,
    holdDelay,
    emptyDelay,
    loop,
  ]);

  // Keep a fixed height for the title (single line), so the right side stays static.
  return (
    <h1 className="typing-one-line" style={{ marginTop: "-60px" }}>
      {text}
      <span className="typing-cursor">|</span>

      <style jsx>{`
        .typing-one-line {
          font-weight: 800;
          line-height: 1.2;
          min-height: 1.2em; /* reserve one line */
          white-space: nowrap; /* prevent wrap */
        }
        .typing-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s steps(1, end) infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </h1>
  );
}

function Banner3() {
  const [isOpen, setOpen] = useState(false);

  // Words to rotate (single line replacement)
  const words = ["Strategic", "Thinking", "Compelling", "Engagement"];
  const socialLinks = {
    facebook: "https://www.facebook.com/mantraconnexions",
    instagram: "http://instagram.com/mantraconnexions/#",
    vimeo: "https://vimeo.com/mantraconnexions",
    linkedin: "https://www.linkedin.com/company/mantra-connexions/",
    youtube: "https://www.youtube.com/mantraconnexions",
  };
  const SocialLinks = ({ links, className = "" }) => (
    <div className={`social-list ${className}`}>
      <ul>
        <li>
          <a href={links.facebook} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-facebook" />
          </a>
        </li>
        <li>
          <a href={links.vimeo} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-vimeo" />
          </a>
        </li>
        <li>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-instagram" />
          </a>
        </li>
        <li>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-linkedin" />
          </a>
        </li>
        <li>
          <a href={links.youtube} target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-youtube" />
          </a>
        </li>
      </ul>
    </div>
  );

  // Images for the slideshow (right side)
  const imageSlides = [
    "assets/MantraConnexions-Production-27-scaled.jpg",
    "assets/MantraConnexions-Production-35-scaled.jpg",
    "assets/MantraConnexions-Production-88-scaled.jpg",
  ];

  const slider = useMemo(
    () => ({
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1200,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      pagination: { el: ".swiper-pagination1", clickable: true },
      fadeEffect: { crossFade: true },
    }),
    []
  );
  // put this above your return()
  const morphActive = (swiper) => {
    const slides = Array.from(swiper?.slides || []);
    // remove class from all slides
    slides.forEach((s) => s.classList.remove("morph-in"));

    const active = slides[swiper.activeIndex];
    if (!active) return;

    // force-restart the CSS animation on the img
    const img = active.querySelector("img");
    if (img) {
      img.style.animation = "none"; // kill previous animation
      // force reflow so the next animation can start
      // eslint-disable-next-line no-unused-expressions
      img.offsetHeight;
      img.style.animation = ""; // clear inline override
    }

    // add class on the next frame for reliability
    requestAnimationFrame(() => active.classList.add("morph-in"));
  };

  return (
    <div className="banner-area3">
      <div className="scroll-down">
        <a href="#home3-partner-area">
          Scroll Down
          <span>
            <svg
              width={13}
              height={13}
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H12M12 1V13M12 1L0.5 12" />
            </svg>
          </span>
        </a>
      </div>

      <div className="banner-vector">
        <img
          className="img-fluid"
          src="assets/img/home-3/banner-vector.png"
          alt=""
        />
      </div>

      <div className="social-area">
        <ul>
          <li>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-facebook" />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.vimeo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-vimeo" />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-instagram" />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </li>
          <li>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-youtube" />
            </a>
          </li>
        </ul>
      </div>

      {/* Single wrapper: constant content left, image slider right */}
      <div className="banner-wrapper ">
        <div className="banner-content">
          <TypingOneLine
            words={words}
            typeSpeed={70}
            deleteSpeed={45}
            holdDelay={700}
            emptyDelay={350}
            loop
          />

          <p>
            Connecting brands to people: Our purpose is to bridge the gap
            between your thoughts and audience. Using an analytical and creative
            mindset to understand your strategic objectives and brand purpose,
            we create conversations. We understand emotions.
          </p>
          <SocialLinks links={socialLinks} className="social-mobile mb-5" />
          <div className="banner-btn-group">
            <div className="banner-btn-group">
              {/* If you want to keep the Link look, just prevent default and open the modal */}
              <Link legacyBehavior href="/contact">
                <a
                  className="primary-btn3"
                  onClick={(e) => {
                    e.preventDefault();
                    openContactModal();
                  }}
                >
                  Free Consultancy
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* SLIDER (updated) */}
        <div className="banner-image magnetic-item">
          <Swiper
            {...slider}
            onInit={(swiper) => morphActive(swiper)}
            onSlideChangeTransitionStart={(swiper) => morphActive(swiper)}
            className="swiper banner3-slider"
          >
            {imageSlides.map((src, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <img className="img-fluid" src={src} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="banner-video-area">
          <div className="video-area">
            <div
              data-fancybox="gallery"
              className="video-popup"
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <svg
                width={40}
                height={44}
                viewBox="0 0 30 34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M30 17.0012C30 16.0359 29.4735 15.1469 28.5906 14.6218L4.75661 0.46019C3.79257 -0.111681 2.61693 -0.153462 1.60777 0.351093C0.601772 0.855365 0 1.78612 0 2.83996V31.1609C0 32.2148 0.601723 33.1452 1.60931 33.6498C2.079 33.8837 2.5828 34 3.08665 34C3.66595 34 4.24144 33.8456 4.75628 33.5407L28.5903 19.3813C29.4734 18.8559 30 17.9669 30 17.0016V17.0012ZM27.7302 18.1537L3.89624 32.3131C3.42844 32.5905 2.85862 32.6093 2.36997 32.3668C1.88133 32.1225 1.58884 31.6719 1.58884 31.1607V2.83969C1.58884 2.32846 1.88133 1.8761 2.36997 1.63359C2.59834 1.52102 2.84346 1.46385 3.08699 1.46385C3.36811 1.46385 3.64734 1.53842 3.89658 1.68755L27.7306 15.8492C28.1646 16.1074 28.4135 16.5287 28.4135 17.0033C28.4131 17.4763 28.1642 17.8955 27.7302 18.1537Z"
                />
              </svg>
            </div>
            <img
              className="video-img"
              src="assets/MantraConnexions-Production-88-scaled.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <ModalVideo
        style={{ overlay: { zIndex: 9999 } }}
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        videoId="802369134"
        onClose={() => setOpen(false)}
      />
      <style jsx global>{`
        .banner3-slider .swiper-slide img {
          display: block;
          width: 100%;
          height: auto;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          will-change: clip-path, transform, opacity;
        }
        .banner3-slider .swiper-slide.morph-in img {
          animation: banner3-morph-in 1.2s cubic-bezier(0.22, 0.61, 0.36, 1)
            forwards;
        }
        @keyframes banner3-morph-in {
          0% {
            clip-path: polygon(
              50% 46%,
              56% 47%,
              59% 52%,
              56% 57%,
              50% 58%,
              44% 57%,
              41% 52%,
              44% 47%
            );
            -webkit-clip-path: polygon(
              50% 46%,
              56% 47%,
              59% 52%,
              56% 57%,
              50% 58%,
              44% 57%,
              41% 52%,
              44% 47%
            );
            transform: scale(1.02);
          }
          33% {
            clip-path: polygon(
              38% 18%,
              72% 24%,
              86% 50%,
              70% 80%,
              36% 82%,
              14% 64%,
              14% 38%,
              30% 22%
            );
            -webkit-clip-path: polygon(
              38% 18%,
              72% 24%,
              86% 50%,
              70% 80%,
              36% 82%,
              14% 64%,
              14% 38%,
              30% 22%
            );
          }
          66% {
            clip-path: polygon(
              6% 10%,
              100% 6%,
              94% 58%,
              92% 100%,
              50% 98%,
              8% 100%,
              2% 60%,
              0% 24%
            );
            -webkit-clip-path: polygon(
              6% 10%,
              100% 6%,
              94% 58%,
              92% 100%,
              50% 98%,
              8% 100%,
              2% 60%,
              0% 24%
            );
          }
          100% {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 0,
              100% 100%,
              100% 100%,
              0 100%,
              0 100%,
              0 0
            );
            -webkit-clip-path: polygon(
              0 0,
              100% 0,
              100% 0,
              100% 100%,
              100% 100%,
              0 100%,
              0 100%,
              0 0
            );
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Banner3;
