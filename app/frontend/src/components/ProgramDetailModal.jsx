"import { 
  X, MapPin, Clock, Users, Smartphone, Calendar, Check, 
  AlertCircle, User, ExternalLink, Phone, Mail, MessageCircle 
} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';

export const ProgramDetailModal = ({ program, isOpen, onClose }) => {
  if (!program) return null;

  const getDetoxLevelLabel = (level) => {
    switch (level) {
      case 'soft': return 'Мягкий';
      case 'medium': return 'Средний';
      case 'strict': return 'Строгий';
      default: return level;
    }
  };

  const getDetoxLevelColor = (level) => {
    switch (level) {
      case 'soft': return 'bg-green-500/20 text-green-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'strict': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getContactIcon = (type) => {
    switch (type) {
      case 'telegram': return MessageCircle;
      case 'phone': return Phone;
      case 'email': return Mail;
      default: return ExternalLink;
    }
  };

  const ContactIcon = getContactIcon(program.contactInfo.type);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className=\"max-w-3xl max-h-[90vh] bg-card border-border p-0 overflow-hidden\"
        data-testid=\"program-detail-modal\"
      >
        <DialogTitle className=\"sr-only\">{program.title}</DialogTitle>
        
        <ScrollArea className=\"max-h-[90vh]\">
          {/* Header Image */}
          <div className=\"relative h-64 md:h-80\">
            <img 
              src={program.image}
              alt={program.title}
              className=\"w-full h-full object-cover\"
            />
            <div className=\"absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent\" />
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className=\"absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors\"
              data-testid=\"modal-close-btn\"
            >
              <X className=\"w-5 h-5\" />
            </button>

            {/* Title overlay */}
            <div className=\"absolute bottom-0 left-0 right-0 p-6\">
              <div className=\"flex flex-wrap gap-2 mb-3\">
                {program.badges.map((badge, i) => (
                  <Badge key={i} variant=\"secondary\" className=\"bg-primary/20 text-primary border-primary/30\">
                    {badge}
                  </Badge>
                ))}
              </div>
              <h2 className=\"font-heading text-3xl md:text-4xl font-medium text-foreground\">
                {program.title}
              </h2>
            </div>
          </div>

          <div className=\"p-6 space-y-8\">
            {/* Quick Info */}
            <div className=\"grid grid-cols-2 md:grid-cols-4 gap-4\">
              <div className=\"glass rounded-xl p-4 text-center\">
                <MapPin className=\"w-5 h-5 text-primary mx-auto mb-2\" />
                <p className=\"text-xs text-foreground/60 mb-1\">Локация</p>
                <p className=\"text-sm font-medium text-foreground\">{program.region === 'moscow' ? 'Москва' : 'Подмосковье'}</p>
              </div>
              <div className=\"glass rounded-xl p-4 text-center\">
                <Clock className=\"w-5 h-5 text-primary mx-auto mb-2\" />
                <p className=\"text-xs text-foreground/60 mb-1\">Длительность</p>
                <p className=\"text-sm font-medium text-foreground\">{program.durationText}</p>
              </div>
              <div className=\"glass rounded-xl p-4 text-center\">
                <Users className=\"w-5 h-5 text-primary mx-auto mb-2\" />
                <p className=\"text-xs text-foreground/60 mb-1\">Группа</p>
                <p className=\"text-sm font-medium text-foreground\">{program.groupSize}</p>
              </div>
              <div className=\"glass rounded-xl p-4 text-center\">
                <Smartphone className=\"w-5 h-5 text-primary mx-auto mb-2\" />
                <p className=\"text-xs text-foreground/60 mb-1\">Детокс</p>
                <p className={`text-sm font-medium ${getDetoxLevelColor(program.digitalDetoxLevel).split(' ')[1]}`}>
                  {getDetoxLevelLabel(program.digitalDetoxLevel)}
                </p>
              </div>
            </div>

            {/* Description */}
            <section>
              <h3 className=\"font-heading text-xl font-medium text-foreground mb-3\">О программе</h3>
              <p className=\"text-foreground/80 leading-relaxed\">{program.fullDescription}</p>
            </section>

            <Separator className=\"bg-border/50\" />

            {/* For Whom */}
            <section>
              <h3 className=\"font-heading text-xl font-medium text-foreground mb-3\">Для кого</h3>
              <p className=\"text-foreground/80\">{program.forWhom}</p>
            </section>

            <Separator className=\"bg-border/50\" />

            {/* Program Schedule */}
            <section>
              <h3 className=\"font-heading text-xl font-medium text-foreground mb-4\">Программа по дням</h3>
              <div className=\"space-y-4\">
                {program.programDays.map((day, index) => (
                  <div key={index} className=\"glass rounded-xl p-4\">
                    <h4 className=\"font-medium text-primary mb-3 flex items-center gap-2\">
                      <Calendar className=\"w-4 h-4\" />
                      {day.day}
                    </h4>
                    <ul className=\"space-y-2\">
                      {day.activities.map((activity, i) => (
                        <li key={i} className=\"text-sm text-foreground/70 flex items-start gap-2\">
                          <span className=\"text-primary mt-1\">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <Separator className=\"bg-border/50\" />

            {/* Accommodation */}
            <section>
              <h3 className=\"font-heading text-xl font-medium text-foreground mb-3\">Условия проживания</h3>
              <p className=\"text-foreground/80\">{program.accommodation}</p>
            </section>

            <Separator className=\"bg-border/50\" />

            {/* Digital Detox Rules */}
            <section>
              <h3 className=\"font-heading text-xl font-medium text-foreground mb-3\">Правила цифрового детокса</h3>
              <div className={`p-4 rounded-xl ${getDetoxLevelColor(program.digitalDetoxLevel)} bg-opacity-10`}>
                <div className=\"flex items-center gap-2 mb-2\">
                  <Smartphone className=\"w-4 h-4\" />
                  <span className=\"font-medium\">{getDetoxLevelLabel(program.digitalDetoxLevel)} уровень</span>
                </div>
                <p className=\"text-sm opacity-90\">{program.detoxRules}</p>
              </div>
            </section>

            <Separator className=\"bg-border/50\" />

            {/* Hosts */}
            <section>
              <h3 className=\"font-heading text-xl font-medium text-foreground mb-4\">Ведущие</h3>
              <div className=\"space-y-4\">
                {program.hosts.map((host, index) => (
                  <div key={index} className=\"flex items-start gap-4\">
                    <div className=\"w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0\">
                      <User className=\"w-6 h-6 text-primary\" />
                    </div>
                    <div>
                      <h4 className=\"font-medium text-foreground\">{host.name}</h4>
                      <p className=\"text-sm text-primary mb-1\">{host.role}</p>
                      <p className=\"text-sm text-foreground/60\">{host.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className=\"bg-border/50\" />

            {/* Expected Results */}
            <section>
              <h3 className=\"font-heading text-xl font-medium text-foreground mb-4\">Вы почувствуете</h3>
              <ul className=\"space-y-2\">
                {program.expectedResults.map((result, index) => (
                  <li key={index} className=\"flex items-start gap-3 text-foreground/80\">
                    <Check className=\"w-5 h-5 text-primary flex-shrink-0 mt-0.5\" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Separator className=\"bg-border/50\" />

            {/* Not Suitable For */}
            <section>
              <h3 className=\"font-heading text-xl font-medium text-foreground mb-4\">Кому может не подойти</h3>
              <div className=\"glass rounded-xl p-4 border-accent/20\">
                <ul className=\"space-y-2\">
                  {program.notSuitableFor.map((item, index) => (
                    <li key={index} className=\"flex items-start gap-3 text-foreground/70\">
                      <AlertCircle className=\"w-5 h-5 text-accent flex-shrink-0 mt-0.5\" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <Separator className=\"bg-border/50\" />

            {/* Price */}
            <section>
              <h3 className=\"font-heading text-xl font-medium text-foreground mb-3\">Стоимость</h3>
              <div className=\"glass rounded-xl p-6\">
                <div className=\"flex items-baseline gap-2 mb-2\">
                  <span className=\"font-heading text-4xl font-medium text-primary\">
                    {program.price.toLocaleString('ru-RU')}
                  </span>
                  <span className=\"text-xl text-foreground/60\">₽</span>
                </div>
                <p className=\"text-foreground/70 mb-2\">В стоимость входит: {program.priceIncluded}</p>
                <p className=\"text-sm text-foreground/50\">Даты: {program.dates}</p>
              </div>
            </section>

            {/* CTA */}
            <div className=\"pt-4\">
              <Button 
                size=\"lg\"
                className=\"w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-full font-medium text-base transition-all duration-300 hover:shadow-[0_0_25px_rgba(82,183,136,0.4)]\"
                onClick={() => {
                  if (program.contactInfo.type === 'telegram') {
                    window.open(`https://t.me/${program.contactInfo.value.replace('@', '')}`, '_blank');
                  } else if (program.contactInfo.type === 'email') {
                    window.open(`mailto:${program.contactInfo.value}`, '_blank');
                  } else if (program.contactInfo.type === 'phone') {
                    window.open(`tel:${program.contactInfo.value}`, '_blank');
                  } else {
                    window.open(program.contactInfo.value, '_blank');
                  }
                }}
                data-testid=\"contact-organizer-btn\"
              >
                <ContactIcon className=\"w-5 h-5 mr-2\" />
                {program.contactInfo.label}
              </Button>
              <p className=\"text-center text-xs text-foreground/50 mt-3\">
                Бронирование и вопросы — напрямую у организатора
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
"
