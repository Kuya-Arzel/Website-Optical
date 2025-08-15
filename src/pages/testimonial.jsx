import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "../components/ui/card";
import testimonials from '../data/testimonial.json';

const TestimonialsPage = () => {


  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto swipe every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-6 md:px-12 bg-blue-50 min-h-72 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">What Our Patients Say</h2>
      <div className="max-w-6xl w-full">
        <Card className="hover:shadow-lg transition">
          <CardContent className="p-8 text-center flex flex-col items-center">
            <img src={testimonials[current].image} alt={testimonials[current].name} className="w-24 h-24 rounded-full object-cover mb-6" />
            <p className="italic text-gray-700 mb-6 text-lg">“{testimonials[current].feedback}”</p>
            <h4 className="font-semibold text-blue-900 text-xl">{testimonials[current].name}</h4>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestimonialsPage;
