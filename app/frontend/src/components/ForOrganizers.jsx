"import { Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const ForOrganizers = () => {
  return (
    <section 
      id=\"organizers\"
      className=\"py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30\"
      data-testid=\"organizers-section\"
    >
      <div className=\"max-w-4xl mx-auto text-center\">
        <div className=\"glass rounded-2xl p-8 md:p-12\">
          <div className=\"w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6\">
            <Users className=\"w-7 h-7 text-primary\" />
          </div>

          <h2 className=\"font-heading text-3xl md:text-4xl font-normal text-foreground mb-4\">
            Для организаторов ретритов
          </h2>
          
          <p className=\"text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto\">
            Calmy помогает организаторам находить свою аудиторию среди городских жителей, 
            которые ищут качественные программы для восстановления.
          </p>

          <div className=\"flex flex-col sm:flex-row justify-center gap-4 mb-8\">
            <div className=\"flex items-center gap-2 text-sm text-foreground/70\">
              <CheckCircle className=\"w-4 h-4 text-primary\" />
              <span>Понятные правила отбора</span>
            </div>
            <div className=\"flex items-center gap-2 text-sm text-foreground/70\">
              <CheckCircle className=\"w-4 h-4 text-primary\" />
              <span>Целевая аудитория</span>
            </div>
            <div className=\"flex items-center gap-2 text-sm text-foreground/70\">
              <CheckCircle className=\"w-4 h-4 text-primary\" />
              <span>Детальные карточки программ</span>
            </div>
          </div>

          <Button 
            variant=\"outline\"
            className=\"border-primary/30 text-primary hover:bg-primary/10 rounded-full px-8\"
            onClick={() => window.open('mailto:partners@calmy.ru', '_blank')}
            data-testid=\"organizer-contact-btn\"
          >
            Оставить заявку на размещение
            <ArrowRight className=\"w-4 h-4 ml-2\" />
          </Button>

          <p className=\"text-xs text-foreground/50 mt-4\">
            Напишите нам на partners@calmy.ru или в Telegram @calmy_partners
          </p>
        </div>
      </div>
    </section>
  );
};
"
