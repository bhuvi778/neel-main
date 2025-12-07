function Projects() {
  const projects = [
    {
      image: '/img/project-1.jpg',
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Web Development',
      description: 'Built a scalable e-commerce platform with React, Node.js, and MongoDB. Features include real-time inventory management, secure payment integration, and responsive design.'
    },
    {
      image: '/img/project-2.jpg',
      title: 'Enterprise Security Suite',
      subtitle: 'Cybersecurity Implementation',
      description: 'Implemented comprehensive security solutions including penetration testing, threat detection, firewall configuration, and employee security training programs.'
    },
    {
      image: '/img/project-3.jpg',
      title: 'Mobile Banking App',
      subtitle: 'iOS & Android Development',
      description: 'Developed a secure mobile banking application with biometric authentication, real-time transactions, and seamless user experience across iOS and Android platforms.'
    },
    {
      image: '/img/project-4.jpg',
      title: 'Cloud Migration Project',
      subtitle: 'AWS Infrastructure Setup',
      description: 'Successfully migrated enterprise infrastructure to AWS cloud, implementing auto-scaling, load balancing, and disaster recovery solutions for improved reliability.'
    },
    {
      image: '/img/project-5.jpg',
      title: 'AI Analytics Dashboard',
      subtitle: 'Machine Learning Integration',
      description: 'Created an AI-powered analytics dashboard with predictive modeling, data visualization, and automated reporting using Python, TensorFlow, and React.'
    },
    {
      image: '/img/project-6.jpg',
      title: 'ERP System Development',
      subtitle: 'Custom Enterprise Solution',
      description: 'Designed and developed a custom ERP system integrating inventory, HR, finance, and CRM modules with role-based access control and advanced reporting.'
    },
    {
      image: '/img/project-1.jpg',
      title: 'CRM Platform',
      subtitle: 'Customer Relationship Management',
      description: 'Built a comprehensive CRM system with lead management, sales pipeline tracking, email integration, automated workflows, and detailed analytics for improved customer engagement.'
    },
    {
      image: '/img/project-2.jpg',
      title: 'HRMS Solution',
      subtitle: 'Human Resource Management System',
      description: 'Developed a complete HRMS with employee onboarding, attendance tracking, payroll processing, performance reviews, leave management, and self-service portal.'
    },
    {
      image: '/img/project-3.jpg',
      title: 'Corporate Website',
      subtitle: 'Static Website Development',
      description: 'Created a modern, responsive corporate website with HTML5, CSS3, and JavaScript. Features include smooth animations, contact forms, and optimized performance for fast loading.'
    },
    {
      image: '/img/project-4.jpg',
      title: 'News Portal',
      subtitle: 'Dynamic Website Development',
      description: 'Built a dynamic news portal with WordPress/PHP backend, content management system, user authentication, commenting system, and real-time content updates.'
    },
    {
      image: '/img/project-5.jpg',
      title: 'Food Delivery App',
      subtitle: 'React Native Mobile App',
      description: 'Developed a cross-platform food delivery application with real-time order tracking, payment gateway integration, push notifications, and restaurant management dashboard.'
    },
    {
      image: '/img/project-6.jpg',
      title: 'Fitness Tracker iOS App',
      subtitle: 'Native iOS Development',
      description: 'Created a native iOS fitness tracking app using Swift with HealthKit integration, workout planning, calorie tracking, progress charts, and Apple Watch compatibility.'
    },
    {
      image: '/img/project-1.jpg',
      title: 'Social Media Platform',
      subtitle: 'Full-Stack Web Application',
      description: 'Built a social networking platform with user profiles, real-time messaging, post sharing, media uploads, notifications, and advanced privacy controls using MERN stack.'
    },
    {
      image: '/img/project-2.jpg',
      title: 'Inventory Management System',
      subtitle: 'Enterprise Software Development',
      description: 'Developed a robust inventory management system with barcode scanning, stock alerts, supplier management, purchase orders, and comprehensive reporting features.'
    },
    {
      image: '/img/project-3.jpg',
      title: 'Educational LMS',
      subtitle: 'Learning Management System',
      description: 'Created a feature-rich learning management system with course creation, video streaming, quizzes, assignments, progress tracking, and certification management.'
    },
    {
      image: '/img/project-4.jpg',
      title: 'Healthcare Management System',
      subtitle: 'Medical Software Development',
      description: 'Built a comprehensive healthcare platform with patient records, appointment scheduling, prescription management, billing integration, and HIPAA-compliant data security.'
    },
    {
      image: '/img/project-5.jpg',
      title: 'Real Estate Portal',
      subtitle: 'Property Management Platform',
      description: 'Developed a full-featured real estate portal with advanced search filters, virtual tours, agent dashboard, property listings, and integrated CRM for lead management.'
    },
    {
      image: '/img/project-6.jpg',
      title: 'Logistics Tracking System',
      subtitle: 'Supply Chain Optimization',
      description: 'Built a real-time logistics tracking system with GPS integration, route optimization, delivery scheduling, fleet management, and comprehensive analytics dashboard.'
    },
    {
      image: '/img/project-1.jpg',
      title: 'E-Learning Mobile App',
      subtitle: 'Android Application Development',
      description: 'Developed a native Android e-learning app with offline content access, interactive quizzes, video lectures, progress tracking, and gamification features using Kotlin.'
    },
    {
      image: '/img/project-2.jpg',
      title: 'Restaurant POS System',
      subtitle: 'Point of Sale Software',
      description: 'Created a comprehensive restaurant POS system with order management, kitchen display integration, inventory tracking, table management, and sales analytics.'
    },
    {
      image: '/img/project-3.jpg',
      title: 'Travel Booking Platform',
      subtitle: 'Dynamic Web Application',
      description: 'Built a travel booking platform with flight/hotel search, payment processing, booking management, user reviews, and integration with multiple travel APIs.'
    },
    {
      image: '/img/project-4.jpg',
      title: 'Portfolio Website',
      subtitle: 'Static Website with CMS',
      description: 'Designed a modern portfolio website with HTML, CSS, JavaScript, and headless CMS integration for easy content updates, SEO optimization, and responsive design.'
    },
    {
      image: '/img/project-5.jpg',
      title: 'Task Management App',
      subtitle: 'iOS & Android App',
      description: 'Developed a cross-platform task management application with project boards, team collaboration, deadline tracking, file attachments, and real-time synchronization.'
    },
    {
      image: '/img/project-6.jpg',
      title: 'Video Streaming Platform',
      subtitle: 'Full-Stack Development',
      description: 'Created a video streaming platform with content upload, transcoding, adaptive bitrate streaming, user subscriptions, and content recommendation engine.'
    },
    {
      image: '/img/project-1.jpg',
      title: 'Accounting Software',
      subtitle: 'Financial Management System',
      description: 'Built comprehensive accounting software with invoicing, expense tracking, financial reporting, tax calculations, multi-currency support, and bank reconciliation.'
    },
    {
      image: '/img/project-2.jpg',
      title: 'Chat Application',
      subtitle: 'Real-Time Messaging App',
      description: 'Developed a real-time chat application with end-to-end encryption, group chats, media sharing, voice/video calls, and cross-platform support using WebRTC.'
    },
    {
      image: '/img/project-3.jpg',
      title: 'Appointment Booking System',
      subtitle: 'Web & Mobile Application',
      description: 'Created an appointment booking system with calendar integration, automated reminders, payment processing, staff management, and customer feedback collection.'
    },
    {
      image: '/img/project-4.jpg',
      title: 'Blog Platform',
      subtitle: 'Dynamic Content Management',
      description: 'Built a modern blog platform with rich text editor, SEO optimization, social sharing, comment moderation, analytics integration, and multi-author support.'
    },
    {
      image: '/img/project-5.jpg',
      title: 'Gym Management App',
      subtitle: 'Mobile Application Development',
      description: 'Developed a gym management mobile app with membership tracking, workout plans, class scheduling, payment processing, and progress monitoring features.'
    },
    {
      image: '/img/project-6.jpg',
      title: 'Job Portal',
      subtitle: 'Recruitment Platform',
      description: 'Created a comprehensive job portal with job listings, resume builder, applicant tracking system, employer dashboard, and AI-powered job matching algorithm.'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary via-blue-700 to-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate__animated animate__fadeInDown" style={{ WebkitTextFillColor: 'white' }}>Our Projects</h1>
          <p className="text-white/90 text-lg md:text-xl animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>Explore our portfolio of {projects.length}+ successfully delivered IT solutions</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h5 className="text-primary text-xl mb-4">Our Portfolio</h5>
            <h1 className="text-4xl md:text-5xl font-bold">Comprehensive IT Solutions Portfolio</h1>
            <p className="text-gray-600 mt-4">Delivering excellence across diverse industries with cutting-edge technology solutions including CRM, HRMS, Web Development, Mobile Apps, and Enterprise Software</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card-wrapper animate__animated animate__fadeIn" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="project-item relative rounded-lg overflow-hidden">
                  <div className="project-img-wrapper">
                    <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-lg relative z-0" />
                  </div>
                  <div className="project-overlay">
                    <div>
                      <h4 className="text-white text-2xl font-bold mb-2">{project.title}</h4>
                      <p className="text-secondary text-lg font-medium">{project.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="project-description">
                  <p className="text-gray-700 text-base leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
