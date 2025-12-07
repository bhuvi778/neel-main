import { useScrollAnimation } from '../../hooks/useAnimations';

function TeamPreview() {
  const team = [
    { image: '/img/team-1.jpg', name: 'David Johnson', designation: 'Chief Technology Officer' },
    { image: '/img/team-2.jpg', name: 'Sarah Williams', designation: 'Lead Software Architect' },
    { image: '/img/team-3.jpg', name: 'Michael Chen', designation: 'DevOps Manager' },
    { image: '/img/team-4.jpg', name: 'Emily Rodriguez', designation: 'Cybersecurity Expert' }
  ];

  const TeamCard = ({ member, delay }) => {
    const ref = useScrollAnimation('animate__fadeIn', delay);
    return (
      <div ref={ref} className="rounded team-item bg-gray-100">
        <div className="team-content">
          <div className="team-img-icon">
            <div className="team-img rounded-full border-[15px] border-white overflow-hidden mx-auto" style={{ width: '200px', height: '200px' }}>
              <img src={member.image} alt={member.name} className="w-full h-full object-cover border-[10px] border-secondary" />
            </div>
            <div className="team-name text-center py-3">
              <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
              <p className="text-gray-600">{member.designation}</p>
            </div>
            <div className="team-icon flex justify-center space-x-2 pb-4">
              <a href="#" className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-primary text-xl mb-4">Our Leadership</h5>
          <h1 className="text-4xl md:text-5xl font-bold">Meet Our Expert Technology Team</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} delay={index * 200} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPreview;
