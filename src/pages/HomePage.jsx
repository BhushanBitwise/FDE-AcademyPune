import HeroSection from '../components/home/HeroSection';
import HiringPartnersMarquee from '../components/home/HiringPartnersMarquee';
import FutureOfEngineering from '../components/home/FutureOfEngineering';
import WhatIsFDE from '../components/home/WhatIsFDE';
import ProgramsGrid from '../components/home/ProgramsGrid';
import FacultyMentorsShowcase from '../components/home/FacultyMentorsShowcase';
import AcademyMethod from '../components/home/AcademyMethod';
import HowFDEsWork from '../components/home/HowFDEsWork';
import CurriculumPreview from '../components/home/CurriculumPreview';
import TechStackEcosystem from '../components/home/TechStackEcosystem';
import CaseStudiesShowcase from '../components/home/CaseStudiesShowcase';
import ProductionShowcase from '../components/home/ProductionShowcase';
import LearningExperience from '../components/home/LearningExperience';
import StudentPlacementsSection from '../components/home/StudentPlacementsSection';
import AwardsSection from '../components/home/AwardsSection';
import CareerPathways from '../components/home/CareerPathways';
import StudentProjects from '../components/home/StudentProjects';
import LocationsSection from '../components/home/LocationsSection';
import AdmissionProcess from '../components/home/AdmissionProcess';
import FAQSection from '../components/home/FAQSection';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage({ onOpenApply }) {
  return (
    <main>
      {/* 1. Architectural Hero Section */}
      <HeroSection onOpenApply={onOpenApply} />

      {/* 2. Industry Hiring Partners Marquee (Auto-Scrolling Continuous Ribbon) */}
      <HiringPartnersMarquee />

      {/* 3. Strategic Thesis: Future of Engineering & The Forward Deployed Paradigm */}
      <FutureOfEngineering />
      <WhatIsFDE />

      {/* 5. Production Programs Grid */}
      <ProgramsGrid onOpenApply={onOpenApply} />

      {/* 6. Faculty & Creative Mentors (Bento Grid & Editorial Strip from Uploaded Reference) */}
      <FacultyMentorsShowcase />

      {/* 7. Academy Method & How FDEs Work */}
      <AcademyMethod />
      <HowFDEsWork />

      {/* 8. Curriculum Deep-Dive */}
      <CurriculumPreview onOpenApply={onOpenApply} />

      {/* 9. Technical Architecture Ecosystem & Microservices */}
      <TechStackEcosystem />
      <CaseStudiesShowcase />
      <ProductionShowcase />
      <LearningExperience />

      {/* 10. Student Placements & Alumni Success Stories */}
      <StudentPlacementsSection onOpenApply={onOpenApply} />

      {/* 11. Awards & Global Industry Honors (Awwwards, Singapore EdTech, Pune Flagship, Dubai DIFC) */}
      <AwardsSection />

      {/* 12. Career Pathways & Student Capstone Defenses */}
      <CareerPathways onOpenApply={onOpenApply} />
      <StudentProjects />

      {/* 13. Global Locations: Pune Flagship, Singapore & Dubai Hubs with Realistic Studio Spaces */}
      <LocationsSection onOpenApply={onOpenApply} />

      {/* 13. Admissions, FAQ & Final Action */}
      <AdmissionProcess onOpenApply={onOpenApply} />
      <FAQSection />
      <FinalCTA onOpenApply={onOpenApply} />
    </main>
  );
}
