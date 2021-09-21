import { authConstants } from "./authConstants";

const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case authConstants.SET_USER:
      return { ...payload.user };
    case authConstants.REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default authReducer;
