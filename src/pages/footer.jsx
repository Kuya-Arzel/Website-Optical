import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const section = document.getElementById(id)
      if (section) {
        const header = document.querySelector('header')
        const headerHeight = header ? header.offsetHeight : 0
        const elementPosition = section.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'aboutus' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <h4 className="text-2xl font-bold mb-4">VisionCare</h4>
          <p className="text-sm md:text-base">Providing trusted eye care for over 10 years.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-blue-300 transition-colors"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact</h4>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
            <MapPin size={16} /> 123 Main St, City
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
            <Phone size={16} /> (02) 1234-5678
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
            <Mail size={16} /> info@visioncare.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-blue-700 pt-4 flex flex-col md:flex-row md:justify-between text-sm">
        <p className="text-center md:text-right mt-2 md:mt-0">Website by: RoyalCode</p>
        <p className="text-center md:text-left">&copy; 2025 VisionCare Optical Clinic. All rights reserved.</p>
        
      </div>
    </footer>
  )
}

export default Footer
