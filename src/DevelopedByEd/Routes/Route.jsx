import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DefaultLayout from "../Layout/DefaultLayout";
import MovieDetails from "../pages/MovieDetails";
import { TestingPage } from "../pages/TestingPage";
import { NotFound } from "../pages/NotFound";
import { Logout } from "../pages/Logout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
      },
      {
        path: "/popular",
        element: <TestingPage />,
      },
      {
        path: "/recommended",
        element: <TestingPage />,
      },
    ],
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/testing",
    element: <TestingPage />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
