import { useScrollAnimation } from '../../hooks/useAnimations';

function Services() {
  const services = [
    { icon: 'fa-code', title: 'Custom Software Development', description: 'Build scalable, secure, and high-performance custom software solutions tailored to your business requirements using cutting-edge technologies.' },
    { icon: 'fa-laptop', title: 'Web Application Development', description: 'Create responsive, user-friendly web applications with modern frameworks and best practices for optimal performance and user experience.' },
    { icon: 'fa-mobile-alt', title: 'Mobile App Development', description: 'Develop native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.' },
    { icon: 'fa-shield-alt', title: 'Cybersecurity Solutions', description: 'Protect your digital assets with comprehensive security services including penetration testing, threat assessment, and security infrastructure.' },
    { icon: 'fa-cloud', title: 'Cloud Computing Services', description: 'Migrate, deploy, and manage your applications on leading cloud platforms like AWS, Azure, and Google Cloud for scalability and reliability.' },
    { icon: 'fa-chart-line', title: 'Digital Marketing & SEO', description: 'Boost your online presence with data-driven digital marketing strategies, SEO optimization, and social media management services.' }
  ];

  const ServiceCard = ({ service, delay }) => {
    const ref = useScrollAnimation('animate__fadeIn', delay);
    return (
      <div ref={ref} className="services-item bg-white rounded-lg text-center py-8 px-6">
        <div className="services-content">
          <div className="services-content-icon">
            <i className={`fa ${service.icon} text-primary text-7xl mb-6 block`}></i>
            <h5 className="text-2xl font-bold mb-4">{service.title}</h5>
            <p className="text-gray-600 mb-6">{service.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-primary text-xl mb-4">Our IT Services</h5>
          <h1 className="text-4xl md:text-5xl font-bold">Comprehensive Technology Solutions for Your Business</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 200} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
