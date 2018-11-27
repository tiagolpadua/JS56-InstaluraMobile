const initialState = { usuario: null, token: null };

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...action.data };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
