import React from 'react';
import styles from '../../styles/components/ProgramDetail.module.css';

export default function ProgramHero({ icon, title, subtitle }) {
  return (
    <section className={styles.programHero}>
      <div className="container">
        <div className={styles.icon}>{icon}</div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}