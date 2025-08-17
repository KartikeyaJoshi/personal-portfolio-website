import type { Contact } from '@/lib/types';
import { Button } from '../ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

interface ContactSectionProps {
  contact: Contact;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="text-center space-y-8 py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold">Get In Touch</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild variant="outline" size="lg" className="border-input bg-transparent hover:bg-transparent hover:border-primary text-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30">
          <Link href={`mailto:${contact.email}`}>
            <Mail className="mr-2 h-5 w-5" /> Email Me
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-input bg-transparent hover:bg-transparent hover:border-primary text-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30">
          <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-input bg-transparent hover:bg-transparent hover:border-primary text-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30">
          <Link href={contact.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-5 w-5" /> GitHub
          </Link>
        </Button>
      </div>
    </section>
  );
}
