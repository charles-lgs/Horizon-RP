import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../sass/Banner.scss';


const Banner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) { // scroll down
        setVisible(false);
      } else { // scroll up
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header className={`banner ${visible ? 'visible' : 'hidden'}`}>
        <div className="banner-content">
            <Link to="/" className="logo-container">
            <h3 className="logo">Organa RP</h3>
            </Link>
        
            <nav className="navigation">
                <Link to="/règlement" className="nav-link">
                Règlement
                </Link>
                <Link to="/penal-code" className="nav-link">
                Code Pénal
                </Link>
                <Link to="/about" className="nav-link">
                    A Propos
                </Link>
            </nav>
        </div>
    <div className="light-beam"></div>
    </header>
  );
};

export default Banner;

