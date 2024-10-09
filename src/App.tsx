import React, { useState, useEffect } from 'react'
import { Skull, Star, Droplet } from 'lucide-react'

function App() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const countdownDate = new Date("2024-10-31").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })

      if (distance < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center text-green-400 overflow-hidden">
      <div className="max-w-4xl w-full relative">
        <h1 className="title text-6xl md:text-8xl mb-8 glow font-extrabold relative z-10">SpaceSnot</h1>
        <p className="text-xl md:text-2xl mb-12 text-yellow-300 relative z-10">The universe is about to get messy...</p>

        <div className="slime-container">
          <div className="slime p-8 rounded-lg mb-12 bg-green-900 bg-opacity-50 relative z-10">
            <h2 className="text-3xl mb-4 font-bold">Coming Soon</h2>
            <div className="flex justify-center space-x-4 text-xl">
              <div>
                <span className="block text-4xl font-bold">{countdown.days}</span>
                <span>Days</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">{countdown.hours}</span>
                <span>Hours</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">{countdown.minutes}</span>
                <span>Minutes</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">{countdown.seconds}</span>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-8 mb-12 relative z-10">
          <Skull size={48} className="text-red-500" />
          <Star size={48} className="text-yellow-500" />
          <Droplet size={48} className="text-blue-500" />
        </div>

        <p className="text-lg mb-8 text-gray-300 relative z-10">
          Prepare yourself for a slimy adventure across snot-covered planets!
        </p>

        <div className="flex justify-center space-x-4 relative z-10">
          <a href="#" className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300">
            Subscribe for Updates
          </a>
          <a href="#" className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded transition duration-300">
            Watch Teaser
          </a>
        </div>
      </div>
      
      {[...Array(10)].map((_, index) => (
        <div key={index} className={`slime-drip slime-drip-${index + 1}`}></div>
      ))}
    </div>
  )
}

export default App