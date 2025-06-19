// utils/sendOtpToPhone.js

export async function sendOtpToPhone(phoneNumber) {
  try {
    const response = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/functions/v1/send-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ phone: phoneNumber }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || 'Failed to send OTP');
    }

    return true;
  } catch (err) {
    console.error('Error sending OTP:', err.message);
    return false;
  }
}
