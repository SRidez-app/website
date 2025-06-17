import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Notification from './components/Notification';
import HowItWorks from './components/HowItWorks';
import Community from './components/Community';
import CommunityFirst from './components/CommunityFirst';
import './index.css';

import './App.css';     // ✅ Load background/animation LAST so it overrides

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col min-h-screen bg-background">
            <Hero />
            <Features />
            <HowItWorks />
{/*             <Notification />
            <Pricing />
            <Testimonials /> */}
            <CommunityFirst />
            <Community/>
          </div>
        } />
       {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/about-us" element={<div className="p-8">About Page Coming Soon</div>} />
        <Route path="/login" element={<div className="p-8">Login Page Coming Soon</div>} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* <Route path="/feature" element={<Features  />} /> */}
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/join" element={<div className="p-8">Join Page Coming Soon</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
