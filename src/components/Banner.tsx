import React from 'react';
import "@/components/banner.css"; // Assuming you have a CSS file for styling the banner

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-glisten-gold to-glisten-yellow py-5 px-1 shadow-md" id="backing">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-16 bg-glisten-white rounded-lg flex items-center justify-center shadow-sm" id="backing2">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;