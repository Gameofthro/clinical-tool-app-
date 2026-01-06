import { Preferences } from '@capacitor/preferences';

export const UserService = {
  // 1. SAVE: Updates name
  setName: async (name) => {
    try {
      const cleanName = name.trim();
      if (cleanName.length > 0) {
        await Preferences.set({ key: 'user_display_name', value: cleanName });
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error saving name:", error);
      return false;
    }
  },

  // 2. RETRIEVE: Name or Guest
  getName: async () => {
    try {
      const { value } = await Preferences.get({ key: 'user_display_name' });
      return value && value.length > 0 ? value : 'Guest';
    } catch (error) {
      return 'Guest';
    }
  },

  // 3. REMOVE: Full wipe of identity and onboarding flag
  removeName: async () => {
    try {
      await Preferences.remove({ key: 'user_display_name' });
      await Preferences.remove({ key: 'onboarding_complete' });
      return true;
    } catch (error) {
      return false;
    }
  },

  // 4. ONBOARDING LOGIC
  hasBeenAsked: async () => {
    const { value } = await Preferences.get({ key: 'onboarding_complete' });
    return value === 'true';
  },

  setAsAsked: async () => {
    await Preferences.set({ key: 'onboarding_complete', value: 'true' });
  }
};