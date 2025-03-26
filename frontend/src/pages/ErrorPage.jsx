import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();
  const errMessage = JSON.parse(error.data);

  let title;
  let message;
  if (error.status === 500) {
    title = "There is a problem with connection";
    message = "Please go home and try again";
  } else if (error.status === 401) {
    console.log(error.data);

    title = "There is a problem with auth";
    message = errMessage.message;
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
