import { Search, ListFilter, FileText, MessageCircle } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Определите свой запрос',
      description: 'Что вам сейчас нужно? Снизить тревогу, выспаться, отключиться от экранов или просто побыть в тишине. Даже если вы не уверены — это нормально.'
    },
    {
      icon: ListFilter,
      number: '02',
      title: 'Пройдите опрос или используйте фильтры',
      description: 'Короткий опрос из 5 вопросов подберёт подходящие программы. Или используйте фильтры, если знаете, что ищете.'
    },
    {
      icon: FileText,
      number: '03',
      title: 'Изучите карточки программ',
      description: 'Каждая карточка содержит подробное описание: формат, расписание, условия, кто ведёт и что вы получите. Никаких сюрпризов.'
    },
    {
      icon: MessageCircle,
      number: '04',
      title: 'Свяжитесь с организатором напрямую',
      description: 'Задайте вопросы и забронируйте место через контакты в карточке. Мы не посредники — вы общаетесь напрямую.'
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30"
      data-testid="how-it-works-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-accent text-xl text-primary mb-3">Просто и понятно</p>
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Без регистрации, без звонков «вслепую», без навязчивых продаж
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
              data-testid={`step-${index + 1}`}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] right-0 h-px bg-border/50 -z-10" />
              )}

              <div className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 hover-lift">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Number */}
                <span className="font-accent text-3xl text-primary/30 mb-2 block">
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-foreground/50 text-sm italic">
            Весь процесс занимает несколько минут — от выбора до контакта с организатором
          </p>
        </div>
      </div>
    </section>
  );
};

