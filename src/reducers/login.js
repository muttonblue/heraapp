const initialState = {
  isLogin: false,
  username: "",
  fullname: "",
  email: "",
  config: { permission: {}, denied: "" }
};

export default (state = initialState, action) => { 
  switch (action.type) {
    case "LOGIN/SIGN":
      console.log("action:: ", action.login);
      return action.login;
    default:
      return state;
  }
};
