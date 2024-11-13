import React from 'react';

const stories = [
  {
    id: 1,
    username: 'your_story',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    isUser: true
  },
  {
    id: 2,
    username: 'travel_diary',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    username: 'photography',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop'
  },
  {
    id: 4,
    username: 'foodie_life',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 5,
    username: 'fitness_pro',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop'
  }
];

export default function Stories() {
  return (
    <div className="bg-white border rounded-lg p-4 overflow-x-auto">
      <div className="flex space-x-4">
        {stories.map(story => (
          <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div className={`w-16 h-16 rounded-full p-[2px] ${story.isUser ? 'bg-gray-200' : 'bg-gradient-to-tr from-yellow-400 to-pink-600'}`}>
              <img
                src={story.avatar}
                alt={story.username}
                className="rounded-full w-full h-full object-cover border-2 border-white"
              />
            </div>
            <span className="text-xs text-gray-600 truncate w-16 text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}