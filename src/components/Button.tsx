import React from 'react';
import '../sass/Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button className={`animated-button ${className}`} onClick={onClick}>
      {children}
      <span className="glow-dot"></span>
    </button>
  );
};

export default Button;

