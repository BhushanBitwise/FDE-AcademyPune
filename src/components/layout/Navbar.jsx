import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles, Terminal } from 'lucide-react';

export default function Navbar({ onOpenApply }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Programs', 
      path: '/programs',
      hasDropdown: true,
      subItems: [
        { name: 'Forward Deployed Engineering (32 Wks)', path: '/programs/forward-deployed-engineering' },
        { name: 'Applied AI Engineering (24 Wks)', path: '/programs/applied-ai-engineering' },
        { name: 'Agentic AI & Multi-Agent Systems', path: '/programs/agentic-ai-systems' },
        { name: 'Enterprise RAG & Knowledge Systems', path: '/programs/enterprise-rag-knowledge-systems' },
        { name: 'View All 6 Programs →', path: '/programs' },
      ]
    },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Careers', path: '/careers' },
    { name: 'Team', path: '/team' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F7F7F3]/90 backdrop-blur-md border-b border-[#E9E9E2] py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Monogram */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171918]">
            <div className="w-10 h-10 rounded-xl bg-[#171A18] text-[#C9F04A] flex items-center justify-center font-mono font-bold text-sm tracking-tighter border border-[#171A18] shadow-sm transition-transform duration-300 group-hover:scale-105">
              FDE
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#171918] leading-none">
                FDE <span className="text-[#70736D] font-medium">ACADEMY</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#70736D] font-semibold mt-0.5">
                Pune • India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path || 
                (item.hasDropdown && location.pathname.startsWith('/programs'));

              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => setProgramsDropdown(true)}
                    onMouseLeave={() => setProgramsDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1 transition-colors duration-150 ${
                        isActive 
                          ? 'text-[#171918] font-semibold bg-[#E9E9E2]/60' 
                          : 'text-[#70736D] hover:text-[#171918] hover:bg-[#E9E9E2]/40'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown Menu */}
                    {programsDropdown && (
                      <div className="absolute top-full left-0 w-72 pt-2 z-50">
                        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E9E9E2] shadow-xl p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="px-3 py-2 border-b border-[#E9E9E2] mb-1">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#70736D] font-semibold">
                              Academic Tracks
                            </span>
                          </div>
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-3 py-2 text-xs font-medium text-[#171918] rounded-lg hover:bg-[#F7F7F3] transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                    isActive 
                      ? 'text-[#171918] font-semibold bg-[#E9E9E2]/60' 
                      : 'text-[#70736D] hover:text-[#171918] hover:bg-[#E9E9E2]/40'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/programs"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#171918] border border-[#E9E9E2] rounded-full hover:border-[#171918] transition-all duration-200"
            >
              Explore Programs
            </Link>
            <button
              onClick={onOpenApply}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#171A18] text-[#FFFFFF] hover:bg-[#C9F04A] hover:text-[#171918] rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-sm group"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenApply}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#171A18] text-[#C9F04A] rounded-full"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#171918] hover:bg-[#E9E9E2] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#F7F7F3] border-b border-[#E9E9E2] p-5 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <div key={item.name} className="border-b border-[#E9E9E2]/60 pb-2">
                <Link
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-[#171918] rounded-lg hover:bg-[#E9E9E2]/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-3 py-1 text-xs text-[#70736D] hover:text-[#171918]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/programs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-[#171918] border border-[#171918] rounded-full"
              >
                Explore Programs
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#171A18] text-[#C9F04A] rounded-full"
              >
                Apply for Next Cohort
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
