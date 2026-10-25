import { useState, useRef, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Users,
  Loader2
} from 'lucide-react';
import tourbookBgImg from '@/assets/images/tourbookBG.jpg';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
  initialPrice?: number;
  lang?: 'VI' | 'EN';
}

const UNIT_PRICE = 7100000;

const COUNTRY_CODES = [
  { code: '+84', flag: '🇻🇳', label: 'Việt Nam' },
  { code: '+1', flag: '🇺🇸', label: 'USA / Canada' },
  { code: '+82', flag: '🇰🇷', label: 'Hàn Quốc' },
  { code: '+81', flag: '🇯🇵', label: 'Nhật Bản' },
  { code: '+886', flag: '🇹🇼', label: 'Đài Loan' },
  { code: '+86', flag: '🇨🇳', label: 'Trung Quốc' },
  { code: '+65', flag: '🇸🇬', label: 'Singapore' },
  { code: '+66', flag: '🇹🇭', label: 'Thái Lan' },
  { code: '+60', flag: '🇲🇾', label: 'Malaysia' },
  { code: '+61', flag: '🇦🇺', label: 'Australia' },
  { code: '+44', flag: '🇬🇧', label: 'United Kingdom' },
  { code: '+33', flag: '🇫🇷', label: 'France' },
  { code: '+49', flag: '🇩🇪', label: 'Germany' },
  { code: '+39', flag: '🇮🇹', label: 'Italy' },
  { code: '+7', flag: '🇷🇺', label: 'Russia' }
];

