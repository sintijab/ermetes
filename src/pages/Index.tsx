
import React from "react";
import ConstructionBackground from "@/components/background/ConstructionBackground";
import ModernNavigation from "@/components/navigation/ModernNavigation";
import ConstructionHero from "@/components/hero/ConstructionHero";
import ServicesSection from "@/components/sections/ServicesSection";
import ModernProjectsSection from "@/components/sections/ModernProjectsSection";
import ProjectsScroll from "@/components/sections/ProjectsScroll";
import EditorialSection from "@/components/sections/EditorialSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ConstructionBackground />
      <div className="relative z-10">
        <ModernNavigation />
        <ConstructionHero />
        <ServicesSection />
        <ProjectsScroll />
        <EditorialSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
