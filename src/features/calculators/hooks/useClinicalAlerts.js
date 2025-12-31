import { LocalNotifications } from '@capacitor/local-notifications';

export const useClinicalAlerts = () => {
  const triggerNotification = async (type, data) => {
    // Request permissions first
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display !== 'granted') return;

    let notifyConfig = null;

    if (type === 'pediatric' && data) {
      notifyConfig = {
        title: "Care Alert: Pediatric Safety",
        body: `Ensure this ${data.value}mg dose is given safely. Double-check NTI protocols.`
      };
    }

    if (type === 'bmi' && data) {
      const val = parseFloat(data.value);
      let msg = val < 18.5 ? "Focus on nourishing your body with heavy meals today." :
                val < 25 ? "You're doing amazing! Your BMI is perfect." :
                "Let's try some cardio and lighter meals today to feel your best.";
      notifyConfig = { title: "ClinicalAssist Health Partner", body: msg };
    }

    if (type === 'map' && data) {
      const mapVal = parseFloat(data.value);
      notifyConfig = {
        title: "Vital Support Needed",
        body: mapVal < 65 ? "Concern: MAP result < 65. Reach out to the medical team." : "Perfusion looks stable."
      };
    }

    if (type === 'gfr' && data) {
      const gfrVal = parseFloat(data.value === ">90" ? 91 : data.value);
      notifyConfig = {
        title: "Renal Health Monitor",
        body: gfrVal < 60 ? "Action: Take a moment to adjust renal-cleared meds." : "Renal clearance looks healthy!"
      };
    }

    if (notifyConfig) {
      await LocalNotifications.schedule({
        notifications: [{
          id: Date.now(),
          title: notifyConfig.title,
          body: notifyConfig.body,
          schedule: { at: new Date(Date.now() + 1500) },
          actionTypeId: 'CLINICAL_CARE',
          smallIcon: 'ic_launcher_foreground'
        }]
      });
    }
  };

  return { triggerNotification };
};