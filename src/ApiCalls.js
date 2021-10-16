

import axios from "axios";

export const LoginCall = async (userDetails, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("https://msaadaproject.herokuapp.com/api/login", userDetails);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.userdetails });
   
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err});
  }
};