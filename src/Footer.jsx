import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white mt-10 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <p className="text-center font-semibold text-lg">
          Download Weather Reporter From GitHub
        </p>
        <a
          href="https://github.com/Aritra45/Weather-App/releases/download/v2.0/WeatherReporter.apk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="gitlogo.jpg" // Replace this with the actual image URL or path
            alt="Download app"
            className="w-32 h-auto mb-2" // Adjust width as needed
          />
        </a>

        <div className="text-center text-sm mt-4">
          <p>© 2024 Weather Reporter</p>
          <p>
            Developed by{' '}
            <a
              href="https://aritradeb-portfolio.netlify.app/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aritra Deb
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
