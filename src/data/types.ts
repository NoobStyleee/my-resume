// src/data/types.ts
export interface ResumeFile {
  name: string;
  language: 'json' | 'typescript' | 'markdown';
  icon: string;
  content: string;
}