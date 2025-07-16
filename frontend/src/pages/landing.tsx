import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  Bell, 
  Globe, 
  TrendingUp,
  BarChart3,
  Palette,
  Monitor,
  Check,
  Shield,
  Users,
  ChevronUp,
  Plus,
  Minus
} from 'lucide-react';

const Landing: React.FC = () => {
  const [expandedFeature, setExpandedFeature] = useState<string | null>('interview-reminders');

  const toggleFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-slate-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">Abezo</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center">
                Home <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link to="/jobs" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Find Jobs <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link to="/employers" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Employers <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link to="/candidates" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Candidates <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link to="/blog" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Blog <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link to="/pages" className="text-gray-300 hover:text-white transition-colors flex items-center">
                Pages <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-slate-700 rounded-full transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  1
                </span>
              </button>
              <Link to="/login" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                Login
              </Link>
              <Link to="/register" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 opacity-20">
            <Globe className="h-16 w-16 text-blue-400" />
          </div>
          <div className="absolute top-32 right-20 opacity-20">
            <TrendingUp className="h-12 w-12 text-purple-400" />
          </div>
          <div className="absolute bottom-40 left-20 opacity-20">
            <BarChart3 className="h-20 w-20 text-green-400" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20">
            <Monitor className="h-14 w-14 text-indigo-400" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Unlock Your Future: Find Your{' '}
              <span className="text-slate-700">Perfect Job</span>{' '}
              <span className="text-slate-800">Today!</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Welcome to Abezo, where your dream job awaits! Browse thousands of job listings.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Job Categories */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Job Categories</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none">
                    <option>Design</option>
                    <option>Development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Location</label>
                <div className="relative">
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none">
                    <option>Manitoba, Canada</option>
                    <option>Toronto, Canada</option>
                    <option>Vancouver, Canada</option>
                    <option>Calgary, Canada</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Keywords */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Keywords or Titles</label>
                <input
                  type="text"
                  placeholder="UI/UX Designer"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Search Job</span>
                </button>
              </div>
            </div>
          </div>

          {/* Popular Categories */}
          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-gray-700 font-medium">Popular:</span>
              <div className="flex flex-wrap gap-3">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full transition-colors flex items-center space-x-2">
                  <Palette className="h-4 w-4" />
                  <span>Graphic Design</span>
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full transition-colors">
                  Video Editing
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full transition-colors">
                  Web Development
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full transition-colors">
                  Data Science
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Job Categories Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                Popular Job Categories
              </h2>
              <p className="text-gray-600">
                Recruitment made easy in just 1 Min!
              </p>
            </div>
            <Link 
              to="/categories" 
              className="text-emerald-500 hover:text-emerald-600 font-medium flex items-center space-x-2 transition-colors"
            >
              <span>View All Categories</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {/* Design Category */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Design</h3>
                <p className="text-gray-500 text-sm">241+ Jobs</p>
              </div>
            </div>

            {/* Development Category */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Development</h3>
                <p className="text-gray-500 text-sm">1K+ Jobs</p>
              </div>
            </div>

            {/* Marketing Category */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Marketing</h3>
                <p className="text-gray-500 text-sm">124+ Jobs</p>
              </div>
            </div>

            {/* Editing Category */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Editing</h3>
                <p className="text-gray-500 text-sm">24+ Jobs</p>
              </div>
            </div>

            {/* Business Category */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">Business</h3>
                <p className="text-gray-500 text-sm">1.2K+ Jobs</p>
              </div>
            </div>

            {/* IT Category */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200 group">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-1">IT</h3>
                <p className="text-gray-500 text-sm">1.3K+ Jobs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Choose Your Dream Job Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Images and Stats */}
            <div className="relative">
              {/* Main central image */}
              <div className="relative z-10 mx-auto w-80 h-96">
                <div className="w-full h-full bg-yellow-400 rounded-3xl overflow-hidden">
                  <img 
                    src="/api/placeholder/320/384" 
                    alt="Happy professional" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Top left image */}
              <div className="absolute -top-4 -left-8 w-32 h-32 bg-purple-200 rounded-3xl overflow-hidden z-20">
                <img 
                  src="/api/placeholder/128/128" 
                  alt="Professional 1" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom left image */}
              <div className="absolute bottom-16 -left-4 w-28 h-28 bg-teal-200 rounded-3xl overflow-hidden z-20">
                <img 
                  src="/api/placeholder/112/112" 
                  alt="Professional 2" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating card */}
              <div className="absolute top-8 -right-4 bg-white rounded-2xl p-4 shadow-lg z-20 min-w-[180px]">
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-lg font-bold text-slate-800">4.9</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">Average Ratings</p>
              </div>

              {/* People found jobs card */}
              <div className="absolute bottom-4 -right-8 bg-white rounded-2xl p-4 shadow-lg z-20 min-w-[200px]">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white overflow-hidden">
                        <img 
                          src={`/api/placeholder/32/32`} 
                          alt={`Person ${i + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">5K+ people found</p>
                    <p className="text-xs text-gray-600">their jobs</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-4 opacity-20">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              {/* Decorative element */}
              <div className="flex items-center space-x-2 text-gray-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                Choose Your Dream Job{' '}
                <br />
                From Over{' '}
                <span className="text-slate-700">50,000+</span>{' '}
                <span className="text-slate-800">Jobs</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                We understand the importance of finding the right job. That's why we've 
                created a platform where job seekers can explore a wide range of opportunities 
                tailored to their skills.
              </p>

              {/* Features list */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-slate-700 font-medium">Seamless job searching</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-slate-700 font-medium">Get top 3% experts for your project</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-slate-700 font-medium">Trustworthy payment gateway</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Search Job Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Should You Join Abezo Platform Section */}
        <div className="bg-slate-800 text-white py-16 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 opacity-10">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-20 left-20 opacity-10">
              <div className="w-32 h-32 border-4 border-white rounded-full"></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Why Should You Join{' '}
                    <br />
                    <span className="text-white">Abezo Platform</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We understand the importance of finding the right job. That's why we've 
                    created a platform where job seekers can explore a wide range of 
                    opportunities tailored to their skills.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {/* Interview Reminders */}
                  <div className="border-b border-gray-700 pb-4">
                    <button
                      onClick={() => toggleFeature('interview-reminders')}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-lg font-medium text-white group-hover:text-orange-300 transition-colors">
                          Interview Reminders
                        </span>
                      </div>
                      {expandedFeature === 'interview-reminders' ? (
                        <Minus className="w-5 h-5 text-orange-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-orange-500" />
                      )}
                    </button>
                    {expandedFeature === 'interview-reminders' && (
                      <div className="mt-4 pl-8">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Voice bot directly calls the candidate on their mobile phone and 
                          reminds them of pending interview.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Remote Interviews */}
                  <div className="border-b border-gray-700 pb-4">
                    <button
                      onClick={() => toggleFeature('remote-interviews')}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-lg font-medium text-white group-hover:text-orange-300 transition-colors">
                          Remote Interviews with Lip Sync Detection
                        </span>
                      </div>
                      {expandedFeature === 'remote-interviews' ? (
                        <Minus className="w-5 h-5 text-orange-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-orange-500" />
                      )}
                    </button>
                    {expandedFeature === 'remote-interviews' && (
                      <div className="mt-4 pl-8">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Conduct secure remote interviews with advanced lip sync detection 
                          technology to ensure authenticity and prevent fraud.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* University Hiring */}
                  <div className="border-b border-gray-700 pb-4">
                    <button
                      onClick={() => toggleFeature('university-hiring')}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-lg font-medium text-white group-hover:text-orange-300 transition-colors">
                          Fresher & University Hiring
                        </span>
                      </div>
                      {expandedFeature === 'university-hiring' ? (
                        <Minus className="w-5 h-5 text-orange-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-orange-500" />
                      )}
                    </button>
                    {expandedFeature === 'university-hiring' && (
                      <div className="mt-4 pl-8">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Specialized recruitment programs for fresh graduates and university 
                          students with tailored screening and assessment processes.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Join Abezo Now
                  </button>
                </div>
              </div>

              {/* Right side - Images and Stats */}
              <div className="relative">
                {/* Safe & Secure Badge */}
                <div className="absolute top-4 right-8 bg-lime-400 text-slate-800 px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-2 z-30">
                  <Shield className="w-4 h-4" />
                  <span>Safe & Secure</span>
                </div>

                {/* Main person image (top right) */}
                <div className="absolute top-0 right-0 w-64 h-80 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-purple-300 flex items-center justify-center">
                    <div className="text-purple-600 text-6xl">👨‍💻</div>
                  </div>
                </div>

                {/* Main person image (bottom left) */}
                <div className="relative z-10 mt-32 ml-8 w-80 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-blue-300 flex items-center justify-center">
                    <div className="text-blue-600 text-6xl">👨‍💼</div>
                  </div>
                </div>

                {/* 1M+ Candidates Card */}
                <div className="absolute bottom-8 right-4 bg-white rounded-2xl p-4 shadow-lg z-20 min-w-[220px]">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {['👨', '👩', '👦', '👧'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-800">1M+</p>
                      <p className="text-sm text-gray-600">Candidates</p>
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-1/2 left-4 opacity-30">
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* The Ultimate Job Portal Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Content */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                The Ultimate <span className="text-slate-900">Job Portal</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Signup now and start finding your job or talents.
              </p>
            </div>

            {/* Right side - Buttons */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Looking For A Job
                </button>
                <button className="bg-white hover:bg-gray-50 text-orange-500 border-2 border-orange-500 font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Post A Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Social */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-slate-800">Abezo</span>
              </div>
              
              {/* Decorative dots */}
              <div className="flex space-x-2 mb-8">
                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/browse-jobs" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/companies" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link to="/candidates" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Candidates
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-slate-800 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-600 hover:text-slate-800 transition-colors">
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Support</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-600 hover:text-slate-800 transition-colors">
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Subscribe</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Subscribe Now
                </button>
                <p className="text-sm text-gray-500">
                  We only send interesting and relevant emails.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-300 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-600 mb-4 md:mb-0">
                © <span className="font-semibold text-slate-800">Abezo</span> is Proudly Owned by{' '}
                <Link to="#" className="font-semibold text-slate-800 hover:text-emerald-500 transition-colors">
                  EnvyTheme
                </Link>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-400 hover:text-slate-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-slate-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
                  </svg>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-slate-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;