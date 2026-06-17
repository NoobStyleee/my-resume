'use client';

import React from 'react';
import styles from './Tabs.module.css';
import { resumeFiles } from '../../data/files';

interface TabsProps {
  openTabs: string[];
  activeFile: string;
  onTabSelect: (fileName: string) => void;
  onTabClose: (fileName: string, e: React.MouseEvent) => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function Tabs({ openTabs, activeFile, onTabSelect, onTabClose, toggleSidebar, isSidebarOpen }: TabsProps) {
  return (
    <header className={styles.tabsContainer}>
      <button 
        className={`${styles.menuToggle} ${isSidebarOpen ? styles.menuToggleActive : ''}`} 
        onClick={toggleSidebar}
        title="Toggle File Explorer"
      >
        📂 {isSidebarOpen ? 'Hide' : 'Files'}
      </button>

      <div className={styles.tabsScrollArea}>
        {openTabs.map((tabName) => {
          const file = resumeFiles[tabName];
          const isActive = activeFile === tabName;
          
          return (
            <div
              key={tabName}
              onClick={() => onTabSelect(tabName)}
              className={`${styles.tab} ${isActive ? styles.activeTab : ''}`}
            >
              <span>{file?.icon}</span>
              <span className={styles.tabNameText}>{tabName}</span>
              <button 
                onClick={(e) => onTabClose(tabName, e)}
                className={styles.closeBtn}
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>
    </header>
  );
}