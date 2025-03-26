export function getTime() {
  const date = new Date();
  return date.getTime();
}
export default function setToken(token) {
    localStorage.setItem("authToken", token);
    const dateTime = getTime();
    const hour = 3600000; // three millions six hundred thousand
    const expiredTime = dateTime + hour; 
    localStorage.setItem("tokenExpired", expiredTime);
}
export function expiredTimeOut() {
    const time = getTime();
    const differTime = localStorage.getItem("tokenExpired") - time;
    const tokenTimeOut = localStorage.getItem("authToken");
    setTimeout(() => {
      if (localStorage.getItem("authToken") === tokenTimeOut) {
        deleteToken()
      }
    }, differTime);
}
export function deleteToken(){
    localStorage.removeItem("authToken");
    localStorage.removeItem("tokenExpired");
    location.reload();
}