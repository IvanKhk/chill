import { MapPin, Clock, Users, Smartphone, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

export const ProgramCard = ({ program, onClick }) => {
  const getDetoxLevelLabel = (level) => {
    switch (level) {
      case 'soft': return 'Мягкий детокс';
      case 'medium': return 'Средний детокс';
      case 'strict': return 'Строгий детокс';
      default: return level;
    }
  };

  const getDetoxLevelColor = (level) => {
    switch (level) {
      case 'soft': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'strict': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getIntensityLabel = (intensity) => {
    switch (intensity) {
      case 'soft': return 'Мягко';
      case 'moderate': return 'Умеренно';
      case 'deep': return 'Глубоко';
      default: return intensity;
    }
  };

  return (
    <Card 
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer hover-lift"
      onClick={() => onClick(program)}
      data-testid={`program-card-${program.id}`}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img 
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Badges on image */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge 
            className={`${getDetoxLevelColor(program.digitalDetoxLevel)} border text-xs font-medium`}
          >
            <Smartphone className="w-3 h-3 mr-1" />
            {getDetoxLevelLabel(program.digitalDetoxLevel)}
          </Badge>
        </div>

        {/* Price tag */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border/50">
            <span className="font-heading text-lg font-medium text-foreground">
              {program.price.toLocaleString('ru-RU')} ₽
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
          {program.title}
        </h3>

        {/* Location & Duration */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground/60 mb-3">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-primary/70" />
            <span>{program.location.split(',')[0]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary/70" />
            <span>{program.durationText}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {program.shortDescription}
        </p>

        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-foreground/50">
            <Users className="w-3.5 h-3.5" />
            <span>{program.groupSize}</span>
          </div>
          <span className="text-foreground/30">•</span>
          <div className="flex items-center gap-1.5 text-xs text-foreground/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{getIntensityLabel(program.intensity)}</span>
          </div>
        </div>

        {/* For whom */}
        <p className="text-xs text-primary/80 italic">
          {program.forWhom.length > 80 ? program.forWhom.slice(0, 80) + '...' : program.forWhom}
        </p>
      </div>

      {/* Hover overlay indicator */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-300 pointer-events-none" />
    </Card>
  );
};
