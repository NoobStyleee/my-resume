// src/components/Editor/Editor.tsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from './Editor.module.css';
import { resumeFiles } from '../../data/files';

interface EditorProps {
  activeFile: string | null;
}

export default function Editor({ activeFile }: EditorProps) {
  const [activeTerminalTab, setActiveTerminalTab] = useState<'terminal' | 'output' | 'problems'>('terminal');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  useEffect(() => {
    const logs = [
      'noobstyleee@vercel-production:~/resume$ npm run dev',
      '▲ Next.js 15.x.x - Starting server...',
      '📡 [Ready] local: http://localhost:3000',
      '📦 [Compiling] compiling client and server assets...',
      '🧬 [Data] Loaded background profile: Michael Roedelbronn',
      '🏆 [Status] Elite Athlete discipline module initialized.',
      '💼 [Status] Entrepreneurial & Sales metrics loaded.',
      '✅ [Success] Compiled successfully in 412ms!'
    ];

    if (terminalLogs.length === 0) {
      logs.forEach((log, index) => {
        setTimeout(() => {
          setTerminalLogs((prev) => [...prev, log]);
        }, index * 250);
      });
    }
  }, []);

  const parseLinks = (text: string) => {
    const generalRegex = /(https?:\/\/[^\s"'\n]+|www\.[^\s"'\n]+|(?:\bgithub\.com|\blinkedin\.com)[^\s"'\n]*|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    
    const parts = text.split(generalRegex);

    return parts.map((part, index) => {
      if (part.match(generalRegex)) {
        let href = part;
        
        if (part.includes('@') && !part.startsWith('http')) {
          href = `mailto:${part}`;
        } 
        else if (!part.startsWith('http://') && !part.startsWith('https://')) {
          href = `https://${part}`;
        }

        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.clickableLink}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  if (!activeFile) {
    return (
      <section className={styles.emptyState}>
        <span className={styles.emptyIcon}>💻</span>
        <p>Select a file from the explorer to view my resume.</p>
      </section>
    );
  }

  const fileData = resumeFiles[activeFile];
  const lines = fileData.content.split('\n');

  return (
    <section className={styles.mainWorkspace}>
      <div className={styles.editorContainer}>
        <div className={styles.codeWrapper}>
          <div className={styles.lineNumbers}>
            {lines.map((_, index) => (
              <div key={index} className={styles.lineNumber}>
                {index + 1}
              </div>
            ))}
          </div>
          
          <pre className={styles.codePre}>
            <code>
              {lines.map((line, index) => (
                <React.Fragment key={index}>
                  {parseLinks(line)}
                  {index < lines.length - 1 && '\n'}
                </React.Fragment>
              ))}
            </code>
          </pre>
        </div>
      </div>

      <div className={styles.terminalPanel}>
        <div className={styles.terminalHeader}>
          <button 
            className={`${styles.terminalTab} ${activeTerminalTab === 'terminal' ? styles.activeTab : ''}`}
            onClick={() => setActiveTerminalTab('terminal')}
          >
            Terminal
          </button>
          <button 
            className={`${styles.terminalTab} ${activeTerminalTab === 'output' ? styles.activeTab : ''}`}
            onClick={() => setActiveTerminalTab('output')}
          >
            Output
          </button>
          <button 
            className={`${styles.terminalTab} ${activeTerminalTab === 'problems' ? styles.activeTab : ''}`}
            onClick={() => setActiveTerminalTab('problems')}
          >
            Problems <span className={styles.badge}>0</span>
          </button>
        </div>

        <div className={styles.terminalBody}>
          {activeTerminalTab === 'terminal' && (
            <div className={styles.terminalConsole}>
              {terminalLogs.map((log, i) => (
                <div key={i} className={log.includes('✅') || log.includes('📡') ? styles.successLog : log.includes('noobstyleee') ? styles.commandLog : styles.standardLog}>
                  {parseLinks(log)}
                </div>
              ))}
              <div className={styles.cursorInput}>
                <span>noobstyleee@vercel-production:~/resume$&nbsp;</span>
                <span className={styles.blinkCursor}>█</span>
              </div>
            </div>
          )}

          {activeTerminalTab === 'output' && (
            <div className={styles.outputText}>
              [info] Vercel Deployment Optimization Framework initialized. Static analysis checked. No errors found.
            </div>
          )}

          {activeTerminalTab === 'problems' && (
            <div className={styles.problemsText}>
              No problems have been detected in the workspace so far. Clean code written!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}