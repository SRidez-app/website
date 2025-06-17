import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

/**
 * @typedef {Object} AuthContextType
 * @property {any} session
 * @property {(session: any) => void} setSession
 * @property {() => Promise<void>} signInWithGoogle
 */

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const redirectUri = makeRedirectUri({ useProxy: true });
  console.log('🔁 Redirect URI:', redirectUri);

  const [_, response, promptAsync] = Google.useAuthRequest({
    clientId: 'YOUR_CLIENT_ID',
    iosClientId: 'YOUR_IOS_CLIENT_ID',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    webClientId: 'YOUR_WEB_CLIENT_ID',
    scopes: ['openid', 'email', 'profile'],
    redirectUri,
  });

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener?.subscription?.unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    if (response?.type === 'success') {
      const authenticateWithSupabase = async () => {
        const { authentication } = response;
        if (!authentication?.idToken) {
          console.error('No ID token returned from Google');
          return;
        }

        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: authentication.idToken,
        });

        if (error) {
          console.error('Supabase authentication error:', error);
        } else {
          setSession(data.session);
        }
      };

      authenticateWithSupabase();
    }
  }, [response]);

  const signInWithGoogle = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, setSession, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
