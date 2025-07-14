import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, ArrowLeft, Calculator, Building, User, FileText, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const InlineQuoteForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    address: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (isStepValid()) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    } else {
      toast({
        title: "Campi richiesti mancanti",
        description: "Compila tutti i campi richiesti per continuare.",
        variant: "destructive",
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    console.log(formData);
    toast({
      title: "Richiesta inviata!",
      description: "Ti contatteremo entro 24 ore per il preventivo gratuito.",
    });
    
    // Reset form
    setFormData({
      projectType: '',
      projectDetails: '',
      budget: '',
      timeline: '',
      address: '',
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    setCurrentStep(1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType && formData.projectDetails;
      case 2:
        return formData.budget && formData.timeline && formData.address;
      case 3:
        return formData.name && formData.phone && formData.email;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const projectTypes = [
    "Nuova Costruzione",
    "Ristrutturazione", 
    "Manutenzione",
    "Consulenza Tecnica",
    "Altro"
  ];

  const budgetRanges = [
    "Meno di €10.000",
    "€10.000 - €25.000",
    "€25.000 - €50.000",
    "€50.000 - €100.000",
    "Oltre €100.000"
  ];

  const timelineOptions = [
    "Entro 1 mese",
    "1-3 mesi",
    "3-6 mesi",
    "6-12 mesi",
    "Oltre 12 mesi"
  ];

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return Building;
      case 2: return FileText;
      case 3: return User;
      case 4: return CheckCircle;
      default: return Building;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Tipo di Progetto *</label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white placeholder:text-white/70">
                  <SelectValue placeholder="Seleziona il tipo di progetto" />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border">
                  {projectTypes.map((type, index) => (
                    <SelectItem key={index} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Descrizione del Progetto *</label>
              <Textarea
                placeholder="Descrivi brevemente il tuo progetto..."
                value={formData.projectDetails}
                onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-[100px]"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Budget Stimato *</label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white placeholder:text-white/70">
                  <SelectValue placeholder="Seleziona il budget" />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border">
                  {budgetRanges.map((range, index) => (
                    <SelectItem key={index} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Tempistiche *</label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white placeholder:text-white/70">
                  <SelectValue placeholder="Quando vorresti iniziare?" />
                </SelectTrigger>
                <SelectContent className="bg-popover border border-border">
                  {timelineOptions.map((option, index) => (
                    <SelectItem key={index} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Indirizzo del Progetto *</label>
              <Input
                type="text"
                placeholder="Via, Città, CAP"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Nome Completo *</label>
              <Input
                type="text"
                placeholder="Il tuo nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Telefono *</label>
              <Input
                type="tel"
                placeholder="Il tuo numero di telefono"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email *</label>
              <Input
                type="email"
                placeholder="La tua email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Messaggio (Opzionale)</label>
              <Textarea
                placeholder="Qualcosa da aggiungere?"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
            <h3 className="text-xl font-medium text-white">Riepilogo Richiesta</h3>
            <div className="bg-white/10 rounded-lg p-4 text-left text-white/90 space-y-2">
              <p><strong>Progetto:</strong> {formData.projectType}</p>
              <p><strong>Budget:</strong> {formData.budget}</p>
              <p><strong>Timeline:</strong> {formData.timeline}</p>
              <p><strong>Indirizzo:</strong> {formData.address}</p>
              <p><strong>Contatto:</strong> {formData.name} - {formData.phone}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const stepTitles = [
    "Tipo di Progetto",
    "Dettagli e Budget", 
    "Informazioni di Contatto",
    "Conferma"
  ];

  const StepIcon = getStepIcon(currentStep);
  const progress = (currentStep / 4) * 100;

  return (
    <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center mb-4">
          <Calculator className="h-5 w-5 text-white mr-2" />
          <CardTitle className="text-lg font-medium text-white">Preventivo Gratuito</CardTitle>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>Passo {currentStep} di 4</span>
            <span>{Math.round(progress)}% completato</span>
          </div>
          <Progress value={progress} className="h-2 bg-white/20" />
        </div>
        
        <div className="flex items-center mt-4">
          <StepIcon className="h-5 w-5 text-white mr-2" />
          <h3 className="text-base font-medium text-white">{stepTitles[currentStep - 1]}</h3>
        </div>
      </CardHeader>
      
      <CardContent>
        {renderStep()}
        
        <div className="flex justify-between mt-6">
          {currentStep > 1 && (
            <Button 
              onClick={handlePrevious}
              variant="outline"
              className="bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Indietro
            </Button>
          )}
          
          <div className="ml-auto">
            {currentStep < 4 ? (
              <Button 
                onClick={handleNext}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                Avanti
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                Invia Richiesta
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InlineQuoteForm;