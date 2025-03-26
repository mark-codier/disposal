import { Link, useLoaderData } from "react-router-dom";
export default function EventsPage() {
  const events = useLoaderData();
  //используется для того чтобы достать ближайщий loader key

  return (
    <div className="max-w-lg my-10 mx-auto border-2 rounded-xl bg-white p-10">
      <h1 className="text-2xl font-semibold mb-4">Events</h1>
      {events.length > 0 ? (
        <ul className="list-disc space-y-2">
          {events.map((item) => (
            <li key={item.id} className="flex items-center">
              <Link relative="path" to={item.id} className="text-gray-800 mr-4">
                {item.title}
              </Link>
              {/* Add more event details conditionally (e.g., date, time) */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading events...</p>
      )}
    </div>
  );
}
