import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-foreground">Ermetes</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {content.navigation.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {content.navigation.services}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {content.navigation.about}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {content.navigation.projects}
              </button>
              <button
                onClick={() => scrollToSection('articles')}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {content.navigation.articles}
              </button>
            </div>
          </div>

          {/* Language Switcher and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('it')}>
                  Italiano
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              onClick={() => scrollToSection('quote')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {content.navigation.quote}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
            >
              {content.navigation.home}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
            >
              {content.navigation.services}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
            >
              {content.navigation.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
            >
              {content.navigation.projects}
            </button>
            <button
              onClick={() => scrollToSection('articles')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
            >
              {content.navigation.articles}
            </button>
            <div className="px-3 py-2 flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Globe className="h-4 w-4 mr-2" />
                    {language.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('it')}>
                    Italiano
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                onClick={() => scrollToSection('quote')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {content.navigation.quote}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;