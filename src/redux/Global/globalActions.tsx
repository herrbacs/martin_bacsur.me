import { GET_LANGUAGE_SETTING } from "./globalTypes";

export const getLanguageSetting = () => {
  return { type: GET_LANGUAGE_SETTING, payload: {} };
};
