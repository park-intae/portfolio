/**
 * Custom Cubic Easing Function for Cinematic Smooth Scroll Motion
 */
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

/**
 * Smoothly scrolls to the target Y position or HTML element using 60fps rAF and cubic easing.
 * @param target Y coordinate (number) or target HTML element ID (string)
 * @param duration Animation duration in milliseconds (default: 750ms)
 */
export const smoothScrollTo = (target: number | string, duration: number = 750): void => {
  let targetY: number;

  if (typeof target === 'string') {
    const element = document.getElementById(target);
    if (!element) return;
    targetY = element.getBoundingClientRect().top + window.scrollY;
  } else {
    targetY = target;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 2) return; // Prevent unnecessary scrolling if already at destination

  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easeProgress);

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};
