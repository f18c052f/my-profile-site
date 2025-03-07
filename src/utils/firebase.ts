import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 開発環境では認証エミュレーターを使用し、アナリティクスを無効化
if (import.meta.env.DEV) {
  connectAuthEmulator(auth, 'http://127.0.0.1:9099');
  const analytics = getAnalytics(app);
  setAnalyticsCollectionEnabled(analytics, false);
}