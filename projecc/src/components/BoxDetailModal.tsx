import { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export type BoxColorTheme = 'amber' | 'orange' | 'indigo';

interface BoxDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    subtitle?: string;
    description: string;
    bullets?: string[];
    image?: string;
    badge?: string;
    timeRange?: string;
    locationNote?: string;
    colorTheme?: BoxColorTheme;
  } | null;
}

export default function BoxDetailModal({ isOpen, onClose, data }: BoxDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  const themes = {
    orange: {
      bg: 'bg-gradient-to-b from-orange-500/25 via-stone-900/65 to-orange-600/15',
      border: 'border border-orange-500/35',
      shadow: 'shadow-[0_8px_32px_rgba(249,115,22,0.2)]',
      topLine: 'via-orange-400',
      title: 'text-orange-300',
      closeHover: 'hover:text-orange-300 border-orange-500/40 bg-orange-950/40',
      badge: 'bg-orange-500/20 border border-orange-500/40 text-orange-200',
      subtitle: 'text-orange-200/90',
      bulletsIcon: 'text-orange-400',
      imageBorder: 'border-orange-500/30',
    },
    indigo: {
      bg: 'bg-gradient-to-b from-indigo-500/25 via-stone-900/65 to-indigo-600/15',
      border: 'border border-indigo-500/35',
      shadow: 'shadow-[0_8px_32px_rgba(99,102,241,0.2)]',
      topLine: 'via-indigo-400',
      title: 'text-indigo-200',
      closeHover: 'hover:text-indigo-300 border-indigo-500/40 bg-indigo-950/40',
      badge: 'bg-indigo-500/20 border border-indigo-500/40 text-indigo-200',
      subtitle: 'text-indigo-200/90',
      bulletsIcon: 'text-indigo-400',
      imageBorder: 'border-indigo-500/30',
    },
    amber: {
      bg: 'bg-gradient-to-b from-amber-500/25 via-stone-900/65 to-amber-600/15',
      border: 'border border-amber-500/35',
      shadow: 'shadow-[0_8px_32px_rgba(245,158,11,0.2)]',
      topLine: 'via-amber-400',
      title: 'text-amber-300',
      closeHover: 'hover:text-amber-300 border-amber-500/40 bg-amber-950/40',
      badge: 'bg-amber-500/20 border border-amber-500/40 text-amber-200',
      subtitle: 'text-amber-200/90',
      bulletsIcon: 'text-amber-400',
      imageBorder: 'border-amber-500/30',
    }
  };

  const activeTheme = themes[data.colorTheme || 'amber'] || themes.amber;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/40 backdrop-blur-sm transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className={`relative max-w-2xl w-full ${activeTheme.bg} backdrop-blur-md ${activeTheme.border} rounded-2xl p-6 sm:p-8 ${activeTheme.shadow} text-stone-100 font-mono overflow-y-auto max-h-[90vh] transition-transform duration-300 scale-100 animate-elite-logo-zoom-fade`}
        onClick={(e) => e.stopPropagation()}
      >

        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent ${activeTheme.topLine} to-transparent`}></div>

        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 ${activeTheme.closeHover} transition-all cursor-pointer shadow-md`}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {data.timeRange && (
            <span className={`px-3 py-1 rounded-full ${activeTheme.badge} text-xs font-mono font-semibold`}>
              {data.timeRange}
            </span>
          )}
        </div>

        {data.image && (
          <div className={`mb-6 rounded-2xl overflow-hidden ${activeTheme.imageBorder} border shadow-lg max-h-72`}>
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          </div>
        )}

        <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-tight ${activeTheme.title} pr-8 text-glow-subtle`}>
          {data.title}
        </h3>

        {data.subtitle && (
          <p className={`text-xs sm:text-sm mb-4 font-semibold ${activeTheme.subtitle}`}>
            {data.subtitle}
          </p>
        )}

        <p className="text-sm sm:text-base text-stone-100 leading-relaxed font-sans font-medium">
          {data.description}
        </p>

        {data.bullets && data.bullets.length > 0 && (
          <div className="space-y-2.5 pt-4 mt-4 border-t border-white/10 font-sans">
            {data.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 size={16} className={`${activeTheme.bulletsIcon} shrink-0 mt-0.5`} />
                <span className="leading-relaxed">{bullet}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
