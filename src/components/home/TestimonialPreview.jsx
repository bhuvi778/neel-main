import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useAnimations';

function TestimonialPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useScrollAnimation('animate__fadeIn', 300);
  
  const testimonials = [
    {
      image: '/img/testimonial-1.jpg',
      name: 'Robert Anderson',
      profession: 'CEO, TechCorp Solutions',
      text: 'Neelbert Innotech transformed our legacy systems into a modern cloud-based infrastructure. Their expertise in AWS and DevOps helped us reduce costs by 40% while improving performance significantly.'
    },
    {
      image: '/img/testimonial-2.jpg',
      name: 'Jennifer Martinez',
      profession: 'CTO, FinanceHub Inc',
      text: 'The custom software solution developed by Neelbert Innotech exceeded our expectations. Their team delivered a secure, scalable application that handles millions of transactions daily with zero downtime.'
    },
    {
      image: '/img/testimonial-3.jpg',
      name: 'James Wilson',
      profession: 'Director of IT, HealthCare Plus',
      text: 'Outstanding cybersecurity implementation! Neelbert Innotech identified vulnerabilities we did not know existed and implemented robust security measures that give us peace of mind.'
    },
    {
      image: '/img/testimonial-4.jpg',
      name: 'Lisa Thompson',
      profession: 'VP of Operations, RetailMax',
      text: 'Their mobile app development team created an intuitive, feature-rich application that our customers love. The project was delivered on time and within budget with excellent communication throughout.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-primary text-xl mb-4">Client Testimonials</h5>
          <h1 className="text-4xl md:text-5xl font-bold">What Our Clients Say About Us</h1>
        </div>
        
        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className={`testimonial-item border rounded-lg p-8 transition-all duration-500 ${currentIndex !== null ? 'active' : ''}`}>
            <div className="flex items-start space-x-6 mb-6">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
              <div>
                <h4 className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].profession}</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-lg italic">"{testimonials[currentIndex].text}"</p>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-primary text-white rounded-full hover:bg-primary/80 transition"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-primary text-white rounded-full hover:bg-primary/80 transition"
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialPreview;
