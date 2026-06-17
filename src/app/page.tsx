// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Tabs from '../components/Tabs/Tabs';
import Editor from '../components/Editor/Editor';
import StatusBar from '../components/StatusBar/StatusBar';
import FloatingPDFButton from '../components/FloatingPDFButton/FloatingPDFButton';

export default function Home() {
  const [activeFile, setActiveFile] = useState<string>('about_me.json');
  const [openTabs, setOpenTabs] = useState<string[]>(['about_me.json']);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFileSelect = (fileName: string) => {
    setActiveFile(fileName);
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleCloseTab = (fileName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedTabs = openTabs.filter(tab => tab !== fileName);
    setOpenTabs(updatedTabs);
    
    if (activeFile === fileName && updatedTabs.length > 0) {
      setActiveFile(updatedTabs[updatedTabs.length - 1]);
    } else if (updatedTabs.length === 0) {
      setActiveFile('');
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#1e1e1e] overflow-hidden relative">
      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar 
          isOpen={isSidebarOpen} 
          activeFile={activeFile} 
          onFileSelect={handleFileSelect} 
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
          <Tabs 
            openTabs={openTabs} 
            activeFile={activeFile} 
            onTabSelect={setActiveFile} 
            onTabClose={handleCloseTab} 
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            isSidebarOpen={isSidebarOpen}
          />
          <Editor activeFile={activeFile} />
        </div>
      </div>

      <StatusBar />
      <FloatingPDFButton />
    </div>
  );
}