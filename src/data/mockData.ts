export type Commuter = {
  id: string;
  name: string;
  initials: string;
  rating: string;
  route: string;
  time: string;
  match: number;
  detour: string;
  price: number;
  vehicle: string;
  color: string;
};

export const demoUser = {
  name: 'Salman Nawaz',
  phone: '+92 300 1234567',
  city: 'Lahore',
  rating: '4.8',
  routeFrom: 'Johar Town',
  routeTo: 'Gulberg',
  departure: '8:30 AM',
};

export const commuters: Commuter[] = [
  {
    id: 'ahmed',
    name: 'Ahmed Khan',
    initials: 'AK',
    rating: '4.9',
    route: 'Johar Town → Gulberg',
    time: '8:25 AM',
    match: 92,
    detour: '0.8 km',
    price: 250,
    vehicle: 'Toyota Corolla • AC',
    color: '#D6EDE5',
  },
  {
    id: 'ayesha',
    name: 'Ayesha Ahmed',
    initials: 'AA',
    rating: '5.0',
    route: 'Wapda Town → Gulberg',
    time: '8:35 AM',
    match: 88,
    detour: '1.2 km',
    price: 220,
    vehicle: 'Honda City • AC',
    color: '#F5E9D9',
  },
  {
    id: 'hamza',
    name: 'Hamza Malik',
    initials: 'HM',
    rating: '4.8',
    route: 'Johar Town → Jail Road',
    time: '8:20 AM',
    match: 84,
    detour: '1.5 km',
    price: 200,
    vehicle: 'Suzuki Swift • AC',
    color: '#E9E1F5',
  },
  {
    id: 'fatima',
    name: 'Fatima Noor',
    initials: 'FN',
    rating: '4.9',
    route: 'Model Town → Gulberg',
    time: '8:40 AM',
    match: 79,
    detour: '2.1 km',
    price: 275,
    vehicle: 'Toyota Yaris • AC',
    color: '#F7DFE4',
  },
];

export const cities = [
  'Lahore',
  'Karachi',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
];
export const incomingRequest = {
  name: 'Ali Raza',
  initials: 'AR',
  route: 'Johar Town → Gulberg',
};
export const demoNotifications = [
  { icon: '✓', title: 'Ahmed accepted your ride request.', time: '2 min ago' },
  { icon: '⌕', title: 'You have a new route match.', time: '18 min ago' },
  { icon: '◷', title: 'Your ride starts in 30 minutes.', time: 'Yesterday' },
  { icon: '✉', title: 'Ali sent you a message.', time: 'Yesterday' },
];
