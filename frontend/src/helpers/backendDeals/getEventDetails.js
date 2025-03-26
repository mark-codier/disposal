export default async function getEventsDetails({ request, params: {eventId: id} }) {
    try {
      const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data.event; // Return only the events data
    } catch (error) {
      console.error(error);
      // json --- это реак роутера хелпер который достает обьект из ошибки
      // return json({ message: "Error loading events!" }, { status: 500 });
      throw new Response(JSON.stringify({ message: "An error occured!" }), {
        status: 500,
      });
    }
  }