import React from 'react';
import { Settings, Grid, Bookmark, Film } from 'lucide-react';

export default function Profile() {
  const posts = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    image: `https://images.unsplash.com/photo-${1682687220742 + i}-aba13b6e50ba?w=600&h=600&fit=crop`
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-start gap-8 mb-8">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-xl font-semibold">your_username</h1>
            <button className="px-4 py-1.5 bg-gray-100 rounded-lg text-sm font-semibold">
              Edit profile
            </button>
            <Settings className="w-6 h-6" />
          </div>
          
          <div className="flex gap-8 mb-4">
            <span><b>123</b> posts</span>
            <span><b>1,234</b> followers</span>
            <span><b>567</b> following</span>
          </div>
          
          <div>
            <h2 className="font-semibold">Your Name</h2>
            <p className="text-gray-600">Digital creator</p>
            <p>Capturing life's moments ✨</p>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="flex justify-center gap-12 py-2">
          <button className="flex items-center gap-1 text-sm font-semibold border-t border-black pt-2">
            <Grid className="w-4 h-4" />
            POSTS
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-500">
            <Bookmark className="w-4 h-4" />
            SAVED
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-500">
            <Film className="w-4 h-4" />
            REELS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 mt-4">
        {posts.map(post => (
          <div key={post.id} className="aspect-square">
            <img
              src={post.image}
              alt={`Post ${post.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}