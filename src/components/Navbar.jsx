import { useState, useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, activeSection, setActiveSection }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen || currentScrollY < 40) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Hide navbar when scrolling down
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Show navbar when scrolling up
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Get In Touch" },
    { id: "social", label: "Social" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 transition-all duration-300 ease-out bg-black/45 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.6)] ${
        menuOpen
          ? "rounded-2xl md:rounded-full px-5 py-4"
          : "rounded-2xl md:rounded-full px-5 py-2.5"
      } ${
        visible || menuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-28 opacity-0 pointer-events-none"
      }`}
    >
      {/* Header Bar */}
      <div className="flex justify-between items-center h-10 md:h-11 w-full px-1">
        <a
          href="#home"
          onClick={() => {
            if (menuOpen) setMenuOpen(false);
            if (setActiveSection) setActiveSection("home");
          }}
          className="font-mono text-xl font-bold text-white tracking-wide hover:opacity-80 transition-opacity"
        >
          rajatava<span className="text-cyan-500">.06</span>
        </a>

        {/* Mobile Hamburger / Close Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="w-8 h-8 relative cursor-pointer md:hidden text-white text-xl flex items-center justify-center transition-all hover:text-cyan-400 active:scale-95"
          aria-label="Toggle Navigation Menu"
        >
          <span
            className={`transform transition-transform duration-300 ${
              menuOpen ? "rotate-90 text-cyan-400" : "rotate-0"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection && setActiveSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 rounded-full px-4 py-1.5 ${
                  isActive
                    ? "text-cyan-400 font-semibold bg-cyan-500/15 border border-cyan-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Dynamic Island Mobile Expanded Options */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen
            ? "max-h-80 opacity-100 mt-3 pt-3 border-t border-white/15"
            : "max-h-0 opacity-0 mt-0 pt-0 border-t-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-1.5 py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  setMenuOpen(false);
                  if (setActiveSection) setActiveSection(item.id);
                }}
                className={`text-center py-2.5 px-4 rounded-xl text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-cyan-400 bg-cyan-500/15 border border-cyan-500/30"
                    : "text-gray-200 hover:text-white hover:bg-white/5 active:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
