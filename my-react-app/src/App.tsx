import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useUser } from './contexts/UserContext';
import Footer from './components/Footer'; 
import './styles.css'; 

const App: React.FC = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login'); 
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/add">Add Post</Link>
              <Link to="/user">{user.username}</Link>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
      <main>
        <Outlet /> {}
      </main>
      <Footer /> {}
    </div>
  );
};

export default App;
