import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import QuoteForm from "@/components/quote/QuoteForm";

const QuoteDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="w-full bg-primary/90 text-white font-medium px-6 py-3 rounded-md shadow hover:bg-primary text-lg" onClick={() => setOpen(true)}>
          Richiedi Preventivo Gratuito
        </button>
      </DrawerTrigger>
      <DrawerContent className="max-w-lg mx-auto w-full p-0 border-none bg-background">
        <QuoteForm />
      </DrawerContent>
    </Drawer>
  );
};

export default QuoteDrawer;
