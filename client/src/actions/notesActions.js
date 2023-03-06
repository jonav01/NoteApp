import {
  NOTE_LIST_FAIL,
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
} from "../constants/noteConstants";

export const listNotes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: NOTE_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      method: "GET",
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const res = await fetch("/api/notes", config);
    if (res.ok) {
      dispatch({ type: NOTE_LIST_SUCCESS, payload: await res.json() });
    } else {
      res.status(401);
      throw new Error("Your id is not authorized");
    }
  } catch (err) {
    const message =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    dispatch({
      type: NOTE_LIST_FAIL,
      payload: message,
    });
  }
};
