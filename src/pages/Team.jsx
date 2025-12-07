function Team() {
  const team = [
    { image: '/img/team-1.jpg', name: 'Full Name', designation: 'Designation' },
    { image: '/img/team-2.jpg', name: 'Full Name', designation: 'Designation' },
    { image: '/img/team-3.jpg', name: 'Full Name', designation: 'Designation' },
    { image: '/img/team-4.jpg', name: 'Full Name', designation: 'Designation' },
    { image: '/img/team-1.jpg', name: 'Full Name', designation: 'Designation' },
    { image: '/img/team-2.jpg', name: 'Full Name', designation: 'Designation' }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-white/80 text-lg">Meet our expert professionals</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h5 className="text-primary text-xl mb-4">Our Team</h5>
            <h1 className="text-4xl md:text-5xl font-bold">Meet our expert Team</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition">
                <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto mb-6 object-cover" />
                <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                <p className="text-gray-600 mb-6">{member.designation}</p>
                <div className="flex justify-center space-x-2">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
