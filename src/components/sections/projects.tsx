'use client';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const allTools = Array.from(new Set(projects.flatMap(p => p.tools)));
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tools.includes(activeFilter));

    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

  return (
    <section id="projects" className="space-y-8 py-16 scroll-mt-20">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Projects Portfolio</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Below is a curated selection of my projects. Use the filters to explore projects based on the technologies used, giving you insight into my specific areas of expertise.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-2">
        <Button
          variant={activeFilter === 'All' ? 'default' : 'outline'}
          className="rounded-full"
          onClick={() => setActiveFilter('All')}
        >
          All
        </Button>
        {allTools.map(tool => (
          <Button
            key={tool}
            variant={activeFilter === tool ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter(tool)}
          >
            {tool}
          </Button>
        ))}
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
            >
            <Card
              className="flex flex-col bg-card border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 h-full"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.name}</CardTitle>
                  {project.status === 'ongoing' && (
                    <Badge className="bg-primary/20 text-primary border-primary/30">Ongoing</Badge>
                  )}
                </div>
                {project.note && (
                  <CardDescription className="text-primary font-medium">{project.note}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-2 mt-auto pt-4 border-t border-border">
                {project.githubRepo && (
                  <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Link href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {project.deploymentLink && (
                  <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Link href={project.deploymentLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
            </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
