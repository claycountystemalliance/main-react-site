import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={`container ${styles.nav}`}>
          <div className={styles.logo}>
            <h1>Clay County STEM Alliance</h1>
          </div>
          
          <button 
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          
          <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
            {/* Close button INSIDE the menu */}
            <li className={styles.closeButtonWrapper}>
              <button 
                className={styles.mobileCloseBtn}
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </li>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/programs" onClick={closeMobileMenu}>Programs</Link></li>
            <li><Link to="/volunteer" onClick={closeMobileMenu}>Get Involved</Link></li>
            <li><Link to="/donate" onClick={closeMobileMenu}>Donate</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
          </ul>
        </nav>
      </header>
      
      {/* Overlay */}
      <div 
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={closeMobileMenu}
      />
    </>
  );
}