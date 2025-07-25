import React from "react"
import { motion } from "framer-motion"
import { Sparkles, FileText, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/ui/custom/Header"
import { Link } from "react-router"
import { useUser } from "@clerk/clerk-react"
function Home() {
  
const {isSignedIn} = useUser();
  return (
    <div>
      <Header/>
    <header className="relative h-full bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-lg opacity-50"
          animate={{ rotate: [0, 180, 360], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-blue-300 rounded-full opacity-40"
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/50" />
      </div>
      {/* Main Section */}
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
            minutes, not hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
              <Link to={isSignedIn ? "/dashboard" : "/auth/sign-in"}>
      <Button
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
      >
        Start Building Now
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </Link>
          </motion.div>
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
        {/* Right Content */}
        <div className="flex-1 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-1">
              <img
                src="Ai-pic.png"
                alt="AI-generated resume template"
                className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-blue-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-700">AI Writing...</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-blue-600 text-white rounded-xl p-4 shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">98% Match</span>
              </div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl transform rotate-6 scale-105 -z-10 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Home
