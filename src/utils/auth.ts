import { 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  type User,
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence
} from 'firebase/auth';
import { auth } from './firebase';

export const authenticate = async (password: string): Promise<boolean> => {
  try {
    const email = import.meta.env.VITE_AUTH_EMAIL;
    if (!email) {
      console.log('Authentication email not configured');
      return false;
    }
    if (!password) {
      console.log('Password is required');
      return false;
    }

    // Use session persistence for better security
    await setPersistence(auth, import.meta.env.PROD ? browserSessionPersistence : inMemoryPersistence);
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return !!userCredential.user;
  } catch (error) {
    console.log('Authentication failed:', error);
    return false;
  }
};

export const checkAuthStatus = (): Promise<User | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
};

export const clearAuth = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log('Sign out failed:', error);
  }
};