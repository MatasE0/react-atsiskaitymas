import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="register">Register</Link>
      <Link to="login">Login</Link>
      <Link to="user">User</Link>
      <Link to="add">Add Post</Link>
      
    </nav>
  );
};

export default Menu;
