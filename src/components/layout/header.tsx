import Link from 'next/link';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';

export function Header() {
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary">
              KJ
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map(item => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors text-foreground/80 hover:text-primary relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center ml-4">
          <ThemeToggle />
          <div className="md:hidden ml-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <span className="font-bold text-xl text-primary">Kartikeya Joshi</span>
                </Link>
                <div className="flex flex-col space-y-4">
                  {navItems.map(item => (
                    <Link key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
                      {item}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
