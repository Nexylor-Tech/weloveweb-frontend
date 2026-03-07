import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-32 px-8 py-16 md:px-16 flex flex-col gap-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-4">
          <Link
            to="/about"
            className="text-xl font-bold uppercase hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-xl font-bold uppercase hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/pricing"
            className="text-xl font-bold uppercase hover:text-accent transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-xl font-bold uppercase hover:text-accent transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="text-xl font-bold uppercase hover:text-accent transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/privacy"
            className="text-xl font-bold uppercase hover:text-accent transition-colors"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-xl font-bold uppercase hover:text-accent transition-colors"
          >
            Terms
          </Link>
        </div>

        <div className="max-w-sm flex flex-col gap-4">
          <p className="text-sm uppercase tracking-widest font-medium">
            Receive valuable industry insights and creative inspiration directly
            in your email.
          </p>
          <div className="flex items-center border-b border-border pb-2 mt-4">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-transparent outline-none flex-1 text-sm uppercase placeholder:text-muted"
            />
            <button className="text-fg hover:text-accent transition-colors">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="w-full text-center">
        <h2 className="text-[12vw] leading-none font-black tracking-tighter uppercase">
          we love web
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4 text-xs uppercase tracking-widest font-medium">
        <div className="flex gap-8">
          <a
            href="#"
            className="hover:text-accent transition-colors border-b border-transparent hover:border-accent"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:text-accent transition-colors border-b border-transparent hover:border-accent"
          >
            X
          </a>
        </div>
        <p className="text-muted">
          Copyright © {new Date().getFullYear()} Weloveweb Agency
        </p>
        <div className="flex gap-8">
          <a
            href="#"
            className="hover:text-accent transition-colors border-b border-transparent hover:border-accent"
          >
            YouTube
          </a>
          <a
            href="#"
            className="hover:text-accent transition-colors border-b border-transparent hover:border-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

