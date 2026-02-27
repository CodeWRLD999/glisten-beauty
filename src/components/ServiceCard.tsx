import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  featured = false,
}) => {
  return (
    <Card
      className={[
        'h-full overflow-hidden border transition-all duration-300',
        'bg-white/30 backdrop-blur shadow-sm hover:shadow-lg hover:-translate-y-0.5',
        featured ? 'border-rose-400/60' : 'border-white/40',
      ].join(' ')}
    >
      {/* top accent line */}
      <div
        className={[
          'h-1 w-full',
          featured ? 'bg-gradient-to-r from-rose-400 via-pink-300 to-white/60' : 'bg-white/30',
        ].join(' ')}
      />

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-glisten-olive text-xl md:text-2xl font-semibold">
              {title}
            </CardTitle>
            <CardDescription className="mt-2 text-glisten-olive/70 leading-relaxed">
              {description}
            </CardDescription>
          </div>

          {featured && (
            <span className="shrink-0 rounded-full border border-rose-400/40 bg-rose-400/15 px-3 py-1 text-xs font-semibold text-glisten-olive">
              Popular
            </span>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-2">
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3 text-glisten-olive/80 leading-relaxed">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a
            href="#contact"
            className={[
              'inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition',
              featured
                ? 'bg-rose-500/90 text-white hover:bg-rose-500 shadow-sm'
                : 'bg-white/40 text-glisten-olive hover:bg-white/55 border border-white/50',
            ].join(' ')}
          >
            Enquire / Book
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;