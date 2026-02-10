import { useState, useEffect, useRef } from "react";
import Section from "./Section";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/seismic-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(""); // "" = hero/top
  const [howOpen, setHowOpen] = useState(false);
  const howCloseTimeoutRef = useRef(null);
  const location = useLocation();

  // NEW: ref to measure sticky header height dynamically
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pillars", label: "Pillars" },
    {
      href: "#how",
      label: "How It Works",
      children: [
        { href: "#standalone", label: "Standalone SEISMIC" },
        { href: "#integrations", label: "Integrations" },
      ],
    },
    { href: "#security", label: "Security" },
    //{ href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact Us" },
  ];

  // NEW: dynamic offset scroll (no hardcoding)
  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (!el) return;

    const headerH = headerRef.current?.getBoundingClientRect().height || 0;

    // Desktop: no extra gap. Mobile: small breathing room.
    const extraGap = window.innerWidth >= 768 ? 0 : 8;

    const y = el.getBoundingClientRect().top + window.scrollY - headerH - extraGap;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    if (location.pathname === "/") {
      e.preventDefault();
      scrollToSection(href);
      setActive(href);
    }
  };

  // active section observer
  useEffect(() => {
    if (location.pathname !== "/") return;

    const heroId = "top";
    const sectionIds = [
      "features",
      "pillars",
      "how",
      "standalone",
      "integrations",
      "security",
      "testimonials",
      "about",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        let visibleEntry = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              !visibleEntry ||
              entry.intersectionRatio > visibleEntry.intersectionRatio
            ) {
              visibleEntry = entry;
            }
          }
        });

        if (visibleEntry) {
          const id = visibleEntry.target.id;
          if (id === heroId) setActive("");
          else setActive(`#${id}`);
        }
      },
      { threshold: 0.4 }
    );

    const heroEl = document.getElementById(heroId);
    if (heroEl) observer.observe(heroEl);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (howCloseTimeoutRef.current) clearTimeout(howCloseTimeoutRef.current);
    };
  }, []);

  const isItemActive = (item) => {
    if (active === item.href) return true;
    if (item.children)
      return item.children.some((child) => child.href === active);
    return false;
  };

  // NEW: mobile close first, then scroll after layout settles
  const handleMobileNav = (e, href) => {
    if (location.pathname !== "/") return;

    e.preventDefault();
    setOpen(false);

    // wait for DOM/layout to settle after menu closes
    setTimeout(() => {
      scrollToSection(href);
      setActive(href);
    }, 0);
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      // if click is outside the mobile menu AND outside the hamburger button, close
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest("[data-mobile-toggle='true']")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-gradient-to-r from-primary-50/60 via-white/50 to-primary-50/60 backdrop-blur-2xl border-b border-white/50 shadow"
    >
      <Section className="flex items-center justify-between py-3">
        {/* LOGO */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.history.replaceState(null, "", "/");
              setActive("");
              // scroll to top reliably
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="SEISMIC Logo" className="h-9 w-auto" />
          <span className="font-semibold text-lg text-secondary-500">
            SEISMIC
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => {
            const itemIsActive = isItemActive(item);

            if (item.children) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (howCloseTimeoutRef.current)
                      clearTimeout(howCloseTimeoutRef.current);
                    setHowOpen(true);
                  }}
                  onMouseLeave={() => {
                    howCloseTimeoutRef.current = setTimeout(
                      () => setHowOpen(false),
                      250
                    );
                  }}
                >
                  <Link
                    to={location.pathname === "/" ? item.href : `/${item.href}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={
                      "inline-flex items-center gap-1 text-gray-700 hover:text-primary-600 transition border-b-2 pb-1 " +
                      (itemIsActive
                        ? "border-primary-600 text-primary-600"
                        : "border-transparent")
                    }
                  >
                    {item.label}
                    <svg
                      className={
                        "w-3.5 h-3.5 " +
                        (itemIsActive ? "text-primary-600" : "text-gray-500")
                      }
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {howOpen && (
                    <div className="absolute left-0 top-full mt-1 w-56 rounded-xl border bg-white shadow-lg py-2 z-50">
                      {item.children.map((child) => {
                        const childActive = active === child.href;
                        return (
                          <Link
                            key={child.href}
                            to={
                              location.pathname === "/"
                                ? child.href
                                : `/${child.href}`
                            }
                            onClick={(e) => {
                              handleNavClick(e, child.href);
                              setHowOpen(false);
                            }}
                            className={
                              "block px-4 py-2 text-sm mx-1 rounded-md " +
                              (childActive
                                ? "bg-primary-50 text-primary-600 font-medium"
                                : "text-gray-700 hover:bg-gray-50 hover:text-primary-600")
                            }
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                to={location.pathname === "/" ? item.href : `/${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={
                  "text-gray-700 hover:text-primary-600 transition border-b-2 pb-1 " +
                  (itemIsActive
                    ? "border-primary-600 text-primary-600"
                    : "border-transparent")
                }
              >
                {item.label}
              </Link>
            );
          })}

          {/* About (keeps underline style) */}
          <Link
            to="/about"
            className={
              "text-gray-700 hover:text-primary-600 transition border-b-2 pb-1 " +
              (location.pathname === "/about"
                ? "border-primary-600 text-primary-600"
                : "border-transparent")
            }
          >
            About Us
          </Link>

          {/* Login + Try SEISMIC as boxed buttons */}
          <div className="flex items-center gap-2 ml-3">
            {/* Login – outlined pill */}
            {/* Login – outlined pill */}
            <a
              href="https://leapgenaiexternal.ciamlogin.com/526922da-32fc-472e-a268-3875f1d50517/oauth2/v2.0/authorize?client_id=e8f47d33-02b8-4467-b0d8-8f705b07a463&response_type=id_token&redirect_uri=https%3A%2F%2Fregistration.seismicconnect.com%2Fstandalone%2Fregistration&scope=openid+profile+email&nonce=izj26i&prompt=login"
              className={
                "inline-flex items-center gap-2 rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-4 py-2 text-sm shadow"
              }
            >
              Login
            </a>

            {/* Try SEISMIC – primary pill */}
            {/* <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-4 py-2 text-sm shadow"
            >
              Try SEISMIC
            </Link> */}
          </div>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          data-mobile-toggle="true"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-secondary-500 mb-1"></span>
          <span className="block w-6 h-0.5 bg-secondary-500 mb-1"></span>
          <span className="block w-6 h-0.5 bg-secondary-500"></span>
        </button>
      </Section>

      {/* MOBILE MENU */}
      {open && (
        <div ref={mobileMenuRef} className="md:hidden border-t bg-white">
          <Section className="py-3 flex flex-col gap-3">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.href} className="flex flex-col">
                    <Link
                      to={
                        location.pathname === "/" ? item.href : `/${item.href}`
                      }
                      onClick={(e) => handleMobileNav(e, item.href)}
                      className="text-gray-700 font-medium"
                    >
                      {item.label}
                    </Link>

                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={
                          location.pathname === "/"
                            ? child.href
                            : `/${child.href}`
                        }
                        onClick={(e) => handleMobileNav(e, child.href)}
                        className="pl-4 text-sm text-gray-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  to={location.pathname === "/" ? item.href : `/${item.href}`}
                  onClick={(e) => handleMobileNav(e, item.href)}
                  className="text-gray-700"
                >
                  {item.label}
                </Link>
              );
            })}

            {/* About */}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              About Us
            </Link>

            {/* Login – boxed */}
            {/* Login – boxed */}
            <a
              href="https://leapgenaiexternal.ciamlogin.com/526922da-32fc-472e-a268-3875f1d50517/oauth2/v2.0/authorize?client_id=e8f47d33-02b8-4467-b0d8-8f705b07a463&response_type=id_token&redirect_uri=https%3A%2F%2Fregistration.seismicconnect.com%2Fstandalone%2Fregistration&scope=openid+profile+email&nonce=izj26i&prompt=login"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-4 py-2 shadow"
            >
              Sign In
            </a>

            {/* Try SEISMIC – primary boxed */}
            {/*<Link
              to="/demo"
              onClick={handleMobileRouteNav}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 hover:bg-primary-600/90 text-white px-4 py-2 shadow"
            >
              Try SEISMIC
            </Link>*/}
          </Section>
        </div>
      )}
    </header>
  );
}
