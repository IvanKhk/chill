import { Quote } from 'lucide-react';
import { testimonials } from '../data/programs';

export const Testimonials = () => {
  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-accent text-xl text-primary mb-3">Реальные истории</p>
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-foreground mb-4">
            Отзывы
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Что говорят те, кто уже нашёл свою программу через Calmy
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              data-testid={`testimonial-${index + 1}`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Before */}
              <div className="mb-4">
                <span className="text-xs text-foreground/50 uppercase tracking-wide">До:</span>
                <p className="text-sm text-foreground/60 italic mt-1">
                  {testimonial.before}
                </p>
              </div>

              {/* After */}
              <div className="mb-6">
                <span className="text-xs text-foreground/50 uppercase tracking-wide">После:</span>
                <p className="text-foreground/90 leading-relaxed mt-1 font-accent text-lg">
                  {testimonial.after}
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-border/50">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary/70">{testimonial.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
