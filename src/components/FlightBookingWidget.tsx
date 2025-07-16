import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ArrowLeftRight, Calendar as CalendarIcon, MapPin, Plane, Users } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const FlightBookingWidget = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [departure, setDeparture] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [passengers, setPassengers] = useState(1);

  const cities = [
    'New York (NYC)', 'London (LHR)', 'Paris (CDG)', 'Tokyo (NRT)', 
    'Los Angeles (LAX)', 'Dubai (DXB)', 'Singapore (SIN)', 'Madrid (MAD)',
    'Barcelona (BCN)', 'Miami (MIA)', 'Caracas (CCS)', 'Bogotá (BOG)'
  ];

  return (
    <div className="bg-background/95 backdrop-blur-md rounded-2xl shadow-large border border-border p-6 md:p-8 max-w-4xl mx-auto">
      {/* Trip Type Selection */}
      <div className="mb-6">
        <RadioGroup value={tripType} onValueChange={setTripType} className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="roundtrip" id="roundtrip" />
            <Label htmlFor="roundtrip" className="font-medium">Round Trip</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="oneway" id="oneway" />
            <Label htmlFor="oneway" className="font-medium">One Way</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multicity" id="multicity" />
            <Label htmlFor="multicity" className="font-medium">Multi-city</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Flight Search Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* From */}
        <div className="space-y-2">
          <Label htmlFor="from" className="text-sm font-medium flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            From
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Departure city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city.toLowerCase()}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* To */}
        <div className="space-y-2">
          <Label htmlFor="to" className="text-sm font-medium flex items-center">
            <Plane className="h-4 w-4 mr-1" />
            To
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Destination city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city.toLowerCase()}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Departure Date */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            Departure
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !departure && "text-muted-foreground"
                )}
              >
                {departure ? format(departure, "MMM dd, yyyy") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={departure}
                onSelect={setDeparture}
                disabled={(date) => date < new Date()}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Return Date */}
        {tripType === 'roundtrip' && (
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center">
              <ArrowLeftRight className="h-4 w-4 mr-1" />
              Return
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  {returnDate ? format(returnDate, "MMM dd, yyyy") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  disabled={(date) => date < new Date() || (departure && date < departure)}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        )}

        {/* Passengers */}
        <div className="space-y-2 lg:col-span-1">
          <Label className="text-sm font-medium flex items-center">
            <Users className="h-4 w-4 mr-1" />
            Passengers
          </Label>
          <Select value={passengers.toString()} onValueChange={(value) => setPassengers(parseInt(value))}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? 'Passenger' : 'Passengers'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center">
        <Button 
          size="lg" 
          className="bg-gradient-hero text-primary-foreground hover:opacity-90 px-12 py-3 text-lg font-semibold shadow-medium"
        >
          <Plane className="h-5 w-5 mr-2" />
          Search Flights
        </Button>
      </div>
    </div>
  );
};

export default FlightBookingWidget;