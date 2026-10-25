import React from 'react';
import { Calendar, Sparkles, MapPin, ArrowRight, Plane, Building2, Landmark, Compass, Award, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ItineraryTimelineBannerProps {
  selectedDay: number | 'all';
  onSelectDay: (day: number | 'all') => void;
}

export default function ItineraryTimelineBanner({
  selectedDay,
  onSelectDay,
}: ItineraryTimelineBannerProps) {
  const routeFlows = [
    {
      from: 'Sân bay Tân Sơn Nhất (TP.HCM)',
      to: 'Sân bay Phú Bài (HUI, Huế)',
      time: '04:00 - 07:15',
      desc: 'Làm thủ tục & Bay VNA khứ hồi',
      icon: Plane
    },
    {
      from: 'HUI (Phú Bài) / Khách sạn',
      to: 'Cơm Mỳ Bún Hến & Lăng Tẩm',
      time: '08:00 - 12:30',
      desc: 'Ăn sáng 760 Nguyễn Tất Thành & Hệ thống lăng hoàng gia',
      icon: MapPin
    },
    {
      from: 'Khách sạn Century Riverside',
      to: 'Làng Hương Thủy Xuân & Tòa Khâm',
      time: '14:15 - 21:30',
      desc: 'Check-in, làng hương, ăn tối Madam Thu 2 & Nghe ca Huế',
      icon: Landmark
    }
  ];

  const days = [
    {
      day: 1,
      title: 'Ngày 1',
      timeRange: '04:00 - 21:30',
      schedule: [
        '04:00 - Đoàn có mặt ở sân bay Tân Sơn Nhất',
        '05:45 - 07:15: Bay VNA đến Huế (HUI)',
        '08:00 - 09:00: Ăn sáng Cơm Mỳ Bún Hến (760 Nguyễn Tất Thành)',
        '09:30 - 12:30: Lăng Minh Mạng & Lăng Khải Định',
        '13:00 - 14:00: Ăn trưa bánh gánh Huế (51a Võ Thị Sáu)',
        '14:15 - 15:30: Check-in Century Riverside Hotel',
        '16:00 - 18:00: Làng Hương Thủy Xuân',
        '18:30 - 19:30: Ăn tối Madam Thu 2',
        '20:00 - 21:30: Ca Huế sông Hương & Nghỉ ngơi'
      ],
      icon: Plane,
      color: 'from-amber-500 to-yellow-600',
      badge: 'Khởi hành & Di sản'
    },
    {
      day: 2,
      title: 'Ngày 2',
      timeRange: '08:00 - 20:00',
      schedule: [
        '08:00 - 08:30: Ăn sáng bún bò O Phượng (24 Nguyễn Khuyến)',
        '08:30 - 09:30: Chùa Thiên Mụ',
        '09:45 - 11:00: Nhà vườn An Hiên',
        '11:15 - 12:15: Ăn trưa Không Gian Xưa (76 Lê Lợi)',
        '12:30 - 15:00: Nghỉ ngơi tại khách sạn',
        '15:15 - 16:00: Trường THPT Quốc Học Huế',
        '16:15 - 18:00: Thuyền nghe ca Huế (Bến Tòa Khâm)',
        '18:00 - 19:00: Chợ Đông Ba',
        '19:15 - 20:00: Ăn tối Cơm Niêu Chạn & Về khách sạn'
      ],
      icon: Landmark,
      color: 'from-amber-400 to-amber-600',
      badge: 'Văn hóa & Trải nghiệm'
    },
    {
      day: 3,
      title: 'Ngày 3',
      timeRange: '06:15 - 15:00',
      schedule: [
        '06:15 - 06:50: Ăn sáng Bánh Canh Bà Đợi',
        '07:00 - 10:00: Tham quan Đại Nội Huế (Ngọ Môn, Thái Hòa, Tử Cấm Thành, Thái Bình Lâu, Duyệt Thị Đường, Thế Miếu)',
        '10:15 - 10:45: Check out khách sạn',
        '11:30: Có mặt tại sân bay Phú Bài (HUI)',
        '13:20 - 14:50: Di chuyển về TP.HCM',
        '15:00: Tạm biệt đoàn'
      ],
      icon: Compass,
      color: 'from-yellow-400 to-amber-500',
      badge: 'Hoàng Thành & Kết Thúc'
    },
  ];

  return (
    <ScrollReveal>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-zinc-900 to-stone-950 p-6 sm:p-10 border border-amber-500/30 shadow-[0_0_50px_rgba(217,119,6,0.15)] font-mono">

        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" />

        <div className="relative z-10 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {days.map((item) => {
              const IconComponent = item.icon;
              const isSelected = selectedDay === item.day;

              return (
                <div
                  key={item.day}
                  onClick={() => onSelectDay(item.day)}
                  className={`relative z-10 group cursor-pointer transition-all duration-500 rounded-2xl p-6 flex flex-col justify-between border backdrop-blur-md ${
                    isSelected
                      ? 'bg-gradient-to-b from-stone-800/90 to-stone-900/90 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.35)] scale-[1.02]'
                      : 'bg-stone-900/60 border-amber-500/20 hover:border-amber-400/60 hover:bg-stone-800/70 hover:shadow-[0_0_20px_rgba(217,119,6,0.2)]'
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/0 via-amber-400/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white text-glow-white tracking-wide group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    <div className="pt-2 space-y-1.5 max-h-48 overflow-y-auto pr-1">
                      {item.schedule.map((sch, i) => (
                        <div 
                          key={i} 
                          className="group/sch text-[11px] text-stone-300 hover:text-amber-100 flex items-start gap-1.5 bg-stone-800/50 hover:bg-stone-800/90 p-2 rounded-lg border border-white/5 hover:border-amber-400/50 hover:shadow-[0_0_14px_rgba(251,191,36,0.25)] hover:translate-x-1 transition-all duration-200 font-sans cursor-default"
                        >
                          <span className="text-amber-400 group-hover/sch:scale-125 group-hover/sch:drop-shadow-[0_0_8px_rgba(251,191,36,0.9)] font-bold shrink-0 transition-transform">▸</span>
                          <span className="leading-snug group-hover/sch:drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]">{sch}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
