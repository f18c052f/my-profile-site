import { connectAuthEmulator, type Auth } from 'firebase/auth';
import { getAnalytics, setAnalyticsCollectionEnabled } from 'firebase/analytics';
import { app, auth } from './firebase';

export type Environment = 'production' | 'emulator';

class EnvironmentManager {
  private currentEnvironment: Environment;

  constructor() {
    // 環境変数からエミュレータ使用フラグを取得（デフォルトはtrue）
    const useEmulator = import.meta.env.VITE_USE_EMULATOR !== 'false';
    this.currentEnvironment = useEmulator ? 'emulator' : 'production';
    this.setupEnvironment();
  }

  private setupEnvironment() {
    if (this.currentEnvironment === 'emulator') {
      this.setupEmulator();
    } else {
      this.setupProduction();
    }
  }

  private setupEmulator() {
    // エミュレータの設定
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    const analytics = getAnalytics(app);
    setAnalyticsCollectionEnabled(analytics, false);
    console.log('🔧 Running in Emulator mode');
  }

  private setupProduction() {
    // 本番環境の設定
    const analytics = getAnalytics(app);
    setAnalyticsCollectionEnabled(analytics, true);
    console.log('🚀 Running in Production mode');
  }

  public getCurrentEnvironment(): Environment {
    return this.currentEnvironment;
  }

  public isEmulator(): boolean {
    return this.currentEnvironment === 'emulator';
  }

  public isProduction(): boolean {
    return this.currentEnvironment === 'production';
  }
}

export const environmentManager = new EnvironmentManager();