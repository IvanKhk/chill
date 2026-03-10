import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';

export const FinalCTA = ({ onQuizOpen, onCatalogScroll }) => {
  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      data-testid="final-cta-section"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-accent text-xl text-primary mb-4">Готовы?</p>
        
        <h2 className="font-heading text-4xl md:text-5xl font-normal text-foreground mb-6">
          Сделайте первый шаг
        </h2>
        
        <p className="text-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Не обязательно сразу ехать на неделю. Начните с короткого опроса или 
          посмотрите программы на ближайшие выходные. Попробуйте формат — и 
          почувствуйте разницу.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={onQuizOpen}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 rounded-full font-medium text-base transition-all duration-300 hover:shadow-[0_0_25px_rgba(82,183,136,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            data-testid="final-quiz-btn"
          >
            Пройти короткий опрос
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            onClick={onCatalogScroll}
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10 h-14 px-8 rounded-full font-medium text-base transition-all duration-300"
            data-testid="final-catalog-btn"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Программы на выходные
          </Button>
        </div>

        <p className="text-sm text-foreground/50 mt-8 italic">
          Тишина ближе, чем кажется
        </p>
      </div>
    </section>
  );
};
