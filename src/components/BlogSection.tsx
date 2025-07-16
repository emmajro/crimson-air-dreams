import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Ultimate Travel Guide to Caribbean Paradise",
      excerpt: "Discover hidden gems and local secrets in the most beautiful Caribbean islands with our comprehensive travel guide.",
      author: "Maria Rodriguez",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Travel Guide",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Essential Packing Tips for Business Travelers",
      excerpt: "Master the art of efficient packing with our expert tips for business travelers. Travel light while staying professional.",
      author: "Carlos Mendez",
      date: "March 12, 2024",
      readTime: "5 min read",
      category: "Business Travel",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Top 10 European Cities for Food Lovers",
      excerpt: "Embark on a culinary journey through Europe's most delicious destinations. From tapas to pasta, discover the best flavors.",
      author: "Ana Garcia",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Food & Culture",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Sustainable Travel: Flying Responsibly with LASER",
      excerpt: "Learn about our commitment to sustainable aviation and how you can travel more responsibly while exploring the world.",
      author: "Luis Fernandez",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1564302921293-c2f7f2e3b62b?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Travel Insights & Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get inspired with our latest travel guides, tips, and stories from around the world.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-large">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="mb-4 w-fit">
                  {blogPosts[0].category}
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <User className="h-4 w-4 mr-2" />
                  {blogPosts[0].author}
                  <Calendar className="h-4 w-4 ml-4 mr-2" />
                  {blogPosts[0].date}
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
                <Button className="bg-gradient-hero text-primary-foreground hover:opacity-90 w-fit">
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group cursor-pointer overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <User className="h-3 w-3 mr-1" />
                  {post.author}
                  <Calendar className="h-3 w-3 ml-3 mr-1" />
                  {post.date.split(',')[0]}
                </div>
                <Button 
                  variant="ghost" 
                  className="group-hover:text-primary group-hover:bg-primary/5 transition-colors p-0"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;