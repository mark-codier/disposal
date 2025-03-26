import { redirect } from "react-router-dom";

export default async function patchEvent({ request, params:{eventId} }) {
  console.log(request)
  const dataForm = await request.formData();
  const body = {
    title: dataForm.get("title"),
    description: dataForm.get("description"),
    date: dataForm.get("date"),
    image: dataForm.get("image"),
  };
  let url = "http://localhost:8080/events"
  if(request.method == 'PATCH'){
    url = `http://localhost:8080/events/${eventId}`
  }
  try {
    const response = await fetch(url, {
      method: request.method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return redirect("/events");
  } catch (error) {
    console.error(error);
  }
}

