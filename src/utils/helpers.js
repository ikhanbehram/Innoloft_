import { BASE_URL } from "../constants";

export const mapSelectFieldData = (data) => {
  if (Array.isArray(data)) {
    return data.map((item) => {
      return {
        label: item,
        value: item,
      };
    });
  }
  // TODO: Handle other cases or provide a default value
  return data;
};
export const getConfig = () => {
  return fetch(`${BASE_URL}/configuration/${import.meta.env.VITE_APP_ID}/`);
};
