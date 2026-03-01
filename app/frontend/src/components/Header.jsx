"import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export const Header = ({ onQuizOpen, onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Каталог', href: '#catalog' },
    { label: 'Как это работает', href: '#how-it-works' },
    { label: 'О сервисе', href: '#about' },
    { label: 'Для организаторов', href: '#organizers' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (onScrollTo) {
      onScrollTo(href);
    }
  };

  return (
    <header 
      className=\"fixed top-0 left-0 right-0 z-50 glass-strong\"
      data-testid=\"header\"
    >
      <div className=\"max-w-7xl mx-auto px-6 md:px-12 lg:px-24\">
        <div className=\"flex items-center justify-between h-16 md:h-20\">
          {/* Logo */}
          <a 
            href=\"/\" 
            className=\"flex items-center gap-2 group\"
            data-testid=\"logo-link\"
          >
            <Leaf className=\"w-7 h-7 text-primary transition-transform group-hover:rotate-12\" />
            <span className=\"font-heading text-2xl md:text-3xl font-medium text-foreground\">
              Calmy
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className=\"hidden md:flex items-center gap-8\" data-testid=\"desktop-nav\">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className=\"text-sm font-medium text-foreground/70 hover:text-foreground transition-colors\"
                data-testid={`nav-${item.href.slice(1)}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className=\"hidden md:block\">
            <Button 
              onClick={onQuizOpen}
              className=\"bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 h-10 font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(82,183,136,0.3)]\"
              data-testid=\"header-quiz-btn\"
            >
              Подобрать программу
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className=\"md:hidden\">
              <Button 
                variant=\"ghost\" 
                size=\"icon\" 
                className=\"text-foreground\"
                data-testid=\"mobile-menu-btn\"
              >
                <Menu className=\"w-6 h-6\" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side=\"right\" 
              className=\"w-[300px] bg-card border-border\"
              data-testid=\"mobile-menu\"
            >
              <div className=\"flex flex-col gap-6 mt-8\">
                <div className=\"flex items-center gap-2\">
                  <Leaf className=\"w-6 h-6 text-primary\" />
                  <span className=\"font-heading text-2xl font-medium\">Calmy</span>
                </div>
                
                <nav className=\"flex flex-col gap-4\">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className=\"text-left text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2\"
                      data-testid={`mobile-nav-${item.href.slice(1)}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <Button 
                  onClick={() => {
                    setIsOpen(false);
                    onQuizOpen();
                  }}
                  className=\"bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 font-medium mt-4\"
                  data-testid=\"mobile-quiz-btn\"
                >
                  Подобрать программу
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
"
