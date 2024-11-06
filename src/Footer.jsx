import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white mt-50 ">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-center text-sm mb-2">© 2024 Weather Repoter</p>
        <p className="text-center text-sm">
          Developed by{' '}
          <a
            href="https://aritradeb-portfolio.netlify.app/"
            className="text-blue-400 hover:underline"
            target="_blank"
          >
            Aritra Deb
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
