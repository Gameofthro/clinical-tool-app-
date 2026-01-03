import packageInfo from '../../package.json';
export const APP_VERSION = packageInfo.version; 
export const BUILD_NUMBER = new Date().toISOString().split('T')[0].replace(/-/g, ''); 
export const LAST_REVIEW_DATE = new Date().toLocaleDateString('en-US', { 
  month: 'short', 
  day: 'numeric', 
  year: 'numeric' 
}).toUpperCase();

export const APP_ID = "com.clinicalassist.v1";