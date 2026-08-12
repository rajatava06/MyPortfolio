import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt, FaCodeBranch, FaCopy, FaCheck, FaSync } from "react-icons/fa";

export const Social = () => {
  const [chartLoading, setChartLoading] = useState(true);
  const [chartError, setChartError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [cacheBuster, setCacheBuster] = useState(() => Date.now());

  const handleEmailClick = (e, emailUrl) => {
    e.preventDefault();
    window.location.href = emailUrl;
  };

  const copyEmailToClipboard = (e, email) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleRefreshChart = () => {
    setChartLoading(true);
    setChartError(false);
    setCacheBuster(Date.now());
  };

  const socialLinks = [
    {
      name: "Email",
      handle: "rajatava2006@gmail.com",
      owner: "Rajatava Das",
      url: "mailto:rajatava2006@gmail.com",
      isMail: true,
      emailAddress: "rajatava2006@gmail.com",
      icon: FaEnvelope,
      iconColor: "group-hover:text-red-400",
      borderColor: "hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
      badgeBg: "bg-red-950/80 text-red-400 border-red-800/50",
      description: "Send me a message directly for collaborations or tech discussions.",
    },
    {
      name: "LinkedIn",
      handle: "Rajatava Das",
      owner: "Rajatava Das",
      url: "https://www.linkedin.com/in/rajatava-das-8ba113317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      isMail: false,
      icon: FaLinkedin,
      iconColor: "group-hover:text-blue-400",
      borderColor: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      badgeBg: "bg-blue-950/80 text-blue-400 border-blue-800/50",
      description: "Connect professionally, view my technical experience and credentials.",
    },
    {
      name: "Instagram",
      handle: "@rajatava06",
      owner: "Rajatava Das",
      url: "https://www.instagram.com/rajatava06?igsh=a3RkYWVuN2VpZ2t4",
      isMail: false,
      icon: FaInstagram,
      iconColor: "group-hover:text-pink-400",
      borderColor: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
      badgeBg: "bg-pink-950/80 text-pink-400 border-pink-800/50",
      description: "Follow my personal updates, tech interests, and creative activities.",
    },
  ];

  return (
    <section id="social" className="min-h-screen flex items-center justify-center py-20 relative">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Socials
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
              Explore my digital presence, connect with me across platforms, and inspect my live code activity.
            </p>
          </div>

          {/* Social Cards Grid - Centered 3 Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-4xl mx-auto justify-center">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.url}
                  target={item.isMail ? undefined : "_blank"}
                  rel={item.isMail ? undefined : "noopener noreferrer"}
                  onClick={item.isMail ? (e) => handleEmailClick(e, item.url) : undefined}
                  className={`group relative rounded-2xl p-7 md:p-8 bg-gradient-to-b from-gray-900/90 to-black/90 border border-white/10 
                    transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] ${item.borderColor} 
                    flex flex-col justify-between overflow-hidden shadow-xl min-h-[300px] cursor-pointer`}
                >
                  {/* Glass highlight effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Top Header: Icon + Hover Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <Icon className={`text-5xl md:text-6xl text-gray-200 transition-colors duration-300 ${item.iconColor}`} />
                      </div>

                      <div className="flex items-center space-x-2">
                        {item.isMail && (
                          <button
                            type="button"
                            title="Copy email address"
                            onClick={(e) => copyEmailToClipboard(e, item.emailAddress)}
                            className="p-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition text-xs flex items-center gap-1"
                          >
                            {copiedEmail ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                            <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                          </button>
                        )}
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold border ${item.badgeBg} transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105`}>
                          {item.name}
                        </span>
                      </div>
                    </div>

                    {/* Platform Title */}
                    <h3 className="text-2xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>

                    {/* Hover Interactive User Name Display */}
                    <div className="flex items-center space-x-1.5 text-sm font-semibold text-gray-300 mb-3">
                      <span className="text-gray-400 font-normal">By:</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400 group-hover:underline">
                        {item.owner}
                      </span>
                    </div>

                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Handle & CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 group-hover:text-gray-200">
                    <span className="font-mono text-gray-300 text-sm truncate max-w-[160px]" title={item.handle}>
                      {item.handle}
                    </span>
                    <span className="flex items-center space-x-1.5 text-blue-400 group-hover:translate-x-1 transition-transform font-semibold text-sm">
                      <span>{item.isMail ? "Send Mail" : "Visit"}</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* GitHub Contribution Section */}
          <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-b from-gray-900/90 via-gray-900/50 to-black/90 border border-white/10 hover:border-green-500/40 transition-all shadow-xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-gray-800/80 border border-gray-700 text-white text-2xl flex-shrink-0">
                  <FaGithub />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 flex-wrap">
                    GitHub
                    <span className="text-xs bg-green-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full border border-green-500/30 font-medium">
                      @rajatava06
                    </span>
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    Live commit &amp; activity calendar fetched from GitHub
                  </p>
                </div>
              </div>

              {/* Action Buttons: Perfectly Aligned on Mobile & PC */}
              <div className="flex items-center gap-2.5 sm:gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={handleRefreshChart}
                  title="Refresh Contribution Graph"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium 
                    border border-gray-700 bg-gray-800/80 text-gray-300 hover:text-white hover:border-gray-500 
                    transition duration-200"
                >
                  <FaSync className={chartLoading ? "animate-spin text-emerald-400" : ""} />
                  <span>Refresh</span>
                </button>

                <a
                  href="https://github.com/rajatava06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium 
                    border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500 
                    hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-200 whitespace-nowrap"
                >
                  <FaCodeBranch />
                  <span>View Profile</span>
                  <FaExternalLinkAlt className="text-[10px] sm:text-xs" />
                </a>
              </div>
            </div>

            {/* Contribution Heatmap Wrapper */}
            <div className="relative overflow-x-auto py-4 px-2 flex flex-col items-center justify-center min-h-[160px] bg-black/40 rounded-xl border border-white/5">
              {chartLoading && !chartError && (
                <div className="flex flex-col items-center justify-center py-8 text-gray-400 space-y-3">
                  <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm font-mono text-gray-400 animate-pulse">Loading GitHub Contribution Chart...</span>
                </div>
              )}

              <img
                key={cacheBuster}
                src={`https://ghchart.rshah.org/40c463/rajatava06?t=${cacheBuster}`}
                alt="Rajatava Das GitHub Contribution Chart"
                className={`max-w-full h-auto transition-opacity duration-500 ${chartLoading ? "opacity-0 absolute" : "opacity-100"
                  }`}
                onLoad={() => setChartLoading(false)}
                onError={() => {
                  setChartLoading(false);
                  setChartError(true);
                }}
              />

              {chartError && (
                <div className="text-center py-6 px-4">
                  <p className="text-gray-400 text-sm mb-3">
                    Unable to load contribution chart image directly. You can inspect my active repositories directly on GitHub!
                  </p>
                  <a
                    href="https://github.com/rajatava06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition"
                  >
                    Go to github.com/rajatava06
                  </a>
                </div>
              )}
            </div>

            {/* Sub-footer stats badges */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Developer • KIIT CSE</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 hover:text-gray-200 transition">
                  User: <strong className="text-gray-200">rajatava06</strong>
                </span>
                <span>•</span>
                <span className="text-gray-400 hover:text-gray-200 transition">
                  Developer: <strong className="text-gray-200">Rajatava Das</strong>
                </span>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-gray-500 text-center">
              💡 <em>Refresh for live fetch of GitHub commits.</em>
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
