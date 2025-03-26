import { redirect } from "react-router-dom";

export default function logout(){
    console.log(localStorage.getItem('authToken'))
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpired')
    return redirect('/')
}