import React from 'react'
import { Card, CardContent } from "../components/ui/card"

const Services = () => {
  const services = [
    { name: "Eye Check-Up", img: "/images/services/eye-check.png" },
    { name: "Prescription Glasses", img: "/images/services/prescription.jpg" },
    { name: "Contact Lens Fitting", img: "/images/services/contact-lens.jpg" },
    { name: "Eye Disease Screening", img: "/images/services/eye-disease.jpg" },
  ];

  return (
    <div>
      <section className="py-16 bg-blue-50 px-6 md:px-12">
        <h3 className="text-3xl font-bold text-center text-blue-900 mb-10">Our Services</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                
                <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <img 
                    src={service.img} 
                    alt={`${service.name} icon`} 
                    className="w-8 h-8" 
                  />
                </div>
                <h4 className="font-semibold text-lg text-blue-900">{service.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
