import { Link, useRouteLoaderData, useParams } from "react-router-dom";
import removeEvent from "../helpers/backendDeals/removeEvent";
export default function EventDetailPage() {
  const event = useRouteLoaderData('event-details');
  const { eventId } = useParams(); // Get event ID from URL params
  function handleRemove() {
    removeEvent(eventId);
  }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const fetchedEvents = await getEvents(); // Assuming `getEvents` fetches all events
  //       const foundEvent = fetchedEvents.find((item) => item.id == eventId); // Find event by ID
  //       setEvent(foundEvent); // Update state with the specific event
  //     } catch (error) {
  //       console.error(error);
  //       // Handle potential errors during fetching
  //     }
  //   };

  //   fetchData();
  // }, [eventId]); // Run effect only when `eventId` changes

  return (
    <div className="max-w-lg my-10 mx-auto border-2 rounded-xl bg-white p-10">
      {event ? ( // Render event details only if event is found
        <div className="event-details bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-semibold mb-4">{event.title}</h1>
          <img
            src={event.image}
            alt={event.title}
            className="w-full rounded-lg mb-4"
          />
          <div className="grid grid-cols-1 gap-4">
            <p className="text-gray-700">
              <span className="font-bold">Date:</span> {event.date}
            </p>
            <p className="text-gray-700">{event.description}</p>
          </div>
          <button className="m-4 text-red-400" onClick={handleRemove}>Delete this event</button>
          <Link className="m-4 text-ambed-400" to={'edit'}>Edit this event</Link>
        </div>
      ) : (
        <p>Loading event...</p>
      )}
    </div>
  );
}
