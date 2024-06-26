import { isValidHttpUrl } from "./isValidHttpUrl";

export const renderImageUpload = (image: string) => {
  return isValidHttpUrl(image)
    ? image
    : import.meta.env.VITE_API_URL + "/file/" + image;
};
