import React from 'react';
import { Sparkles, MapPin, Compass, Music, Flame, Calendar } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface HeroProps {
  onExploreMonuments: () => void;
  onExploreCuisine: () => void;
  onExploreCrafts: () => void;
  onExploreItineraries: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMonuments,
  onExploreCuisine,
  onExploreCrafts,
  onExploreItineraries,
}) => {
  return (
    <div className="relative overflow-hidden bg-linear-to-b from-[#2B0E11] via-[#4A1519] to-[#781D22] text-[#FDF8EE] pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#C59B27]">

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F7D070_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#F7D070]/60 pointer-events-none" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#F7D070]/60 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7D070]/15 border border-[#F7D070]/40 text-[#FCE6A3] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#F7D070]" />
            <span>Xứ Sở Thần Kinh • Cố Đô Trầm Tích 143 Năm Triều Nguyễn</span>
          </div>

          <h1 className="font-imperial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Vẻ Đẹp Vĩnh Cửu <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FCE6A3] via-[#F7D070] to-[#E5A823]">
              Cố Đô Huế Mộng Mơ
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#E8D9C8] font-light leading-relaxed max-w-2xl mx-auto">
            Hòa mình vào chiều sâu trầm mặc của cung điện hoàng gia, chiêm ngưỡng lăng tẩm uy nghi, thưởng thức 1.700 món ăn cung đình lẫn dân gian, và cảm nhận khúc ca Huế êm đềm trôi trên dòng Hương Giang.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onExploreMonuments}
              className="px-5 py-2.5 rounded-xl bg-linear-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-amber-950/40 transition-all flex items-center gap-2 cursor-pointer border border-[#FCD34D]/30"
            >
              <Compass className="w-4 h-4 text-amber-200" />
              <span>Khám Phá Di Sản & Lăng Tẩm</span>
            </button>

            <button
              onClick={onExploreCuisine}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FDF8EE] font-semibold text-xs sm:text-sm backdrop-blur-xs transition-all flex items-center gap-2 cursor-pointer border border-white/20"
            >
              <Flame className="w-4 h-4 text-amber-300" />
              <span>Ẩm Thực 1.700 Món Huế</span>
            </button>

            <button
              onClick={() => soundEffects.playPerfumeRiverMelody()}
              className="px-4 py-2.5 rounded-xl bg-[#F7D070]/20 hover:bg-[#F7D070]/30 text-[#FCE6A3] font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer border border-[#F7D070]/40"
              title="Phát giai điệu Ngũ Cung truyền thống"
            >
              <Music className="w-4 h-4 text-[#F7D070]" />
              <span>Giai Điệu Ngũ Cung</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div
            onClick={onExploreMonuments}
            className="p-4 rounded-xl bg-black/25 backdrop-blur-xs border border-white/10 text-center hover:border-[#F7D070]/60 transition-all cursor-pointer group"
          >
            <div className="text-2xl sm:text-3xl font-bold font-imperial text-[#F7D070] group-hover:scale-105 transition-transform">
              13
            </div>
            <div className="text-xs font-semibold text-white mt-1">Đời Vua Triều Nguyễn</div>
            <div className="text-[11px] text-[#C4B5A5] mt-0.5">143 năm hoàng kim (1802-1945)</div>
          </div>

          <div
            onClick={onExploreMonuments}
            className="p-4 rounded-xl bg-black/25 backdrop-blur-xs border border-white/10 text-center hover:border-[#F7D070]/60 transition-all cursor-pointer group"
          >
            <div className="text-2xl sm:text-3xl font-bold font-imperial text-[#F7D070] group-hover:scale-105 transition-transform">
              7
            </div>
            <div className="text-xs font-semibold text-white mt-1">Quần Thể Lăng Tẩm</div>
            <div className="text-[11px] text-[#C4B5A5] mt-0.5">Khải Định, Tự Đức, Minh Mạng...</div>
          </div>

          <div
            onClick={onExploreCuisine}
            className="p-4 rounded-xl bg-black/25 backdrop-blur-xs border border-white/10 text-center hover:border-[#F7D070]/60 transition-all cursor-pointer group"
          >
            <div className="text-2xl sm:text-3xl font-bold font-imperial text-[#F7D070] group-hover:scale-105 transition-transform">
              1.700+
            </div>
            <div className="text-xs font-semibold text-white mt-1">Món Ăn Xứ Huế</div>
            <div className="text-[11px] text-[#C4B5A5] mt-0.5">Cung đình & Dân gian độc bản</div>
          </div>

          <div
            onClick={onExploreItineraries}
            className="p-4 rounded-xl bg-black/25 backdrop-blur-xs border border-white/10 text-center hover:border-[#F7D070]/60 transition-all cursor-pointer group"
          >
            <div className="text-2xl sm:text-3xl font-bold font-imperial text-[#F7D070] group-hover:scale-105 transition-transform">
              1-3 Ngày
            </div>
            <div className="text-xs font-semibold text-white mt-1">Lịch Trình Tinh Tuyển</div>
            <div className="text-[11px] text-[#C4B5A5] mt-0.5">Tối ưu thời gian & lộ trình</div>
          </div>
        </div>
      </div>
    </div>
  );
};
