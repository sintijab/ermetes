import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/quote/QuoteForm";
import QuoteDrawer from "@/components/quote/QuoteDrawer";

const InlineQuoteCTA = () => {
  const [showForm, setShowForm] = useState(false);
  if (showForm) {
    return (
      <div className="mb-8 p-6 bg-white/80 border border-primary rounded-lg shadow flex flex-col items-center">
        <QuoteDrawer />
      </div>
    );
  }
  return (
    <div className="mb-8 p-6 bg-white/80 border border-primary rounded-lg shadow flex flex-col items-center">
      <h2 className="text-xl font-semibold text-primary mb-2">Richiedi Preventivo Gratuito</h2>
      <p className="text-base text-primary/80 mb-4 text-center">Scopri le soluzioni su misura per la tua copertura in legno. Clicca qui per ricevere una consulenza personalizzata senza impegno.</p>
      <Button size="lg" className="bg-primary/90 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-primary" onClick={() => setShowForm(true)}>
        Richiedi Preventivo Gratuito
      </Button>
    </div>
  );
};

export default InlineQuoteCTA;
