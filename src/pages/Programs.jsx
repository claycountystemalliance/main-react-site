import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Programs.module.css';

export default function Programs() {
  return (
    <section id="programs" className={styles.programs}>
      <div className="container">
        <h3 className="section-title">STEM Opportunities We Provide</h3>
        
        <div className={styles.programsGrid}>
          <div className={styles.programCard}>
            <div className={styles.icon}>🤖</div>
            <h4><Link to="/programs/robotics">Competitive Robotics</Link></h4>
            <p>FIRST Inspires FTC Challenge teams, FIRST LEGO League, VEX Robotics, and custom robotics projects. Students learn engineering, programming, and teamwork while competing at regional and state levels.</p>
          </div>

          <div className={styles.programCard}>
            <div className={styles.icon}>💻</div>
            <h4><Link to="/programs/programming">Programming & Tech</Link></h4>
            <p>Comprehensive coding education including Python, Java, web development, mobile apps, and emerging technologies like AI and machine learning. From beginners to advanced programmers.</p>
          </div>

          <div className={styles.programCard}>
            <div className={styles.icon}>🛠️</div>
            <h4><Link to="/programs/maker">Maker Workshops</Link></h4>
            <p>Hands-on engineering projects featuring 3D printing, electronics, woodworking, and fabrication. Students bring their ideas to life while learning practical skills.</p>
          </div>

          <div className={styles.programCard}>
            <div className={styles.icon}>🌱</div>
            <h4><Link to="/programs/community">Community Innovation</Link></h4>
            <p>Real-world challenges addressing local needs including environmental solutions, accessibility improvements, and civic technology projects that make a difference.</p>
          </div>

          <div className={styles.programCard}>
            <div className={styles.icon}>🔬</div>
            <h4>STEM Clubs</h4>
            <p>Math clubs, Science Olympiad teams, engineering challenges, and interdisciplinary projects that connect multiple STEM fields for comprehensive learning.</p>
          </div>

          <div className={styles.programCard}>
            <div className={styles.icon}>🏆</div>
            <h4>Competition Support</h4>
            <p>Support for local, regional, and national STEM competitions including science fairs, math competitions, robotics tournaments, and innovation challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
}