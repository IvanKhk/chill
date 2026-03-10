import { useState, useRef } from "react";
import "./index.css";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { QuizModal } from "./components/QuizModal";
import { ProgramCatalog } from "./components/ProgramCatalog";
import { ProgramDetailModal } from "./components/ProgramDetailModal";
import { HowItWorks } from "./components/HowItWorks";
import { TargetAudience } from "./components/TargetAudience";
import { SafetySection } from "./components/SafetySection";
import { ProgramTypes } from "./components/ProgramTypes";
import { Testimonials } from "./components/Testimonials";
import { AboutService } from "./components/AboutService";
import { ForOrganizers } from "./components/ForOrganizers";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { toast } from "sonner";

function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizFilters, setQuizFilters] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const catalogRef = useRef(null);

  const handleQuizOpen = () => setIsQuizOpen(true);
  const handleQuizClose = () => setIsQuizOpen(false);

  const handleQuizComplete = (answers) => {
    setQuizFilters(answers);
    setIsQuizOpen(false);

    setTimeout(() => {
      const catalogElement = document.getElementById("catalog");
      if (catalogElement) {
        catalogElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    toast.success("Подборка готова!", {
      description: "Мы подобрали программы на основе ваших ответов",
    });
  };

  const handleCatalogScroll = () => {
    const catalogElement = document.getElementById("catalog");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProgramClick = (program) => setSelectedProgram(program);
  const handleProgramModalClose = () => setSelectedProgram(null);

  return (
    <div className="App" data-testid="app-container">
      <Toaster position="top-center" richColors />

      <Header onQuizOpen={handleQuizOpen} onScrollTo={handleScrollTo} />

      <HeroSection
        onQuizOpen={handleQuizOpen}
        onCatalogScroll={handleCatalogScroll}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={handleQuizClose}
        onComplete={handleQuizComplete}
      />

      <ProgramCatalog
        ref={catalogRef}
        onProgramClick={handleProgramClick}
        quizFilters={quizFilters}
      />

      <ProgramDetailModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={handleProgramModalClose}
      />

      <HowItWorks />
      <TargetAudience />
      <SafetySection />
      <ProgramTypes />
      <Testimonials />
      <AboutService />
      <ForOrganizers />

      <FinalCTA
        onQuizOpen={handleQuizOpen}
        onCatalogScroll={handleCatalogScroll}
      />

      <Footer />
    </div>
  );
}

export default App;
