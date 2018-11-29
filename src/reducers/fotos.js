import { LIKE } from "../constants";

const initialState = { lista: [] };

export default function fotosReducer(state = initialState, action) {
  switch (action.type) {
    case LIKE:
      return { ...action.data };
    default:
      return state;
  }
}
