export const AIRPORTS = { 
  sgn: { lat: 10.8188, lng: 106.6520, name: 'Sân Bay Quốc Tế Tân Sơn Nhất', code: 'SGN', terminal: 'Ga Quốc Nội T1', city: 'TP. Hồ Chí Minh' }, 
  hui: { lat: 16.4018, lng: 107.6965, name: 'Sân Bay Quốc Tế Phú Bài', code: 'HUI', terminal: 'Nhà Ga Mới T2', city: 'Thừa Thiên Huế' } 
};

export const AIRBUS_OUTBOUND_PATH: [number, number][] = [
  [10.8188, 106.6520], 
  [11.1500, 106.8200], 
  [11.6000, 107.1200], 
  [12.1500, 107.4800], 
  [12.8000, 107.8200], 
  [13.5000, 108.1500], 
  [14.2500, 108.3200], 
  [15.0000, 108.2500], 
  [15.7500, 107.9800], 
  [16.1500, 107.8200], 
  [16.4018, 107.6965]  
];

export const AIRBUS_RETURN_PATH: [number, number][] = [
  [16.4018, 107.6965], 
  [16.2000, 107.9200], 
  [15.8200, 108.2500], 
  [15.1500, 108.5500], 
  [14.4000, 108.6200], 
  [13.6500, 108.4500], 
  [12.9500, 108.1500], 
  [12.2500, 107.7500], 
  [11.6500, 107.3500], 
  [11.1800, 106.9500], 
  [10.8188, 106.6520]  
];

export const AIRBUS_OUTBOUND_COORDS = AIRBUS_OUTBOUND_PATH;
export const AIRBUS_RETURN_COORDS = AIRBUS_RETURN_PATH;

export const PHU_BAI_TO_HOTEL_ROAD: [number, number][] = [
  [16.4018, 107.6965], 
  [16.4035, 107.6942], 
  [16.4055, 107.6915], 
  [16.4082, 107.6885], 
  [16.4115, 107.6830], 
  [16.4145, 107.6780], 
  [16.4172, 107.6740], 
  [16.4210, 107.6660], 
  [16.4255, 107.6568], 
  [16.4300, 107.6475], 
  [16.4348, 107.6380], 
  [16.4390, 107.6280], 
  [16.4440, 107.6165], 
  [16.4468, 107.6110], 
  [16.4495, 107.6065], 
  [16.4525, 107.6025], 
  [16.4565, 107.5985], 
  [16.4585, 107.5970], 
  [16.4605, 107.5950], 
  [16.4622, 107.5932], 
  [16.4632, 107.5920], 
  [16.4637, 107.5909]  
];

export const VNA_OUTBOUND_PATH: [number, number][] = AIRBUS_OUTBOUND_PATH;
export const VNA_RETURN_PATH: [number, number][] = AIRBUS_RETURN_PATH;
export const VNA_OUTBOUND_COORDS = AIRBUS_OUTBOUND_PATH;
export const VNA_RETURN_COORDS = AIRBUS_RETURN_PATH;

export const REAL_BASE_TICKET_PRICE_ONE_WAY = 770000;
export const TOTAL_FLIGHT_TICKET_PRICE = 2250000;
export const FLIGHT_TICKET_BREAKDOWN = [
  { item: 'Giá vé cơ bản khứ hồi', desc: 'Chặng SGN ⇄ HUI bằng Vietnam Airlines (VNA) tiêu chuẩn bay êm ái, đúng giờ', amount: 1500000, cost: 1500000 },
  { item: 'Thuế VAT & Phí sân bay', desc: 'Phí an ninh soi chiếu, phục vụ mặt đất tại Tân Sơn Nhất và Phú Bài', amount: 550000, cost: 550000 },
  { item: 'Hành lý ký gửi 23kg', desc: 'Bao gồm 12kg xách tay + 23kg hành lý ký gửi an toàn hai chiều Vietnam Airlines', amount: 200000, cost: 200000 },
];
