function Topbar() {
  return (
    <div className="bg-secondary py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
              23 Ranking Street, New York
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fas fa-envelope mr-2 text-primary"></i>
              Email@Example.com
            </a>
          </div>
          <div className="hidden xl:block text-primary text-sm">
            Note : Empowering Your Business Through Technology Innovation
          </div>
          <div className="flex space-x-2">
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fab fa-facebook-f text-primary"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fab fa-twitter text-primary"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fab fa-instagram text-primary"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <i className="fab fa-linkedin-in text-primary"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
