export interface HueHotelOption {
  id: string;
  name: string;
  lat: number;
  lng: number;
  stars: number;
  address: string;
  description: string;
}

export const HUE_HOTEL_OPTIONS: HueHotelOption[] = [
  { 
    id: 'century', 
    name: 'Century Riverside', 
    lat: 16.4637, 
    lng: 107.5909, 
    stars: 4, 
    address: '49 Lê Lợi, TP. Huế',
    description: 'Khách sạn 4 sao nằm bên bờ sông Hương, trung tâm thành phố.'
  }
];
