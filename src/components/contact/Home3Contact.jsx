"use client";

import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

function Home3Contact() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  // Lock body scroll when the modal is open and focus the close button
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => closeBtnRef.current?.focus());
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const message = String(fd.get("message") || "");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:admin@mantraconnexions.mu?subject=${subject}&body=${body}`;
    setOpen(false);
  };

  return (
    <div className="home3-contact-area sec-mar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-wrapper text-center">
              <Marquee className="marquee_text">
                Content Creator for Social Media. Event Production. Live
                Streaming. Short Films. Hybrid Events.
              </Marquee>

              {/* Trigger */}
              <div
                className="contact-btn magnetic-item wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  Contact Us.
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <>
          <div
            className="modal-backdrop"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            className="modal-wrap"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contactModalTitle"
          >
            <div className="modal-card">
              <div className="modal-header">
                <h3 id="contactModalTitle">Let’s work together</h3>
                <button
                  ref={closeBtnRef}
                  className="modal-close"
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close dialog"
                >
                  ×
                </button>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="grid">
                  <label className="field">
                    <span>Name</span>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                  </label>
                  <label className="field">
                    <span>Email</span>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>

                <label className="field mt-2">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your project…"
                    required
                  />
                </label>

                <button className="submit-btn" type="submit">
                  Send enquiry
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {/* Styles */}
      <style jsx>{`
        .contact-trigger {
          display: inline-flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          font-weight: 600;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .contact-trigger:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.12);
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          z-index: 60;
          animation: fadeIn 120ms ease-out both;
        }
        .modal-wrap {
          position: fixed;
          inset: 0;
          z-index: 61;
          display: grid;
          place-items: center;
          padding: 24px;
        }
        .modal-card {
          width: 100%;
          max-width: 680px;
          border-radius: 18px;
          background: #0f1116;
          color: #e7e7eb;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
          animation: popIn 160ms ease-out both;
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px 20px 20px;
        }
        .modal-header h3 {
          margin: 0;
          color: #fff;
        }
        .modal-close {
          font-size: 28px;
          line-height: 1;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          cursor: pointer;
        }
        .modal-sub {
          padding: 4px 20px 0 20px;
          color: #bfc2cc;
        }
        .modal-sub a {
          color: #fff;
          text-decoration: underline;
        }

        .contact-form {
          padding: 16px 20px 20px 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
        .field {
          display: grid;
          gap: 6px;
        }
        .field span {
          font-size: 0.9rem;
          color: #cfd0d6;
        }
        input,
        textarea {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #fff;
          border-radius: 12px;
          padding: 12px 12px;
          outline: none;
        }
        input:focus,
        textarea:focus {
          border-color: rgba(255, 255, 255, 0.3);
        }

        .submit-btn {
          margin-top: 14px;
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #1d9bf0;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: filter 0.2s ease;
        }
        .submit-btn:hover {
          filter: brightness(1.08);
        }

        .mini-meta {
          margin-top: 12px;
          font-size: 0.9rem;
          color: #aeb1bb;
          text-align: center;
        }
        .mini-meta a {
          color: #fff;
          text-decoration: underline;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes popIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default Home3Contact;
