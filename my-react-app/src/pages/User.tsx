import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import '../styles.css'; 
const User: React.FC = () => {
  const { user } = useUser();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/posts`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        const filteredPosts = data.filter((post: any) => post.username === user.username);
        setPosts(filteredPosts);
      } catch (err) {
        setError('Error fetching posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [user]);

  if (!user) {
    return <p>You must be logged in to view saved posts.</p>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <h2>{user.username}'s Posts</h2>
      {posts.length === 0 ? (
        <p>No saved posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            {post.image && <img src={post.image} alt={post.title} style={{ width: '150px' }} />}
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default User;
