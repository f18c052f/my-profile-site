import { getAnalytics, logEvent } from 'firebase/analytics';
import { app } from './firebase';

const analytics = getAnalytics(app);

export const logPageView = (page: string) => {
  try {
    logEvent(analytics, 'page_view', {
      page_path: page,
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
};