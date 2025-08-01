import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";


const ProjectsScroll = () => {
  const { content } = useLanguage();
  const projectsScroll = content.projectsScroll;
  const projects = projectsScroll?.projects || [];
  const categories = (projectsScroll?.categories && projectsScroll.categories.length > 0)
    ? projectsScroll.categories
    : ["All"];
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Reset selectedCategory to 'All' when categories change (i.e., language switch)
  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [categories]);

  // Normalize category names for filtering (handle translation/case)
  const normalize = (str: string) => str.trim().toLowerCase().replace(/\s+/g, " ");
  let filteredProjects = projects;
  if (categories.length > 0 && selectedCategory && normalize(selectedCategory) !== normalize(categories[0])) {
    filteredProjects = projects.filter(project => normalize(project.category) === normalize(selectedCategory));
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.children[1].children;
      const scrollPosition = window.scrollY - containerRef.current.offsetTop;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight / 2
        ) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProjects.length]);

  return (
    <section id="projects">
      {/* Category Filter */}
      <div className="bg-background sm:py-2 md:py-6 sticky top-16 z-40 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:mb-4 md:mb-8">
            <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-4">
              {projectsScroll?.title || 'Our Projects'}
            </h2>
            <p className="md:text-xl sm:text-md text-muted-foreground max-w-3xl mx-auto font-light">
              {projectsScroll?.subtitle || 'Explore our work and its social impact in the community'}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                    : "hover:bg-primary/10 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Projects - Light background integration */}
      <div className="relative min-h-screen bg-gradient-to-b from-background/90 to-muted/50" ref={containerRef}>
        {/* Center Line - Lighter style */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-accent/60 to-primary/60">
          <div className="sticky top-1/2 -translate-y-1/2">
            <div className="w-16 h-16 -ml-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl transition-all duration-500 transform shadow-xl border-4 border-background/80">
              {filteredProjects[activeIndex]?.icon}
            </div>
          </div>
        </div>

        {/* Project Panels */}
        <div className="relative max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex items-center min-h-screen ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-full max-w-xl p-8">
                <div 
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl ${
                    activeIndex === index ? "scale-110 shadow-3xl" : "scale-100 hover:scale-105"
                  }`}
                  style={{
                    transformOrigin: index % 2 === 0 ? "left center" : "right center",
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm transition-all duration-300 group-hover:from-black/70" />
                    {project.image && <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <Badge variant="secondary" className="w-fit mb-4 bg-white/90 text-foreground font-semibold px-3 py-1">
                        {project.category}
                      </Badge>
                       <Badge 
                            variant={project.status === "Completato" ? "default" : "secondary"} 
                            className="mb-4 w-fit"
                          >
                            {project.status}
                          </Badge>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {project.description}
                      </p>
                      
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {activeIndex === index && (
                    <div 
                      className="relative inset-0 bg-[#00338D]/95 backdrop-blur-md p-8 pb-12 animate-fade-in"
                    >
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-3xl">{project.icon}</div>
                          </div>
                          <p className="text-white/90 mb-6 leading-relaxed">
                            {project.extendedInfo}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <p className="text-white/70 text-sm">Durata</p>
                              <p className="text-white font-semibold">{project.duration}</p>
                            </div>
                            <div>
                              <p className="text-white/70 text-sm">Budget</p>
                              <p className="text-white font-semibold">{project.budget}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.features.map((feature, i) => (
                              <Badge key={i} variant="outline" className="text-white border-white/30">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-3 w-full items-stretch flex flex-col">
                          <Button 
                            className="w-full bg-primary hover:bg-primary/90"
                            size="lg"
                            onClick={() => {
                              setTimeout(() => {
                                const element = document.getElementById('quote');
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' });
                                }
                              }, 100);
                            }}
                          >
                            {content.projectsScroll?.quoteButton || content.hero.cta}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsScroll;