import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Building2, MapPin, CalendarCheck } from 'lucide-react';
import hue6Img from '@/assets/images/hue6.jpg';
import hue1Img from '@/assets/images/hue1.jpg';
import hue2Img from '@/assets/images/hue2.jpg';
import hue3Img from '@/assets/images/hue3.jpg';
import hue4Img from '@/assets/images/hue4.jpg';
import hue5Img from '@/assets/images/hue5.jpg';
import hue7Img from '@/assets/images/hue7.jpg';
import logo1Img from '@/assets/images/logo1.jpg';
import { ScrollReveal, ParallaxWrapper } from './ScrollReveal';

interface MainInfoSectionProps {
  onOpenBooking: () => void;
  onOpenBox: (data: { title: string; subtitle?: string; description: string; bullets?: string[]; image?: string; badge?: string }) => void;
  lang: 'VI' | 'EN';
}

interface GalleryPhoto {
  id: string;
  image: string;
  titleVI: string;
  titleEN: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'photo_hue6', image: hue6Img, titleVI: 'Nét Đẹp Văn Hóa & Nghệ Thuật Cố Đô', titleEN: 'Cultural & Artistic Heritage of Hue' },
  { id: 'photo_hue1', image: hue1Img, titleVI: 'Kinh Thành Huế & Ngọ Môn Trầm Mặc', titleEN: 'Hue Imperial Citadel & Noon Gate' },
  { id: 'photo_hue2', image: hue2Img, titleVI: 'Chùa Thiên Mụ & Tháp Phước Duyên Cổ Tự', titleEN: 'Thien Mu Pagoda & Phuoc Duyen Tower' },
  { id: 'photo_hue3', image: hue3Img, titleVI: 'Kiến Trúc Lăng Tẩm Cung Đình Đỉnh Cao', titleEN: 'Royal Tombs Imperial Architecture' },
  { id: 'photo_hue4', image: hue4Img, titleVI: 'Sắc Màu Làng Hương Trầm Thủy Xuân', titleEN: 'Vibrant Thuy Xuan Incense Village' },
  { id: 'photo_hue5', image: hue5Img, titleVI: 'Cố Đô Huế - Vẻ Đẹp Di Sản Hoàng Gia', titleEN: 'Ancient Capital - Royal Heritage Beauty' },
  { id: 'photo_hue7', image: hue7Img, titleVI: 'Đời Sống Cố Đô & Đặc Sản Chợ Đông Ba', titleEN: 'Local Life & Dong Ba Market Specialties' },
];

export default function MainInfoSection({ onOpenBooking, onOpenBox, lang }: MainInfoSectionProps) {
  const isEn = lang === 'EN';
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSelectedPhotoIndex((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1));
    }, 5500);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handlePrevPhoto = () => {
    resetTimer();
    setSelectedPhotoIndex((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    resetTimer();
    setSelectedPhotoIndex((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  const handleSelectPhoto = (idx: number) => {
    resetTimer();
    setSelectedPhotoIndex(idx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNextPhoto();
      } else {
        handlePrevPhoto();
      }
    }
    touchStartX.current = null;
  };

  const t = {
    title: 'ELITE TRAVEL GROUP',
    subtitle: isEn ? 'Premium Hue Ancient Capital Heritage Tour' : 'Tour Di Sản Cố Đô Huế Cao Cấp',
    sectionTitle: isEn ? 'I. Overview' : 'I. Tổng Quan',
    hueOverviewTitle: isEn ? '1. Hue Heritage Overview' : '1. Tổng quan Cố đô Huế',
    overview: isEn 
      ? 'Hue – the imperial capital of the Nguyen Dynasty (1802-1945) – preserves the full value of Vietnam\'s grandest architectural and intangible cultural heritage. The journey departs on a punctual Vietnam Airlines (VNA) flight from Tan Son Nhat Airport, unwinding at the 4★ Century Riverside Hotel along the poetic Perfume River. Experience the complete essence of royal cuisine, a rich breakfast buffet, and vibrant evening culture.'
      : 'Huế – kinh đô triều Nguyễn (1802-1945) – lưu giữ trọn vẹn những giá trị di sản kiến trúc và văn hóa phi vật thể đỉnh cao. Hành trình khởi hành chuyến bay 05:45 - 07:15 từ Sân bay Tân Sơn Nhất bằng máy bay Vietnam Airlines (VNA) êm ái đúng giờ, nghỉ dưỡng tại Khách sạn 4★ Century Riverside ven Sông Hương thanh bình. Trải nghiệm trọn vẹn tinh hoa ẩm thực Cung Đình, buffet sáng cao cấp và phố đi bộ Huế về đêm rực rỡ.',
    companyOverviewTitle: isEn ? '2. Company Overview' : '2. Tổng quan công ty',
    companyOverview: isEn
      ? 'ELITE Travel Group is a premier travel enterprise specializing in domestic and international travel solutions, catering to the diverse needs of individuals, families, and organizations. Guided by professional development, with service quality as the cornerstone and customer satisfaction at the heart of our mission, ELITE Travel Group emphasizes systematically designed tours, optimal experiences, and seamless synchronization across all service stages. Continuously innovating and advancing professional capabilities, ELITE Travel Group aims to craft distinctive journeys, deliver elevated value, and firmly establish our brand standing in the tourism industry.'
      : 'ELITE Travel Group là doanh nghiệp hoạt động trong lĩnh vực lữ hành, chuyên cung cấp các giải pháp du lịch trong nước và quốc tế, đáp ứng đa dạng nhu cầu của khách hàng cá nhân, gia đình và tổ chức. Với định hướng phát triển chuyên nghiệp, lấy chất lượng dịch vụ làm nền tảng và sự hài lòng của khách hàng làm trọng tâm, ELITE Travel Group chú trọng xây dựng các chương trình du lịch được thiết kế bài bản, tối ưu trải nghiệm và đảm bảo tính đồng bộ trong từng khâu phục vụ. Không ngừng đổi mới và nâng cao năng lực chuyên môn, ELITE Travel Group hướng đến việc kiến tạo những hành trình khác biệt, gia tăng giá trị cho khách hàng và từng bước khẳng định vị thế thương hiệu trên thị trường du lịch.'
  };

  const currentPhoto = GALLERY_PHOTOS[selectedPhotoIndex];

  return (
    <div className="space-y-8 sm:space-y-10 py-2 font-['Montserrat']">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap');
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.88) translateY(-8px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-elite-logo-zoom-fade { animation: fadeInScale 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .font-cinzel-royal { font-family: 'Cinzel Decorative', serif; font-weight: 700; letter-spacing: 0.12em; }
      `}</style>

      <ParallaxWrapper speed={-0.12}>
        <div className="text-center pt-1 pb-2 overflow-hidden flex flex-col items-center justify-center">
          <div className="animate-elite-logo-zoom-fade mb-3">
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.65)] bg-white flex items-center justify-center transition-transform hover:scale-105 duration-300 p-2 sm:p-2.5">
              <img 
                src={logo1Img} 
                alt="Elite Travel Logo" 
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-cinzel-royal uppercase bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] tracking-wider px-2">
              {t.title}
            </h1>
            <span className="text-[11px] sm:text-sm text-white font-bold uppercase tracking-widest mt-1 text-glow-white">
              {t.subtitle}
            </span>
          </div>
        </div>
      </ParallaxWrapper>

      <ScrollReveal direction="up" delay={0} distance={15}>
        <section 
          className="relative overflow-hidden select-none group touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-[360px] sm:h-[480px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl border border-amber-500/40 shadow-2xl bg-stone-950 transition-all duration-300">
            {GALLERY_PHOTOS.map((photo, idx) => {
              const isCurrent = idx === selectedPhotoIndex;
              return (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={isEn ? photo.titleEN : photo.titleVI}
                    loading={idx <= 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              );
            })}

            <button 
              type="button" 
              onClick={(e) => { e.stopPropagation(); handlePrevPhoto(); }} 
              aria-label="Previous photo"
              className="absolute left-2.5 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-13 sm:h-13 text-white hover:text-amber-300 flex items-center justify-center cursor-pointer bg-black/60 backdrop-blur-md rounded-full border border-white/30 hover:border-amber-400 hover:bg-black/80 transition-all active:scale-90"
            >
              <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
            </button>
            <button 
              type="button" 
              onClick={(e) => { e.stopPropagation(); handleNextPhoto(); }} 
              aria-label="Next photo"
              className="absolute right-2.5 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-13 sm:h-13 text-white hover:text-amber-300 flex items-center justify-center cursor-pointer bg-black/60 backdrop-blur-md rounded-full border border-white/30 hover:border-amber-400 hover:bg-black/80 transition-all active:scale-90"
            >
              <ChevronRight size={24} className="sm:w-7 sm:h-7" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3.5" onClick={(e) => e.stopPropagation()}>
            {GALLERY_PHOTOS.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => handleSelectPhoto(idx)} 
                aria-label={`Photo ${idx + 1}`}
                className={`cursor-pointer rounded-full transition-all duration-300 ${
                  idx === selectedPhotoIndex 
                    ? 'w-7 sm:w-9 h-2 sm:h-2.5 bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.8)] scale-105' 
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-stone-700 hover:bg-amber-400/80'
                }`} 
              />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={25} distance={20}>
        <div className="w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl bg-stone-950">
          <iframe
            src="https://www.youtube.com/embed/3lEoVx9k-IM?vq=hd720&hd=1&high_quality=1&rel=0"
            title="Elite Travel Group - Hue Tour Video"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </ScrollReveal>

      <div className="space-y-4 pt-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-left text-glow-subtle border-b border-amber-500/20 pb-3">
          {t.sectionTitle}
        </h2>
      </div>

      <ScrollReveal direction="up" delay={40} distance={20}>
        <section 
          onClick={() => onOpenBox({
            title: t.hueOverviewTitle,
            subtitle: isEn ? 'Hue Ancient Capital Heritage' : 'Di Sản Văn Hóa Cố Đô Huế',
            description: t.overview,
            badge: isEn ? 'Overview I.1' : 'Tổng Quan I.1'
          })}
          className="p-4 sm:p-7 rounded-2xl bg-black/55 border border-amber-500/30 space-y-3 shadow-xl backdrop-blur-md cursor-pointer hover:border-amber-400 hover:bg-black/75 transition-all duration-300 group"
        >
          <div className="flex items-center text-amber-300 font-bold text-sm sm:text-base tracking-wide">
            <div className="flex items-center gap-2.5">
              <MapPin size={18} className="text-amber-400 shrink-0" />
              <h3 className="group-hover:text-amber-200 transition-colors">{t.hueOverviewTitle}</h3>
            </div>
          </div>
          <p className="text-stone-200 text-xs sm:text-sm md:text-base leading-relaxed pl-3.5 border-l-2 border-amber-500 font-mono">
            {t.overview}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={80} distance={20}>
        <section 
          onClick={() => onOpenBox({
            title: t.companyOverviewTitle,
            subtitle: isEn ? 'ELITE Travel Group Enterprise Profile' : 'Doanh Nghiệp Lữ Hành Hàng Đầu',
            description: t.companyOverview,
            badge: isEn ? 'Overview I.2' : 'Tổng Quan I.2'
          })}
          className="p-4 sm:p-7 rounded-2xl bg-black/55 border border-amber-500/30 space-y-3 shadow-xl backdrop-blur-md cursor-pointer hover:border-amber-400 hover:bg-black/75 transition-all duration-300 group"
        >
          <div className="flex items-center text-amber-300 font-bold text-sm sm:text-base tracking-wide">
            <div className="flex items-center gap-2.5">
              <Building2 size={18} className="text-amber-400 shrink-0" />
              <h3 className="group-hover:text-amber-200 transition-colors">{t.companyOverviewTitle}</h3>
            </div>
          </div>
          <p className="text-stone-200 text-xs sm:text-sm md:text-base leading-relaxed pl-3.5 border-l-2 border-amber-500 font-mono">
            {t.companyOverview}
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
}
