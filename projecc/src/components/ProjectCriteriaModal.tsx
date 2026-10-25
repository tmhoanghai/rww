import { useState } from 'react';
import { 
  QrCode, 
  X, 
  BookOpen, 
  MapPin, 
  Compass, 
  Tag, 
  ShieldAlert, 
  FileText, 
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Smartphone
} from 'lucide-react';

interface ProjectCriteriaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectCriteriaModal({ isOpen, onClose }: ProjectCriteriaModalProps) {
  const [activeTab, setActiveTab] = useState<'lich-trinh' | 'diem-den' | 'trai-nghiem' | 'dich-vu' | 'dieu-kien' | 'nguon'>('lich-trinh');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn font-mono">
      <div className="relative w-full max-w-4xl bg-[#1A1610] text-stone-100 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-500/40 flex flex-col max-h-[92vh]">

        <div className="bg-[#141009] px-6 py-4 flex items-center justify-between border-b border-amber-500/20 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-black shadow-lg">
              <QrCode size={22} />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-amber-300 tracking-tight">
                Mã QR & Tài Liệu Số Chi Tiết Dự Án
              </h2>
              <p className="text-xs text-stone-400">
                Đáp ứng tiêu chuẩn đánh giá: Lịch trình, Điểm đến, Dịch vụ, Giá bán, Điều kiện & Nguồn tham khảo
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Đóng"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">

          <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/30 flex flex-col md:flex-row items-center gap-6 shadow-inner">
            <div className="bg-white p-3 rounded-2xl shadow-xl border-4 border-amber-400/80 shrink-0 flex flex-col items-center">

              <svg width="130" height="130" viewBox="0 0 100 100" className="rounded-lg">
                <rect width="100" height="100" fill="#ffffff" />

                <rect x="10" y="10" width="26" height="26" fill="#1c1917" />
                <rect x="14" y="14" width="18" height="18" fill="#ffffff" />
                <rect x="18" y="18" width="10" height="10" fill="#1c1917" />

                <rect x="64" y="10" width="26" height="26" fill="#1c1917" />
                <rect x="68" y="14" width="18" height="18" fill="#ffffff" />
                <rect x="72" y="18" width="10" height="10" fill="#1c1917" />

                <rect x="10" y="64" width="26" height="26" fill="#1c1917" />
                <rect x="14" y="68" width="18" height="18" fill="#ffffff" />
                <rect x="18" y="72" width="10" height="10" fill="#1c1917" />

                <rect x="42" y="12" width="6" height="6" fill="#1c1917" />
                <rect x="52" y="16" width="6" height="6" fill="#1c1917" />
                <rect x="44" y="24" width="6" height="12" fill="#1c1917" />
                <rect x="54" y="28" width="6" height="6" fill="#1c1917" />
                <rect x="12" y="44" width="8" height="8" fill="#1c1917" />
                <rect x="26" y="42" width="6" height="10" fill="#1c1917" />
                <rect x="38" y="40" width="10" height="8" fill="#1c1917" />
                <rect x="54" y="44" width="12" height="6" fill="#1c1917" />
                <rect x="72" y="42" width="8" height="8" fill="#1c1917" />
                <rect x="84" y="40" width="6" height="12" fill="#1c1917" />
                <rect x="40" y="58" width="8" height="8" fill="#1c1917" />
                <rect x="56" y="56" width="6" height="10" fill="#1c1917" />
                <rect x="68" y="60" width="10" height="8" fill="#1c1917" />
                <rect x="82" y="64" width="10" height="10" fill="#1c1917" />
                <rect x="44" y="74" width="12" height="6" fill="#1c1917" />
                <rect x="62" y="76" width="8" height="10" fill="#1c1917" />
                <rect x="78" y="80" width="12" height="8" fill="#1c1917" />
              </svg>
              <span className="text-[10px] font-bold text-stone-900 mt-1.5 uppercase tracking-wider">
                Quét mã xem trực tuyến
              </span>
            </div>

