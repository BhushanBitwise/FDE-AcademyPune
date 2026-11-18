import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

// Layout & Common
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import ApplicationModal from './components/common/ApplicationModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import CurriculumPage from './pages/CurriculumPage';
import CareersPage from './pages/CareersPage';
import TeamPage from './pages/TeamPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const openApply = (progSlug = '') => {
    setSelectedProgram(progSlug);
    setIsApplyModalOpen(true);
  };

  const closeApply = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F7F7F3] text-[#171918]">
        {/* Main Sticky Navigation */}
        <Navbar onOpenApply={() => openApply()} />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenApply={openApply} />} />
            <Route path="/about" element={<AboutPage onOpenApply={openApply} />} />
            <Route path="/programs" element={<ProgramsPage onOpenApply={openApply} />} />
            <Route path="/programs/:slug" element={<ProgramDetailPage onOpenApply={openApply} />} />
            <Route path="/curriculum" element={<CurriculumPage onOpenApply={openApply} />} />
            <Route path="/careers" element={<CareersPage onOpenApply={openApply} />} />
            <Route path="/team" element={<TeamPage onOpenApply={openApply} />} />
            <Route path="/locations" element={<LocationsPage onOpenApply={openApply} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Help Desk */}
        <WhatsAppFloat />

        {/* Application & Consultation Modal */}
        <ApplicationModal
          isOpen={isApplyModalOpen}
          onClose={closeApply}
          preselectedProgram={selectedProgram}
        />
      </div>
    </Router>
  );
}
