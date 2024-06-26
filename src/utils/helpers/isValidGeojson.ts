export const isGeoJSONValid = (geoJSONString: string) => {
  try {
    const parse = JSON.parse(geoJSONString);
    return typeof parse === "object" ? true : false;
  } catch (error) {
    return false;
  }
};
