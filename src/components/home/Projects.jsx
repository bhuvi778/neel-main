import { useScrollAnimation } from '../../hooks/useAnimations';

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
    }
  ];

  const ProjectCard = ({ project, delay }) => {
    const ref = useScrollAnimation('animate__fadeIn', delay);
    return (
      <div ref={ref} className="project-card-wrapper">
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
    );
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-primary text-xl mb-4">Our Portfolio</h5>
          <h1 className="text-4xl md:text-5xl font-bold">Recently Completed IT Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 200} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
