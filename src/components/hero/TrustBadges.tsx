
import { Shield, Clock, Award } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const TrustBadges = () => {
  const { content } = useLanguage();
  const badges = [
    { icon: Shield, text: content.trustBadges.badge1 },
    { icon: Clock, text: content.trustBadges.badge2 },
    { icon: Award, text: content.trustBadges.badge3 },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-8 animate-fade-up [animation-delay:600ms]">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center text-white/90">
          <badge.icon className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;