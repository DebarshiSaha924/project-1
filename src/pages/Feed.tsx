import React, { useState } from 'react';
import Stories from '../components/Stories';
import Post from '../components/Post';
import Suggestions from '../components/Suggestions';

export default function Feed() {
  const [posts] = useState([
    {
      id: 1,
      user: {
        name: 'sarah_adventures',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        verified: true
      },
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=800&fit=crop',
      likes: 1542,
      caption: 'Lost in the beauty of nature 🌿 #adventure #photography',
      comments: 42,
      timestamp: '2h'
    },
    {
      id: 2,
      user: {
        name: 'food_explorer',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
        verified: false
      },
      image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1200&h=800&fit=crop',
      likes: 2891,
      caption: 'Perfect morning starts with perfect coffee ☕️ #foodie #lifestyle',
      comments: 76,
      timestamp: '4h'
    }
  ]);

  return (
    <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 py-8">
      <div className="lg:col-span-2">
        <Stories />
        <div className="space-y-6 mt-6">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <Suggestions />
      </div>
    </main>
  );
}