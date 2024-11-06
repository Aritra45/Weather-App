import React from 'react';

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, name: 'London' },
    { id: 2, name: 'Sydney' },
    { id: 3, name: 'Tokyo' },
    { id: 4, name: 'Paris' },
    { id: 5, name: 'Toronto' },
  ];

  return (
    <div className="my-6">
      {/* Mobile view (3 buttons in the first row, 2 centered in the second row) */}
      <div className="block sm:hidden">
        <div className="flex flex-wrap justify-between mb-4">
          {cities.slice(0, 3).map((city) => (
            <button
              key={city.id}
              className="text-lg font-medium hover:bg-gray-700/20 px-4 py-2 rounded-md transition ease-in w-1/3 mb-2"
              onClick={() => setQuery({ q: city.name })}
            >
              {city.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          {cities.slice(3).map((city) => (
            <button
              key={city.id}
              className="text-lg font-medium hover:bg-gray-700/20 px-4 py-2 rounded-md transition ease-in mx-2 w-1/2"
              onClick={() => setQuery({ q: city.name })}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop view (All buttons in one row) */}
      <div className="hidden sm:flex justify-between">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-lg font-medium hover:bg-gray-700/20 px-4 py-2 rounded-md transition ease-in"
            onClick={() => setQuery({ q: city.name })}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopButtons;
