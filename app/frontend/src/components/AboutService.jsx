import { Heart, Eye, Shield, Sparkles } from 'lucide-react';

export const AboutService = () => {
  const principles = [
    { icon: Eye, text: 'Прозрачность во всём' },
    { icon: Heart, text: 'Уважение к человеку' },
    { icon: Shield, text: 'Безопасность прежде всего' },
    { icon: Sparkles, text: 'Никакой агрессивной мотивации' }
  ];

  return (
    <section 
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="font-accent text-xl text-primary mb-3">Кто мы</p>
            <h2 className="font-heading text-4xl md:text-5xl font-normal text-foreground mb-6">
              О сервисе Calmy
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Calmy создан командой, которая сама прошла через выгорание, тревогу 
                и бесконечный поиск «того самого» ретрита. Мы знаем, как сложно 
                выбирать среди сотен предложений, не понимая, кому можно доверять.
              </p>
              
              <p>
                Наша цель — упростить поиск честных и понятных программ для жителей 
                города. Мы верим в бережный подход к психике и против любых 
                манипулятивных техник.
              </p>
              
              <p className="text-foreground/60 text-sm">
                В планах: расширение географии, больше программ, отдельные подборки 
                для компаний и корпоративных запросов.
              </p>
            </div>
          </div>

          {/* Right - Principles */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-medium text-foreground mb-6">
              Наши принципы
            </h3>
            
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/30 hover:bg-background/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{principle.text}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-foreground/50 mt-6 italic">
              Отсутствие сектантства и агрессивных практик — наше обязательное условие
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
