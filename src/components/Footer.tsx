import React from 'react'
import { Gamepad2 } from 'lucide-react'
import '../sass/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; 2024 Vizir-dev.fr. All rights reserved.
        </p>
        <Gamepad2 className="gamepad-icon" />
      </div>
    </footer>
  )
}

export default Footer