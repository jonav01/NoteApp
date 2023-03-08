import {
  NOTE_LIST_FAIL,
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
  NOTE_CREATE_SUCCESS,
  NOTE_CREATE_REQUEST,
  NOTE_CREATE_FAIL,
  NOTE_UPDATE_SUCCESS,
  NOTE_UPDATE_REQUEST,
  NOTE_UPDATE_FAIL,
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

export const createNote =
  (title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTE_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const newNote = { title, content, category };
      const config = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify(newNote),
      };

      const res = await fetch("/api/notes/create", config);
      if (res.ok) {
        const responseData = await res.json();
        console.log(responseData);
        dispatch({ type: NOTE_CREATE_SUCCESS, payload: await res.json() });
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
        type: NOTE_CREATE_FAIL,
        payload: message,
      });
    }
  };
export const updateNote =
  (id,title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTE_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const updatedNote = { title, content, category };
      const config = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify(updatedNote),
      };

      const res = await fetch(`/api/notes/${id}`, config);
      if (res.ok) {
        const responseData = await res.json();
        dispatch({ type: NOTE_UPDATE_SUCCESS, payload: await res.json() });
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
        type: NOTE_UPDATE_FAIL,
        payload: message,
      });
    }
  };

  export const deleteNote =
  (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: NOTE_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const res = await fetch(`/api/notes/${id}`, config);
      if (res.ok) {
        const responseData = await res.json()
        console.log(responseData)
        dispatch({ type: NOTE_UPDATE_SUCCESS, payload: await res.json() });
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
        type: NOTE_UPDATE_FAIL,
        payload: message,
      });
    }
  };
