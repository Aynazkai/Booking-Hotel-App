import axios from 'axios';
import { Hotel } from './types';

const api = axios.create({
  baseURL: '/api',
});

const mockHotels: Hotel[] = [
  {
    id: '1',
    name: 'Grand Hotel Paris',
    location: {
      lat: 48.8566,
      lng: 2.3522,
      address: '1 Rue de la Paix, 75002 Paris',
      city: 'Paris',
      country: 'France'
    },
    rating: 4.8,
    price: 350,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    ],
    description: 'Luxury hotel in the heart of Paris with stunning views of the Eiffel Tower.',
    amenities: ['Free WiFi', 'Spa', 'Restaurant', 'Room Service', 'Fitness Center', 'Bar']
  },
  {
    id: '2',
    name: 'The Ritz London',
    location: {
      lat: 51.5074,
      lng: -0.1278,
      address: '150 Piccadilly, St. James\'s, London W1J 9BR',
      city: 'London',
      country: 'United Kingdom'
    },
    rating: 4.9,
    price: 450,
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    description: 'Iconic luxury hotel offering the finest British hospitality since 1906.',
    amenities: ['Free WiFi', 'Spa', 'Fine Dining', '24/7 Room Service', 'Concierge', 'Valet Parking']
  },
  {
    id: '3',
    name: 'Hotel de Rome Berlin',
    location: {
      lat: 52.5163,
      lng: 13.3777,
      address: 'Behrenstraße 37, 10117 Berlin',
      city: 'Berlin',
      country: 'Germany'
    },
    rating: 4.7,
    price: 380,
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    description: 'Historic luxury in the heart of Berlin, featuring a rooftop terrace and spa.',
    amenities: ['Rooftop Pool', 'Spa', 'Restaurant', 'Bar', 'Fitness Center', 'Concierge']
  },
  {
    id: '4',
    name: 'Four Seasons Milan',
    location: {
      lat: 45.4642,
      lng: 9.1900,
      address: 'Via Gesù, 6/8, 20121 Milano MI',
      city: 'Milan',
      country: 'Italy'
    },
    rating: 4.9,
    price: 520,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    description: 'Luxury hotel in a 15th-century convent, featuring Italian gardens and haute cuisine.',
    amenities: ['Spa', 'Fine Dining', 'Garden', 'Bar', 'Fitness Center', 'Concierge']
  },
  {
    id: '5',
    name: 'Hotel Arts Barcelona',
    location: {
      lat: 41.3851,
      lng: 2.1734,
      address: 'Carrer de la Marina, 19-21, 08005 Barcelona',
      city: 'Barcelona',
      country: 'Spain'
    },
    rating: 4.8,
    price: 420,
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    description: 'Beachfront luxury with stunning Mediterranean views and contemporary art.',
    amenities: ['Beach Access', 'Spa', 'Michelin Restaurant', 'Pool', 'Art Collection', 'Concierge']
  },
  {
    id: '6',
    name: 'Hotel Imperial Vienna',
    location: {
      lat: 48.2082,
      lng: 16.3719,
      address: 'Kärntner Ring 16, 1015 Wien',
      city: 'Vienna',
      country: 'Austria'
    },
    rating: 4.9,
    price: 480,
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    description: 'Palatial luxury in the heart of Vienna with classical architecture and imperial suites.',
    amenities: ['Butler Service', 'Spa', 'Fine Dining', 'Ballroom', 'Fitness Center', 'Concierge']
  }
];

export const getHotels = async (location?: string): Promise<Hotel[]> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (location) {
      const searchTerm = location.toLowerCase();
      return mockHotels.filter(hotel =>
        hotel.location.city.toLowerCase().includes(searchTerm) ||
        hotel.location.country.toLowerCase().includes(searchTerm)
      );
    }
    return mockHotels;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error;
  }
};

export const getHotelById = async (id: string): Promise<Hotel | null> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockHotels.find(hotel => hotel.id === id) || null;
  } catch (error) {
    console.error('Error fetching hotel:', error);
    throw error;
  }
};