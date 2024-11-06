import React from 'react';

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div className="px-4 md:px-0">
      <div className="flex items-center justify-center my-4">
        <p className="text-lg md:text-xl font-extralight text-center">
          {formattedLocalTime}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-2xl md:text-3xl font-medium text-center">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
