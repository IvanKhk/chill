import { Brain, Monitor, Heart, ShieldQuestion } from 'lucide-react';

export const TargetAudience = () => {
  const audiences = [
    {
      icon: Brain,
      title: 'Менеджер, который не умеет выключать голову',
      description: 'Вы постоянно думаете о работе, проверяете почту перед сном и не помните, когда последний раз по-настоящему отдыхали. Вам страшно «ничего не делать», но вы чувствуете, что так больше нельзя.',
      help: 'Calmy поможет найти программу с мягким входом — где можно постепенно замедлиться без страха «потерять контроль».'
    },
    {
      icon: Monitor,
      title: 'Айтишник с постоянным чувством выгорания',
      description: 'Экран — ваш рабочий инструмент и главный источник стресса одновременно. Вы понимаете, что нужен digital detox, но не знаете, с чего начать и как прожить без телефона.',
      help: 'Подберём программу с понятным уровнем «отключения» — от мягкого до полного. С описанием, что именно будет происходить.'
    },
    {
      icon: Heart,
      title: 'Родитель, который давно не был один',
      description: 'Последние годы вы жили в режиме «всё для семьи». Хочется хотя бы пару дней тишины и заботы о себе, но есть чувство вины и страх оставить близких.',
      help: 'Покажем короткие форматы (1-2 дня) рядом с городом, чтобы первый опыт был мягким и без долгой разлуки.'
    },
    {
      icon: ShieldQuestion,
      title: 'Человек, который боится «сект»',
      description: 'Вам интересны ретриты, но пугают истории про странные практики, манипуляции и закрытые группы. Хочется отдохнуть, а не попасть в непонятную историю.',
      help: 'Мы проверяем организаторов и честно описываем формат каждой программы. В карточках — кто ведёт, какой подход, и что точно не будет.'
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      data-testid="target-audience-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-accent text-xl text-primary mb-3">Мы понимаем</p>
          <h2 className="font-heading text-4xl md:text-5xl font-normal text-foreground mb-4">
            Для кого это
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Узнаёте себя? Значит, вы в правильном месте
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              data-testid={`audience-${index + 1}`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-4">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed mb-4">
                {audience.description}
              </p>

              {/* How we help */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-primary/90 text-sm leading-relaxed">
                  <span className="font-medium">Как поможем:</span> {audience.help}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
