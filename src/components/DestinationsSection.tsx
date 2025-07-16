import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import tropicalImage from '@/assets/destination-tropical.jpg';
import europeImage from '@/assets/destination-europe.jpg';
import businessImage from '@/assets/destination-business.jpg';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      title: "Tropical Paradise",
      subtitle: "Caribbean Islands",
      image: tropicalImage,
      price: "From $299",
      duration: "5h 30m",
      rating: 4.9,
      description: "Crystal clear waters and pristine beaches await you in our tropical destinations."
    },
    {
      id: 2,
      title: "Historic Europe",
      subtitle: "Paris, London & Rome",
      image: europeImage,
      price: "From $459",
      duration: "8h 15m",
      rating: 4.8,
      description: "Discover centuries of culture, art, and architecture in Europe's most iconic cities."
    },
    {
      id: 3,
      title: "Business Hubs",
      subtitle: "New York & Tokyo",
      image: businessImage,
      price: "From $699",
      duration: "12h 45m",
      rating: 4.9,
      description: "Connect with global business centers and experience modern metropolitan life."
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our most sought-after destinations and discover where your next adventure awaits.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group cursor-pointer overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.price}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 rounded-full text-sm flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-secondary text-secondary" />
                    {destination.rating}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {destination.subtitle}
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  {destination.duration}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {destination.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="group-hover:text-primary group-hover:bg-primary/5 transition-colors p-0"
                >
                  Book Now
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
            View All Destinations
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;