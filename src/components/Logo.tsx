import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  color?: 'black' | 'white';
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'black', onClick, className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`} onClick={onClick}>
      <span className={`font-gazpacho font-black text-4xl md:text-5xl lg:text-6xl ${color === 'white' ? 'text-white' : 'text-black'}`}>
        mintee
      </span>
    </Link>
  );
};

export default Logo;
