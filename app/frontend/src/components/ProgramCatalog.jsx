"import { useState, useMemo } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { FilterPanel } from './FilterPanel';
import { ProgramCard } from './ProgramCard';
import { programs, categories, collections } from '../data/programs';

export const ProgramCatalog = ({ 
  onProgramClick, 
  initialFilters = {},
  quizFilters = null 
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filters, setFilters] = useState(initialFilters);
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  // Apply quiz filters when they change
  useMemo(() => {
    if (quizFilters) {
      const newFilters = {};
      Object.values(quizFilters).forEach(answer => {
        if (answer?.filterKey && answer?.filterValue) {
          // Map quiz answers to filter values
          if (answer.filterKey === 'duration') {
            newFilters.duration = answer.filterValue;
          }
          if (answer.filterKey === 'detoxLevel') {
            newFilters.detoxLevel = answer.filterValue;
          }
        }
      });
      setFilters(prev => ({ ...prev, ...newFilters }));
    }
  }, [quizFilters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({});
    setActiveCategory('all');
  };

  // Filter programs based on category and filters
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      // Category filter
      if (activeCategory !== 'all' && !program.category.includes(activeCategory)) {
        return false;
      }
      
      // Region filter
      if (filters.region && filters.region !== 'all' && program.region !== filters.region) {
        return false;
      }
      
      // Duration filter
      if (filters.duration && filters.duration !== 'all' && program.duration !== filters.duration) {
        return false;
      }
      
      // Type filter
      if (filters.type && filters.type !== 'all' && program.type !== filters.type) {
        return false;
      }
      
      // Detox level filter
      if (filters.detoxLevel && filters.detoxLevel !== 'all' && program.digitalDetoxLevel !== filters.detoxLevel) {
        return false;
      }
      
      return true;
    });
  }, [activeCategory, filters]);

  // Get programs for collections
  const getCollectionPrograms = (collectionId) => {
    const collection = collections.find(c => c.id === collectionId);
    if (!collection) return [];
    return programs.filter(p => collection.programIds.includes(p.id));
  };

  const displayPrograms = showAllPrograms ? filteredPrograms : filteredPrograms.slice(0, 6);

  return (
    <section 
      id=\"catalog\" 
      className=\"py-24 md:py-32 px-6 md:px-12 lg:px-24\"
      data-testid=\"catalog-section\"
    >
      <div className=\"max-w-7xl mx-auto\">
        {/* Section Header */}
        <div className=\"text-center mb-12\">
          <p className=\"font-accent text-xl text-primary mb-3\">Выбирайте осознанно</p>
          <h2 className=\"font-heading text-4xl md:text-5xl font-normal text-foreground mb-4\">
            Каталог программ
          </h2>
          <p className=\"text-foreground/70 max-w-2xl mx-auto\">
            Здесь собраны программы от разных организаторов. Используйте фильтры или категории, 
            чтобы найти подходящий формат. По клику откроется подробная карточка с описанием и условиями.
          </p>
        </div>

        {/* Filter Panel */}
        <div className=\"mb-8\">
          <FilterPanel 
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
          />
        </div>

        {/* Category Tabs */}
        <div className=\"mb-8 overflow-x-auto pb-2\">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className=\"bg-card/50 border border-border/50 p-1 h-auto flex-wrap\">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className=\"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 text-sm transition-all\"
                  data-testid={`category-${category.id}`}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Collections */}
        {activeCategory === 'all' && !Object.values(filters).some(v => v && v !== 'all') && (
          <div className=\"mb-12\">
            <div className=\"flex items-center gap-2 mb-6\">
              <Sparkles className=\"w-5 h-5 text-primary\" />
              <h3 className=\"font-heading text-2xl font-medium text-foreground\">Подборки</h3>
            </div>
            <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">
              {collections.map((collection) => (
                <div 
                  key={collection.id}
                  className=\"glass rounded-2xl p-6 hover:border-primary/30 transition-all cursor-pointer group\"
                  onClick={() => {
                    setActiveCategory('all');
                    // Could implement collection-specific filtering here
                  }}
                  data-testid={`collection-${collection.id}`}
                >
                  <div className=\"flex items-start justify-between mb-3\">
                    <div>
                      <h4 className=\"font-heading text-xl font-medium text-foreground group-hover:text-primary transition-colors\">
                        {collection.title}
                      </h4>
                      <p className=\"text-sm text-foreground/60 mt-1\">
                        {collection.description}
                      </p>
                    </div>
                    <ChevronRight className=\"w-5 h-5 text-foreground/30 group-hover:text-primary transition-colors\" />
                  </div>
                  <div className=\"flex flex-wrap gap-2\">
                    {getCollectionPrograms(collection.id).slice(0, 3).map((program) => (
                      <Badge 
                        key={program.id} 
                        variant=\"outline\" 
                        className=\"border-border text-foreground/60 text-xs\"
                      >
                        {program.title}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Programs Grid */}
        <div className=\"mb-8\">
          <div className=\"flex items-center justify-between mb-6\">
            <p className=\"text-foreground/60\">
              Найдено программ: <span className=\"text-primary font-medium\">{filteredPrograms.length}</span>
            </p>
          </div>

          {filteredPrograms.length > 0 ? (
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">
              {displayPrograms.map((program) => (
                <ProgramCard 
                  key={program.id}
                  program={program}
                  onClick={onProgramClick}
                />
              ))}
            </div>
          ) : (
            <div className=\"text-center py-16 glass rounded-2xl\">
              <p className=\"text-foreground/60 mb-4\">По выбранным фильтрам программ не найдено</p>
              <Button 
                variant=\"outline\" 
                onClick={clearFilters}
                className=\"border-primary/30 text-primary hover:bg-primary/10\"
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>

        {/* Show more button */}
        {filteredPrograms.length > 6 && !showAllPrograms && (
          <div className=\"text-center\">
            <Button 
              variant=\"outline\"
              onClick={() => setShowAllPrograms(true)}
              className=\"border-primary/30 text-primary hover:bg-primary/10 rounded-full px-8\"
              data-testid=\"show-more-btn\"
            >
              Показать все ({filteredPrograms.length})
            </Button>
          </div>
        )}

        {/* Helper text */}
        <p className=\"text-center text-sm text-foreground/50 mt-8\">
          По клику программа открывается в виде отдельной карточки с подробным описанием, 
          структурой по дням и условиями участия.
        </p>
      </div>
    </section>
  );
};
"