export default function BookingModal({
  isOpen,
  onClose,
  lang = 'VI'
}: BookingModalProps) {
  const isEn = lang === 'EN';

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+84');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [departureDate, setDepartureDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarViewDate, setCalendarViewDate] = useState(() => new Date(2026, 9, 25));
  const [notes, setNotes] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    }
    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar]);

  if (!isOpen) return null;

  const currentYear = calendarViewDate.getFullYear();
  const currentMonth = calendarViewDate.getMonth();

  const handlePrevMonth = () => {
    setCalendarViewDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCalendarViewDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const rawFirstDay = new Date(currentYear, currentMonth, 1).getDay();
  const firstDayIndex = (rawFirstDay + 6) % 7;

  const monthNamesVI = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];
  const monthNamesEN = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekHeadersVI = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  const weekHeadersEN = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const todayStr = '2026-10-25';

  const totalPrice = UNIT_PRICE * Math.max(1, guestCount);

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const [y, m, d] = parts;
    return `${d}/${m}/${y}`;
  };

  const formatBirthDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const [y, m, d] = parts;
    return `${d}/${m}/${y}`;
  };

  const fullName = `${lastName} ${firstName}`.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanDigits = phone.replace(/\D/g, '');
    if (cleanDigits.length < 9) {
      setPhoneError(isEn ? 'Phone must have at least 9-10 digits' : 'Số điện thoại phải từ 9 đến 10 chữ số');
      return;
    }
    setPhoneError('');
    if (!lastName.trim() || !firstName.trim() || !birthDate || !departureDate) return;

    const ref = `ELITE-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1300);
  };

  const handleReset = () => {
    setIsSubmitting(false);
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xs overflow-y-auto font-mono animate-fadeIn"
      onClick={handleReset}
    >
      <div 
        className="relative w-full max-w-[530px] bg-stone-950 border-2 border-amber-400/80 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.98)] overflow-hidden my-auto text-stone-100 min-h-[740px] max-h-[94vh] flex flex-col"
        style={{
          backgroundImage: `url(${tourbookBgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#0c0a09'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleReset}
          className="absolute top-3.5 right-3.5 z-50 w-8 h-8 rounded-full bg-stone-950/80 hover:bg-stone-900 text-white border border-white/40 flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs shadow-md hover:scale-105 active:scale-95"
          aria-label="Close"
        >
          <X size={17} className="text-white" />
        </button>

        <div className="overflow-y-auto flex-1 p-5 sm:p-6">
          <div className="h-36 sm:h-44 w-full pointer-events-none select-none" />

          {isSubmitting ? (
            <div className="bg-stone-950/95 backdrop-blur-md border border-amber-400/60 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-2xl animate-fadeIn">
              <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                <Loader2 size={46} className="text-amber-400 animate-spin" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  {isEn ? 'Processing your booking request...' : 'Đang xử lý yêu cầu đặt tour...'}
                </h4>
                <p className="text-xs text-stone-400">
                  {isEn ? 'Please wait a moment' : 'Vui lòng chờ trong giây lát'}
                </p>
              </div>
            </div>
          ) : submitted ? (
            <div className="bg-stone-950/95 backdrop-blur-md border border-emerald-400/60 rounded-3xl p-5 sm:p-7 text-center space-y-4 shadow-2xl animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/15 border-2 border-emerald-400 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.35)] animate-scale-check">
                <CheckCircle2 size={36} className="text-emerald-400" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg sm:text-xl font-bold text-emerald-300">
                  {isEn ? 'Booking Request Submitted Successfully!' : 'Gửi Yêu Cầu Thành Công!'}
                </h4>
                <p className="text-xs text-stone-200">
                  {isEn ? `Thank you, ${fullName}!` : `Cảm ơn Quý khách, ${fullName}!`}
                </p>
                <p className="text-xs text-stone-300">
                  {isEn
                    ? <>Our consultant will contact you via <strong className="text-amber-400">{countryCode} {phone}</strong>.</>
                    : <>Chuyên viên tư vấn sẽ liên hệ qua <strong className="text-amber-400">{countryCode} {phone}</strong> cho quý khách</>
                  }
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black/70 border border-white/10 text-left space-y-2 text-xs">
                <div className="flex justify-between items-center pb-1.5 border-b border-white/10">
                  <span className="text-stone-400">{isEn ? 'Trip Code:' : 'Mã chuyến đi:'}</span>
                  <span className="font-bold text-amber-400 font-mono">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">{isEn ? 'Guest Name:' : 'Họ và tên:'}</span>
                  <span className="font-semibold text-white">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">{isEn ? 'Phone:' : 'Số điện thoại:'}</span>
                  <span className="font-semibold text-white">{countryCode} {phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Email:</span>
                  <span className="font-semibold text-white">{email || '-'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">{isEn ? 'Date of Birth:' : 'Ngày sinh:'}</span>
                  <span className="font-semibold text-stone-200">{formatBirthDateDisplay(birthDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">{isEn ? 'Number of Guests:' : 'Số người đi:'}</span>
                  <span className="font-semibold text-white">{guestCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">{isEn ? 'Departure Date:' : 'Ngày khởi hành:'}</span>
                  <span className="font-semibold text-amber-300">{formatDisplayDate(departureDate)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm">
                  <span className="font-bold text-white">{isEn ? 'Total Amount:' : 'Tổng số tiền:'}</span>
                  <span className="font-bold text-amber-300">
                    {totalPrice.toLocaleString('vi-VN')} ₫
                  </span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md cursor-pointer"
              >
                {isEn ? 'CLOSE' : 'ĐÓNG'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 pt-1">
              <div className="space-y-1 animate-stagger-1">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-200 uppercase tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  {isEn ? 'Name' : 'Họ tên'}
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={isEn ? 'First' : 'Họ & Tên đệm'}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-950/85 border border-stone-600/80 text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 shadow-sm"
                  />
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={isEn ? 'Last' : 'Tên'}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-950/85 border border-stone-600/80 text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 animate-stagger-2">
                <div className="space-y-1">
                  <label className="text-[11px] sm:text-xs font-semibold text-stone-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-950/85 border border-stone-600/80 text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] sm:text-xs font-semibold text-stone-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                      {isEn ? 'Phone' : 'Số điện thoại'}
                    </label>
                    {phoneError && (
                      <span className="text-[10px] text-amber-300 font-bold">
                        {phoneError}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="h-[34px] px-2 text-xs rounded-xl bg-stone-950/85 border border-stone-600/80 text-white focus:outline-none focus:border-amber-400 cursor-pointer shrink-0"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={`${c.code}-${c.label}`} value={c.code} className="bg-stone-900 text-white">
                          {c.flag} {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      required
                      minLength={9}
                      maxLength={15}
                      pattern="[0-9\s\-\.\(\)]{9,15}"
                      title={isEn ? "Phone number must have at least 9 to 10 digits" : "Số điện thoại phải từ 9 đến 10 chữ số trở lên"}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (phoneError && e.target.value.replace(/\D/g, '').length >= 9) {
                          setPhoneError('');
                        }
                      }}
                      placeholder="### ### ####"
                      className={`flex-1 min-w-0 h-[34px] px-2.5 text-xs rounded-xl bg-stone-950/85 border text-white placeholder-stone-400 focus:outline-none shadow-sm ${
                        phoneError ? 'border-amber-400' : 'border-stone-600/80 focus:border-amber-400'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 animate-stagger-3">
                <div className="space-y-1">
                  <label className="text-[11px] sm:text-xs font-semibold text-stone-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {isEn ? 'Date of Birth' : 'Ngày sinh'}
                  </label>
                  <input
                    type="date"
                    required
                    max={todayStr}
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-2.5 py-2 text-xs rounded-xl bg-stone-950/85 border border-stone-600/80 text-white focus:outline-none focus:border-amber-400 cursor-pointer shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] sm:text-xs font-semibold text-stone-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {isEn ? 'Number of Guests' : 'Số người đi'}
                  </label>
                  <div className="flex items-center gap-1 bg-stone-950/85 border border-stone-600/80 rounded-xl p-1 shadow-sm h-[34px]">
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center font-bold text-xs text-white flex items-center justify-center gap-1.5">
                      <Users size={12} className="text-white" />
                      <span>{guestCount}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuestCount(Math.min(50, guestCount + 1))}
                      className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-1 relative animate-stagger-4" ref={calendarRef}>
                <label className="text-[11px] sm:text-xs font-semibold text-stone-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] flex items-center justify-between">
                  <span>{isEn ? 'Departure Date' : 'Ngày khởi hành'}</span>
                  {departureDate && (
                    <span className="text-[11px] text-amber-300 font-bold">
                      {formatDisplayDate(departureDate)}
                    </span>
                  )}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    readOnly
                    required
                    value={departureDate ? formatDisplayDate(departureDate) : ''}
                    placeholder="dd/mm/yyyy"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full pl-3 pr-10 py-2 text-xs rounded-xl bg-stone-950/85 border border-stone-600/80 text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 cursor-pointer shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="absolute right-1.5 w-7 h-7 rounded-lg bg-white/15 hover:bg-white/25 border border-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                    title={isEn ? 'Choose departure date' : 'Chọn ngày khởi hành'}
                  >
                    <Calendar size={14} className="text-white" />
                  </button>
                </div>

                {showCalendar && (
                  <div className="absolute right-0 bottom-full mb-2 p-3 rounded-2xl bg-stone-950 border border-white/25 shadow-2xl z-50 w-72 sm:w-80 animate-fadeIn">
                    <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        disabled={currentYear === 2026 && currentMonth <= 9}
                        className="p-1 rounded text-white hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <ChevronLeft size={16} className="text-white" />
                      </button>
                      <span className="font-bold text-xs text-white tracking-wide">
                        {isEn ? `${monthNamesEN[currentMonth]} ${currentYear}` : `${monthNamesVI[currentMonth]} năm ${currentYear}`}
                      </span>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1 rounded text-white hover:bg-white/20 transition-colors cursor-pointer"
                      >
                        <ChevronRight size={16} className="text-white" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center mb-1">
                      {(isEn ? weekHeadersEN : weekHeadersVI).map((h, i) => (
                        <div key={h} className={`text-[10px] font-bold py-0.5 ${i >= 5 ? 'text-amber-400' : 'text-stone-300'}`}>
                          {h}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: firstDayIndex }).map((_, i) => (
                        <div key={`empty-${i}`} className="h-7" />
                      ))}

                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const dayNumber = i + 1;
                        const dayStr = dayNumber < 10 ? `0${dayNumber}` : `${dayNumber}`;
                        const monthStr = (currentMonth + 1) < 10 ? `0${currentMonth + 1}` : `${currentMonth + 1}`;
                        const fullDateStr = `${currentYear}-${monthStr}-${dayStr}`;

                        const isPast = fullDateStr < todayStr;
                        const isToday = fullDateStr === todayStr;
                        const isSelected = fullDateStr === departureDate;

                        return (
                          <button
                            key={fullDateStr}
                            type="button"
                            disabled={isPast}
                            onClick={() => {
                              if (isPast) return;
                              setDepartureDate(fullDateStr);
                              setShowCalendar(false);
                            }}
                            className={`h-7 rounded-lg text-xs font-medium flex items-center justify-center transition-all relative ${
                              isPast
                                ? 'text-stone-600 opacity-20 cursor-not-allowed pointer-events-none'
                                : isSelected
                                ? 'bg-amber-400 text-stone-950 font-bold shadow-sm scale-105 z-10 cursor-pointer'
                                : isToday
                                ? 'border border-amber-400 text-amber-300 font-bold cursor-pointer'
                                : 'text-stone-200 hover:bg-white/20 cursor-pointer'
                            }`}
                          >
                            {dayNumber}
                            {isToday && !isSelected && (
                              <span className="absolute -top-0.5 right-0.5 text-[7px] text-amber-400 font-mono">●</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-1 animate-stagger-5">
                <label className="text-[11px] sm:text-xs font-semibold text-stone-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  {isEn ? 'Special Requests' : 'Ghi chú đặc biệt'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={isEn 
                    ? 'e.g., vegetarian, ...' 
                    : 'Ví dụ: ăn chay, ...'
                  }
                  className="w-full px-3 py-1.5 text-xs rounded-xl bg-stone-950/85 border border-stone-600/80 text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 shadow-sm resize-none font-sans"
                />
              </div>

              <div className="px-3.5 py-2.5 rounded-xl bg-stone-950/90 border border-stone-600/80 flex items-center justify-between text-xs mt-1.5 shadow-md animate-stagger-6">
                <span className="text-stone-200 text-xs sm:text-sm font-bold uppercase tracking-wide">
                  {isEn ? 'Total Amount' : 'Tổng số tiền'}
                </span>
                <span className="text-lg sm:text-xl font-bold text-amber-300 tabular-nums">
                  {totalPrice.toLocaleString('vi-VN')} ₫
                </span>
              </div>

              <div className="pt-1 animate-stagger-6">
                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 rounded-xl transition-all shadow-md cursor-pointer active:scale-98"
                >
                  {isEn ? 'SUBMIT REQUEST' : 'GỬI YÊU CẦU'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
