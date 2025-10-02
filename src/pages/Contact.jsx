import React from 'react';
import styles from '../styles/components/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <h3>Ready to Join the Alliance?</h3>
        <p>Connect with us today and help build tomorrow's STEM innovators across the United States!</p>
        
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span>📧</span>
            <span>claycountystemalliance@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <span>📮</span>
            <span>PO Box 1292, Middleburg, FL 32050</span>
          </div>
        </div>
      </div>
    </section>
  );
}