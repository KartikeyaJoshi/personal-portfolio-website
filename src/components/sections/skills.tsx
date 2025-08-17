'use client';
import type { Skill } from '@/lib/types';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiFastapi,
  SiDocker,
  SiGooglecloud,
  SiGit,
  SiMysql,
  SiPostman,
  SiDotnet,
  SiN8N,
  SiFirebase,
} from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";


const iconMap: { [key: string]: React.ReactNode } = {
  Python: <SiPython />,
  React: <SiReact />,
  'Next.js': <SiNextdotjs />,
  'Node.js': <SiNodedotjs />,
  MySQL: <SiMysql />,
  'Sql Server': <DiMsqlServer />,
  PostgreSQL: <SiPostgresql />,
  FastAPI: <SiFastapi />,
  Docker: <SiDocker />,
  'Google Cloud': <SiGooglecloud />,
  'Postman API': <SiPostman />,
  Git: <SiGit />,
  TypeScript: <SiTypescript />,
  '.NET': <SiDotnet />,
  n8n: <SiN8N />,
  'Firebase Studio': <SiFirebase />,
};

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="w-full py-12 md:py-16 lg:py-20 scroll-mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A showcase of the technologies and tools I excel at.
        </p>
        <div 
          className="mt-8 relative w-full overflow-hidden group py-4 
            before:absolute before:left-0 before:top-0 before:h-full before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent before:z-10
            after:absolute after:right-0 after:top-0 after:h-full after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent after:z-10"
        >
          <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center flex-shrink-0 gap-2 w-auto h-16 rounded-lg p-4 transition-all duration-300 hover:scale-110 dark:bg-card/30 dark:border dark:border-border/20 dark:shadow-sm hover:border-primary"
              >
                {iconMap[skill.name] && (
                  <div className="text-2xl text-primary">
                    {iconMap[skill.name]}
                  </div>
                )}
                <span className="text-md font-semibold text-primary">
                  {skill.name}
                </span>
              </div>
            ))}
             {skills.map((skill, index) => (
              <div
                key={`clone-${index}`}
                aria-hidden="true"
                className="flex items-center justify-center flex-shrink-0 gap-2 w-auto h-16 rounded-lg p-4 transition-all duration-300 hover:scale-110 dark:bg-card/30 dark:border dark:border-border/20 dark:shadow-sm hover:border-primary"
              >
                {iconMap[skill.name] && (
                  <div className="text-2xl text-primary">
                    {iconMap[skill.name]}
                  </div>
                )}
                <span className="text-md font-semibold text-primary">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
