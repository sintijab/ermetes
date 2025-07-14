import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const EditorialSection = () => {
  const articles: Article[] = [
    {
      id: "1",
      title: "Il Futuro dell'Edilizia Sociale: Innovazione e Sostenibilità",
      excerpt: "Come Ermetes sta ridefinendo l'approccio alle costruzioni attraverso l'integrazione sociale e la sostenibilità ambientale. Un percorso che unisce innovazione tecnica e impatto sociale.",
      author: "Marco Rossi",
      date: "15 Gen 2025",
      readTime: "8 min",
      category: "Sostenibilità",
      image: "./assets/2ff42d78-4162-4525-bbd3-005d00407fc8.png",
      featured: true
    },
    {
      id: "2",
      title: "Restauro e Tradizione: L'Arte del Recupero Edilizio",
      excerpt: "Tecniche tradizionali e moderne si incontrano nei progetti di restauro. Un viaggio attraverso i nostri cantieri più significativi.",
      author: "Elena Bianchi",
      date: "12 Gen 2025",
      readTime: "6 min",
      category: "Restauro",
      image: "./assets/community-center.jpg"
    },
    {
      id: "3",
      title: "Manutenzione Stradale: Sicurezza e Innovazione",
      excerpt: "I nostri team specializzati garantiscono interventi rapidi e sicuri per la manutenzione delle infrastrutture stradali del territorio.",
      author: "Giuseppe Verdi",
      date: "10 Gen 2025",
      readTime: "5 min",
      category: "Infrastrutture",
      image: "./assets/construction-3.jpeg"
    },
    {
      id: "4",
      title: "Cooperazione e Lavoro: Il Modello Ermetes",
      excerpt: "Come la nostra cooperativa sociale sta trasformando vite attraverso il lavoro e la formazione professionale.",
      author: "Anna Verde",
      date: "8 Gen 2025",
      readTime: "7 min",
      category: "Sociale",
      image: "./assets/a5ef1125-5ab0-4a60-a8ca-fec86e3a73b1.png"
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section id="articles" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-editorial text-foreground mb-6">
            Magazine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Storie, progetti e riflessioni dal mondo dell'edilizia sociale e della sostenibilità
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <Card className="overflow-hidden border-0 shadow-lg bg-card">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {featuredArticle.category}
                  </Badge>
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-start">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <span>{featuredArticle.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-editorial text-foreground mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-lg">
                    {featuredArticle.excerpt}
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-card">
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-white text-xs">
                  {article.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <h4 className="text-xl font-editorial text-foreground mb-3 leading-tight">
                  {article.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {article.excerpt}
                </p>
                <div className="mt-4 text-xs text-muted-foreground">
                  {article.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;