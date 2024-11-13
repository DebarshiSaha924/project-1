import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const suggestions = [
    { id: 1, image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=300&h=300&fit=crop' },
    { id: 2, image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=300&h=300&fit=crop' },
    { id: 3, image: 'https://images.unsplash.com/photo-1682687220198-88e6f6ab3d35?w=300&h=300&fit=crop' },
    // Add more images as needed
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="relative mb-8">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-100 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
        {suggestions.map(item => (
          <div key={item.id} className="aspect-square">
            <img
              src={item.image}
              alt={`Explore ${item.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}