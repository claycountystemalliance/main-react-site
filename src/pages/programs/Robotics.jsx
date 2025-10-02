import React from 'react';
import { Link } from 'react-router-dom';
import ProgramHero from '../../components/programs/ProgramHero';
import styles from '../../styles/components/ProgramDetail.module.css';

export default function Robotics() {
  return (
    <>
      <ProgramHero 
        icon="🤖" 
        title="Competitive Robotics"
        subtitle="FIRST Lego Leauge (FLL) • FIRST Tech Challenge (FTC) • FIRST Robotics Challenge (FRC) • Team Building • Engineering Excellence"
      />

      <section className={styles.programContent}>
        <div className="container">
          <div className={styles.programSection}>
            <h3>Program Overview</h3>
            <p>Our competitive robotics program offers three levels of FIRST Inspires competitions, allowing students to grow from elementary through high school in increasingly complex robotics challenges.</p>
            
            <h4>FIRST LEGO League (FLL) - Grades 4-8</h4>
            <p><strong>Team Size:</strong> 2-10 students | <strong>Time:</strong> 4-6 hours/week | <strong>Season:</strong> August - December</p>
            <p>Students use LEGO robotics kits to solve real-world problems. Teams design, build, and program autonomous robots while researching innovative solutions to annual challenge themes.</p>

            <h4>FIRST Tech Challenge (FTC) - Grades 7-12</h4>
            <p><strong>Team Size:</strong> 6-15 students | <strong>Time:</strong> 8-12 hours/week | <strong>Season:</strong> October - March</p>
            <p>Our flagship program where students design, build, and program sophisticated robots using metal components, motors, and sensors. Teams compete in regional and state championships with potential for national advancement.</p>
            
            <p><strong>Our FTC Teams:</strong></p>
            <ul>
              <li><a href="https://32149.claycountystemalliance.org" target="_blank" rel="noopener noreferrer">Team 32149 - Robo Runnerz</a></li>
            </ul>

            <h4>FIRST Robotics Competition (FRC) - Grades 9-12</h4>
            <p><strong>Team Size:</strong> 15-30 students | <strong>Time:</strong> 15-20 hours/week | <strong>Season:</strong> January - April</p>
            <p>The ultimate high school robotics challenge. Teams build full-size robots (up to 125 lbs) using industrial-grade materials and compete in high-energy matches. This is engineering at a professional level with substantial scholarship opportunities.</p>
          </div>

          <div className={styles.programSection}>
            <h3>What Students Learn</h3>
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightCard}>
                <h4>Engineering Design</h4>
                <p>CAD modeling, prototyping, mechanical systems, and professional design processes.</p>
              </div>
              <div className={styles.highlightCard}>
                <h4>Programming</h4>
                <p>Java, Blocks, and Python for robot control and autonomous operations.</p>
              </div>
              <div className={styles.highlightCard}>
                <h4>Teamwork & Leadership</h4>
                <p>Collaboration, communication, project management, and gracious professionalism.</p>
              </div>
              <div className={styles.highlightCard}>
                <h4>Problem Solving</h4>
                <p>Critical thinking, iterative design, troubleshooting, and creative solutions.</p>
              </div>
            </div>
          </div>

          <div className={styles.programSection}>
            <h3>Why FIRST Robotics?</h3>
            <p>Students gain:</p>
            <ul>
              <li><strong>Real Engineering:</strong> Professional tools, software, and design processes</li>
              <li><strong>Proven Results:</strong> 88% of FTC alumni pursue STEM degrees</li>
              <li><strong>Scholarships:</strong> Millions in scholarships available annually</li>
              <li><strong>College Boost:</strong> Robotics experience strengthens applications</li>
              <li><strong>National Network:</strong> Connections with thousands of teams and mentors</li>
              <li><strong>Life Skills:</strong> Leadership, teamwork, and problem-solving</li>
            </ul>
          </div>

          <div className={styles.programSection}>
            <h3>Cost to Families: FREE</h3>
            <p>Thanks to grants and community support, participation is <strong>completely free</strong>. We cover all costs including registration, materials, tools, software, uniforms, and competition expenses.</p>
          </div>

          <div className={styles.ctaBox}>
            <h3>Ready to Build Robots?</h3>
            <p>Join a team for the 2025-2026 season!</p>
            <Link to="/contact" className="btn">Get Started Today</Link>
          </div>
        </div>
      </section>
    </>
  );
}