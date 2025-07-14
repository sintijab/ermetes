import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ArticlesSection = () => {
  const { articles } = useLanguage();

  return (
    <section id="articles" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Articoli e Novità
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resta aggiornato sulle ultime novità del settore e sui nostri progetti
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Card 
              key={article.id} 
              className="bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              {/* Article Image */}
              <div className="aspect-video bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="text-muted-foreground">Immagine Articolo</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString('it-IT')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit mb-2">
                  {article.category}
                </Badge>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </CardDescription>
                <Button variant="outline" className="w-full group/btn">
                  Leggi Articolo
                  <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media Integration */}
        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Seguici sui Social Media
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Resta connesso con noi per vedere i nostri progetti in tempo reale e le ultime novità dal mondo dell'edilizia
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="outline" 
              className="min-w-[200px]"
              onClick={() => window.open('https://sprout.link/sundtbuilds', '_blank')}
            >
              Visita il nostro Linktree
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
            <Button 
              className="min-w-[200px] bg-primary hover:bg-primary/90"
              onClick={() => {
                const element = document.getElementById('quote');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Richiedi Preventivo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;