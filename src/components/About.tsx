import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-glisten-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-glisten-olive mb-4">
              About Our Expert Practitioner
            </h2>
            <p className="text-xl text-glisten-olive/70">
              Advanced Aesthetics Practitioner and Educator with extensive experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-glisten-cream to-glisten-butter border-glisten-sage">
              <CardHeader>
                <CardTitle className="text-glisten-olive flex items-center">
                  <span className="w-3 h-3 bg-glisten-gold rounded-full mr-3"></span>
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="text-glisten-olive/80 space-y-3">
                <p>• Over 15 years in hairdressing, covering all aspects</p>
                <p>• Advanced Aesthetics Practitioner and Educator</p>
                <p>• 6 years in education within the hair and beauty industry</p>
                <p>• Fully qualified Assessor</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-glisten-sage to-glisten-cream border-glisten-olive">
              <CardHeader>
                <CardTitle className="text-glisten-olive flex items-center">
                  <span className="w-3 h-3 bg-glisten-gold rounded-full mr-3"></span>
                  Specializations
                </CardTitle>
              </CardHeader>
              <CardContent className="text-glisten-olive/80 space-y-3">
                <p>• Advanced aesthetics treatments</p>
                <p>• Facial fillers and anti-wrinkle treatments</p>
                <p>• Japanese Head Spa techniques</p>
                <p>• Men's hair replacement systems</p>
                <p>• Lemonbottle fat dissolving</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-glisten-gold to-glisten-yellow p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-glisten-olive mb-4">
                Purpose-Built Home Salon
              </h3>
              <p className="text-glisten-olive/80 text-lg">
                Located at 12 Oakfield Road, Poole BH15 3BG, our large purpose-built facility 
                provides a comfortable and professional environment for all your hair and beauty needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;