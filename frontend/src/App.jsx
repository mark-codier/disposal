import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Layout from "./components/Layout";
import EventsLayout from "./components/EventsLayout";
import { getEventsDefer } from "./helpers/backendDeals/getEvents";
import ErrorPage from "./pages/ErrorPage";
import postEvent from "./helpers/backendDeals/postEvent";
import getEventDetails from "./helpers/backendDeals/getEventDetails";
import removeEvent from "./helpers/backendDeals/removeEvent";
import NewsletterPage from "./pages/NewsLetterPage";
import { signupForNewsletter } from "./helpers/backendDeals/signupForNewsletter";
import AuthPage from "./pages/AuthPage";
import authFn from "./helpers/backendDeals/authentication";
import logout from "./helpers/backendDeals/logOut";
// !!!!!!!!!!!!!!!!!!!!!!!!!!! AS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { checkAuth, loader as tokenLoader } from "./helpers/backendDeals/getAuthFns";
// !!!!!!!!!!!!!!!!!!!!!!!!!!! AS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      loader: tokenLoader,
      id: 'root',
      children: [
        {
          path: "/Home",
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventsLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: getEventsDefer, //запускается до рендеринга компонента
            },
            {
              path: ":eventId",
              loader: getEventDetails,
              id: "event-details",
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: removeEvent,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: postEvent,
                  loader: checkAuth
                },
              ],
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: postEvent,
              loader: checkAuth,
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: signupForNewsletter,
        },
        {
          path: "auth",
          element: <AuthPage />,
          action: authFn,
        },
        {
          path:'logout',
          action: logout
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
