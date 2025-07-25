"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart, Target } from "lucide-react";

export default function Footer() {
 const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/GaganDC",
    label: "GitHub",
    target: "_blank", // ✅ correct syntax
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gagandeep-chinthakunta-3a7190326/",
    label: "LinkedIn",
    target: "_blank",
  },
];


  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Empty Section for symmetry */}
          <div></div>

          {/* Quick Links (optional, kept empty) */}
          <div></div>

          {/* Connect Section (removed from here) */}
        </div>

        {/* Bottom Section with social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-100"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <span>© 2024 Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by</span>
              <span className="font-semibold text-blue-600">C. Gagandeep</span>
            </div>

            {/* Moved Social Icons here */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
