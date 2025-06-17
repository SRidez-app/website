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
import Login from './pages/login';
import Signup from "./signup";
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutYou from './signup/aboutyou';
import SignupMain from './signup/signupMain';
import SecretQuestions from './signup/secretquestions';
import ProfilePictureUpload from './signup/profilepictureupload';
import Verification from './signup/verification';
import ForgotEmail from './signup/forgotemail';
import Authenticate from './signup/authenticate';


import './index.css';

import './App.css';     // ✅ Load background/animation LAST so it overrides

function App() {
  return (
    <Layout>
      <Routes>
    <Route path="/" element={
  <div className="flex flex-col min-h-screen bg-background">

    <section id="what-is-seat-ridez">
      <Hero />
    </section>

    <section id="why-choose-us">
      <Features />
    </section>

    <section id="how-it-works">
      <HowItWorks />
    </section>

    <section id="our-story">
      <CommunityFirst />
    </section>

    <section id="community">
      <Community />
    </section>

  </div>
} />

       {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/about-us" element={<div className="p-8">About Page Coming Soon</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
     <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
     <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/AboutYou" element={<AboutYou />} />
      <Route path="/signupMain'" element={<SignupMain />} />
  <Route path="/secretquestions" element={<SecretQuestions />} />
    <Route path="/profilepictureupload" element={<ProfilePictureUpload />} />
     <Route path="/verification" element={<Verification />} />
     <Route path="/forgotemail" element={<ForgotEmail />} />
     <Route path="/authenticate" element={<Authenticate/>} />




        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* <Route path="/feature" element={<Features  />} /> */}
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/join" element={<div className="p-8">Join Page Coming Soon</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
