import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-gray-400 text-sm">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} <span className="text-gray-200 font-semibold">rajatava06</span>
        </p>
        <p className="text-xs text-gray-400">
          Built with React &amp; TailwindCSS
        </p>
      </div>
    </footer>
  );
};