            <div className="space-y-2 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold uppercase">
                <Smartphone size={14} /> Brochure Điện Tử & Cổng Số Dự Án
              </span>
              <h3 className="text-lg font-bold text-white">
                Hệ Thống Thông Tin Tour Cố Đô Huế 3 Ngày 2 Đêm (3N2Đ)
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Tài liệu số được biên soạn chuẩn mực theo đúng yêu cầu dự án: Cung cấp đầy đủ lịch trình, giới thiệu điểm đến, hoạt động trải nghiệm, dịch vụ khách sạn 4★, giá bán minh bạch, điều kiện tham gia và nguồn tư liệu tham khảo chính thống.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3">
            <button
              onClick={() => setActiveTab('lich-trinh')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'lich-trinh' ? 'bg-amber-400 text-stone-950 font-black shadow-md' : 'bg-white/5 text-stone-300 hover:bg-white/10'
              }`}
            >
              <BookOpen size={14} /> Lịch Trình (3N2Đ)
            </button>
            <button
              onClick={() => setActiveTab('diem-den')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'diem-den' ? 'bg-amber-400 text-stone-950 font-black shadow-md' : 'bg-white/5 text-stone-300 hover:bg-white/10'
              }`}
            >
              <MapPin size={14} /> Điểm Đến
            </button>
            <button
              onClick={() => setActiveTab('trai-nghiem')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'trai-nghiem' ? 'bg-amber-400 text-stone-950 font-black shadow-md' : 'bg-white/5 text-stone-300 hover:bg-white/10'
              }`}
            >
              <Compass size={14} /> Hoạt Động Trải Nghiệm
            </button>
            <button
              onClick={() => setActiveTab('dich-vu')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'dich-vu' ? 'bg-amber-400 text-stone-950 font-black shadow-md' : 'bg-white/5 text-stone-300 hover:bg-white/10'
              }`}
            >
              <Tag size={14} /> Dịch Vụ & Giá Bán
            </button>
            <button
              onClick={() => setActiveTab('dieu-kien')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'dieu-kien' ? 'bg-amber-400 text-stone-950 font-black shadow-md' : 'bg-white/5 text-stone-300 hover:bg-white/10'
              }`}
            >
              <ShieldAlert size={14} /> Điều Kiện Tham Gia
            </button>
            <button
              onClick={() => setActiveTab('nguon')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'nguon' ? 'bg-amber-400 text-stone-950 font-black shadow-md' : 'bg-white/5 text-stone-300 hover:bg-white/10'
              }`}
            >
              <FileText size={14} /> Nguồn Tham Khảo
            </button>
          </div>

          <div className="bg-black/30 p-5 rounded-2xl border border-white/10 min-h-[240px] text-xs sm:text-sm text-stone-200 leading-relaxed">

            {activeTab === 'lich-trinh' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-amber-400 font-bold text-base flex items-center gap-2">
                  <Sparkles size={16} /> Lịch Trình Chi Tiết Tour Cố Đô Huế 3 Ngày 2 Đêm (3N2Đ)
                </h4>
                <div className="space-y-3 border-l-2 border-amber-500/30 pl-4">
                  <div>
                    <strong className="text-white block">Ngày 1: Sài Gòn ✈ Huế · Lăng Minh Mạng & Khải Định · Ca Huế Sông Hương</strong>
                    <p className="text-stone-300 text-xs mt-0.5">04:00 tập trung sân bay Tân Sơn Nhất, bay Vietnam Airlines lúc 05:45 đến Phú Bài. Xe đón ăn sáng cơm hến, tham quan lăng tẩm hoàng gia và nhận phòng Khách sạn Century Riverside 4★ ven sông Hương. Tối thưởng thức Ca Huế trên thuyền rồng.</p>
                  </div>
                  <div>
                    <strong className="text-white block">Ngày 2: Chùa Thiên Mụ ➔ Nhà Vườn An Hiên ➔ Quốc Học Huế ➔ Chợ Đông Ba</strong>
                    <p className="text-stone-300 text-xs mt-0.5">Sáng ăn bún bò O Phượng, viếng Chùa Thiên Mụ và Nhà vườn An Hiên. Chiều tham quan Trường Quốc Học Huế, đi thuyền nghe ca Huế hoàng hôn, tham quan Chợ Đông Ba và ăn tối cơm niêu Chạn.</p>
                  </div>
                  <div>
                    <strong className="text-white block">Ngày 3: Đại Nội Huế 6 Điểm Di Sản ➔ Sân Bay Phú Bài ✈ Sài Gòn</strong>
                    <p className="text-stone-300 text-xs mt-0.5">Sáng ăn bánh canh Bà Đợi, khám phá trọn vẹn 6 cụm di tích vàng Đại Nội (Ngọ Môn, Điện Thái Hòa, Tử Cấm Thành, Thái Bình Lâu, Duyệt Thị Đường, Thế Miếu). 11:30 ra sân bay Phú Bài đáp chuyến bay VNA về lại Tân Sơn Nhất.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'diem-den' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-amber-400 font-bold text-base flex items-center gap-2">
                  <MapPin size={16} /> Giới Thiệu Các Điểm Đến Nổi Bật
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <strong className="text-white block mb-1">Đại Nội Kinh Thành Huế</strong>
                    <p className="text-stone-300 text-xs">Quần thể kiến trúc cung đình triều Nguyễn được UNESCO công nhận là Di sản Văn hóa Thế giới từ năm 1993.</p>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <strong className="text-white block mb-1">Chùa Thiên Mụ</strong>
                    <p className="text-stone-300 text-xs">Ngôi cổ tự linh thiêng và biểu tượng lâu đời bên dòng sông Hương thơ mộng.</p>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <strong className="text-white block mb-1">Lăng Khải Định (Ứng Lăng)</strong>
                    <p className="text-stone-300 text-xs">Công trình lăng tẩm có kiến trúc tinh xảo bậc nhất kết hợp giữa văn hóa Đông - Tây.</p>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <strong className="text-white block mb-1">Làng Hương Thủy Xuân</strong>
                    <p className="text-stone-300 text-xs">Làng nghề truyền thống lâu đời với những bó hương rực rỡ sắc màu dọc chân đồi Vọng Cảnh.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'trai-nghiem' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-amber-400 font-bold text-base flex items-center gap-2">
                  <Compass size={16} /> Hoạt Động Trải Nghiệm Độc Đáo
                </h4>
                <ul className="list-disc list-inside space-y-2 text-stone-300 text-xs sm:text-sm">
                  <li>Trải nghiệm bay phản lực hiện đại Vietnam Airlines (VNA) ngắm cảnh mây trời miền Trung.</li>
                  <li>Lên du thuyền rồng độc quyền trên dòng sông Hương nghe Ca Huế thính phòng hoàng gia về đêm.</li>
                  <li>Tự tay se hương trầm, chụp ảnh nghệ thuật tại Làng hương Thủy Xuân sắc màu.</li>
                  <li>Thưởng thức ẩm thực cung đình & các món đặc sản trứ danh (bánh bèo, nậm, lọc, cơm niêu Huế).</li>
                </ul>
              </div>
            )}

            {activeTab === 'dich-vu' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-amber-400 font-bold text-base flex items-center gap-2">
                  <Tag size={16} /> Dịch Vụ Trọn Gói & Bảng Giá Bán Minh Bạch
                </h4>
                <div className="space-y-2 text-stone-300">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span>Vé máy bay khứ hồi SGN ⇄ HUI (Vietnam Airlines + 23kg ký gửi)</span>
                    <strong className="text-white">Đã bao gồm</strong>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span>Khách sạn 4★ Century Riverside (2 đêm + Buffet sáng)</span>
                    <strong className="text-white">Đã bao gồm</strong>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span>Ăn uống ẩm thực đặc sản Cố Đô (4 bữa chính)</span>
                    <strong className="text-white">Đã bao gồm</strong>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span>Vé tham quan Đại Nội, Lăng Khải Định + Thuyền rồng Ca Huế</span>
                    <strong className="text-white">Đã bao gồm</strong>
                  </div>
                  <div className="flex justify-between pt-2 text-amber-400 font-bold text-base">
                    <span>Giá trọn gói tiêu chuẩn 3 Ngày 2 Đêm:</span>
                    <span>Từ 3.950.000 ₫ / khách</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dieu-kien' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-amber-400 font-bold text-base flex items-center gap-2">
                  <ShieldAlert size={16} /> Điều Kiện Tham Gia & Quy Định
                </h4>
                <ul className="list-disc list-inside space-y-2 text-stone-300 text-xs sm:text-sm">
                  <li>Khách hàng mang theo CMND/CCCD/Hộ chiếu bản gốc còn hạn sử dụng khi làm thủ tục sân bay.</li>
                  <li>Trẻ em từ 2 - 11 tuổi tính 75% giá vé, ngủ chung giường với người lớn.</li>
                  <li>Chính sách hủy vé linh hoạt: Hủy trước 7 ngày miễn phí đổi lịch, hoàn tiền theo quy định hãng hàng không và khách sạn.</li>
                  <li>Bảo hiểm du lịch toàn diện mệnh giá bồi thường lên đến 100.000.000 ₫ / vụ.</li>
                </ul>
              </div>
            )}

            {activeTab === 'nguon' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="text-amber-400 font-bold text-base flex items-center gap-2">
                  <FileText size={16} /> Nguồn Tư Liệu Tham Khảo Chính Thống
                </h4>
                <div className="space-y-2 text-stone-300 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                    <span>Trung tâm Bảo tồn Di tích Cố đô Huế (hueworldheritage.org.vn)</span>
                    <ExternalLink size={14} className="text-amber-400" />
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                    <span>Cục Hàng Không Việt Nam & Vietnam Airlines / Bamboo Airways</span>
                    <ExternalLink size={14} className="text-amber-400" />
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                    <span>Sở Du Lịch Tỉnh Thừa Thiên Huế - Thông tin điểm đến di sản</span>
                    <ExternalLink size={14} className="text-amber-400" />
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
