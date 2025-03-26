import { useRouteError } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();
  let title;
  let message;
  if (error.status === 500) {
    title = "There is a problem with connection";
    message = "Please go home and try again";
  } else {
    title = "404 Error";
    message = "There is no route like this";
  }
  return (
    <>
      <MainNavigation />
      <h1 className="text-[15rem] text-center">{title}</h1>
      <p className="text-[10rem] text-center">{message}</p>
    </>
  );
}
