import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import HotelCard from '../components/HotelCard';
import Footer from '../components/Footer';
import { Hotel, SearchParams } from '../types';
import { getHotels } from '../api';

const Home: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [images] = useState([
    { id: 1, src: 'https://img.freepik.com/premium-photo/luxury-hotel-room_993599-16343.jpg?ga=GA1.1.1650698328.1732639558&semt=ais_hybrid&w=740'},
    { id: 2, src: 'https://img.freepik.com/free-photo/futuristic-building-with-natural-decorations-its-facade_181624-18273.jpg?ga=GA1.1.1650698328.1732639558&semt=ais_hybrid&w=740'},
    { id: 3, src: 'https://img.freepik.com/premium-photo/lounge-chairs-by-swimming-pool-night_1048944-27184329.jpg?ga=GA1.1.1650698328.1732639558&semt=ais_hybrid&w=740'},
    { id: 4, src: 'https://img.freepik.com/free-photo/male-walking-near-tall-trees-inside-building_181624-42133.jpg?ga=GA1.1.1650698328.1732639558&semt=ais_hybrid&w=740'},
    { id: 5, src: 'https://img.freepik.com/free-photo/green-flowers-as-interior-decor-white-sofa-with-green-pillows_181624-46938.jpg?ga=GA1.1.1650698328.1732639558&semt=ais_hybrid&w=740'},
    { id: 6, src: 'https://img.freepik.com/premium-photo/building-with-lot-windows-plants-it_875037-1935.jpg?ga=GA1.1.1650698328.1732639558&semt=ais_hybrid&w=740'},  ]);

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    setLoading(true);
    try {
      const data = await getHotels();
      setHotels(data);
    } catch (error) {
      console.error('Error loading hotels:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (params: SearchParams) => {
    setLoading(true);
    try {
      const filtered = await getHotels(params.location);
      setHotels(filtered);
    } catch (error) {
      console.error('Error searching hotels:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-10 bg-[#3e5454e0]">
      <Header />
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('sunbeds-grass-summer.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-[#3E5454] bg-opacity-70">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-white mb-8">
              Discover the best hotels across Europe
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <SearchBar onSearch={handleSearch} />

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-3 mt-6">
            Explore Hotels
          </h2>
          {loading ? (
            <div className="text-center text-white">Loading...</div>
          ) : hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="text-white text-center mt-6">No hotels found for this location.</div>
          )}
        </div>

        <div className="mt-16 flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1 flex items-center">
            <div className="p-6 flex flex-col lg:flex-row">
              <div className="flex-1 mr-8 mb-8 lg:mb-0">
                <h3 className="text-3xl font-semibold text-white mb-4">Our Legacy</h3>
                <p className="text-white text-lg mb-4">
                  Founded in 2000, our platform has been at the forefront of helping travelers find
                  the best stays across Europe. With over 20 years of experience, we provide a wide range of
                  services to ensure your stay is comfortable, luxurious, and memorable. Our team is dedicated
                  to offering personalized services, whether you're traveling for business, leisure, or both.
                </p>
                <p className="text-white text-lg mb-4">
                  We pride ourselves on our commitment to customer satisfaction. Our curated list of hotels,
                  along with personalized concierge services, has earned us a reputation as one of Europe's
                  leading travel platforms. Join us today and experience the best in hospitality.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://img.freepik.com/free-photo/dinner-table-setting-idea-with-textured-green-glass-goblets_169016-16543.jpg?ga=GA1.1.1650698328.1732639558&semt=ais_hybrid&w=740"
                  alt="Service Image"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-3 mt-6">Moments Of Stay</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`relative group rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  index % 2 === 0 ? 'col-span-2' : 'col-span-1'
                }`}
              >
                <img
                  src={image.src}
                  className="w-full h-full object-cover group-hover:opacity-70 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;