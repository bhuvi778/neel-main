import { useScrollAnimation } from '../../hooks/useAnimations';

function BlogPreview() {
  const blogs = [
    { image: '/img/blog-1.jpg', category: 'Cloud Computing', author: 'Rajesh Kumar', date: 'Dec 01, 2025', shares: 342, comments: 15, excerpt: 'Explore emerging cloud technologies including serverless architecture, edge computing, and multi-cloud strategies for modern enterprises.' },
    { image: '/img/blog-2.jpg', category: 'Cybersecurity', author: 'Priya Sharma', date: 'Nov 28, 2025', shares: 428, comments: 22, excerpt: 'Learn essential security measures to protect your business from cyber threats, data breaches, and ransomware attacks.' },
    { image: '/img/blog-3.jpg', category: 'AI & ML', author: 'Amit Patel', date: 'Nov 25, 2025', shares: 567, comments: 31, excerpt: 'Discover how artificial intelligence and machine learning are transforming the software development lifecycle and business operations.' }
  ];

  const BlogCard = ({ blog, delay }) => {
    const ref = useScrollAnimation('animate__fadeIn', delay);
    return (
      <div ref={ref} className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative">
          <img src={blog.image} alt={blog.category} className="w-full h-64 object-cover" />
          <span className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded">{blog.category}</span>
        </div>
        
        <div className="p-6 text-center">
          <img src="/img/admin.jpg" alt="Author" className="w-20 h-20 rounded-full mx-auto border-4 border-white -mt-12 mb-4 shadow-lg" />
          <h5 className="text-xl font-bold mb-2">By {blog.author}</h5>
          <span className="text-secondary text-sm">{blog.date}</span>
          <p className="text-gray-600 mt-4 mb-6">
            {blog.excerpt}
          </p>
        </div>
        
        <div className="flex justify-between items-center px-6 py-3 bg-primary text-white text-sm">
          <span><i className="fas fa-share mr-2 text-secondary"></i>{blog.shares} Share</span>
          <span><i className="fa fa-comments mr-2 text-secondary"></i>{blog.comments} Comments</span>
        </div>
      </div>
    );
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h5 className="text-primary text-xl mb-4">Technology Insights</h5>
          <h1 className="text-4xl md:text-5xl font-bold">Latest Articles & IT Industry News</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} delay={index * 200} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPreview;
