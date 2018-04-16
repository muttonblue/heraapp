import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "react-router-redux";
import rootReducer from "../reducers";

const thunk = store => next => action =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);

const promise = store => {
  const next = store.dispatch;
  return action => {
    if (typeof action.then === "function") return action.then(next);
    return next(action);
  };
};

export default history => {
  const middlewares = [thunk, routerMiddleware(history)];

  process.env.NODE_ENV !== "production"
    ? middlewares.push(createLogger())
    : console.info("[redux-logger]:::production mode");

  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  // store.dispatch = promise(store)

  if (module.hot) {
    System.import("../reducers").then(nextRootReducer =>
      store.replaceReducer(nextRootReducer.default)
    );
  }

  return store;
};
