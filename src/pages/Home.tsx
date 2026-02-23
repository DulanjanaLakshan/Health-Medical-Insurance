import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { Hero, LiveWellnessTracker, PlanCategories, WhyVitalis } from '@/components/HomeSections';
import { SplashScreen } from '@/components/SplashScreen';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-vitalis-sage font-sans text-vitalis-navy">
      <Navbar />
      <main>
        <Hero />
        <LiveWellnessTracker />
        <PlanCategories />
        <WhyVitalis />
        {/* Additional sections would go here */}
      </main>
      <Footer />
    </div>
  );
}
