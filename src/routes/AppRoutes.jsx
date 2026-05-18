import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Luxury fallback loader matching the premium brand theme
const LuxuryLoader = () => (
  <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center relative select-none">
    {/* Ambient Glows */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-warm-beige/10 blur-[100px]" />
    </div>
    <div className="relative z-10 flex flex-col items-center gap-4">
      {/* Luxury elegant spinner */}
      <div className="w-8 h-8 border border-warm-beige/20 border-t-warm-beige rounded-full animate-spin" />
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-warm-beige/60">Loading Space...</span>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LuxuryLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
