import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import login from "./login";
import pages from "./pages";
import flashMessage from "./flashMessage";
import users from "./users";

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  login,
  pages,
  flashMessage,
  users
});
