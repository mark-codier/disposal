import { json, redirect } from "react-router-dom";
import setToken from "./setToken";
export default async function authFn({ request }) {
  const dataForm = await request.formData();
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");
  const body = {
    email: dataForm.get("email"),
    password: dataForm.get("password"),
  };
  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user" }, { status: 500 });
  }

  // saving tokens
  const responseData = await response.json();
  // localStorage.setItem("authToken", responseData.token);
  setToken(responseData.token)
  return redirect("/");
}
