import React from 'react';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import styles from '../../styles/components/ProgramDetail.module.css';

export default function Programming() {
  return (
    <>
      <ProgramHero 
        icon="💻" 
        title="Programming & Technology"
        subtitle="Cloud Computing • AI & Machine Learning • Web & Mobile Development"
      />

      <section className={styles.programContent}>
        <div className="container">
          <div className={styles.programSection}>
            <h3>Program Overview</h3>
            <p>Our programming and technology courses serve students at all experience levels—from absolute beginners taking their first steps in code to advanced programmers exploring artificial intelligence and cloud computing.</p>
          </div>

          <div className={styles.programSection}>
            <h3>Learning Tracks</h3>
            
            <h4>🌐 Web Development</h4>
            <p><strong>Skills Covered:</strong> HTML, CSS, JavaScript, React</p>
            <p>Build modern, responsive websites and web applications.</p>

            <h4>📱 Mobile App Development</h4>
            <p><strong>Skills Covered:</strong> App design, user interfaces, mobile programming</p>
            <p>Create applications for iOS and Android platforms.</p>

            <h4>🐍 Python Programming</h4>
            <p><strong>Skills Covered:</strong> Python fundamentals, data structures, algorithms</p>
            <p>Master the most versatile programming language for data science, automation, and more.</p>

            <h4>☁️ Cloud Computing</h4>
            <p><strong>Skills Covered:</strong> AWS, Azure, cloud architecture</p>
            <p>Learn enterprise-level cloud technologies.</p>

            <h4>🤖 AI & Machine Learning</h4>
            <p><strong>Skills Covered:</strong> Neural networks, TensorFlow, data analysis</p>
            <p>Explore cutting-edge artificial intelligence and machine learning.</p>
          </div>

          <div className={styles.ctaBox}>
            <h3>Start Coding Today</h3>
            <p>From beginner to advanced, we have programs for every level!</p>
            <Link to="/contact" className="btn">Enroll Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}