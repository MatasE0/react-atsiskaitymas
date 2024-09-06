import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={socialMediaStyle}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=118490&format=png&color=000000" alt="Facebook" style={iconStyle} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=102907&format=png&color=000000" alt="Twitter" style={iconStyle} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=84884&format=png&color=000000" alt="Instagram" style={iconStyle} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=84888&format=png&color=000000" alt="LinkedIn" style={iconStyle} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=20675&format=png&color=000000" alt="GitHub" style={iconStyle} />
        </a>
      </div>
      <p>&copy; 2024 IMGsite. All rights reserved.</p>
      <p><a href="/privacy-policy">Privacy Policy</a></p>
      <p><a href="/terms-of-use">Terms of Use</a></p>
      
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)',
};

const socialMediaStyle: React.CSSProperties = {
  marginTop: '10px',
};

const iconStyle: React.CSSProperties = {
  width: '24px',
  height: '24px',
  margin: '0 10px',
  verticalAlign: 'middle',
  transition: 'opacity 0.3s',
};

export default Footer;
