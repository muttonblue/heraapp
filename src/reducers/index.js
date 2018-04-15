import { combineReducers } from "redux";
import login from "./login";
import pages from "./pages";
import flashMessage from "./flashMessage";
import users from "./users";

export default combineReducers({
  login,
  pages,
  flashMessage,
  users
});
