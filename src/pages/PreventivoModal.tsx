import React from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import InlineQuoteForm from "@/components/quote/InlineQuoteForm";
import { useModal } from "@/contexts/ModalContext";

const PreventivoModal = () => {
  const { isOpen, closeModal } = useModal();
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogOverlay className="fixed inset-0 bg-white/60 backdrop-blur-2xl" />
      <DialogContent className="bg-white text-neutral-900">
        <InlineQuoteForm />
      </DialogContent>
    </Dialog>
  );
};

export default PreventivoModal;
