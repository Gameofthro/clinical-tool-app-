import { LocalNotifications } from '@capacitor/local-notifications';

export const useClinicalAlerts = (activeUser) => {
  // Pulls real name from your App.jsx state, otherwise defaults to Guest
  const userName = activeUser?.displayName || activeUser?.name || "Guest";

  const triggerNotification = async (type, data) => {
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display !== 'granted') return;

    let notifyConfig = null;
    const val = parseFloat(data.value === ">90" ? 91 : data.value);

    // 1. RENAL MASTER (eGFR)
    if (type === 'renal' || type === 'gfr') {
      if (val < 60) {
        notifyConfig = { 
          title: `Clinical Insight: ${userName} 💧`, 
          body: "Reduced renal filtration observed. Prioritize hydration and monitor nephrotoxic exposure for optimal safety." 
        };
      } else {
        notifyConfig = { 
          title: `Status Update: ${userName} ✨`, 
          body: "Optimal renal filtration detected. The system is effectively maintaining fluid and metabolic balance." 
        };
      }
    }

    // 2. RENAL DOSING MASTER (CrCl)
    if (type === 'crcl') {
      if (val < 30) {
        notifyConfig = { 
          title: `Dosing Alert: ${userName} 💊`, 
          body: "Severe clearance impairment identified. Immediate dose adjustments are mandatory to prevent systemic toxicity." 
        };
      } else if (val < 60) {
        notifyConfig = { 
          title: `Clinical Note: ${userName} 🔍`, 
          body: "Moderate reduction in clearance. Careful titration of renally-cleared medications is recommended." 
        };
      } else {
        notifyConfig = { 
          title: `Clearance Verified: ${userName} ✅`, 
          body: "Normal creatinine clearance confirmed. Standard pharmacological dosing protocols are appropriate." 
        };
      }
    }

    // 3. METABOLIC BMI
    if (type === 'bmi') {
      if (val < 18.5) {
        notifyConfig = { 
          title: `Health Profile: ${userName} 🍎`, 
          body: "Low BMI threshold detected. Support metabolic strength with high-density nutritional intake." 
        };
      } else if (val < 25) {
        notifyConfig = { 
          title: `Profile Stability: ${userName} 🌟`, 
          body: "Healthy BMI range maintained. Current physiological balance supports long-term wellness." 
        };
      } else {
        notifyConfig = { 
          title: `Vitality Note: ${userName} 🏃‍♂️`, 
          body: "Metabolic elevation observed. Consistent activity and balanced nutrition will optimize overall energy levels." 
        };
      }
    }

    // 4. HEMODYNAMICS (MAP)
    if (type === 'map') {
      if (val < 65) {
        notifyConfig = { 
          title: `Perfusion Alert: ${userName} ⚠️`, 
          body: "Critical MAP threshold (<65). Risk of vital organ hypoperfusion. Immediate clinical review is essential." 
        };
      } else if (val > 100) {
        notifyConfig = { 
          title: `Pressure Warning: ${userName} ❤️`, 
          body: "Elevated arterial pressure detected. Focus on stress reduction and vascular rest to support heart health." 
        };
      } else {
        notifyConfig = { 
          title: `Hemodynamic Status: ${userName} ✨`, 
          body: "Adequate mean arterial pressure confirmed. Vital organ perfusion remains stable and balanced." 
        };
      }
    }

    // 5. PEDIATRIC DOSE
    if (type === 'pediatric') {
      notifyConfig = { 
        title: `Pediatric Safety: ${userName} 👶`, 
        body: `Calculation for ${data.value}mg complete. Ensure dosage matches physiological development and weight accuracy.` 
      };
    }

    // 6. INFUSION MASTER
    if (type === 'infusion') {
      const mlHr = parseFloat(data.value);
      notifyConfig = { 
        title: `Infusion Protocol: ${userName} 💧`, 
        body: `Rate confirmed at ${mlHr} mL/hr. Maintain strict monitoring for site integrity and delivery precision.` 
      };
    }

    // 7. FLUID STRATEGY
    if (type === 'fluid') {
      notifyConfig = { 
        title: `Fluid Management: ${userName} 🧪`, 
        body: `Protocol: ${data.indication}. Maintaining electrolyte homeostasis is a primary goal for clinical recovery.` 
      };
    }

    if (notifyConfig) {
      await LocalNotifications.schedule({
        notifications: [{
          id: Date.now(),
          title: notifyConfig.title,
          body: notifyConfig.body,
          channelId: 'clinical-alerts',
          schedule: { at: new Date(Date.now() + 1000) },
          smallIcon: 'ic_launcher_foreground',
          actionTypeId: 'CLINICAL_CARE'
        }]
      });
    }
  };

  return { triggerNotification };
};