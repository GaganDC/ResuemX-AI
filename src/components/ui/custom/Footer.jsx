"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@gagandeep.com", label: "Email" },
  ]

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Resume Builder</h3>
              <p className="text-gray-600 max-w-md">
                Empowering professionals worldwide with AI-powered resume creation. Build your future, one perfect
                resume at a time.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Connect */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
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
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
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

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
