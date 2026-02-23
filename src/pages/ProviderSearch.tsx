import React, { useState } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { Search, MapPin, Filter, Star, Phone, Calendar, Video, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const MOCK_PROVIDERS = [
  {
    id: 1,
    name: "Dr. Emily Chen, MD",
    specialty: "Family Medicine",
    rating: 4.8,
    reviews: 127,
    distance: "1.2 miles",
    address: "123 Main St, Suite 200",
    image: "https://picsum.photos/seed/doc1/200/200",
    accepts: ["Silver", "Gold", "Platinum"],
    nextAvailable: "Tomorrow, 10:30 AM",
    languages: ["English", "Mandarin"],
    badges: ["Top Rated", "New Patients"]
  },
  {
    id: 2,
    name: "Dr. Michael Ross, MD",
    specialty: "Cardiology",
    rating: 4.9,
    reviews: 342,
    distance: "3.5 miles",
    address: "450 Medical Center Dr",
    image: "https://picsum.photos/seed/doc2/200/200",
    accepts: ["Gold", "Platinum"],
    nextAvailable: "Feb 28, 2:00 PM",
    languages: ["English", "Spanish"],
    badges: ["Board Certified"]
  },
  {
    id: 3,
    name: "Sarah Miller, NP",
    specialty: "Pediatrics",
    rating: 4.7,
    reviews: 89,
    distance: "2.1 miles",
    address: "789 Oak Ave",
    image: "https://picsum.photos/seed/doc3/200/200",
    accepts: ["Bronze", "Silver", "Gold"],
    nextAvailable: "Today, 4:15 PM",
    languages: ["English"],
    badges: ["Virtual Visits"]
  },
  {
    id: 4,
    name: "Dr. James Wilson, DDS",
    specialty: "Dentistry",
    rating: 4.6,
    reviews: 210,
    distance: "0.8 miles",
    address: "101 Pine St",
    image: "https://picsum.photos/seed/doc4/200/200",
    accepts: ["Dental Add-on"],
    nextAvailable: "Mar 2, 9:00 AM",
    languages: ["English"],
    badges: []
  }
];

export default function ProviderSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  return (
    <div className="min-h-screen bg-vitalis-sage font-sans text-vitalis-navy flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 flex flex-col">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200 py-8 px-4 shadow-sm z-10">
          <div className="container mx-auto max-w-6xl">
            <h1 className="font-serif text-3xl font-bold mb-6">Find in-network providers</h1>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by name, specialty, condition..." 
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-vitalis-teal focus:ring-2 focus:ring-vitalis-teal/20 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative md:w-64">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Zip code or city" 
                  defaultValue="90210"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-vitalis-teal focus:ring-2 focus:ring-vitalis-teal/20 outline-none"
                />
              </div>
              <button className="bg-vitalis-teal text-white px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors">
                Search
              </button>
            </div>

            <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
              {['Primary Care', 'Specialists', 'Urgent Care', 'Hospitals', 'Telehealth'].map((filter) => (
                <button 
                  key={filter}
                  className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-vitalis-teal hover:text-vitalis-teal transition-colors whitespace-nowrap bg-white"
                >
                  {filter}
                </button>
              ))}
              <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium flex items-center gap-2 hover:border-vitalis-teal transition-colors bg-white">
                <Filter className="w-4 h-4" /> More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden h-[calc(100vh-250px)]">
          {/* List View */}
          <div className="w-full lg:w-1/2 xl:w-5/12 overflow-y-auto p-4 lg:p-6 space-y-4 bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-vitalis-grey">{MOCK_PROVIDERS.length} results near you</span>
              <div className="flex items-center gap-2 text-sm cursor-pointer hover:text-vitalis-teal">
                Sort by: Recommended <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            {MOCK_PROVIDERS.map((provider) => (
              <div key={provider.id} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-vitalis-teal/30 group cursor-pointer">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                    <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-vitalis-navy group-hover:text-vitalis-teal transition-colors">{provider.name}</h3>
                        <p className="text-vitalis-grey text-sm">{provider.specialty}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-vitalis-sage/50 px-2 py-1 rounded-lg">
                        <Star className="w-3 h-3 fill-vitalis-amber text-vitalis-amber" />
                        <span className="text-xs font-bold">{provider.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center gap-4 text-sm text-vitalis-grey">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {provider.distance}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {provider.nextAvailable}
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {provider.badges.map((badge) => (
                        <span key={badge} className="text-[10px] uppercase font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-md">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
                  <button className="flex-1 bg-vitalis-coral text-white py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">
                    Book Online
                  </button>
                  <button className="flex-1 border border-gray-200 text-vitalis-navy py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Call Office
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Map View (Mock) */}
          <div className="hidden lg:block flex-1 bg-gray-200 relative">
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=YOUR_API_KEY')] bg-cover bg-center opacity-50 grayscale" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg text-center">
                <MapPin className="w-8 h-8 text-vitalis-coral mx-auto mb-2" />
                <p className="font-medium">Interactive Map Placeholder</p>
                <p className="text-xs text-gray-500">Google Maps integration would go here</p>
              </div>
            </div>
            
            {/* Mock Pins */}
            <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-vitalis-teal rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:scale-110 transition-transform">
              1
            </div>
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-vitalis-teal rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:scale-110 transition-transform">
              2
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-vitalis-teal rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:scale-110 transition-transform">
              3
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
