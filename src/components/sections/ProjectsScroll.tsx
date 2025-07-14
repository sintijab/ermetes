import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Residenza Green Valley",
    category: "Edilizia Residenziale",
    description: "Complesso residenziale eco-sostenibile con 24 appartamenti e spazi comuni",
    image: './assets/residential-project.jpg',
    icon: "🏠",
    extendedInfo: "Progetto di edilizia sostenibile che combina tecnologie innovative e design moderno. Include pannelli solari, sistema di raccolta acqua piovana e giardini pensili per massimizzare l'efficienza energetica. Il progetto ha coinvolto 8 persone in percorsi di inserimento lavorativo.",
    status: "Completato",
    duration: "18 mesi",
    budget: "€ 2.8M",
    features: ["Classe A4", "Pannelli Solari", "Giardini Pensili", "Smart Home"]
  },
  {
    title: "Ristrutturazione Palazzo Storico",
    category: "Ristrutturazione",
    description: "Recupero conservativo di palazzo del XVI secolo nel centro storico di Trento",
    image: './assets/historic-renovation.jpg',
    icon: "🏛️",
    extendedInfo: "Intervento di restauro che ha preservato l'architettura storica integrando tecnologie moderne. Collaborazione con la Soprintendenza per mantenere l'autenticità dell'edificio. 6 persone hanno acquisito competenze specialistiche in restauro.",
    status: "In corso",
    duration: "24 mesi",
    budget: "€ 1.5M",
    features: ["Restauro Conservativo", "Antisismico", "Efficienza Energetica", "Accessibilità"]
  },
  {
    title: "Centro Sociale San Martino",
    category: "Impatto Sociale",
    description: "Nuovo centro comunitario con spazi per attività sociali e formazione professionale",
    image: './assets/community-center.jpg',
    icon: "🤝",
    extendedInfo: "Progetto che ha coinvolto 15 persone svantaggiate nel processo costruttivo, offrendo formazione e opportunità lavorative. Il centro ospita attività per la comunità locale e rappresenta un modello di costruzione sociale.",
    status: "Completato",
    duration: "12 mesi",
    budget: "€ 850K",
    features: ["Inserimento Lavorativo", "Formazione", "Spazi Comuni", "Barrier-Free"]
  },
  {
    title: "Manutenzione Scuole Provinciali",
    category: "Manutenzione",
    description: "Programma di manutenzione straordinaria per 12 istituti scolastici del Trentino",
    video: './assets/maintenance.mp4',
    icon: "🔧",
    extendedInfo: "Interventi coordinati di manutenzione che hanno coinvolto squadre miste con personale qualificato e persone in inserimento lavorativo, garantendo standard di sicurezza elevati. 25 persone hanno completato percorsi formativi.",
    status: "In corso",
    duration: "36 mesi",
    budget: "€ 3.2M",
    features: ["Sicurezza", "Efficienza", "Formazione", "Sostenibilità"]
  }
];

const categories = ["Tutti", "Edilizia Residenziale", "Ristrutturazione", "Impatto Sociale", "Manutenzione"];

const ProjectsScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Tutti");

  const filteredProjects = selectedCategory === "Tutti" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
      {/* Category Filter - Skanska style */}
      <div className="bg-background py-12 sticky top-16 z-40 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
              I Nostri Progetti
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Esplora i nostri lavori e il loro impatto sociale nella comunità
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">{/* Skanska-style spacing */}
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
                    {project.video && <video
                      src={project.video}
                      className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />}
                    {project.image && <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <Badge variant="secondary" className="w-fit mb-4 bg-white/90 text-foreground font-semibold px-3 py-1">
                        {project.category}
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
                      className="absolute inset-0 bg-[#00338D]/95 backdrop-blur-md p-8 animate-fade-in"
                    >
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-3xl font-bold text-white">
                              {project.title}
                            </h3>
                            <div className="text-3xl">{project.icon}</div>
                          </div>
                          
                          <Badge 
                            variant={project.status === "Completato" ? "default" : "secondary"} 
                            className="mb-4"
                          >
                            {project.status}
                          </Badge>
                          
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
                        
                        <div className="space-y-3">
                          <Button 
                            className="w-full bg-primary hover:bg-primary/90"
                            size="lg"
                            onClick={() => {
                              const element = document.getElementById('quote');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }}
                          >
                            Richiedi Preventivo Simile
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-white text-white hover:bg-white hover:text-foreground"
                            size="lg"
                          >
                            Maggiori Dettagli
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