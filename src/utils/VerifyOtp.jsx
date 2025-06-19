import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const VerifyOtp = () => {
  const [searchParams] = useSearchParams();
  const phone = searchParams.get('phone');
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    setIsVerifying(true);
    try {
      const response = await fetch('/your-verification-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone, otp }),
      });

      if (!response.ok) throw new Error('Invalid OTP');

      alert('Phone verified successfully!');
      window.location.href = '/dashboard/home'; // or wherever you want to go next
    } catch (err) {
      alert(err.message);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-semibold mb-4">Verify Your Phone</h1>
      <p className="mb-4">We sent a code to: <strong>{phone}</strong></p>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="px-4 py-2 rounded bg-white text-black w-64 mb-4"
      />
      <button
        onClick={handleVerify}
        disabled={isVerifying}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {isVerifying ? 'Verifying...' : 'Verify'}
      </button>
    </div>
  );
};

export default VerifyOtp;
