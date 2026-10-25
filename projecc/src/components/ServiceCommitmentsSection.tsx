import { 
  ShieldCheck, 
  Plane, 
  Award, 
  CheckCircle2,
  Clock,
  Banknote,
  FileCheck,
  Lock
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Props { 
  lang: 'VI' | 'EN'; 
  onOpenBox: (data: { title: string; subtitle?: string; description: string; bullets?: string[]; badge?: string }) => void;
}

export default function ServiceCommitmentsSection({ lang, onOpenBox }: Props) {
  const isEn = lang === 'EN';
  const t = {
    sectionTitle: isEn ? 'III. Commitments' : 'III. Cam Kết',
    badge: 'ELITE TRAVEL GROUP',
    mainTitle: isEn ? 'CUSTOMER SERVICE COMMITMENTS' : 'CAM KẾT DỊCH VỤ DÀNH CHO KHÁCH HÀNG',
    motto: isEn 
      ? 'With the motto "Professional – Dedicated – Transparent – Safe", ELITE Travel Group is committed to delivering quality journeys, reliable services, and travel experiences worthy of the value chosen by our customers.'
      : 'Với phương châm “Chuyên nghiệp – Tận tâm – Minh bạch – An toàn”, ELITE Travel Group cam kết mang đến cho khách hàng những hành trình chất lượng, dịch vụ đáng tin cậy và trải nghiệm du lịch xứng đáng với giá trị mà khách hàng lựa chọn.',
    subnote: isEn
      ? 'When choosing ELITE Travel Group services, customers are guaranteed the following rights and service standards:'
      : 'Khi sử dụng các dịch vụ du lịch của ELITE Travel Group, khách hàng được bảo đảm những quyền lợi và tiêu chuẩn phục vụ sau:',
    footerSlogan: isEn
      ? 'ELITE TRAVEL GROUP – COMMITTED BY QUALITY, AFFIRMED BY EXPERIENCE.'
      : 'ELITE TRAVEL GROUP – CAM KẾT BẰNG CHẤT LƯỢNG, KHẲNG ĐỊNH BẰNG TRẢI NGHIỆM.',
    footerStatement: isEn
      ? 'We deeply appreciate your trust and continuously refine our service quality to bring safe, convenient, and unforgettable journeys. All services are rendered according to confirmed itineraries, applicable conditions, and current laws.'
      : 'Chúng tôi trân trọng sự tin tưởng của quý khách và không ngừng hoàn thiện chất lượng dịch vụ nhằm mang đến những hành trình an toàn, thuận tiện và đáng nhớ. Mọi dịch vụ được cung cấp theo chương trình đã xác nhận, điều kiện áp dụng và quy định pháp luật hiện hành.'
  };

  const commitmentsVI = [
    {
      num: '01',
      icon: Award,
      title: 'Cam kết về chất lượng dịch vụ',
      desc: 'ELITE Travel Group cam kết cung cấp các dịch vụ theo đúng chương trình tour, lịch trình, tiêu chuẩn lưu trú, phương tiện vận chuyển, dịch vụ ăn uống và các quyền lợi đã công bố hoặc xác nhận với khách hàng. Mọi thông tin về dịch vụ phải được trình bày rõ ràng, chính xác và minh bạch.',
      bullets: [
        'Cung cấp đúng chương trình tour và lịch trình đã xác nhận',
        'Đảm bảo tiêu chuẩn lưu trú, vận chuyển và ăn uống đã công bố',
        'Thông tin dịch vụ trình bày rõ ràng, chính xác và minh bạch'
      ]
    },
    {
      num: '02',
      icon: Plane,
      title: 'Cam kết về vé máy bay',
      desc: 'Đối với các chương trình tour có bao gồm vé máy bay theo thỏa thuận, ELITE Travel Group cam kết sử dụng dịch vụ hàng không của Vietnam Airlines. Việc đặt chỗ, xuất vé, hành lý và các điều kiện liên quan được thực hiện theo hạng vé đã xác nhận và quy định của hãng hàng không. Thông tin chuyến bay sẽ được cung cấp cho khách hàng sau khi có xác nhận phù hợp.',
      bullets: [
        'Sử dụng dịch vụ hàng không Quốc gia Vietnam Airlines',
        'Thực hiện đặt chỗ, xuất vé và hành lý theo đúng hạng vé xác nhận',
        'Cung cấp thông tin chuyến bay kịp thời sau khi có xác nhận'
      ]
    },
    {
      num: '03',
      icon: Clock,
      title: 'Cam kết về thời hạn đặt tour',
      desc: 'Để bảo đảm thời gian chuẩn bị và chất lượng tổ chức dịch vụ, khách hàng cần đăng ký đặt tour ít nhất 15 ngày trước ngày khởi hành dự kiến. Các yêu cầu đặt tour trong thời gian ngắn hơn chỉ được tiếp nhận khi ELITE Travel Group xác nhận có đủ khả năng cung cấp dịch vụ. Việc đặt tour được xác nhận chính thức sau khi khách hàng hoàn tất các thủ tục đăng ký và nghĩa vụ thanh toán theo quy định của chương trình.',
      bullets: [
        'Đăng ký đặt tour tối thiểu 15 ngày trước ngày khởi hành',
        'Chỉ tiếp nhận đặt tour gấp khi xác nhận đủ khả năng cung cấp dịch vụ',
        'Xác nhận chính thức sau khi hoàn tất đăng ký và thanh toán'
      ]
    },
    {
      num: '04',
      icon: Banknote,
      title: 'Cam kết về giá cả và chi phí',
      desc: 'ELITE Travel Group cam kết công khai giá tour, các dịch vụ bao gồm, không bao gồm, phụ phí và những điều kiện có thể phát sinh trước khi khách hàng xác nhận sử dụng dịch vụ. Mọi khoản chi phí bổ sung phải được thông báo rõ ràng, có căn cứ và tuân thủ thỏa thuận đã xác nhận.',
      bullets: [
        'Công khai minh bạch giá tour và các dịch vụ bao gồm / không bao gồm',
        'Thông báo trước mọi phụ phí và điều kiện có thể phát sinh',
        'Mọi chi phí bổ sung đều có căn cứ và tuân thủ thỏa thuận'
      ]
    },
    {
      num: '05',
      icon: ShieldCheck,
      title: 'Cam kết về an toàn, hỗ trợ và bồi thường',
      desc: 'Công ty chú trọng công tác tổ chức, phối hợp với các nhà cung cấp và thông tin các yêu cầu an toàn cần thiết trong suốt hành trình. Khi xảy ra sự cố hoặc tình huống ngoài kế hoạch, ELITE Travel Group sẽ chủ động phối hợp, hỗ trợ khách hàng trong phạm vi trách nhiệm và điều kiện dịch vụ đã thỏa thuận, đồng thời áp dụng chính sách bảo hiểm và thực hiện bồi thường thỏa đáng, minh bạch theo đúng quy định cam kết.',
      bullets: [
        'Chú trọng tổ chức và thông tin các yêu cầu an toàn suốt hành trình',
        'Chủ động phối hợp hỗ trợ khách hàng tận tâm trong mọi tình huống',
        'Áp dụng bảo hiểm và bồi thường thỏa đáng, minh bạch theo đúng quy định'
      ]
    },
    {
      num: '06',
      icon: FileCheck,
      title: 'Cam kết về tính minh bạch và quyền lợi khách hàng',
      desc: 'ELITE Travel Group cam kết cung cấp thông tin trung thực, tiếp nhận phản hồi nghiêm túc và xử lý các vấn đề liên quan đến chất lượng dịch vụ trên tinh thần trách nhiệm, công bằng và thiện chí. Các điều kiện về thay đổi lịch trình, hủy tour, hoàn tiền và chi phí phát sinh được thông báo rõ ràng theo chính sách áp dụng cho từng chương trình.',
      bullets: [
        'Cung cấp thông tin trung thực, tiếp nhận phản hồi nghiêm túc',
        'Xử lý chất lượng dịch vụ trên tinh thần trách nhiệm, công bằng và thiện chí',
        'Chính sách thay đổi lịch trình, hủy tour, hoàn tiền thông báo rõ ràng'
      ]
    },
    {
      num: '07',
      icon: Lock,
      title: 'Cam kết về bảo mật thông tin',
      desc: 'Thông tin cá nhân của khách hàng được bảo vệ và xử lý theo quy định pháp luật về bảo vệ dữ liệu cá nhân. Công ty chỉ sử dụng thông tin trong phạm vi cần thiết để thực hiện dịch vụ và các mục đích hợp pháp có liên quan.',
      bullets: [
        'Bảo vệ dữ liệu cá nhân theo đúng quy định của pháp luật',
        'Chỉ sử dụng thông tin trong phạm vi cần thiết thực hiện dịch vụ',
        'Cam kết không chia sẻ dữ liệu khách hàng cho mục đích trái phép'
      ]
    }
  ];

  const commitmentsEN = [
    {
      num: '01',
      icon: Award,
      title: 'Service Quality Commitment',
      desc: 'ELITE Travel Group is committed to providing services strictly according to the tour program, itinerary, accommodation standards, transportation, dining, and published or confirmed entitlements. All service information is presented clearly, accurately, and transparently.',
      bullets: [
        'Provide services strictly according to confirmed tour programs',
        'Ensure verified standards for lodging, transport, and dining',
        'All information presented clearly, accurately, and transparently'
      ]
    },
    {
      num: '02',
      icon: Plane,
      title: 'Airfare Commitment',
      desc: 'For tour packages with airfare included, ELITE Travel Group commits to utilizing Vietnam Airlines services. Booking, ticketing, baggage allowance, and terms are executed in accordance with confirmed ticket classes and airline regulations. Flight details are provided promptly upon confirmation.',
      bullets: [
        'Direct flights operated with Vietnam Airlines',
        'Booking and baggage issued strictly per confirmed ticket class',
        'Flight schedules provided promptly upon confirmation'
      ]
    },
    {
      num: '03',
      icon: Clock,
      title: 'Tour Booking Deadline Commitment',
      desc: 'To ensure thorough preparation and service quality, guests are requested to register at least 15 days prior to scheduled departure. Shorter lead-time bookings are accepted only upon confirmation of operational capacity. Bookings are officially confirmed upon registration and payment compliance.',
      bullets: [
        'Bookings registered at least 15 days before departure',
        'Late requests accepted only when operational capacity permits',
        'Official confirmation upon completion of registration and payment'
      ]
    },
    {
      num: '04',
      icon: Banknote,
      title: 'Pricing & Cost Commitment',
      desc: 'ELITE Travel Group publicly discloses tour prices, inclusions, exclusions, surcharges, and potential contingent conditions prior to service confirmation. Any supplementary charges must be stated clearly, substantiated, and compliant with agreements.',
      bullets: [
        'Transparent publication of package prices, inclusions, and exclusions',
        'Pre-disclosure of all surcharges and contingent conditions',
        'All additional charges are substantiated and contractually compliant'
      ]
    },
    {
      num: '05',
      icon: ShieldCheck,
      title: 'Safety, Customer Support & Compensation Commitment',
      desc: 'The company emphasizes organizational diligence, supplier coordination, and necessary safety requirements throughout the journey. In case of unexpected events, ELITE Travel Group actively coordinates, supports customers, and implements travel insurance with fair, transparent compensation in full accordance with commitments.',
      bullets: [
        'Strict organization and safety enforcement throughout the journey',
        'Dedicated 24/7 customer assistance in any unexpected situation',
        'Insurance coverage and fair, transparent compensation as committed'
      ]
    },
    {
      num: '06',
      icon: FileCheck,
      title: 'Transparency & Customer Rights Commitment',
      desc: 'ELITE Travel Group commits to truthful communication, serious reception of feedback, and dispute resolution grounded in responsibility, fairness, and goodwill. Conditions regarding itinerary modifications, tour cancellations, refunds, and costs are clearly stated.',
      bullets: [
        'Truthful information and attentive reception of all customer feedback',
        'Resolution based on responsibility, fairness, and goodwill',
        'Transparent policies on schedule changes, cancellations, and refunds'
      ]
    },
    {
      num: '07',
      icon: Lock,
      title: 'Information Privacy & Security Commitment',
      desc: 'Customer personal information is strictly protected and processed in compliance with personal data protection laws. The company uses data solely within necessary boundaries for service delivery and lawful related purposes.',
      bullets: [
        'Personal data protection strictly compliant with applicable laws',
        'Information utilized solely within necessary service boundaries',
        'Absolute commitment against unauthorized third-party sharing'
      ]
    }
  ];

  const commitments = isEn ? commitmentsEN : commitmentsVI;

  return (
    <section id="cam-ket" className="font-mono space-y-8 pt-8">
      <div className="space-y-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-left text-glow-white border-b border-amber-500/20 pb-4">
          {t.sectionTitle}
        </h2>
      </div>

      <ScrollReveal direction="up" delay={50}>
        <div className="text-center max-w-4xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase mb-1">
            <Award size={14} className="text-amber-400" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-glow-white uppercase">
            {t.mainTitle}
          </h2>

          <p className="text-stone-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed italic border-l-2 sm:border-l-0 border-amber-500/60 pl-3 sm:pl-0">
            {t.motto}
          </p>

          <p className="text-amber-300/90 text-xs sm:text-sm font-semibold tracking-wide">
            {t.subnote}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {commitments.map((item, idx) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={idx} direction="up" delay={idx * 70} distance={28}>
              <div 
                onClick={() => onOpenBox({
                  title: `${item.num}. ${item.title}`,
                  subtitle: isEn ? 'ELITE Travel Group Customer Commitment' : 'Cam Kết Dịch Vụ Khách Hàng',
                  description: item.desc,
                  bullets: item.bullets,
                  badge: `Cam Kết ${item.num}`
                })}
                className="h-full bg-stone-900/70 hover:bg-stone-900/95 border border-amber-500/20 hover:border-amber-400/80 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 group hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform shadow-md">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-black/50 text-amber-300 border border-amber-500/30">
                      {item.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-[11px] text-stone-300">
                        <CheckCircle2 size={13} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal direction="up" delay={100}>
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-amber-950/40 via-stone-950/80 to-amber-950/30 border border-amber-500/40 text-center space-y-3 shadow-xl backdrop-blur-md max-w-4xl mx-auto">
          <p className="text-amber-300 font-bold text-sm sm:text-base tracking-wide uppercase font-sans">
            {t.footerSlogan}
          </p>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto">
            {t.footerStatement}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
