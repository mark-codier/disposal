import { NavLink, useRouteLoaderData } from "react-router-dom";
// import { useState, useEffect } from "react";
// import getEvents from "../helpers/backendDeals/getEvents";
const isActiveCSS = "text-white border-gray-100";
const isPendingCSS =
  "text-gray-400  hover:border-gray-400 border-gray-500 hover:text-gray-400";
export default function EventsNavigation() {
  const token = useRouteLoaderData('root');
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
              - Events Navigation -
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
            <NavLink
              to="/events"
              className={({ isActive }) => {
                return `block py-2 mx-4 pr-4 pl-3 border-2 rounded-xl ${
                  isActive ? isActiveCSS : isPendingCSS
                }`;
              }}
              end
            >
              All Events
            </NavLink>
            {token && <NavLink
              to="/events/new"
              className={({ isActive }) => {
                return `block py-2 mx-4 pr-4 pl-3 border-2 rounded-xl ${
                  isActive ? isActiveCSS : isPendingCSS
                }`;
              }}
            >
              New event
            </NavLink>}
          </div>
        </div>
      </nav>
    </header>
  );
}
