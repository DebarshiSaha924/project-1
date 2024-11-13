import React from 'react';

const suggestions = [
  {
    id: 1,
    name: 'photography_pro',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
    followedBy: 'sarah_adventures'
  },
  {
    id: 2,
    name: 'travel_guides',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
    followedBy: 'alex_explorer'
  },
  {
    id: 3,
    name: 'food_lover',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    followedBy: 'cuisine_master'
  }
];

export default function Suggestions() {
  return (
    <div className="fixed w-[350px]">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
          alt="Your profile"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">your_username</h2>
          <p className="text-gray-500 text-sm">Your Name</p>
        </div>
        <button className="ml-auto text-blue-500 text-sm font-semibold">Switch</button>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-gray-500 font-semibold">Suggestions For You</h3>
        <button className="text-sm font-semibold">See All</button>
      </div>

      <div className="space-y-4">
        {suggestions.map(suggestion => (
          <div key={suggestion.id} className="flex items-center">
            <img
              src={suggestion.avatar}
              alt={suggestion.name}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="ml-3 flex-grow">
              <h4 className="font-semibold text-sm">{suggestion.name}</h4>
              <p className="text-gray-500 text-xs">Followed by {suggestion.followedBy}</p>
            </div>
            <button className="text-blue-500 text-xs font-semibold">Follow</button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xs text-gray-400">
        <p className="space-x-1">
          <span>About</span> · <span>Help</span> · <span>Press</span> · <span>API</span> ·
          <span>Jobs</span> · <span>Privacy</span> · <span>Terms</span>
        </p>
        <p className="mt-4">© 2024 Instagram Clone</p>
      </div>
    </div>
  );
}