import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>404</h1>
      <p>{error.status}</p>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
