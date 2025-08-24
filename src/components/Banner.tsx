import React from 'react';
import { Helmet } from 'react-helmet'; // Use react-helmet for Vite/React
import "@/components/Banner.css"; // Assuming you have a CSS file for styling the banner

const Banner = () => {
  return (
    <>
      <Helmet>
        <title>Glisten Hair & Aesthetics - Premier Hair Stylist in Poole BH15</title>
        <meta
          name="description"
          content="Welcome to Glisten Hair & Aesthetics, your premier hair stylist in Poole BH15. Discover expert hairdressing, aesthetics, and men’s hair replacement. Book your visit today!"
        />
        <meta
          name="keywords"
          content="hairdresser near me, men’s hair replacement near me, hair stylist Poole, aesthetics Poole, Poole BH15"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://hair-replacement-landing-op7bgkptj-glisten-aesthetics.vercel.app"
        /> {/* Replace with your live URL */}
      </Helmet>
      <div className="bg-gradient-to-r from-glisten-gold to-glisten-yellow py-5 px-1 shadow-md" id="backing">
        <div className="container mx-auto flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-16 bg-glisten-white rounded-lg flex items-center justify-center shadow-sm" id="backing2">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;