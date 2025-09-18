import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = useNavigate();

  // Load dark mode preference
  useEffect(() => {
    const saved = localStorage.getItem("dark-mode");
    if (saved === "false") setDark(false);
  }, []);

  // Handle dark mode and scroll
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dark]);

  const links = [
    { name: "Home", to: "/" },
    { name: "Destinations", to: "/destinations" },
    { name: "Tours", to: "/tours" },
    { name: "Book", to: "/book" },
    { name: "Gallery", to: "/gallery" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  // Determine navbar text color
  const linkColor = scrolled
    ? "text-black dark:text-white" // black on light, white on dark when scrolled
    : dark
      ? "text-white"
      : "text-black";

  const hoverColor = scrolled
    ? "hover:text-yellow-500 dark:hover:text-yellow-400"
    : "hover:text-yellow-400";

  // Navigation arrows (if needed in future)
  const toggleDark = () => setDark((d) => !d);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300
      ${scrolled ? "bg-white/90 dark:bg-gray-900/90 shadow backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <span
            className={`font-bold text-lg ${dark || scrolled ? "text-white dark:text-white" : "text-black"}`}
          >
            India 360
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `
                relative px-3 py-1 font-medium transition-all
                ${linkColor} ${hoverColor}
                ${isActive ? "after:w-full" : "after:w-0"}
                after:left-0 after:h-[2px] after:bg-yellow-400 after:transition-all hover:after:w-full
              `}
            >
              {l.name}
            </NavLink>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-700 transition"
          >
            {dark ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className={scrolled ? "text-white" : "text-black"} />
            )}
          </button>

          {/* Login Button */}
          <button
            onClick={() => nav("/login")}
            className={`hidden sm:inline px-5 py-2 rounded-full font-medium transition 
              ${
                scrolled
                  ? "text-black dark:text-white border border-black/30 dark:border-white/50 hover:bg-yellow-400 hover:text-black"
                  : dark
                    ? "text-white border border-white/50 hover:bg-white/20"
                    : "text-black border border-black/30 hover:bg-black/10"
              }`}
          >
            Login
          </button>

          {/* Book Now Button */}
          <button
            onClick={() => nav("/book")}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-5 py-2 rounded-full shadow-md hover:shadow-lg transition font-semibold"
          >
            Book Now
          </button>

          {/* Mobile Hamburger */}
          <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)}>
            {open ? (
              <FaTimes
                className={dark || scrolled ? "text-white" : "text-black"}
              />
            ) : (
              <FaBars
                className={dark || scrolled ? "text-white" : "text-black"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen 
        bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg
        transform transition-transform duration-300
        ${open ? "translate-y-0" : "-translate-y-full"} 
        flex flex-col items-center justify-center gap-8`}
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className="text-xl font-medium text-gray-800 dark:text-white hover:text-yellow-400 transition"
          >
            {l.name}
          </Link>
        ))}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => nav("/login")}
            className="px-5 py-2 rounded-full border dark:text-white text-black hover:bg-yellow-400 hover:text-black transition"
          >
            Login
          </button>
          <button
            onClick={() => nav("/book")}
            className="px-5 py-2 rounded-full bg-yellow-400 text-black shadow hover:shadow-lg transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
