import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Glisten Hair & Aesthetics, Poole BH15</title>
        <meta
          name="description"
          content="Contact Glisten Hair & Aesthetics in Poole BH15 for bookings. Visit 12 Oakfield Road for expert hairdressing, aesthetics, and men’s hair replacement. Book online now!"
        />
        <meta
          name="keywords"
          content="contact hairdresser Poole, men’s hair replacement near me, beauty salon Poole, aesthetics Poole, Poole BH15"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://hair-replacement-landing-op7bgkptj-glisten-aesthetics.vercel.app/contact"
        />
      </Helmet>

      <section id="contact" className="relative py-20">
        {/* subtle overlay for readability on the page gradient */}
        <div className="pointer-events-none absolute inset-0 bg-white/15" />

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm font-medium text-glisten-olive/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              Contact • Booking • Directions
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-glisten-olive">
              Contact & Booking
            </h2>
            <p className="mt-4 text-lg md:text-xl text-glisten-olive/70 max-w-3xl mx-auto">
              Ready to refresh your look? Book online or get directions to our purpose-built home salon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Visit card */}
            <Card className="overflow-hidden border border-white/40 bg-white/30 backdrop-blur shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-1 w-full bg-gradient-to-r from-zinc-200 via-white/50 to-rose-300" />
              <CardHeader className="pb-2">
                <CardTitle className="text-glisten-olive text-2xl md:text-3xl font-semibold">
                  Visit Our Salon
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 pt-2">
                <div className="rounded-2xl border border-white/40 bg-white/25 backdrop-blur p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/35">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-glisten-olive/70">Address</p>
                      <p className="text-lg font-medium text-glisten-olive">12 Oakfield Road</p>
                      <p className="text-lg font-medium text-glisten-olive">Poole BH15 3BG</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/40 bg-white/25 backdrop-blur p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/35">
                      <span className="text-lg">🏠</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-glisten-olive/70">Facility</p>
                      <p className="text-glisten-olive/80 leading-relaxed">
                        A large purpose-built home salon with professional equipment and a calm, comfortable environment.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://that-time.co.uk/glisten-hair-aesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full rounded-xl bg-rose-500/90 hover:bg-rose-500 text-white font-semibold py-6 shadow-sm">
                    Book Online
                  </Button>
                </a>

                <p className="text-center text-sm text-glisten-olive/60">
                  Klarna / Clearpay available via online booking.
                </p>
              </CardContent>
            </Card>

            {/* Directions card */}
            <Card className="overflow-hidden border border-white/40 bg-white/30 backdrop-blur shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-1 w-full bg-gradient-to-r from-rose-300 via-white/50 to-zinc-200" />
              <CardHeader className="pb-2">
                <CardTitle className="text-glisten-olive text-2xl md:text-3xl font-semibold">
                  Get Directions
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="rounded-2xl border border-white/40 bg-white/25 backdrop-blur p-6 text-center">
                  <p className="text-sm font-semibold text-glisten-olive/70">Google Maps</p>
                  <p className="mt-2 text-glisten-olive/75 leading-relaxed">
                    Tap below to open the exact location and start navigation.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://maps.google.com/?q=12+Oakfield+Road,+Poole+BH15+3BG"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="rounded-xl bg-white/40 hover:bg-white/55 text-glisten-olive border border-white/50">
                        Open in Google Maps
                      </Button>
                    </a>

                    <a href="#services">
                      <Button className="rounded-xl bg-rose-500/90 hover:bg-rose-500 text-white shadow-sm">
                        View Services
                      </Button>
                    </a>
                  </div>

                  <div className="mt-6 text-xs text-glisten-olive/55">
                    Tip: If you’re using Apple Maps, open the link and choose your preferred map app.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;