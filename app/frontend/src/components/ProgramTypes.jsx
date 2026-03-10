import { Calendar, Smartphone, Brain, Sparkles, MapPin, Leaf } from 'lucide-react';
import { programTypes } from '../data/programs';

export const ProgramTypes = () => {
  const getIcon = (id) => {
    switch (id) {
      case 'weekend-retreats': return Calendar;
      case 'week-detox': return Smartphone;
      case 'antistress-psycho': return Brain;
      case 'yoga-meditation': return Sparkles;
      case 'city-days': return MapPin;
      case 'first-time': return Leaf;
      default: return Sparkles;
    }
  };

  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      data-testid="program-types-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-accent text-xl text-primary mb-3">Разные форматы</p>
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-foreground mb-4">
            Типы программ
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Разные форматы под разные запросы и количество свободного времени
          </p>
        </div>

        {/* Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programTypes.map((type, index) => {
            const Icon = getIcon(type.id);
            return (
              <div 
                key={type.id}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover-lift group"
                data-testid={`program-type-${index + 1}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                  {type.description}
                </p>

                {/* For whom */}
                <p className="text-xs text-primary/70 italic">
                  {type.forWhom}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
