import type { Experience } from '@/lib/types';
import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="space-y-8 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center">Professional Experience</h2>
      <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="mb-10 ml-8 md:ml-10"
          >
            <span
              className={cn(
                'absolute -left-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background ring-8 ring-background',
                index === 0 && 'animate-ripple'
              )}
            >
            </span>
            <div className="p-4 bg-card rounded-lg border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
              <p className="text-md font-medium text-muted-foreground">{exp.company}</p>
              <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground/80">{exp.duration}</time>
              <p className="text-sm font-normal text-primary/90">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4 items-center">
                {exp.skills && exp.skills.length > 0 && (
                    exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    ))
                )}
                {exp.internshipLetterLink && (
                  <Button asChild variant="link" className="p-0 text-primary h-auto ml-auto">
                    <Link href={exp.internshipLetterLink} target="_blank" rel="noopener noreferrer">
                      View Internship Letter
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
