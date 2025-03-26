import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Layout from "./pages/Layout";
import EventsLayout from "./pages/EventsLayout";
import getEvents from "./helpers/backendDeals/getEvents";
import ErrorPage from "./pages/ErrorPage";
import postEvent from "./helpers/backendDeals/postEvent";
import getEventsDetails from "./helpers/backendDeals/getEventDetails";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <ErrorPage />,
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
              loader: getEvents, //запускается до рендеринга компонента
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: postEvent,
            },
            {
              path: ":eventId",
              id:'event-details',
              loader: getEventsDetails,
              children:[
                {
                  index:true, 
                  element: <EventDetailPage />,
                },
                {
                  path:'edit',
                  element: <EditEventPage />,
                  action: postEvent
                }
              ]
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
