export interface Skill {
  id?: string;
  name: string;
}

export interface Experience {
  id?: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills?: string[];
  internshipLetterLink?: string;
}

export interface Project {
  id?: string;
  name:string;
  description: string;
  tools: string[];
  githubRepo?: string;
  deploymentLink?: string;
  note?: string;
  status?: 'ongoing';
}

export interface Achievement {
  id?: string;
  title: string;
  issuingOrganization: string;
  date: string;
  description: string;
  certificateLink?: string;
  type: 'achievement' | 'certificate';
  skills?: string[];
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface PortfolioData {
  name: string;
  introduction: string;
  avatarUrl: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  achievements: Achievement[];
  contact: Contact;
}
