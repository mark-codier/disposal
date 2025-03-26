import { defer } from "react-router-dom";

export default async function getEvents() {
  try {
    const response = await fetch("http://localhost:8080/events", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data.events; // Return only the events data
  } catch (error) {
    console.error(error);
    // json --- это реак роутера хелпер который достает обьект из ошибки
    // return json({ message: "Error loading events!" }, { status: 500 });
    throw new Response(JSON.stringify({ message: "An error occured!" }), {
      status: 500,
    });
  }
}

export function getEventsDefer() {
  return defer({
    events: getEvents(),
  });
}
