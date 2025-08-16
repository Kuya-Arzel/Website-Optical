import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'
import { Button } from '../components/ui/button'


const Navigator = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hideTopBar, setHideTopBar] = useState(false)
  const headerRef = useRef(null)

  // Hide top bar after scroll
  useEffect(() => {
  let lastScrollY = window.scrollY
  let ticking = false

  const updateScroll = () => {
    if (window.scrollY > 80 && !hideTopBar) {
      setHideTopBar(true)
    } else if (window.scrollY < 40 && hideTopBar) {
      setHideTopBar(false)
    }
    ticking = false
  }

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll)
      ticking = true
    }
    lastScrollY = window.scrollY
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [hideTopBar])


  // Smooth scroll with offset
  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const section = document.getElementById(id)
      if (section && headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight
        const elementPosition = section.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
    setMenuOpen(false) // close mobile menu
  }

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'aboutus' },
    { name: 'Services', id: 'services' },
    { name: 'Our Doctors', id: 'doctors' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
    {/* Top Contact Bar */}
<div
  className={`bg-blue-900 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 transition-all duration-500 overflow-hidden ${
    hideTopBar ? 'max-h-0 opacity-0' : 'max-h-24 opacity-100 py-2 sm:py-2'
  }`}
>
  {/* Contact Info */}
  <div className="flex flex-col sm:flex-row sm:gap-4 gap-1 flex-wrap justify-center sm:justify-start text-center sm:text-left">
    <span className="flex items-center gap-1">
      <Phone size={14} /> (02) 1234-5678
    </span>
    <span className="flex items-center gap-1">
      <Mail size={14} /> info@visioncare.com
    </span>
  </div>

  {/* Appointment Button */}
  <Button className="w-full sm:w-auto mt-2 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 sm:px-6 sm:py-2">
    Book Appointment
  </Button>
</div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm flex justify-between items-center px-6 py-4 border-b border-gray-200">
   <h1
  className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 cursor-pointer"
  onClick={() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false) // close mobile menu if open
  }}
>
  VisionCare
</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-6 font-medium text-sm lg:text-base text-blue-900">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 font-medium bg-white text-blue-900">
          {navLinks.map((link) => (
            <p
              key={link.id}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </p>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navigator
