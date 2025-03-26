import { Suspense } from "react";
import { Link, useLoaderData, Await } from "react-router-dom";
export default function EventsPage() {
  const { events } = useLoaderData();
  //используется для того чтобы достать ближайщий loader key
 return (
    <div className="max-w-lg my-10 mx-auto border-2 rounded-xl bg-white p-10">
      <h1 className="text-2xl font-semibold mb-4">Events</h1>
      <ul className="list-disc space-y-2">
        <Suspense fallback={<p>Loading...</p>}>
          <Await resolve={events}>
            {(loadedEvents) => {
              return (
                <>
                  {loadedEvents.map((item) => (
                    <li key={item.id} className="flex items-center">
                      <Link
                        relative="path"
                        to={item.id}
                        className="text-gray-800 mr-4"
                      >
                        {item.title}
                      </Link>
                      {/* Add more event details conditionally (e.g., date, time) */}
                    </li>
                  ))}
                </>
              );
            }}
          </Await>
        </Suspense>
      </ul>
    </div>
  );
}
//usesubmit
//usefetcher
//Await
//Suspense
//defer
