import {
  Link,
  useRouteLoaderData,
  // useParams,
  useSubmit,
} from "react-router-dom";
// import { useState, useEffect } from "react";
// import getEvents from "../helpers/backendDeals/getEvents";
// import removeEvent from "../helpers/backendDeals/removeEvent";
export default function EventDetailPage() {
  const submit = useSubmit();
  const token = useRouteLoaderData('root');
  const { event } = useRouteLoaderData("event-details");
  // console.log(event);
  const handleRemove = () => {
    const confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      submit(null, { method: "delete" });
    }
  };
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
         {token && <><button onClick={handleRemove}>Delete this event</button>
          <br />
          <Link to={"edit"}>Edit this event</Link>
          </>}
          {!token && <Link to={'../../auth'}>Sign up</Link>}
        </div>
      ) : (
        <p>Loading event...</p>
      )}
    </div>
  );
}
