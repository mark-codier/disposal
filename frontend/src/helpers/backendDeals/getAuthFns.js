import { redirect } from "react-router-dom";
import { deleteToken, expiredTimeOut, getTime } from "./setToken";
export function getAuthToken() {
  return localStorage.getItem("authToken");
}
export function loader() {
  if (localStorage.getItem("tokenExpired")) {
    expiredTimeOut();
    const time = getTime()
    if((localStorage.getItem('tokenExpired') - time) <= 0){
    deleteToken()
}
  }
  return { token: getAuthToken() };
}
export function checkAuth() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  } else {
    return 0;
  }
} //Cheackauth did not work due to absence of return(2)
