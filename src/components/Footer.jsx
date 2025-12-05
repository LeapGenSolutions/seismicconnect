import Section from "./Section";
import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import logo from "../assets/seismic-logo.png";

export default function Footer() {
  const location = useLocation();

  // Smooth scroll only on homepage
  const scrollOrNav = (e, href) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-gradient-to-r from-primary-50/40 via-white/40 to-primary-50/40 backdrop-blur-xl">
      <Section className="py-6 text-sm text-gray-600">
        {/* TOP ROW: left brand + right grouped columns */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* LEFT: brand / blurb – stays as is */}
          <div className="space-y-2 md:max-w-sm">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="SEISMIC Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="text-base font-semibold text-secondary-500">
                SEISMIC
              </span>
            </div>
            <p className="text-xs leading-relaxed">
              Ambient clinical intelligence that brings the focus back to the
              exam room — letting clinicians spend more time with patients and
              less time on documentation.
            </p>
          </div>

          {/* RIGHT: 3 columns grouped together and stuck to the right */}
          <div className="flex flex-1 justify-end gap-8 md:gap-10">
            {/* Company */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-secondary-500">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/about" className="hover:text-primary-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={location.pathname === "/" ? "#contact" : "/#contact"}
                    onClick={(e) => scrollOrNav(e, "#contact")}
                    className="hover:text-primary-600"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-secondary-500">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={location.pathname === "/" ? "#features" : "/#features"}
                    onClick={(e) => scrollOrNav(e, "#features")}
                    className="hover:text-primary-600"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      location.pathname === "/"
                        ? "#integrations"
                        : "/#integrations"
                    }
                    onClick={(e) => scrollOrNav(e, "#integrations")}
                    className="hover:text-primary-600"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    to={location.pathname === "/" ? "#security" : "/#security"}
                    onClick={(e) => scrollOrNav(e, "#security")}
                    className="hover:text-primary-600"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/demo" className="hover:text-primary-600">
                    Request Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Connect */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-secondary-500">
                Legal &amp; Connect
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    type="button"
                    className="hover:text-primary-600 cursor-default"
                  >
                    Privacy Policy (coming soon)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="hover:text-primary-600 cursor-default"
                  >
                    Terms of Use (coming soon)
                  </button>
                </li>
              </ul>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary-600"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:info@seismic.health"
                  className="inline-flex items-center gap-1 hover:text-primary-600"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: copyright + tagline */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-2 border-t border-gray-200 pt-3 text-xs text-gray-500">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} SEISMIC. All rights reserved.
          </div>
          <div className="text-center md:text-right">
            Built for clinicians, designed for care.
          </div>
        </div>
      </Section>
    </footer>
  );
}
