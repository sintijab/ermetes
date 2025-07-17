import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Wrench, Construction, ClipboardCheck, Users, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap = {
  building: Building,
  wrench: Wrench,
  construction: Construction,
  'clipboard-check': ClipboardCheck,
};

const serviceImages = ['./assets/construction-1.jpg', './assets/construction-2.jpg', './assets/construction-3.jpeg', './assets/construction-4.jpeg'];

const ServicesSection = () => {
  const { content } = useLanguage();
  // Modal logic removed
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.querySelectorAll('[data-service-panel]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        const elementTop = window.scrollY + rect.top;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="relative bg-white">
      {/* Section Header */}
      <div className="bg-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-light text-[#00338D] mb-6">
            {content.services.title}
          </h2>
          <p className="text-xl text-gray-600 font-light">
            {content.services.subtitle}
          </p>
        </div>
      </div>

      {/* Scroll-Triggered Services Timeline */}
      <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50/50" ref={containerRef}>
        {/* Center Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00338D]/60 via-[#00338D]/80 to-[#00338D]/60">
          <div className="sticky top-1/2 -translate-y-1/2">
            <div className="w-16 h-16 -ml-8 bg-gradient-to-br from-[#00338D] to-[#0066CC] rounded-full flex items-center justify-center text-white transition-all duration-500 transform shadow-xl border-4 border-white">
              {(() => {
                const IconComponent = iconMap[content.services.items[activeIndex]?.icon as keyof typeof iconMap] || Building;
                return <IconComponent className="h-8 w-8" />;
              })()}
            </div>
          </div>
        </div>

        {/* Service Panels */}
        <div className="relative max-w-7xl mx-auto">
          {content.services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Building;
            const serviceImage = serviceImages[index];
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                data-service-panel
                className={`flex items-center min-h-screen py-20 ${
                  index % 2 === 0 ? "justify-start pl-8" : "justify-end pr-8"
                }`}
              >
                <div className="w-full max-w-2xl">
                  <div 
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-700 shadow-2xl ${
                      isActive ? "scale-105 shadow-3xl" : "scale-100 hover:scale-102"
                    } bg-white/90 backdrop-blur-sm`}
                    style={{
                      transformOrigin: index % 2 === 0 ? "left center" : "right center",
                    }}
                  >
                    {/* Service Image Section */}
                    <div className="relative h-80">
                      <img
                        src={serviceImage}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 via-[#000000]/40 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>

                      {/* Basic Content */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <h3 className="text-3xl font-light text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed font-light">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Expanded Content - Shows when active */}
                    {isActive && (
                      <div className="bg-white p-8 animate-fade-in border-t border-gray-200">
                        {service.details && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(service.details).map(([key, value], detailIndex) => (
                              <div key={detailIndex} className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00338D]/10 flex items-center justify-center mt-1">
                                  <Users className="h-5 w-5 text-[#00338D]" />
                                </div>
                                <div>
                                  <h4 className="font-medium text-[#00338D] mb-2 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                  </h4>
                                  <p className="text-gray-600 font-light leading-relaxed">
                                    {value}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Company Information Section */}
      <div id="about" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-[#00338D]/5 to-[#00338D]/10 rounded-2xl p-8 border border-[#00338D]/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#00338D]/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#00338D]" />
                </div>
                <h3 className="text-3xl font-light text-[#00338D]">{content.about.title}</h3>
              </div>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                {content.about.description}
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                {content.about.mission}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-[#00338D]/5 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-3xl font-light text-[#00338D]">{content.about.sustainability.title}</h3>
              </div>
              <p className="text-gray-600 font-light mb-6 leading-relaxed">
                {content.about.sustainability.description}
              </p>
              <div className="relative">
                <img 
                  src='./assets/architectural-planning.jpg' 
                  alt="Sustainable Planning"
                  className="w-full h-40 object-cover rounded-lg object-[55%_45%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#00338D] to-[#0066CC] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-light text-white mb-6">
            {content.services.ctaTitle}
          </h3>
          <p className="text-xl text-white/90 font-light mb-8">
            {content.services.ctaDescription}
          </p>
          {/* Removed modal trigger button for quote request */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;