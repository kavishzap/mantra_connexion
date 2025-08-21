import React from "react";
import Marquee from "react-fast-marquee";

function Partner3() {
  const partners = [
    "assets/img/client/absa.png",
    "assets/img/client/accenture.png",
    "assets/img/client/acs.png",
    "assets/img/client/axiz.png",
    "assets/img/client/bcp.png",
    "assets/img/client/beau-plan.png",
    "assets/img/client/bolt.png",
    "assets/img/client/careedge.png",
    "assets/img/client/coca.png",
    "assets/img/client/doodland.png",
    "assets/img/client/heritage-valriche.png",
    "assets/img/client/IQEQ.png",
    "assets/img/client/lex-frontier.png",
    "assets/img/client/livewell.png",
    "assets/img/client/mifc.png",
    "assets/img/client/miod.png",
    "assets/img/client/mitco.png",
    "assets/img/client/nccg.png",
    "assets/img/client/oneandonly.png",
    "assets/img/client/reassurance.png",
    "assets/img/client/segatours.png",
    "assets/img/client/whitefield.png",
  ];

  // Pretty alt from filename
  const pretty = (src) => {
    const file = src.split("/").pop().replace(/\.[^.]+$/, "");
    return file
      .replace(/-/g, " ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/\b([a-z])/g, (m) => m.toUpperCase());
  };

  return (
    <div className="home3-partner-area" id="home3-partner-area">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="partner-title">
              <h3>Our Collaborators</h3>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="partner-wrapper">
              <Marquee
                className="marquee_text"
                autoFill={true}
                gradient={false}
                speed={40}
                pauseOnHover={true}
              >
                {partners.map((src, index) => (
                  <div className="item" key={`${src}-${index}`}>
                    <img className="logo" src={src} alt={pretty(src)} />
                    <img
                      className="star"
                      src="assets/img/home-3/star.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partner-title h3 {
          margin: 0;
        }
        .partner-wrapper {
          width: 100%;
        }
        .item {
          display: inline-flex;
          align-items: center;
          padding: 0 14px;
        }
        .logo {
          height: 156px;
          width: auto;
          object-fit: contain;
          opacity: 0.65;
          filter: grayscale(100%);
          transition: opacity 200ms ease, filter 200ms ease, transform 200ms ease;
          transform: translateZ(0);
        }
        .logo:hover {
          opacity: 1;
          filter: grayscale(0%);
          transform: scale(1.03);
        }
        .star {
          height: 22px;
          width: auto;
          margin-left: 14px;
          opacity: 0.8;
        }
        /* Hide the very last star */
        .item:last-child .star {
          display: none;
        }

        @media (max-width: 1200px) {
          .logo {
            height: 50px;
          }
          .star {
            height: 20px;
          }
          .item {
            padding: 0 12px;
          }
        }
        @media (max-width: 768px) {
          .logo {
            height: 44px;
          }
          .star {
            height: 18px;
          }
          .item {
            padding: 0 10px;
          }
        }
        @media (max-width: 480px) {
          .logo {
            height: 138px;
          }
          .star {
            height: 16px;
          }
          .item {
            padding: 0 8px;
          }
        }
      `}</style>
    </div>
  );
}

export default Partner3;
