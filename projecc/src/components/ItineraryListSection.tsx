import { MapPin, Sun, Sunset, Moon, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ItineraryListSectionProps {
  onOpenBooking?: () => void;
  onSelectDay?: (day: number) => void;
  onOpenBox: (data: { title: string; subtitle?: string; description: string; bullets?: string[]; image?: string; badge?: string; timeRange?: string; locationNote?: string; colorTheme?: 'amber' | 'orange' | 'indigo' }) => void;
  lang: 'VI' | 'EN';
}

interface Item {
  time: string;
  activity: string;
  locationNote: string;
  shortInfo?: string;
  details?: string;
  badge?: string;
}

interface DaySessionData {
  sessionKey: 'morning' | 'noon' | 'evening';
  sessionName: string;
  timeRange: string;
  icon: typeof Sun;
  colorClass: string;
  items: Item[];
}

export default function ItineraryListSection({ onOpenBox, lang }: ItineraryListSectionProps) {
  const isEn = lang === 'EN';

  const t = {
    dayBadge: isEn ? 'DAY' : 'NGÀY',
    session: {
      morning: isEn ? 'Morning' : 'Sáng',
      noon: isEn ? 'Noon' : 'Trưa',
      evening: isEn ? 'Afternoon - Evening' : 'Chiều - Tối',
    }
  };

  const day1Sessions: DaySessionData[] = [
    {
      sessionKey: 'morning',
      sessionName: t.session.morning,
      timeRange: '04:00 - 11:15',
      icon: Sun,
      colorClass: 'from-amber-500/20 to-amber-600/5 text-amber-300 border-amber-500/30',
      items: [
        {
          time: '04:00',
          activity: isEn ? 'Group gathers at Tan Son Nhat Airport (HCMC) for check-in' : 'Đoàn có mặt ở sân bay Tân Sơn Nhất (TPHCM) để làm thủ tục',
          locationNote: isEn ? 'Tan Son Nhat Airport, Domestic T1' : 'Sân bay Tân Sơn Nhất, Ga Quốc Nội T1',
          badge: isEn ? 'Check-in' : 'Thủ Tục'
        },
        {
          time: '05:45 - 07:15',
          activity: isEn ? 'Flight from HCMC to Hue by Vietnam Airlines (VNA)' : 'Di chuyển từ TPHCM đến Huế bằng máy bay VNA',
          locationNote: 'SGN ✈ HUI (Phú Bài, Huế)',
          badge: 'Vietnam Airlines'
        },
        {
          time: '08:00 - 09:00',
          activity: isEn ? 'Breakfast: Com My Bun Hen' : 'Ăn sáng ở Cơm Mỳ Bún Hến',
          locationNote: '760 Nguyễn Tất Thành, Phú Bài, Huế',
          badge: isEn ? 'Breakfast' : 'Ăn Sáng'
        },
        {
          time: '09:30 - 10:45',
          activity: isEn ? 'Visit Minh Mang Royal Tomb' : 'Tham quan Lăng Minh Mạng',
          locationNote: isEn ? 'Minh Mang Tomb, Huong Tho, Hue' : 'Hiếu Lăng, Hương Thọ, TP. Huế',
          shortInfo: isEn 
            ? 'Majestic royal tomb with symmetrical architecture blending pristine nature and imperial heritage.'
            : 'Lăng Minh Mạng uy nghiêm bậc nhất triều Nguyễn, nổi bật với kiến trúc đối xứng hòa quyện thiên nhiên. Điểm đến không thể bỏ lỡ để cảm nhận trọn vẹn sự giao hòa giữa quyền uy hoàng gia và phong thủy thâm trầm.',
          badge: isEn ? 'Heritage' : 'Di Sản'
        },
        {
          time: '10:45 - 11:15',
          activity: isEn ? 'Transfer to Khai Dinh Royal Tomb' : 'Di chuyển đến lăng Khải Định',
          locationNote: isEn ? 'Scenic road to Thuy Bang' : 'Tuyến đường di sản Thủy Bằng',
          badge: isEn ? 'Transfer' : 'Di Chuyển'
        }
      ]
    },
    {
      sessionKey: 'noon',
      sessionName: t.session.noon,
      timeRange: '11:15 - 15:30',
      icon: Sunset,
      colorClass: 'from-orange-500/20 to-orange-600/5 text-orange-300 border-orange-500/30',
      items: [
        {
          time: '11:15 - 12:30',
          activity: isEn ? 'Visit Khai Dinh Royal Tomb (Ung Lang)' : 'Tham quan Lăng Khải Định',
          locationNote: 'Ứng Lăng, Thủy Bằng, Hương Thủy, Huế',
          shortInfo: isEn 
            ? 'Exquisite East-West architectural masterpiece renowned for intricate ceramic mosaic artistry.'
            : 'Kiệt tác lăng tẩm kết hợp Đông - Tây tinh xảo bậc nhất, nổi tiếng với nghệ thuật khảm sành sứ đỉnh cao. Nơi lưu giữ những di mạo nghệ thuật cung đình độc nhất vô nhị.',
          badge: isEn ? 'Architecture' : 'Kiến Trúc'
        },
        {
          time: '13:00 - 14:00',
          activity: isEn ? 'Lunch: Traditional Hue Folk Cakes at Banh Ganh Hue' : 'Ăn trưa ở bánh gánh Huế',
          locationNote: '51a Võ Thị Sáu, Thuận Hóa, TP. Huế',
          badge: isEn ? 'Specialty' : 'Đặc Sản'
        },
        {
          time: '14:15 - 15:30',
          activity: isEn ? 'Check-in and rest at 4★ Century Riverside Hotel' : 'Check in và nghỉ ngơi tại khách sạn Century Riverside Hotel',
          locationNote: '49 Lê Lợi, TP. Huế (Bờ sông Hương)',
          badge: '4★ Hotel'
        }
      ]
    },
    {
      sessionKey: 'evening',
      sessionName: t.session.evening,
      timeRange: '16:00 - 21:30',
      icon: Moon,
      colorClass: 'from-indigo-500/20 to-indigo-600/5 text-indigo-300 border-indigo-500/30',
      items: [
        {
          time: '16:00 - 18:00',
          activity: isEn ? 'Visit Thuy Xuan Incense Village (sightseeing, royal costume rental, incense making, souvenirs)' : 'Tham quan làng Hương Thủy Xuân (chụp ảnh trang phục cung đình, trải nghiệm làm hương, mua quà)',
          locationNote: '84 Huyền Trân Công Chúa, Thủy Xuân, Huế',
          shortInfo: isEn 
            ? 'Vibrant century-old incense craft village offering picturesque photo spots and handicraft experiences.'
            : 'Làng nghề truyền thống rực rỡ sắc màu hương sen, hương quế trăm năm tuổi tại Cố đô. Trải nghiệm check-in nghệ thuật tuyệt đẹp và tự tay làm hương làm kỷ niệm.',
          badge: isEn ? 'Culture' : 'Trải Nghiệm'
        },
        {
          time: '18:30 - 19:30',
          activity: isEn ? 'Dinner at Madam Thu 2 Restaurant' : 'Ăn tối tại Madam Thu 2',
          locationNote: '4 Võ Thị Sáu, Thuận Hóa, TP. Huế',
          badge: isEn ? 'Dinner' : 'Ẩm Thực Tối'
        },
        {
          time: '20:00 - 21:00',
          activity: isEn ? 'Listen to Hue royal folk songs on dragon boat along the Perfume River' : 'Nghe ca Huế trên sông Hương tại bến thuyền Tòa Khâm',
          locationNote: 'Bến Thuyền Tòa Khâm, 5 Lê Lợi, TP. Huế',
          shortInfo: isEn 
            ? 'Listen to royal Hue court folk songs on dragon boats floating poetically along the Perfume River.'
            : 'Thưởng thức nghệ thuật ca Huế cung đình tao nhã trên thuyền rồng lung linh giữa dòng Hương Giang. Trải nghiệm văn hóa di sản UNESCO sâu lắng đầy hoài niệm.',
          badge: isEn ? 'Dragon Boat' : 'Thuyền Rồng'
        },
        {
          time: '21:30',
          activity: isEn ? 'Return to hotel and rest' : 'Về lại khách sạn và nghỉ ngơi',
          locationNote: 'Century Riverside Hotel',
          badge: isEn ? 'Rest' : 'Nghỉ Đêm'
        }
      ]
    }
  ];

  const day2Sessions: DaySessionData[] = [
    {
      sessionKey: 'morning',
      sessionName: t.session.morning,
      timeRange: '08:00 - 11:15',
      icon: Sun,
      colorClass: 'from-amber-500/20 to-amber-600/5 text-amber-300 border-amber-500/30',
      items: [
        {
          time: '08:00 - 08:30',
          activity: isEn ? 'Breakfast: Bun bo O Phuong' : 'Ăn sáng tại bún bò O Phượng',
          locationNote: '24 Nguyễn Khuyến, TP. Huế',
          badge: isEn ? 'Hue Beef Noodle' : 'Bún Bò Huế'
        },
        {
          time: '08:30 - 09:30',
          activity: isEn ? 'Visit Thien Mu Pagoda (historic 400-year-old sanctuary)' : 'Tham quan chùa Thiên Mụ',
          locationNote: '140–142 đường Nguyễn Phúc Nguyên, P. Hương Long, TP. Huế',
          shortInfo: isEn 
            ? '400-year-old sanctuary associated with the region\'s history and iconic Phuoc Duyen Tower.'
            : 'Đệ nhất cổ tự 400 năm tuổi gắn liền với lịch sử khai hoang xứ Đàng Trong và tháp Phước Duyên biểu tượng. Điểm chiêm bái tâm linh linh thiêng mang lại sự bình an.',
          badge: isEn ? 'Ancient Pagoda' : 'Đệ Nhất Cổ Tự'
        },
        {
          time: '09:45 - 11:00',
          activity: isEn ? 'Visit An Hien Garden House' : 'Tham quan Nhà vườn An Hiên',
          locationNote: '58 Nguyễn Phúc Nguyên, Kim Long, TP. Huế',
          shortInfo: isEn 
            ? 'Exquisite traditional noble garden house preserving the refined lifestyle of Hue aristocracy.'
            : 'Kiến trúc nhà rường quý tộc tiêu biểu bậc nhất xứ Huế với khu vườn trăm hoa khoe sắc thắm. Nơi lưu giữ hồn cốt văn hóa nhà vườn phong lưu tao nhã của giới quý tộc.',
          badge: isEn ? 'Noble Garden' : 'Nhà Vườn Quý Tộc'
        },
        {
          time: '11:00 - 11:15',
          activity: isEn ? 'Transfer to restaurant' : 'Di chuyển tới nhà hàng',
          locationNote: 'Tuyến đường Lê Lợi, TP. Huế',
          badge: isEn ? 'Transfer' : 'Di Chuyển'
        }
      ]
    },
    {
      sessionKey: 'noon',
      sessionName: t.session.noon,
      timeRange: '11:15 - 15:15',
      icon: Sunset,
      colorClass: 'from-orange-500/20 to-orange-600/5 text-orange-300 border-orange-500/30',
      items: [
        {
          time: '11:15 - 12:15',
          activity: isEn ? 'Lunch at Khong Gian Xua Restaurant' : 'Ăn trưa tại nhà hàng Không Gian Xưa',
          locationNote: '76 Lê Lợi, TP. Huế',
          badge: isEn ? 'Royal Dining' : 'Ẩm Thực Cung Đình'
        },
        {
          time: '12:30 - 15:00',
          activity: isEn ? 'Rest and relax at Century Riverside Hotel' : 'Nghỉ ngơi ở khách sạn Century Riverside',
          locationNote: 'Century Riverside Hotel (49 Lê Lợi)',
          badge: isEn ? 'Rest' : 'Nghỉ Trưa'
        },
        {
          time: '15:00 - 15:15',
          activity: isEn ? 'Group gathers and transfers to the next location' : 'Đoàn tập trung và di chuyển tới địa điểm tiếp theo',
          locationNote: 'Sảnh khách sạn Century Riverside',
          badge: isEn ? 'Gather' : 'Tập Trung'
        }
      ]
    },
    {
      sessionKey: 'evening',
      sessionName: t.session.evening,
      timeRange: '15:15 - 20:00',
      icon: Moon,
      colorClass: 'from-indigo-500/20 to-indigo-600/5 text-indigo-300 border-indigo-500/30',
      items: [
        {
          time: '15:15 - 16:00',
          activity: isEn ? 'Visit Hue Quoc Hoc National High School' : 'Tham quan Trường THPT Quốc Học Huế',
          locationNote: '12 Lê Lợi, TP. Huế',
          shortInfo: isEn 
            ? 'Historic century-old red-brick French colonial school alongside the romantic Perfume River.'
            : 'Ngôi trường lịch sử trăm tuổi mang sắc đỏ kiến trúc Pháp cổ kính bên dòng Hương Giang. Nơi tôi luyện nhiều thế hệ danh nhân đất nước với không gian check-in lãng mạn.',
          badge: isEn ? 'Historic School' : 'Di Tích Lịch Sử'
        },
        {
          time: '16:15 - 18:00',
          activity: isEn ? 'Dragon boat cruise and listen to Hue folk songs along Perfume River' : 'Đi thuyền và nghe ca Huế trên sông Hương',
          locationNote: 'Bến Thuyền Tòa Khâm, 5 Lê Lợi, TP. Huế',
          shortInfo: isEn 
            ? 'Listen to royal Hue court folk songs on dragon boats floating poetically along the Perfume River.'
            : 'Thưởng thức nghệ thuật ca Huế cung đình tao nhã trên thuyền rồng lung linh giữa dòng Hương Giang. Trải nghiệm văn hóa di sản UNESCO sâu lắng đầy hoài niệm.',
          badge: isEn ? 'Folk Music' : 'Ca Huế Sông Hương'
        },
        {
          time: '18:15 - 20:00',
          activity: isEn ? 'Dinner at Com Nieu Chan Restaurant' : 'Ăn tối tại nhà hàng Cơm Niêu Chạn',
          locationNote: '38 Nguyễn Tri Phương, TP. Huế',
          badge: isEn ? 'Dinner' : 'Ẩm Thực Tối'
        }
      ]
    }
  ];

  const day3Sessions: DaySessionData[] = [
    {
      sessionKey: 'morning',
      sessionName: t.session.morning,
      timeRange: '06:15 - 10:45',
      icon: Sun,
      colorClass: 'from-amber-500/20 to-amber-600/5 text-amber-300 border-amber-500/30',
      items: [
        {
          time: '06:15 - 06:50',
          activity: isEn ? 'Breakfast: Banh Canh Ba Doi' : 'Ăn sáng tại Bánh Canh Bà Đợi',
          locationNote: 'Khu đường Nguyễn Trãi, Huế',
          badge: isEn ? 'Breakfast' : 'Ăn Sáng'
        },
        {
          time: '07:00 - 07:30',
          activity: isEn ? 'Visit Ngo Mon Gate (Noon Gate)' : 'Tham quan Ngọ Môn (Đại Nội Huế)',
          locationNote: 'Đại Nội Huế (UNESCO World Heritage)',
          shortInfo: isEn 
            ? 'Supreme power center of the Nguyen Dynasty preserving magnificent UNESCO-listed palaces.'
            : 'Trung tâm quyền lực tối cao của triều Nguyễn, lưu giữ đền đài cung điện nguy nga bậc nhất Việt Nam. Hành trình xuyên không về hoàng triều huy hoàng với di sản UNESCO.',
          badge: isEn ? 'Citadel Gate' : 'Di Tích Cổng'
        },
        {
          time: '07:30 - 08:00',
          activity: isEn ? 'Visit Thai Hoa Palace (Throne Room of 13 Emperors)' : 'Tham quan Điện Thái Hòa',
          locationNote: 'Đại Nội Huế',
          shortInfo: isEn 
            ? 'The grand coronation hall where 13 Nguyen emperors ascended the throne, showcasing supreme royal architecture.'
            : 'Nơi thiết triều chính thức của 13 vị vua triều Nguyễn, đỉnh cao kiến trúc cung đình rồng phượng thếp vàng lộng lẫy.',
          badge: isEn ? 'Imperial Throne' : 'Điện Thái Hòa'
        },
        {
          time: '08:00 - 08:45',
          activity: isEn ? 'Visit Forbidden Purple City' : 'Tham quan Tử Cấm Thành',
          locationNote: 'Đại Nội Huế',
          shortInfo: isEn 
            ? 'The private imperial residence exclusively reserved for the King and royal concubines.'
            : 'Khu vực hoàng cung nội vi dành riêng cho Vua và hoàng gia, nơi lưu dấu lịch sử thâm nghiêm triều Nguyễn.',
          badge: isEn ? 'Forbidden City' : 'Tử Cấm Thành'
        },
        {
          time: '08:45 - 09:10',
          activity: isEn ? 'Visit Thai Binh Pavilion' : 'Tham quan Thái Bình Lâu',
          locationNote: 'Đại Nội Huế',
          shortInfo: isEn 
            ? 'The emperor\'s private royal library and reading retreat adorned with exquisite mosaic art.'
            : 'Lầu đọc sách và nghỉ ngơi của nhà Vua với kiến trúc khảm sành sứ tinh xảo và không gian tĩnh lặng.',
          badge: isEn ? 'Royal Library' : 'Thái Bình Lâu'
        },
        {
          time: '09:10 - 09:35',
          activity: isEn ? 'Visit Duyet Thi Duong Royal Theatre' : 'Tham quan Duyệt Thị Đường',
          locationNote: 'Đại Nội Huế',
          shortInfo: isEn 
            ? 'The oldest royal royal theater in Vietnam where kings enjoyed classical court music and tuong performances.'
            : 'Nhà hát hoàng gia cổ nhất Việt Nam, nơi thưởng thức nghệ thuật nhã nhạc cung đình xưa.',
          badge: isEn ? 'Royal Theatre' : 'Duyệt Thị Đường'
        },
        {
          time: '09:35 - 10:00',
          activity: isEn ? 'Visit The Mieu Temple (Ancestral Temple)' : 'Tham quan Thế Miếu',
          locationNote: 'Đại Nội Huế',
          shortInfo: isEn 
            ? 'The ancestral temple worshipping the emperors of the Nguyen Dynasty along with the Nine Dynastic Urns.'
            : 'Miếu thờ các vị vua triều Nguyễn cùng Cửu Đỉnh đúc đồng tượng trưng cho uy quyền quốc gia.',
          badge: isEn ? 'Dynasty Temple' : 'Thế Miếu'
        },
        {
          time: '10:15 - 10:45',
          activity: isEn ? 'Check out from Century Riverside Hotel' : 'Check out khách sạn',
          locationNote: 'Century Riverside Hotel',
          badge: isEn ? 'Checkout' : 'Trả Phòng'
        }
      ]
    },
    {
      sessionKey: 'noon',
      sessionName: isEn ? 'Noon - Afternoon' : 'Trưa - Chiều',
      timeRange: '11:30 - 15:00',
      icon: Sunset,
      colorClass: 'from-sky-500/20 to-sky-600/5 text-sky-300 border-sky-500/30',
      items: [
        {
          time: '11:30',
          activity: isEn ? 'Group gathers at Phu Bai Airport (Hue) for departure check-in' : 'Đoàn có mặt tại sân bay Phú Bài (Huế) để làm thủ tục',
          locationNote: 'Sân bay Phú Bài (HUI), Huế',
          badge: isEn ? 'Airport' : 'Sân Bay Phú Bài'
        },
        {
          time: '13:20 - 14:50',
          activity: isEn ? 'Flight from Hue City back to Ho Chi Minh City by VNA' : 'Di chuyển từ thành phố Huế về lại thành phố Hồ Chí Minh',
          locationNote: 'HUI ✈ SGN (Vietnam Airlines)',
          badge: 'Vietnam Airlines'
        },
        {
          time: '15:00',
          activity: isEn ? 'Farewell to tour group at Tan Son Nhat Airport' : 'Tạm biệt đoàn tại sân bay Tân Sơn Nhất',
          locationNote: 'Ga Đến Tân Sơn Nhất (TP.HCM)',
          badge: isEn ? 'End Tour' : 'Kết Thúc'
        }
      ]
    }
  ];

  const FORMATTED_DAYS = [
    { dayNumber: 1, sessions: day1Sessions },
    { dayNumber: 2, sessions: day2Sessions },
    { dayNumber: 3, sessions: day3Sessions },
  ];

  return (
    <div className="space-y-8 font-mono">
      <div className="space-y-8 max-w-5xl mx-auto">
        {FORMATTED_DAYS.map((dayItem, idx) => (
          <ScrollReveal key={dayItem.dayNumber} direction="up" delay={idx * 80} distance={38}>
            <div className="space-y-3.5">

              <div className="flex items-center gap-3.5 pb-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                    {t.dayBadge} {dayItem.dayNumber}
                  </h3>
                  <p className="text-[11px] text-amber-300/80 font-sans mt-0.5">
                    {dayItem.sessions.reduce((acc, s) => acc + s.items.length, 0)} {isEn ? 'scheduled itinerary checkpoints' : 'điểm lộ trình chi tiết đầy đủ'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dayItem.sessions.map((session, sIdx) => {
                  const SessionIcon = session.icon;
                  return (
                    <ScrollReveal key={sIdx} direction="up" delay={sIdx * 90} distance={22}>
                      <div
                        className={`rounded-xl border p-3.5 sm:p-4 bg-gradient-to-b ${session.colorClass} flex flex-col justify-between space-y-3.5 shadow-sm transition-all duration-300 h-full backdrop-blur-sm`}
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-black/40 border border-white/10 text-amber-300">
                              <SessionIcon size={15} />
                            </div>
                            <span className="font-bold text-xs sm:text-sm text-white">
                              {session.sessionName}
                            </span>
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-black/50 text-amber-200 border border-white/5">
                            {session.timeRange}
                          </span>
                        </div>

                        <div className="space-y-2 flex-1">
                          {session.items.map((item, itIdx) => (
                            <div 
                              key={itIdx} 
                              onClick={() => onOpenBox({
                                title: item.activity,
                                subtitle: `${t.dayBadge} ${dayItem.dayNumber} - ${session.sessionName}`,
                                description: item.shortInfo || item.activity,
                                timeRange: item.time,
                                colorTheme: session.sessionKey === 'evening' ? 'indigo' : session.sessionKey === 'noon' ? 'orange' : 'amber'
                              })}
                              className="group relative space-y-1.5 text-left p-3 rounded-xl bg-black/70 hover:bg-black/90 border border-white/10 hover:border-amber-400 backdrop-blur-md shadow-md transition-all duration-300 ease-out cursor-pointer hover:scale-105 hover:shadow-[0_0_25px_rgba(245,158,11,0.45)] hover:z-20 will-change-transform"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className={`text-[11px] font-bold flex items-center gap-1.5 font-mono transition-colors ${
                                  session.sessionKey === 'evening' ? 'text-indigo-300 group-hover:text-indigo-200' :
                                  session.sessionKey === 'noon' ? 'text-orange-300 group-hover:text-orange-200' :
                                  'text-amber-300 group-hover:text-amber-200'
                                }`}>
                                  <Clock size={11} className="shrink-0" />
                                  {item.time}
                                </span>
                              </div>
                              <h4 className="text-xs sm:text-[13px] font-bold text-white group-hover:text-amber-200 leading-snug transition-colors">
                                {item.activity}
                              </h4>

                              {item.shortInfo && (
                                <p className="text-[11px] text-stone-300/90 italic leading-relaxed pt-0.5 line-clamp-2 font-sans">
                                  {item.shortInfo}
                                </p>
                              )}

                              <div className="pt-0.5">
                                <p className="text-[11px] text-amber-300/80 group-hover:text-amber-200 flex items-start gap-1.5 leading-tight transition-colors">
                                  <MapPin size={12} className="shrink-0 mt-0.5 text-amber-400 group-hover:text-amber-300 transition-colors" />
                                  <span className="font-medium">
                                    {item.locationNote}
                                  </span>
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
