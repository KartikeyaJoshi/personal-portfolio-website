'use client';
import { AchievementsSection } from '@/components/sections/achievements';
import { ContactSection } from '@/components/sections/contact';
import { ExperienceSection } from '@/components/sections/experience';
import { HeroSection } from '@/components/sections/hero';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';
import { portfolioData } from '@/lib/data';
import { MotionDiv } from '@/components/motion';

const sections = [
  { component: HeroSection, props: { data: portfolioData }, id: 'hero' },
  { component: SkillsSection, props: { skills: portfolioData.skills }, id: 'skills' },
  { component: ExperienceSection, props: { experiences: portfolioData.experience }, id: 'experience' },
  { component: ProjectsSection, props: { projects: portfolioData.projects }, id: 'projects' },
  { component: AchievementsSection, props: { achievements: portfolioData.achievements }, id: 'achievements' },
  { component: ContactSection, props: { contact: portfolioData.contact }, id: 'contact' },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 pb-12 md:pb-16">
      <div className="flex flex-col gap-20 md:gap-28">
        {sections.map((section, index) => (
          <MotionDiv key={section.id} variant={section.id as any}>
            <section.component {...section.props} />
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
