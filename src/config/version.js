/**
 * CONFIG: Versioning Intelligence
 * DESCRIPTION: Automatically syncs UI with project metadata.
 */

import packageInfo from '../../package.json';

// Pulls directly from your package.json version field
export const APP_VERSION = packageInfo.version; 

// Generates a daily Build ID (e.g., 20251220)
export const BUILD_NUMBER = new Date().toISOString().split('T')[0].replace(/-/g, ''); 

// Formats for legal compliance footers
export const LAST_REVIEW_DATE = new Date().toLocaleDateString('en-US', { 
  month: 'short', 
  day: 'numeric', 
  year: 'numeric' 
}).toUpperCase();

export const APP_ID = "com.clinicalassist.v1";