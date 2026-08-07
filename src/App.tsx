import React from 'react';
import { BackgroundEffects } from './components/common/BackgroundEffects';
import { Navbar } from './components/common/Navbar';
import { DotNavigation } from './components/common/DotNavigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-point selection:text-white relative">
      {/* Background Ambient Particle Effects */}
      <BackgroundEffects />

      {/* Top Header Navbar */}
      <Navbar />

      {/* Floating Side Dot Navigation */}
      <DotNavigation />

      {/* Main Landing SPA Content Sections */}
      <main className="flex-grow relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
