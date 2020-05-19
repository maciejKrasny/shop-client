export const hexToRGB = (hex: string, alpha?: number) => {
  let parseString = hex;
  if (hex.startsWith('#')) {
    parseString = hex.slice(1, 7);
  }

  if (parseString.length !== 6) {
    throw new Error('You should provide full hex string.');
  }

  const r = parseInt(parseString.slice(0, 2), 16);
  const g = parseInt(parseString.slice(2, 4), 16);
  const b = parseInt(parseString.slice(4, 6), 16);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    throw new Error('The hex you provided is invalid.');
  }

  if (alpha !== undefined) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};
