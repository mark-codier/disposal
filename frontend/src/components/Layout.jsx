import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
export default function Layout() {
  // const navigation = useNavigation();
  // const loading = navigation.state === "loading";
  //state =
  // idle - default state
  // loading - when we go to other path while loading some data
  return (
    <div
      style={{
        minHeight: "100vh",
      }}
      className="bg-fixed"
    >
      <MainNavigation />
      {/* {loading && <p className="text-[10rem] text-center">Загрузка...</p>} */}
      <Outlet />
    </div>
  );
}
