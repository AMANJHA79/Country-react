import { EarthIcon, ArrowRightIcon } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Where in the{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                world?
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Discover countries from around the world. Explore cultures, geography, and fascinating facts about our diverse planet.
            </p>
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3" 
              onClick={() => navigate('/country')}
            
            >
              Start Exploring 
              <EarthIcon className="group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/image/world.png" 
                alt="World Map" 
                className="w-full max-w-lg h-auto drop-shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export { HeroSection };