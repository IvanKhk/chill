import { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { quizQuestions } from '../data/programs';

export const QuizModal = ({ isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleting, setIsCompleting] = useState(false);

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;
  const isLastStep = currentStep === quizQuestions.length - 1;

  const handleOptionSelect = (option) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: option
    }));
  };

  const handleNext = () => {
    if (isLastStep) {
      setIsCompleting(true);
      // Simulate processing
      setTimeout(() => {
        onComplete(answers);
        setIsCompleting(false);
        setCurrentStep(0);
        setAnswers({});
      }, 800);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    setAnswers({});
    onClose();
  };

  const selectedOption = answers[currentQuestion?.id];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="sm:max-w-lg bg-card border-border p-0 overflow-hidden"
        data-testid="quiz-modal"
      >
        <DialogTitle className="sr-only">Подбор программы</DialogTitle>
        
        {/* Header */}
        <div className="p-6 pb-0">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-heading text-lg font-medium">Подбор программы</span>
            </div>
            <button 
              onClick={handleClose}
              className="text-foreground/50 hover:text-foreground transition-colors"
              data-testid="quiz-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-foreground/60">
              <span>Вопрос {currentStep + 1} из {quizQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-1.5 bg-muted" />
          </div>
        </div>

        {/* Question Content */}
        <div className="p-6">
          {!isCompleting ? (
            <div className="animate-fade-in" key={currentStep}>
              <h3 
                className="font-heading text-xl md:text-2xl font-medium text-foreground mb-6"
                data-testid="quiz-question"
              >
                {currentQuestion?.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion?.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                      selectedOption?.id === option.id
                        ? 'border-primary bg-primary/10 text-foreground'
                        : 'border-border hover:border-primary/30 text-foreground/80 hover:text-foreground'
                    }`}
                    data-testid={`quiz-option-${option.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option.label}</span>
                      {selectedOption?.id === option.id && (
                        <Check className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <p className="font-heading text-xl text-foreground">Подбираем программы...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {!isCompleting && (
          <div className="p-6 pt-0 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="text-foreground/60 hover:text-foreground"
              data-testid="quiz-back-btn"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedOption}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
              data-testid="quiz-next-btn"
            >
              {isLastStep ? 'Показать результаты' : 'Далее'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
