import { useScrollAnimation } from '../../hooks/useAnimations';

function About() {
  const imageRef1 = useScrollAnimation('animate__fadeIn', 300);
  const textRef = useScrollAnimation('animate__fadeIn', 500);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef1} className="relative h-[500px]">
            <img
              src="/img/about-1.jpg"
              alt="About 1"
              className="absolute w-3/4 rounded-lg shadow-lg object-cover"
              style={{ height: '75%' }}
            />
            <img
              src="/img/about-2.jpg"
              alt="About 2"
              className="absolute w-3/4 rounded-lg shadow-lg object-cover"
              style={{ top: '25%', left: '25%', height: '75%' }}
            />
          </div>
          
          <div ref={textRef}>
            <h5 className="text-primary text-xl mb-4">About Neelbert Innotech</h5>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Leading IT Solutions Provider Driving Digital Innovation
            </h1>
            <p className="text-gray-600 mb-4">
              Neelbert Innotech Pvt. Ltd. is a premier technology consulting and software development company dedicated to helping businesses 
              transform through innovative IT solutions. With expertise in cloud computing, cybersecurity, custom software 
              development, and digital transformation, we deliver enterprise-grade solutions that drive growth and efficiency.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of certified professionals leverages cutting-edge technologies including AI/ML, blockchain, IoT, 
              and modern frameworks like React, Node.js, and Python to build scalable, secure, and high-performance 
              applications. We follow agile methodologies and industry best practices to ensure exceptional quality and 
              on-time delivery for every project.
            </p>
            <button className="btn-secondary">Discover Our Solutions</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
