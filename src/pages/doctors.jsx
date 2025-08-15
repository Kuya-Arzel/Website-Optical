import React from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from "../components/ui/card"

const Doctors = () => {
  const doctors = [
    { name: "Dr. Joan Doe", specialty: "Optometrist", img: "/images/doctors/doctor1.jpg" },
    { name: "Dr. Jane Smith", specialty: "Ophthalmologist", img: "/images/doctors/doctor2.jpg" },
    { name: "Dr. Michael Lee", specialty: "Pediatric Optometrist", img: "/images/doctors/doctor3.jpg" },
  ];

  return (
    <div>
      <section className="py-16 px-6 md:px-12">
        <h3 className="text-3xl font-bold text-center text-blue-900 mb-10">Our Doctors</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <Card key={i} className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-semibold text-lg text-blue-900">{doc.name}</h4>
                <p className="text-gray-600 text-sm">{doc.specialty}</p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Doctors
