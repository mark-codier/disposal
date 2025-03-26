import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import { useState } from "react";
export default function Layout() {
  const [state, setState] = useState(false);
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  //state =
  // idle - default state
  // loading - when we go to other path while loading some data
  function scrimer() {
    setState((state) => !state);
    setTimeout(() => {
      setState((state) => !state);
    }, 50);
  }
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: state
          ? "url(https://www.factroom.ru/wp-content/uploads/2022/10/cover-screamer.jpg)"
          : "url(pandaBear.jpg)",
      }}
      className="bg-fixed"
    >
      <MainNavigation scrimer={scrimer} />
      {loading && <p className="text-[10rem] text-center">Загрузка...</p>}
      <Outlet />
    </div>
  );
}
