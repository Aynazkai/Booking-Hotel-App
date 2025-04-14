import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Search } from 'lucide-react';
import { SearchParams } from '../types';

interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: '',
    checkIn: new Date(),
    checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
    adults: 2,
    children: 0,
    rooms: 1
  });

  const inputStyle =
    "h-[44px] w-full bg-transparent border border-white text-white px-3 rounded-md focus:outline-none focus:ring-0"; // مرز و متن سفید

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <div className="bg-[#8eacac4d] backdrop-blur-md rounded-lg shadow-lg p-6 max-w-6xl mx-auto -mt-14 relative z-10">
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 items-end">

          {/* Location */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-white mb-1">Location</label>
            <input
              type="text"
              placeholder="Where are you going?"
              className={inputStyle}
              value={searchParams.location}
              onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
            />
          </div>

          {/* Check-in */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Check-in</label>
            <DatePicker
              selected={searchParams.checkIn}
              onChange={(date) => date && setSearchParams({ ...searchParams, checkIn: date })}
              className={inputStyle}
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Check-out</label>
            <DatePicker
              selected={searchParams.checkOut}
              onChange={(date) => date && setSearchParams({ ...searchParams, checkOut: date })}
              className={inputStyle}
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Guests</label>
            <div className="flex gap-2">
              <select
                value={searchParams.adults}
                onChange={(e) => setSearchParams({ ...searchParams, adults: parseInt(e.target.value) })}
                className={inputStyle}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1} Adults</option>
                ))}
              </select>
              <select
                value={searchParams.children}
                onChange={(e) => setSearchParams({ ...searchParams, children: parseInt(e.target.value) })}
                className={inputStyle}
              >
                {[...Array(6)].map((_, i) => (
                  <option key={i} value={i}>{i} Children</option>
                ))}
              </select>
            </div>
          </div>

          {/* Rooms */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">Rooms</label>
            <select
              value={searchParams.rooms}
              onChange={(e) => setSearchParams({ ...searchParams, rooms: parseInt(e.target.value) })}
              className={inputStyle}
            >
              {[...Array(5)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1} Room{ i > 0 ? 's' : '' }</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <button
              type="submit"
              className="w-full h-[44px] border border-white text-white rounded-md flex items-center justify-center hover:bg-white hover:text-[#3E5454] transition-colors"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default SearchBar;