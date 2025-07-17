import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ConstructionShowcase = () => {
  const { content } = useLanguage();
  const showcase = content.constructionShowcase;
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {showcase.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {showcase.subtitle}
          </p>
        </div>

        {/* Construction Photos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {showcase.projects.map((project: any, idx: number) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                {project.type === 'video' ? (
                  <video src={project.src} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <img src={project.src} alt={project.alt} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcase.features.map((feature: any, idx: number) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{feature.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionShowcase;