
import { Outlet } from "react-router-dom";
import EventsNavigation from "./EventsNavigation";
export default function EventsLayout() {
  return (
    <div
      style={{
        height: "100%",
      }}>
      <EventsNavigation/>
      <Outlet />
    </div>
  );
}
