import { useState } from 'react';
import { 
  Plane, 
  Printer, 
  X, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Receipt, 
  Award, 
  Clock, 
  Sparkles,
  PhoneCall,
  ExternalLink
} from 'lucide-react';
import { FLIGHT_TICKET_BREAKDOWN, TOTAL_FLIGHT_TICKET_PRICE, REAL_BASE_TICKET_PRICE_ONE_WAY } from '../data/flightAirbusData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function BrochureModal({ isOpen, onClose, onOpenBooking }: BrochureModalProps) {
  const [passengerCount, setPassengerCount] = useState<number>(1);
  const [printMode, setPrintMode] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    setPrintMode(true);
    setTimeout(() => {
      window.print();
      setPrintMode(false);
    }, 400);
  };

  const baseTotal = TOTAL_FLIGHT_TICKET_PRICE * passengerCount;
  const tourPackagePrice = 4850000; 
  const grandTotal = baseTotal + (tourPackagePrice * passengerCount);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className={`relative w-full ${printMode ? 'max-w-none' : 'max-w-4xl'} bg-[#FAF8F5] text-stone-900 rounded-2xl shadow-2xl overflow-hidden border border-amber-900/30 flex flex-col max-h-[92vh]`}>

        <div className="bg-[#1C1812] text-[#F5EFE0] px-6 py-4 flex items-center justify-between border-b border-amber-600/30 shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-bold shadow-lg">
              <Plane size={20} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold tracking-wide text-amber-300 font-mono">
                BROCHURE CHÍNH THỨC · ELITE TRAVEL GROUP (AIRBUS 770)
              </h2>
              <p className="text-xs text-stone-300">
                Ấn phẩm thông tin di sản Huế & biểu giá hàng không thực tế trọn gói
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
              title="In hoặc xuất PDF Brochure"
            >
              <Printer size={15} />
              <span className="hidden sm:inline">In / Xuất PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Đóng brochure"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#FAF8F5] text-stone-900 print:p-0">

          <div className="text-center border-b-2 border-amber-800/20 pb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold tracking-widest uppercase mb-1 border border-amber-300">
              <Sparkles size={13} className="text-amber-700" />
              Ấn Phẩm Phát Hành Chính Thức
            </div>
            <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#1C1812] tracking-tight">
              Chặng Bay Thực Tế Airbus A321 · Tân Sơn Nhất (SGN) ⇄ Phú Bài (HUI)
            </h1>
            <p className="text-sm sm:text-base font-medium text-stone-700 max-w-2xl mx-auto">
              Bảng Giá Vé Máy Bay Airbus Thực Tế & Chương Trình Khám Phá Cố Đô Huế 4 Ngày 3 Đêm Chuẩn Mực Cao Cấp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-900/10 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Plane size={16} className="text-amber-700" />
                <span>Tàu Bay Airbus A321 / A320</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Động cơ phản lực êm ái, bay thẳng 80 phút, phục vụ tiêu chuẩn hàng không thương gia & phổ thông hiện đại.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-900/10 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Receipt size={16} className="text-amber-700" />
                <span>Giá Thực Tế Từ 770k / Chiều</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Biểu giá niêm yết minh bạch theo hãng Vietnam Airlines / Vietjet Air, đã gồm thuế VAT và phí sân bay đầy đủ.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-900/10 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <ShieldCheck size={16} className="text-amber-700" />
                <span>An Ninh Sân Bay Chuẩn Hướng</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Khởi hành từ Sân bay Tân Sơn Nhất (T1) và hạ cánh thẳng Sân bay Quốc tế Phú Bài (T2 mới hiện đại tại Huế).
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-300 pb-3">
              <div>
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  Bảng Giá Vé Máy Bay Airbus Thực Tế (Từ 770.000 ₫)
                </h3>
                <p className="text-xs text-stone-600">
                  Biểu giá hàng không thực tế theo các hãng (Vietnam Airlines / Vietjet Air) khai thác tàu bay Airbus A321.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-stone-200/70 px-3 py-1.5 rounded-xl self-start print:hidden">
                <span className="text-xs font-bold text-stone-700">Số lượng khách:</span>
                {[1, 2, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setPassengerCount(num)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      passengerCount === num 
                        ? 'bg-[#1C1812] text-amber-300 shadow' 
                        : 'bg-white text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-stone-300 bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1C1812] text-[#F5EFE0] text-xs uppercase tracking-wider">
                    <th className="p-3.5 text-center w-14">STT</th>
                    <th className="p-3.5">Hạng Mục Cấu Thành Vé Máy Bay</th>
                    <th className="p-3.5">Nội Dung Chi Tiết Thực Tế</th>
                    <th className="p-3.5 text-right">Thành Tiền (VNĐ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-xs sm:text-sm">
                  {FLIGHT_TICKET_BREAKDOWN.map((item, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                      <td className="p-3.5 text-center font-bold text-stone-500 font-mono">{idx + 1}</td>
                      <td className="p-3.5 font-bold text-stone-900">{item.item}</td>
                      <td className="p-3.5 text-stone-600 leading-relaxed">{item.desc}</td>
                      <td className="p-3.5 text-right font-mono font-bold text-amber-900 whitespace-nowrap">
                        {item.amount.toLocaleString('vi-VN')} ₫
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-amber-900 text-amber-50 font-bold">
                    <td colSpan={3} className="p-4 text-right font-serif tracking-wide text-sm sm:text-base">
                      Tổng Giá Vé Khứ Hồi Thực Tế Trọn Gói ({passengerCount} Khách SGN ⇄ HUI):
                    </td>
                    <td className="p-4 text-right font-mono text-base sm:text-lg text-amber-300 whitespace-nowrap">
                      {(TOTAL_FLIGHT_TICKET_PRICE * passengerCount).toLocaleString('vi-VN')} ₫
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-stone-700 flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-amber-900">Cam kết minh bạch giá:</span> Giá vé trên đã bao gồm đầy đủ thuế giá trị gia tăng (VAT 8%), phí dịch vụ hành khách & an ninh sân bay tại cả 2 đầu Sân bay Tân Sơn Nhất và Phú Bài, cùng phụ thu quản trị hãng bay & bảo hiểm chuyến bay trọn gói.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-300">
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
                <Calendar size={18} className="text-amber-700" />
                Tóm Tắt Lịch Trình 3 Ngày 2 Đêm (3N2Đ)
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-900 shrink-0">Ngày 1:</span>
                  <span>Bay SGN ➔ HUI bằng Airbus A321, xe Limousine đón về khách sạn 4★ Century Riverside, trưa nghỉ ngơi, tối du thuyền rồng nghe Ca Huế sông Hương.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-900 shrink-0">Ngày 2:</span>
                  <span>Khám phá trọn vẹn Di Sản Huế: Đại Nội Hoàng Thành, Chùa Thiên Mụ, trưa về khách sạn 4★ nghỉ trưa tránh nắng, chiều thăm Lăng Khải Định, Lăng Tự Đức, Làng Hương Thủy Xuân.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-900 shrink-0">Ngày 3:</span>
                  <span>Điểm tâm buffet sáng, dạo chơi &amp; mua sắm đặc sản Chợ Đông Ba đến đúng 10h00 sáng, về trả phòng 4★, xe Limousine tiễn ra Sân bay Phú Bài bay về Tân Sơn Nhất.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#1C1812] text-[#F5EFE0] flex flex-col justify-between space-y-4 shadow-lg">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-amber-400 block mb-1">
                  Đầu tư trọn gói tiêu chuẩn cao cấp
                </span>
                <h4 className="text-xl font-serif font-bold text-white">
                  Vé Máy Bay + Tour 3N2Đ Khách Sạn 4⭐
                </h4>
                <div className="mt-4 space-y-2 border-t border-stone-800 pt-3 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-400">Vé máy bay khứ hồi ({passengerCount} khách):</span>
                    <span className="font-mono font-bold text-amber-300">{(TOTAL_FLIGHT_TICKET_PRICE * passengerCount).toLocaleString('vi-VN')} ₫</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400">Tour du lịch 3N2Đ ({passengerCount} khách):</span>
                    <span className="font-mono font-bold text-amber-300">{(tourPackagePrice * passengerCount).toLocaleString('vi-VN')} ₫</span>
                  </div>
                  <div className="flex justify-between border-t border-stone-700 pt-2 text-sm sm:text-base font-bold text-white">
                    <span>Tổng Dự Kiến Trọn Gói:</span>
                    <span className="font-mono text-amber-400">{grandTotal.toLocaleString('vi-VN')} ₫</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                <span>Liên Hệ Tư Vấn & Giữ Chỗ Tour</span>
              </button>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-stone-300 text-xs text-stone-500 space-y-1">
            <p className="font-medium text-stone-700">ELITE TRAVEL GROUP · ĐỐI TÁC HÀNG KHÔNG AIRBUS 770</p>
            <p>Hotline hỗ trợ 24/7: 1900 1800 · Website chính thức: www.tourhuedisan.vn</p>
          </div>

        </div>

      </div>
    </div>
  );
}
