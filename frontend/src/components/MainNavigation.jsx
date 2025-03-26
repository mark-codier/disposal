import { NavLink, useActionData, Form, useRouteLoaderData } from "react-router-dom";
import NewsletterSignup from "./NewsLetterSignup";
const isActiveCSS = "text-white border-gray-100";
const isPendingCSS =
  "text-gray-400  hover:border-gray-400 border-gray-500 hover:text-gray-400";
export default function MainNavigation(){
  const {token} = useRouteLoaderData('root');

  return (
    <header>
      <nav className=" border-gray-200 px-4 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://github.com/4rchi-nv/" className="flex items-center">
            <img
              src="https://masterpiecer-images.s3.yandex.net/0fe44c9b555a11eea39f8e3ad859c919:upscaled  "
              className="mr-3 h-9 border-gray-400 border-2 rounded-md"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              - Main Navigation -
            </span>
            <img
              src="https://masterpiecer-images.s3.yandex.net/0fe44c9b555a11eea39f8e3ad859c919:upscaled  "
              className="m-4 mr-3 h-9 border-gray-400 border-2 rounded-md"
              alt="Flowbite Logo"
            />
          </a>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/Home"
                  className={({ isActive }) => {
                    return `block py-2 pr-4 pl-3 border-2 rounded-xl ${
                      isActive ? isActiveCSS : isPendingCSS
                    }`;
                  }}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) => {
                    return `block py-2 pr-4 pl-3 border-2 rounded-xl ${
                      isActive ? isActiveCSS : isPendingCSS
                    }`;
                  }}
                  end
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/newsletter"
                  className={({ isActive }) => {
                    return `block py-2 pr-4 pl-3 border-2 rounded-xl ${
                      isActive ? isActiveCSS : isPendingCSS
                    }`;
                  }}
                >
                  Newsletter
                </NavLink>
              </li>
            {!token && <li>
                <NavLink
                  to="/auth?mode=signup"
                  className={({ isActive }) => {
                    return `block py-2 pr-4 pl-3 border-2 rounded-xl ${
                      isActive ? isActiveCSS : isPendingCSS
                    }`;
                  }}
                >
                  Auth
                </NavLink>
              </li>}
            {token && <li>
                <Form
                  action='/logout'
                  method='POST'
                  className={`block py-2 pr-4 pl-3 border-2 rounded-xl ${isPendingCSS}`}
                >
                  <button>Log out</button>
                </Form>
              </li>}
              <NewsletterSignup />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
