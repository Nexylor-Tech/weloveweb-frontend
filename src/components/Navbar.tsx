import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

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
      <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">
        we love web
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-sm font-medium tracking-wide uppercase relative ${location.pathname === link.path
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

      <button
        onClick={toggleTheme}
        className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-border rounded-[5px] hover:bg-fg hover:text-bg transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

