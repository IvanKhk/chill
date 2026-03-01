"import { useState, useRef } from \"react\";
import \"@/App.css\";
import { Toaster } from \"./components/ui/sonner\";
import { Header } from \"./components/Header\";
import { HeroSection } from \"./components/HeroSection\";
import { QuizModal } from \"./components/QuizModal\";
import { ProgramCatalog } from \"./components/ProgramCatalog\";
import { ProgramDetailModal } from \"./components/ProgramDetailModal\";
import { HowItWorks } from \"./components/HowItWorks\";
import { TargetAudience } from \"./components/TargetAudience\";
import { SafetySection } from \"./components/SafetySection\";
import { ProgramTypes } from \"./components/ProgramTypes\";
import { Testimonials } from \"./components/Testimonials\";
import { AboutService } from \"./components/AboutService\";
import { ForOrganizers } from \"./components/ForOrganizers\";
import { FinalCTA } from \"./components/FinalCTA\";
import { Footer } from \"./components/Footer\";
import { toast } from \"sonner\";

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizFilters, setQuizFilters] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const catalogRef = useRef(null);

  const handleQuizOpen = () => {
    setIsQuizOpen(true);
  };

  const handleQuizClose = () => {
    setIsQuizOpen(false);
  };

  const handleQuizComplete = (answers) => {
    setQuizFilters(answers);
    setIsQuizOpen(false);
    
    // Scroll to catalog
    setTimeout(() => {
      const catalogElement = document.getElementById('catalog');
      if (catalogElement) {
        catalogElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    toast.success('Подборка готова!', {
      description: 'Мы подобрали программы на основе ваших ответов',
    });
  };

  const handleCatalogScroll = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const handleProgramModalClose = () => {
    setSelectedProgram(null);
  };

  return (
    <div className=\"min-h-screen bg-background\" data-testid=\"app-container\">
      <Toaster position=\"top-center\" richColors />
      
      {/* Header */}
      <Header 
        onQuizOpen={handleQuizOpen}
        onScrollTo={handleScrollTo}
      />

      {/* Hero Section */}
      <HeroSection 
        onQuizOpen={handleQuizOpen}
        onCatalogScroll={handleCatalogScroll}
      />

      {/* Quiz Modal */}
      <QuizModal 
        isOpen={isQuizOpen}
        onClose={handleQuizClose}
        onComplete={handleQuizComplete}
      />

      {/* Program Catalog */}
      <ProgramCatalog 
        ref={catalogRef}
        onProgramClick={handleProgramClick}
        quizFilters={quizFilters}
      />

      {/* Program Detail Modal */}
      <ProgramDetailModal 
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={handleProgramModalClose}
      />

      {/* How It Works */}
      <HowItWorks />

      {/* Target Audience */}
      <TargetAudience />

      {/* Safety Section */}
      <SafetySection />

      {/* Program Types */}
      <ProgramTypes />

      {/* Testimonials */}
      <Testimonials />

      {/* About Service */}
      <AboutService />

      {/* For Organizers */}
      <ForOrganizers />

      {/* Final CTA */}
      <FinalCTA 
        onQuizOpen={handleQuizOpen}
        onCatalogScroll={handleCatalogScroll}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
"
