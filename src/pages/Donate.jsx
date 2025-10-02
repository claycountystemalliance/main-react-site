import React from 'react';
import styles from '../styles/components/Donation.module.css';

export default function Donate() {
  return (
    <section className={styles.donation}>
      <div className="container">
        <h3 className="section-title">Support Our Mission</h3>
        <p style={{fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center', color: '#666'}}>
          Your donation directly supports student programs and removes financial barriers to STEM education.
        </p>
        
        <div className={styles.donationOptions}>
          <div className={styles.donationCard}>
            <h4>💳 Quick Donation via Zelle</h4>
            <p>Send secure, instant donations directly to our organization account.</p>
            <div className={styles.zelleInfo}>
              <strong>Zelle Recipient:</strong><br />
              claycountystemalliance@gmail.com<br /><br />
              <small>Include "STEM Alliance Donation" in memo</small>
            </div>
          </div>

          <div className={styles.donationCard}>
            <h4>🏢 Corporate Sponsorship</h4>
            <p>Partner with us for meaningful community impact and employee engagement opportunities.</p>
            <ul>
              <li>Team Sponsorships ($2,500-$5,000)</li>
              <li>Program Sponsorships ($5,000-$15,000)</li>
              <li>Equipment & Material Donations</li>
              <li>Workplace Space & Facilities</li>
            </ul>
          </div>

          <div className={styles.donationCard}>
            <h4>📦 Equipment Donations</h4>
            <p>We accept donations of tools, computers, and materials that directly support student learning.</p>
            <ul>
              <li>Laptops & Computers</li>
              <li>Robotics Kits & Parts</li>
              <li>3D Printers & Tools</li>
              <li>Workshop Tables & Storage</li>
            </ul>
          </div>
        </div>

        <div className={styles.taxInfo}>
          <h4 style={{color: '#2c3e50', marginBottom: '1rem'}}>🏛️ Tax Information</h4>
          <p style={{margin: 0}}><strong>Status:</strong> 501(c)(3) application pending with IRS</p>
          <p style={{fontSize: '0.9rem', color: '#666', marginTop: '1rem'}}>
            All donations are tax-deductible to the fullest extent allowed by law. You will receive a donation receipt for your records.
          </p>
        </div>
      </div>
    </section>
  );
}