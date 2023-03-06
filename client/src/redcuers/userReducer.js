import {
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstant";

export const userLoginRedcuer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, userInfo: action.payload };
      break;
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
      break;
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
      break;
    case USER_LOGOUT:
      return {};
      break;
    default:
      return state;
      break;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, userInfo: action.payload };
      break;
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
      break;
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
      break;
    default:
      return state;
      break;
  }
};
