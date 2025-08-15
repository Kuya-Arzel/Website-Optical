import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <section className="py-16 px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
              <img src="/images/clinic/clinic.jpg" alt="Clinic" className="rounded-2xl shadow-lg" />
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">About Us</h3>
                <p className="mb-4">At VisionCare Optical Clinic, we are committed to providing exceptional eye care services using modern equipment and highly skilled optometrists.</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Over 10 years of trusted service</li>
                  <li>Licensed professionals</li>
                  <li>Modern, state-of-the-art equipment</li>
                </ul>
              </div>
            </section>
    </div>
  )
}

export default Aboutus
