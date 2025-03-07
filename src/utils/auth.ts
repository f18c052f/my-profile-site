import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  type User,
  setPersistence,
  browserSessionPersistence,
  inMemoryPersistence,
} from "firebase/auth";
import { auth } from "./firebase";
import { environmentManager } from "./environment";

export const authenticate = async (password: string): Promise<boolean> => {
  try {
    const email = import.meta.env.VITE_AUTH_EMAIL || "test@example.com";

    if (!password) {
      console.log("Password is required");
      return false;
    }

    // セッション永続性の設定
    await setPersistence(
      auth,
      environmentManager.isProduction()
        ? browserSessionPersistence
        : inMemoryPersistence
    );

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return !!userCredential.user;
  } catch (error) {
    console.log("Authentication failed:", error);
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
    console.log("Sign out failed:", error);
  }
};
