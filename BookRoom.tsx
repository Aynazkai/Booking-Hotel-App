import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Star, MapPin, Wifi, Utensils, Dumbbell, Coffee } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import Header from '../components/Header';
import { Hotel } from '../types';
import { getHotelById } from '../api';

const BookRoom: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  useEffect(() => {
    if (id) {
      loadHotel(id);
    }
  }, [id]);

  const loadHotel = async (hotelId: string) => {
    try {
      const data = await getHotelById(hotelId);
      setHotel(data);
    } catch (error) {
      console.error('Error loading hotel:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#3E5454]">
        <Header />
        <div className="container text-white mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen bg-[#3E5454]">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-white">Hotel not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#3e5454e0]">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="w-full mt-20 mb-10 rounded-lg border border-white/20 shadow-2xl bg-[#3e5454aa] backdrop-blur-md overflow-hidden transition-all duration-300">
          <div className="flex flex-col lg:flex-row">
            {/* Image & Thumbnails */}
            <div className="lg:w-1/2 w-full relative">
              <img
                src={hotel.images[selectedImage]}
                alt={`${hotel.name} - Featured`}
                className="w-full h-[300px] lg:h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 bg-black/50 overflow-x-auto">
                {hotel.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 overflow-hidden rounded-lg ${
                      selectedImage === index ? 'ring-2 ring-white' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Hotel Details */}
            <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{hotel.name}</h1>
                    <div className="flex items-center text-white text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <p>{hotel.location.address}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-white font-semibold">{hotel.rating}</span>
                    </div>
                    <p className="text-2xl font-bold text-white">${hotel.price}</p>
                    <p className="text-sm text-white">per night</p>
                  </div>
                </div>

                <div className="my-4">
                  <h2 className="text-xl font-semibold text-white mb-2">About this hotel</h2>
                  <p className="text-white text-sm">{hotel.description}</p>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-white mb-2">Amenities</h2>
                  <div className="grid grid-cols-2 gap-2 text-white text-sm">
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        {amenity.includes('WiFi') && <Wifi className="w-4 h-4 mr-1" />}
                        {amenity.includes('Restaurant') && <Utensils className="w-4 h-4 mr-1" />}
                        {amenity.includes('Fitness') && <Dumbbell className="w-4 h-4 mr-1" />}
                        {amenity.includes('Bar') && <Coffee className="w-4 h-4 mr-1" />}
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="text-white mb-4 sm:mb-0">
                  <p className="text-2xl font-bold">${hotel.price}</p>
                  <p className="text-sm">per night</p>
                </div>
                <button className=" border-s border-white text-white px-8 py-2 rounded-md font-semibold text-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 w-full">
            <MapContainer
              center={[hotel.location.lat, hotel.location.lng]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[hotel.location.lat, hotel.location.lng]}>
                <Popup>{hotel.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRoom;