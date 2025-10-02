
import React from 'react';
import styles from '../../styles/components/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerSocial}>
          <p>Follow Us</p>
          <div className={styles.footerSocialLinks}>
            <a 
              href="https://www.facebook.com/people/Clay-County-STEM-Alliance/61580450850607/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="Facebook"
            >
              <span className={`${styles.footerSocialIcon} ${styles.facebook}`}>f</span>
            </a>
            <a 
              href="https://www.instagram.com/claycountystem" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="Instagram"
            >
              <span className={`${styles.footerSocialIcon} ${styles.instagram}`}>📷</span>
            </a>
          </div>
        </div>
        
        <p>&copy; 2025 Clay County STEM Alliance Inc. All rights reserved.</p>
        <p className={styles.footerTagline}>
          "Building tomorrow's innovators today - one student at a time"
        </p>
      </div>
    </footer>
  );
}