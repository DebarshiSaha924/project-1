import React from 'react';

const notifications = [
  {
    id: 1,
    user: {
      name: 'sarah_adventures',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    action: 'liked your photo',
    timestamp: '2h',
    postImage: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    user: {
      name: 'photography_pro',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop'
    },
    action: 'started following you',
    timestamp: '3h'
  }
];

export default function Notifications() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
      
      <div className="space-y-4">
        {notifications.map(notification => (
          <div key={notification.id} className="flex items-center gap-4 p-4 bg-white rounded-lg">
            <img
              src={notification.user.avatar}
              alt={notification.user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <p>
                <span className="font-semibold">{notification.user.name}</span>
                {' '}
                {notification.action}
                {' '}
                <span className="text-gray-500">{notification.timestamp}</span>
              </p>
            </div>
            {notification.postImage && (
              <img
                src={notification.postImage}
                alt="Post"
                className="w-12 h-12 object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}