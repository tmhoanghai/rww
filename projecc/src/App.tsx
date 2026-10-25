import { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import MainInfoSection from './components/MainInfoSection';
import ItineraryTabSection from './components/ItineraryTabSection';
import ServiceCommitmentsSection from './components/ServiceCommitmentsSection';
import BookingModal from './components/BookingModal';
import BoxDetailModal from './components/BoxDetailModal';
import logo1Img from '@/assets/images/logo1.jpg';
import hueBgImg from '@/assets/images/hue.jpg';
import Footer from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import CustomScrollbar from './components/CustomScrollbar';
export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isBoxModalOpen, setIsBoxModalOpen] = useState(false);
  const [boxModalData, setBoxModalData] = useState<{
    title: string;
    subtitle?: string;
    description: string;
    bullets?: string[];
    image?: string;
    badge?: string;
    timeRange?: string;
    locationNote?: string;
    colorTheme?: 'amber' | 'orange' | 'indigo';
  } | null>(null);

  const [language, setLanguage] = useState<'VI' | 'EN'>(() => {
    const saved = localStorage.getItem('elite_travel_lang');
    return saved === 'EN' || saved === 'VI' ? saved : 'VI';
  });

  useEffect(() => {
    localStorage.setItem('elite_travel_lang', language);
  }, [language]);

  const [selectedPackage] = useState<{ name: string; price: number }>({
    name: language === 'VI' ? 'Gói Di Sản 4★ Century Riverside (3 Ngày 2 Đêm)' : '4★ Heritage Century Riverside Package (3 Days 2 Nights)',
    price: 7100000,
  });

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'VI' ? 'EN' : 'VI');
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleOpenBox = (data: {
    title: string;
    subtitle?: string;
    description: string;
    bullets?: string[];
    image?: string;
    badge?: string;
    timeRange?: string;
    locationNote?: string;
    colorTheme?: 'amber' | 'orange' | 'indigo';
  }) => {
    setBoxModalData(data);
    setIsBoxModalOpen(true);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 70;
    const targetY = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = Math.min(600, Math.max(300, Math.abs(distance) * 0.35));
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const [isAppLoaded, setIsAppLoaded] = useState(false);

  const t = {
    I: language === 'VI' ? 'I. Tổng Quan' : 'I. Overview',
    II: language === 'VI' ? 'II. Lịch Trình' : 'II. Itinerary',
    III: language === 'VI' ? 'III. Cam Kết' : 'III. Commitments',
  };

  return (
    <div className="min-h-screen font-mono flex flex-col text-stone-100 selection:bg-amber-200 relative">

      <LoadingScreen lang={language} onFinished={() => setIsAppLoaded(true)} />

      <div 
        className={`fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 transition-opacity duration-300 ${isAppLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url(${hueBgImg})`,
        }}
      />

      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-stone-900/60 backdrop-blur-xl shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-15 sm:h-16 flex items-center justify-between">
          <button 
            onClick={() => scrollTo('tong-quan')}
            className="flex items-center gap-2 sm:gap-2.5 text-left cursor-pointer group"
          >
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-amber-400 shadow-md shadow-amber-500/20 bg-white flex items-center justify-center p-0.5 group-hover:scale-105 transition-all duration-500 shrink-0 ${isAppLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <img src={logo1Img} alt="Elite Travel Logo" className="w-full h-full object-contain" />
            </div>
            <span className={`font-bold text-sm sm:text-base md:text-lg text-white tracking-tight truncate transition-all duration-500 delay-100 ${isAppLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
              Elite Travel Group
            </span>
          </button>

          <div className="flex items-center gap-3 sm:gap-6">
            <nav className="hidden md:flex items-center gap-5 text-xs font-bold text-stone-300">
              <button onClick={() => scrollTo('tong-quan')} className="hover:text-amber-300 transition-colors cursor-pointer">{t.I}</button>
              <button onClick={() => scrollTo('lich-trinh')} className="hover:text-amber-300 transition-colors cursor-pointer">{t.II}</button>
              <button onClick={() => scrollTo('cam-ket')} className="hover:text-amber-300 transition-colors cursor-pointer">{t.III}</button>
            </nav>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 bg-stone-800/90 hover:bg-stone-700 rounded-lg text-[11px] sm:text-xs font-bold text-amber-300 border border-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              title={language === 'VI' ? 'Chuyển sang Tiếng Anh' : 'Switch to Vietnamese'}
            >
              <div className="relative w-5 h-3 overflow-hidden rounded-sm border border-stone-600 shrink-0">
                <div className={`absolute inset-0 bg-red-600 transition-opacity duration-300 ${language === 'VI' ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-[8px] font-black leading-none">★</div>
                </div>
                <div className={`absolute inset-0 transition-opacity duration-300 ${language === 'EN' ? 'opacity-100' : 'opacity-0'}`}>
                  <svg viewBox="0 0 60 30" className="w-full h-full">
                    <rect width="60" height="30" fill="#012169"/>
                    <path d="M0 0l60 30m0-30l-60 30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0 0l60 30m0-30l-60 30" stroke="#C8102E" strokeWidth="4"/>
                    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
                  </svg>
                </div>
              </div>
              <span className="w-5 text-center font-mono">{language}</span>
            </button>

            <button
              onClick={handleOpenBooking}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:brightness-110 active:scale-95 text-stone-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/25 transition-all cursor-pointer shrink-0"
            >
              <CalendarCheck size={15} className="shrink-0" />
              <span>{language === 'VI' ? 'Đặt Tour' : 'Book Tour'}</span>
            </button>
          </div>
        </div>
      </header>

      <main key={language} className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-6 sm:py-8 space-y-12 sm:space-y-16 animate-lang-switch">
        <div id="tong-quan" className="scroll-mt-20">
          <ScrollReveal direction="up" distance={30} delay={40}>
            <MainInfoSection onOpenBooking={handleOpenBooking} onOpenBox={handleOpenBox} lang={language} />
          </ScrollReveal>
        </div>
        <div id="lich-trinh" className="scroll-mt-20">
          <ScrollReveal direction="up" distance={36} delay={60}>
            <ItineraryTabSection onOpenBooking={handleOpenBooking} onOpenBox={handleOpenBox} lang={language} />
          </ScrollReveal>
        </div>
        <div id="cam-ket" className="scroll-mt-20">
          <ScrollReveal direction="up" distance={36} delay={60}>
            <ServiceCommitmentsSection onOpenBox={handleOpenBox} lang={language} />
          </ScrollReveal>
        </div>
      </main>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        initialPackage={selectedPackage.name} 
        initialPrice={selectedPackage.price}
        lang={language}
      />
      <BoxDetailModal isOpen={isBoxModalOpen} onClose={() => setIsBoxModalOpen(false)} data={boxModalData} />

      <ScrollReveal direction="up" distance={24} delay={50}>
        <Footer lang={language} />
      </ScrollReveal>

      <CustomScrollbar lang={language} />
    </div>
  );
}
