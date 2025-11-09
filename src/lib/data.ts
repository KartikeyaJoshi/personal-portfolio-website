import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Kartikeya Joshi",
  introduction: "I'm a passionate coder with a strong interest in business strategy and innovation. I enjoy solving complex algorithms and exploring new technologies. My enthusiasm extends to how tech can drive business growth. I combine technical skills with a strategic mindset to create impactful solutions.",
  avatarUrl: "https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/KartikeyaJoshi.jpg",
  skills: [
    { name: 'Python' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'Node.js' },
    { name: 'FastAPI' },
    { name: '.NET'},
    { name: 'MySQL'},
    { name: 'Sql Server'},
    { name: 'PostgreSQL' },
    { name: 'Docker' },
    { name: 'Google Cloud' },
    //{ name: 'n8n'},
    { name: 'Postman API' },
    { name: 'Git' }
  ],
  experience: [
    {
      role: 'Software Development .NET Intern',
      company: 'Softworld India Pvt Ltd',
      duration: 'May 2024 - July 2024',
      description: 'Worked on SwilERP, an enterprise resource planning application based on ASP.NET Framework',
      skills: ['.NET', 'Sql Server'],
      internshipLetterLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/SWIL_INTERNSHIP_CERTIFICATE_2024.pdf',
    },
    {
      role: 'Deputy Head of Promotions',
      company: 'Manipal University Jaipur',
      duration: 'Oct 2023 - Oct 2024',
      description: '',
      skills: []
    },
    {
      role: 'Google Developer Student Clubs Member',
      company: 'Manipal University Jaipur',
      duration: 'Oct 2023 - Aug 2024',
      description: '',
      skills: []
    },
  ],
  projects: [
    {
      name : 'SpendWell',
      description: 'A personal expense tracker webapp to manage expenses',
      tools: ['React', 'FastAPI', 'MongoDB'],
      githubRepo: 'https://github.com/KartikeyaJoshi/personal-expense-tracker',
      deploymentLink: 'https://spendwellnow.vercel.app'
    },
    {
      name: 'Personal Portfolio',
      description: "A website showcasing my skills and projects",
      tools: ['Next.js'],
      githubRepo: '',
      deploymentLink: '/'
    },
    {
      name: 'DSBACKUP',
      description: "Developed a Windows based backup solution that automatically uploads the user’s data to Google Cloud Storage at regular intervals",
      tools: ['Python', 'Google Cloud' ,'MySQL', 'RestAPIs'],
      note: 'Freelance project for Data Soft'
    },
    {
      name: 'Todos Management WebApp',
      description: 'Developed a CRUD Web Application for todos list management',
      tools: ['React', 'FastAPI'],
      githubRepo: 'https://github.com/KartikeyaJoshi/todosapp',
    },
    {
      name: 'KnowNews',
      description: 'Developed this website purely in React.js for fetching and displaying latest news with the help of RestAPIs',
      tools: ['React', 'RestAPIs'],
      githubRepo: 'https://github.com/KartikeyaJoshi/knownews'
    },
    {
      name: 'Data Soft - Website',
      description: "Developed a website for Data Soft, Jaipur",
      tools: ['HTML', 'CSS', 'JS'],
      deploymentLink: 'https://www.datasoftinfo.com',
      note: 'Freelance project for Data Soft'
    },
  ],
  achievements: [
    {
      title: 'Student Excellence Award',
      issuingOrganization: 'Manipal University Jaipur',
      date: 'Nov 2025',
      description: '',
      certificateLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/KARTIKEYAJOSHI_SEA_2025.jpg',
      type: 'achievement',
      skills: []
    },
    {
      title: 'Cisco Networking',
      issuingOrganization: 'Cisco',
      date: 'Oct 2025',
      description: '',
      certificateLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/CISCO_NETACAD_NETWORKING.pdf',
      type: 'certificate',
      skills: []
    },
    {
      title: 'Microsoft Azure AI Fundamentals',
      issuingOrganization: 'Microsoft',
      date: 'Apr 2025',
      description: '',
      certificateLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/MICROSOFT_AZURE_AI_KARTIKEYAJOSHI.pdf',
      type: 'certificate',
      skills: []
    },
    {
      title: 'Red Hat System Administrator',
      issuingOrganization: 'Red Hat',
      date: 'Feb 2025',
      description: '',
      certificateLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/RH124_RH134_KARTIKEYAJOSHI.pdf',
      type: 'certificate',
      skills: []
    },
    {
      title: 'CodeChef Data Structures & Algorithms',
      issuingOrganization: 'CodeChef',
      date: 'Nov 2024',
      description: '',
      certificateLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/CODECHEF_DSA_CERTIFICATE_2024.pdf',
      type: 'certificate',
      skills: ['DSA']
    },
    {
      title: 'Google Crash Course on Python',
      issuingOrganization: 'Coursera',
      date: 'Nov 2024',
      description: '',
      certificateLink: 'https://www.coursera.org/account/accomplishments/verify/1TNDJSGR8NPK',
      type: 'certificate',
      skills: ['Python', 'Google Cloud']
    },
    {
      title: 'Oracle Database Programming with SQL',
      issuingOrganization: 'Oracle',
      date: 'Nov 2024',
      description: '',
      certificateLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/ORACLE_DATABASE_PROGRAMMING_WITH_SQL_CERTIFICATE_2024.pdf',
      type: 'certificate',
      skills: ['SQL']
    },
    {
      title: 'NPTEL Data Structures & Algorithms',
      issuingOrganization: 'NPTEL',
      date: 'Oct 2024',
      description: '',
      certificateLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/NPTEL_DSA_CERTIFICATE_2024.pdf',
      type: 'certificate',
      skills: ['DSA']
    },
    {
      title: 'Cisco Python Essentials',
      issuingOrganization: 'Cisco',
      date: 'Oct 2024',
      description: '',
      certificateLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/CISCO_NETACAD_PYTHON_ESSENTIALS.pdf',
      type: 'certificate',
      skills: ['Python']
    },
    {
      title: 'Google AI Essentials',
      issuingOrganization: 'Coursera',
      date: 'Sep 2024',
      description: '',
      certificateLink: 'https://www.coursera.org/account/accomplishments/verify/Z75KIXZNHQCO',
      type: 'certificate',
      skills: ['Google Cloud']
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      issuingOrganization: 'Postman',
      date: 'Sep 2024',
      description: '',
      certificateLink: 'https://badgr.com/public/assertions/PXrN-UAISaqeoZMErdK9aQ?identity__email=kartikeyajoshi1234@gmail.com',
      type: 'certificate',
      skills: ['Postman API', 'RestAPIs']
    },
    {
      title: 'Certificate of Merit',
      issuingOrganization: 'Rukmani Birla Modern High School',
      date: 'Feb 2024',
      description: 'Achieved highest marks (94/100) in Computer Science in 12th Boards',
      certificateLink: 'https://fuxnzh3f8esmstsb.public.blob.vercel-storage.com/COM_KARTIKEYAJOSHI.jpg',
      type: 'achievement',
      skills: []
    }
  ],
  contact: {
    email: 'devkartikeyajoshi@gmail.com',
    linkedin: 'https://linkedin.com/in/kartikeyajoshii',
    github: 'https://github.com/kartikeyajoshi',
  },
};
