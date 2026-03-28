import { ArrowRight, Shield, Clock, Compass } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = ({ onQuizOpen, onCatalogScroll }) => {
  const benefits = [
    { icon: Shield, text: "Проверенные организаторы и безопасные форматы" },
    { icon: Clock, text: "Экономия времени — всё в одном месте" },
    { icon: Compass, text: "Программы под ваше состояние и цели" },
  ];

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'https://alpgreensolutions.com/en/wp-content/uploads/sites/13/slider/cache/151e86f8498629baa0daae4f55b95fd5/fullwidthbg2.jpg',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,17,15,0.3), rgba(5,17,15,0.85), rgba(5,17,15,1))",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <p
            className="font-accent text-xl md:text-2xl text-primary mb-4 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Найди свой покой
          </p>

          {/* Main Headline */}
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
            data-testid="hero-title"
          >
            Ретриты и цифровой детокс в&nbsp;Подмосковье
          </h1>

          {/* Subheadline */}
          <p
            className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.3s" }}
            data-testid="hero-subtitle"
          >
            Агрегатор программ для городских жителей, которым нужна пауза.
            Собрали проверенные форматы от разных организаторов — чтобы вы
            нашли свой способ восстановиться, даже если пока не знаете, что
            именно ищете.
          </p>

          {/* Benefits */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-foreground/70"
              >
                <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              onClick={onQuizOpen}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 rounded-full font-medium text-base transition-all duration-300 hover:shadow-[0_0_25px_rgba(82,183,136,0.4)] hover:scale-[1.02] active:scale-[0.98]"
              data-testid="hero-quiz-btn"
            >
              Пройти короткий опрос
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={onCatalogScroll}
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 h-14 px-8 rounded-full font-medium text-base transition-all duration-300"
              data-testid="hero-catalog-btn"
            >
              Смотреть все программы
            </Button>
          </div>

          {/* Atmosphere text */}
          <p
            className="text-sm text-foreground/50 italic animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Лес, тишина, запах хвои — и ни одного уведомления.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        data-testid="scroll-indicator"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};
