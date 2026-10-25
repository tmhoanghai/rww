import { 
  Building2, 
  Sparkles, 
  Bed, 
  Plane, 
  Utensils, 
  Compass, 
  ShieldCheck,
  CheckCircle2,
  Award
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export default function PricingSection({ onOpenBooking }: PricingSectionProps) {
  return (
    <div className="space-y-12 font-mono">
      <ScrollReveal direction="up" delay={0}>
        <div className="max-w-5xl mx-auto">
          <div className="border-2 border-amber-400 rounded-3xl p-6 sm:p-10 shadow-2xl relative bg-stone-900/90 backdrop-blur-md text-stone-100">

            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-stone-950 text-xs font-black uppercase px-5 py-1.5 rounded-full shadow-lg tracking-wider">
              Marketing &amp; Tinh Hoa Cố Đô Huế
            </span>

            <div className="text-center mt-2 mb-8 border-b border-white/10 pb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                Chi Tiết Đẳng Cấp Tour Di Sản Cố Đô Huế 3N2Đ
              </h3>
              <p className="text-sm sm:text-base text-stone-300 mt-2 flex items-center justify-center gap-2 flex-wrap">
                <Building2 size={18} className="text-amber-400" />
                <strong className="text-white">Khách Sạn 4★ Century Riverside</strong>
                <span>· 49 Lê Lợi, TP. Huế (Bên bờ Sông Hương, trung tâm Cố Đô)</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Plane size={20} />
                </div>
                <h4 className="text-base font-bold text-white">Bay Vietnam Airlines (VNA) Cao Cấp</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Chuyến bay thẳng Tân Sơn Nhất ➔ Phú Bài êm ái, đúng giờ. Tiêu chuẩn 4 sao hàng không quốc gia, tối ưu thời gian trải nghiệm.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Bed size={20} />
                </div>
                <h4 className="text-base font-bold text-white">Nghỉ Dưỡng 4★ Century Riverside</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  3 đêm lưu trú tại khách sạn 4 sao đẳng cấp hướng trọn dòng Sông Hương, buffet sáng thượng hạng mỗi ngày.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Utensils size={20} />
                </div>
                <h4 className="text-base font-bold text-white">Ẩm Thực Cung Đình & Á - Âu</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Tiệc cung đình ngày 1, thực đơn Á - Âu đa dạng, cơm cung đình tinh tế và dạo phố đi bộ Huế về đêm rực rỡ.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border border-amber-500/30 space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Award className="text-amber-400 shrink-0" size={26} />
                <h4 className="text-lg font-bold text-white">Cam Kết Chất Lượng Dịch Vụ Từ Elite Travel Group</h4>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Không phát sinh chi phí ẩn trong suốt hành trình</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Xe Limousine đời mới đưa đón tận nơi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Hướng dẫn viên chuyên sâu lịch sử Cố Đô</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Bảo hiểm du lịch toàn diện tối đa 100.000.000 ₫</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={onOpenBooking}
                className="px-10 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-base rounded-2xl shadow-xl shadow-amber-500/30 cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto"
              >
                <Sparkles size={20} />
                <span>Đặt Tour Ngay Trọn Gói 3.950.000 ₫ / Khách</span>
              </button>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
