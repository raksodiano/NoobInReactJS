import { SET_CITY } from './../action';

export const city = (state = {}, action) => {
  switch (action.type) {
    case SET_CITY:
      return action.payload;

    default:
      return state;
  }
};