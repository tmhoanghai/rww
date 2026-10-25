import { useState } from 'react';
import { BookOpen, Users, Compass, HelpCircle, ShieldCheck, Award, MessageCircle } from 'lucide-react';

const WORKSHOP_QA = [
  {
    q: 'Q1: Làm sao để biến một điểm đến cũ thành một tour mới hấp dẫn du khách?',
    a: 'Tăng cường tính "Trải nghiệm" và "Xây dựng câu chuyện" (Storytelling). Thay vì chỉ chụp hình ngắm cảnh thuần túy, tour đưa vào các hoạt động tương tác như: tự tay se que hương trầm tại Làng Thủy Xuân, nghe Ca Huế thính phòng truyền thống & thả hoa đăng trên Sông Hương, và thưởng thức ẩm thực theo chủ đề Cố đô.',
  },
  {
    q: 'Q2: Bảo hiểm du lịch được tính theo đầu người hay tính chung cho cả đoàn?',
    a: 'Bảo hiểm du lịch BẮT BUỘC phải tính theo đầu người. Khi mua bảo hiểm, công ty lữ hành phải gửi danh sách trích ngang chính xác gồm: Họ tên, Ngày tháng năm sinh, Số CCCD/Hộ chiếu của từng cá nhân để công ty bảo hiểm cấp hợp đồng bảo vệ riêng biệt.',
  },
  {
    q: 'Q3: Làm thế nào để xin được báo giá chi tiết từ các nhà cung cấp (Khách sạn, Nhà hàng)?',
    a: 'Học sinh có thể tra cứu giá niêm yết trên các nền tảng đặt phòng trực tuyến (Agoda, Booking, Traveloka) rồi chiết khấu đi 10% - 15% để làm giá đại lý định mức. Ngoài ra có thể liên hệ trực tiếp phòng Sales khách sạn, giới thiệu rõ là học sinh làm dự án STEM để nhận giá đối tác.',
  },
  {
    q: 'Q4: Yếu tố nào giúp quảng bá sản phẩm Tour thu hút và có tính cạnh tranh cao?',
    a: 'Đánh trúng cảm xúc và nhu cầu giải tỏa của đối tượng khách hàng mục tiêu. Kết hợp hình ảnh chân thực, câu chuyện văn hóa có chiều sâu và làm nổi bật "Điểm nhấn khác biệt" (Unique Selling Point - USP) của tour.',
  },
];

export default function AboutProject() {
  const [openQaIndex, setOpenQaIndex] = useState<number | null>(0);

  return (
    <section id="gioi-thieu" className="py-16 lg:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <span>Dự án Giáo dục STEM Du Lịch / MISCO 2026</span>
            <span aria-hidden="true">·</span>
            <span>Trường THPT Lương Thế Vinh (TP.HCM)</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900">
            Giới Thiệu Đồ Án &amp; Nền Tảng Chuyên Môn
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Chương trình tour Huế 3N2Đ được kiến tạo dựa trên nền tảng phương pháp luận từ buổi tập huấn nghiệp vụ du lịch lữ hành quốc tế và định hướng giáo dục liên môn (Lịch sử, Địa lý, Ngữ văn, GD Kinh tế &amp; Pháp luật).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200/90 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">01. Bản chất của Tour</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Công thức Cấu thành</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              <strong>Tour = Tuyến điểm + Lịch trình + Dịch vụ + Giá bán + Trải nghiệm khách hàng</strong>. Mỗi thành phần đều được tính toán bằng số liệu thực tế chứ không suy đoán cảm tính.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200/90 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 font-mono">02. Thị trường &amp; Mô hình</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Domestic &amp; Inbound</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Phù hợp cho cả khách trong nước lẫn khách quốc tế. Mô hình Tour Trọn gói (Package Tour) với quy mô đoàn định mức 30 khách nhằm tối ưu chi phí cố định cho xe 45 chỗ và hướng dẫn viên.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200/90 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">03. An toàn &amp; Pháp lý</span>
            <h3 className="font-serif text-lg font-bold text-stone-900">Bảo vệ Quyền lợi Du khách</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Bắt buộc 100% khách có bảo hiểm du lịch theo đầu người (mức bồi thường 50.000.000 ₫/vụ). Minh bạch tuyệt đối các khoản bao gồm và không bao gồm để ngăn ngừa tranh chấp phát sinh.
            </p>
          </div>
        </div>

        <div className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-8 border border-stone-200">
          <div className="flex items-center gap-2 mb-6">
            <MessageCircle className="text-amber-800" size={20} />
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Giải Đáp Thắc Mắc Thực Tế Từ Buổi Tập Huấn THPT Lương Thế Vinh
            </h3>
          </div>

          <div className="space-y-3">
            {WORKSHOP_QA.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200/90 overflow-hidden"
              >
                <button
                  onClick={() => setOpenQaIndex(openQaIndex === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-stone-900">
                    {item.q}
                  </span>
                  <span className="text-xs font-bold text-amber-800 shrink-0">
                    {openQaIndex === idx ? 'Thu gọn' : 'Xem giải đáp'}
                  </span>
                </button>

                {openQaIndex === idx && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    <p className="p-3 bg-stone-50 rounded-lg text-stone-800 border-l-2 border-amber-800">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
