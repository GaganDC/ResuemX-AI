"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, FileText, Zap, ArrowRight, User } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleAuthClick = () => {
    setIsSignedIn(!isSignedIn)
  }

  return (
    <header className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-lg opacity-50"
          animate={{
            rotate: [0, 180, 360],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-blue-300 rounded-full opacity-40"
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/50" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6">
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-800">AI Resume</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-4"
        >
          {isSignedIn ? (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <Button variant="outline" size="sm" onClick={handleAuthClick}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={handleAuthClick}>
                Sign Up
              </Button>
            </div>
          )}
        </motion.div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between px-6 py-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <span className="text-blue-600 font-semibold">AI-Powered</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Create Your
              <span className="block text-blue-600">Perfect Resume</span>
              <span className="block text-4xl md:text-5xl text-gray-700">Instantly</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            Transform your career with our AI-powered resume builder. Create professional, ATS-friendly resumes in
            minutes, not hours. Let artificial intelligence craft your perfect resume while you focus on landing your
            dream job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
            >
              See Examples
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-6"
          >
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">AI-Optimized</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">ATS-Friendly</span>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Images */}
        <div className="flex-1 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main Resume Image */}
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=600&width=400&text=AI+Resume+Template"
                alt="AI-generated resume template"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating AI Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-blue-100"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-700">AI Writing...</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-blue-600 text-white rounded-xl p-4 shadow-lg"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">98% Match</span>
              </div>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl transform rotate-6 scale-105 -z-10 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
