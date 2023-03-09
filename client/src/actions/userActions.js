import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstant";
import { useNavigate } from "react-router-dom";

export const login = (email, password) => async (dispatch) => {
  const formData = {
    email,
    password,
  };
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const response = await fetch("https://mynoteapp.onrender.com//api/users/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      throw new Error("Invalid user !");
    } else {
      const responseData = await response.json();
      dispatch({ type: USER_LOGIN_SUCCESS, payload: responseData });
      localStorage.setItem("loggedInUser", JSON.stringify(responseData));
    }
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("loggedInUser");
  dispatch({ type: USER_LOGOUT });
};

export const registerUser =
  (name, email, phone, password) => async (dispatch) => {
    const formData = {
      name,
      email,
      phone,
      password,
    };
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const response = await fetch("https://mynoteapp.onrender.com//api/users", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // body data type must match "Content-Type" header
      });
      if (!response.ok) {
        throw new Error("Email already exists !");
      } else {
        const responseData = await response.json();
        dispatch({ type: USER_REGISTER_SUCCESS, payload: responseData });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: responseData });
      }
    } catch (err) {
      console.log(err);
    }
  };
