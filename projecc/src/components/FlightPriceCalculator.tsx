import { useState, useMemo } from 'react';
import { 
  Plane, 
  Users, 
  Calculator, 
  Check, 
  ArrowRight, 
  ArrowLeftRight, 
  Luggage, 
  ShieldCheck, 
  Receipt, 
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FlightPriceCalculatorProps {
  onOpenBooking?: () => void;
}

export default function FlightPriceCalculator({ onOpenBooking }: FlightPriceCalculatorProps) {

  const [tripType, setTripType] = useState<'roundtrip' | 'oneway_out' | 'oneway_in'>('roundtrip');

  const [paxCount, setPaxCount] = useState<number>(1);

  const [basePricePerLeg, setBasePricePerLeg] = useState<number>(770000);

  const [luggageOption, setLuggageOption] = useState<'standard' | 'extra30kg'>('standard');

  const [extraInsurance, setExtraInsurance] = useState<boolean>(true);

  const legsMultiplier = tripType === 'roundtrip' ? 2 : 1;

  const calculation = useMemo(() => {

    const outboundBase = (tripType === 'roundtrip' || tripType === 'oneway_out') ? basePricePerLeg * paxCount : 0;
    const returnBase = (tripType === 'roundtrip' || tripType === 'oneway_in') ? basePricePerLeg * paxCount : 0;
    const totalBaseFare = outboundBase + returnBase;

    const vatRate = 0.08;
    const vatAmount = Math.round(totalBaseFare * vatRate);

    const airportFeePerLeg = 120000;
    const totalAirportFee = airportFeePerLeg * legsMultiplier * paxCount;

    const systemFeePerLeg = 128400;
    const totalSystemFee = systemFeePerLeg * legsMultiplier * paxCount;

    const luggageFee = luggageOption === 'extra30kg' ? 180000 * legsMultiplier * paxCount : 0;

    const insuranceFee = extraInsurance ? (tripType === 'roundtrip' ? 65000 : 35000) * paxCount : 0;

    const grandTotal = totalBaseFare + vatAmount + totalAirportFee + totalSystemFee + luggageFee + insuranceFee;
    const pricePerPax = Math.round(grandTotal / paxCount);

    return {
      outboundBase,
      returnBase,
      totalBaseFare,
      vatAmount,
      totalAirportFee,
      totalSystemFee,
      luggageFee,
      insuranceFee,
      grandTotal,
      pricePerPax,
    };
  }, [tripType, paxCount, basePricePerLeg, luggageOption, extraInsurance, legsMultiplier]);

  const handleReset = () => {
    setTripType('roundtrip');
    setPaxCount(1);
    setBasePricePerLeg(770000);
    setLuggageOption('standard');
    setExtraInsurance(true);
  };

  return (
    <section id="bo-tinh-gia-ve-may-bay" className="box-faint rounded-3xl p-5 sm:p-8 shadow-xl relative overflow-hidden transition-all text-[#EAE4D7] font-mono">

      <ScrollReveal direction="up">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5EFE0] tracking-tight">
              Tổng Chi Phí
            </h3>
          </div>

          <button
            onClick={handleReset}
            className="self-start md:self-auto px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-stone-300 hover:text-white text-xs font-bold transition-all border border-white/10 flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw size={14} className="text-amber-400" />
            <span>Đặt Lại Mặc Định</span>
          </button>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={60}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="box-faint-subtle p-4 rounded-2xl border border-white/5 space-y-2.5">
            <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5">
              <ArrowLeftRight size={14} />
              <span>Chặng Bay Áp Dụng</span>
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => setTripType('roundtrip')}
                className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  tripType === 'roundtrip'
                    ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-300'
                    : 'bg-[#18140E] text-stone-300 hover:bg-[#251E14] border border-white/5'
                }`}
              >
                Cả Đi &amp; Về
              </button>
              <button
                type="button"
                onClick={() => setTripType('oneway_out')}
                className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  tripType === 'oneway_out'
                    ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-300'
                    : 'bg-[#18140E] text-stone-300 hover:bg-[#251E14] border border-white/5'
                }`}
              >
                Chỉ Đi SGN
              </button>
              <button
                type="button"
                onClick={() => setTripType('oneway_in')}
                className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  tripType === 'oneway_in'
                    ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-300'
                    : 'bg-[#18140E] text-stone-300 hover:bg-[#251E14] border border-white/5'
                }`}
              >
                Chỉ Về HUI
              </button>
            </div>
            <span className="text-[11px] text-stone-400 block">
              {tripType === 'roundtrip'
                ? '✓ 2 lượt bay khứ hồi (SGN ⇄ HUI)'
                : tripType === 'oneway_out'
                ? '✓ 1 lượt bay chiều đi (SGN ➔ HUI)'
                : '✓ 1 lượt bay chiều về (HUI ➔ SGN)'}
            </span>
          </div>

          <div className="box-faint-subtle p-4 rounded-2xl border border-white/5 space-y-2.5">
            <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Users size={14} />
                <span>Số Lượng Khách</span>
              </span>
              <span className="text-amber-300 text-sm font-black">{paxCount} người</span>
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPaxCount(Math.max(1, paxCount - 1))}
                className="w-10 h-10 rounded-xl bg-[#201A12] text-amber-300 hover:bg-amber-600 hover:text-slate-950 font-black text-lg transition-all border border-amber-500/20 flex items-center justify-center cursor-pointer active:scale-95"
              >
                -
              </button>
              <div className="flex-1 text-center py-2 bg-[#141009] rounded-xl border border-white/10 text-white font-black text-sm">
                {paxCount} Khách Bay
              </div>
              <button
                type="button"
                onClick={() => setPaxCount(Math.min(50, paxCount + 1))}
                className="w-10 h-10 rounded-xl bg-[#201A12] text-amber-300 hover:bg-amber-600 hover:text-slate-950 font-black text-lg transition-all border border-amber-500/20 flex items-center justify-center cursor-pointer active:scale-95"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-1.5 pt-1">
              {[1, 2, 4, 10].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPaxCount(num)}
                  className={`flex-1 py-1 text-[11px] rounded-lg transition-all cursor-pointer ${
                    paxCount === num
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-white/[0.04] text-stone-400 hover:text-white'
                  }`}
                >
                  {num} khách
                </button>
              ))}
            </div>
          </div>

          <div className="box-faint-subtle p-4 rounded-2xl border border-white/5 space-y-2.5">
            <label className="text-xs font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5">
              <Plane size={14} />
              <span>Giá Vé Cơ Bản Thực Tế / Lượt</span>
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setBasePricePerLeg(770000)}
                className={`flex-1 py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  basePricePerLeg === 770000
                    ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-300'
                    : 'bg-[#18140E] text-stone-300 hover:bg-[#251E14] border border-white/5'
                }`}
              >
                770.000 ₫ (Tiết kiệm)
              </button>
              <button
                type="button"
                onClick={() => setBasePricePerLeg(1150000)}
                className={`flex-1 py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  basePricePerLeg === 1150000
                    ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-300'
                    : 'bg-[#18140E] text-stone-300 hover:bg-[#251E14] border border-white/5'
                }`}
              >
                1.150.000 ₫ (Tiêu chuẩn)
              </button>
            </div>
            <span className="text-[11px] text-emerald-400 block">
              ★ Mức giá thực tế mở bán rẻ nhất: 770.000 ₫ / lượt bay Airbus
            </span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <div className="overflow-x-auto rounded-2xl border border-white/5 box-faint-subtle mb-6">
          <table className="w-full text-left font-mono border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-white/[0.04] border-b border-white/10 text-amber-400 uppercase tracking-wider">
                <th className="py-3 px-3.5 sm:px-4 font-bold">STT</th>
                <th className="py-3 px-3.5 sm:px-4 font-bold">Hạng Mục Cấu Thành Vé</th>
                <th className="py-3 px-3.5 sm:px-4 font-bold">Chi Tiết &amp; Công Thức Tính</th>
                <th className="py-3 px-3.5 sm:px-4 font-bold text-right">Đơn Giá / Khách</th>
                <th className="py-3 px-3.5 sm:px-4 font-bold text-right">Thành Tiền ({paxCount} khách)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-stone-200">

              {(tripType === 'roundtrip' || tripType === 'oneway_out') && (
                <tr className="hover:bg-amber-500/[0.04] transition-colors">
                  <td className="py-3 px-3.5 sm:px-4 font-bold text-amber-400">1</td>
                  <td className="py-3 px-3.5 sm:px-4 font-bold text-white flex items-center gap-1.5">
                    <Plane size={14} className="text-sky-400 rotate-45 shrink-0" />
                    <span>Vé cơ bản chiều đi (SGN ➔ HUI)</span>
                  </td>
                  <td className="py-3 px-3.5 sm:px-4 text-stone-300">
                    Tân Sơn Nhất đi Phú Bài · Airbus A321 phản lực êm ái
                  </td>
                  <td className="py-3 px-3.5 sm:px-4 text-right text-stone-300">
                    {basePricePerLeg.toLocaleString('vi-VN')} ₫
                  </td>
                  <td className="py-3 px-3.5 sm:px-4 text-right font-bold text-amber-300 whitespace-nowrap">
                    {calculation.outboundBase.toLocaleString('vi-VN')} ₫
                  </td>
                </tr>
              )}

              {(tripType === 'roundtrip' || tripType === 'oneway_in') && (
                <tr className="hover:bg-amber-500/[0.04] transition-colors">
                  <td className="py-3 px-3.5 sm:px-4 font-bold text-amber-400">2</td>
                  <td className="py-3 px-3.5 sm:px-4 font-bold text-white flex items-center gap-1.5">
                    <Plane size={14} className="text-emerald-400 rotate-225 shrink-0" />
                    <span>Vé cơ bản chiều về (HUI ➔ SGN)</span>
                  </td>
                  <td className="py-3 px-3.5 sm:px-4 text-stone-300">
                    Phú Bài về Tân Sơn Nhất · Airbus A321 80 phút
                  </td>
                  <td className="py-3 px-3.5 sm:px-4 text-right text-stone-300">
                    {basePricePerLeg.toLocaleString('vi-VN')} ₫
                  </td>
                  <td className="py-3 px-3.5 sm:px-4 text-right font-bold text-amber-300 whitespace-nowrap">
                    {calculation.returnBase.toLocaleString('vi-VN')} ₫
                  </td>
                </tr>
              )}

              <tr className="hover:bg-amber-500/[0.04] transition-colors bg-white/[0.01]">
                <td className="py-3 px-3.5 sm:px-4 font-bold text-amber-400">3</td>
                <td className="py-3 px-3.5 sm:px-4 font-bold text-white flex items-center gap-1.5">
                  <Receipt size={14} className="text-amber-400 shrink-0" />
                  <span>Thuế Giá Trị Gia Tăng (VAT 8%)</span>
                </td>
                <td className="py-3 px-3.5 sm:px-4 text-stone-300">
                  Áp dụng theo luật Thuế hàng không dân dụng = 8% × Giá vé cơ bản
                </td>
                <td className="py-3 px-3.5 sm:px-4 text-right text-stone-300">
                  {Math.round((basePricePerLeg * legsMultiplier) * 0.08).toLocaleString('vi-VN')} ₫
                </td>
                <td className="py-3 px-3.5 sm:px-4 text-right font-bold text-amber-300 whitespace-nowrap">
                  {calculation.vatAmount.toLocaleString('vi-VN')} ₫
                </td>
              </tr>

              <tr className="hover:bg-amber-500/[0.04] transition-colors">
                <td className="py-3 px-3.5 sm:px-4 font-bold text-amber-400">4</td>
                <td className="py-3 px-3.5 sm:px-4 font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-sky-400 shrink-0" />
                  <span>Phí dịch vụ hành khách &amp; an ninh sân bay</span>
                </td>
                <td className="py-3 px-3.5 sm:px-4 text-stone-300">
                  Nhà ga T1 SGN + Nhà ga T2 mới Phú Bài (120.000 ₫/lượt/người)
                </td>
                <td className="py-3 px-3.5 sm:px-4 text-right text-stone-300">
                  {(120000 * legsMultiplier).toLocaleString('vi-VN')} ₫
                </td>
                <td className="py-3 px-3.5 sm:px-4 text-right font-bold text-amber-300 whitespace-nowrap">
                  {calculation.totalAirportFee.toLocaleString('vi-VN')} ₫
                </td>
              </tr>

              <tr className="hover:bg-amber-500/[0.04] transition-colors">
                <td className="py-3 px-3.5 sm:px-4 font-bold text-amber-400">5</td>
                <td className="py-3 px-3.5 sm:px-4 font-bold text-white flex items-center gap-1.5">
                  <Sparkles size={14} className="text-emerald-400 shrink-0" />
                  <span>Phụ thu hệ thống hãng bay &amp; bảo hiểm tai nạn</span>
                </td>
                <td className="py-3 px-3.5 sm:px-4 text-stone-300">
                  Phí xuất vé điện tử + Bảo hiểm quyền lợi cao (128.400 ₫/lượt/người)
                </td>
                <td className="py-3 px-3.5 sm:px-4 text-right text-stone-300">
                  {(128400 * legsMultiplier).toLocaleString('vi-VN')} ₫
                </td>
                <td className="py-3 px-3.5 sm:px-4 text-right font-bold text-amber-300 whitespace-nowrap">
                  {calculation.totalSystemFee.toLocaleString('vi-VN')} ₫
                </td>
              </tr>

              <tr className="bg-amber-500/10 border-t-2 border-amber-400 text-white font-bold text-sm sm:text-base">
                <td colSpan={4} className="py-4 px-3.5 sm:px-4 uppercase text-amber-300">
                  TỔNG TIỀN VÉ MÁY BAY THỰC TẾ TRỌN GÓI ({paxCount} KHÁCH · {tripType === 'roundtrip' ? 'KHỨ HỒI' : '1 CHIỀU'})
                </td>
                <td className="py-4 px-3.5 sm:px-4 text-right text-amber-300 font-black text-xl sm:text-2xl whitespace-nowrap">
                  {calculation.grandTotal.toLocaleString('vi-VN')} ₫
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={140}>
        <div className="box-faint-subtle p-5 rounded-2xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-emerald-400">
              <Check size={15} />
              <span>Đã gồm thuế VAT 8% + Phí sân bay Tân Sơn Nhất &amp; Phú Bài</span>
            </div>
            <div className="text-sm sm:text-base text-stone-300">
              Trung bình mỗi khách: <strong className="text-amber-300 font-black text-lg">{calculation.pricePerPax.toLocaleString('vi-VN')} ₫</strong> / người
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenBooking}
              className="flex-1 md:flex-initial px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Giữ Chỗ Vé Máy Bay Theo Giá Này</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
