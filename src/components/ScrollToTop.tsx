'use client'

import { useEffect, useState } from 'react'
import { ChevronsUp } from 'lucide-react'
import '../sass/ScrollToTop.scss'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 0)
    }

    window.addEventListener('scroll', toggleVisibility)
    
    // Initial check
    toggleVisibility()

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ChevronsUp className="icon" />
    </button>
  )
}

