import React from 'react';
import styles from '../styles/components/Volunteer.module.css';

export default function Volunteer() {
  return (
    <section id="volunteer" className={styles.getInvolved}>
      <div className="container">
        <h3 className="section-title" style={{color: 'white'}}>How You Can Make a Difference</h3>
        <p style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem', color: 'white'}}>
          Whether you have 2 hours a month or professional expertise to share, there's a place for you in our mission!
        </p>
        
        <div className={styles.involvementGrid}>
          <div className={styles.involvementCard}>
            <h4>🎯 Leadership Roles</h4>
            <ul>
              <li>Board of Directors</li>
              <li>Committee Chairs</li>
              <li>Program Coordinators</li>
              <li>Grant Writing Team</li>
            </ul>
          </div>

          <div className={styles.involvementCard}>
            <h4>👨‍🏫 Student Mentoring</h4>
            <ul>
              <li>Robotics Team Mentors</li>
              <li>Programming Instructors</li>
              <li>Technical Coaches</li>
              <li>Competition Support</li>
            </ul>
          </div>

          <div className={styles.involvementCard}>
            <h4>🛠️ Professional Services</h4>
            <ul>
              <li>Legal & Accounting</li>
              <li>Marketing & Design</li>
              <li>Event Planning</li>
              <li>Administrative Support</li>
            </ul>
          </div>

          <div className={styles.involvementCard}>
            <h4>🎪 Event Support</h4>
            <ul>
              <li>Fundraising Events</li>
              <li>Community Outreach</li>
              <li>Competition Transport</li>
              <li>Workshop Assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}