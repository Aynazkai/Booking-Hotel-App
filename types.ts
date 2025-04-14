export interface Hotel {
    id: string;
    name: string;
    location: {
      lat: number;
      lng: number;
      address: string;
      city: string;
      country: string;
    };
    rating: number;
    price: number;
    images: string[];
    description: string;
    amenities: string[];
  }

  export interface SearchParams {
    location: string;
    checkIn: Date;
    checkOut: Date;
    adults: number;
    children: number;
    rooms: number;
  }

  export interface User {
    email: string;
    password: string;
  }