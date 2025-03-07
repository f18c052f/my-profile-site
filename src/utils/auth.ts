// 一時的な認証システム（Firebase移行までの仮実装）
let isAuthenticated = false;

export const authenticate = async (password: string): Promise<boolean> => {
  // 開発用の簡易認証
  const success = password === 'demo';
  if (success) {
    isAuthenticated = true;
    localStorage.setItem('auth', 'true');
  }
  return success;
};

export const checkAuthStatus = (): boolean => {
  if (!isAuthenticated) {
    isAuthenticated = localStorage.getItem('auth') === 'true';
  }
  return isAuthenticated;
};

export const clearAuth = (): void => {
  isAuthenticated = false;
  localStorage.removeItem('auth');
};