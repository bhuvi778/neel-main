import { useState } from 'react';

function Testimonial() {
  const testimonials = [
    {
      image: '/img/testimonial-1.jpg',
      name: 'Robert Anderson',
      profession: 'CEO, TechCorp Solutions',
      text: 'Neelbert Innotech transformed our legacy systems into a modern cloud-based infrastructure. Their expertise in AWS and DevOps helped us reduce operational costs by 40% while significantly improving performance and scalability.'
    },
    {
      image: '/img/testimonial-2.jpg',
      name: 'Jennifer Martinez',
      profession: 'CTO, FinanceHub Inc',
      text: 'The custom software solution developed by Neelbert Innotech exceeded all our expectations. Their team delivered a secure, scalable application that handles millions of transactions daily with zero downtime. Exceptional work!'
    },
    {
      image: '/img/testimonial-3.jpg',
      name: 'James Wilson',
      profession: 'Director of IT, HealthCare Plus',
      text: 'Outstanding cybersecurity implementation! Neelbert Innotech identified critical vulnerabilities we were unaware of and implemented robust security measures that give us complete peace of mind. Highly professional team.'
    },
    {
      image: '/img/testimonial-4.jpg',
      name: 'Lisa Thompson',
      profession: 'VP of Operations, RetailMax',
      text: 'Their mobile app development team created an intuitive, feature-rich application that our customers absolutely love. The project was delivered on time and within budget with excellent communication throughout the entire process.'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Testimonials</h1>
          <p className="text-white/80 text-lg">What our clients say about us</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h5 className="text-primary text-xl mb-4">Our Testimonial</h5>
            <h1 className="text-4xl md:text-5xl font-bold">Our Client Saying!</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border rounded-lg p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-6 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.profession}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-yellow-400"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-lg italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
