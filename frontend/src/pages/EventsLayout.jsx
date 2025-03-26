
import { Outlet } from "react-router-dom";
import EventsNavigation from "./EventsNavigation";
import { useState } from "react";
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
