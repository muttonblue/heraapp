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
      return action.login;
    default:
      return state;
  }
};
