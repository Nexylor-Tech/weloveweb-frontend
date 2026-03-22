import React from 'react';

export default function PageBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      {/* Vertical left line */}
      <div className="fixed left-4 lg:left-16 top-0 bottom-0 w-[1px] bg-black z-40 pointer-events-none" />

      {/* Vertical right line */}
      <div className="fixed right-4 lg:right-16 top-0 bottom-0 w-[1px] bg-black z-40 pointer-events-none" />

      {/* Horizontal line below navbar */}
      <div className="fixed top-24 left-0 right-0 h-[1px] bg-black z-40 pointer-events-none" />

      {/* Content wrapper with padding to stay inside the lines */}
      <div className="flex-1 flex flex-col z-10 px-4 lg:px-16">
        <div className="flex-1 flex flex-col relative">
          {children}
        </div>
      </div>
    </div>
  );
}

