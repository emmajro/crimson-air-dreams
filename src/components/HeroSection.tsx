import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import FlightBookingWidget from './FlightBookingWidget';
import heroImage from '@/assets/hero-plane.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary-glow to-secondary overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="text-center mb-16">
          {/* Main Hero Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              La vida es un
              <span className="text-secondary block">buen viaje</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
              Discover the world with LASER Airlines. Premium comfort, exceptional service, 
              and unforgettable journeys to your dream destinations.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 text-lg font-semibold shadow-medium"
              >
                Explore Destinations
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost"
                className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 px-8 py-3 text-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Flight Booking Widget */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <FlightBookingWidget />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-primary-foreground/80">
              <div className="text-3xl font-bold text-secondary">150+</div>
              <div className="text-sm">Destinations</div>
            </div>
            <div className="text-primary-foreground/80">
              <div className="text-3xl font-bold text-secondary">50M+</div>
              <div className="text-sm">Happy Passengers</div>
            </div>
            <div className="text-primary-foreground/80">
              <div className="text-3xl font-bold text-secondary">98%</div>
              <div className="text-sm">On-Time Performance</div>
            </div>
            <div className="text-primary-foreground/80">
              <div className="text-3xl font-bold text-secondary">24/7</div>
              <div className="text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;