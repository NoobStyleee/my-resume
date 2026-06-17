'use client';

import React from 'react';
import styles from './Sidebar.module.css';
import { resumeFiles } from '../../data/files';

interface SidebarProps {
  isOpen: boolean;
  activeFile: string;
  onFileSelect: (fileName: string) => void;
  onClose: () => void;
}

export default function Sidebar({ isOpen, activeFile, onFileSelect, onClose }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.headerRow}>
        <div className={styles.title}>Explorer: Resume</div>
        <button className={styles.mobileCloseBtn} onClick={onClose}>✕</button>
      </div>
      <nav className={styles.nav}>
        {Object.values(resumeFiles).map((file) => {
          const isActive = activeFile === file.name;
          return (
            <div
              key={file.name}
              onClick={() => onFileSelect(file.name)}
              className={`${styles.fileItem} ${isActive ? styles.active : ''}`}
            >
              <span className={styles.icon}>{file.icon}</span>
              <span className={styles.fileName}>{file.name}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}