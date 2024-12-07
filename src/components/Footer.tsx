import React from 'react'
import { Gamepad2 } from 'lucide-react'
import '../sass/Footer.scss'

const discord = "https://discord.gg/9nKDu7UJug";

const Footer = () => {
  const handleClick = () => {
    window.location.href = discord;
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; 2024 Vizir-dev.fr. All rights reserved.
        </p>
        <Gamepad2 className="gamepad-icon" onClick={handleClick} />
      </div>
    </footer>
  )
}

export default Footer