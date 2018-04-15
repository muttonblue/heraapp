import fetch from "isomorphic-fetch";
import { USERS_ENDPOINT } from "../../constants/endpoints";

const clearPages = dispatch => {
  return dispatch => {
    dispatch({ type: "CLOSE_ALERT", flashMessage: { msg: "", type: "" } });
    dispatch({ type: "CLEAR_PAGES", pages: [] });
  };
};
const loadPages = () => {
  return dispatch => {
    dispatch({
      type: "LOAD_PAGES_REQUEST",
      flashMessage: { msg: "loading...", type: "INFO" }
    });

    fetch(USERS_ENDPOINT)
      .then(response => response.json())
      .then(
        pages =>
          dispatch({
            type: "LOAD_PAGES_SUCCESS",
            pages,
            flashMessage: { msg: "ทำการค้นหาเรียบร้อย", type: "ERROR" }
          }),
        error =>
          dispatch({
            type: "LOAD_PAGES_FAILURE",
            flashMessage: { msg: "ERROR", type: "ERROR" }
          })
      );
  };
};

const signIn = login => {
  login.username = "muttonblue";
  login.isLogin = true;
  login.fullname = "John Rambo";
  return dispatch => {
    dispatch({
      type: "LOAD_PAGES_REQUEST",
      flashMessage: { msg: "loading...", type: "INFO" }
    });

    dispatch({ type: "LOGIN/SIGN", login });
    dispatch({
      type: "LOAD_PAGES_SUCCESS",
      pages: [],
      flashMessage: { msg: "ทำการค้นหาเรียบร้อย", type: "ERROR" }
    });
  };
};
const signIn_ = login => {
  console.log("login::Action::", login);
  login.username = "muttonblue";
  login.isLogin = true;
  login.fullname = "John Rambo";
  return { type: "LOGIN/SIGN", login };
};

const signOut = () => {};

export { signIn, signOut };
