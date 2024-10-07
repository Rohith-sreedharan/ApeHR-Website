'use client'

import { useState, useEffect, FC } from 'react'
import { CircleArrowLeft } from 'lucide-react'

type CountdownProps = {
  setDisplayCountdown: (value: boolean) => void
}

const Countdown: FC<CountdownProps> = ({ setDisplayCountdown }) => {
  const [timeLeft, setTimeLeft] = useState<string>('00:00:00:00')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const getTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let targetDate = new Date(currentYear, 9, 31) // Month is 0-indexed, so 9 is October

      // If Halloween has already passed this year, set for next year
      if (targetDate < now) {
        targetDate.setFullYear(currentYear + 1)
      }

      const difference = targetDate.getTime() - now.getTime()

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    const updateCountdown = () => {
      setTimeLeft(getTimeLeft())
    }

    // Update immediately and then every second
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className='absolute top-0 left-1/2 flex flex-col h-screen items-center justify-center'>
    <div className="fixed pt-16 flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 p-8 rounded-lg shadow-2xl" style={{ zIndex: 999 }}>
      <button
        onClick={() => setDisplayCountdown(false)}
        className="absolute top-2 left-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
      >
        <CircleArrowLeft size={24} />
      </button>
      <h1 className="text-4xl mb-8 font-bold">Countdown to Product launch</h1>
      <div className="text-7xl font-mono tracking-wider" aria-live="polite">
        {timeLeft.split(':').map((unit, index) => (
          <span key={index} className="inline-block mx-1 w-32 p-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded">
            {unit}
          </span>
        ))}
      </div>
      <div className="mt-8 text-xl font-light tracking-wide mb-8">
        <span className="mx-8">Days</span>
        <span className="mx-8">Hours</span>
        <span className="mx-8">Minutes</span>
        <span className="mx-8">Seconds</span>
      </div>
    </div>
    </div>
  )
}

export default Countdown