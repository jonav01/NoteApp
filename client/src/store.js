import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  noteCreateReducer,
  noteDeleteReducer,
  noteListReducer,
  noteupdateReducer,
} from "./redcuers/noteReducer";
import { userLoginRedcuer, userRegisterReducer } from "./redcuers/userReducer";

const reducer = combineReducers({
  userLogin: userLoginRedcuer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteupdateReducer,
  noteDelete: noteDeleteReducer,
});

const userInfoLocalStorage = localStorage.getItem("loggedInUser")
  ? JSON.parse(localStorage.getItem("loggedInUser"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoLocalStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
