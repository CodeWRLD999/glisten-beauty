import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-glisten-olive text-glisten-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Glisten Hair & Aesthetics</h3>
            <p className="text-glisten-white/80 mb-4">
              Your premier destination for hair stylist services in Poole BH15. 
              Over 15 years of expertise in hairdressing and aesthetics.
            </p>
            <div className="text-glisten-white/80">
              <p className="font-semibold">📍 12 Oakfield Road, Poole BH15 3BG</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-glisten-white/80">
              <li>• Ladies Hairdressing</li>
              <li>• Hair Extensions Poole</li>
              <li>• Men's Hair Replacement Poole</li>
              <li>• Aesthetics Poole</li>
              <li>• Japanese Head Spa Poole</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Keywords</h4>
            <div className="text-glisten-white/80 text-sm space-y-1">
              <p>Hair stylist Poole • Hairdressing Poole BH15</p>
              <p>Aesthetics Poole • Japanese Head Spa Poole</p>
              <p>Men's hair replacement Poole</p>
              <p>Hair extensions Poole</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-glisten-white/20 mt-8 pt-8 text-center">
          <p className="text-glisten-white/60">
            © 2024 Glisten Hair & Aesthetics. All rights reserved. | 
            Hair Stylist in Poole BH15 | 12 Oakfield Road, Poole BH15 3BG
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;