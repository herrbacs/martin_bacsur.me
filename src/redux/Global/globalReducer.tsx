import { GET_LANGUAGE_SETTING, globalReducerActionType } from "./globalTypes";

const initialState = {
  languageSetting: "ENG",
}

export const globalReducer = (state : any = initialState, action: globalReducerActionType) => {
  switch (action.type) {
   
    default:
      return state;
  }
};
