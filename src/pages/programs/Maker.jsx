import React from 'react';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import styles from '../../styles/components/ProgramDetail.module.css';

export default function Maker() {
  return (
    <>
      <ProgramHero 
        icon="🛠️" 
        title="Maker Workshops"
        subtitle="3D Printing • CAD Design • Electronics • Fabrication"
      />

      <section className={styles.programContent}>
        <div className="container">
          <div className={styles.programSection}>
            <h3>Program Overview</h3>
            <p>Our Maker Workshops provide hands-on engineering experiences where students turn their ideas into physical reality. From designing parts in CAD software to 3D printing prototypes, from building electronic circuits to working with wood and metal—students learn practical skills while bringing their creative visions to life.</p>
          </div>

          <div className={styles.programSection}>
            <h3>Workshop Areas</h3>
            
            <h4>🖥️ CAD (Computer-Aided Design)</h4>
            <p><strong>Software:</strong> Fusion 360, TinkerCAD, OnShape</p>
            <p>Learn professional 3D modeling software used by engineers worldwide.</p>

            <h4>🖨️ 3D Printing & Additive Manufacturing</h4>
            <p><strong>Technologies:</strong> FDM printing, multi-material printing, print optimization</p>
            <p>Master the technology revolutionizing manufacturing.</p>

            <h4>⚡ Electronics & Circuits</h4>
            <p><strong>Skills:</strong> Soldering, breadboarding, Arduino, sensors</p>
            <p>Build interactive projects combining hardware and software.</p>

            <h4>🪚 Fabrication & Workshop Skills</h4>
            <p><strong>Tools:</strong> Hand tools, power tools, safety, materials</p>
            <p>Learn traditional and modern fabrication techniques.</p>
          </div>

          <div className={styles.ctaBox}>
            <h3>Ready to Make?</h3>
            <p>Join our maker workshops and bring your ideas to life!</p>
            <Link to="/contact" className="btn">Start Creating</Link>
          </div>
        </div>
      </section>
    </>
  );
}