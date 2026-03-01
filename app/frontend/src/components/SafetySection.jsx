"import { ShieldCheck, UserCheck, FileCheck, MessageSquare, AlertTriangle } from 'lucide-react';

export const SafetySection = () => {
  const safetyPoints = [
    {
      icon: UserCheck,
      title: 'Проверка ведущих',
      description: 'Смотрим на опыт, образование и подход каждого организатора'
    },
    {
      icon: FileCheck,
      title: 'Понятные описания',
      description: 'Чёткая информация о формате, нагрузке и ограничениях'
    },
    {
      icon: ShieldCheck,
      title: 'Блок безопасности',
      description: 'В каждой карточке — кто ведёт и какие правила'
    },
    {
      icon: MessageSquare,
      title: 'Реальные отзывы',
      description: 'Собираем обратную связь от участников программ'
    },
    {
      icon: AlertTriangle,
      title: 'Честные ограничения',
      description: 'Указываем, кому программа может не подойти'
    }
  ];

  return (
    <section 
      className=\"py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30\"
      data-testid=\"safety-section\"
    >
      <div className=\"max-w-7xl mx-auto\">
        <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center\">
          {/* Left - Text content */}
          <div>
            <p className=\"font-accent text-xl text-primary mb-3\">Ваша безопасность</p>
            <h2 className=\"font-heading text-4xl md:text-5xl font-normal text-foreground mb-6\">
              Прозрачность и доверие
            </h2>
            
            <p className=\"text-foreground/80 leading-relaxed mb-6\">
              Мы понимаем, что выбор ретрита — это вопрос доверия. Поэтому проверяем 
              организаторов и программы по базовым критериям, следим за тем, чтобы 
              описания были понятными, и не публикуем форматы с агрессивными практиками 
              или сомнительной этикой.
            </p>

            <p className=\"text-foreground/60 text-sm\">
              Собираем отзывы и оценки участников, чтобы вы могли принять осознанное решение.
            </p>
          </div>

          {/* Right - Safety points */}
          <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">
            {safetyPoints.map((point, index) => (
              <div 
                key={index}
                className={`glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 ${
                  index === safetyPoints.length - 1 && safetyPoints.length % 2 !== 0 
                    ? 'sm:col-span-2 sm:max-w-[50%] sm:mx-auto' 
                    : ''
                }`}
                data-testid={`safety-point-${index + 1}`}
              >
                <div className=\"w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3\">
                  <point.icon className=\"w-5 h-5 text-primary\" />
                </div>
                <h3 className=\"font-medium text-foreground mb-1\">{point.title}</h3>
                <p className=\"text-sm text-foreground/60\">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
"
