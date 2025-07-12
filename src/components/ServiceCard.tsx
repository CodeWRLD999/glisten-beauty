import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, featured = false }) => {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      featured ? 'border-glisten-gold bg-gradient-to-br from-glisten-butter to-glisten-cream' : 'bg-glisten-white border-glisten-blue'
    }`}>
      <CardHeader>
        <CardTitle className="text-glisten-olive text-xl">{title}</CardTitle>
        <CardDescription className="text-glisten-olive/70">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-glisten-olive/80">
              <span className="w-2 h-2 bg-glisten-gold rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;