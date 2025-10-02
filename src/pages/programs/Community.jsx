import React from 'react';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import styles from '../../styles/components/ProgramDetail.module.css';

export default function Community() {
  return (
    <>
      <ProgramHero 
        icon="🌱" 
        title="Community Innovation"
        subtitle="Real-World Problem Solving • Environmental Solutions • Civic Technology"
      />

      <section className={styles.programContent}>
        <div className="container">
          <div className={styles.programSection}>
            <h3>Program Overview</h3>
            <p>Community Innovation connects STEM education with real-world impact. Students identify actual problems in our community and design practical solutions using technology, engineering, and scientific principles.</p>
          </div>

          <div className={styles.programSection}>
            <h3>Focus Areas</h3>
            
            <h4>🌍 Environmental Solutions</h4>
            <p><strong>Topics:</strong> Solar power, water management, waste management, ecological restoration</p>
            <p>Students tackle environmental challenges through technology and engineering.</p>

            <h4>♿ Accessibility Improvements</h4>
            <p><strong>Projects:</strong> Assistive devices, adaptive technology, inclusive design</p>
            <p>Create solutions that make our community more accessible.</p>

            <h4>🏙️ Civic Technology</h4>
            <p><strong>Applications:</strong> Smart city solutions, public information systems, community apps</p>
            <p>Use technology to solve local government and community challenges.</p>
          </div>

          <div className={styles.ctaBox}>
            <h3>Make a Real Difference</h3>
            <p>Apply your STEM skills to solve real community problems!</p>
            <Link to="/contact" className="btn">Join Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}