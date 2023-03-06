import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userLoginRedcuer, userRegisterReducer } from "./redcuers/userReducer";

const reducer = combineReducers({
  userLogin: userLoginRedcuer,
  userRegister: userRegisterReducer,
});

const userInfoLocalStorage = localStorage.getItem("loggedInUser")
  ? JSON.parse(localStorage.getItem("loggedInUser"))
  : null;
const initialState = {
  userLogin : {userInfo : userInfoLocalStorage}
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
