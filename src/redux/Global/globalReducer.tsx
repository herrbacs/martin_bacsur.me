import { GET_LANGUAGE_SETTING, globalReducerActionType } from "./globalTypes";

const initialState = {
  languageSetting: "hun",
}

export const globalReducer = (state : any = initialState, action: globalReducerActionType) => {
  switch (action.type) {
   
    default:
      return state;
  }
};
