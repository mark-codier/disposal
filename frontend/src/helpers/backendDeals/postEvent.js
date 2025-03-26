import { json, redirect } from "react-router-dom";
import { getAuthToken } from "./getAuthFns";
export default async function postEvent({ request, params }) {
  const method = request.method;
  const dataForm = await request.formData();
  const token = getAuthToken()
  const body = {
    title: dataForm.get("title"),
    description: dataForm.get("description"),
    date: dataForm.get("date"),
    image: dataForm.get("image"),
  };
  let url = "http://localhost:8080/events/";
  if (method === "PATCH") {
    url += params.eventId;
  }
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    });
    // console.log(response);
    if (response.status == 422) {
      // console.log("if is succeeded");
      return 422;
    } else {
      return redirect("/events");
    }
  } catch (error) {
    console.error(error);
    throw json({ message: "Error sending event" }, { status: 500 });
  }
}
