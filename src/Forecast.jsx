import React from 'react';

const Forecast = ({ title, data }) => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase text-lg">{title}</p>
      </div>

      <hr className="my-1" />

      <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
        {data.map((d, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center justify-center text-center
              w-1/3 
              sm:w-1/2  // Only for mobile devices, 2 items per row
              lg:w-1/5  // For larger screens (still 1 item per row)
              xl:w-1/6  // Further scaling for even larger screens
            "
          >
            <p className="font-light text-sm">{d.title}</p>
            <img src={d.icon} alt="weather icon" className="w-12 my-1" />
            <p className="font-medium text-base">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
