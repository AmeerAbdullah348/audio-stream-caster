import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Blog = () => {
  const posts = [
    {
      title: "Understanding WAV Audio Format: Why It's Superior for Music Production",
      excerpt: "Learn about the technical advantages of WAV format and why it's preferred for professional audio work.",
      date: "2024-01-15",
      readTime: "5 min read"
    },
    {
      title: "YouTube Audio Quality: What You Need to Know Before Converting",
      excerpt: "Discover the factors that affect YouTube audio quality and how to get the best results when converting.",
      date: "2024-01-10", 
      readTime: "7 min read"
    },
    {
      title: "Legal Guidelines for Using YouTube Content",
      excerpt: "Important information about copyright and fair use when downloading YouTube audio content.",
      date: "2024-01-05",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              YouTube to WAV Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest tips, guides, and insights about YouTube audio conversion and WAV format.
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <time>{post.date}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-semibold mb-4 text-foreground hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <button className="text-accent font-medium hover:text-accent-hover transition-colors">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;