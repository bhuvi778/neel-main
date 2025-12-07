import { useState, useEffect } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const slides = [
    {
      image: '/img/carousel-1.jpg',
      subtitle: 'Enterprise IT Solutions',
      title: 'Transform Your Business with Cutting-Edge Technology',
      description: 'Neelbert Innotech delivers innovative IT solutions including cloud computing, cybersecurity, software development, and digital transformation services to help your business thrive in the digital age.'
    },
    {
      image: '/img/carousel-2.jpg',
      subtitle: 'Digital Innovation Partner',
      title: 'Custom Software Development & IT Consulting',
      description: 'From web applications to mobile solutions, our expert team provides end-to-end IT services tailored to your unique business needs and goals.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimationKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 flex items-center">
            <div className="container mx-auto px-4">
              {index === currentSlide && (
                <div key={animationKey} className="max-w-3xl text-white bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <h6 className="text-secondary text-2xl mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: '0.1s' }}>
                    {slide.subtitle}
                  </h6>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 animate__animated animate__fadeInRight" style={{ animationDelay: '0.3s', WebkitTextFillColor: 'white' }}>
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 animate__animated animate__fadeInDown" style={{ animationDelay: '0.5s' }}>
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary animate__animated animate__fadeInLeft" style={{ animationDelay: '0.7s' }}>
                      Read More
                    </button>
                    <button className="btn-secondary animate__animated animate__fadeInRight" style={{ animationDelay: '0.9s' }}>
                      Contact Us
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrentSlide(index); setAnimationKey(prev => prev + 1); }}
            className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-8' : 'bg-white/50 w-3'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => {
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          setAnimationKey(prev => prev + 1);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full z-10 transition"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          setAnimationKey(prev => prev + 1);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full z-10 transition"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Hero;
