import { Filter, X } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { filterOptions } from '../data/programs';

export const FilterPanel = ({ filters, onFilterChange, onClearFilters }) => {
  const hasActiveFilters = Object.values(filters).some(v => v && v !== 'all');

  const getActiveFilterCount = () => {
    return Object.values(filters).filter(v => v && v !== 'all').length;
  };

  return (
    <div 
      className="glass rounded-2xl p-4 md:p-6"
      data-testid="filter-panel"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <span className="font-medium text-foreground">Фильтры</span>
          {hasActiveFilters && (
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {getActiveFilterCount()}
            </Badge>
          )}
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-foreground/60 hover:text-foreground text-sm h-8"
            data-testid="clear-filters-btn"
          >
            <X className="w-4 h-4 mr-1" />
            Сбросить
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Region Filter */}
        <div>
          <label className="text-xs text-foreground/60 mb-1.5 block">Локация</label>
          <Select
            value={filters.region || 'all'}
            onValueChange={(value) => onFilterChange('region', value)}
          >
            <SelectTrigger 
              className="bg-background/50 border-border hover:border-primary/30 transition-colors"
              data-testid="filter-region"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {filterOptions.region.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Duration Filter */}
        <div>
          <label className="text-xs text-foreground/60 mb-1.5 block">Длительность</label>
          <Select
            value={filters.duration || 'all'}
            onValueChange={(value) => onFilterChange('duration', value)}
          >
            <SelectTrigger 
              className="bg-background/50 border-border hover:border-primary/30 transition-colors"
              data-testid="filter-duration"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {filterOptions.duration.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Type Filter */}
        <div>
          <label className="text-xs text-foreground/60 mb-1.5 block">Тип программы</label>
          <Select
            value={filters.type || 'all'}
            onValueChange={(value) => onFilterChange('type', value)}
          >
            <SelectTrigger 
              className="bg-background/50 border-border hover:border-primary/30 transition-colors"
              data-testid="filter-type"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {filterOptions.type.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Detox Level Filter */}
        <div>
          <label className="text-xs text-foreground/60 mb-1.5 block">Уровень детокса</label>
          <Select
            value={filters.detoxLevel || 'all'}
            onValueChange={(value) => onFilterChange('detoxLevel', value)}
          >
            <SelectTrigger 
              className="bg-background/50 border-border hover:border-primary/30 transition-colors"
              data-testid="filter-detox"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {filterOptions.detoxLevel.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Helper text */}
      <p className="text-xs text-foreground/50 mt-4">
        Фильтры помогут найти программу под ваши ограничения по времени и формату
      </p>
    </div>
  );
};
