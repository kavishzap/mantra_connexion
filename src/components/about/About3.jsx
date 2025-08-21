import { useRouter } from "next/router";
import React from "react";

function About3() {
  const currentRoute = useRouter().pathname;
  return (
    <div
      className={`home3-about-section ${
        currentRoute === "/about" ? "sec-mar" : ""
      }`}
    >
      <div className="container-fluid mb-5">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-9">
            <div
              className="section-title-3 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2>Our Story</h2>
              <p>
                Welcome to Mantra Connexions, where we specialize in bringing
                creative, high-quality productions to life.
              </p>
            </div>
            <div className="about-left">
              <div
                className="about-img  wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="assets/Kabir-profile-pic.jpg"
                  alt=""
                />
                <div className="text-center text-white mt-3">
                  <h5>Kabir Gobin</h5>
                  <p className="mb-0 text-white">
                    Founder and Managing Director
                  </p>
                </div>
              </div>

              <div
                className="about-content animate "
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="about-right"
                  style={{ marginTop: "-220px", marginBottom: "50px" }}
                >
                  <div
                    className="about-exprience wow animate fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                    aria-label="Years of experience"
                    role="img"
                  >
                    <div className="years">
                      <h2>
                        5 +
                        <br />
                        <span>Years</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <h2>Providing the best</h2>
                <p>
                  Our team of talented individuals is dedicated to providing you
                  with the best short films, visuals, blogs, newsletters,
                  documentaries, and social media content.
                </p>
                <h2>Compelling and Inspiring </h2>
                <p>
                  Our goal is to tell compelling stories that inspire and
                  entertain you, while also sparking important conversations
                  about the world around us. We believe that the power of
                  storytelling can bring people together to create real
                  conversations and make a real difference in our communities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-right">
              <div
                className="about-img wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="img-fluid magnetic-item"
                  src="assets/Akshay-resize.jpg"
                  alt=""
                />
                <div className="text-center text-white mt-3">
                  <h5>Akshay Jummoodoo</h5>
                  <p className="mb-4 text-white">Production Lead</p>
                </div>
              </div>
              <div
                className="about-exprience wow animate fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
                aria-label="Years of experience"
                role="img"
              >
                <div className="years">
                  <h5>
                    Certified
                    <br />
                    Customer
                    <br />
                    <span>Satisfaction</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
