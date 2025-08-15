import React from 'react'

import { Button } from '../components/ui/button' 
const Contact = () => {
  return (
    <div>
       <section className="py-16 bg-white px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-3" />
            <input type="email" placeholder="Email" className="w-full border rounded-lg p-3" />
            <input type="text" placeholder="Phone Number" className="w-full border rounded-lg p-3" />
            <textarea placeholder="Your Message" rows="4" className="w-full border rounded-lg p-3" />
            <Button className="bg-blue-500 hover:bg-blue-600">Send Message</Button>
          </form>
        </div>
        <div>
        <iframe
      className="w-full h-80 rounded-lg shadow-lg"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4618.7443105328275!2d121.28157474744914!3d14.17946675307569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5e38aac19e15%3A0xf30db373f54791b9!2sManila%20S%20Rd%2C%20Bay%2C%20Laguna!5e1!3m2!1sen!2sph!4v1755265102384!5m2!1sen!2sph"
      loading="lazy"
      style={{ border: 0 }}
    ></iframe> </div>
      </section>
    </div>
  )
}

export default Contact
