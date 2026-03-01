"import { Leaf, Heart } from 'lucide-react';
import { Separator } from './ui/separator';

export const Footer = () => {
  const links = [
    { label: 'О сервисе', href: '#about' },
    { label: 'Каталог программ', href: '#catalog' },
    { label: 'Для организаторов', href: '#organizers' },
    { label: 'Политика конфиденциальности', href: '#privacy' },
    { label: 'Контакты', href: 'mailto:hello@calmy.ru' }
  ];

  return (
    <footer 
      className=\"py-12 px-6 md:px-12 lg:px-24 bg-card/50 border-t border-border/50\"
      data-testid=\"footer\"
    >
      <div className=\"max-w-7xl mx-auto\">
        {/* Disclaimer */}
        <div className=\"glass rounded-xl p-6 mb-8\">
          <p className=\"text-sm text-foreground/60 leading-relaxed\">
            <strong className=\"text-foreground/80\">Важно:</strong> Сервис Calmy не заменяет 
            медицинскую или психотерапевтическую помощь. При серьёзных психических состояниях, 
            депрессии или тревожных расстройствах важно обращаться к квалифицированным специалистам. 
            Участие в программах — добровольный и осознанный выбор каждого.
          </p>
        </div>

        <Separator className=\"bg-border/30 mb-8\" />

        <div className=\"flex flex-col md:flex-row justify-between items-center gap-6\">
          {/* Logo */}
          <div className=\"flex items-center gap-2\">
            <Leaf className=\"w-6 h-6 text-primary\" />
            <span className=\"font-heading text-xl font-medium text-foreground\">Calmy</span>
          </div>

          {/* Links */}
          <nav className=\"flex flex-wrap justify-center gap-x-6 gap-y-2\">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className=\"text-sm text-foreground/60 hover:text-foreground transition-colors\"
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className=\"flex items-center gap-1 text-sm text-foreground/50\">
            <span>© 2025 Calmy</span>
            <span className=\"mx-1\">•</span>
            <span className=\"flex items-center gap-1\">
              Сделано с <Heart className=\"w-3 h-3 text-accent\" /> в Москве
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
"
