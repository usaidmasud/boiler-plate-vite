export const parseLocation = (location: string) => {
  const [lat, lng] = location.split(",").map(parseFloat);
  return { lat, lng };
};
