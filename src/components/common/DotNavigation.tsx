import React, { useState, useEffect } from 'react';

interface DotItem {
  id: string;
  label: string;
}

const DOT_ITEMS: DotItem[] = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience & Training' }
];

export const DotNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (const item of DOT_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center space-y-4"
      aria-label="Side Dot Navigation"
    >
      {DOT_ITEMS.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
            aria-label={`Scroll to ${item.label}`}
          >
            {/* Tooltip Label on Hover */}
            <span className="absolute right-8 px-2.5 py-1 rounded bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900 text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-md">
              {item.label}
            </span>

            {/* Floating Dot Indicator */}
            <span
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-point scale-125 shadow-[0_0_12px_rgba(0,102,255,0.6)]'
                  : 'bg-slate-400/40 hover:bg-slate-400 dark:hover:bg-slate-300'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};
