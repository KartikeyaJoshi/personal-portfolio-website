'use client';
import type { PortfolioData } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Typewriter } from '../typewriter';
import { Mouse } from 'lucide-react';

interface HeroSectionProps {
  data: Pick<PortfolioData, 'name' | 'introduction' | 'avatarUrl'>;
}

export function HeroSection({ data }: HeroSectionProps) {
  const typewriterTexts = [
    `Hi, I'm ${data.name}`,
    "A Business Minded Developer",
  ];

  return (
    <section id="about" className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center space-y-6 scroll-mt-20">
      <div className="flex flex-col items-center text-center space-y-6">
        <Avatar className="h-32 w-32 border-4 border-primary/50 shadow-lg">
          <AvatarImage src={data.avatarUrl} alt={data.name} data-ai-hint="profile picture" />
          <AvatarFallback>{data.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight h-20 md:h-auto">
            <Typewriter texts={typewriterTexts} />
          </h1>
          <p className="font-mono text-lg md:text-xl text-foreground max-w-3xl mx-auto text-justify px-4">
            {data.introduction}
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Mouse className="w-8 h-8 text-primary animate-bounce" />
      </div>
    </section>
  );
}
