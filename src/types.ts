export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  role?: string; // e.g. "Developer", "Recruiter", "Friend"
}
