import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import getEvents from "../helpers/backendDeals/getEvents";
const isActiveCSS = "text-white border-gray-100";
const isPendingCSS =
  "text-gray-400  hover:border-gray-400 border-gray-500 hover:text-gray-400";
export default function EventsNavigation() {
  const [events, setEvents] = useState([]); // Use specific state name
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedEvents = await getEvents();
        setEvents(fetchedEvents); // Update state with fetched data
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <header>
      <nav className=" border-gray-900 px-4 py-2.5 bg-gray-600 border-y-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://github.com/4rchi-nv/" className="flex items-center">
            <img
              style={{ height: "4rem" }}
              src="https://cool.klev.club/uploads/posts/2024-04/cool-klev-club-syzo-p-prikolnie-kartinki-kotik-ustal-4.jpg"
              className="mr-3 h-9 border-gray-400 border-2 rounded-md"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              - Ya pizdec kak ustal(10:00 - 17:23) -
            </span>
            <img
              style={{ height: "4rem" }}
              src="https://cool.klev.club/uploads/posts/2024-04/cool-klev-club-syzo-p-prikolnie-kartinki-kotik-ustal-4.jpg"
              className="m-4 mr-3 h-9 border-gray-400 border-2 rounded-md"
              alt="Flowbite Logo"
            />
          </a>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            {events.length > 0 ? (
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {events.map((item) => (
                  <li key={item.id} className="flex items-center">
                      <NavLink
                        to={`/events/${item.id}`}
                        relative="route"
                        className={({ isActive }) => {
                          return `block py-2 pr-4 pl-3 border-2 rounded-xl ${
                            isActive ? isActiveCSS : isPendingCSS
                          }`;
                        }}
                        end
                      >
                        {item.title}
                      </NavLink>
                    {/* Add more event details conditionally (e.g., date, time) */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading events...</p>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
