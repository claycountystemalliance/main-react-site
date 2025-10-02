import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <h2>Building Tomorrow's Innovators Today</h2>
        <p>Expanding access to high-quality STEM education opportunities for every student.</p>
        <div className={styles.ctaButtons}>
          <Link to="/volunteer" className="btn btn-primary">Join Our Mission</Link>
          <Link to="/programs" className="btn btn-secondary">Explore Programs</Link>
        </div>
      </div>
    </section>
  );
}