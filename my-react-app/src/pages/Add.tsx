/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import '../styles.css'; 

const Add: React.FC = () => {
  const { user } = useUser(); 
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        image,
        userId: user.id, 
        username: user.username, 
        createdAt: new Date().toISOString(),
      }),
    })
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <div className="container">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL (optional):
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default Add;
