import { json, redirect } from "react-router-dom";
import { getAuthToken } from "./getAuthFns";
export default async function removeEvent({ params }) {
  console.log(params);

  const token = getAuthToken();
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventId,
    {
      method: "delete",
      //   body: JSON.stringify(event)
      headers: {
        'Authorization' : `Bearer ${token}`,
      },
    }
  );
  const res = response.message;
  console.log(res);

  if (response.status === 401) {
    console.error(1);
    throw new Response(JSON.stringify({ message: "Auth error occured!" }), {
      status: 401,
    });
  }
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "An error occured!" }), {
      status: 500,
    });
  }

  return redirect("/events");
}
