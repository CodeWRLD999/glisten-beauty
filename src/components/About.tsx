import React from 'react';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <>
      <Head>
        <title>About - Glisten Hair & Aesthetics, Poole Expert</title>
        <meta
          name="description"
          content="Meet the expert team at Glisten Hair & Aesthetics in Poole BH15. Over 15 years of hair and aesthetics experience, specializing in men’s hair replacement and Japanese Head Spa. Book now!"
        />
        <meta
          name="keywords"
          content="about hair stylist Poole, aesthetics Poole, men’s hair replacement near me, Japanese Head Spa Poole, Poole BH15"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://hair-replacement-landing-op7bgkptj-glisten-aesthetics.vercel.app/about"
        />
      </Head>

      <section id="about" className="relative py-20">
        {/* subtle section overlay to keep readability on the page gradient */}
        <div className="pointer-events-none absolute inset-0 bg-white/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/10" />

        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm font-medium text-glisten-olive/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-rose-400" />
                15+ years experience • Poole BH15
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-glisten-olive">
                About Our Expert Practitioner
              </h2>

              <p className="mt-4 text-lg md:text-xl text-glisten-olive/70 max-w-3xl mx-auto">
                Advanced Aesthetics Practitioner & Educator — specialising in natural, confidence-boosting results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-white/40 bg-white/30 backdrop-blur shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-glisten-olive flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/40 border border-white/40">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    </span>
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-3 text-glisten-olive/80">
                    {[
                      'Over 15 years in hairdressing, covering all aspects',
                      'Advanced Aesthetics Practitioner and Educator',
                      '6 years in education within the hair and beauty industry',
                      'Fully qualified Assessor',
                    ].map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-white/40 bg-white/30 backdrop-blur shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-glisten-olive flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/40 border border-white/40">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    </span>
                    Specialisations
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="space-y-3 text-glisten-olive/80">
                    {[
                      'Advanced aesthetics treatments',
                      'Facial fillers and anti-wrinkle treatments',
                      'Japanese Head Spa techniques',
                      "Men’s hair replacement systems",
                      'Lemonbottle fat dissolving',
                    ].map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rose-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <div className="rounded-2xl border border-white/40 bg-white/30 backdrop-blur p-8 md:p-10 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-glisten-olive">
                      Purpose-Built Home Salon
                    </h3>
                    <p className="mt-3 text-glisten-olive/75 text-lg leading-relaxed max-w-3xl">
                      Located at <span className="font-medium text-glisten-olive">12 Oakfield Road, Poole BH15 3BG</span>, our
                      purpose-built facility provides a calm, professional space for hair and aesthetics.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                                 bg-rose-500/90 text-white hover:bg-rose-500 transition shadow-sm"
                    >
                      Book / Enquire
                    </a>
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                                 bg-white/40 text-glisten-olive hover:bg-white/55 transition border border-white/50"
                    >
                      View Services
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;