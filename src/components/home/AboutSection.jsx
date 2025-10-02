import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/About.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h3 className="section-title">Our Story</h3>
            
            <p>Clay County STEM Alliance Inc. is a 501(c)(3) nonprofit organization dedicated to ensuring every student has access to high-quality STEM education opportunities regardless of family financial circumstances or geographic location.</p>
            
            <p>The Clay County STEM Alliance was founded in Clay County, Florida in August 2025. The organization was born from an urgent need when budget constraints within school districts began threatening robotics teams and STEM clubs. Rather than watch talented students lose access to programs that could shape their career trajectories, concerned parents, educators, and community leaders came together to create a sustainable solution.</p>

            <h4>Why "Clay County" in Our Name</h4>
            <p>Our organization was incorporated in Clay County, Florida, where our founding members live and where our first team launched in Fall 2025. The name reflects our origin and home base, not limitations on who we serve. <strong>We support students anywhere in the United States who need STEM education opportunities.</strong></p>

            <h4>Current Operations (Fall 2025)</h4>
            <ul>
              <li><strong>Students served:</strong> 12 (11 Clay County, FL; 1 Duval County, FL)</li>
              <li><strong>Primary location:</strong> Middleburg/Orange Park area, Florida</li>
              <li><strong>Service area:</strong> Nationwide - any student can participate</li>
              <li><strong>Focus:</strong> Northeast Florida, with capability to support teams anywhere</li>
            </ul>

            <h4>Beyond Programs: Career Pathways</h4>
            <p>We don't just teach STEM—we open doors to STEM careers. Clay County STEM Alliance actively works to connect students with:</p>
            <ul>
              <li><strong>Internship Opportunities:</strong> Partnerships with local businesses and organizations to provide real-world work experience</li>
              <li><strong>Scholarship Resources:</strong> Guidance on STEM-specific scholarships and assistance with applications</li>
              <li><strong>Mentor Networks:</strong> Connections with professionals in engineering, technology, and science fields</li>
              <li><strong>College Preparation:</strong> Support for applications highlighting STEM achievements and experiences</li>
            </ul>
          </div>

          <div className={styles.highlightBox}>
            <h4>What Makes Us Different</h4>
            <ul>
              <li><strong>Student-Led Learning:</strong> Students make strategic and operational decisions within their teams, with adult mentors providing guidance rather than direction</li>
              <li><strong>Complete Financial Transparency:</strong> All financial records open to public inspection with quarterly reporting</li>
              <li><strong>All-Volunteer Operation:</strong> Zero paid staff positions; 100% of donated funds go directly to student programs</li>
              <li><strong>Accessibility First:</strong> Programs designed to be free or low-cost for all participating students</li>
              <li><strong>No Geographic Boundaries:</strong> We support students anywhere in the United States</li>
              <li><strong>Career Support:</strong> Active assistance finding internships and scholarships for our students</li>
            </ul>

            <h4>Service Model</h4>
            <p>We operate three ways:</p>
            <ol>
              <li><strong>Direct in-person teams</strong> - Currently serving Northeast Florida students</li>
              <li><strong>Satellite teams</strong> - Supporting teams in other communities with our infrastructure</li>
              <li><strong>Remote support</strong> - Mentoring and resources for students anywhere</li>
            </ol>

            <h4>Our Vision</h4>
            <p><em>A future where every student has the opportunity to discover their potential in STEM fields, building the innovators and problem-solvers of tomorrow - regardless of zip code or family income.</em></p>
          </div>
        </div>
      </div>
    </section>
  );
}