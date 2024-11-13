import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Send } from 'lucide-react';

interface Comment {
  id: number;
  username: string;
  text: string;
  timestamp: string;
}

interface PostProps {
  post: {
    user: {
      name: string;
      avatar: string;
      verified: boolean;
    };
    image: string;
    likes: number;
    caption: string;
    comments: number;
    timestamp: string;
  };
}

export default function Post({ post }: PostProps) {
  const [isCommenting, setIsCommenting] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, username: 'user123', text: 'Amazing shot! 📸', timestamp: '1h' },
    { id: 2, username: 'traveler', text: 'Love this place! Where is it?', timestamp: '2h' }
  ]);

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          username: 'your_username',
          text: newComment.trim(),
          timestamp: 'now'
        }
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white border rounded-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold">{post.user.name}</span>
              {post.user.verified && (
                <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <span className="text-xs text-gray-500">{post.timestamp}</span>
          </div>
        </div>
        <MoreHorizontal className="h-6 w-6 text-gray-600" />
      </div>

      <div className="relative pb-[100%]">
        <img
          src={post.image}
          alt="Post content"
          className="absolute w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <Heart className="h-6 w-6 hover:text-red-500 cursor-pointer transition" />
            <MessageCircle 
              className="h-6 w-6 hover:text-blue-500 cursor-pointer transition"
              onClick={() => setIsCommenting(true)}
            />
            <Share2 className="h-6 w-6 hover:text-green-500 cursor-pointer transition" />
          </div>
          <Bookmark className="h-6 w-6 hover:text-yellow-500 cursor-pointer transition" />
        </div>

        <div className="font-semibold mb-2">{post.likes.toLocaleString()} likes</div>
        
        <div className="space-y-2">
          <p>
            <span className="font-semibold mr-2">{post.user.name}</span>
            {post.caption}
          </p>
          
          <div className="space-y-2 mt-4">
            {comments.map(comment => (
              <div key={comment.id} className="text-sm">
                <span className="font-semibold mr-2">{comment.username}</span>
                {comment.text}
                <span className="text-gray-500 text-xs ml-2">{comment.timestamp}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleComment} className="mt-4 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 bg-transparent focus:outline-none text-sm"
          />
          {newComment && (
            <button type="submit">
              <Send className="h-5 w-5 text-blue-500" />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}