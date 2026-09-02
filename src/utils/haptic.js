/**
 * Triggers a short haptic feedback (vibration) on supported devices.
 * @param {number | number[]} pattern - Duration in ms or vibration pattern array. Default is 15ms.
 */
export const triggerHaptic = (pattern = 15) => {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Ignored if unsupported or restricted
    }
  }
};
