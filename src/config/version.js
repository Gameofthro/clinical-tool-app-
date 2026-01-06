/**
 * CONFIG: version.js
 * Automatically pulls the version from package.json to ensure 
 * Single Source of Truth across the Header, Drawer, and About Modals.
 */

import packageJson from '../../package.json';

// Core Versioning
export const APP_VERSION = packageJson.version;

// Metadata for the About Modal
export const BUILD_NUMBER = "2026.01.06-STABLE"; 
export const LAST_REVIEW_DATE = "JAN 2026";

// App Info
export const APP_NAME = "ClinicalAssist";