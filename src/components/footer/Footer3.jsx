import Link from "next/link";
import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaVimeoV,
} from "react-icons/fa";

function Footer3() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer3">
      <div className="container">
        {/* Top grid */}
        <div className="footer-grid">
          {/* LEFT: logo + socials */}
          <div className="footer-left">
            <img
              className="brand"
              src="assets/logo2.png"
              alt="Mantra Connexions"
            />

            <div className="footer-social" aria-label="Social links">
              <a
                href="https://www.facebook.com/mantraconnexions"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/mantraconnexions/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/mantra-connexions/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://vimeo.com/mantraconnexions"
                aria-label="Vimeo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaVimeoV />
              </a>
              <a
                href="https://www.youtube.com/mantraconnexions"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* RIGHT: stacked contact lines */}
          <div className="footer-right">
            <div className="contact-line">
              <FiMapPin aria-hidden="true" />
              <span>9 Avenue de Orchidees, Sodnac, Quatre Bornes, Mauritius</span>
            </div>

            <div className="contact-line">
              <FiMail aria-hidden="true" />
              <a href="mailto:admin@mantraconnexions.mu">admin@mantraconnexions.mu</a>
            </div>

            <div className="contact-line">
              <FiPhone aria-hidden="true" />
              <a href="tel:+2304896471">+230 489 6471</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom meta */}
        <div className="footer-meta">
          © {year} | Mantra Connexions |{" "}
          <Link href="/privacy-policy" legacyBehavior>
            <a className="meta-link">Privacy Policy</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .footer3 {
          background: #0d0c11;
          color: #ddd;
        }
        .container {
          padding: 32px 16px 18px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* grid that feels balanced */
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: center;
          }
        }

        .footer-left {
          display: grid;
          grid-auto-flow: row;
          align-items: center;
          justify-items: start;
          gap: 14px;
        }
        .brand {
          max-height: 48px;
          height: 48px;
          width: auto;
          display: block;
        }

        .footer-social {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .footer-social a {
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
          /* nudge baseline so icons look visually centered */
          transform: translateY(0.5px);
        }
        .footer-social a:hover {
          background: #fff;
          color: #000;
          transform: translateY(-2px);
        }

        .footer-right .contact-line {
          display: flex;
          align-items: center;
          gap: 10px;
          line-height: 1.7;
          margin-top: 4px;
          white-space: normal;
        }
        .footer-right .contact-line:first-child {
          margin-top: 0;
        }
        .footer-right .contact-line :global(svg) {
          width: 18px;
          height: 18px;
          opacity: 0.9;
          flex-shrink: 0;
        }
        .footer-right a {
          color: #fff;
          text-decoration: none;
        }
        .footer-right a:hover {
          text-decoration: underline;
        }

        .footer-divider {
          border: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          margin: 22px 0 14px;
        }

        .footer-meta {
          text-align: center;
          font-size: 0.95rem;
          color: #cfcfcf;
          padding-bottom: 6px;
        }
        .meta-link {
          color: #fff;
          text-decoration: none;
        }
        .meta-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}

export default Footer3;
