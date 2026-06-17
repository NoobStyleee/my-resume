'use client';

import React from 'react';
import styles from './StatusBar.module.css';

export default function StatusBar() {
  return (
    <footer className={styles.statusBar}>
      <div className={styles.leftSection}>
        <div className={styles.gitBranch}>
          <span className={styles.icon}>🌿</span>
          <span>main</span>
        </div>
        
        <div className={styles.syncIcon}>🔄</div>

        <div className={styles.socialsContainer}>
          <a 
            href="https://github.com/NoobStyleee" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.statusLink}
          >
            <span className={styles.errorIcon}>✕</span> 
            <span className={styles.linkText}>0 GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/michael-noobstyle-roedelbronn"
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.statusLink}
          >
            <span className={styles.warningIcon}>⚠</span> 
            <span className={styles.linkText}>0 LinkedIn</span>
          </a>
        </div>
      </div>

      <div className={styles.rightSection}>
        <span className={styles.item}>Ln 1, Col 1</span>
        <span className={styles.item}>Spaces: 2</span>
        <span className={styles.item}>UTF-8</span>
        <span className={`${styles.item} ${styles.techStack}`}>⚡ Next.js v15</span>
      </div>
    </footer>
  );
}