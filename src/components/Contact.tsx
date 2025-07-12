import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-glisten-blue to-glisten-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-glisten-olive mb-4">
            Contact & Booking
          </h2>
          <p className="text-xl text-glisten-olive/70">
            Ready to transform your look? Get in touch or book your appointment today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-glisten-white border-glisten-sage">
            <CardHeader>
              <CardTitle className="text-glisten-olive text-2xl">
                Visit Our Salon
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-glisten-olive/80">
                <h3 className="font-semibold text-lg mb-2">📍 Address</h3>
                <p className="text-lg">12 Oakfield Road</p>
                <p className="text-lg">Poole BH15 3BG</p>
              </div>
              
              <div className="text-glisten-olive/80">
                <h3 className="font-semibold text-lg mb-2">🏠 Facility</h3>
                <p>Large purpose-built home salon with professional equipment and comfortable environment</p>
              </div>
              
              <Button 
                className="w-full bg-glisten-gold hover:bg-glisten-yellow text-glisten-olive font-semibold py-3"
                onClick={() => window.open('https://that-time.co.uk/glisten-hair-aesthetics', '_blank')}
              >
                Book Online Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-glisten-white border-glisten-sage">
            <CardHeader>
              <CardTitle className="text-glisten-olive text-2xl">
                Get Directions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-glisten-cream rounded-lg p-6 text-center">
                <div className="text-glisten-olive/60 mb-4">
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p>Click below to view location on Google Maps</p>
                </div>
                <Button 
                  variant="outline" 
                  className="border-glisten-olive text-glisten-olive hover:bg-glisten-olive hover:text-glisten-white"
                  onClick={() => window.open('https://maps.google.com/?q=12+Oakfield+Road,+Poole+BH15+3BG', '_blank')}
                >
                  Open in Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;