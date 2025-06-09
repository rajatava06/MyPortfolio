import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Social = () => {
  return (
    
    

    <RevealOnScroll>
       
      
    <div id="social"
      
       className="flex justify-center space-x-6 mt-8 pb-12 text-white text-2xl"
       >
      
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-400 transition"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/rajatava-das-8ba113317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-blue-400 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/rajatava06"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-gray-400 transition"
      >
        <FaGithub />
      </a>
    </div>
    </RevealOnScroll>
  );
};
