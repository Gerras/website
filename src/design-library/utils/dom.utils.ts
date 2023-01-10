/**
 * Gets the width of the viewport.
 *
 * @returns Width of the viewport.
 */
export const getViewPortWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

/**
 * Gets teh height of the viewport.
 *
 * @returns Height of the viewport
 */
export const getViewPortHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
