import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-bg">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-8 md:px-16 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

