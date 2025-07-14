import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, X } from "lucide-react";
// Using uploaded image directly
// import ermetesLogo from "@/assets/ermetes-logo.png";

const ModernNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { key: "projects", label: "Progetti" },
    { key: "services", label: "Servizi" },
    { key: "about", label: "Chi Siamo" },
    { key: "articles", label: "Magazine" },
    { key: "contact", label: "Contatti" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 dm-sans-light ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="./assets/logo.png" 
              alt="Ermetes Multiservizi" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="text-foreground/80 transition-colors font-light text-md tracking-wide hover:text-[#FFAA00] focus:text-[#FFAA00]"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-foreground/80">
                  <Globe className="h-4 w-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border">
                <DropdownMenuItem
                  onClick={() => setLanguage("it")}
                  className="cursor-pointer"
                >
                  Italiano
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className="cursor-pointer"
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => scrollToSection("hero")}
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-light dm-sans-light"
            >
              Preventivo Gratuito
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/10 bg-background/95 backdrop-blur-md">
            <div className="py-4 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-colors font-light"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="px-4 pt-3 border-t border-border/10">
                <div className="flex items-center justify-between">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Globe className="h-4 w-4 mr-2" />
                        {language.toUpperCase()}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setLanguage("it")}>
                        Italiano
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage("en")}>
                        English
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    onClick={() => scrollToSection("hero")}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Preventivo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavigation;