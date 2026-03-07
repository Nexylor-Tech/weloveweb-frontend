import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "PRIVACY", path: "/privacy" },
    { name: "TERMS", path: "/terms" },
  ];

  return (
    <nav className="w-full py-6 px-8 md:px-16 flex justify-between items-center border-b border-border sticky top-0 bg-bg/80 backdrop-blur-md z-50">
      <Link to="/" className="text-2xl font-bold tracking-tighter uppercase z-50" onClick={() => setIsOpen(false)}>
        we love web
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-sm font-medium tracking-wide uppercase relative ${
              location.pathname === link.path
                ? "text-fg"
                : "text-muted hover:text-fg transition-colors"
            }`}
          >
            {link.name}
            {location.pathname === link.path && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-fg"
              />
            )}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6 z-50">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-border rounded-[5px] hover:bg-fg hover:text-bg transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-fg transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-fg transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-fg transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-xl border-b border-border flex flex-col items-center py-8 gap-6 md:hidden shadow-xl"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold tracking-widest uppercase ${
                  location.pathname === link.path ? "text-fg" : "text-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
