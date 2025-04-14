import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Hotel } from '../types';
import { Link } from 'react-router-dom';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <Link
      to={`/book/${hotel.id}`}
      className="relative group rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105"
    >
      <div className="relative h-64">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:opacity-70 transition-opacity duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl font-semibold text-white">{hotel.name}</h3>
        <div className="flex items-center mt-2">
          <MapPin className="w-4 h-4 text-white mr-1" />
          <p className="text-sm text-white">
            {hotel.location.city}, {hotel.location.country}
          </p>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="ml-1">{hotel.rating}</span>
          </div>
          <div className="text-right">
            <p className="font-bold">${hotel.price}</p>
            <p className="text-sm">per night</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;