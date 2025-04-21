import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Notification from './components/Notification';
import './index.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col min-h-screen bg-background">
            <Hero />
            <Features />
            <Notification />
            <Pricing />
            <Testimonials />
          </div>
        } />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/updates" element={<div className="p-8">Updates Coming Soon</div>} />
        <Route path="/support" element={<div className="p-8">Support Page Coming Soon</div>} />
        <Route path="/join" element={<div className="p-8">Join Page Coming Soon</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
