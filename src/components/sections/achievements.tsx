'use client';
import type { Achievement } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Badge } from '../ui/badge';

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'certificate' | 'achievement'>('All');

  const filteredAchievements = activeFilter === 'All'
    ? achievements
    : achievements.filter(a => a.type === activeFilter);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="achievements" className="space-y-12 scroll-mt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Achievements & Certifications</h2>
      </div>
      
      <div className="flex justify-center flex-wrap gap-2">
        <Button
          variant={activeFilter === 'All' ? 'default' : 'outline'}
          className="rounded-full"
          onClick={() => setActiveFilter('All')}
        >
          All
        </Button>
        <Button
          variant={activeFilter === 'certificate' ? 'default' : 'outline'}
          className="rounded-full"
          onClick={() => setActiveFilter('certificate')}
        >
          Certificates
        </Button>
        <Button
          variant={activeFilter === 'achievement' ? 'default' : 'outline'}
          className="rounded-full"
          onClick={() => setActiveFilter('achievement')}
        >
          Achievements
        </Button>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        key={activeFilter}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredAchievements.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="flex flex-col bg-card border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 h-full">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  {item.type === 'certificate' ? <ShieldCheck className="w-6 h-6 text-primary mt-1 shrink-0" /> : <Award className="w-6 h-6 text-primary mt-1 shrink-0" />}
                  <div className="flex-1">
                    {item.title}
                    <p className="text-sm font-normal text-muted-foreground mt-1">{item.issuingOrganization} - {item.date}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-sm">{item.description}</p>
                 {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              {item.certificateLink && (
                <CardFooter className="mt-auto pt-4 border-t border-border">
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </Link>
                  </Button>
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
        {filteredAchievements.length === 0 && (
          <p className="text-muted-foreground col-span-full text-center">
            No {activeFilter !== 'All' ? activeFilter.toLowerCase() + 's' : 'items'} to display yet.
          </p>
        )}
      </motion.div>
    </section>
  );
}
