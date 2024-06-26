import { TLocation } from "../models/root.model";

export const gmapDirection = (location: TLocation) => {
  return `https://www.google.com/maps/dir/?api=1&origin=current_position&destination=${location.lat},${location.lng}`;
};
