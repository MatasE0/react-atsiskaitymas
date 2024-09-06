import React, { useEffect, useState } from 'react';
import '../styles.css'; // Import styles.css


interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  username: string; // Add username field
  createdAt: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="container">
      <h2>Home</h2>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div>
          {posts.map(post => (
            <div key={post.id} className="post-card">
              {post.image && <img src={post.image} alt={post.title} />}
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p><strong>Author:</strong> {post.username}</p> {/* Display the author's name */}
              <p><small>Created at: {new Date(post.createdAt).toLocaleString()}</small></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
