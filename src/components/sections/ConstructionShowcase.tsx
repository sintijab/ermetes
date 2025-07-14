import React from 'react';

const ConstructionShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            I Nostri Progetti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esempi della nostra esperienza in edilizia e costruzioni moderne
          </p>
        </div>

        {/* Construction Photos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* First Project */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <video 
                src='./assets/construction-1.mp4'
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">Costruzione Residenziale</h3>
                <p className="text-white/90">Progetto di edilizia sostenibile con tecnologie innovative</p>
              </div>
            </div>
          </div>

          {/* Second Project */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src='./assets/construction-2.jpg' 
                alt="Cantiere moderno con tecnologie avanzate"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">Ristrutturazione Urbana</h3>
                <p className="text-white/90">Riqualificazione di edifici esistenti con impatto sociale</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Progettazione</h3>
            <p className="text-muted-foreground">Analisi approfondita e progettazione personalizzata per ogni esigenza</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Costruzione</h3>
            <p className="text-muted-foreground">Realizzazione con materiali di qualità e tecniche all'avanguardia</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Consegna</h3>
            <p className="text-muted-foreground">Consegna puntuale e supporto post-vendita garantito</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionShowcase;