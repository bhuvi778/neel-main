function Blog() {
  const blogs = [
    { image: '/img/blog-1.jpg', category: 'Cloud Computing', author: 'Rajesh Kumar', date: 'Dec 01, 2025', shares: 342, comments: 15 },
    { image: '/img/blog-2.jpg', category: 'Cybersecurity', author: 'Priya Sharma', date: 'Nov 28, 2025', shares: 428, comments: 22 },
    { image: '/img/blog-3.jpg', category: 'AI & ML', author: 'Amit Patel', date: 'Nov 25, 2025', shares: 567, comments: 31 },
    { image: '/img/blog-1.jpg', category: 'DevOps', author: 'Sneha Reddy', date: 'Nov 20, 2025', shares: 289, comments: 18 },
    { image: '/img/blog-2.jpg', category: 'Blockchain', author: 'Vikram Singh', date: 'Nov 15, 2025', shares: 391, comments: 24 },
    { image: '/img/blog-3.jpg', category: 'Data Science', author: 'Neha Verma', date: 'Nov 10, 2025', shares: 445, comments: 19 }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-white/80 text-lg">Latest news and insights</p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h5 className="text-primary text-xl mb-4">Our Blog</h5>
            <h1 className="text-4xl md:text-5xl font-bold">Latest Blog & News</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative">
                  <img src={blog.image} alt={blog.category} className="w-full h-64 object-cover" />
                  <span className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded">{blog.category}</span>
                </div>
                
                <div className="p-6 text-center">
                  <img src="/img/admin.jpg" alt="Author" className="w-20 h-20 rounded-full mx-auto border-4 border-white -mt-12 mb-4 shadow-lg" />
                  <h5 className="text-xl font-bold mb-2">By {blog.author}</h5>
                  <span className="text-secondary text-sm">{blog.date}</span>
                  <p className="text-gray-600 mt-4 mb-6">
                    Explore the latest trends and insights in technology, cloud computing, cybersecurity, software development, and digital transformation strategies for modern businesses.
                  </p>
                </div>
                
                <div className="flex justify-between items-center px-6 py-3 bg-primary text-white text-sm">
                  <span><i className="fas fa-share mr-2 text-secondary"></i>{blog.shares} Share</span>
                  <span><i className="fa fa-comments mr-2 text-secondary"></i>{blog.comments} Comments</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
