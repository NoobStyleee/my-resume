'use client';

import React, { useState } from 'react';
import styles from './FloatingPDFButton.module.css';

export default function FloatingPDFButton() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <button 
        className={styles.collapsedBtn} 
        onClick={() => setIsVisible(true)}
        title="Download PDF Resume"
      >
        📄 PDF
      </button>
    );
  }

  return (
    <div className={styles.notificationToast}>
      <div className={styles.header}>
        <span className={styles.bell}>🔔</span>
        <span className={styles.title}>System Notification</span>
        <button className={styles.closeTopBtn} onClick={() => setIsVisible(false)}>✕</button>
      </div>
      <div className={styles.body}>
        <p className={styles.message}>
          Need an ATS-optimized copy of my profile for your HR database?
        </p>
        <div className={styles.actions}>
          <a 
            href="/michael_roedelbronn_resume.pdf"
            download
            className={styles.primaryBtn}
          >
            Download PDF
          </a>
          <button className={styles.secondaryBtn} onClick={() => setIsVisible(false)}>
            Don't show again
          </button>
        </div>
      </div>
    </div>
  );
}