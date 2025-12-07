function Services() {
  const services = [
    { icon: 'fa-code', title: 'Custom Software Development', description: 'Build scalable, secure, and high-performance custom software solutions tailored to your business requirements using cutting-edge technologies and industry best practices.' },
    { icon: 'fa-laptop', title: 'Web Application Development', description: 'Create responsive, user-friendly web applications with modern frameworks like React, Angular, and Vue.js for optimal performance and exceptional user experience.' },
    { icon: 'fa-mobile-alt', title: 'Mobile App Development', description: 'Develop native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift that engage users and drive business growth.' },
    { icon: 'fa-shield-alt', title: 'Cybersecurity Solutions', description: 'Protect your digital assets with comprehensive security services including penetration testing, vulnerability assessment, threat monitoring, and security infrastructure design.' },
    { icon: 'fa-cloud', title: 'Cloud Computing Services', description: 'Migrate, deploy, and manage your applications on leading cloud platforms like AWS, Azure, and Google Cloud for enhanced scalability, reliability, and cost optimization.' },
    { icon: 'fa-chart-line', title: 'Digital Marketing & SEO', description: 'Boost your online presence with data-driven digital marketing strategies, search engine optimization, social media management, and content marketing services.' }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-white/80 text-lg">Professional IT solutions for your business</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h5 className="text-primary text-xl mb-4">Our Services</h5>
            <h1 className="text-4xl md:text-5xl font-bold">Services Built Specifically For Your Business</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition duration-300">
                <i className={`fa ${service.icon} text-primary text-7xl mb-6`}></i>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="btn-secondary text-sm">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
