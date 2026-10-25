import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ItineraryListSection from './ItineraryListSection';
import { ScrollReveal } from './ScrollReveal';

interface ItineraryTabSectionProps {
  onOpenBooking?: () => void;
  onOpenBox: (data: { title: string; subtitle?: string; description: string; bullets?: string[]; image?: string; badge?: string; timeRange?: string; locationNote?: string; colorTheme?: 'amber' | 'orange' | 'indigo' }) => void;
  lang: 'VI' | 'EN';
}

export default function ItineraryTabSection({ onOpenBooking, onOpenBox, lang }: ItineraryTabSectionProps) {
  const [, setSelectedDay] = useState<number | 'all'>('all');
  const isEn = lang === 'EN';

  const handleSelectDay = (day: number | 'all') => {
    setSelectedDay(day);
    const listElement = document.getElementById('danh-sach-lich-trinh');
    if (listElement) {
      listElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-12 font-mono">
      <div className="space-y-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-left text-glow-subtle border-b border-amber-500/20 pb-4">
          {isEn ? 'II. Itinerary' : 'II. Lịch Trình'}
        </h2>
      </div>

      <ScrollReveal direction="up" delay={100} distance={24}>
        <div className="max-w-lg mx-auto mb-8">
          <div 
            className="relative overflow-hidden rounded-2xl bg-stone-950/90 border border-amber-500/40 hover:border-amber-400/80 p-6 sm:p-8 text-center shadow-[0_0_30px_rgba(245,158,11,0.12)] hover:shadow-[0_0_35px_rgba(245,158,11,0.3)] transition-all duration-300"
          >

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-amber-400 text-glow-amber">
                7.100.000 vnđ
              </div>
              <p className="text-stone-300 text-xs sm:text-sm font-medium tracking-wide">
                {isEn ? '"already includes taxes and round-trip airfare"' : '"đã bao gồm thuế và vé máy bay khứ hồi"'}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div id="danh-sach-lich-trinh" className="pt-2">
        <ItineraryListSection 
          onOpenBox={onOpenBox}
          onSelectDay={handleSelectDay}
          lang={lang}
        />
      </div>
    </div>
  );
}
